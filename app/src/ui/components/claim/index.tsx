import React, { FC, useState, useEffect } from 'react';
import { utils, getDefaultProvider } from 'ethers';
import { BaseProvider } from '@ethersproject/providers/lib';
import { Flex, Box, Spinner } from '@chakra-ui/core';

// Types
import { AirdropEventData } from 'lib/types';

// Hooks
import { useEvents } from 'lib/hooks/useEvents';
import { useStateContext } from 'lib/hooks/useCustomState';

// Components
import AddressForm from './AddressForm';
import BadgeHolder from './BadgeHolder';
import Transactions from './Transactions';

import CardWithBadges from 'ui/components/CardWithBadges';

// Types
import { Transaction, PoapEvent } from 'lib/types';
type ClaimProps = {
  event: AirdropEventData;
};

const Claim: FC<ClaimProps> = ({ event }) => {
  const { account } = useStateContext();
  // Query hooks
  const { data: events } = useEvents();

  const [poapsToClaim, setPoapsToClaim] = useState<PoapEvent[]>([]);
  const [provider, setProvider] = useState<BaseProvider | null>(null);
  const [address, setAddress] = useState<string>(account);
  const [ens, setEns] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [addressValidated, setAddressValidated] = useState<boolean>(false);
  const [validatingAddress, setValidatingAddress] = useState<boolean>(false);
  const [addressClaims, setAddressClaims] = useState<number[]>([]);
  const transactions: Transaction[] = [];

  const handleInputChange = (value: string) => {
    setAddress(value);
  };
  const handleSubmit = async () => {
    setEns('');
    setValidatingAddress(true);

    if (!provider) {
      setError('No connection to the Ethereum network');
      setValidatingAddress(false);
      return;
    }

    // Check if is valid address
    if (!utils.isAddress(address)) {
      const resolvedAddress = await provider.resolveName(address);
      if (!resolvedAddress) {
        setError('Please enter a valid Ethereum address or ENS Name');
        setValidatingAddress(false);
        return;
      }
      setEns(address);
      setAddress(resolvedAddress);
    } else {
      setAddress(utils.getAddress(address));
    }

    // Check if is in event list
    if (!(address.toLowerCase() in event.addresses)) {
      setError('Address not found in claim list');
      setValidatingAddress(false);
      return;
    }

    setValidatingAddress(false);
    setAddressValidated(true);
    setAddressClaims(event.addresses[address.toLowerCase()]);
  };

  const clearForm = () => {
    setAddress('');
    setEns('');
    setError('');
    setAddressClaims([]);
    setAddressValidated(false);
  };

  // Effects
  useEffect(() => {
    if (!provider) {
      try {
        let _provider = getDefaultProvider(process.env.GATSBY_ETHEREUM_NETWORK, {
          etherscan: process.env.GATSBY_ETHERSCAN_KEY,
          infura: process.env.GATSBY_INFURA_KEY,
        });
        setProvider(_provider);
      } catch (e) {
        console.log('Error while initiating provider');
      }
    }
  }, []); //eslint-disable-line
  useEffect(() => {
    if (account) setAddress(account);
  }, [account]); //eslint-disable-line
  useEffect(() => {
    if (events) {
      let _poapsToClaim = events.filter((ev) => event.eventIds.indexOf(ev.id) > -1);
      setPoapsToClaim(_poapsToClaim);
    }
  }, [events]); //eslint-disable-line

  if (!events) {
    return (
      <Box maxW={['90%', '90%', '90%', '600px']} m={'0 auto'} p={'50px 0'}>
        <CardWithBadges>
          <Box h={250} textAlign={'center'}>
            <Spinner size="xl" color={'gray.light'} mt={'100px'} />
          </Box>
        </CardWithBadges>
      </Box>
    );
  }

  return (
    <Box maxW={['90%', '90%', '90%', '600px']} m={'0 auto'} p={'50px 0'}>
      {!addressValidated && (
        <CardWithBadges>
          <AddressForm
            address={address}
            error={error}
            inputAction={handleInputChange}
            submitAction={handleSubmit}
            buttonDisabled={validatingAddress}
          />
        </CardWithBadges>
      )}
      {addressValidated && (
        <CardWithBadges>
          <BadgeHolder
            backAction={clearForm}
            ens={ens}
            address={address}
            claims={addressClaims}
            poaps={poapsToClaim}
          />
        </CardWithBadges>
      )}
      <Transactions transactions={transactions} />
    </Box>
  );
};

export default Claim;

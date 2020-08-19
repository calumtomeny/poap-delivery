import React, { FC, useState, useEffect } from 'react';
import { utils, getDefaultProvider } from 'ethers';
import { Box } from '@chakra-ui/core';

// Types
import { AirdropEventData } from 'lib/types';

// Hooks
import { useStateContext } from 'lib/hooks/useCustomState';

// Components
import AddressForm from './AddressForm';
import BadgeHolder from './BadgeHolder';
import Transactions from './Transactions';

import CardWithBadges from 'ui/components/CardWithBadges';

// Types
import { Transaction } from 'lib/types';
type ClaimProps = {
  event: AirdropEventData;
};

const Claim: FC<ClaimProps> = ({ event }) => {
  const { account } = useStateContext();

  const [address, setAddress] = useState<string>(account);
  const [ens, setEns] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [addressValidated, setAddressValidated] = useState<boolean>(false);
  const [validatingAddress, setValidatingAddress] = useState<boolean>(false);
  const transactions: Transaction[] = [];

  const provider = getDefaultProvider(process.env.GATSBY_ETHEREUM_NETWORK, {
    etherscan: process.env.GATSBY_ETHERSCAN_KEY,
    infura: process.env.GATSBY_INFURA_KEY,
  });

  const handleInputChange = (value: string) => {
    setAddress(value);
  };
  const handleSubmit = async () => {
    setEns('');
    setValidatingAddress(true);

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
  };

  const clearForm = () => {
    setAddress('');
    setEns('');
    setError('');
    setAddressValidated(false);
  };

  // Effects
  useEffect(() => {
    if (account) setAddress(account);
  }, [account]);

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
          <BadgeHolder backAction={clearForm} ens={ens} address={address} />
        </CardWithBadges>
      )}
      <Transactions transactions={transactions} />
    </Box>
  );
};

export default Claim;

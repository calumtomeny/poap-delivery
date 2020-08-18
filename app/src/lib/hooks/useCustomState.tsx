import { useState, useEffect } from 'react';
import constate from 'constate';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
// @ts-ignore
import WalletConnectProvider from '@walletconnect/web3-provider';

// Hooks
import { usePoaps } from 'lib/hooks/usePoaps';

const useCustomState = () => {
  // Web3Modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.GATSBY_INFURA_KEY,
      },
    },
  };
  const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions,
  });

  // State
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState<string>('');
  const [provider, setProvider] = useState<any>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const { data: poaps, isLoading: isFetchingPoaps } = usePoaps({ account });

  // Effects
  useEffect(() => {
    if (!isConnected && web3Modal && web3Modal.cachedProvider) {
      connectWallet();
    }
  }, [isConnected]); //eslint-disable-line

  // Functions
  const connectWallet = async () => {
    try {
      const _provider = await web3Modal.connect();
      const _web3: Web3 = new Web3(_provider);
      setWeb3(_web3);
      setIsConnected(true);
      setProvider(_provider);

      // TODO - review why _web3.eth.getAccounts() is not working
      let _account = '';
      if (_provider.selectedAddress) {
        _account = _provider.selectedAddress;
        setAccount(_account);
      }
      if (_provider.accounts) {
        _account = _provider.accounts[0];
        setAccount(_account);
      }
    } catch (e) {
      console.log('Error > Connecting wallet');
      console.log(e);
    }
  };
  const disconnectWallet = () => {
    try {
      // @ts-ignore
      web3?.currentProvider.close();
    } catch (e) {
      console.log('Error disconnecting wallet');
      console.log(e);
    }
    web3Modal.clearCachedProvider();
    setWeb3(null);
    setIsConnected(false);
    setAccount('');
  };

  return {
    web3,
    connectWallet,
    disconnectWallet,
    isConnected,
    account,
    poaps,
    provider,
    isFetchingPoaps,
  };
};

const [StateProvider, useStateContext] = constate(useCustomState);

export { StateProvider, useStateContext };

const ETHERSCAN_URL =
  process.env.GATSBY_ETHEREUM_NETWORK === 'homestead'
    ? 'https://etherscan.io'
    : `https://${process.env.GATSBY_ETHEREUM_NETWORK}.etherscan.io`;
const POAP_CONTRACT = process.env.GATSBY_POAP_CONTRACT;

export const etherscanLinks = {
  address: (address: string | number) => `${ETHERSCAN_URL}/address/${address}`,
  blocks: (address: string | number) => `${ETHERSCAN_URL}/blocks/${address}`,
  transaction: (tx: string) => `${ETHERSCAN_URL}/tx/${tx}`,
  poap: (id: string | number) => `${ETHERSCAN_URL}/token/${POAP_CONTRACT}?a=${id}#inventory`,
  addressPoapInventory: (address: string) =>
    `${ETHERSCAN_URL}/token/${POAP_CONTRACT}?a=${address}#inventory`,
};

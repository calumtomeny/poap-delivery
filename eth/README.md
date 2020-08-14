# 🎖 POAP Medalla Chain Validators Airdrop - Smart contract 🎖

## Setup ##
This project uses [buidler](https://buidler.dev) to compile, test and deploy the contracts.

Install dependencies
```
yarn install
```


## Useful commands ##

```bash
yarn compile        # Compile contract
yarn chain          # Run a local network
yarn test           # Run tests
```

### Deploy ###
Copy of `.env.template` to `.env` and complete with your variables before running the script below
```bash
npx buidler run scripts/deploy.js
```

#### Verifying the contract ####
Used [solidity-flattner](https://github.com/BlockCatIO/solidity-flattener) with the following command
```bash
solidity_flattener contracts/PoapDelegatedMint.sol --solc-paths="@openzeppelin/=$(pwd)/node_modules/@openzeppelin/" --output PoapDelegatedMintFlattened.sol
```

## Deployed contracts ##
 - Mainnet: [](https://etherscan.io/address/)
 - Ropsten: [0x6ffc6bC69Ce4605ee1729D928504Cd71b08cC624](https://ropsten.etherscan.io/address/0x6ffc6bC69Ce4605ee1729D928504Cd71b08cC624)


## Going live ##
Before going live, it's necessary to:
- [] Add the deployed address contract as a POAP event minter

# 🎖 POAP Delivery Airdrop - Smart contract 🎖

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

## Deployed contracts ##
### YAM Heroes ###
 - Mainnet: [0x4ed27580F2B93A3EFD37F8Dcf7dbA28e117C362C](https://etherscan.io/address/0x4ed27580F2B93A3EFD37F8Dcf7dbA28e117C362C)
 - Ropsten: [0xf93abE4adf2A346f1E9aC9F508e7389279b64bBC](https://ropsten.etherscan.io/address/0xf93abE4adf2A346f1E9aC9F508e7389279b64bBC)


## Going live ##
Before going live, it's necessary to:
- [x] Add the deployed address contract as a POAP event minter

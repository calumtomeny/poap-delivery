require('dotenv').config();
const { getEnvVariable } = require("../utils");
const { MerkleTree } = require("../../merkle-tree");

async function main() {
  // Deploy variables
  const network = getEnvVariable('NETWORK');
  const poapContractAddress = getEnvVariable('POAP_ADDRESS');
  const privateKey = getEnvVariable('PK_DEPLOYER');

  const tree = new MerkleTree('../addresses.json');
  const rootHash = tree.getRoot();
  console.log("Merkle tree root hash:", rootHash);

  let provider = network === 'localhost' ? new ethers.providers.JsonRpcProvider('http://localhost:9545') : new ethers.getDefaultProvider(network);
  const deployer = new ethers.Wallet(privateKey, provider);

  console.log("Deploying the contracts with the account:", await deployer.getAddress());

  const MedallaPoapAirdrop = await ethers.getContractFactory("MedallaPoapAirdrop", deployer);
  const contract = await MedallaPoapAirdrop.deploy(poapContractAddress, rootHash);
  await contract.deployed();

  console.log("Contract address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

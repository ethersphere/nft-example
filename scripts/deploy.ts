import { ethers } from "hardhat";

async function main() {
  const BeeNFTFactory = await ethers.getContractFactory("BeeNFT");
  const BeeNFT = await BeeNFTFactory.deploy();
  await BeeNFT.deployed();
  console.log("success! deployed NFT contract with address: ", BeeNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

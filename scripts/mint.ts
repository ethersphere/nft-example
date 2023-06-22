import { ethers } from "hardhat";
import { Bee } from "@ethersphere/bee-js";
import * as fs from "fs";

const BEE_URL = "http://localhost:1633";
const TOKEN_ADDRESS = "0x..."; 
const TO_ADDRESS = "0x...";
const TOKEN_ID = 0;
const POSTAGE_BATCH_ID = "..."; //no 0x prefix required

const FILE_NAME = "bee.png";
const TOKEN_IMAGE_PATH = "./resources/" + FILE_NAME;
const TOKEN_META = {
  description: "Ambitious Bee that enjoys space travel and flamethrowers.",
  image: "", //we will add this later
  name: "Beelon Musk",
  attributes: [
    {
      trait_type: "Rank",
      value: "Worker",
    },
    {
      trait_type: "Buzz",
      value: 5,
    },
    {
      trait_type: "Speed",
      value: 3,
    },
  ],
};
const META_FILE_NAME = "meta.json";

async function main() {

  // upload the NFT image to Swarm
  var fileContents = fs.readFileSync(TOKEN_IMAGE_PATH);

  let bee = new Bee(BEE_URL);

  let response;

  try {
    response = await bee.uploadFile(POSTAGE_BATCH_ID, fileContents, FILE_NAME, {
      pin: true,
    });
    console.log("uploaded image, reference:", response.reference);
  } catch (error: any) {
    throw error;
  }

  //create url for NFT image using returned Swarm address
  const imageURI =
    BEE_URL + "/bzz/" + response.reference + "/" + FILE_NAME;

  //append the image path to metadata object
  const tokenMeta = TOKEN_META;
  tokenMeta.image = imageURI;

  //upload NFT metadata to Swarm
  let response2;

  try {
    response2 = await bee.uploadFile(
      POSTAGE_BATCH_ID,
      JSON.stringify(tokenMeta),
      META_FILE_NAME
    );
    console.log("uploaded metadata, reference:", response2.reference);
  } catch (error: any) {
    throw error;
  }

  //create url for the NFT metadata using returned Swarm address
  const metaURL =
    BEE_URL + "/bzz/" + response2.reference + "/" + META_FILE_NAME;


  //mint the NFT using the metadata url  
  const BeeNFTFactory = await ethers.getContractFactory("BeeNFT");
  const BeeNFT = await BeeNFTFactory.attach(TOKEN_ADDRESS);

  const mintTx = await BeeNFT.safeMint(TO_ADDRESS, TOKEN_ID, metaURL);
  const receipt = await mintTx.wait();

  //check it worked
  const tokenURI = await BeeNFT.tokenURI(TOKEN_ID);

  console.log(`success! minted token with id: ${TOKEN_ID}, metadata url ${tokenURI}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

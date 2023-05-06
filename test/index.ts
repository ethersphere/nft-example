import { expect } from "chai";
import { waffle, ethers } from "hardhat";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

const TEST_META_HASH = "0xb555555555555555555555555555555555555555555555555555555555555555";

describe("BUZzTile", function () {
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addr3: SignerWithAddress;
  let BUZzTile: Contract;

  const provider = waffle.provider;

  beforeEach(async () => {
    await provider.ready;

    const accounts = await ethers.getSigners();
    owner = accounts[0];
    addr1 = accounts[1];
    addr2 = accounts[2];
    addr3 = accounts[3];
    const BUZzTileFactory = await ethers.getContractFactory("BeeNFT");
    BUZzTile = await BUZzTileFactory.deploy();
    await BUZzTile.deployed();
  });

  it("should mint a token", async () => {
    const mint = await BUZzTile.connect(owner).safeMint(addr1.address,0, TEST_META_HASH);
    expect(await BUZzTile.balanceOf(addr1.address)).to.equal(1);
  });

  it("should have a metadata url", async () => {
    const mint = await BUZzTile.connect(owner).safeMint(addr1.address,0, TEST_META_HASH);
    let tx = await mint.wait();
    expect(await BUZzTile.tokenURI(0)).to.equal("https://api.gateway.ethswarm.org/bzz/0xb555555555555555555555555555555555555555555555555555555555555555");
  });

});

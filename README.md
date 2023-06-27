# NFT metadata on Swarm for new-bees 🐝👶
This is an extremely simple NFT example project. It deploys an NFT contract and mints one NFT where the data is stored on Swarm.

It is intended as an easy example for you to enjoy that can then be built upon to create collections of NFT's that store their data, decentralised, in the Swarm.

![image](https://github.com/rampall/nft-example/assets/520570/7251109b-9f55-48b2-8e66-b93ad2dd58ea)

## Prerequisites

- `node = 16`
- [Swarm Desktop](https://docs.ethswarm.org/docs/desktop/introduction) running a [light node funded with some BZZ and XDAI](https://docs.ethswarm.org/docs/desktop/configuration#upgrading-from-an-ultra-light-to-a-light-node)

## NFT on Gnosischain 

Now, let's deploy your NFT on the Gnosis blockchain!

### Clone repository and install packages
```
git clone https://github.com/rampall/nft-example.git
cd nft-example
npm i
```

### Deploy NFT contract

1. Create a new account in Metamask and fund it with a small amount of XDAI (XDAI 0.10 is enough) on Gnosischain, this will be your deployment account.
2. In Metamask, click the three dots next to your account address, and select "Account Details" then "Export Private Key"
3. Create a new file in the root directory of this project called `.env` and copy the contents from the `.env.example` file.
4. Enter your password and then copy the private key into your `.env` file after `GNOSIS_PRIVATE_KEY=` (it should have a 0x prefix).
5. Deploy your contract `npx hardhat run --network gnosis scripts/deploy.ts`

### Mint NFT
  
6. Start up [Swarm Desktop](https://www.ethswarm.org/build/desktop).
7. [Buy a stamp as shown here](https://docs.ethswarm.org/docs/desktop/postage-stamps#how-to-buy-a-postage-stamp-batch) This should give you a Batch ID
8. Copy the Batch ID into `mint.ts` as `POSTAGE_BATCH_ID`
9. The NFT contract address should be output, copy and paste it into `mint.ts` as `TOKEN_ADDRESS`.
10. Create another new account in Metamask and copy the address into `mint.ts` as `TO_ADDRESS`, this is the address that will receive your NFT.
11. Mint your NFT `npx hardhat run --network gnosis scripts/mint.ts`

### Import NFT

12. In Metamask, with your `TO_ADDRESS` account selected, select network 'Gnosis Chain', click `NFT` then scroll down and select `Import NFTs`.
13. Copy the NFT contract address from step x into the `Address` field and input `0` as the `Token ID`.
14. You should be able to see your own Beelon Musk NFT in your Metamask wallet, keep it, or send it to a friend!
15. Replace `{{0x...}}` in this url with your contract address from step x and open the link `https://gnosis.nftscan.com/{{0x...}}/0`, you should bee able to see your Beelon Musk NFT on nftscan!

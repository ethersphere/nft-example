# NFT Example Project

Create our own [Beelon Musk NFT](https://gnosis.nftscan.com/0xC79D13E7135d4B24BfAaCBF3C4A4f5Caf9De7a2C/0)!

This is an extremely simple NFT example project. It deploys an NFT contract and mints one NFT where the data is stored on Swarm.

It is intended as an easy example for you to enjoy that can then be built upon to create collections of NFT's that store their data, decentralised, in the Swarm.

## Install

Use node > 16.

```npm i```

## Dev (Local)

First try it out locally. Spend some time examining the scripts to understand what's going on.

1. Start up a local hardhat development blockchain `npx hardhat node`
2. Deploy your contract `npx hardhat run --network localhost scripts/deploy.ts`
3. The NFT contract address should be output, copy and paste it into `mint.ts` as `TOKEN_ADDRESS`.
4. Run a local bee development environment `bee dev`
5. Buy a stamp `swarm-cli stamp buy --depth 20 --amount 10000000000`
6. Copy the Stamp ID into `mint.ts` as `POSTAGE_BATCH_ID`
7. Create a new account in Metamask and copy the address into `mint.ts` as `TO_ADDRESS`, this is the address that will receive your NFT.
8. Mint your NFT `npx hardhat run --network localhost scripts/mint.ts`
9. In Metamask, with your `TO_ADDRESS` account selected, select network 'Gnosis Chain', click `NFT` then scroll down and select `Import NFTs`.
10. Copy the NFT contract address from step x into the `Address` field and input `0` as the `Token ID`.
11. You should be able to see your Test NFT in your Metamask wallet!

## Test (tbc)

## Prod (Gnosischain)

Now, let's deploy your NFT on a real blockchain!

First, remember to turn off `bee dev` and your local hardhat development blockchain!

1. Comment out the 'dev constants' and uncomment the 'prod constants'.
2. Create a new account in Metamask and fund it with a small amount of XDAI (XDAI 0.10 is enough) on Gnosischain, this will be your deployment account.
3. In Metamask, click the three dots next to your account address, and select "Account Details" then "Export Private Key"
4. Create a new file in the root directory of this project called `.env` and copy the contents from the `.env.example` file.
5. Enter your password and then copy the private key into your `.env` file after `GNOSIS_PRIVATE_KEY=` (it should have a 0x prefix).
6. Deploy your contract `npx hardhat run --network gnosis scripts/deploy.ts`
7. Start up [Swarm Desktop](https://www.ethswarm.org/build/desktop).
8. Buy a stamp `swarm-cli stamp buy --depth 20 --amount 10000000000`
9. Copy the Stamp ID into `mint.ts` as `POSTAGE_BATCH_ID`
10. The NFT contract address should be output, copy and paste it into `mint.ts` as `TOKEN_ADDRESS`.
11. Create another new account in Metamask and copy the address into `mint.ts` as `TO_ADDRESS`, this is the address that will receive your NFT.
12. Mint your NFT `npx hardhat run --network gnosis scripts/mint.ts`.
13. In Metamask, with your `TO_ADDRESS` account selected, select network 'Gnosis Chain', click `NFT` then scroll down and select `Import NFTs`.
14. Copy the NFT contract address from step x into the `Address` field and input `0` as the `Token ID`.
15. You should be able to see your Test NFT in your Metamask wallet, keep it, or send it to a friend!
16. Replace `{{0x...}}` in this url with your contract address from step x and open the link `https://gnosis.nftscan.com/{{0x...}}/0`, you should bee able to see your NFT on nftscan!
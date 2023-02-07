<h1><img alt="Flag NFT" src="https://i.ibb.co/Ws5wj7w/flag-small.gif" width="auto" height="32px" style="border-radius:2px;margin-bottom:-4px;"/>&nbsp;MTF Challenge</h1>

> 'Mint the Flag' competitive coding wargame by ☀️ _Heliuslabs™_

## 🚩 Prerequisites

> **Note** generate a new Helius **API key** via [Helius Dashboard](https://dev.helius.xyz/dashboard/app)

Match the node version specified in `.nvmrc`

To test webhooks we recommend creating a reverse proxy to your local machine on which your localhost websever is running. We suggest using **ngrok**, which you can set up by following these [instructions](https://ngrok.com/docs/getting-started)


## ⚙️ Setup

Install dependencies and copy the `.env.example` content into `.env`:

```bash
npm install & cp .env.example .env
```

Next run the command for generating fresh env variables and replace placeholders

```bash
npm run generate-env
```

Finally, run the following command to start the project in watch mode:

```bash
npm run start:dev
```

Open [http://localhost:3005](http://localhost:3005) with your browser to see the result. **API documentation** is available on the [/api](http://localhost:3005/api) route


## 📄 Instructions

The goal of this challenge is to find the address of the candy machine which holds all the flags, whitelist your wallet, and be one of the first hackers to mint the flag!

All the necessary documentation can be found at [docs.helius.xyz](https://docs.helius.xyz). Additionally you can rely on [MTF Manual](https://todo.com) which contains hints in case you get stuck, and hand-picked code snippets from Helius and Metaplex SDKs which are most relevant to this coding challenge.

## TODO

☀️Helius MTF Challenge

🚩 Mint the Flag

------
Idea: organize a few hours long "hackathon". Devs would clone our `helius-labs/mtf-challenge` repository and start the challenge at the same time. The goal is to mint the Flag NFT from the Candy Machine. This is done by fixing the codebase within our mtf repo (e.g. replacing faulty `.getProgramAccounts()` with Helius API calls) and adding new features like listening to a specific wallet via webhook. As competitors complete a final step before minting the flag, they get their wallet whitelisted on the CM contract (allowlist) and are able to capture the flag.

*Number of Flags in the CM can vary depending on the number of participants
**This can be turned into a monthly/quarterly "Helius MTF event" with different setup and prizes each time
***Prizes could be handsome for competitors and cheap for you, e.g. free H-API credits


------
Candy Machine sample: https://www.solaneyes.com/address/AskoMh4ffLMBSpRe5zBv9pCWTkZstjPop32fN1G4ikto?cluster=devnet
Collection NFT sample: https://explorer.solana.com/address/FjWJghTPQywefhEr3vUvkqdvZSg6h6RbNvS4EXSKPci8/metadata?cluster=devnet

*Flags in the candy machine are just proposals, we can opt into different designs


------
Workshop: Introduction to Helius API
Workshop: Metaplex JS SDK `.candyMachines()` & `.nfts()`
MTF Gitbook: has MTF hints in case someone is stuck on the challenge, has relevant Helius API and Metaplex SDK code snippets and explanations

*Workshops before the event itself would be a nice opportunity to see the community intereset. e.g. if there are 50 participants we might want to insert ~5 flags into the candy machine. If there are only 10, we would insert only 1
**They are also a nice opportunity to encourage new devs into learning Helius and Metaplex while setting everyone on the same knowledge level before the competition

------
2. refactor a faulty `getProgramAccounts` to `heliusApi.getMintlist('collectionAddress')` (fix the existing app and add new features)
3. get all nfts from the collection called "CLUE #0000", one of the clues is the correct one (offchain attributes) /v0/tokens/metadata
3.1. attribute authorizationMessage should match the Clue.collectionNft.attributes.message & clue.collectionNft.secretKey signer
3.2. each clue has an attribute fishyWallet which the hacker should subscribe to via webhooks
4. edit the webhook in such a way that it listens to the correct wallet address from above
4.1. on that wallet we can see a lot of NFT/token transfers which hint how to whitelist yourself to the CM
5. send some Sol to the wallet from above to allowlist yourself to mint (figure out the CM address?)
6. sign a message to obtain the Candy Machine address?
7. mint the Flag NFT from the CM


- rewrite backend in NodeJS?
- add cross-env support (linux...)
- 🚩 TODO: lorem ipsum... 
- 🐾 TODO: lorem ipsum... 

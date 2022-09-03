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
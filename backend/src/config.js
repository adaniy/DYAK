require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "DYAK RICH BOYS CLUB";
const description = "DRBC is a collection of black avatars taking on the Metaverse in fresh ways. With each series comes a host of adventures in unique styles.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "Background" },
      { name: "Head" },
      { name: "Face" },
      { name: "Eyebrows" },
      { name: "Eyes" },
      { name: "Nose" },
      { name: "Mouth" },
      { name: "Earrings" },
      { name: "Shirt" },
      { name: "Brand" },
      { name: "Chains" },
    ],
  },
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "Background" },
      { name: "Head" },
      { name: "Face" },
      { name: "Eyebrows" },
      { name: "Eyes" },
      { name: "Nose" },
      { name: "Mouth" },
      { name: "Earrings" },
      { name: "Shirt" },
      { name: "Brand" },
      { name: "Chains" },
      { name: "Glasses" },
    ],
  },
  {
    growEditionSizeTo: 3000,
    layersOrder: [
      { name: "Background" },
      { name: "Head" },
      { name: "Face" },
      { name: "Eyebrows" },
      { name: "Eyes" },
      { name: "Nose" },
      { name: "Mouth" },
      { name: "Shirt" },
      { name: "Brand" },
      { name: "Chains" },
      { name: "Glasses" },
    ],
  },{
    growEditionSizeTo: 4000,
    layersOrder: [
      { name: "Background" },
      { name: "New Era Cap Head" },
      { name: "Face" },
      { name: "Eyebrows" },
      { name: "Eyes" },
      { name: "Nose" },
      { name: "Mouth" },
      { name: "Earrings" },
      { name: "Shirt" },
      { name: "Brand" },
      { name: "Chains" },
      { name: "Glasses" },
      { name: "New Era Cap" },
      { name: "New Era Cap Sticker" },
    ],
  },
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "Background" },
      { name: "Baseball Hat Head" },
      { name: "Face" },
      { name: "Eyebrows" },
      { name: "Eyes" },
      { name: "Nose" },
      { name: "Mouth" },
      { name: "Earrings" },
      { name: "Shirt" },
      { name: "Brand" },
      { name: "Chains" },
      { name: "Glasses" },
      { name: "Baseball Hat" },
      { name: "Baseball Hat Sticker" },
    ],
  },
  {
    growEditionSizeTo: 6000,
    layersOrder: [
      { name: "Background" },
      { name: "Bucket Hat Head" },
      { name: "Face" },
      { name: "Eyebrows" },
      { name: "Eyes" },
      { name: "Nose" },
      { name: "Mouth" },
      { name: "Earrings" },
      { name: "Shirt" },
      { name: "Brand" },
      { name: "Chains" },
      { name: "Glasses" },
      { name: "Bucket Hat" },
    ],
  },
  {
    growEditionSizeTo: 7000,
    layersOrder: [
      { name: "Background" },
      { name: "Graduation Hat Head" },
      { name: "Face" },
      { name: "Eyebrows" },
      { name: "Eyes" },
      { name: "Nose" },
      { name: "Mouth" },
      { name: "Earrings" },
      { name: "Suits" },
      { name: "Glasses" },
      { name: "Graduation Hat" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://opensea.io/LeBaronNFT", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'DYAK RICH BOYS CLUB';
const CONTRACT_SYMBOL = 'DRBC';
const METADATA_UPDATABLE = false; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xf43701a88E3FA55b7e5BF4D92DfaD91693982D6f';
const TREASURY_ADDRESS = '0xf43701a88E3FA55b7e5BF4D92DfaD91693982D6f';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 2; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-06-09T12:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xf43701a88E3FA55b7e5BF4D92DfaD91693982D6f"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0xf43701a88E3FA55b7e5BF4D92DfaD91693982D6f","0x3077bc605AD170E94977F2f5eCDb7c357525EB7F","0x77B8bF7908bbA4455Be77D859117bd7e2318ebD1","0xB43F981e54884D259585a81008aB554E87A1Db76","0x1E1fD00eaD8862459932ad137ce4b7C6ed65Ace8","0x14E1F701fAd57e84b23F759e59694CdddBf858c6","0x38BCC3614efc1fE205599229B29513214ce1e603","0xC41eaEd7A87Ac96cc5128D4821aBC7D868Dd39ED"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "DRBC is a collection of black avatars taking on the Metaverse in fresh ways. With each serie comes a host of adventures in unique styles."; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeie56hknup7hb5tcnfokoeul4gurjr3zbnu27qp3km6e5mmx6r64ha"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/channel/UCw-72ayzDFKxncEby5QYziw",
  creators: [
    {
      address: "rNhvrL6kzHfD3xXji7wt4LJjNStBLhkUi7K7qjaeA4v",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};

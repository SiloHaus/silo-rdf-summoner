import { KeychainList } from "@daohaus/keychain-utils";

export const SILO_CONTRACTS: KeychainList = {
  FIXED_LOOT_SUMMONER: {
    "0x1": "0xB5A8838d27df4633894feAA4e5b902A874EC8E7e",
    "0x5": "0xB5A8838d27df4633894feAA4e5b902A874EC8E7e",
    "0xa": "0xa21220572A205B8160982e04ecACE8a4D2304E96",
  },
  BASE_SUMMONER: {
    "0x1": "0x7e988A9db2F8597735fc68D21060Daed948a3e8C",
    "0x5": "0x7e988A9db2F8597735fc68D21060Daed948a3e8C",
    "0xa": "0x7e988A9db2F8597735fc68D21060Daed948a3e8C",
  },
  FIXED_LOOT_SINGLETON: {
    "0x1": "0x9d42696A9C3c54952b8918dcbcb82Dd710347c77",
    "0x5": "0x9d42696A9C3c54952b8918dcbcb82Dd710347c77",
    "0xa": "0x8dd2CA9f0Ae4f464bf5a0C2283FC5C84f16F2F8E",
  },
  GOV_LOOT_SINGLETON: {
    "0x1": "0xbdF2bD70d5Dc78dCe008B337d889B50c217C6Eb7",
    "0x5": "0xbdF2bD70d5Dc78dCe008B337d889B50c217C6Eb7",
    "0xa": "0xbdF2bD70d5Dc78dCe008B337d889B50c217C6Eb7",
  },
  BONDING_LOOT_SINGLETON: {
    "0x1": "0x081f7fa0715483e36e4060c1c1cc57f389e7b028",
    "0x5": "0x081f7fa0715483e36e4060c1c1cc57f389e7b028",
    "0xa": "0x081f7fa0715483e36e4060c1c1cc57f389e7b028",
  },
  CLAIM_SHAMAN_SINGLETON: {
    "0x1": "0x80daee7a5322FbEB3f0f72531FdaB5ED0F3e7333",
    "0x5": "0x0186367008471E62c3f6FD26988DeC92361398eA", // v2
    // "0xa": "0xD55Ce418a17418FE36254AD71C25f87aA97AFC85",
    "0xa": "0xD55Ce418a17418FE36254AD71C25f87aA97AFC85",
  },
  TBA_REGISTRY: {
    "0x1": "0x000000006551c19487814612e58FE06813775758",
    "0x5": "0x000000006551c19487814612e58FE06813775758",
    "0xa": "0x000000006551c19487814612e58FE06813775758",
  },
  TBA_IMPLEMENTATION: {
    "0x1": "0x55266d75D1a14E4572138116aF39863Ed6596E7F",
    "0x5": "0x55266d75D1a14E4572138116aF39863Ed6596E7F",
    "0xa": "0x55266d75D1a14E4572138116aF39863Ed6596E7F",
  },
  TBA_PROXY_IMPLEMENTATION: {
    "0x1": "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC",
    "0x5": "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC",
    "0xa": "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC",
  }
};

/// https://docs.tokenbound.org/contracts/deployments

export const SHARE_PER_NFT = "1000000000000000000";
export const CLAIM_SHAMAN_PERMISSIONS = "2";
export const SHARE_NAME = "Voting Power";
export const SHARE_SYMBOL = "sVOTE";
export const LOOT_NAME = "Community Power";
export const LOOT_SYMBOL = "sLOOT";
export const DEFAULT_SUMMON_VALUES = {
    votingPeriodInSeconds: 259200,
  // votingPeriodInSeconds: 120,
    gracePeriodInSeconds: 172800,
  // gracePeriodInSeconds: 60,
  newOffering: "10000000000000000",
  //   quorum: "20",
  quorum: "0",
  sponsorThreshold: SHARE_PER_NFT,
  minRetention: "66",
  votingTransferable: false,
  nvTransferable: true,
};

export const ADMIN_URL = "https://silo-administrator.vercel.app";

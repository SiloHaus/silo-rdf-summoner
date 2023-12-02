import { KeychainList } from "@daohaus/keychain-utils";

export const SILO_CONTRACTS: KeychainList = {
  FIXED_LOOT_SUMMONER: {
    "0x1": "0xB5A8838d27df4633894feAA4e5b902A874EC8E7e",
    "0x5": "0xB5A8838d27df4633894feAA4e5b902A874EC8E7e",
    "0xa": "0xB5A8838d27df4633894feAA4e5b902A874EC8E7e",
  },
  FIXED_LOOT_SINGLETON: {
    "0x1": "0x9d42696A9C3c54952b8918dcbcb82Dd710347c77",
    "0x5": "0x9d42696A9C3c54952b8918dcbcb82Dd710347c77",
    "0xa": "0x9d42696A9C3c54952b8918dcbcb82Dd710347c77",
  },
  CLAIM_SHAMAN_SINGLETON: {
    "0x1": "0x80daee7a5322FbEB3f0f72531FdaB5ED0F3e7333",
    "0x5": "0x80daee7a5322FbEB3f0f72531FdaB5ED0F3e7333",
    "0xa": "0x80daee7a5322FbEB3f0f72531FdaB5ED0F3e7333",
  },
  TBA_REGISTRY: {
    "0x1": "0x000000006551c19487814612e58FE06813775758",
    "0x5": "0x000000006551c19487814612e58FE06813775758",
    "0xa": "0x000000006551c19487814612e58FE06813775758",
  },
  TBA_IMPLEMENTATION: {
    "0x1": "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC",
    "0x5": "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC",
    "0xa": "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC",
  },
};

/// https://docs.tokenbound.org/contracts/deployments

export const SHARE_PER_NFT = "1000000000000000000";
export const CLAIM_SHAMAN_PERMISSIONS = "2";
export const SHARE_NAME = "vNFT";
export const SHARE_SYMBOL = "Vote NFT";
export const DEFAULT_SUMMON_VALUES = {
  //   votingPeriodInSeconds: 259200,
  votingPeriodInSeconds: 120,
  //   gracePeriodInSeconds: 172800,
  gracePeriodInSeconds: 60,
  newOffering: "10000000000000000",
  //   quorum: "20",
  quorum: "0",
  sponsorThreshold: SHARE_PER_NFT,
  minRetention: "66",
  votingTransferable: false,
  nvTransferable: true,
};

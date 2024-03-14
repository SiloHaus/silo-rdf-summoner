import { KeychainList } from "@daohaus/keychain-utils";

export const SILO_CONTRACTS: KeychainList = {
  FIXED_LOOT_SUMMONER: {
    // "0x1": "0xB5A8838d27df4633894feAA4e5b902A874EC8E7e",
    "0x5": "0xB5A8838d27df4633894feAA4e5b902A874EC8E7e",
    "0xa": "0xa21220572A205B8160982e04ecACE8a4D2304E96",
    "0x2105": "0xB50b835850E23f614291CE2F41F4db43Dba2C6fd" 
  },
  BASE_SUMMONER: {
    // "0x1": "0x7e988A9db2F8597735fc68D21060Daed948a3e8C",
    "0x5": "0x7e988A9db2F8597735fc68D21060Daed948a3e8C",
    "0xa": "0x3E0eAdE343Ddc556a6Cf0f858e4f685ba303ce71",
    // "0x2105": "0x97Aaa5be8B38795245f1c38A883B44cccdfB3E11" // adv token summoner
    "0x2105": "0x22e0382194AC1e9929E023bBC2fD2BA6b778E098" 

  },
  FIXED_LOOT_SINGLETON: {
    // "0x1": "0x9d42696A9C3c54952b8918dcbcb82Dd710347c77",
    "0x5": "0x9d42696A9C3c54952b8918dcbcb82Dd710347c77",
    "0xa": "0x8dd2CA9f0Ae4f464bf5a0C2283FC5C84f16F2F8E",
    "0x2105": "0x957e0824fa019D4d442b75CFd49bBA2352a0D2D5" 
  },
  GOV_LOOT_SINGLETON: {
    // "0x1": "0xbdF2bD70d5Dc78dCe008B337d889B50c217C6Eb7",
    "0x5": "0xbdF2bD70d5Dc78dCe008B337d889B50c217C6Eb7",
    "0xa": "0x1597E36560a4935E8ba40520D2F3037fD111054C",
    "0x2105": "0x4bB5D274DEa3542BB836CBa64bd7eed63233CB58" 

  },
  BONDING_LOOT_SINGLETON: {
    // "0x1": "0x081f7fa0715483e36e4060c1c1cc57f389e7b028",
    "0x5": "0x081f7fa0715483e36e4060c1c1cc57f389e7b028",
    "0xa": "0x081f7fa0715483e36e4060c1c1cc57f389e7b028",
  },
  CLAIM_SHAMAN_SINGLETON: {
    // "0x1": "0x80daee7a5322FbEB3f0f72531FdaB5ED0F3e7333",
    "0x5": "0x0186367008471E62c3f6FD26988DeC92361398eA", // v2
    "0xa": "0x41AF243572381B327e1cB7B0B76Fc1EbBBb8bE0c",
    "0x2105": "0x183185A95174C0499D6DD4266676664dE55fB9BA" 
  },
  TBA_REGISTRY: {
    // "0x1": "0x000000006551c19487814612e58FE06813775758",
    "0x5": "0x000000006551c19487814612e58FE06813775758",
    "0xa": "0x000000006551c19487814612e58FE06813775758",
    "0x2105": "0x000000006551c19487814612e58FE06813775758",
  },
  TBA_IMPLEMENTATION: {
    // "0x1": "0x55266d75D1a14E4572138116aF39863Ed6596E7F",
    "0x5": "0x55266d75D1a14E4572138116aF39863Ed6596E7F",
    "0xa": "0x55266d75D1a14E4572138116aF39863Ed6596E7F",
    "0x2105": "0x55266d75D1a14E4572138116aF39863Ed6596E7F",
  },
  TBA_PROXY_IMPLEMENTATION: {
    // "0x1": "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC",
    "0x5": "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC",
    "0xa": "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC",
    "0x2105": "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC",

  },
  GNOSIS_SAFE_PROXY_FACTORY: {
    // "0x1": "0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2",
    "0x5": "0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2",
    "0xa": "0xC22834581EbC8527d974F8a1c97E1bEA4EF910BC",
    "0x2105": "0xC22834581EbC8527d974F8a1c97E1bEA4EF910BC",
  },
  GNOSIS_SAFE_MASTER_COPY: {
    // "0x1": "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552",
    "0x5": "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552",
    "0xa": "0xfb1bffC9d739B8D520DaF37dF666da4C687191EA", // "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552",
    "0x2105": "0x29fcB43b46531BcA003ddC8FCB67FFE91900C762", // "0xfb1bffC9d739B8D520DaF37dF666da4C687191EA"
  },

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
  quorum: "20",
  sponsorThreshold: SHARE_PER_NFT,
  minRetention: "66",
  votingTransferable: false,
  nvTransferable: true,
};

export const ADMIN_URL = "https://silohaus.github.io/silo-nft-dao-admin";

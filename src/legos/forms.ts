import { CustomFormLego } from "./fieldConfig";
import { APP_FIELD } from "./fields";
import { APP_TX } from "./tx";

// todo: support a link under description - do on page
// description font is data instead of body
// custom nft collection field
// move submitButtonText to lego level in package

export const APP_FORM: Record<string, CustomFormLego> = {
  SUMMON_RDF: {
    id: "SUMMON_RDF",
    title: "Summon an NFT DAO",
    description:
      "Use Silo’s RDF tool to setup an airdrop to turn any NFT collection into a DAO with its own meme token.",
    submitButtonText: "Summon NFT DAO",
    requiredFields: {
      daoName: true,
      nftContractAddress: true,
      maxClaims: true,
      // lootTokenName: false,
      // lootTokenSymbol: false,
      // lootTokenSupply: false,
      // airdropAllocation: false,
    },
    log: true,
    tx: APP_TX.CLAIM_SUMMON,
    fields: [
      {
        id: "nameSegment",
        type: "formSegment",
        fields: [
          {
            id: "daoName",
            type: "input",
            label: "DAO Name",
            placeholder: "DAO Name",
          },
        ],
      },
      {
        id: "nftCollectionSegment",
        type: "formSegment",
        title: "NFT Collection",
        description:
          "Enter the NFT collection contract address below to whitelist them for the claim.",
        fields: [APP_FIELD.NFT_COLLECTION],
      },
      {
        id: "checkGateRender",
        type: "checkGateRender",
        gateLabel:
          "Add Meme Token (airdrop a community token to all NFT holders)",
        clearFieldIdsOnUnchecked: [
          "lootTokenName",
          "lootTokenSymbol",
          "lootTokenSupply",
          "airdropAllocation",
          "maxClaims"
        ],
        components: [
          {
            id: "tokenSegment",
            type: "formSegment",
            title: "Meme Token",
            description:
              "Create a meme token to be claimed by holders and the remaining supply will be managed by the DAO.",
            fields: [
              {
                id: "lootTokenSegment",
                type: "formSegment",
                showDivider: false,
                fields: [
                  {
                    id: "lootToken",
                    type: "splitColumn",
                    rows: [
                      {
                        rowId: "row1",
                        left: {
                          id: "lootTokenName",
                          type: "input",
                          label: "Meme Token Name",
                          placeholder: "Meme Token",
                          defaultValue: "",
                          rules: {
                            maxLength: {
                              value: 50,
                              message:
                                "Token name cannot be longer than 50 characters",
                            },
                          },
                        },
                        right: {
                          id: "lootTokenSymbol",
                          type: "input",
                          label: "Meme Token Symbol",
                          placeholder: "MEME",
                          defaultValue: "",
                          rules: {
                            maxLength: {
                              value: 10,
                              message:
                                "Token symbol cannot be longer than 10 characters",
                            },
                          },
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "supplyAllocationSegment",
                type: "formSegment",
                showDivider: false,
                fields: [
                  {
                    id: "supplyAllocation",
                    type: "splitColumn",
                    rows: [
                      {
                        rowId: "row2",
                        left: {
                          id: "lootTokenSupply",
                          type: "toWeiInput",
                          label: "Total Supply",
                          placeholder: "69,420",
                          defaultValue: "",
                          expectType: "number",
                          info: "The total fixed supply of meme tokens to generate",
                        },
                        right: {
                          id: "airdropAllocation",
                          type: "input",
                          label: "DAO Allocation %",
                          placeholder: "69%",
                          defaultValue: "",
                          info: "The portion of the total supply to be allocated tto a DAO treasury. Reamaining will be towards the airdrop",
                          expectType: "percent",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "lootPerNftSegment",
                type: "formSegment",
                showDivider: false,
                fields: [
                  {
                    id: "lootPerNftRow",
                    type: "splitColumn",
                    rows: [
                      {
                        rowId: "row3",
                        left: {
                          id: "maxClaims",
                          type: "toWeiInput",
                          label: "Max Claims",
                          placeholder: "100",
                          expectType: "number",
                          info: "Proportionally determines how many tokens will be received by each NFT that claims. Can be any number greater, less, or equal to a collection’s total supply - use with caution.",
                        },
                        right: APP_FIELD.AMOUNT_PER_NFT,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "managerCheckGateRender",
        type: "checkGateRender",
        gateLabel:
          "Add Delegated Manager Account",
        clearFieldIdsOnUnchecked: [
          "managerAccountAddress"
        ],
        components: [
          
      {
        id: "managerAccountSegment",
        type: "formSegment",
        title: "Manager Account",
        description:
          "Delegated account to manage the DAO. Can be changed and or removed later.",
        fields: [APP_FIELD.MANAGER_ACCOUNT],
      },
    ]
  },
  APP_FIELD.SALT_NONCE_FIELD,
    ],
    
  },
};

// {
//   id: "supplyAllocationSegment",
//   type: "formSegment",
//   showDivider: false,
//   fields: [
//     {
//       id: "supplyAllocation",
//       type: "splitColumn",
//       rows: [
//         {
//           rowId: "row2",
//           left: {
//             id: "lootTokenSupply",
//             type: "input",
//             label: "Meme Token Supply",
//             placeholder: "69,420,000",
//             expectType: "number",
//           },
//           right: {
//             id: "lootTokenAllocation",
//             type: "input",
//             label: "Holder Allocation %",
//             placeholder: "30",
//             expectType: "percent",
//           },
//         },
//       ],
//     },
//   ],
// },

import { MolochFields } from "@daohaus/moloch-v3-fields";
import { FieldLegoBase, FormLegoBase } from "@daohaus/utils";
import { NftAddress } from "../components/customFields/NftAddress";
import { SpacerField } from "../components/customFields/SpacerField";
import { AmountPerNft } from "../components/customFields/AmountPerNft";

export const AppFieldLookup = {
  ...MolochFields,
  amountPerNft: AmountPerNft,
  nftAddress: NftAddress,
  spacerField: SpacerField,
};

export type CustomFieldLego = FieldLegoBase<typeof AppFieldLookup>;
export type CustomFormLego = FormLegoBase<typeof AppFieldLookup>;

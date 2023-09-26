import { MolochFields } from "@daohaus/moloch-v3-fields";
import { FieldLegoBase, FormLegoBase } from "@daohaus/utils";
import { TotalSupplyDisplay } from "../components/customFields/TotalSupplyDisplay";

export const AppFieldLookup = {
  ...MolochFields,
  totalSupplyDisplay: TotalSupplyDisplay,
};

export type CustomFieldLego = FieldLegoBase<typeof AppFieldLookup>;
export type CustomFormLego = FormLegoBase<typeof AppFieldLookup>;

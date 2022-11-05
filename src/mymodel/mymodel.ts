import { types as t } from "mobx-state-tree";
export const DistrictModel = t.model("District", {
  id: t.identifier,
  name: t.string,
});

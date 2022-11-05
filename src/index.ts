import { types as t } from "mobx-state-tree";

const District = t.model("District", {
  id: t.identifier,
  name: t.string,
});

const Person = t.model("Person", {
  id: t.identifier,
  name: t.string,
  district: t.reference(District),
});

const AppStore = t.model("AppStore", {
  districts: t.array(District),
  people: t.array(Person),
  sideBarOpen: t.boolean,
});

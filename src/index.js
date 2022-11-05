"use strict";
exports.__esModule = true;
var mobx_state_tree_1 = require("mobx-state-tree");
var District = mobx_state_tree_1.types.model("District", {
    id: mobx_state_tree_1.types.identifier,
    name: mobx_state_tree_1.types.string
});
var Person = mobx_state_tree_1.types.model("Person", {
    id: mobx_state_tree_1.types.identifier,
    name: mobx_state_tree_1.types.string,
    district: mobx_state_tree_1.types.reference(District)
});
var AppStore = mobx_state_tree_1.types.model("AppStore", {
    districts: mobx_state_tree_1.types.array(District),
    people: mobx_state_tree_1.types.array(Person),
    sideBarOpen: mobx_state_tree_1.types.boolean
});

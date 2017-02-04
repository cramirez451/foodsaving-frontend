import angular from "angular";
import uiRouter from "angular-ui-router";
import createGroupComponent from "./createGroup.component";
import Group from "../../../common/group/group";

let createGroupModule = angular.module("createGroup", [
  uiRouter,
  Group
])

.component("createGroup", createGroupComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state("createGroup", {
      parent: "group",
      url: "/create",
      component: "createGroup",
      ncyBreadcrumb: {
        label: "{{'CREATEGROUP.TITLE' | translate}}"
      }
    });
})

.name;

export default createGroupModule;

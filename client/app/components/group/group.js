import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import groupComponent from "./group.component";
import AuthenticationModule from "../../common/authentication/authentication";
import groupModule from "../../common/group/group";
import groupDetail from "./groupDetail/groupDetail";
import createGroup from "./createGroup/createGroup";

let groupPageModule = angular.module("group", [
  uiRouter,
  AuthenticationModule,
  ngMaterial,
  groupModule,
  createGroup,
  groupDetail
])

.config(($stateProvider, hookProvider) => {
  "ngInject";
  $stateProvider
    .state("group", {
      parent: "main",
      //abstract: "true",
      url: "/group",
      component: "group",
      resolve: {
        groupData: ($state, Group, CurrentGroup, $stateParams) => {
          return Group.get($stateParams.groupId).then((group) => {
            CurrentGroup.set(group);
            $state.groupData = group;
            return group;
          });
        }
      }
    });
  hookProvider.setup("group", { authenticated: true, anonymous: "login" });
})

.component("group", groupComponent)

.name;

export default groupPageModule;

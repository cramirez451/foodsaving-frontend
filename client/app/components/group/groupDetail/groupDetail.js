import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import groupDetailComponent from "./groupDetail.component";
import description from "./description/description";
import members from "./members/members";
import pickups from "./pickups/pickups";
import stores from "./stores/stores";
import expandablePanel from "../../_expandablePanel/expandablePanel";
import groupModule from "../../../common/group/group";

let groupDetailModule = angular.module("groupDetail", [
  uiRouter,
  ngMaterial,
  description,
  members,
  pickups,
  stores,
  expandablePanel,
  groupModule
])

.component("groupDetail", groupDetailComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state("groupDetail", {
      parent: "group",
      url: "/{groupId:int}",
      redirectTo: "group.groupDetail.pickups",
      component: "groupDetail",
      ncyBreadcrumb: {
        label: "{{$ctrl.groupData.name}}"
      }
    });
})

.name;

export default groupDetailModule;

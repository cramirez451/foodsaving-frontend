import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import expandablePanel from "../../../_expandablePanel/expandablePanel";
import descriptionComponent from "./description.component";

let descriptionModule = angular.module("description", [
  uiRouter,
  ngMaterial,
  expandablePanel
])

.component("description", descriptionComponent)

.config(($stateProvider, $mdMediaProvider) => {
  "ngInject";
  $stateProvider
    .state("description", {
      parent: "group.groupDetail",
      url: "/description",
      redirectTo: () => {
        if ($mdMediaProvider.$get()("gt-sm")) {
          return "group.groupDetail";
        }
      },
      component: "description",
      ncyBreadcrumb: {
        label: "{{'GROUP.DESCRIPTION' | translate}}"
      }
    });
})

.name;

export default descriptionModule;

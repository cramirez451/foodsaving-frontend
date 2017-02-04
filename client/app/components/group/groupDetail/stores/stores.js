import angular from "angular";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import storeList from "../../../_storeList/storeList";
import storeDetail from "./storeDetail/storeDetail";
import storesComponent from "./stores.component";

let storesModule = angular.module("stores", [
  uiRouter,
  ngMaterial,
  storeDetail,
  storeList
])

.component("stores", storesComponent)

.config(($stateProvider, $mdMediaProvider) => {
  "ngInject";
  $stateProvider
    .state("stores", {
      parent: "group.groupDetail",
      url: "/stores",
      redirectTo: () => {
        if ($mdMediaProvider.$get()("gt-sm")) {
          return "group.groupDetail";
        }
      },
      component: "stores"
    });
})

.name;

export default storesModule;

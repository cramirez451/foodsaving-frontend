import angular from "angular";
import uiRouter from "angular-ui-router";
import pickupList from "../../../_pickupList/pickupList";
import pickupsComponent from "./pickups.component";

let pickupsModule = angular.module("pickups", [
  uiRouter,
  pickupList
])

.component("pickups", pickupsComponent)

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state("group.groupDetail.pickups", {
      url: "/pickups",
      views: {
        "detail@group.groupDetail": {
          component: "pickups"
        }
      }
    });
})

.name;

export default pickupsModule;
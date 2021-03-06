import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import storeEditCreateFormComponent from "./storeEditCreateForm.component";
import Geocoding from "../../../../services/geocoding/geocoding";
import StoreService from "../../../../services/store/store";
import markdownInput from "../../../_markdownInput/markdownInput";
import Group from "../../../../services/group/group";
import "leaflet";
import "ui-leaflet";
import "leaflet/dist/leaflet.css"; // looks in node_modules

let storeEditCreateFormModule = angular.module("storeEditCreateForm", [
  uiRouter,
  Geocoding,
  StoreService,
  markdownInput,
  Group,
  "ui-leaflet"
])

.component("storeEditCreateForm", storeEditCreateFormComponent)

.name;

export default storeEditCreateFormModule;

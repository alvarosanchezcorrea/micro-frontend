
import layout from "../public/layout.html";

import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";

import { registerApplication, start } from "single-spa";

const routes = constructRoutes(layout);

const applications = constructApplications({
  routes,
  async loadApp({ name }) {

    if (window[name]) {
      return window[name];
    } else {
      throw Error(
        `Could not find global variable 'window["${name}"]'. Try running pnpm start -- 06-${name}`
      );
    }
  }
})


const layoutEngine = constructLayoutEngine({
  routes,
  applications,
});

applications.forEach(registerApplication);




start();

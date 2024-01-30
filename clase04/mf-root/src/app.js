
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
    try {
      return await System.import(name);
    } catch (error) {
      console.error(`Error al cargar la aplicación ${name}:`, error);
      throw error; // Propaga el error para que se pueda capturar más arriba si es necesario
    }
  }
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
});

applications.forEach(registerApplication);


layoutEngine.activate();
start();

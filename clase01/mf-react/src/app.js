import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Root from './Root.jsx';
import singleSpaReact, { SingleSpaContext } from 'single-spa-react';
import { registerApplication, start } from "single-spa";

 const app = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});



// Registrar la aplicación con single-spa
registerApplication({
  // Nombre único de la aplicación
  name: "app-mf-react",

  // Objeto de configuración de la aplicación
  app,

  // Rutas en las cuales la aplicación estará activa
  activeWhen: ["/"],

  // Propiedades personalizadas que se pasarán a la aplicación
  customProps: {
    codigo: "001",
    nombre: "Microfrontend en React"
  }
});

// Iniciar el sistema de aplicaciones single-spa
start();
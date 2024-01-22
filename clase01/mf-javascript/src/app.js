// Importar funciones necesarias de single-spa
import { registerApplication, start } from "single-spa";

// Definir una aplicación single-spa llamada "App-01"
const app = {

  //inicio de la app

  async bootstrap(props){
    console.log("Inico de la app",props);
  },

  // Función llamada al montar la aplicación
  async mount(props) {
    console.log("App-montada:", props);

    // Obtener el elemento HTML con el id "app"
    const contenedor = document.getElementById("app");

    // Crear un botón y configurar su contenido
    const boton = document.createElement("button");
    boton.textContent = `Guardar ${props.nombre}`;

    // Agregar el botón al contenedor de la aplicación
    contenedor.appendChild(boton);
  },

  // Función llamada al desmontar la aplicación
  async unmount(props) {
    console.log("App-desmontado", props);

    // Obtener el elemento HTML con el id "app"
    const contenedor = document.getElementById("app");

    // Limpiar el contenido del contenedor al desmontar la aplicación
    contenedor.innerHTML = "";
  }
};

// Registrar la aplicación con single-spa
registerApplication({
  // Nombre único de la aplicación
  name: "app-mf-javascript",

  // Objeto de configuración de la aplicación
  app,

  // Rutas en las cuales la aplicación estará activa
  activeWhen: ["/"],

  // Propiedades personalizadas que se pasarán a la aplicación
  customProps: {
    codigo: "001",
    nombre: "Botón Javascript"
  }
});

// Iniciar el sistema de aplicaciones single-spa
start();

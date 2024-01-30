
const app = {


  async bootstrap(props){
    console.log("Inico de la app",props);
  },


  async mount(props) {
    console.log("App-montada:", props);

 
    const contenedor = document.getElementById("app-javascript");

  
    const texto = document.createElement("input");
    const boton = document.createElement("button");
    
    boton.textContent = `${props.nombre}`;

   
    contenedor.appendChild(texto);
    contenedor.appendChild(boton);
  },

 
  async unmount(props) {
    console.log("App-desmontado", props);

    // Obtener el elemento HTML con el id "app"
    const contenedor = document.getElementById("app-javascript");

    // Limpiar el contenido del contenedor al desmontar la aplicación
    contenedor.innerHTML = "";
  }
};

export const { bootstrap, mount, unmount } = app;

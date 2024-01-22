
window.appJavascript = {


  async bootstrap(props){
    console.log("Inico de la app",props);
  },


  async mount(props) {
    console.log("App-montada:", props);

 
    const contenedor = document.getElementById("app-javascript");

  
    const boton = document.createElement("button");
    boton.textContent = `Guardar ${props.nombre}`;

   
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


import { registerApplication, start } from "single-spa";


registerApplication({
  name:"Javascript-app",
  app: window.appJavascript,
  activeWhen:['/'],
  customProps:{
    nombre:"Buscar ..."
  }
})

registerApplication({
  name:"React-app",
  app: window.reactApp,
  activeWhen:['/'],
  customProps:{
    nombre:"Agenda"
  }
})


start();

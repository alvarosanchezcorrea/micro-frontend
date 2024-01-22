
import { registerApplication, start } from "single-spa";


registerApplication({
  name:"Javascript-app",
  app: window.appJavascript,
  activeWhen:['/']
})

registerApplication({
  name:"React-app",
  app: window.reactApp,
  activeWhen:['/']
})


start();

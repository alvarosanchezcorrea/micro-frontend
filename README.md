# Ambiente de Desarrollo

> Node.js / npm : https://nodejs.org/

> yarn : https://classic.yarnpkg.com/en/docs/install#mac-stable

> pnpm : https://pnpm.io/es/


Asegurémonos de tener Node.js y npm instalados en nuestro sistema, además de Yarn, que es otro gestor de dependencias que proporciona ventajas adicionales.


Verifica la instalación de Node.js y npm:


`node -v`

`npm -v`



## Instalación de Yarn
`npm install -g yarn`

### Verifica la instalación de Yarn
`yarn -v`

## Git 

https://git-scm.com/

Git será fundamental para la gestión del código fuente. Asegúrate de tener Git instalado y configurado con tus credenciales.

### Verifica la instalación de Git
`git --version`

Configuración de Herramientas

## Single-spa

https://single-spa.js.org/

https://single-spa.js.org/docs/devtools/ 



Single-spa es el framework que utilizaremos para construir Micro Frontends. Instalémoslo globalmente y exploremos su estructura básica.


## Instalación global de Single-spa

`npm install -g create-single-spa`

## Crea una nueva aplicación Single-spa

`npx create-single-spa`

## Lerna

https://lerna.js.org/

Lerna nos ayudará a gestionar nuestro monorepo. Configuremos Lerna y exploremos cómo organizar y estructurar nuestro código fuente de manera efectiva.


### Instalación global de Lerna

`npm install -g lerna`

### Inicializa un nuevo monorepo con Lerna

`npx lerna init`

## Firebase

https://firebase.google.com/

Firebase será nuestra herramienta para gestionar el despliegue eficiente de nuestras aplicaciones front-end. Conéctate a Firebase y crea tu proyecto.

## Instalación de Firebase CLI

`npm install -g firebase-tools`

### Inicia sesión en Firebase

## firebase login

## Keycloak

https://www.keycloak.org/

Keycloak proporcionará una autenticación segura para nuestros usuarios. Configuremos Keycloak y exploremos su integración con nuestras aplicaciones front-end.

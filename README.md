# AngularJS Tutorial

- AngularJS TODO App
- AngularJS SportStore Shop

This tutorial is based on _Pro AngularJS_ of Adam Freeman, Apress, 2014.

There are some changes:

- it is used Webpack and Webpack Server and Webpack plugins
- Webpack Server is used to development mode
-
- Deployd was replaced by Strapi.js
- Components was dividet to files as Node.js modules

# Run

# Strapi

Create Strapi app for data server

```sh
npx create-strapi-app strapi-app --quickstart
cd strapi-app
yarn develop
```

Available commands in your project:

```sh
yarn develop
# Start Strapi in watch mode.
```

```sh
# yarn start
# Start Strapi without watch mode.
```

```sh
yarn build
# Build Strapi admin panel.
```

```sh
yarn strapi
Display all available commands.
```

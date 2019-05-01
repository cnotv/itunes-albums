# itunes-albums

## Introduction

This project is built using:
* [Vue-Cli](https://cli.vuejs.org/)
* [Vuex](https://vuex.vuejs.org/) for state management
* Vue-router for album routing
* [Ant design of vue](https://vue.ant.design) as UI library
* SASS for styles
* Typescript

The project is deployed to Heroku [(link)](https://itunes-album.herokuapp.com/)

## Application structure

```
/src
├── components/
│   ├── Album
│   ├── Info
│   └── Search
├── models/
├── handlers/
├── view/
│   └── Home
├── main.ts
├── store.ts
└── router.ts
```

### Components

The single components of the application

### Models

Interfaces of the application. Further class implementation for a cleaner initialization will be placed here.

### Handlers

API request pointing to the provided static URL.
Can be easily replaced with a real HTTP API request.
This service allows us to simplify the data request and can be extended with query parameters.

For the request has been used Axios library rather than the fetch() DOM Api function.

### Store

Here are handled all the interactions with the data, from the store object tree generation, with actions, mutators and getters.

It will allows to:
* Load Albums through handler
* Set current Album
* Filter albums on search

### Views

At the moment containing only the home page.

### Router.ts

Router of the application. Further implementation with name as dynamic routing value to be used.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

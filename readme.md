# Micro frontend test

This repo is a minimalistic implementation of micro front end using webpack module federation

## How to run it

To start the shell and the micro frontends just run `npm start` from the root. 

Each micro frontend can be run as a standalone React application by running `npm start` from inside its folder. 

## What it demonstrates

There is a shell, importing 3 micro frontends: home, catalog and cart. 

Catalog and Cart are vertical micro frontends. Home is an horizontal micro front end that uses FeaturedProduct, a microfrontend exposed by Catalog. To avoid micro frontend nesting FeaturedProduct is loaded by the shell and passed to the Home as a child. 

The shell is responsible for the first level navigation, the micro frontends can handle internal navigation, as in the Catalog case. 

This examples assumes that both the shell and the micro frontends agree to use the React and React Router and to use the same version of them. 

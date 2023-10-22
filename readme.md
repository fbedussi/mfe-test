# Micro frontend test

This repo is a minimalistic implementation of micro frontends (from now on mFEs) using webpack module federation

## How to run it

To start the shell and the mFEs just run `npm start` from the root (macOs and Linux only). 

Each mFE can be run as a standalone React application by running `npm start` from inside its folder. 

## What it demonstrates

There is a shell, importing 4 mFEs: home, catalog, cart and miniCart. 

This is a case of horizontal mFE, since more than one mFE is shown at a time. The miniCart mFE is always visible, alongside other mFE. In the home page the Home and FeaturedProduct mFEs are shown. To avoid mFE nesting FeaturedProduct is loaded by the shell and passed to the Home as a child.

The shell is responsible for the first level navigation, the mFEs can handle internal navigation, as in the Catalog case. 

This example assumes that both the shell and the mFEs agree to use the React and React Router and to use the same version of them. This could be the use case for a multi tenant application where some parts of the application should be customized on a per tenant basis, where different part of the application are developed by different teams, but the whole application is under the control of the same organization. 

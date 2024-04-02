# Text Editor PWA

## Overview

This is a progressive web application (PWA) that functions as a text editor. It meets the following criteria:

- Works offline using IndexedDB for data persistence
- Can be installed as a desktop application
- Uses a webpack build with babel, workbox, manifest plugin, and service workers
- Leverages IndexedDB for data persistence 

## Usage

To start the application:

1. Run `npm install` to install dependencies
2. Run `npm run start` to start the server and serve the client application

Any content typed into the editor is saved to IndexedDB using the idb wrapper. This content is loaded back into the editor automatically when it is opened.

The editor can be installed as a PWA on desktop by clicking the install button. This will generate a manifest and service worker using workbox.

The build is created using webpack and babel.

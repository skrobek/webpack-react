# React app dev-test

## Requirements
* `node 0.12.x` and `related npm`
* `webpack` (install via npm: `npm install -g webpack`)

## Run in development mode
* run `npm install`
* run `npm start`

## Run prod mode:
* use `expressjs` (or any other quick node server) and serve static files from `build`
* run in browser `index.html` from `build` folder

## Remarks
* Bootstrap .js loading questions:
  * Load externally via CDN ?
  * Load via external modules in webpack ?
  * Why don't use a react-bootstrap package to make life easier :-)

# Universal React Boilerplate

## Description

An **Universal React Boilerplate** with sweet features to start quickly.

## Sweet features

- Universal JavaScript app
- ES6, ES7 and JSX
- CSS modules
- Live reloading with linting tools (JavaScript and CSS)
- Useful NPM scripts (build, clean, lint, start, test...)
- Different environments to work (development and production)
- Webpack optimization for production environment

## What is under the hood?

- React
  - [x] [React](https://facebook.github.io/react/) `15.x`
  - [x] [React Router](https://github.com/reactjs/react-router) `2.x`
  - [x] [React Helmet](https://github.com/nfl/react-helmet) `3.x`
- Webpack
  - [x] [Webpack](https://webpack.github.io/) `1.x`
  - [x] [Babel](https://babeljs.io/) `6.x`
  - [x] [React Hot Loader](http://gaearon.github.io/react-hot-loader/) `3.0.0-beta.2`
- PostCSS
  - [x] [PostCSS](http://postcss.org/)
  - [x] [Autoprefixer](https://github.com/postcss/autoprefixer)
  - [x] [PreCSS](https://github.com/jonathantneal/precss)
- Linters
  - [x] [ESLint](http://eslint.org/) `2.x` with Airbnb's JavaScript style guide
  - [x] [Stylelint](http://stylelint.io/) `6.x` with the standard style guide
- Testing tools
  - [x] [Mocha](https://mochajs.org/)
  - [x] [Chai](http://chaijs.com/)
  - [x] [Enzyme](http://airbnb.io/enzyme/)
  - [x] [React addons test utils](https://facebook.github.io/react/docs/test-utils.html)
- More
  - [x] [Express](http://expressjs.com/) `4.x`
  - [x] [Nodemon](http://nodemon.io/)

## Coming soon

- [Redux](http://redux.js.org/)

## Getting started

### Install dependencies

Execute `npm install` to install all dependencies.

### Development environment

#### Start the app

Execute `npm run start:dev` to run the development server on **[http://localhost:3000](http://localhost:3000)**.

### Production environment

#### Build the app

Execute `npm run build` to compile client and server at the same time.

Use `npm run clean` first if you have already created the *dist* folder and then execute `npm run build` to make sure it is a new full compilation.

#### Start the app

Execute `npm run start` to run the server and go to **[http://localhost:8080](http://localhost:8080)** (by default it will use port 8080).

## Contributing

Do you know how to improve it? Feel free to contribute to this project.

## License

MIT.

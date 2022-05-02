# Customer Review Project

The project uses React, Redux, Jest, Typescript, sass, mui and react-chartjs-2 (a chart.js wrapper)

The project has 4 initial reviews loaded into the redux store, so the ReviewStack and ReviewChart will be populated.
The project is designed with accessiblity in mind and aims to meet at least WCAG AA guidelines (and potentially AAA through it's minimal, functional intuitive UI), and is tab navigable.
Whilst superfluous there is a redux state store which is modified when new reviews are added and the chart/stack are updated
accordingly.

Extensive use is made of hooks and various es6+ features (arrow functions, spread operators etc)

The review stack shows a reviewer's star rating, name and comment, but not the email address, this would require some form of privacy policy etc

Tests have been added to the state store and to ensure the app renders.
Application metrics are logged to the console as a feature of create-react-app / web-vitals

Whilst this covers the scope of the requirements, further work could include verifying the email address exists, containerisation and CI via github actions / other methods.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm coverage`

Launches the test runner in the interactive watch mode and logs the code coverage.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.


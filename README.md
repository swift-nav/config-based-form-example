# Full-Stack Forms Example

This repository demonstrates tooling that we have developed at Swift Navigation
for building internal data entry applications for our network team. Due to the
relative newness and rapid growth of the autonomous vehicle industry, the needs
of our customers change rather frequently and dramatically. The complexity of our
GPS network and the needs of our field technicians grow as a direct result. In
order to accommodate new types of station installs, we are often changing the
structure of our database and the capabilities of our api to enable flexibility
in the relationships between various hardware components. A discovery that we
made along the way was that frontend updates were slower and more painful than
backend changes and often served as blockers to releasing new technology.
We dreamed of a world in which trivial changes to our database schema, such as
updating the name of a field, would result in equally simple changes across the
stack. We longed to create reliable, beautiful, stateful forms that could be generated
automatically, changed rapidly, and kept up-to-date with our api schemas by a small
number of people. We wanted our JSX forms to give us meaningful error messages rather
than failing silently. We believed that our many JS frameworks (React, Redux,
React-Bootstrap, and Redux Form) could work in harmony and quit warring against each
other. The example project you see in this repository is the realization of our dream.

### Setup

To run our code locally, you will need to install:

- [NodeJS](https://nodejs.org/en/) as our server-side javascript backend (currently version 10.7).
- [NPM](https://www.npmjs.com/get-npm) and [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) for package management.

You'd also be smart to use nvm:

- [Node Version Manager (NVM)](https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/)

Be sure you are running the correct version of NodeJS (specified in .nvmrc). If it is not already installed on your machine and you are using the nvm command line tool, simply run

```
nvm install <version>
```

This command is needed only once. Now that node is installed, simply run the following inside the root folder every time you develop:

```
nvm use
```
The above command automatically refers to .nvmrc and switches the version.

Now you are ready to install dependencies with `yarn`:

```
yarn install
```

Finally, you are ready to run development mode:

```
yarn dev
```
If a browser window does not open automatically, navigate to [localhost:3000](http://localhost:3000).

If everything is working, hot reloading should occur whenever changes are saved to the `/src` directory.

To view the redux state, install the Redux DevTools extension ([Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en),
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/remotedev/)) and open up the Redux tab in the developer toolbar. The dev environment is not yet set up to display the redux state in other browsers.

### Tests

Run tests with
```
yarn test
```

Run linter with
```
yarn lint
```

### Production

Run the following commands to build for production:

```
yarn install
yarn build
yarn start
```

Then open up a browser window and navigate to [localhost:3000](http://localhost:3000).

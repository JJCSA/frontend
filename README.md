# JJCUSA Frontend React Application

## Contributing:

For steps on how you can contribute, please follow the [Contributing guide](CONTRIBUTING.md)

## Developement Instructions:

1. Clone this repository and navigate to the frontend directory

```
git clone git@github.com:JJCSA/frontend.git
cd frontend
```

2. Install the NPM dependencies

:warning: **Make sure you have node version 14.17.0**, that's the version node-sass v 4.14.1 is supported with
If using nvm, run:
```
nvm install 14.17.0
nvm use 14.17.0
```

```
npm ci
```
| :exclamation:  Always use the command `npm ci` to install packages instead of `npm install` |
|---------------------------------------------------------------------------------------------|
| `npm install` should only be used when installing a new package to the project and the same must be mentioned clearly in the Pull Request |


3. Start the project
```
npm start
```

4. Build the deliverables
```
npm build
```

5. To install a new package in the project use the following command
```
npm install <package_name>@<version>
```
Make sure to mention the installation of the new package in the subsequent Pull Request!


# Running the app

Below is information about running the app, automatically generated.

**For the next team (presumably Fall 2021), there are links at the bottom of the page**

Very useful if you haven't used react:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Package.json includes lines "bootstrap": "^4.3.1",
                            "react": "^16.10.2",
                            "react-bootstrap": "^1.0.0-beta.14",
                            "react-dom": "^16.10.2",
                            "react-router-dom": "^5.0.1",
                            "react-scripts": "3.1.1",
                            "styled-components": "^4.3.2"
                            which have been used to test the navigation bar...may remove later

# Information for Next Team

* [Contact Information](https://github.com/AaronHaNasi/team-civil-discourse/blob/master/previous-team-contact-info.md)
* [Improvements/To Do](https://github.com/AaronHaNasi/team-civil-discourse/blob/master/to-do)

## Services 

These are a list of services our app use, you should try to familiarize yourselves before continuing development. 

* [NewsAPI](https://newsapi.org/): Used on the AWS side as a lambda function, Refresh-NewsCache
* [Census.gov API](https://www.census.gov/data/developers/data-sets.html): Used on AWS side as lambda function, UpdatePopulationData
* GeoJSON: For the actual rendering of the map. 
* Material UI for look and feel of app
* Heroku: AWS Wrapper for an EC2 Instance, that hosts the app. There are two apps running: one for testing and one for the actually deployed app. 

## AWS
* AWS Lambda: For making requests to the DynamoDB and updating DynamoDB Table, as well as updating the S3 Cache (News Articles). All of our Lambda's are written in Python. 
* AWS DynamoDB: For holding country specific info that is not news articles (ie - Population, Civil Discourse Ranking, ISO Country Code, etc)
* AWS S3: JSON Files containing info for news articles
* AWS CloudWatch: For daily updates of population data and weekly of News Cache 

# Watch Movie List
We are going to be building an application that keeps track of movies that you want to watch.

## [LIVE DEMO!!!](http://charleskuang.com/watchmovies/)

## Resources
* [The Movie Database](https://www.themoviedb.org/)
* [Querying](https://developers.themoviedb.org/3/getting-started/search-and-query-for-details)
* [Images](https://developers.themoviedb.org/3/getting-started/images)

## Instructions
### Setup
Download this repository. There is a skeleton layout for the project. You'll need to create your own package.json file, but we have provided a webpack configuration file for you. To run the project, you'll need to open the `index.html` file in the browser. The `index.html` has a script tag referencing the `bundle.js` you're going to make with webpack.

### Step 1 - npm install
Create a `package.json` file and install the necessary modules.
### Step 2 - webpack.config.js
Create a `webpack.config.js` file with the code below.
```js
const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/app.js",
  output: {
    path: path.join(__dirname),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', `react`]
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
```
### Step 3 - React State
You're going to need to keep track of the three things in the state of the application:
* text input of the form
* list of movies you want to watch
* the single movie you want more information on

### Step 4 - React Form
Your form should have two inputs:
* input with type `text`
* input with type `submit`
You'll need to link the value of your text input with the state of the React component using a `onChange` synthetic event.

### Step 5 - React Form: onSubmit
On submission of your form using the `onSubmit` , your component should add a new list item.

### Step 6 - React: onClick
When you click on a particular list item, an AJAX request should be fired
You're going to need to send off two AJAX requests
* movie information
* movie image

### Step 7 - React: List  
Should display a list of movies you want to watch with each list item having an `onClick` function.

### Step 8 - React: Movie Information
Should display the title, synopsis, and image of the movie that was clicked on.

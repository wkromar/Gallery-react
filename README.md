# React Gallery

## Description
  React gallery is an App designed to display built-in pictures with descriptions in visually appealing ways. Styling is heavily used and explored in this project (note buttons and photo effects) 
  
 # Author
- [Woody Kromar](https://github.com/wkromar)
 
 
 ## Add your images
  visit the `images` folder to add an image into the project. then visit `/server/modules/gallery.data.js` to add the images into the visible DOM. The app maps over this file to display the images.
  
 ## Development Setup Instructions

- Run `npm install`
  
  ## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`
  
 ## Deployment

### Heroku Prerequisite
1. Sign up for an account on [Heroku.com](https://www.heroku.com/)
2. Install Heroku CLI by typing `brew tap heroku/brew && brew install heroku` in Terminal

- [Additional installation notes and troubleshooting](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

> Note: Your project also needs to have a git repository.

Run the following commands from within your project folder.

1. Authenticate by typing `heroku login` in Terminal
2. In terminal, navigate to your project folder and type `heroku create`
3. Type `git remote -v` to ensure it added successfully
4. In terminal, type `git push heroku main`
5. You will need to add a MONGO_URI to your config env on heroku.

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`
  
## Aknowledgments
    - Prime Digital Academy for teaching me Full-Stack Development
    - Dane Smith for his constant support
    - Zhu Cohort for their support and positivity

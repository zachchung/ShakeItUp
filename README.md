# Shake It Up!
Shake It Up! is a web app for listing and creating cocktail recipes with photo uploads.

Created during Le Wagon's bootcamp.

Check it out [here](https://createyourowncocktails.herokuapp.com/)

## Setup & Deployment
### Setup
Clone the project, and run on local machine
```bash
bundle install
yarn install
```

Once the project is made available on your local machine, create the database in PostgreSQL and populate structure and data.
```bash
rails db:create
rails db:migrate
```

### Deployment
Start the application with:
```bash
rails s
```

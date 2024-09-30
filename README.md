# Blueprint
 A repo that gives the initial skeletal framework for developing full-stack applications. This serves as a blueprint for projects that are looking to develop a new app from scratch. It uses Javascript/Typescript, building on a NodeJS backend, a React frontend using Vite, and a React Native mobile app with Expo.
 
 This repo aims to be super simple to copy and paste into a new project with a solid foundation, to get up and running with development as quickly as possible. It even includes GitHub actions for automated building and testing CI. The initial configuration uses a SQLite database in the backend for local development, but is set up in such a way that it can easily be swapped out for another database such as Postgres.

## Setup and Go
 - Run `npm run setup:dev` to install all dependencies and sync the backend database
 `(Make sure you have a .env file in the backend/ folder, looking like the .env.example file)`

 - Run `npm run start:backend` to start the backend development server

 - Run `npm run start:frontend` to start the frontend development server

 - Run `npm run start:mobile` to start the mobile development server

 - Run `npm start` to run all development servers at the same time

## Testing
 Initial backend routing tests are included as samples (using Jest), and a mobile app render test which is provided by the React Native Testing Library.

## Project Structure
### Backend
 The backend API is hosted in the `backend/server.js` file. It consists of a simple Express server, which is set up to use Sequelize as an ORM to interact with the SQLite database.
  - `backend/models/` contains the Sequelize models to be used in the database. These are synced through the `syncModels.js` file, which is run using `npm run sync` or `node syncModels.js`
  - `backend/routes/` contains the route definitions for the API as well as sample tests for these routes
  - `backend/controllers/` contains the controller logic for the routes
  - `backend/config/` contains the database configuration as well as the match cases to identify tests in Jest
  
  Make sure to set up the `.env` file in the `backend/` folder to match the existing `.env.example` file.

### Frontend
The frontend is a standard Vite project built using a React template. Vite allows hosting to be done either solely on the device or can also be hosted on the local network when developing. Vite is used because of its compatibility with React and its fast build times. Refer to the Vite README or the Vite and React links displayed in the frontend to develop further.

### Mobile
The mobile app is a standard React Native project built using Expo. This allows for easy development for apps to be on both iOS and Android, with the ability to also add native code if needed. Refer to the React Native and Expo documentation to develop further.

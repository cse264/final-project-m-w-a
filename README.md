# Hawk Messenger

## Team M.W.A

### Description
Hawk Messenger is an instant messaging app designed for people to make friends at Lehigh University. The application features a global chat so everyone can communicate during the times of COVID and not feel excluded. The application also utilizes a Dad Jokes API to provide a more comfortable, "home-y" environment for its users.

### Roles
Database: Sameer Merchant and Fernando Cuaya
Node/Backend: Vaibhav Anand, Wilmer Hernandez, and Cameron Osborn
Frontend: Erick Siguenza and Ryan Schmid

### Functionality
Users can log on and chat with others on the application. When a blank message is sent, a randomly generated dad joke is sent in its place. These dad jokes can act as great conversation starters. 

### User Story/Use Case
A Lehigh student wants to meet new people and is having a hard time doing so in the midst of COVID. They log on to Hawk Messenger and talk to those already there. If they need something to talk about, they can send a randomly-generated dad joke in the chat. 

### Technical Design
The app uses Node.js, Socket.io, Mongo DB, and Dad Jokes API to create a chat room. When a user first enters the application, they are prompted to enter their name. They then enter the room, where they can see messages sent prior to their arrival and send messages to those in the room using a form. The messages are stored in a database (MongoDB) when sent and are deleted when all users leave the room. When a user sends a blank message, the app sends a randomly generated dad joke instead using the Dad Jokes API. The application is of responsive design for easier viewing on all screens.

### Tools/Libraries/Frameworks
Node.js, Socket.io, Mongo DB, and Dad Jokes API.

### Installing
In order to install our app, all you have to do is clone our repository, do 'npm install', and then 'npm run dev'. This will also handle the APIs and databases.

### Live Demo
A live demo of Hawk Messenger can be accessed [here](https://evening-lake-37049.herokuapp.com/).

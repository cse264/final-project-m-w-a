# Hawk Messenger

## Team MWA

### Description
MWA is an instant messaging app designed to make friends at Lehigh University. The application features a global chat so everyone could communicate during the times of COVID and not feel excluded. The Dad Jokes API is used to create a more at home feeling and a comfortable environment. It provides an easy way to
reduce the awkwardness of meeting new people.

### Roles
Database: Sameer Merchant and Fernando Cuaya
Node: Vaibhav Anand, Wilmer Hernandez, and Cameron Osborn
Frontend: Erick Siguenza and Ryan Schmid

### Functionality
Users can log on and chat with others on the application. When a blank message is sent, a randomly generated dad joke is sent in its place. These dad jokes can act as great conversation starters. 

### User Story/Use Case
A Lehigh student wants to meet new people and is having a hard time doing so in the midst of COVID. They log on to our MWA app and talk to those already there. If they need something to talk about, they can send a randomly-generated dad joke in the chat. 

### Technical Design
The app uses Node.js, Socket.io, Mongo DB, and Dad Jokes API to create a chat room. When a user first enters the application, they are prompted to enter their name. They then enter the room, where they can see messages sent prior to their arrival and send messages to those in the room using a form. The messages are stored in a database (MongoDB) when sent and are deleted when all users leave the room. When a user sends a blank message, the app sends a randomly generated dad joke instead using the Dad Jokes API. The application is of responsive design for easier viewing on all screens.

### Tools/Libraries/Frameworks
Node.js, Socket.io, Mongo DB, and Dad Jokes API.



[![Work in Repl.it](https://classroom.github.com/assets/work-in-replit-14baed9a392b3a25080506f3b7b6d57f295ec2978f6f33ec97e36a161684cbe9.svg)](https://classroom.github.com/online_ide?assignment_repo_id=326840&assignment_repo_type=GroupAssignmentRepo)
# Final Project

## Due Thursday, December 3, 2020

### Build a web app in a team of 5-6

### Requirements:
* Must have user accounts and different user roles (done) - purple:admin and green:not_admin
* Must use a database (done)
* Must have interactive UI (done)
* Must use a library or framework not discussed/used in class (done)
* Must use an outside REST API in some way (to be done)
* Must deploy your application in some publicly accessible way (Heroku, Digital Ocean, AWS, etc) (Sameer and Cameron Carrying us)

### Instructions
Build your team and write a document describing your application to me by Thursday, November 12, 2020. I will approve your web application idea. In your paper, include:
* the name of your application
* name and roles of all your team members
* its functionality
* user story/use case
* technical design 
* tools/libraries/frameworks you will use

### Final deliverable:
* Codebase in Github Repo
* README describing your project, with all of the information outlined above (team members, application name, description, etc). You will also include detailed instructions of how to install and run your application, and what API keys, databases, etc are needed to run your application. You will also provide a link to a live demo of your application.
* Final Presentation and Demo
  * You will prepare a 5 minute presentation and demo of your application in class during during a zoom call with me (time TBD)

# Redux-Feedback-Loop
![REPO SIZE](https://img.shields.io/github/repo-size/ayriela/redux-feedback-loop.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/ayriela/redux-feedback-loop.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/ayriela/redux-feedback-loop.svg?style=social)


## Description
Duration: Weekend Project 

This site allows a user to navigate through a form to leave their EOD feedback about the material they've learned. The user navigates through the questions with the PREVIOUS or NEXT buttons. Once on the review page, the user may then choose to submit the feedback that has been filled out or go back to modify their answers. If the user selects submit, the feedback will be posted to the database and the user will be presented with a dialog confirming their submission. 

- [Link to the Deployed App](https://daily-feedback.herokuapp.com/#/)

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- PostgreSQL

## Installation 

Install this project by cloning this github repository to local file system. Use `npm install` to bring in dependencies.  You may start the server with `npm run server` and `npm run client` to start the client components.  Be sure to create the database `prime_feedback` locally and use the script in the data.sql to create a copy of the table to utilize. 

## Usage
1. User is presented with the option to leave new feedback
2. The user is then brought to screens to rank their feelings, understanding, and support for today's content.
3. Hitting previous will allow users to navigate back through these options without loosing their progress. 
4. After the user has passed through each rank option they'll be brought to a comments page where they can leave any additional feedback they feel is important
5. When they hit next they're now brought to a review screen where they can see the information about to be submitted or go back to modify the information
6. On submit they're prompted with a dialog on the successful addition to the database and redirected back to the main screen where they may start fresh feedback


## Built With

- javascript 
- React
- Redux
- Material UI
- Node using express, body-parser, and pg
- PostgreSQL


## Roadmap
- Include an admin page to view/manage the feedback that has been entered
- Allow users to selectively go back and modify certain portions of their feedback rather than navigating back and fort through the full process again


## Acknowledgement
Thanks to Prime Digital Academy. 

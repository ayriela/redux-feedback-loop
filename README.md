# Redux-Feedback-Loop
![REPO SIZE](https://img.shields.io/github/repo-size/ayriela/redux-feedback-loop.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/ayriela/redux-feedback-loop.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/ayriela/redux-feedback-loop.svg?style=social)


## Description
Duration: Weekend Project 

This site allows a user to navigate through a form to leave their EOD feedback about the material they've learned. The user navigates through the questions with the PREVIOUS or NEXT buttons. Once on the review page, the user may then choose to submit the feedback that has been filled out or go back to modify their answers. If the user selects submit, the feedback will be posted to the database and the user will be presented with a dialog confirming their submission. 

## Screen Shot
![Screen Shot](ToDoExample.png)

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- PostgreSQL

## Installation 

Install this project by cloning this github repository to local file system. Use `npm install` to bring in dependencies.  You may start the server with `npm start`.  Be sure to create the database `weekend-to-do-app` locally and use the script in the database.sql to create a copy of the table to utilize. 

## Usage
1. User is presented with an empty To-Do List table
2. User may input tasks they have in mind with the Add Task input and button 
3. Tasks Display with oldest, incomplete tasks at the top, completed tasks will display below all incomplete tasks
    - All tasks by default are added as incomplete tasks
4. The user can complete the task by flipping the checkbox 
    - The task will now shift to the lower portion of the table and the display color will shift to green
    - If a task is mistakenly completed the user may unclick the checkbox to mark it once again as incomplete
5. If a task is no longer relevant the user may click delete and remove the task from the display and database.

## Built With

- javascript 
- jQuery
- Node using express, body-parser, and pg
- PostgreSQL


## Roadmap
- Users must delete and re-add any incorrectly typed tasks, so in the future it would be nice to make this field editable
- Currently only designed to handle a single working task list but capability could be added for users to set up recurring tasks, or multiple priority lists
- Allow users to manually reorder the task list to their liking if priorities shift
- Since list items persist in the database the only way to refresh the list is to individually delete each task so you could add delete all funcitonality to completely restart the list


## Acknowledgement
Thanks to Prime Digital Academy. 

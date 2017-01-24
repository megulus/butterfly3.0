# Butterfly 3.0


## Overview

The app defaults to the neutral smiley. If query params are used, the server responds with the appropriate smiley:

?v=5 Awesome! ?v=4 Great! ?v=3 OK, ?v=2 Mmmmmh ?v=1 Oops

Clicking the edit button next to the smiley brings up the "mood edit" view, allowing the user to change the mood selection.

The question view contains the 5 questions (in randomized order). Clicking stars updates the user's rating for that question. If the user enters 1 or 2 stars, a text box appears alllowing for additional input on that question. The user is not required to fill out text inputs. Once the user has given a rating for all five questions, the "Send" button is activated. Upon submission, the user is thanked for their feedback.


## Code Overview

The app uses React for the view layer, with state handled using Redux. The simple grid framework is built in susy, and CSS Modules used for the components' CSS.

## Building and Running

Note: node.js must be installed.

Navigate to the project root directory and run the command

    $ npm install

### Development Build

    $ npm run dev-build

### Production Build

    $ npm run prod-build

### Server

    $ npm run dev-server

Navigate to: localhost:8080


## To Do

1. Use ImmutableJS for state objects

2. Write unit tests (Jest?)

3. Debug the Order Undefined error in webpack extract text plugin (in production build). This may be a bug in the plugin.

## Tools

- React
- Redux
- Webpack/Webpack-dev-server
- CSS Modules
- Susy






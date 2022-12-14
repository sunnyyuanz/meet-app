# meet-app

This is a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

FEATURE: FILTER EVENTS BY CITY

As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

FEATURE: SHOW/HIDE AN EVENT'S DETAILS

As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

SCENARIO 1: An event element is collapsed by default
Given An event element is collapsed by default
When the user just open the app.
Then the user should see an event of the closest date is collapsing to show the details by default.

SCENARIO 2: User can expand an event to see its details
Given main page is open and events are showing the title but no details.
When the user click into a specific event title.
Then the user should see the details of the event which just clicked.

SCENARIO 3: User can collapse an event to hide its details
Given an event is either collapsing by default or clicked to collapse.
When the user click on the event tile again.
Then the event should hide it's detail and only show the event title.

FEATURE: SPECIFY NUMBER OF EVENTS

As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

SCENARIO 1: When user hasn’t specified a number, 32 is the default number
Given the user hasn't specified the numbers of events he want to see.
When the user is viewing the events.
Then show 32 events as default setting.

SCENARIO 2: User can change the number of events they want to see
Given the user is viewing the events.
When the user want to decide the number of events they want see.
Then the number of events they specified show in the app.

FEATURE: USE THE APP WHEN OFFLINE

As a user, I would like to be able to user the app when offline so that I can see the events I viewed the last time I was online.

SCENARIO 1: Show cached data when there’s no internet connection
Given the user still want to use to app the see events.
When there is no internet connection.
Then the user is able to use the app.

SCENARIO 2: Show error when user changes the settings (city, time range)
Given user is using the app.
When offline.
Then they are not able to change the settings, app will show error due to no network.

FEATURE: DATA VISUALIZATION

As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

SCENARIO 1: Show a chart with the number of upcoming events in each city
Given the user is using the app.
When the user want to see the number of upcoming events in each city.
Then a chart showing the number of upcoming events in each city.

### Screenshot

![Mobile Screenshot](/screenshot/Mobile_screenshot.PNG)
![Desktop Screenshot](/screenshot/Desktop_screenshot.PNG)

### Links

- Solution URL: [https://github.com/sunnyyuanz/meet-app]
- Live Site URL: [https://sunnyyuanz.github.io/meet-app/]

### Built with

React, TDD/BDD, Jest, Enzyme, Cucumber, Atatus, Recharts, AWS Lambda, OOP

## Author

- Website - [SunnyZ](https://github.com/sunnyyuanz)

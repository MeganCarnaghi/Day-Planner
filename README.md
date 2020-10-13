# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Description of My Code

* Here is the URL of the deployed application: https://megancarnaghi.github.io/Day-Planner/

* Here is the URL of the GitHub repository: https://github.com/MeganCarnaghi/Day-Planner.git

* Here are screenshots from my planning and my actual code: (Day-Planner/Screenshots)

## For the Requirements:

* I used moment().format('MMMM Do, YYYY') from https://momentjs.com/ to set the current date on the Day Planner.

* I used a for loop to loop through each of the various time blocks and set their class according to the current time (past, present, future)

* I used the setItem and getIteam methods to set the events to local storage and display them even after the page is refreshed.

* I created a "Clear All Events" item to remove all items from local storage and clear the textareas in each timeblock.

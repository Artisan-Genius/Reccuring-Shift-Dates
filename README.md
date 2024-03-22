
**Adalo Recurring Dates Component**

This component allows the user to set recurring dates in the database. 

The interaction for the component is a button that requests, startDate, endDate, frequency and occurrences, creates a new object for each new occurence based on specified frequncy and passes the new date to the database.
From the action you can update the database, or simply display the information on the screen.
The component only loads the current state when the button is pressed. 


**Motivation**

The motivation behind this component is to set an array of dates based on given parameters. This allows a user to save a date range instead of an individual date. 

This component has not been published to the marketplace at the time of this writting so the only way to use it is private.

**Running private**

Prerequisites

NodeJS
Yarn
Linux/macOS/WSL
Clone the respository and run
$ cd my-component
$ yarn                # install dependencies
$ npx adalo login     # login to your adalo account
$ npx adalo dev       # start the development server
$ npx adalo publish   # deploy the component privately to your account


**How is this component used**

Once the component is installed, you can drag and drop the Recurrence button on the app screen and configure it. 

- Start Date: Takes a value from a date picker(returns date object)
- End Date: Takes a value from a date picker(returns date object)
- Ocurrence: Takes occurence from input field(number)
- frequency: Takes frequency type (week,month,year etc...)

After all data has been stored in the app as a prop, the app creates dates based on the frequency and occurence given and stores it in the data base using an action to create a new table item. 

**Version History**
1.0.0 - initial commit


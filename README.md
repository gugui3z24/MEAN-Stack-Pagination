## MEAN Stack Pagination Tutorial

This is an application demonstrating how to use AngularUI Bootstrap Pagination using MongoDB, ExpressJS, AngularJS, and NodeJS.

A YouTube tutorial video illustrating how to do this can be found [here](https://www.youtube.com/playlist?list=PL3vQyqzqjZ637sWpKvniMCxdqZhnMJC1d).

## Requirements

This application requires installation of NodeJS prior to running.

## Description

This application was created to show how to apply pagination using AngularUI Bootstrap in MEAN Stack.

## Installation

- Install all dependencies in package.json file. This can be done by navigating to the root directory in the command prompt and running the following command:

```
$ npm install
```

- You must enter your own MongoDB configuration settings in the server.js file:

```
mongoose.connect('mongodb://localhost:27017/pagination', function(err) {
    if (err) {
        console.log('Not connected to the database: ' + err); // Log to console if unable to connect to database
    } else {
        console.log('Successfully connected to MongoDB'); // Log to console if able to connect to database
    }
});
```

- Installation is complete. Navigate to folder where server.js file is located and enter the following into command prompt (ensure MongoDB is running):

```
$ npm start server.js
```

## Contributors

David Acosta.

## License

No license. 
# tickets-api

1.insatllation steps
-> travel to folder and run "npm install"

2. setup DB
->install postgres in ur local and edit config/dal_config.js with your credentials

3. Run app
->in cmd go-to folder and run "node index.js". Server will run on "localhost:3000"

# Access Swagger
Goto url "localhost:3000/api-docs"

# Run through Postman

App requires authorization. To call API's using postman follow below steps
1. Request a GET call to "localhost:3000/login". This gives the authorization string.
2. While posting other requests add this string followed by "Bearer" to the Authorization header

# Available API's

-> /tickets (GET) - Get all tickets
-> /tickets/id (GET) - Get ticket with given id
-> /tickets (POST) - Add a new ticket
-> /tickets/id (UPDATE) - Update an existing ticket
-> /tickets/id (DELETE) - Delete an exixting ticket

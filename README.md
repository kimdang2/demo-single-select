# Meetup Registration - Front End
Front-end of a single page app that takes that allows a meetup organizer to register attendees for a JS meetup and keep track of who is already registered.

The homepage of your application:

- A `Current Attendees` list, which should include first + last names of attendes, grouped by experience level (beginner, intermediate, expert)

- A `Register Attendee` form, which should include fields for
    - First name
    - Last name
    - Email address
    - Shirt Size (one of XS, S, M, L, XL, XXL)
    - Experience Level (one of beginner, intermediate, expert)
- A `Register` button, which when clicked, should:
    - Submit the attendee information to the server
    - Update the Current Attendees list (after the information has been accepted by the server)



## Available API Routes

| Endpoint          | Type   | Operation                 |
|-------------------|--------|---------------------------|
| `/attendees`      | GET    | Get all attendees         |
| `/attendees`      | POST   | Add an attendee           |

## Demo
![Demo](https://media.giphy.com/media/Lm5IDs3h5JiwDgtwfC/giphy.gif)

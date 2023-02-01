import { Router } from "express";
import studentController from "./controller.js";

const router = new Router();

// /api/student
// * DON'T REPEAT '/api/students' - it's already in app/index.js
router.get("/", (_, res) => {
  studentController
    .getStudents()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

export default router;

/*
VALIDATION same as UNIT TESTING?

No, validation and unit testing are not the same in JavaScript programming.

Validation refers to the process of checking the validity of user input data, such as verifying if an email address is in the correct format. This helps to ensure that the data entered by the user is valid and meets the required criteria before being processed.

Unit testing, on the other hand, is a software testing technique in which individual units or components of the code are tested in isolation to ensure that they are functioning correctly. This helps to catch bugs early in the development process and makes it easier to maintain the code over time.

In summary, validation focuses on the correctness of user input data, while unit testing focuses on the correctness of code implementation.
 */

/*
What is ROUTING in Express.js?

Routing in Express.js is the process of mapping URLs to specific logic (usually in the form of a function or controller) that handles incoming requests and sends appropriate responses. In other words, it determines what should happen when a user visits a particular URL in an Express.js-powered web application. This mapping is usually done using the app.get() or app.post() methods in Express.js, where you specify the URL path and an associated callback function. The callback function will receive a request object and a response object as arguments, and it should use the response object to send back a response to the client.

Routing is a crucial component of any web application, as it allows you to define different behaviors for different parts of your application based on the requested URL. For example, you could have a route that handles incoming requests to the homepage, a route that handles requests to display a specific user's profile, and a route that handles submitting form data to a database.

In JavaScript, routing is used not only in web applications but also in other applications that use the HTTP protocol to communicate between client and server. The concept is the same, but the specifics of how routing is implemented can vary depending on the use case
 */

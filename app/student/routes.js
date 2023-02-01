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

```sh
import "express-async-errors";

```

#### Not Found Middleware

```js
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});
```

# Express validator

it valiate input which Ensures that user input meets predefined rules (e.g., email format, minimum length), main is it is a library used in express palications to validate and sanitize user input

```sh
npm i express-validator
```

first psswdUtils
then in authController
then create validationMiddleware of register
then in authcontroller register
then create validationMiddleware of login
then in login authcontroller

now in tokenUtils

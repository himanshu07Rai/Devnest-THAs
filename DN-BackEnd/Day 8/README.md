# MIDDLEWARES

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

Mostly used for validating user provided info and authorising user

# app.use()

## app.use(functionName);

functionName will be used as the first function for every route

```
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

```

Only routes declared below the decleraton of app.use(func) can use func .

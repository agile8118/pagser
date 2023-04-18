#####Conventions used for message responses that don't contain any database data:

For success Responses:
  - 200: OK, returns an object {message: "like this"}
  - 201: Created, something was created returns {message: "like this"}

For error responses:
  - 400: Bad Request
    There's something wrong with the data provided, server will not process the request.
    Return and error message as a string in lowercase format, like 'bad info' if it's something in the client code, or an object {message: "like this"} if it relates to the data provided
  - 401: Unauthorized
    If user is not authenticated
  - 403: Forbidden, usually for authorization, just returns 'not permitted'
  - 404: Not Found
  - 500: Internal Server Error
    Everything seemed fine but something unexpected happened, returns the string "Internal server error."

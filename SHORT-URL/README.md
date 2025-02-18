# URL Shortner

---

Design a url shortner service that takes a valid URL and return a shortned URL, redirecting the user to the previously provided URL.

Also, Keep track of total visits/clicks on the URL.

## Routes

```
- [POST/URL] - Generate a new short URL and returns the shortened URL in the format.
- [GET/:id] - Redirects the user to the original URL
- [GET/URL/analytics/:id] - returns the clicks for the provided short id.
```

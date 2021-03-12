# Postman Demo

1. `git clone` && `cd postman-demo`
2. `createdb postman-demo`
3. `npm i`
4. `npm run start` to spin up the server && seed database
5. Demo routes via `http://localhost:1337/api/brands`

## Available Routes

> // GET /api/brands - Get All Brands

```
localhost:1337/api/brands
```

> // POST /api/brands — Create a Brand

```
localhost:1337/api/brands
```

> // GET /api/brands/:brandId - Get Single Brand

```
localhost:1337/api/brands/1
```

> // PUT /api/brands/:brandId - Update a Brand

```
localhost:1337/api/brands/1
```

> // DELETE /api/brands/:brandId - Delete a Brand

```
localhost:1337/api/brands/1
```

### JSON Shape

- Can be added to the Brands table

```
{
    "name": "Older Brother",
    "location": "Los Angeles, CA",
    "category": "Clothing"
}
```

### Note:

- There are also endpoints for `/users` and `/products`. Feel free to copy the logic from `/brands` and build out `seed.js` with your own data.

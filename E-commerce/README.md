# E-commerce Back End 
The project is a e-commerce backend project

# Installation
steps on how to Run the Project 

1. Run `npm install` to install the project dependencies
2. Open MySQL shell and run the schema file `source db/schema.sql` make sure the path is correct 
    then input `use ecommerce` to ensure you use the database
3. Now quit the MySQL shell
4. run `npm run seed` to generate the data or run `node seeds/index.js`
5. to start the application run `node server.js`
6. To access the server on the browser go to `http://localhost:3001`
7. Then you can access the data when you access the routes as follows:
    - categories : `http://localhost:3001/api/categories/1`
    - products: `http://localhost:3001/api/products`
    - tags: `http://localhost:3001/api/tags`


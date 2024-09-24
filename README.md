# Minor Cineplex using NextJS

To install the package, run:

```bash
$ npm install
```

## About the Database
You need pgAdmin 4 to manage PostgreSQL.

Add the following to your .env file:

```properties
  DATABASE_URL="postgresql://postgres:password@[host-name]:5432/[DB name]"
```

- Replace [host-name] with your database hostname.
- Replace [DB name] with your database name.

to create the schema run :

```bash
  $ prisma migrate dev --name updateblabla
```

Next, download the SQL file from this [link](https://www.example.com/my%20great%20page) and execute the script in pgAdmin 4's query tool.

### Now you can run your app following this command :

```bash
  $ npm run dev
```

## About Structure

- ### In `lib` folder
  this folder contain typescript file called **db.ts** that setting up a singleton pattern for the PrismaClient, which is used to interact with a database using the Prisma ORM. The goal is to ensure that only one instance of PrismaClient is created and used throughout the application, avoiding potential issues related to multiple instances
  <br>
  **How to use??**

  just put following

  ```typescript
  import prisma from "@/lib/db"
  ```

  in the top of your .ts file

- ### In `actions` folder
   - The actions folder often contains functions or classes in `TypeSciprt` format that encapsulate business logic and interactions with data.

   - This could include operations like creating, reading, updating, or deleting data, as well as handling authentication, authorization, or any other application-specific logic.

- ### In `components` folder
  The components folder is where you define and store reusable UI elements. Each component is responsible for rendering a specific part of the user interface and can be used throughout the application wherever that part of the UI is needed.
  - #### Main components
    I put the main components that combine each smaller components together.
    ##### here are the list of the main components used in this app
    
  The app folder introduces a new approach to file-based routing, allowing for more dynamic and complex routing configurations. It offers more control over route nesting, layouts, and data fetching.

  #### Key Features and Files in the `app` Folder
  #### 1. `page.tsx`
  - Defines the main content for a particular route.
  #### 2. `layout.tsx`
  - Defines a layout component that wraps around your pages, allowing for consistent UI elements like headers, footers, and navigation to be shared across multiple `pages`.




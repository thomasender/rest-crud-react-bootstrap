# Simple CRUD App with React.js, Json-Server as Rest Api and ReactBootstrap

## Project Overview

This project is a simple CRUD (Create, Read, Update, Delete) application built with React.js, using Json-Server as a mock REST API and ReactBootstrap for the user interface. The application allows users to create, read, update, and delete posts.

### Project Structure

The project is structured into several components and a custom hook:

- **App**: The root component that orchestrates other components and manages the state related to the posts.
- **ShowPosts**: Displays a list of posts and allows the user to delete or edit a post.
- **CreatePost**: Provides a form for creating new posts.
- **EditPost**: Allows the user to edit a selected post.
- **usePosts**: A custom hook that fetches posts from the server and provides a way to trigger a refetch of the posts.

The project also includes a constants file for storing constant values and a `package.json` file for managing dependencies and scripts.

### Tools and Libraries

The project uses several libraries and tools, including React, Axios for HTTP requests, Bootstrap for styling, Json-Server for creating a fake REST API, and TypeScript for static type checking. The code is linted using ESLint, and the project is built and served using Vite.

## Getting Started

- run `yarn` to install all the dependencies
- run `yarn backend` to start the json-server
- run `yarn dev` to start the react app

## Backend: Json Server

The backend is a simple json-server with a db.json file that contains the data.
All the data is stored in the db.json file.
It acts like a REST API and provides the data for the frontend.
The Json Server spins up on port 3333.
The `posts` endpoint is available and provides the following methods:
- GET /posts
- GET /posts/:id
- POST /posts
- PUT /posts/:id
- DELETE /posts/:id


## Frontend: React App

The frontend is built with React.js and uses ReactBootstrap for the UI.
The app utilises the json-server as a REST API to perform CRUD operations.
The components:

## App Component

The `App` component is the root component of the application. It orchestrates the other components and manages the state related to the posts.

### Imports

The `App` component imports several hooks and components:

- `useState` from `react` for managing local state.
- `CreatePost`, `EditPost`, and `ShowPosts` components for creating, editing, and displaying posts respectively.
- `usePosts` custom hook for fetching posts from the server.

### State

The `App` component maintains two pieces of state:

- `posts` and `triggerRefetch` from the `usePosts` hook. `posts` is an array of posts fetched from the server, and `triggerRefetch` is a function to refetch the posts.
- `postToUpdateId` is a state variable that holds the ID of the post to be updated. It's initially `undefined`.

### Functions

The `App` component defines one function:

- `onEditComplete` sets `postToUpdateId` back to `undefined` and triggers a refetch of the posts. This function is called when the editing of a post is completed.

### Render

The `App` component renders a `div` that contains the `CreatePost`, `ShowPosts`, and `EditPost` components. 

- `CreatePost` is passed the `triggerRefetch` function as a prop so it can trigger a refetch after creating a new post.
- `ShowPosts` is passed the `posts` array, the `triggerRefetch` function, and the `setPostToUpdateId` function as props. It displays the posts and allows the user to choose a post to edit.
- `EditPost` is passed the `postToUpdateId` and the `onEditComplete` function as props. It allows the user to edit the selected post and triggers the `onEditComplete` function when the editing is done.

## ShowPosts Component

The `ShowPosts` component is responsible for displaying a list of posts. It uses the `axios` library to send HTTP requests, and Bootstrap for styling.

### Props

The `ShowPosts` component accepts three props:

- `posts`: An array of posts to be displayed.
- `triggerRefetch`: A function that triggers a refetch of the posts. This function is called after a post is successfully deleted.
- `setPostToUpdateId`: A function that sets the ID of the post to be updated. This function is called when the user clicks the "Edit" button of a post.

### Functions

The `ShowPosts` component defines two functions:

- `onDeletePost`: This function is called when the user clicks the "Delete" button of a post. It sends a DELETE request to the server to delete the post, and triggers a refetch of the posts.

- `onEditPost`: This function is called when the user clicks the "Edit" button of a post. It sets the ID of the post to be updated.

### Render

The `ShowPosts` component renders an unordered list of Bootstrap `Card` components. Each `Card` contains a `CardBody` that displays the title and content of a post, and "Delete" and "Edit" buttons. The `onDeletePost` function is attached to the `onClick` event of the "Delete" button, and the `onEditPost` function is attached to the `onClick` event of the "Edit" button.


## CreatePost Component

The `CreatePost` component is a form for creating new posts. It uses the `axios` library to send HTTP requests, and Bootstrap for styling.

### Props

The `CreatePost` component accepts one prop:

- `triggerRefetch`: A function that triggers a refetch of the posts. This function is called after a new post is successfully created.

### State

The `CreatePost` component maintains one piece of state:

- `newPost`: An object representing the new post to be created. It has `title` and `content` properties, both of which are initially empty strings.

### Functions

The `CreatePost` component defines two functions:

- `onInput`: This function is called when the user types into the title or content input fields. It updates the `newPost` state with the new input.

- `onCreatePost`: This function is called when the user clicks the "Create New Post" button. It first checks if the `newPost` object is valid (i.e., both the title and content are non-empty). If it's valid, it sends a POST request to the server to create the new post, resets the `newPost` state, and triggers a refetch of the posts.

### Render

The `CreatePost` component renders a Bootstrap `Card` that contains a `CardBody`. Inside the `CardBody`, there are two input fields for the title and content of the new post, and a "Create New Post" button. The `onInput` function is attached to the `onChange` event of the input fields, and the `onCreatePost` function is attached to the `onClick` event of the button.


## EditPost Component

The `EditPost` component is responsible for editing a post. It uses the `axios` library to send HTTP requests, and Bootstrap for styling.

### Props

The `EditPost` component accepts two props:

- `postId`: The ID of the post to be edited.
- `onEditComplete`: A function that is called when the editing of a post is completed.

### State

The `EditPost` component maintains one piece of state:

- `postToUpdate`: An object representing the post to be updated. It's initially `undefined`.

### Functions

The `EditPost` component defines four functions:

- `fetchPost`: This function is called when the `postId` prop changes. It sends a GET request to the server to fetch the post to be updated, and sets the `postToUpdate` state with the fetched post.

- `handleHide`: This function is called when the modal is closed. It triggers the `onEditComplete` function.

- `onInput`: This function is called when the user types into the title or content input fields. It updates the `postToUpdate` state with the new input.

- `onSave`: This function is called when the user clicks the "Save changes" button. It sends a PUT request to the server to update the post, resets the `postToUpdate` state, and triggers the `onEditComplete` function.

### Render

The `EditPost` component renders a Bootstrap `Modal` that contains a `Modal.Dialog`. Inside the `Modal.Dialog`, there are input fields for the title and content of the post, and "Close" and "Save changes" buttons. The `onInput` function is attached to the `onChange` event of the input fields, the `handleHide` function is attached to the `onClick` event of the "Close" button, and the `onSave` function is attached to the `onClick` event of the "Save changes" button.


## usePosts Hook

The `usePosts` hook is responsible for fetching posts from the server and providing a way to trigger a refetch of the posts.

### State

The `usePosts` hook maintains two pieces of state:

- `posts`: An array of posts fetched from the server. It's initially an empty array.
- `refetch`: A number that is incremented each time a refetch of the posts is triggered. It's initially `0`.

### Functions

The `usePosts` hook defines two functions:

- `triggerRefetch`: This function increments the `refetch` state, which triggers a refetch of the posts.

- `fetchPosts`: This function is called when the `usePosts` hook is mounted and each time the `refetch` state changes. It sends a GET request to the server to fetch the posts, and sets the `posts` state with the fetched posts.

### Return

The `usePosts` hook returns an object with two properties:

- `posts`: The array of posts fetched from the server.
- `triggerRefetch`: The function to trigger a refetch of the posts.


## Constants File

The `constants` file is responsible for storing constant values that are used throughout the application. 

### JSON_SERVER_BASE_URL

The `JSON_SERVER_BASE_URL` constant is the base URL of the JSON server from which the application fetches and updates posts. It's set to `'http://localhost:3333'`.


## Package.json File

The `package.json` file is responsible for managing the dependencies and scripts for the project.

### Dependencies

The project uses several dependencies:

- `react` and `react-dom` for building the user interface.
- `axios` for making HTTP requests.
- `bootstrap` and `react-bootstrap` for styling the components.
- `json-server` for creating a fake REST API for development purposes.
- `@popperjs/core` and `sass` for additional styling and positioning capabilities.
- `@types/node`, `@types/react`, and `@types/react-dom` for TypeScript type definitions.
- `global` for global variables.

### Dev Dependencies

The project uses several development dependencies:

- `typescript` for using TypeScript.
- `eslint`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh` for linting the code.
- `@vitejs/plugin-react` and `vite` for a faster and leaner development experience.

### Scripts

The project defines several scripts for development, building, and linting:

- `dev` for starting the development server.
- `backend` for starting the JSON server.
- `build` for building the project.
- `lint` for linting the code.
- `preview` for previewing the production build.


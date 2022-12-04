**Read in other languages: [English](README.en.md), [Українська](README.md).**

# Preparing a project

1. You have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Creat with [Create React App](https://github.com/facebook/create-react-app).
   To get acquainted and configure additional features
   [refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).
3. Install the project's base dependencies with the `npm install` command.
4. Start development mode by running the `npm start` command.
5. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to the project files.

# Admission criteria

- The `goit-react-hw-07-feedback` repository has been created.
- When submitting homework, there are two links: to the source files and the
  working pages of each assignment on `GitHub Pages`.
- Redux-state stores the minimum required set of data.
- There are no errors or warnings in the console when running the job code.
- For each component has a separate folder with the React-component file and
  styles file.
- For the components are described `propTypes`.
- Use of the library `Redux Toolkit`.

## Contact Book.

Refactor the "Contact Book" application code.Remove the code responsible for
storing and reading contacts from the local storage, and add communication with
the backend for storing contacts.

### Backend

Create your own personal backend for development with the UI service
[mockapi.io](https://mockapi.io/). Sign up using your GitHub account. Create a
resource `contacts` to get your handpoint `/contacts`. Use resource constructor
and describe the contact object as on the picture.

<Image
  src="./assets/api.png"
  alt="component preview"
  maxWidth={960}
/>

### State Form

Add the load and error indicator handling to the Redux state. To do this, change
the state form.

```jsx
{
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}
```

### Operations

Use [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) to
declare asynchronous action generators and make HTTP requests. Do the processing
of the actions and change data in Redux state with
[createSlice](https://redux-toolkit.js.org/api/createSlice).

Declare the following operations:

- `fetchContacts` - get an array of contacts (GET method) by GET request. The
  basic type of action `"contacts/fetchAll"`.
- `addContact` - add contact (POST method). Basic type of action
  `"contacts/addContact"`.
- `deleteContact` - deletes a contact (DELETE method). Basic type of action
  `"contacts/deleteContact"`.

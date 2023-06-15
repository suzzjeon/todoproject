![todo](https://github.com/suzzjeon/todoproject/assets/133937368/2bf9b356-4f60-49f3-83db-209bfcbab9d7)

### How To Use

---

```
# clone this repository
$ git clone git@github.com:suzzjeon/todoproject.git

# into the repository
$ cd todoproject

# install dependencies
$ yarn install

# run
$ yarn start
```

### Key Features

---

- Add Todo
     - Easily add new todos using the AddTodoForm. Input fields are cleared after submission.

 - Update Todo Status
    - Mark todos as done or delete them using the TodoItem component.

- Display Todo List
    - The TodoList component categorizes and displays the list of todos.

-  Local Storage Management:
    - UseLocalStorage hook for state management with local storage.

### Components

---

- AddTodoForm: 
    - Allows users to add new todos with a form. Clears input fields after submission.

- TodoItem: 
    - Represents a single todo item. Provides options to mark as done or delete.

- TodoList: 
    - Displays the list of todos. Renders TodoItem for each todo..

- UseLocalStorage: 
    - Custom hook for managing state with local storage.

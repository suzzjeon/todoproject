# [Todo Project](https://todoproject-suzzjeon.vercel.app/)

This is a simple web application for managing todo items. You can add new todos, update their status, and view the todo list.

## How To Use

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
- Update Todo Status
- Display Todo List
- View Todo Details

### Components

---

- AddTodoForm:

  - Allows users to add new todos with a form. Clears input fields after submission.

- TodoItem:

  - Represents a single todo item. Provides options to mark as done or delete.

- TodoList:

  - Displays the list of todos. Renders TodoItem for each todo.

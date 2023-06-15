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
     - Users can easily add new todos using the AddTodoForm. Input fields are cleared after submission.  <br>

 - Update Todo Status
    - Users can mark todos as done or delete them using the TodoItem component. <br> 

- Display Todo List
    - The TodoList component displays the list of todos, categorized as working or done.  

-  Local Storage Management:
    - UseLocalStorage hook allows for state management with local storage, storing and retrieving values using a specified key.   

### Components

---

* AddTodoForm: 
Allows users to add new todos with a form. Clears input fields after submission.

* TodoItem: 
Represents a single todo item. Displays title and body, provides options to mark as done or delete.

* TodoList: 
Displays the list of todos. Renders TodoItem for each todo, categorized as working or done.

* UseLocalStorage: 
Custom hook for managing state with local storage. Stores and retrieves values using a specified key.

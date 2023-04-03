
import './App.css';
import {useEffect} from 'react'
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from 'react';
import { AddTodo } from "./MyComponents/AddTodo";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { About } from "./MyComponents/About";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("->ondelete<-", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, description) => {
    console.log("I'm adding a todo", title, description)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);




  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
      <Header title="My Todos list" searchBar={true} />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
        </Switch>
      
      <Footer />
    </Router>
    </>
  );
}

export default App;

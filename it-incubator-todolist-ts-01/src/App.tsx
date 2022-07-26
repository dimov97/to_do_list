import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const tasks1 = [
        { id: 1, title: "html_css", isDone: true },
        { id: 2, title: "js", isDone: true },
        { id: 3, title: "reactJS", isDone: false },
        { id: 4, title: "reactJS444", isDone: true },
    ]

    const tasks2 = [
        { id: 1, title: "hello, world", isDone: true },
        { id: 2, title: "i am happy", isDone: false },
        { id: 3, title: "yo", isDone: false },
    ]

    return (
        <div className="App">
            <Todolist shapka={"111"} body={1} tasks={tasks1} />
            <Todolist shapka={"222"} body={2} tasks={tasks2} />
        </div>
    );
}

export default App;


import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTodo = () => {
    // console.log(inputValue);
    let found = false;
    for (let i = 0; i < tasks.length; i++) {
      let task = tasks[i];
      if (task === inputValue) {
        alert("Already added the task")
        found = true;
        break;
      }
    }
    if (!found) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  }

  const removeTask = (taskTobeRemoved) => {
    const remainingTasks = tasks.filter(task => task !== taskTobeRemoved);
    setTasks(remainingTasks);
  }

  return (
    <div style={{ margin: "20px" }}>
      <h2>To-Do List</h2>
      <div>
        <input
          placeholder="Enter Todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul className="tasks-list">
        {
          tasks.map(task => {
            return (
              <li className="task">
                <span>{task}</span>
                <button onClick={() => removeTask(task)}>Delete</button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App

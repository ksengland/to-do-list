import { useState } from "react";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    "walk dog",
    "bake a cake",
    "wash car",
    "drink water",
    "conquer the world",
  ]);
  const [userTask, setUserTask] = useState("");

  const handleClick = (event) => {
    setTasks([...tasks, userTask]);
    setUserTask("");
  };
  return (
    <div className="App">
      <h1>My Important Tasks!</h1>
      <input
        value={userTask}
        onChange={(event) => setUserTask(event.target.value)}
        type="text"
      />
      <button onClick={handleClick}>Add Task</button>

      {tasks.map((task) => (
        <Task description={task} key={task} />
      ))}
    </div>
  );
}

export default App;

//need to know if we have clicked on task itself or not
//change style according to previous info

import { useState } from "react";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "walk dog" },
    { id: 2, description: "bake a cake" },
    { id: 3, description: "wash car" },
    { id: 4, description: "drink water" },
    { id: 5, description: "conquer the world" },
  ]);
  const [userTask, setUserTask] = useState({ id: 0, description: "" });

  const handleSubmitTask = () => {
    setTasks([...tasks, userTask]);
    setUserTask({ description: "" });
  };

  const handleChange = (event) => {
    setUserTask({ id: tasks.length + 1, description: event.target.value });
  };

  const handleDelete = (clickedTask) => {
    const filteredTasks = tasks.filter((task) => task.id !== clickedTask);
    setTasks(filteredTasks);
  };

  const handleEdit = (id, editedTask) => {
    const editedTasks = tasks.map((task) => {
      if (id === task.id) {
        task.description = editedTask;
        return task;
      } else {
        return task;
      }
    });

    setTasks(editedTasks);
  };
  return (
    <div className="App">
      <h1>My Important Tasks!</h1>
      <input value={userTask.description} onChange={handleChange} type="text" />
      <button onClick={handleSubmitTask}>Add Task</button>

      {tasks.map((task) => (
        <Task
          id={task.id}
          handleDelete={handleDelete}
          description={task.description}
          handleEdit={handleEdit}
          key={task.id}
        />
      ))}
    </div>
  );
}

export default App;

//once user clicks on save edit we send information of task id + edited task to App
//on App, iterate over tasks array, if task === edited task, return edited content instead of task itself

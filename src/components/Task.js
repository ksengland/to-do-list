import { useState } from "react";

const Task = ({ id, description, handleDelete, handleEdit }) => {
  const [isDone, setIsDone] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTask, setIsEditedTask] = useState(description);

  const handleSaveTask = () => {
    setIsEditMode(false);
    handleEdit(id, editedTask);
  };

  return (
    <div className="task">
      <div onClick={() => setIsDone(!isDone)}>
        <p className={isDone ? "task-description" : ""}>
          {isEditMode ? (
            <input
              onChange={(e) => setIsEditedTask(e.target.value)}
              type="text"
              value={editedTask}
            />
          ) : (
            description
          )}
        </p>
        {isEditMode && <button onClick={handleSaveTask}>Save</button>}
      </div>
      <div>
        <button className="button" onClick={() => handleDelete(id)}>
          X
        </button>
        <button className="button" onClick={() => setIsEditMode(!isEditMode)}>
          ...
        </button>
      </div>
    </div>
  );
};

export default Task;

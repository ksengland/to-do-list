import { useState } from "react";

const Task = ({ description }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      onClick={() => {
        return setIsDone(!isDone);
      }}
    >
      <p className={isDone ? "task-description" : ""}>{description}</p>
    </div>
  );
};

export default Task;

import classNames from "classnames";
import { useStore } from "../store";
import { FaTrash } from "react-icons/fa";
import "./Tasks.css";

//  for debugging
// const debuggingStatus = "planned";

function Tasks({title}) {
    // the prop is a title because the task carries title of the task

    const task = useStore((store) => store.tasks.find((task) => task.title === title ));
    // specify and find the exact task that i used in the prop task in the store.js
    // this will allow us to get the other additional details like status/state

    const deleteTask = useStore((store) => store.deleteTask);

  return (
    <div className='task'>
      <div>{task.title}</div>
      {/* <div>{title}</div> */}
      {/* this is for the debuggingStatus */}
      <div className="bottom-wrapper">
        <div><FaTrash className="delete-btn" onClick={() => deleteTask(task.title)}/></div>
        <div className={classNames("status", task.state)}>{task.state}</div> 
        {/* <div className={classNames("status", debuggingStatus)}>{debuggingStatus}</div>  */}
        {/* this is for the debuggingStatus */}
        {/* classnames is a library that simplifies adding multiple class names to a component and rendering them conditionally */}
        {/* here, we provide the className "status" and the various arguments which are stored in our debuggingStatus */}
      </div>
    </div>
  )
}

export default Tasks

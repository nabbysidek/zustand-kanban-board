import classNames from "classnames";
import "./Tasks.css";

//  for debugging
const debuggingStatus = "planned";

function Tasks({title}) {
    // the prop is a title because the task carries title of the task
  return (
    <div className='task'>
      <div>{title}</div>
      <div className="bottom-wrapper">
        <div></div>
        <div className={classNames("status", debuggingStatus)}>{debuggingStatus}</div> 
        {/* classnames is a library that simplifies adding multiple class names to a component and rendering them conditionally */}
        {/* here, we provide the className "status" and the various arguments which are stored in our debuggingStatus */}
      </div>
    </div>
  )
}

export default Tasks

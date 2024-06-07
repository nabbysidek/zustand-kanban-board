import "./Columns.css";
import Tasks from "./Tasks";
import { useState } from "react";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import { Col, Button, Modal } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

function Columns({state}) {
  // the prop is a state because each column represents a specific state

  const [ text, setText ] = useState('');
  // initialize for user's input field
  const [ open, setOpen ] = useState(false);
  // initialize a modal

  const tasks = useStore((store) => 
    store.tasks.filter((task) => task.state === state),
    // then, we use a comparison function
    // ensure that our component to only rerun on certain conditions
    shallow
  );
  // use the useStore from your own store
  // this will take in a callback
  // here, you can really selectively go ahead and select things from our store
  // store => store.tasks 
  // means that from our store, we only want to get store.tasks
  // this means that only when the tasks change will this component rerun
  // and we can go even further by filtering tasks that have state equal to our prop state in store which is 'planned'

  const addTask = useStore((store) => store.addTask);
  // allow us to add task by using the method in the store

  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);

  return (
    <Col
      className="column"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        console.log(draggedTask);
        setDraggedTask(null);
        // we set it to null because we've already dropped it thus, we're no longer dragging it
        // console.log("drop");
      }}
    >
      {/* the onDragOver is a listener to see whether a task is dragged over the column */}
      {/* the onDrop is a listener that checks when a task is dropped */}
      <div className="column-title-wrapper">
        <p>{state}</p>
        <Button
          onClick={
            () => setOpen(true)
            // {
            //   // addTask('Inline Test' + state, state);
            //   addTask('', state);
            // }
          }
        >
          <FaPlus />
        </Button>
      </div>
      {/* display list of tasks by using the mapping method */}
      {/* the mapping object (in this case is 'task') holds key-value pairs */}
      {/* With this, the user is expected to define each title of task once */}
      {tasks.map((task) => (
        <Tasks title={task.title} key={task.title} />
      ))}
      <Modal show={open} onHide={() => setOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Enter task title"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              addTask(text, state);
              setText("");
              setOpen(false);
            }}
          >
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
}

export default Columns

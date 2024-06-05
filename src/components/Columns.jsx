import "./Columns.css";
import { Col } from "react-bootstrap";
import Tasks from "./Tasks";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";

function Columns({state}) {
  // the prop is a state because each column represents a specific state

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



  return (
    <Col className='column'>
      <p>{state}</p>
      <Tasks title = "Todo"/> 
    </Col>
  )
}

export default Columns

import "./Columns.css";
import { Col } from "react-bootstrap";
import Tasks from "./Tasks";

function Columns({state}) {
  // the prop is a state because each column represents a specific state
  return (
    <Col className='column'>
      <p>{state}</p>
      <Tasks title = "Todo"/> 
    </Col>
  )
}

export default Columns

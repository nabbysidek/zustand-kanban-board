import './App.css';
import Columns from './components/Columns';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className='app'>
        <Columns state="planned"/>
        <Columns state="ongoing"/>
        <Columns state="done"/>
      </div>
    </>
  )
}

export default App

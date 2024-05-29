import './App.css'
import Columns from './components/Columns'

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

import './App.css'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Learnings } from './components/Learnings'
import { Personal_work } from './components/Personal_work'
import { Timeline } from './components/Timeline'

function App() {

  return (
    <div className='flex'>
      <div className='fixed flex-none w-[20vw] h-[100vh] bg-orange-300 text-center'>test</div>
      <div className='flex-1 w-[80vw] ml-[20vw]'>
        <div className='h-[100vh] text-center'><Home/></div>
        <div className='h-[100vh] text-center'><Learnings /></div>
        <div className='h-[100vh] text-center'><Timeline /></div>
        <div className='h-[100vh] text-center'><Personal_work /></div>
        <div className='h-[100vh] text-center'><Contact /></div>
      </div>
    </div>
  )
}

export default App

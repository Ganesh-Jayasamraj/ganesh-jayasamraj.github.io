import './App.css'
import { Contact } from './components/Contact/Contact'
import { Home } from './components/Home/Home'
import { Learnings } from './components/Learning/Learnings'
import { Navigation } from './components/Navigation/Navigation'
import { Personal_work } from './components/Personal_work/Personal_work'
import { Timeline } from './components/Timeline/Timeline'

function App() {

  return (
        <div className=' bg-blue-950'>
          <Home />
          <Navigation />
          <Learnings />
          <Timeline />
          {/* <Personal_work /> */}
          <Contact />
        </div>
  )
}

export default App

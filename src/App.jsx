import './App.css'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Learnings } from './components/Learnings'
import { Music_player } from './components/Music_player'
import { Navigation } from './components/Navigation'
import { Personal_work } from './components/Personal_work'
import { Timeline } from './components/Timeline'

function App() {

  return (
  <div className=' bg-blue-950'>
    <Home />
    <Navigation />
    {/* <Music_player /> */}
    <Learnings />
    <Timeline />
    <Personal_work />
    <Contact />
  </div>
  )
}

export default App

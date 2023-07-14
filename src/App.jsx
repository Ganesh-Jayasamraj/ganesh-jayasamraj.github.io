import './App.css'
import { Contact } from './components/Contact/Contact'
import { Gallery } from './components/Gallery/Gallery'
import { Home } from './components/Home/Home'
import { Learnings } from './components/Learning/Learnings'
import { Navigation } from './components/Navigation/Navigation'
import { Personal_work } from './components/Personal_work/Personal_work'
import { Timeline } from './components/Timeline/Timeline'

function App() {

  return (
        <div>
          <head>
            <title>Home</title>
          </head>
          <Home />
          <Navigation />
          <Learnings />
          <Timeline />
          <Personal_work />
          {/* <Gallery /> */}
          <Contact /> 
        </div>
  )
}

export default App

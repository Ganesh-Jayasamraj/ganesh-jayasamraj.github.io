import './App.css'

function App() {

  return (
    <div className='flex'>
      <div className='fixed flex-none w-[20vw] h-[100vh] bg-orange-300 text-center'>test</div>
      <div className='flex-1 w-[80vw] bg-green-700 ml-[20vw]'>
        <div className='h-[100vh] text-center'>1</div>
        <div className='h-[100vh] text-center'>2</div>
        <div className='h-[100vh] text-center'>3</div>
        <div className='h-[100vh] text-center'>4</div>
      </div>
    </div>
  )
}

export default App

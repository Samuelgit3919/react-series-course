
import './App.css'
import Card from './components/Card'

function App() {
 
  return (
    <>
      <h2 className='text-3xl bg-green-500 p-3 rounded'>
         vite with Tailwind
      </h2>
      <Card />
      <Card username='dax'/>
      <Card username='sami 3'/>
     
    </>
  )
}

export default App

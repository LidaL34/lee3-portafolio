import './App.css'
import { Header } from './components'
import { Button } from './ui'

function App() {


  return (
    <>
      <Header />
      <h1>Hola desde app</h1>
      <Button
      className={'primary-btn'} 
      name={'Button'} />
    </>
  )
}

export default App

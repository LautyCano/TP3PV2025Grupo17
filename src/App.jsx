import { useState } from 'react'
import './assets/css/App.css'
import Tarea from './assets/components/Tarea';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Tarea/>
    </>
);
}

export default App
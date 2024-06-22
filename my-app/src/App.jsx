import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './component/Counter'
import { Timer } from './component/Timer'
function App() {
  const [count, setCount] = useState(0)
  let [cle,setCle]=useState("")
  let [sec,setSec]=useState(0)
  let [min,setMin]=useState(0)
  let [hours,setHour]=useState(0)
  let inc=useCallback(()=>{
    setCount(count+1)
  },[count])
  let dec=useCallback(()=>{
    setCount(count-1)
  },[count])

  function start(){
    let a=setInterval(calculate,1000)
    setCle(a)
  }
  function calculate(){
    setSec(sec => {
      if(sec < 60) {
          return sec+ 1;
      }else{
          setMin(min =>{
            if(min<60){
              return min+1
            }else{
              setHour(hours=>hours+1)
              return 0
            }
          });
          return 0;
      }
    })
  }
  function stop(){
    clearInterval(cle)
  }
  function pause(){
    clearInterval(cle)
    setSec(0)
    setMin(0)
    setHour(0)
  }
  return (
    <>
      <div>
        <h1>COUNTER</h1>
        <h2>count:{count}</h2>
        <Counter inc={inc} dec={dec}/>
      </div>
      <div>
        <h1>Timer</h1>
        <h3>{`${hours}`}:{`${min}`}:{`${sec}`}</h3>
        <Timer start={start} stop={stop} pause={pause}/>
      </div>
    </>
  )
}

export default App

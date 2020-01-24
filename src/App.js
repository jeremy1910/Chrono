import React, { useState, useEffect, Fragment } from 'react';

import 'minireset.css'
import './styles/styles.scss';
import Timer from './components/Timer';
import  Commands  from './components/Commands';
import {CSSTransition} from 'react-transition-group'

function App() {

  const [valueInput, setValueInput] = useState(10)
  const [start, setStart] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [countValue, setCountValue] = useState(0)
  const [compteurTour, setCompteurTour] = useState([])

  let timerRef = null
  let refDisplayTour = null

  useEffect(() => {
    setHidden(false)
  }, [hidden])

  const handelChange = (e) => {
    setValueInput(e.target.value)

  }

  const handelOnFirstStart = () => {
    if (timerRef) {

      timerRef.style.animation = `timerAnim ${valueInput}s`
    }

  }


  const handelClickTour = () => {

    const countToAdd = document.getElementsByClassName('insideTimer')[0]
    const container = refDisplayTour.clientHeight
    const windowsHeight = window.innerHeight
    const OneRem = parseFloat(window.getComputedStyle(document.getElementsByTagName('body')[0], null).getPropertyValue('font-size'))

    if((container + OneRem*3) < windowsHeight){
      setCompteurTour([...compteurTour, countToAdd.innerText])
    }else{
      
      const compteurTourCopy = [...compteurTour]
      compteurTourCopy.pop()
      setCompteurTour([...compteurTourCopy, countToAdd.innerText])
    }

    
  }

  const handelPlayPause = () => {
    setStart(!start)

  }

  const handelClickSetButton = () => {

    setHidden(true)
    setCompteurTour([])
  }

  const displayCountTour = () => compteurTour.map((cnt, index) => <CSSTransition appear={true} key={index} in={true} classNames="fade" timeout={3000}><li >   <span>Tour {index+1} : </span>{cnt}</li></CSSTransition>)

  return (
    <div className={"main-container"}>

      <div className={'timer'}>
        <Timer
          Count={countValue}
          Start={start}
          OnStop={() => { setHidden(true) }}
          Reset={hidden}
          ClassName={'insideTimer'} />
      </div>

      <Commands handelClickTour={handelClickTour} handelPlayPause={handelPlayPause} handelClickSetButton={handelClickSetButton}></Commands>
      <div ref={ c => refDisplayTour = c} className={'display-tour'}>
      {compteurTour.length > 0 ?
           
           <ul>
             
              {displayCountTour()}
         
           </ul>
         
    :null}
 </div>
    </div>

  );
}

export default App;

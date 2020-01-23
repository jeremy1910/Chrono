import React, { useState, useEffect, Fragment } from 'react';

import 'minireset.css'
import './styles/styles.scss';
import Timer from './components/Timer';



function App() {

  const [valueInput, setValueInput] = useState(10)
  const [start, setStart] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [countValue, setCountValue] = useState(0)

  let timerRef = null

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

  const handelPlayPause = () => {
    setStart(!start)
    if (start) {
      timerRef.style.animationPlayState = 'paused'
    }
    else {
      timerRef.style.animationPlayState = 'running'
    }

  }

  const handelClickSetButton = () => {
    setCountValue(valueInput)
    setHidden(true)
  }

  return (
    <Fragment>
      {!hidden ?
        <div className={'timer'} ref={c => timerRef = c}>
          <Timer
            Count={countValue}
            Start={start}
            OnStop={() => { setHidden(true) }}
            OnFirstStart={handelOnFirstStart}
            ClassName={'insideTimer'} />
        </div>
        : null}

      <input className={'timerButton'} type="text" value={valueInput} onChange={handelChange} />
      <div className={'btn-group'}>
        <button className={'btn'} onClick={handelPlayPause}>Start/Stop</button>
        <button className={'btn'} onClick={handelClickSetButton}>Set value</button>
      </div>
    </Fragment>

  );
}

export default App;

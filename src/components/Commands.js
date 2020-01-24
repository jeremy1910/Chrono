import React from 'react';

const Commands = (props) => (<div className={'container-btn'}>

  <button onClick={props.handelClickTour} id={'tour-btn'} className={'btn'}>Tour</button>
  <div className={'btn-group'}>
    <button className={'btn w-50'} onClick={props.handelPlayPause}>Start/Stop</button>
    <button className={'btn w-50'} onClick={props.handelClickSetButton}>Reset</button>
  </div>
</div>);


export default Commands
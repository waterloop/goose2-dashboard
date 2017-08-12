import React from 'react'
import {connect} from 'react-redux'
import SemiCircle from '../../components/SemiCircle'
import Line from '../../components/LineGauge'
import '../../scss/InnerCluster.scss'

const InnerCluster = ({
  state,
  pressure,
  battery48,
  battery24,
  battery5}) => {
  return (
    <div className='container-fluid' id='inner-cluster'>
      <div className='row'>
        <div style={{margin:'auto'}}>
          <h4>State: {state}</h4>
        </div>
      </div>
      <div className='row'>
        <SemiCircle
          min={0}
          max={100}
          value={pressure}
          label='Pressure'
          unit='PSI'
          width={200}/>
      </div>
      <h6 style={{textAlign: 'center', marginTop: 20}}>Batteries</h6>
      <div className='row'>
        <Line
          min={0}
          max={100}
          value={pressure}
          label='48V'
          unit=''
          width={200}/>
      </div>
      <div className='row'>
        <Line
          min={0}
          max={100}
          value={pressure}
          label='24V'
          unit=''
          width={200}/>
      </div>
      <div className='row'>
        <Line
          min={0}
          max={100}
          value={pressure}
          label='5V'
          unit=''
          width={200}/>
      </div>
    </div>
  )
}


export default connect(state => Object({
  pressure: state.controls.magwheel
}))(InnerCluster)
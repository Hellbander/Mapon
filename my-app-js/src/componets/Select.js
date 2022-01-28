import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import axios from 'axios'
import Select from 'react-select';
import { getUnits, setUnits } from '../store'

import './Select.css'

function CakeContainer (props) {
  const dispatch = useDispatch()
  const [vehicleNumber, selecteVehicleNumber] = useState({});
  const storeUnits = props.units && props.units.units.data
  const selectOptions = []
  storeUnits && storeUnits.units.map((unit) => {
    selectOptions.push({
      value: unit.number,
      label: unit.number,
    })
  })
  useEffect(() => {
    axios
      .get(`https://mapon.com/api/v1/unit/list.json?key=ed6dc5516f66531096e66628e84d10fd2371c87a`)
      .then(response => {
        console.log('response',response.data)
        dispatch(setUnits(response.data))
      })
      .catch(error => {
        console.log('error', error)
      })
  }, []);

  const handleSelect = (e) => {
    let selectedCar
    storeUnits.units.map((carNumber, index) => {
      if (e.value === carNumber.value) selectedCar = storeUnits[index]
    })
    selecteVehicleNumber(selectedCar)
  }

  console.log('props', storeUnits)
  console.log('selectOptions', selectOptions)

  return (
    <div className='select-wrapper'>
      <span className='label'>Vehicle number</span>
      <Select
        className='select'
        options={selectOptions}
        value={vehicleNumber}
        label='Car'
        onChange={(e) => handleSelect(e)}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    units: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUnits: () => dispatch(getUnits()),
    setUnits: () => dispatch(setUnits())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)

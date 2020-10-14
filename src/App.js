import React, { useState } from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import { data, commonOrderData } from './cartDetails/cartItems';

//ChildComponents

import TopCard from './components/commonOrder';
import MainCart from './components/mainCart';
import SliderChange from './components/slider';
import FilterData from './components/filterCheckbox';
import OccasionCheck from './components/filterCheckboxOccasion';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


function App() {

  const [state, setState] = useState(data);
  const [commonState, setcommonState] = useState(commonOrderData);


  const [toggle, setToggle] = useState(false);
  const [toggleOc, setToggleOc] = useState(false);

  const format = state.map(data => {
    return (
      data.format
    )
  })

  // BoxFilteration
  const handlerRating = () => setState(state =>
    data.filter(rating => {
      return rating.rating >= 5
    })
  );
  const handlerPrice = () => setState(state =>
    data.filter(rating => {
      return (rating.price >= 100 && rating.price <= 300)
    })
  );
  const handlerNonVeg = () => setState(state =>
    data.filter(nonVeg => {
      return nonVeg.type === "nonveg"
    })
  );
  const handlerDistance = () => setState(state =>
    data.filter(dist => {
      return dist.distance <= 5
    })
  );

  // Slider
  const slider = (val) => {

    var sliderVal = val * 100
    handleChangeNew(sliderVal)
  }
  const handleChangeNew = (slides) => setState(state =>
    data.filter(rating => {
      return rating.price >= slides
    })
  );


  // FirsCheckBlock
  const checkVal = (val, booleanVal) => {
    console.log("check", val)
    var type = val
    if (booleanVal !== false)
      handleChangeCheck(type)
    else setState(data)
  }

  const handleChangeCheck = (type) => setState(state =>
    data.filter(newType => {
      return newType.format === type
    })
  );


  const checkValOccasion = (val, booleanVal) => {
    console.log("checkOcc", val)
    var type = val
    if (booleanVal !== false)
      handleChangeCheckOccassion(type)
    else setState(data)
  }
  const handleChangeCheckOccassion = (type) => setState(state =>
    data.filter(newType => {
      return newType.occassion === type
    })
  );

  const handlerSort = () => {

    // data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    // setState(data)
    { console.log(state.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))) }
    // console.log("hi", state)
  }

  return (
    <div className="App">

      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <TopCard commonState={commonState} />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div className="leftPart">
            <div className="leftHeader">
              <h3 className="filter">Filters </h3> <span className="reset">Reset All</span>
            </div>
            <div className="newStyleUnder">
            </div>
          </div>


          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <p className="formatTop" onClick={() => setToggle(!toggle)}>Format <span className="rightArr"><KeyboardArrowDownIcon /></span></p>
              {toggle === false ? <div className="toggle">
                <FilterData checkVal={checkVal} />
              </div> : null}

            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <div className="sliderChng">
                <SliderChange slider={slider} />
              </div>

            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <p className="formatTop" onClick={() => setToggleOc(!toggleOc)}>Occassion <span className="rightArr"><KeyboardArrowDownIcon /></span></p>
              {toggleOc === false ? <div className="toggle">
                <OccasionCheck checkValOccasion={checkValOccasion} />
              </div> : null}

            </Grid>

          </Grid>
        </Grid>



        <Grid item xs={12} md={8} lg={8}>
          <h3 className="rightHeader">Results({state.length})</h3>
          <MainCart cartDetails={state} handler={handlerRating} handlerPrice={handlerPrice}
            handlerNonVeg={handlerNonVeg} handlerDistance={handlerDistance} handlerSort={handlerSort} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

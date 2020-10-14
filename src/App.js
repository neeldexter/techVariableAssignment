import React, { useState } from 'react';
import './App.css';
import { Card, CardContent, Typography, Grid, TextField } from '@material-ui/core';
import { data, commonOrderData } from './cartDetails/cartItems';

import TopCard from './components/commonOrder';
import MainCart from './components/mainCart';
import SliderChange from './components/slider';
import FilterData from './components/filterCheckbox';
function App() {

  const [state, setState] = useState(data);

  const changeData = () => setState(state =>
    data.filter(priceNew => {
      return priceNew.price > 500
    })
  );
  const [commonState, setcommonState] = useState(commonOrderData);
  const format = state.map(data => {
    return (
      data.format
    )
  })
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
  // const changeDataFrequent = () => setcommonState(state =>
  //   commonOrderData.filter(ok => {
  //     return ok.price > 500
  //   })
  // );

  return (
    <div className="App">

      <Grid container>
        <button onClick={changeData}>change</button>

        <Grid item xs={12} md={12} lg={12}>
          <TopCard commonState={commonState} />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div className="leftPart">
            <div className="leftHeader">
              <h3 className="filter">Filters </h3> <span className="reset">Reset All</span>
            </div>
            <div>
              {/* <FilterData format={format} /> */}
              {/* <FilterData value="hello" /> */}
            </div>
          </div>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <SliderChange />
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <h3 className="rightHeader">Results({state.length})</h3>
          <MainCart cartDetails={state} handler={handlerRating} handlerPrice={handlerPrice}
            handlerNonVeg={handlerNonVeg} handlerDistance={handlerDistance} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

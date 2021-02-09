import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { NewOrder } from '../components/newOrder/NewOrder';
import { Detail } from '../components/orderLists/Detail';
import { OrderLists } from '../components/orderLists/OrderLists';

export const AppRouter = () => {
    return (
        <Router>
          <div>
            <Navbar/>
            <Switch>
              <Route exact path="/orderLists" component={OrderLists}/>
              <Route exact path="/newOrder" component={NewOrder}/>
              <Route exact path="/detail/:id" component={Detail}/>
            </Switch>
          </div>
        </Router>
      );
}

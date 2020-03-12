import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Items from "./components/Items";
import Category from "./components/category";
import Item2 from "./components/Item2";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/item" component={Items} />
          <Route exact path="/item/2" component={Item2} />
          <Route exact path="/category" component={Category} />
        </Switch>
      </BrowserRouter>

      {/* <Route
          exact path="/items"
          render={() => (
            <div>
              <em>List of items</em>
            </div>
          )}
        />
        <Route exact path="/items/2" render={() => <div>Item with id of 2</div>} /> */}
    </div>
  );
};

export default App;

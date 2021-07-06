import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

const HomePage = lazy(() => import("./pages/mainpage/mainpage"));
const Products = lazy(() => import("./pages/products/products"));
const Basket = lazy(() => import("./pages/basket/basket"));

const App = () => {
  return (
    <main className="container">
      <Router>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route path="/products/" render={() => <Products />} />
            <Route path="/basket/" render={() => <Basket />} />

            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </Router>
    </main>
  );
};

export default App;

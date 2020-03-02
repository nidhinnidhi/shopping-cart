import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { ShoppingProvider } from "./context/shopping-context";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Router>
        <ShoppingProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </ShoppingProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

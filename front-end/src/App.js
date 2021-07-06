import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/">
            <HomeScreen />
          </Route>

          <Route
            exact
            path="/product/:id"
            render={(props) => (
              <div>
                <ProductScreen {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/cart/:id?"
            render={(props) => (
              <div>
                <CartScreen {...props} />
              </div>
            )}
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrder from "./screens/PlaceOrder";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from "./screens/OrderListScreen";

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
            path="/admin/orderlist"
            render={(props) => (
              <div>
                <OrderListScreen {...props} />
              </div>
            )}
          />

          <Route
            exact
            path="/admin/user/:id/edit"
            render={(props) => (
              <div>
                <UserEditScreen {...props} />
              </div>
            )}
          />
                    <Route
            exact
            path="/admin/productlist"
            render={(props) => (
              <div>
                <ProductListScreen {...props} />
              </div>
            )}
          />
           <Route
            exact
            path="/admin/product/:id/edit"
            render={(props) => (
              <div>
                <ProductEditScreen {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/order/:id"
            render={(props) => (
              <div>
                <OrderScreen {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/admin/userlist"
            render={(props) => (
              <div>
                <UserListScreen {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/shipping"
            render={(props) => (
              <div>
                <ShippingScreen {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/payment"
            render={(props) => (
              <div>
                <PaymentScreen {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/placeorder"
            render={(props) => (
              <div>
                <PlaceOrder {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <div>
                <LoginScreen {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/register"
            render={(props) => (
              <div>
                <RegisterScreen {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <div>
                <ProfileScreen {...props} />
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

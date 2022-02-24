import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VehicleType from "./pages/VehicleType";
import VehiclePopular from "./pages/VehiclePopular";
import VehicleDetail from "./pages/VehicleDetail";

export default class App extends Component {
  state = {
    isLogged: true
  }

  render() {
    const {isLogged} = this.state

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout isLogin={isLogged}><Home /></Layout>
          } />
          <Route path="login" element={
            <Layout noNavbar={true}><Login /></Layout>
          } />
          <Route path="forgot-password" element={
            <Layout noNavbar={true}><ForgotPassword /></Layout>
          } />
          <Route path="signup" element={
            <Layout noNavbar={true} signup={true}><Signup /></Layout>
          } />
          <Route path="vehicle/type" element={
            <Layout isLogin={isLogged}><VehicleType /></Layout>
          } />
          <Route path="vehicle/popular" element={
            <Layout isLogin={isLogged} vehiclePopular={true}><VehiclePopular /></Layout>
          } />
          <Route path="vehicle/detail" element={
            <Layout isLogin={isLogged}><VehicleDetail /></Layout>
          } />
        </Routes>
        {/* <VehiclePopular /> */}
        {/* <VehicleType /> */}
        {/* <ForgotPassword /> */}
        {/* <Signup /> */}
        {/* {!this.state.isLogged && <Login isLogin={(value) => this.setState({isLogged: value})} />} */}
        {/* {this.state.isLogged ? (<> <NavAfterLogin />  <Home /></>) : (<> <NavBeforeLogin /> <Home /> </>)} */}
      </BrowserRouter>
    )
  }
}

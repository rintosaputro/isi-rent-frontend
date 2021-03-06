import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import VehicleType from './pages/VehicleType';
import VehicleMore from './pages/VehicleMore';
import VehicleDetail from './pages/VehicleDetail';
import Reservation from './pages/Reservation';
import History from './pages/History';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Search from './pages/Search';
import NewHistory from './pages/NewHistory';
import { getUser } from './redux/actions/auth';
import Verify from './pages/Verify';

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.token) {
      const { token } = auth;
      dispatch({
        type: 'AUTH_LOGIN_FULFILLED',
        payload: {
          data: {
            results: {
              token,
            },
          },
        },
      });
      dispatch(getUser(auth.token));
    }
  }, [dispatch, auth.token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
        }
        />
        <Route
          path="login"
          element={
            <Layout noNavbar><Login /></Layout>
        }
        />
        <Route
          path="forgot-password"
          element={
            <Layout noNavbar><ForgotPassword /></Layout>
        }
        />
        <Route
          path="signup"
          element={
            <Layout noNavbar signup><Signup /></Layout>
        }
        />
        <Route
          path="vehicle/type"
          element={
            <Layout><VehicleType /></Layout>
        }
        />
        <Route
          path="vehicle"
          element={
            <Layout vehicleMore><VehicleMore /></Layout>
        }
        />
        <Route
          path="vehicle/:id"
          element={
            <Layout><VehicleDetail /></Layout>
        }
        />
        <Route
          path="reservation/:id"
          element={
            <Layout><Reservation /></Layout>
        }
        />
        <Route
          path="payment/:id"
          element={
            <Layout><Payment /></Layout>
        }
        />
        <Route
          path="history"
          element={
            <Layout><History /></Layout>
        }
        />
        <Route
          path="profile"
          element={
            <Layout><Profile /></Layout>
        }
        />
        <Route
          path="search"
          element={
            <Layout><Search /></Layout>
        }
        />
        <Route
          path="history/:id"
          element={
            <Layout><NewHistory /></Layout>
        }
        />
        <Route
          path="verify/:type"
          element={
            <Layout noNavbar><Verify /></Layout>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

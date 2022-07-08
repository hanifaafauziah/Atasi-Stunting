import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '../page/Landing';
import Login from '../page/Login';
import Register from '../page/Register';
import Food from "../page/Food";
import Lifestyle from "../page/Lifestyle";
import Simulation from "../page/Simulation";
import StuntingDetail from "../page/StuntingDetail";
import StuntingStatistic from "../page/StuntingStatistics";
import Header from "../components/molecules/Header/Header";
import Footer from "../components/molecules/Footer/Footer";
import Dashboard from '../page/Dashboard';
import AddPatient from "../page/Patient/AddPatient";
import PatientDetails from 'page/Patient/PatientDetails';

const RouterSetup = () => {
  return (
    <Router>
      <Header/>
      <Fragment>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
          <Route path="food" element={<Food />}/>
          <Route path="lifestyle" element={<Lifestyle />}/>
          <Route path="simulation" element={<Simulation />}/>
          <Route path="stunting-detail" element={<StuntingDetail />}/>
          <Route path="stunting-statistic" element={<StuntingStatistic />}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="/add-patient" element={<AddPatient />}/>
          <Route path="/patients/:id" element={<PatientDetails />}/>
        </Routes>
      </Fragment>
      <Footer/>
    </Router>
  );
}

export default RouterSetup;
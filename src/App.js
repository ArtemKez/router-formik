import logo from './logo.svg';
import './App.css';
import { Formik } from 'formik';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {createBrowserHistory} from 'history'
import SignIn from "./components/SignIn";
import { Outlet, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import React from "react";


const history = createBrowserHistory()

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

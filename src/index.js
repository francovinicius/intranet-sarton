import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Marketing from "./Components/Marketing";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        <Banner />
        <Marketing />
    </BrowserRouter>
);


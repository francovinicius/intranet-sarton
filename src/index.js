import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Marketing from "./Components/Marketing";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import InfoGerais from "./Pages/InfoGerais";
import Mod19 from "./Pages/Mod19";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        <Banner />
        <Marketing />

        <Routes>
            <Route path="/" element={<InfoGerais />} />
            <Route path="/mod19" element={<Mod19 />} />
        </Routes>

        <Contacts />
        <Footer />
    </BrowserRouter>
);


import React, {Component} from 'react';
import './App.scss';
import CenterHeader from "./components/CenterHeader/CenterHeader";
import {Content} from "carbon-components-react";
import HomePage from "./content/HomePage/HomePage";

function App() {
    return (
        <>
            <CenterHeader/>
            <Content>
               <HomePage/>
            </Content>
        </>
    );
}

export default App;

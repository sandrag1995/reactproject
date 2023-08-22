import './App.css';
import Toolbar from "./components/catanddogapp/Toolbar";
import IndexPage from "./pages/catanddogapp/IndexPage";
import HomePage from "./pages/catanddogapp/HomePage";
import SideBar from "./components/catanddogapp/SideBar";
import Footer from "./components/catanddogapp/Footer";
import CatPhotos from "./pages/catanddogapp/CatPhotos";
import DogPhotos from "./pages/catanddogapp/DogPhotos";
import PostPage from "./pages/catanddogapp/PostPage";
import SelectedProduct from "./pages/catanddogapp/SelectedProduct";
import {BrowserRouter, Route, Routes} from "react-router-dom"


import React, {useState, useEffect, useRef} from "react"




function App() {


    return (
        <div style={{backgroundColor: "#2d2c2c"}}>
        <BrowserRouter>
            <Toolbar/>
            <div className="d-flex m-10" >
                <SideBar/>
                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/catphotos" element={<CatPhotos/>}/>
                    <Route path="/dogphotos" element={<DogPhotos />}/>
                    <Route path="/posts" element={<PostPage />} />
                    <Route path="/products/:id" element={<SelectedProduct/>}/>
                </Routes>
            </div>
        <Footer/>
        </BrowserRouter>
            </div>
    )

}

export default App;


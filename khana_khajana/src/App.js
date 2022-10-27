import logo from './logo.svg';
import './App.css';
import Nav from './components/navBar'
import {Routes,Route} from 'react-router-dom';
// import { Login } from "./pages/login";
import ItemContainer from "./pages/Item"
import React, { useState } from "react";
import {QueryClient, QueryClientProvider} from 'react-query'
// import { Register } from "./pages/register"
import Link from "./pages/link";
import Home from "./pages/home";

function App() {

  const queryClient = new QueryClient()

  
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
    <Routes >

        <Route path= "/" element={<Link/>}/>
        <Route path="view" element={<Home/>}>
            // <Route index element={<ItemContainer/>} />
          </Route>
        
    </Routes>
    
      
    </div>
    </QueryClientProvider>
  );
}

export default App;
 
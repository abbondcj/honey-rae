// import React from 'react'

// export const Home = () => {
//   return (
//     <h2>Home Page</h2>
//   )
// }

import React from "react";
import { Navigate } from "react-router-dom";
import { ApplicationViews } from "../ApplicationViews";
import { NavBar } from "../nav/NavBar";
import "../Repairs.css";

export const Home = () => {
    if (localStorage.getItem("honey_customer")) {
        return (
            <>
                <NavBar />
                <h1>Honey Rae's Repair Shop</h1>
                <ApplicationViews />
            </>
        );
      } else {
        return <Navigate to="/login" />;
      }
}
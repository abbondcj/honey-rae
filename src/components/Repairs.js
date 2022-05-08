// import React, {useEffect, useState} from "react"
// import { ApplicationViews } from "./ApplicationViews.js"
// import { NavBar } from "./nav/NavBar.js"
// import { Route, Redirect } from "react-router-dom";
// import { Login } from "./auth/Login";
// import { Register } from "./auth/Register";
// import "./Repairs.css";

// export const Repairs = () => {
//     const [customers, setCustomers] = useState([])
//     const [employees, setEmployees] = useState([])
//     const [specialties, setSpecialties] = useState("")
//     const [tickets, setTickets] = useState([])


//     useEffect(
//         () => {
//             fetch("http://localhost:8088/customers")
//                 .then(res => res.json())
//                 .then((data) => {
//                     setCustomers(data)
//                 })
//         },
//         []
//     )

//     useEffect(
//         () => {
//             fetch("http://localhost:8088/employees")
//                 .then(res => res.json())
//                 .then((data) => {
//                     setEmployees(data)
//                 })
//         },
//         []
//     )

//     useEffect(() => {
//         const specialtyArray = employees.map(employee => employee.specialty)
//         setSpecialties(specialtyArray.join(", "))
//     }, [employees])    

//     useEffect(
//         () => {
//             fetch("http://localhost:8088/serviceTickets")
//                 .then(res => res.json())
//                 .then((data) => {
//                     setTickets(data)
//                 })
//         },
//         []
//     )

//     return (
//         <>
//         <NavBar />
//         <h1>Honey Rae's Repair Shop</h1>
//         <ApplicationViews customers={customers} employees={employees} specialties={specialties} tickets={tickets}/>
//         </>
//     )
// }
// export const Repairs = () => (
//     <>
//       <Route
//         render={() => {
//           if (localStorage.getItem("honey_customer")) {
//             const [customers, setCustomers] = useState([])
//             const [employees, setEmployees] = useState([])
//             const [specialties, setSpecialties] = useState("")
//             const [tickets, setTickets] = useState([])
        
//             useEffect(
//                 () => {
//                     fetch("http://localhost:8088/customers")
//                         .then(res => res.json())
//                         .then((data) => {
//                             setCustomers(data)
//                         })
//                 },
//                 []
//             )
        
//             useEffect(
//                 () => {
//                     fetch("http://localhost:8088/employees")
//                         .then(res => res.json())
//                         .then((data) => {
//                             setEmployees(data)
//                         })
//                 },
//                 []
//             )
        
//             useEffect(() => {
//                 const specialtyArray = employees.map(employee => employee.specialty)
//                 setSpecialties(specialtyArray.join(", "))
//             }, [employees])    
        
//             useEffect(
//                 () => {
//                     fetch("http://localhost:8088/serviceTickets")
//                         .then(res => res.json())
//                         .then((data) => {
//                             setTickets(data)
//                         })
//                 },
//                 []
//             )
//             return (
//                 <>
//                 <NavBar />
//                 <h1>Honey Rae's Repair Shop</h1>
//                 <ApplicationViews customers={customers} employees={employees} specialties={specialties} tickets={tickets}/>
//                 </>
//             );
//           } else {
//             return <Redirect to="/login" />;
//           }
//         }}
//       />
  
//       <Route path="/login">
//         <Login />
//       </Route>
//       <Route path="/register">
//         <Register />
//       </Route>
//     </>
// )

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Home } from "./home/Home";
import "./Repairs.css";

export const Repairs = () => (
  <Routes>
    <Route path="*"
      element={<Home/>}
    />

    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>
);
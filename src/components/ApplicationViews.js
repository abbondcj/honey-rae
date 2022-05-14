import React from "react"
import { Route, Routes } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { TicketList } from "./serviceTickets/TicketList"

export const ApplicationViews = () => {
    

    

    

    
    return (
        <Routes>
            <Route path="/customers" element={<CustomerList />}/>

            <Route path="/employees" element={<EmployeeList />}/>

            <Route path="/tickets" element={<TicketList />}/>

            <Route path="/ticket/create" element={<TicketForm />}/>

            <Route path="/employee/create" element={<EmployeeForm />}/>
        </Routes>
    )
}
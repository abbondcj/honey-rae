import React, { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"

export const ApplicationViews = () => {
    const [customers, setCustomers] = useState([])
    const [employees, setEmployees] = useState([])
    const [specialties, setSpecialties] = useState("")
    const [tickets, setTickets] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((data) => {
                    setCustomers(data)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    setEmployees(data)
                })
        },
        []
    )

    useEffect(() => {
        const specialtyArray = employees.map(employee => employee.specialty)
        setSpecialties(specialtyArray.join(", "))
    }, [employees])    

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets")
                .then(res => res.json())
                .then((data) => {
                    setTickets(data)
                })
        },
        []
    )
    return (
        <Routes>
            <Route path="/customers" element={<CustomerList customers={customers}/>}/>

            <Route path="/employees" element={<EmployeeList employees={employees} specialties={specialties}/>}/>

            <Route path="/tickets" element={<TicketList employees={employees} customers={customers} tickets={tickets}/>}/>
        </Routes>
    )
}
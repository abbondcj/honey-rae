import React, {useEffect, useState} from "react"
import { CustomerList } from "./customers/CustomerList.js"
import { EmployeeList } from "./employees/EmployeeList.js"
import { TicketList } from "./serviceTickets/TicketList.js"

export const Repairs = () => {
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
        <>
        <h1>Honey Rae's Repair Shop</h1>
        <h2>Customer List</h2>
        <CustomerList customers={customers}/>
        <h2>Employee List</h2>
        <EmployeeList employees={employees} specialties={specialties}/>
        <h2>Ticket List</h2>
        <TicketList employees={employees} customers={customers} tickets={tickets}/>
        </>
    )
}
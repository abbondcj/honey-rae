import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
                .then(res => res.json())
                .then((data) => {
                    setTickets(data)
                })
        },
        []
    )

    const navigate = useNavigate()
    return (
        <>
        <h2>Ticket List</h2>
        <div>
            <button onClick={() => navigate("/ticket/create")}>Create Ticket</button>
        </div>
            {
                tickets.map(
                    (ticket) => {
                        const customerName = ticket.customer.name ? ticket.customer.name : "CUSTOMER NOT FOUND"
                        const employeeName = ticket.employee.name ? ticket.employee.name : "EMPLOYEE NOT FOUND"
                        return <div className="tickets" key={`ticket--${ticket.id}`}>
                            <p className={ticket.emergency ? "emergency" : "ticket"}>
                                {ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {customerName} and worked on by {employeeName}
                            </p>
                        </div>
                    }
                )
            }
        </>
    )
}
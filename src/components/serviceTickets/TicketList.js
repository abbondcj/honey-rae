import React, { useEffect, useState } from "react"

export const TicketList = ({tickets, employees, customers}) => {
    return (
        <>
            {
                tickets.map(
                    (ticket) => {
                        const customerMatch = customers.find(match => match.id === ticket.customerId)
                        const customerName = customerMatch ? customerMatch.name : "CUSTOMER NOT FOUND"
                        const employeeMatch = employees.find(match => match.id === ticket.employeeId)
                        const employeeName = employeeMatch ? employeeMatch.name : "EMPLOYEE NOT FOUND"
                        return <div className="tickets" key={`ticket--${ticket.id}`}>
                            Ticket ID: { ticket.id }<br></br>
                            Ticket Customer: { customerName }<br></br>
                            Assigned Employee: { employeeName }<br></br>
                            Description: { ticket.description }<br></br>
                            Date Completed: { ticket.dateCompleted }<br></br>
                        </div>
                    }
                )
            }
        </>
    )
}
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export const TicketForm = () => {
    const navigate = useNavigate()


    const [ticket, update] = useState(
        {
        "customerId" : null,
        "employeeId" : 1,
        "dateCompleted" : null,
        "description" : null,
        "emergency" : null
        }
    );

    const saveTicket = (event) => {
        event.preventDefault()
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(ticket)
        }
        fetch("http://localhost:8088/serviceTickets", fetchOption)
        navigate("/tickets")
    }
    

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={
                            (event) => {
                                let ticketObj = {...ticket}
                                ticketObj.description = event.target.value
                                ticketObj.dateCompleted = ""
                                ticketObj.customerId = parseInt(localStorage.getItem("honey_customer"))
                                update(ticketObj)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                let ticketObj = {...ticket}
                                if (event.target.checked) {
                                    ticketObj.emergency = true
                                    update(ticketObj)
                                } else {
                                    ticketObj.emergency = false
                                    update(ticketObj)
                                }
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}>
                Submit Ticket
            </button>
        </form>
    )
}
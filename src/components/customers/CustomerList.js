import React, { useEffect, useState } from "react"
import "./Customers.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
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


    return (
        <>
            <h2>Customers</h2>

            <div className="customers">
                {
                    customers.map(
                        (customerObject) => {
                            return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                        }
                    )
                }
            </div>
        </>
    )
}
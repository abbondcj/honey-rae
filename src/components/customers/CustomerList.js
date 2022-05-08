import React, { useEffect, useState } from "react"
import "./Customers.css"

export const CustomerList = ({customers}) => {


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
import React, { useEffect, useState } from "react"

export const CustomerList = ({customers}) => {


    return (
        <>
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
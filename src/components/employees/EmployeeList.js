import React, { useEffect, useState } from "react"

export const EmployeeList = ({employees, specialties}) => {

    return (
        <>
            <div>
                Specialties: { specialties }
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}
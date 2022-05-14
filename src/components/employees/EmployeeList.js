import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [specialties, setSpecialties] = useState("")
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    setEmployees(data)
                    let specialtyArray = []
                    data.map((obj) => {
                        specialtyArray.push(obj.specialty)
                        setSpecialties(specialtyArray.join(", "))
                    })
                })
        },
        []
    )  

    return (
        <>
            <h2>Specialties{` & `}Employees</h2>

            <div>
                Specialties: { specialties }
            </div>
            <button onClick={() => navigate("/employee/create")}>Create Employee</button>
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
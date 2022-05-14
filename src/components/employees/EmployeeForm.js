import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = () => {
    const navigate = useNavigate()


    const [employee, update] = useState(
        {
        "name" : null,
        "specialty" : null
        }
    );

    const saveEmployee = (event) => {
        event.preventDefault()
        const fetchOption = {
            // POST fetch call to send the new object to the API
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(employee)
            // the body of the fetch object has to be converted to JSON string
        }
        fetch("http://localhost:8088/employees", fetchOption)
        navigate("/employees")
    }
    

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee full name"
                        onChange={
                            (event) => {
                                let employeeObj = {...employee}
                                employeeObj.name = event.target.value
                                update(employeeObj)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Employee specialty"
                        onChange={
                            (event) => {
                                let employeeObj = {...employee}
                                employeeObj.specialty = event.target.value
                                update(employeeObj)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Submit Employee
            </button>
        </form>
    )
}
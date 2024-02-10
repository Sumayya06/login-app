import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const SignIn = () => {
    const navigate = useNavigate()
    const [input, setInput] = new useState(
        {
            "Email": "",
            "Password": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://172.16.184.131:3001/api/blog/signin", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {

                    navigate("/add")
                    setInput(
                        {
                            "Email": "",
                            "Password": ""
                        }
                    )

                } else {
                    alert("ERROR OCCURED")

                }
            }
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="email" name="Email" id="" className="form-control" value={input.Email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="Password" id="" className="form-control"value={input.Password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValues}>LOGIN</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <a href="">New Users Click Here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn


import { createUser } from "../api"
import { useState } from "react"

export function CreateUser() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let response = await createUser(user)
        console.log(response)
        if (response.status !== 200) {
            alert("User account could not be created :(")
        } else {
            alert("User creates account successfully")

            setUser({
                name: "",
                email: "",
                password: ""
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder={"Name"} onChange={handleChange} name="name" required maxLength={20} value={user.name}/>
            <input placeholder={"Email"} onChange={handleChange} name="email" required maxLength={40} value={user.email}/>
            <input placeholder={"Password"} onChange={handleChange} name="password" type="password" required maxLength={20} value={user.password}/>
            <button type="submit">Create Account</button>
        </form>
    )
}
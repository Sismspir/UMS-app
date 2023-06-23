import React, { useState } from "react";

export default function LogUser (props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // logs the user in if the username and the pass are not empty
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            props.logged(true);
        }
    }
    return (
        <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit}>

                <h2>Login</h2>
                
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usename" id="username" name="username" />

                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="password" name="password" />

                <button className="login-btn" type="submit">Log In</button>
            </form>
        </div>
    )
}
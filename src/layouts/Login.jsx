import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleChange = (type, value) => {
        const setters = {
            email: setEmail,
            password: setPassword
        };

        const setter = setters[type];
        if (setter) {
            setter(value);
        }
    };
    return (
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => handleChange("email", e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => handleChange("password", e.target.value)}
                />
            </div>
        </form>
    );
};

export default Login;

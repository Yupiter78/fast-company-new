import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleChange = ({ target }) => {
        const { value, name } = target;
        const setters = {
            email: setEmail,
            password: setPassword
        };

        const setter = setters[name];
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
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
        </form>
    );
};

export default Login;

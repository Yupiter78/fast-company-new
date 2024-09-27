import React, { useCallback, useEffect, useState } from "react";
import TextField from "../components/TextField";
import { validator } from "../utils/validator";
import _ from "lodash";

interface IFormData {
    email: string;
    password: string;
}

interface IErrors {
    email?: string;
    password?: string;
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<IFormData>({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState<IErrors>({});

    const handleChange = useCallback(
        ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prevState) => ({ ...prevState, [name]: value }));
        },
        []
    );

    useEffect(() => {
        validate();
    }, [formData]);

    const validateConfig = {
        email: {
            isRequired: {
                message: "Email is required"
            },
            isEmail: {
                message: "Email entered incorrectly"
            }
        },
        password: {
            isRequired: {
                message: "Password is required"
            },
            hasUpperCase: {
                message: "Password must contain at least one uppercase letter"
            },
            hasDigit: {
                message: "Password must contain at least one digit"
            },
            hasSpecialChar: {
                message:
                    "Password must contain at least one special character from .,?!@#$%^&*"
            },
            minLength: {
                message: "Password must contain at least 8 characters",
                value: 8
            }
        }
    };

    const isValid = _.isEmpty(errors);

    const validate = () => {
        const errors = validator(formData, validateConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log("formData: ", formData);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={errors.password}
                        />
                        <button
                            type="submit"
                            className={`btn btn-${
                                isValid ? "primary" : "secondary"
                            } d-flex justify-content-center w-75 mx-auto`}
                            disabled={!isValid}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

import {Link} from "react-router-dom";
import React from "react";
import "./style.scss"
import {Formik} from "formik";
import Header from "../Header";
import "./style.scss"

export default function SignIn() {
    const obj = {
        text: "Sign Up",
        to: "/signup"
    }
    return (
        <>
            <Header button={obj}/>
            <div className={"divForm"}>
                <h1>LOGIN TO YOUR ACCOUNT</h1>
                <Formik initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 400);
                    }}>
                    {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,}) => (
                        <form className={"sign-in-form"} onSubmit={handleSubmit}>
                            <input
                                placeholder={""}
                                className={"input"}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                placeholder={""}
                                className={"input"}
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            <button className={"login"} type="submit" disabled={isSubmitting}>
                                LOGIN
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    )
}

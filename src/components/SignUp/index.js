import {Link} from "react-router-dom";
import React from "react";
import "./style.scss"
import {Formik} from "formik";
import Header from "../Header";

export default function SignUp() {
    const obj = {
        text: "Sign In",
        to: "/"
    }
    return (
        <>
            <Header button={obj}/>
            <div className={"divForm"}>
                <h1>CREATE AN ACCOUNT</h1>
                <p>We always keep your name and email address private.</p>
                <Formik
                    initialValues={{email: '', password: ''}}
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
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 400);
                    }}>
                    {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,}) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    placeholder={"firstName"}
                                    className={"input"}
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                />
                                {errors.email && touched.email && errors.email}
                                <input
                                    placeholder={"lastName"}
                                    className={"input"}
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastName}
                                />
                                {errors.password && touched.password && errors.password}
                            </div>
                            <div>
                                <input
                                    placeholder={"displayName"}
                                    className={"input"}
                                    type="displayName"
                                    name="displayName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                <input
                                    placeholder={"emailAddress"}
                                    className={"input"}
                                    type="email"
                                    name="emailAddress"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                            </div>
                            <div>
                                <input
                                    placeholder={"password"}
                                    className={"input"}
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                <input
                                    placeholder={"passwordConfirmation"}
                                    className={"input"}
                                    type="password"
                                    name="passwordConfirmation"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                            </div>
                            <div className={"radio-inputs"}>
                                <div className={"whiteBorder"}>
                                    <input
                                        className={"inputRadio"}
                                        type="radio"
                                        name="radio1"
                                        onChange={handleChange}
                                    />
                                    <div>
                                        <h2>Join As a Buyer</h2>
                                        <p>I am looking for a Name, Logo or Tagline for my business, brand or
                                            product.</p>
                                    </div>
                                </div>
                                {errors.email && touched.email && errors.email}
                                <div className={"whiteBorder"}>
                                    <input
                                        className={"inputRadio"}
                                        type="radio"
                                        name="radio2"
                                        onChange={handleChange}
                                    />
                                    <div>
                                        <h2>Join As a Creative or Marketplace Seller</h2>
                                        <p>I plan to submit name ideas, Logo designs or sell names in Domain
                                            Marketplace.</p>
                                    </div>
                                </div>
                                {errors.password && touched.password && errors.password}
                            </div>
                            <button className={"login"} type="submit" disabled={isSubmitting}>
                                Create account
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    )
}

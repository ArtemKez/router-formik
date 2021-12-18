import React from "react";
import "./style.scss"
import {Formik, Form, Field} from "formik";
import Header from "../Header";
import * as Yup from "yup"

export default function SignUp() {
    const obj = {
        text: "Sign In",
        to: "/"
    }
    const SignInSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, 'Too Short Password!')
            .max(20, 'Too Long Password!')
            .required('Please Feel In Password'),
        passwordConfirmation: Yup.string()
            .min(6, 'Too Short Password!')
            .max(20, 'Too Long Password!')
            .required('Please Feel In PasswordConfirmation'),
        emailAddress: Yup.string()
            .email('Invalid email')
            .required('Please Feel In Email'),
        firstName: Yup.string()
            .min(6, 'Too Short Password!')
            .max(20, 'Too Long Password!')
            .required('Please Feel In FirstName'),
        lastName: Yup.string()
            .min(6, 'Too Short Password!')
            .max(20, 'Too Long Password!')
            .required('Please Feel In LastName'),
        displayName: Yup.string()
            .min(6, 'Too Short Password!')
            .max(20, 'Too Long Password!')
            .required('Please Feel In DisplayName'),
    });
    return (
        <>
            <Header button={obj}/>
            <div className={"divForm"}>
                <h1>CREATE AN ACCOUNT</h1>
                <p>We always keep your name and email address private.</p>
                <Formik
                    initialValues={{
                        password: '',
                        firstName: '',
                        lastName: '',
                        displayName: '',
                        emailAddress: '',
                        passwordConfirmation: ''
                    }}
                    onSubmit={async (values, {setSubmitting}) => {
                        console.log(values)
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 400);
                    }}
                    validationSchema={SignInSchema}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <Form className={"sign-in-form"} onSubmit={handleSubmit}>
                            <div>
                                <div>
                                    <Field
                                        placeholder={"firstName"}
                                        className={`input ${errors.firstName && touched.firstName && 'error'}`}
                                        type="text"
                                        name="firstName"
                                        value={values.firstName}
                                    />
                                    {errors.firstName && touched.firstName && errors.firstName}
                                </div>
                                <div>
                                    <Field
                                        placeholder={"lastName"}
                                        className={`input ${errors.lastName && touched.lastName && 'error'}`}
                                        type="text"
                                        name="lastName"
                                        value={values.lastName}
                                    />
                                    {errors.lastName && touched.lastName && errors.lastName}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Field
                                        placeholder={"displayName"}
                                        className={`input ${errors.displayName && touched.displayName && 'error'}`}
                                        type="text"
                                        name="displayName"
                                        value={values.displayName}
                                    />
                                    {errors.displayName && touched.displayName && errors.displayName}
                                </div>
                                <div>
                                    <Field
                                        placeholder={"emailAddress"}
                                        className={`input ${errors.email && touched.email && 'error'}`}
                                        type="email"
                                        name="emailAddress"
                                        value={values.emailAddress}
                                    />
                                    {errors.email && touched.email && errors.email}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Field
                                        placeholder={"password"}
                                        className={`input ${errors.password && touched.password && 'error'}`}
                                        type="password"
                                        name="password"
                                        value={values.password}
                                    />
                                    {errors.password && touched.password && errors.password}
                                </div>
                                <div>
                                    <Field
                                        placeholder={"passwordConfirmation"}
                                        className={`input ${errors.password && touched.password && 'error'}`}
                                        type="password"
                                        name="passwordConfirmation"
                                        value={values.passwordConfirmation}
                                    />
                                    {errors.password && touched.password && errors.password}
                                </div>
                            </div>
                            <div className={"radio-inputs"}>
                                <div className={"whiteBorder"}>
                                    <Field
                                        className={"inputRadio"}
                                        type="radio"
                                        name="radio1"
                                    />
                                    <div>
                                        <h2>Join As a Buyer</h2>
                                        <p>I am looking for a Name, Logo or Tagline for my business, brand or
                                            product.</p>
                                    </div>
                                </div>
                                <div className={"whiteBorder"}>
                                    <Field
                                        className={"inputRadio"}
                                        type="radio"
                                        name="radio2"
                                    />
                                    <div>
                                        <h2>Join As a Creative or Marketplace Seller</h2>
                                        <p>I plan to submit name ideas, Logo designs or sell names in Domain
                                            Marketplace.</p>
                                    </div>
                                </div>
                            </div>
                            <button className={"login"} type="submit" disabled={isSubmitting}>
                                Create account
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

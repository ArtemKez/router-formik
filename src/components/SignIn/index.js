import React from "react";
import {Formik, Form, Field} from "formik";
import Header from "../Header";
import "./style.scss"
import * as Yup from "yup"


export default function SignIn() {
    const obj = {
        text: "Sign Up",
        to: "/signup"
    }
    const SignInSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, 'Too Short Password!')
            .max(20, 'Too Long Password!')
            .required('Please Feel In Password'),
        email: Yup.string()
            .email('Invalid email')
            .required('Please Feel In Email'),
    });
    return (
        <>
            <Header button={obj}/>
            <div className={"divForm"}>
                <h1>LOGIN TO YOUR ACCOUNT</h1>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values, {setSubmitting}) => {
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
                            <Field
                                placeholder={""}
                                className={`input ${errors.email && touched.email && 'error'}`}
                                type="email"
                                name="email"
                                value={values.email}
                            />
                            {
                                errors.email && touched.email ?
                                    <div className={"error_message"}>{errors.email}</div>
                                    : ''
                            }

                            <Field
                                placeholder={""}
                                className={`input ${errors.password && touched.password && 'error'}`}
                                type="password"
                                name="password"
                                value={values.password}
                            />
                            {
                                errors.password && touched.password ?
                                    <div className={"error_message"}>{errors.password}</div>
                                    : ''
                            }
                            <button className={"login"} type="submit" disabled={isSubmitting || errors.password || errors.email}>
                                LOGIN
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

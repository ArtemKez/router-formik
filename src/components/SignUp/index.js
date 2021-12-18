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
    const SignUpSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, 'Too Short Password!')
            .max(20, 'Too Long Password!')
            .required('Please Feel In Password'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .min(6, 'Too Short Password!')
            .max(20, 'Too Long Password!')
            .required('Please Feel In Password confirmation'),
        emailAddress: Yup.string()
            .email('Invalid email')
            .required('Please Feel In Email'),
        firstName: Yup.string()
            .min(6, 'Too Short First name!')
            .max(20, 'Too Long First name!')
            .required('Please Feel In First name'),
        lastName: Yup.string()
            .min(6, 'Too Short Last name!')
            .max(20, 'Too Long Last name!')
            .required('Please Feel In Last name'),
        displayName: Yup.string()
            .min(6, 'Too Short Display name!')
            .max(20, 'Too Long Display name!')
            .required('Please Feel In Display name'),
        user_type: Yup
            .string()
            .required('Please Select User type')
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
                        passwordConfirmation: '',
                        user_type: ''
                    }}
                    onSubmit={async (values, {setSubmitting}) => {
                        console.log(values)
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 400);
                    }}
                    validationSchema={SignUpSchema}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleSubmit,
                          isSubmitting,
                      }) => {
                        return (
                            <Form className={"sign-up-form"} onSubmit={handleSubmit}>
                                <div>
                                    <div>
                                        <Field
                                            placeholder={"first name"}
                                            className={`input ${errors.firstName && touched.firstName && 'error'}`}
                                            type="text"
                                            name="firstName"
                                            value={values.firstName}
                                        />
                                        {errors.firstName && touched.firstName ?
                                            <div className={"error_message"}>{errors.firstName}</div>
                                            : ''}
                                    </div>
                                    <div>
                                        <Field
                                            placeholder={"last name"}
                                            className={`input ${errors.lastName && touched.lastName && 'error'}`}
                                            type="text"
                                            name="lastName"
                                            value={values.lastName}
                                        />
                                        {errors.lastName && touched.lastName ?
                                            <div className={"error_message"}>{errors.lastName}</div>
                                            : ''}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Field
                                            placeholder={"display name"}
                                            className={`input ${errors.displayName && touched.displayName && 'error'}`}
                                            type="text"
                                            name="displayName"
                                            value={values.displayName}
                                        />
                                        {errors.displayName && touched.displayName ?
                                            <div className={"error_message"}>{errors.displayName}</div>
                                            : ''}
                                    </div>
                                    <div>
                                        <Field
                                            placeholder={"email address"}
                                            className={`input ${errors.emailAddress && touched.emailAddress && 'error'}`}
                                            type="email"
                                            name="emailAddress"
                                            value={values.emailAddress}
                                        />
                                        {errors.emailAddress && touched.emailAddress ?
                                            <div className={"error_message"}>{errors.emailAddress}</div>
                                            : ''}
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
                                        {errors.password && touched.password ?
                                            <div className={"error_message"}>{errors.password}</div>
                                            : ''}
                                    </div>
                                    <div>
                                        <Field
                                            placeholder={"password confirmation"}
                                            className={`input ${errors.passwordConfirmation && touched.passwordConfirmation && 'error'}`}
                                            type="password"
                                            name="passwordConfirmation"
                                            value={values.passwordConfirmation}
                                        />
                                        {errors.passwordConfirmation && touched.passwordConfirmation ?
                                            <div className={"error_message"}>{errors.passwordConfirmation}</div>
                                            : ''}
                                    </div>
                                </div>
                                <div className={`radio-inputs ${errors.user_type && touched.user_type && 'error'}`}>
                                    <div className={"whiteBorder"}>
                                        <Field
                                            className={"inputRadio"}
                                            type="radio"
                                            name="user_type"
                                            value="buyer"
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
                                            name="user_type"
                                            value="marketplace"
                                        />
                                        <div>
                                            <h2>Join As a Creative or Marketplace Seller</h2>
                                            <p>I plan to submit name ideas, Logo designs or sell names in Domain
                                                Marketplace.</p>
                                        </div>
                                    </div>
                                    {errors.user_type && touched.user_type ?
                                        <div className={"error_message"}>{errors.user_type}</div>
                                        : ''}
                                </div>
                                <button className={"login"} type="submit" disabled={isSubmitting}>
                                    Create account
                                </button>
                            </Form>
                        )
                    }
                    }
                </Formik>
            </div>
        </>
    )
}

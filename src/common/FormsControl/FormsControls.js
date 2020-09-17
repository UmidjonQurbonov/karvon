import React from "react";
import s from './FormsControls.module.css';
import {Field} from "redux-form";
import {required} from "../../utils/validators/validators";

export const FormControl = ({input, meta: {touched, error}, children}) => {

    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>)
}
export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div><Field name={name} placeholder={placeholder}
                validate={validators}
                component={component}
        {...props}/>{text}
    </div>
)
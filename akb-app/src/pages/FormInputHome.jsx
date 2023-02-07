import {useState} from "react";

const FormInputHome = (props) => {
    let [focused, setFocused] = useState(false);

    const {placeholder, value, onChange, type, name, id} = props;
    const handleFocus = (e) => {
        setFocused(true)
    }
    const val = () => {
        if (value === "") {
            focused = "false"
        }
    }
    val()

    return (
        <div>
            <input className="input-home block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white-50
                   sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600
                   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder={placeholder}
                   onChange={onChange}
                   type={type}
                   name={name}
                   id={id}
                   onBlur={handleFocus}
                   onFocus={() =>
                       setFocused(true)}
                   focused={focused.toString()}
                   required

            />
        </div>

    );
};

export default FormInputHome;
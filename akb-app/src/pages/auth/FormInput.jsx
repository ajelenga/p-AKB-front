import {useState} from "react";

const FormInput = (props) => {
    let [focused, setFocused] = useState(false);

    const {placeholder, value, onChange, type, name, id, errorMessage, pattern} = props;
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
            <input className={`input-taille block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                                                  appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-500 
                                                  focus:outline-none focus:ring-0 focus:border-gray-600 peer error-input`}
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}
                   type={type}
                   name={name}
                   id={id}
                   pattern={pattern}
                   required
                   onBlur={handleFocus}
                   onFocus={() =>
                       props.name === "password" && setFocused(true)}
                   focused={focused.toString()}

            />
            <span className="text-sm error-message">
                {errorMessage}
            </span>
        </div>

    );
};

export default FormInput;
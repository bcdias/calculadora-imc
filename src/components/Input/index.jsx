import styles from "./Input.module.scss"

const Input = ({ name, type, placeholder, label, value, handleInput }) => {
    return (
        <div className={styles.input}>
            <label
                htmlFor={name}>
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                required
                value={value}
                onChange={event => handleInput(event.target.value)}
            />
        </div>
    )
}

export default Input
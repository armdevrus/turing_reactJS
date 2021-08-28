import styles from "./Button.module.css";

const Button = ({text, isImportant = false, onClick}) => {
    return(
        <button
            className={`${styles.button} ${isImportant && styles.buttonImportant}`}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
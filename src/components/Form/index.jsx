import styles from "./Form.module.scss";
import Input from "../Input";
import { useContext } from "react";
import { WeightHeightContext } from "../../context";


const Form = () => {

    const [weight, setWeight, height, setHeight, handleResponse] = useContext(WeightHeightContext)


    return (
        <form className={styles.form} onSubmit={handleResponse}>
            <Input
                name='massa'
                type='text'
                placeholder='Digite seu peso em Kg'
                label='Peso (ex.: 69,2)'
                value={weight}
                handleInput={setWeight}
            />
            <Input
                name='altura'
                type='text'
                placeholder='Digite sua altura em metros'
                label='Altura (ex.: 1,84)'
                value={height}
                handleInput={setHeight}

            />
            <div className={styles.button__container}>
                <button type="submit">Calcular</button>
            </div>
        </form>
    )
}

export default Form
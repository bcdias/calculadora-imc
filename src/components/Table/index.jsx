import styles from "./Table.module.scss";

const Table = ({result, classification}) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.column}>
                    <th>IMC Calculado</th>
                    <th>Sua classificação na tabela de IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr className={styles.column}>
                    <td>{result}</td>
                    <td>{classification}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table
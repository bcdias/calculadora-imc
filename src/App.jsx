import { useEffect, useState } from "react";
import { WeightHeightContext } from "./context";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";

import "./assets/styles/globalStyles.scss";

function App() {

  const [result, setResult] = useState(0)
  const [classification, setClassification] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [response, setResponse] = useState({imc: '0', classification: ''})


  function convertToFloat(data) {
    const dataFormat = data.replace(',', '.')
    return parseFloat(dataFormat)
  }

  function calculateImc(weight, height) {
    return weight / (height * height)
  }

  function convertToStr(value) {
    const valueStr = String(value.toFixed(1))
    return valueStr.replace('.', ',')
  }

  function checkClassification(imc){
    if(imc < 18.5){
      setClassification('Magreza')
      return
    }
    if(imc >= 18.5 && imc <= 24.9){
      setClassification('Normal')
      return
    }
    if(imc >= 25.0 && imc <= 29.9){
      setClassification('Sobrepeso')
      return
    }
    if(imc >= 30.0 && imc < 39.9){
      setClassification('Obesidade')
      return
    }
    if(imc >= 40.0 ){
      setClassification('Obesidade Grave')
      return
    }
  }

  function handleResponse(event){
    event.preventDefault()
    setResponse({
      imc: result,
      classification: classification
    })

    setWeight('')
    setHeight('')
  }


  useEffect(() => {

    const weightValue = convertToFloat(weight)
    const heightValue = convertToFloat(height)

    const imc = calculateImc(weightValue, heightValue)

    if (!Number.isNaN(imc) || !imc == 'Infinity') {
      const imcFormatted = convertToStr(imc)
      setResult(imcFormatted)
    }

  }, [weight, height])

  useEffect(() => {
    const imc = result
    let imcFloat = 0

    if (imc != 0) {
      imcFloat = convertToFloat(imc)
    }

    checkClassification(imcFloat)

  }, [result])


  return (
    <div className="container">
      <Header />
      <main>
        <WeightHeightContext.Provider value={[weight, setWeight, height, setHeight, handleResponse]}>
          <Form
          />
          <hr />
          <Table
            result={response.imc}
            classification={response.classification}
          />
        </WeightHeightContext.Provider>
      </main>
    </div>
  )
}

export default App

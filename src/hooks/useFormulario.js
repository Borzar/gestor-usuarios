import { useState } from "react"

const useFormulario = (inicial) => {
  const [formulario, setFormulario] = useState(inicial)
  // La funcion handleChange guardara todos los valores que tienen los campos del formularios en nuestra variable de formulario
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      //propiedad dinamica
      [e.target.name]: e.target.value,
    })
  }

  const reset = () => {
    setFormulario(inicial)
  }

  return [formulario, handleChange, reset]
}

export default useFormulario

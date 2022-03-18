import useFormulario from "./hooks/useFormulario"
import Input from "./components/Input"
import Card from "./components/Card"
import Container from "./components/Container"
import Button from "./components/Button"
import { useState } from "react"

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    apellido: "",
    email: "",
  })

  const addUser = (e) => {
    e.preventDefault()
    setUsuarios([
      ...usuarios, // se genera una copia del arreglo
      formulario, // se pasara todo lo que contenga nuestro formulario
    ])
    reset()
  }

  console.log(formulario, usuarios)

  return (
    <div style={{ paddingTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={addUser}>
              <Input
                label="Nombre"
                name="name"
                value={formulario.name}
                onChange={handleChange}
              />
              <Input
                label="Apellido"
                name="apellido"
                value={formulario.apellido}
                onChange={handleChange}
              />
              <Input
                label="Email"
                name="email"
                value={formulario.email}
                onChange={handleChange}
              />
              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map((x) => (
              <li key={x.email}>{`${x.name} ${x.apellido}: ${x.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App

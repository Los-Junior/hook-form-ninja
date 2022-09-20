import React, { useState } from 'react'

const InitialForm = () => {
  return (
    <form>
      <h1>Primer Desafío</h1>
      <p>
        En este desafío vamos a ver qué tendríamos que hacer para agregar
        validaciones y desplegar errores en un form sencillo.
      </p>
      <input type='text' placeholder='Nombre' onChange={nameHandler} />
      <input type='text' placeholder='Apellido' onChange={lastNameHandler} />
      <button type='submit'>Crear usuario</button>
    </form>
  )
}

export default InitialForm

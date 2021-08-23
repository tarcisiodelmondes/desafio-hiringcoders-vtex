import React, { FormEvent, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { api } from './services/api'

import './style.css'

const CSS_HANDLES = [
  'containerForm',
  'formContent',
  'title',
  'input',
  'button',
  'finished',
] as const

const FormPopup: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)

  const [hasEnvied, setHasEnvied] = useState(false)

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    await api.post('/prod', {
      name,
      lastName,
      email,
    })
  }

  return (
    <>
      {!hasEnvied ? (
        <div className={handles.containerForm}>
          <h2 className={handles.title}>Fique por dentro das novidades!</h2>

          <form className={handles.formContent} onSubmit={handleSubmit}>
            <input
              className={handles.input}
              type="text"
              name="name"
              id="name"
              onChange={(e: any) => setName(e.target.value)}
              value={name}
              placeholder="Nome"
            />
            <input
              className={handles.input}
              type="text"
              name="lastName"
              id="lastName"
              onChange={(e: any) => setLastName(e.target.value)}
              value={lastName}
              placeholder="Sobrenome"
            />
            <input
              className={handles.input}
              type="email"
              name="email"
              id="email"
              onChange={(e: any) => setEmail(e.target.value)}
              value={email}
              placeholder="email"
            />
            <button
              className={handles.button}
              onClick={() => setHasEnvied(true)}
              type="submit"
            >
              Cadrastar email
            </button>
          </form>
        </div>
      ) : (
        <h2 className={handles.finished}>Cadastrado com sucesso!</h2>
      )}
    </>
  )
}

export default FormPopup

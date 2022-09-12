import { useState } from 'react'
import FirstChallenge from '../components/FirstChallenge'

export default function Home() {
  const [showChallenge, setShowChallenge] = useState(false)

  return (
    <div className='main-container'>
      <h1>Bienvenidos a React Hook Form Ninja 🥷</h1>
      <p>
        A partir de ahora comienza tu camino como ninja, vamos a aprender mucho.
        Así que prepara tus armas 💻🎧🖱 y completa los desafíos que vendrán a
        continuación.{' '}
      </p>
      {showChallenge ? (
        <FirstChallenge />
      ) : (
        <button onClick={() => setShowChallenge(true)}>
          Empezar primer desafío
        </button>
      )}
    </div>
  )
}

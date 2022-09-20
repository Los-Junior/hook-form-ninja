import FirstChallenge from '../components/forms/FirstChallenge'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className='lg:px-20 py-10'>
        <h1 className='text-xl font-bold'>
          Bienvenidos a React Hook Form Ninja 🥷
        </h1>
        <p>
          A partir de ahora comienza tu camino como ninja, vamos a aprender
          mucho. Así que prepara tus armas 💻🎧🖱 y completa los desafíos que
          vendrán a continuación.
        </p>
        <FirstChallenge />
      </div>
    </Layout>
  )
}

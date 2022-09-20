import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className='lg:px-20 py-10'>
        <h1 className='text-xl font-bold'>
          Bienvenidos a React Hook Form Ninja 🥷
        </h1>
        <p>En esta lección crearemos un form simple para iniciar sesión.</p>
      </div>
      <form action=''></form>
    </Layout>
  )
}

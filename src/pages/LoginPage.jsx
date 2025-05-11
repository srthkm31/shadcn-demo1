import { LoginForm } from '../components/login-form'

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div  className='flex justify-center items-center h-[500px] '>
            <LoginForm></LoginForm>
        </div>
    </div>
  )
}

export default LoginPage
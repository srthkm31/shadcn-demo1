import { SignupForm } from '../components/signup-form'
import react from 'react'
const SignupPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div  className='flex justify-center items-center'>
            <SignupForm class='motion-translate-y-in-100'></SignupForm>
        </div>
    </div>
  )
}

export default SignupPage
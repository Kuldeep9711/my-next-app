import React, { useActionState } from 'react'
import { ContactType } from '../types/contact';

type ContactFormProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact?: ContactType;
}

const ContactForm = ({ action, contact }: ContactFormProps) => {
  const [state, formAction] = useActionState(action, null);

  return (
  <form action={formAction} className='space-x-4'>
      <div>
          <label 
          htmlFor='name' 
          className='block text-sm font-medium text-gray-700'
          >
            Name
          </label>
          <input 
          type='text'
          name='name'
          placeholder='Enter your name'
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
          />
      </div>
      <div className='mt-3'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
          <input 
          type='email'
          name='email'
          placeholder='Enter your email'
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2'
          />
      </div>
      <button
      type='submit'
      className=' mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700'
      >
          Login
      </button>
    </form>
   ) 
}

export default ContactForm

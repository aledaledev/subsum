import React, { useState } from 'react'
import { User } from '../types'

interface FormState {
    inputValues: User
}

//React para encontrar los modulos
interface FormProps {
    onNewUser: (newUser: User) => void             //si mandabamos setUsers -> React.Dispatch<React.SetStateAction<User[]>>
}

export const Form = ({onNewUser}: FormProps) => {

  const [inputValues, setInputValues] = useState<FormState['inputValues']>({
    nick:'',
    userMonths:0,
    avatar:'', 
    description:''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewUser(inputValues)
    inputValues.nick=''
    inputValues.userMonths=0
    inputValues.avatar=''
    inputValues.description=''
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value
    })
  }

  //los tipos se fijan en que contexto se ejecutan, hacemos hover en el event para ver de que tipo es
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nick'/>
        <input onChange={handleChange} value={inputValues.userMonths} type='number' name='userMonths' placeholder='userMonths'/>
        <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar'/>
        <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description'/>
        <button>create user</button>
      </form>
    </div>
  )
}

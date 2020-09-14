import React from 'react'
import {useCreate} from '../CreateContext'

export const FormSocial = () =>  {
  const create = useCreate()
  return (
    <>
          <input placeholder="Вконтакте" type="text" onChange={create.onChangeSocial} name="vk"/>
          <input placeholder="Одноклассники" type="text" onChange={create.onChangeSocial} name="ok"/>
          <input placeholder="Вейсбук" type="text" onChange={create.onChangeSocial} name="fb"/>
          <input placeholder="Телефон" type="text" onChange={create.onChangeSocial} name="phone"/>
          <input placeholder="Ссылка на сайт" type="text" onChange={create.onChangeSocial} name="url"/>
    </>
  )
}


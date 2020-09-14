import React from 'react'
import {useCreate} from '../CreateContext'

export const FormChek = () =>  {
  const create = useCreate()
  return (
    <>
          <label><input type="checkbox" className="filled-in" onChange={create.onChangeChek} name="run"/><span>Маршруты для пеших прогулок</span></label>
          <label><input type="checkbox" className="filled-in" onChange={create.onChangeChek} name="sauna"/><span>Сауна</span></label>
          <label><input type="checkbox" className="filled-in" onChange={create.onChangeChek} name="fishing"/><span>Рыбная ловля</span></label>
          <label><input type="checkbox" className="filled-in" onChange={create.onChangeChek} name="riding"/><span>Верховная езда</span></label>
          <label><input type="checkbox" className="filled-in" onChange={create.onChangeChek} name="heat"/><span>Парная</span></label>
          <label><input type="checkbox" className="filled-in" onChange={create.onChangeChek}  name="accessibly"/><span>Доступен</span></label>
          <label><input type="checkbox" className="filled-in" onChange={create.onChangeChek} name="allDay"/><span>Круглосуточная стойка регистрации</span></label>
          <label><input type="checkbox" className="filled-in" onChange={create.onChangeChek} name="freeCancel"/><span>Бесплатная отмена бронирования</span></label>
          <label><input type="checkbox" className="filled-in" onChange={create.onChangeChek} name="noCreditCard"/><span>Бронирование без кредитной карты</span></label>
    </>
  )
}


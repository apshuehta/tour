import React, {useState, useContext} from 'react'
import {DataFilter} from '../../data/dataFilter'

const ListContext = React.createContext()

export const useList = () => {
  return useContext(ListContext)
}

export const ListProvider = ({children}) => {

  const [reg, setReg] = useState('Все') //районы
  const [st, setSt] = useState('Все') //звезды
  const [chek, setChek] = useState({
    run: false, //Маршруты для пеших прогулок
    sauna: false, //Сауна
    fishing: false, //Рыбная ловля
    riding: false, //Верховная езда
    heat: false, //Парная
    accessibly: false, //Показать только доступные варианты
    allDay: false, //Круглосуточная стойка регистрации
    freeCancel: false, //Бесплатная отмена бронирования
    noCreditCard: false //Бронирование без кредитной карты
  })
  const region = DataFilter.region.map((i) => <option value={i} key={i}>{i}</option>) //массив регионов
  const star = DataFilter.star.map((i) => <option value={i} key={i}>{i}</option>) //массив звезд
  
  const onChangeRegion = (e) => {
    setReg(e.target.value)
    if(reg === 'Все'){return}
  }
  const onChangeStar = (e) => {
    setSt(e.target.value)
    if(st === 'Все'){return}
  }
  const onChange = (e) => {
    document.querySelector('#region').value = 'Все'
    setReg('Все')
    document.querySelector('#star').value = 'Все'
    setSt('Все')
  }
  const onChangeChek = (e) => setChek({...chek, [e.target.name]: e.target.checked})

  return (
    <ListContext.Provider value={{
      onChange,
      onChangeRegion,
      onChangeStar,
      onChangeChek,
      region,
      star,
      reg,
      st,
      chek
    }} >
      {children}
    </ListContext.Provider>
  )
}
import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from '../../hooks/http.hook'
import {AuthContext} from '../../context/AuthContext'

const CreateContext = React.createContext()

export const useCreate = () => {
  return useContext(CreateContext)
}

export const CreateProvider = ({children}) => {
  const auth = useContext(AuthContext)
  const {request} = useHttp()

  
  const [image, setImage] = useState([])
  const [movie, setMovie] = useState([])
  const [social, setSocial] = useState({
    vk: '', 
    ok: '', 
    fb: '', 
    phone: null, 
    url: ''
  })
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
  const [link, setLink] = useState(
    {name: '', 
    region: '', 
    star: null, 
    price: null, 
    maps: '', 
    vr: '', 
    img: image, 
    video: movie
  })

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const pressHandler = async event => {
      try {
        await request('/api/link/generate', 'POST', {
          name: link.name, 
          region: link.region, 
          star: link.star, 
          price: link.price, 
          maps: link.maps, 
          vr: link.vr, 
          photo: image, 
          video: movie, 
          social: social,
          check: chek
        }, {
          Authorization: `Bearer ${auth.token}`
        })
      } catch (e) {
        console.log('Ошиблись')
      }
    
  }
  
  const onChange = (e) => setLink({...link, [e.target.name]: e.target.value})
  const onChangeSocial = (e) => setSocial({...social, [e.target.name]: e.target.value})
  const onChangeChek = (e) => setChek({...chek, [e.target.name]: e.target.checked})

  return (
    <CreateContext.Provider value={{
      onChange,
      onChangeSocial,
      onChangeChek,
      pressHandler,
      setImage,
      setMovie,
      image,
      movie,
    }} >
      {children}
    </CreateContext.Provider>
  )
}
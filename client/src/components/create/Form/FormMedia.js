import React, {useRef} from 'react'
import {useCreate} from '../CreateContext'

export const FormMedia = () =>  {
  const create = useCreate()
  const photoRef = useRef(null)
  const videoRef = useRef(null)
  const photos = create.image.map((i) => <li key={i}>{i}</li>)
  const movies = create.movie.map((i) => <li key={i}>{i}</li>)
  const onChangePhoto = () => create.setImage(create.image.concat(photoRef.current.value))
  const onChangeVideo = () => create.setMovie(create.movie.concat(videoRef.current.value))
  return (
    <>
          <input placeholder="Введите ссылку фото" type="text" ref={photoRef}/>
          <button className="btn" onClick={onChangePhoto}>добавить фото</button>
          <ul>{photos}</ul>
          <input placeholder="Введите ссылку видео" type="text" ref={videoRef}/>
          <button className="btn" onClick={onChangeVideo}>добавить видео</button>
          <ul>{movies}</ul>
          <button className="btn" onClick={create.pressHandler}>Отправить</button>
    </>
  )
}


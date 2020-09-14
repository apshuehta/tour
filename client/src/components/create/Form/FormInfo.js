import React from 'react'
import {useCreate} from '../CreateContext'
import {DataFilter} from '../../../data/dataFilter'

export const FormInfo = () =>  {
  const create = useCreate()
  const region = DataFilter.region.map((i) => <option value={i} key={i} >{i}</option>)
  const star = DataFilter.star.map((i) => <option value={i} key={i} >{i}</option>) 
  return (
    <>
          <input placeholder="Введите имя" type="text" onChange={create.onChange} name="name" />
          <select className="browser-default"  onChange={create.onChange} name="region">{region}</select>
          <select className="browser-default" onChange={create.onChange} name="star">{star}</select>
          <input placeholder="Введите сумму" type="number" onChange={create.onChange} name="price"/>
          <input placeholder="Введите ссылку карты" type="text" onChange={create.onChange} name="maps"/>
          <input placeholder="Введите ссылку 360" type="text" onChange={create.onChange} name="vr"/>
    </>
  )
}


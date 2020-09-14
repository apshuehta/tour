import React from 'react'
import { useList } from './ListContext'

export const Form = () =>  {
  const list = useList()

  
  return (
    <div style={styles.forms}>
    
      <div style={styles.selects}>
        <div >
          <label htmlFor="regions">Район</label>
          <select className="browser-default"  id="region" onChange={list.onChangeRegion}>{list.region}</select>
        </div>
        <div>
          <label htmlFor="star">Рейтинг</label>
          <select className="browser-default"  id="star" onChange={list.onChangeStar}>{list.star}</select>
        </div>       
      </div>
      <div style={styles.checkboxs}> 
          <label><input type="checkbox" className="filled-in" onChange={list.onChangeChek} name="run"/><span>Маршруты для пеших прогулок</span></label>
          <label><input type="checkbox" className="filled-in" onChange={list.onChangeChek} name="sauna"/><span>Сауна</span></label>
          <label><input type="checkbox" className="filled-in" onChange={list.onChangeChek} name="fishing"/><span>Рыбная ловля</span></label>
          <label><input type="checkbox" className="filled-in" onChange={list.onChangeChek} name="riding"/><span>Верховная езда</span></label>
          <label><input type="checkbox" className="filled-in" onChange={list.onChangeChek} name="heat"/><span>Парная</span></label>
          <label><input type="checkbox" className="filled-in" onChange={list.onChangeChek} name="accessibly"/><span>Доступен</span></label>
          <label><input type="checkbox" className="filled-in" onChange={list.onChangeChek} name="allDay"/><span>Круглосуточная стойка регистрации</span></label>
          <label><input type="checkbox" className="filled-in" onChange={list.onChangeChek} name="freeCancel"/><span>Бесплатная отмена бронирования</span></label>
          <label><input type="checkbox" className="filled-in" onChange={list.onChangeChek} name="noCreditCard"/><span>Бронирование без кредитной карты</span></label>
      </div> 
      
      <button className="btn" onClick={() => console.log(list.chek)}>log</button>    
      <button className="btn col" onClick={list.onChange}>Сбросить</button>
  </div>
  )
}

const styles = {
  
  forms: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    
    // backgroundColor: 'gray',
  },
  selects: {
    width: '100%', 
    marginRight: 10
  },
  checkboxs: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }
}


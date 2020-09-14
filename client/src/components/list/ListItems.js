import React from 'react'
import { useList } from './ListContext'
import {StarIcons} from './StarIcons'
import {Link} from 'react-router-dom'


export const ListItems = (props) =>  {
  const list = useList()
  const link = props.links

  let dataReg = list.reg === 'Все' ? link : link.filter(t => t.region === list.reg) 
  let dataSt = list.st === 'Все' ? link : link.filter(t => t.star.toString()  === list.st) 
  let dataA = dataReg.filter(x => dataSt.includes(x))

  let dataRun = list.chek.run ? link.filter(t => t.check.run  === list.chek.run) : link
  let dataB = dataRun.filter(x => dataA.includes(x))

  let dataSauna = list.chek.sauna ? link.filter(t => t.check.sauna  === list.chek.sauna) : link
  let dataC = dataSauna.filter(x => dataB.includes(x))

  let dataFishing = list.chek.fishing ? link.filter(t => t.check.fishing  === list.chek.fishing) : link
  let dataD = dataFishing.filter(x => dataC.includes(x))

  let dataRiding = list.chek.riding ? link.filter(t => t.check.riding  === list.chek.riding) : link
  let dataE = dataRiding.filter(x => dataD.includes(x))

  let dataHeat = list.chek.heat ? link.filter(t => t.check.heat  === list.chek.heat) : link
  let dataF = dataHeat.filter(x => dataE.includes(x))

  let dataAccessibly = list.chek.accessibly ? link.filter(t => t.check.accessibly  === list.chek.accessibly) : link
  let dataG = dataAccessibly.filter(x => dataF.includes(x))

  let dataAllDay = list.chek.allDay ? link.filter(t => t.check.allDay  === list.chek.allDay) : link
  let dataH = dataAllDay.filter(x => dataG.includes(x))

  let dataFreeCancel = list.chek.freeCancel ? link.filter(t => t.check.freeCancel  === list.chek.freeCancel) : link
  let dataI = dataFreeCancel.filter(x => dataH.includes(x))

  let dataNoCreditCard = list.chek.noCreditCard ? link.filter(t => t.check.noCreditCard  === list.chek.noCreditCard) : link
  let datas = dataNoCreditCard.filter(x => dataI.includes(x))
 

  const data = datas.map(
    (i) => {
      return (
        <li style={styles.li}  key={i._id}>
          <img src={i.photo[0]} width={300} height={'auto'} alt={''}></img>
          <div style={styles.info}>
            <p>{i.name}</p>
            <StarIcons name = {i.star} />
            <p>{i.region}</p>
          </div>
          <div style={styles.price}>
            <p>Цена за номер: {i.price}руб.</p>
            <Link to={`/detail/${i._id}`}>Открыть</Link>
          </div>
        </li>
      )
    }
  )

  
  return (
    <ul style={styles.ul}>{data}</ul>
  )
}


const styles = {
  containers: {
    height: '93vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  li: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'start',
    margin: 10,
    padding: 10,
    borderBottom: '2px solid gray',
  },
  info: {
    marginLeft: 30,
    width: '60%'
  },
  filters: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 200,
    // backgroundColor: 'gray'
  }
  
}
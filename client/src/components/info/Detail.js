import React, {useState} from 'react'

import {Photo} from './Photo' 
import {Contact} from './Contact' 
import {Video} from './Video' 
import {VR} from './VR' 
import {Maps} from './maps' 


export const Detail = (props) => {
  
  
  const data = props.link
  
  const [menu, setMenu] = useState(<Photo photo={data.photo}/>)
  return (
    <div style={styles.row}>
      <div >
        <h2 style={styles.h2}>{data.name}</h2>
        <ul style={styles.menu}>
          <li style={styles.li} onClick={() => setMenu(<Photo photo={data.photo}/>)}>Фото</li>
          <li style={styles.li} onClick={() => setMenu(<Maps maps={data.maps}/>)}>Карты</li>
          <li style={styles.li} onClick={() => setMenu(<Video video={data.video[0]}/>)}>Видео</li>
          <li style={styles.li} onClick={() => setMenu(<VR vr={data.vr}/>)}>360</li>
          <li style={styles.li} onClick={() => setMenu(<Contact social={data.social}/>)}>Контакты</li>
        </ul>
      </div>
      
      <div style={styles.containers}>
        {menu}
      </div>
    </div>
  )

  

  
}
const styles = {
  containers: {
    width: '100%', 
    height: 870, 
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  li: {
    backgroundColor: '#626262',
    width: '100%',
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    borderTop: 2,
    borderColor: 'red'

  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItem: 'start'
  },
  h2: {
    color: 'red',
    margin: 'auto'
  }

}
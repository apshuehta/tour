import React from 'react'
import {Form} from './Form'
import {ListProvider} from './ListContext'
import { ListItems } from './ListItems'


export const List = (props) => {
  return (
    <ListProvider >
        <div  className="container" style={styles.containers}>
          <Form />
          <ListItems links={props.links}/>
        </div>
    </ListProvider>
  )
}

const styles = {
  containers: {
    height: '93vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }
}

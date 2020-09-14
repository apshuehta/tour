import React from 'react'


export const Contact = (props) =>  {
  
  return (
    <div style={styles.social}>
      <a href={props.social.vk}>Вконтакте</a>
      <a href={props.social.ok}>Одноклассники</a>
      <a href={props.social.fb}>Facebook</a>
      <p>Телефон: {props.social.phone}</p>
      <a href={props.social.url}>Сайт: {props.social.url}</a>
    </div>
    
  )
}

const styles = {
  social: {
    display: 'flex',
    flexDirection: 'column',
  }
  
}
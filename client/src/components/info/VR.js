import React from 'react'


export const VR = (props) =>  {
  
  return (
    <iframe src={props.vr} width={'100%'} height={'100%'} style={styles.blur} title="vr"></iframe>
  )
}

const styles = {
  blur: {
    filter: 'blur(0px)',
    borderRadius: 10
  },
  
}

import React from 'react'
import Iframe from 'react-iframe'


export const ThreePage = ( ) => {
   return (
    <iframe 
      src="http://127.0.0.1:5500/" 
      frameborder="0" 
      style={{
        // overflow: 'hidden',
        // overflowX: 'hidden', 
        // overflowY: 'hidden', 
        height: '95%', 
        width: '100%', 
        position: 'absolute', 
        top:64, 
        left:0, 
        right:0, 
        bottom:0 
      }}
      // height="100%" 
      // width="100%"
      ></iframe>
  )
}
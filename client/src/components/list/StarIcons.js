import React from 'react'
import { IoMdStar, IoMdStarOutline } from "react-icons/io"



export const StarIcons = (props) =>  {
  
  let s1 = <IoMdStar color="#6b480b" size="20"/>
  let s2 = <IoMdStarOutline size="20" />
  if(props.name === 1) {
    return <div>{s1}{s2}{s2}{s2}{s2}</div>
  }
  if(props.name === 2) {
    return <div>{s1}{s1}{s2}{s2}{s2}</div>
  }
  if(props.name === 3) {
    return <div>{s1}{s1}{s1}{s2}{s2}</div>
  }
  if(props.name === 4) {
    return <div>{s1}{s1}{s1}{s1}{s2}</div>
  }
  if(props.name === 5) {
    return <div>{s1}{s1}{s1}{s1}{s1}</div>
  }
  else {
    return <h1>нет звезд</h1>
  }
  
}

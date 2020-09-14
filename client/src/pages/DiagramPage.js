import React, {useCallback, useContext, useEffect, useState, Suspense} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {Dashboard} from '../components/diagram/index'


export const DiagramPage = ( ) => {
   const [links, setLinks] = useState([])
   const {request} = useHttp()
   const {token} = useContext(AuthContext)
 
   const fetchLinks = useCallback(async () => {
     try {
       const fetched = await request('/api/link', 'GET', null, {
         Authorization: `Bearer ${token}`
       })
       setLinks(fetched)
     } catch (e) {console(e)}
   }, [token, request])
 
   useEffect(() => {
     fetchLinks()
   }, [fetchLinks])
 
   return (
    <Suspense fallback={<Loader/>}>
      <Dashboard links={links}/>
    </Suspense>
  )
}
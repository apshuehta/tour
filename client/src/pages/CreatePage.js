import React from 'react'
import {CreateProvider} from '../components/create/CreateContext' 
import {FormInfo} from '../components/create/Form/FormInfo'
import {FormSocial} from '../components/create/Form/FormSocial'
import {FormChek} from '../components/create/Form/FormChek'
import {FormMedia} from '../components/create/Form/FormMedia'


export const CreatePage = () => {
  return (
    <CreateProvider>
      <div className="row"> 
        <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
            <FormInfo />
            <FormSocial />
            <FormChek />
            <FormMedia />
        </div>
      </div>
    </CreateProvider>
  )
  
  
    
  
}

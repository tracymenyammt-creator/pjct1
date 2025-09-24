import React from 'react'
import { Timeline } from '../Componets/Timeline'
import { experiences } from '../Componets/constants'

const Experiences = () => {
  return (
    <div className='w-full'>
        <Timeline data={experiences}/>
         </div>
  )
}

export default Experiences
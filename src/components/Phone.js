import React from 'react'
import MessageSent from './MessageSent'
import MessageReceived from './MessageReceived'
import background from './phone-screen.png'

export default function Phone({ name, phoneClock, online, operator, battery }) {
  return (
    <div
      className='div--phone'
      style={{ backgroundImage: `url(${background})` }}
    >
      <h6 className='phone--operator'>{operator}</h6>
      <h6 className='phone--clock'>{phoneClock}</h6>
      <h6 className='phone--battery'>{battery}</h6>
      <h3 className='phone--name'>{name}</h3>
      <h6 className='phone--online'>{online}</h6>
      <MessageReceived />
      <MessageSent />
    </div>
  )
}

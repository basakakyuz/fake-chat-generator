import React, { useState } from 'react'
import Phone from './Phone'

export default function Settings() {
  const [name, setName] = useState('ayşe')
  const [phoneClock, setPhoneClock] = useState('11:47')
  const [online, setOnline] = useState('online')
  const [operator, setOperator] = useState('turkcell')
  const [battery, setBattery] = useState('59 %')

  const [message, setMessage] = useState('')
  const [time, setTime] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const clearValues = () => {
    setName('')
    setPhoneClock('')
    setOnline('')
    setOperator('')
    setBattery('')
  }

  return (
    <div>
      <form className='form' /*onSubmit={handleSubmit}*/>
        <h3 className='form--header'>Phone Settings</h3>
        <input
          type='text'
          placeholder='Name'
          className='form--input'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Phone Clock'
          className='form--input'
          onChange={(e) => setPhoneClock(e.target.value)}
        />
        <input
          type='text'
          placeholder='Online'
          className='form--input'
          onChange={(e) => setOnline(e.target.value)}
        />
        <input
          type='text'
          placeholder='Operator'
          className='form--input'
          onChange={(e) => setOperator(e.target.value)}
        />
        <input
          type='text'
          placeholder='Battery'
          className='form--input'
          onChange={(e) => setBattery(e.target.value)}
        />
        <button type='reset' className='form--button' onClick={clearValues}>
          Clear All
        </button>
      </form>

      <form className='form-message-settings' onSubmit={handleSubmit}>
        <h3 className='form--header'>Message</h3>
        <input
          type='text'
          placeholder='Type message..'
          className='form-message-input'
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type='text'
          placeholder='Type message timestamp..'
          className='form-message-input'
          onChange={(e) => setTime(e.target.value)}
        />
        <button type='submit' className='form--button'>
          Add
        </button>
        <label>
          <input
            type='radio'
            name='message-type'
            value='Sent'
            onChange={(e) => setMessageType(e.target.value)}
          />
          Sent
        </label>
        <label>
          <input
            type='radio'
            name='message-type'
            value='Received'
            onChange={(e) => setMessageType(e.target.value)}
          />
          Received
        </label>
        <button type='reset' className='form--button'>
          Clear All
        </button>
      </form>

      <Phone
        name={name}
        phoneClock={phoneClock}
        online={online}
        operator={operator}
        battery={battery}
      />
    </div>
  )
}

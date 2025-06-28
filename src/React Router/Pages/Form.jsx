import React from 'react'

const Form = () => {
  return (
    <div>
      <h3>Contact Form:</h3>
      <form>
        <input type="text" placeholder='Name' />
        <br/>
        <input type="email" placeholder='Email' />
        <br/>
        <textarea placeholder='Message' />
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
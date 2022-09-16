import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd, onSubmit }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  // valore di default per reminder è false
  const [reminder, setReminder] = useState(false)

  onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          value={text}
          placeholder='Add Task'
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day and time</label>
        <input
          type='text'
          value={day}
          placeholder='Add day & time'
          onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className='form-control form-control-check' >
        <label>Set reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>

      <input
        className='btn btn-block'
        type='submit'
        value='Save task'
      />
    </form>
  )
}

export default AddTask
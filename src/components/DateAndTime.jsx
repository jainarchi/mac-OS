import React, { useState, useEffect } from 'react'

const DateAndTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      
      const day = dayNames[now.getDay()]
      const month = monthNames[now.getMonth()]
      const date = now.getDate()
      
      let hours = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const ampm = hours >= 12 ? 'pm' : 'am'
      hours = hours % 12 || 12
      
      setDateTime(`${day} ${month} ${date}  ${hours}:${minutes} ${ampm}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{fontSize: '13px' }}>
      {dateTime}
    </div>
  )
}

export default DateAndTime

import React from 'react'

const notificationStyle = 
{
 color: 'green',
 fontStyle: 'italic',
 fontSize: 16
}

const errorStyle = 
{
 color: 'red',
 fontStyle: 'italic',
 fontSize: 16
}

const Notification = ({ message, messageStyle }) => {
  if (messageStyle === null) {
      return null
  }

  else if (messageStyle === true){
    return (
      <div className="error" style={notificationStyle}>
        {message}
      </div>
    )
  }
      else {
    return (
      <div className="error" style={errorStyle}>
        {message}
      </div>
    )
  }
}

export default Notification
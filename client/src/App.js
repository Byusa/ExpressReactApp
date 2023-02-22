import React, { useEffect, useState } from 'react'

function App() {
  const [backendData, setBackendData] =  useState({})

  useEffect(()=> {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div>
      hi
      {backendData.users && backendData.users.map(user => <p key={user}>{user}</p>)}
    </div>
  )
}

export default App
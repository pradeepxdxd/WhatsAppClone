import React, { useState } from 'react'
import LoginView from '../../views/Auth/LoginView'
import SignUpView from '../../views/Auth/SignUpView'

export default function Auth() {
  const [showAuth, setShowAuth] = useState(false)
  return (
    <>
      {
        showAuth ?
          <SignUpView setView={setShowAuth} /> : <LoginView setView={setShowAuth} />
      }
    </>
  )
}

import type { FC } from 'react'
import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import type { RouteComponentProps } from '@reach/router'

import { loginWithGoogle, useAuth } from '../contexts/auth/AuthContext'

const LoginPage: FC<RouteComponentProps> = () => {
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      navigate('/app/home')
    } else {
      loginWithGoogle()
    }
  }, [user])

  return (
    <div className="flex items-center flex-column mt3">
      Estamos configurando seu ambiente!
    </div>
  )
}

export default LoginPage
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

/*2nd one is live dev, should contact with Sant's back end.*/
const CLIENT_ID = "168943669979-htgc5pek48r4fvpvrt8pn70vvgb8dsqq.apps.googleusercontent.com"
/*const CLIENT_ID = "680086796688-s64ml8bsfmd6jl9nn7ab826hh0v2bjl8.apps.googleusercontent.com"*/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)

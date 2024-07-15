import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RequestsProvider } from './ContexApi/ApiContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <RequestsProvider >

     <App />
 </RequestsProvider>

)

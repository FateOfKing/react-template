import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { nanoid } from 'nanoid'

import App from './App'

const idA = nanoid()
console.log('唯一ID，作为会话ID，存在sessionstorage里面', idA)

createRoot(document.getElementById('root') as HTMLElement).render(<App />)

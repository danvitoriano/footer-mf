'use client'
import React from 'react'
import { createRoot } from 'react-dom/client'
import FooterMicroFrontend from './page'

// Single-SPA lifecycle functions
export const bootstrap = () => Promise.resolve()

export const mount = (props: any) => {
  const container = document.getElementById('footer-mf-container')
  if (container) {
    const root = createRoot(container)
    root.render(<FooterMicroFrontend />)
    return Promise.resolve()
  }
  return Promise.reject('Container not found')
}

export const unmount = (props: any) => {
  const container = document.getElementById('footer-mf-container')
  if (container) {
    container.innerHTML = ''
  }
  return Promise.resolve()
}

export default FooterMicroFrontend 
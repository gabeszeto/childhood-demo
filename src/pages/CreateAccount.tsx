import React from 'react'
import './auth.css'
import { useNavigate } from 'react-router-dom'

export default function CreateAccount() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">create account</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label">
            Full name
            <input className="auth-input" type="text" required />
          </label>

          <label className="auth-label">
            Email
            <input className="auth-input" type="email" required />
          </label>

          <label className="auth-label">
            Password
            <input className="auth-input" type="password" required />
          </label>

          <div className="auth-actions">
            <button type="submit" className="auth-button">
              create account
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

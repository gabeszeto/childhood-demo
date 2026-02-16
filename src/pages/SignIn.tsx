import React from 'react'
import './auth.css'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">sign in</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
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
              sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

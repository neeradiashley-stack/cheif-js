'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase-client';
import Navbar from '@/components/Navbar';

type UserRole = 'worker' | 'restaurant';

export default function SignupPage() {
  const [role, setRole] = useState<UserRole | ''>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const supabase = createClient();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    if (!role) {
      setError('Please select your role first');
      return;
    }
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: role,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <>
        <Navbar />
        <div className="auth-page">
          <div className="auth-card">
            <div className="auth-header">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h1>Check Your Email</h1>
              <p>We sent a confirmation link to <strong>{email}</strong>. Click the link to activate your account.</p>
            </div>
            <a href="/login" className="btn-auth" style={{ textDecoration: 'none', textAlign: 'center' }}>
              Go to Login
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Join StaffBazaar as a worker or restaurant owner</p>
          </div>

          {/* Role Selection */}
          <div className="auth-role-select">
            <button
              type="button"
              className={`auth-role-card ${role === 'worker' ? 'selected' : ''}`}
              onClick={() => setRole('worker')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/>
              </svg>
              <span className="opt-label">I&apos;m a Worker</span>
              <span className="opt-desc">Chef, helper, captain, etc.</span>
            </button>
            <button
              type="button"
              className={`auth-role-card ${role === 'restaurant' ? 'selected' : ''}`}
              onClick={() => setRole('restaurant')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/>
                <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
              </svg>
              <span className="opt-label">I&apos;m a Restaurant</span>
              <span className="opt-desc">Hire chefs &amp; staff</span>
            </button>
          </div>

          <form onSubmit={handleSignup}>
            <div className="field">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="e.g. Vikram Sharma"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Min. 6 characters"
                value={password}
                onChange={e => setPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>

            {error && <div className="auth-error">{error}</div>}

            <button type="submit" className="btn-auth" disabled={loading}>
              {loading ? 'Creating account...' : 'Sign Up'}
            </button>
          </form>

          <div className="auth-footer">
            Already have an account? <a href="/login">Log In</a>
          </div>
        </div>
      </div>
    </>
  );
}

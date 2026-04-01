'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase-client';
import Navbar from '@/components/Navbar';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    window.location.href = '/dashboard';
  }

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Log in to your StaffBazaar account</p>
          </div>

          <form onSubmit={handleLogin}>
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
                placeholder="Your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <div className="auth-error">{error}</div>}

            <button type="submit" className="btn-auth" disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          <div className="auth-footer">
            Don&apos;t have an account? <a href="/signup">Sign Up Free</a>
          </div>
        </div>
      </div>
    </>
  );
}

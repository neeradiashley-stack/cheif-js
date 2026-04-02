'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase-client';

type LoginAs = 'worker' | 'restaurant' | '';

export default function LoginPage() {
  const [loginAs, setLoginAs] = useState<LoginAs>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function getRedirect(role: string) {
    return role === 'restaurant' ? '/dashboard' : '/create-profile';
  }

  async function handleGoogleLogin() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    const role = data.user?.user_metadata?.role || 'worker';
    window.location.href = getRedirect(role);
  }

  const logo = (
    <div className="auth-logo">
      Staff<em>Bazaar</em>
    </div>
  );

  const heroBanner = (
    <div className="auth-hero">
      <img
        src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
        alt="Professional chef"
      />
      <div className="auth-hero-overlay" />
    </div>
  );

  // Step 1: Choose who you are
  if (!loginAs) {
    return (
      <div className="auth-page">
        <div className="auth-card auth-card-with-hero">
          {heroBanner}
          <div className="auth-card-body">
          {logo}
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>How do you want to log in?</p>
          </div>

          <div className="auth-role-select">
            <button
              type="button"
              className="auth-role-card"
              onClick={() => setLoginAs('worker')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
              <span className="opt-label">I&apos;m a Worker</span>
              <span className="opt-desc">Chef, helper, captain</span>
            </button>
            <button
              type="button"
              className="auth-role-card"
              onClick={() => setLoginAs('restaurant')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/>
                <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
              </svg>
              <span className="opt-label">I&apos;m a Restaurant</span>
              <span className="opt-desc">Hire chefs &amp; staff</span>
            </button>
          </div>

          <div className="auth-footer">
            Don&apos;t have an account? <a href="/signup">Sign Up Free</a>
          </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Login form
  return (
    <div className="auth-page">
      <div className="auth-card auth-card-with-hero">
        {heroBanner}
        <div className="auth-card-body">
        {logo}
        <div className="auth-header">
          <div className="auth-role-badge">
            {loginAs === 'worker' ? 'Worker Login' : 'Restaurant Login'}
          </div>
          <h1>Welcome Back</h1>
          <p>
            Log in as {loginAs === 'worker' ? 'a worker' : 'a restaurant owner'}
          </p>
        </div>

        <button type="button" className="btn-google" onClick={handleGoogleLogin}>
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.01 24.01 0 0 0 0 21.56l7.98-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          Continue with Google
        </button>

        <div className="auth-divider"><span>or use email</span></div>

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
          <button type="button" className="auth-switch" onClick={() => setLoginAs('')}>
            &larr; Switch role
          </button>
          <span> &middot; </span>
          <span>No account? <a href="/signup">Sign Up Free</a></span>
        </div>
        </div>
      </div>
    </div>
  );
}

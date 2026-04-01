import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase-server';
import Navbar from '@/components/Navbar';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  const role = user.user_metadata?.role || 'worker';
  const name = user.user_metadata?.full_name || user.email;

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Welcome, {name}</h1>
            <p>
              You are signed in as{' '}
              <strong>{role === 'restaurant' ? 'Restaurant Owner' : 'Worker'}</strong>
            </p>
          </div>

          {role === 'restaurant' ? (
            <div className="dashboard-actions">
              <a href="/" className="btn-auth" style={{ textDecoration: 'none', textAlign: 'center' }}>
                Browse Staff
              </a>
            </div>
          ) : (
            <div className="dashboard-actions">
              <a href="/create-profile" className="btn-auth" style={{ textDecoration: 'none', textAlign: 'center' }}>
                Create / Edit Profile
              </a>
            </div>
          )}

          <form action="/auth/signout" method="post">
            <button type="submit" className="btn-auth btn-auth-outline">
              Log Out
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">Staff<em>Bazaar</em></a>

        <div className="nav-menu">
          {/* For Job Seekers */}
          <div className="nav-item">
            <button className="nav-trigger">
              For Job Seekers
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div className="dropdown">
              <a href="/create-profile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                Create Profile
              </a>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                Browse Jobs
              </a>
            </div>
          </div>

          {/* For Restaurants */}
          <div className="nav-item">
            <button className="nav-trigger">
              For Restaurants
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div className="dropdown">
              <a href="#">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
                Post a Job
              </a>
              <div className="dropdown-divider"></div>
              <div className="dropdown-label">Browse Staff</div>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                Chefs
              </a>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                Helpers
              </a>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                Captains
              </a>
            </div>
          </div>

          <a href="/" className="nav-link-simple">About</a>
          <a href="/" className="nav-link-simple">Contact</a>
        </div>

        <div className="nav-right">
          <a href="#" className="btn-nav btn-nav-outline">Log In</a>
          <a href="/create-profile" className="btn-nav btn-nav-primary">Sign Up Free</a>
        </div>

        <button className="mobile-toggle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </nav>
  );
}

'use client';

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function ProfileHeader() {
  return (
    <>
      <div className="profile-header-wrap">
        <header className="profile-header">
          <div className="avatar-wrap">
            <div className="avatar">
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&h=200&fit=crop&crop=face" alt="Vikram Sharma" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="avatar-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>

          <div className="profile-main">
            <div className="profile-top-row">
              <h1 className="profile-name">Vikram Sharma</h1>
              <div className="profile-type">Head Chef</div>
            </div>
            <div className="profile-meta-row">
              <span className="meta-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <strong>Mumbai</strong>, Andheri West
              </span>
              <span className="meta-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                Hindi, English, Marathi
              </span>
              <span className="meta-chip meta-chip--verified">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                Verified
              </span>
            </div>
          </div>

          <div className="profile-actions-inline">
            <button className="btn btn-contact" onClick={() => scrollToContact()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Contact
            </button>
            <button className="btn-icon" aria-label="Save">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            </button>
            <button className="btn-icon" aria-label="Share">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </button>
          </div>
        </header>
      </div>
      <div className="divider"><hr /></div>
    </>
  );
}

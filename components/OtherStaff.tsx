export default function OtherStaff() {
  return (
    <div className="other-staff-section">
      <div className="other-staff-header">
        <div className="sec-label" style={{marginBottom: '0'}}>Other Staff Members</div>
        <a href="#" className="view-all-link">View All <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: '14px', height: '14px'}}><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></a>
      </div>
      <div className="staff-grid">

        <a href="helper-profile.html" className="staff-card">
          <div className="staff-photo">
            <div className="staff-initials">RP</div>
          </div>
          <div className="staff-badge-type">Kitchen Helper</div>
          <div className="staff-name">Ravi Patil</div>
          <div className="staff-meta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '12px', height: '12px'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Pune &middot; 3 yrs
          </div>
          <div className="staff-salary">&#8377;18,000/mo</div>
        </a>

        <a href="captain-profile.html" className="staff-card">
          <div className="staff-photo">
            <div className="staff-initials">AD</div>
          </div>
          <div className="staff-badge-type">Restaurant Captain</div>
          <div className="staff-name">Ananya Deshmukh</div>
          <div className="staff-meta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '12px', height: '12px'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Bangalore &middot; 7 yrs
          </div>
          <div className="staff-salary">&#8377;28,000/mo</div>
        </a>

        <a href="#" className="staff-card">
          <div className="staff-photo">
            <div className="staff-initials">AM</div>
          </div>
          <div className="staff-badge-type">Tandoor Chef</div>
          <div className="staff-name">Abdul Malik</div>
          <div className="staff-meta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '12px', height: '12px'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Hyderabad &middot; 10 yrs
          </div>
          <div className="staff-salary">&#8377;40,000/mo</div>
        </a>

        <a href="#" className="staff-card">
          <div className="staff-photo">
            <div className="staff-initials">SG</div>
          </div>
          <div className="staff-badge-type">Pastry Chef</div>
          <div className="staff-name">Sunita Gupta</div>
          <div className="staff-meta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '12px', height: '12px'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Bangalore &middot; 6 yrs
          </div>
          <div className="staff-salary">&#8377;30,000/mo</div>
        </a>

      </div>
    </div>
  );
}

export default function Verification() {
  return (
    <div className="sec" id="verification">
      <div className="sec-label">Verification</div>
      <div className="verify-grid">
        <div className="verify-card status-yes">
          <div className="verify-icon yes">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div className="verify-label">
            Aadhaar Verified
            <small>Identity confirmed 15 Mar 2023</small>
          </div>
        </div>
        <div className="verify-card status-yes">
          <div className="verify-icon yes">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div className="verify-label">
            Phone Verified
            <small>+91 98XXX XXX67</small>
          </div>
        </div>
        <div className="verify-card status-no">
          <div className="verify-icon no">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </div>
          <div className="verify-label">
            Background Check
            <small>Not yet completed</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KeyDetails() {
  return (
    <div className="sec" id="details">
      <div className="sec-label">Key Details</div>
      <div className="details-grid">
        <div className="detail-card">
          <div className="detail-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div>
            <div className="detail-label">Ready to Join</div>
            <div className="detail-value"><span className="highlight">Immediate</span> <span className="muted">&mdash; currently available</span></div>
          </div>
        </div>
        <div className="detail-card">
          <div className="detail-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <div>
            <div className="detail-label">Total Experience</div>
            <div className="detail-value">12 years</div>
          </div>
        </div>
        <div className="detail-card">
          <div className="detail-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <div className="detail-label">Current Location</div>
            <div className="detail-value">Andheri West, Mumbai</div>
          </div>
        </div>
        <div className="detail-card">
          <div className="detail-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <div>
            <div className="detail-label">Preferred Work</div>
            <div className="detail-value">Full-time / Contract</div>
          </div>
        </div>
      </div>
    </div>
  );
}

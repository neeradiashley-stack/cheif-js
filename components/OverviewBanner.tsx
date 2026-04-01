export default function OverviewBanner() {
  return (
    <div className="salary-banner sec" id="overview">
      <div className="salary-item">
        <div className="salary-label">Negotiable</div>
        <div className="salary-amount">&#8377;45,000 <small>/ month</small></div>
      </div>
      <div className="salary-item">
        <div className="salary-hl-value"><span className="hl-green">Immediate</span></div>
        <div className="salary-hl-label">Ready to Join</div>
      </div>
      <div className="salary-item">
        <div className="salary-hl-value">12 Yrs</div>
        <div className="salary-hl-label">Experience</div>
      </div>
      <div className="salary-item">
        <div className="salary-hl-value"><span className="hl-green">Yes</span></div>
        <div className="salary-hl-label">Demo</div>
      </div>
    </div>
  );
}

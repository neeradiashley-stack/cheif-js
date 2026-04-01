export default function Toast() {
  return (
    <div className="toast" id="toast">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
      <span id="toastMsg">Message sent successfully!</span>
    </div>
  );
}

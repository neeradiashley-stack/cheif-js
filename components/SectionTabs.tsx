'use client';
import { useEffect } from 'react';

export default function SectionTabs() {
  useEffect(() => {
    const secTabs = document.querySelectorAll('.sec-tab');
    secTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.getElementById((tab as HTMLElement).dataset.target ?? '');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    const sectionIds = ['overview', 'details', 'cuisines', 'experience', 'contact'];
    const stickyOffset = 140;
    let spyTicking = false;

    function updateScrollSpy() {
      let activeId = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= stickyOffset + 10) activeId = id;
      }
      secTabs.forEach(t => t.classList.toggle('active', (t as HTMLElement).dataset.target === activeId));
      spyTicking = false;
    }

    window.addEventListener('scroll', () => {
      if (!spyTicking) { requestAnimationFrame(updateScrollSpy); spyTicking = true; }
    }, { passive: true });
    updateScrollSpy();
  }, []);

  return (
    <div className="section-tabs">
      <div className="section-tabs-inner">
        <button className="sec-tab active" data-target="overview">Overview</button>
        <button className="sec-tab" data-target="details">Key Details</button>
        <button className="sec-tab" data-target="cuisines">Cuisines</button>
        <button className="sec-tab" data-target="experience">Experience</button>
        <button className="sec-tab" data-target="verification">Verification</button>
        <button className="sec-tab" data-target="contact">Contact</button>
      </div>
    </div>
  );
}

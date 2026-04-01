'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase-client';
import Navbar from '@/components/Navbar';

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------
const translations: Record<string, Record<string, string>> = {
  en: {
    lang_label: 'Language:',
    s1_title: 'What do you do?',
    s1_desc: 'Pick the job that best describes you',
    s2_title: 'Basic Info',
    s2_desc: 'Tell us your name and phone number',
    s3_title: 'Your Photo',
    s3_desc: 'Add a clear photo so employers recognise you',
    s4_title: 'Your Location & Languages',
    s4_desc: 'Where are you based? What languages do you speak?',
    s5_title: 'Experience & Salary',
    s5_desc: 'How long have you been working? What salary do you want?',
    s6_title: 'Your Skills',
    s6_desc: 'Which cuisines or kitchen skills do you have?',
    s7_title: 'Work History',
    s7_desc: 'Tell us about your past jobs',
    s8_title: 'Work Cities',
    s8_desc: 'Which cities are you open to work in?',
    label_name: 'Full Name',
    label_phone: 'Phone Number',
    placeholder_name: 'e.g. Ramesh Kumar',
    placeholder_phone: 'e.g. 9876543210',
    phone_hint: 'WhatsApp number preferred',
    tap_to_add: 'Tap to add',
    label_city: 'Your City / Town',
    label_languages: 'Languages You Speak',
    label_experience: 'Years of Experience',
    label_salary: 'Expected Salary',
    salary_min: '₹5,000',
    salary_max: '₹1,00,000+',
    label_cuisines: 'Cuisines & Skills',
    label_job_title: 'Job Title',
    label_workplace: 'Workplace / Restaurant Name',
    label_from: 'From',
    label_to: 'To (or "Present")',
    placeholder_job_title: 'e.g. Head Chef',
    placeholder_workplace: 'e.g. Hotel Taj',
    add_more_exp: 'Add Another Job',
    label_work_cities: 'Cities You Can Work In',
    btn_back: 'Back',
    btn_next: 'Next',
    btn_submit: 'Submit Profile',
    success_title: 'Profile Created!',
    success_desc: 'Your profile is live. Employers can now find and contact you.',
    success_btn: 'Back to Home',
    role_chef: 'Chef / Cook',
    role_chef_desc: 'Head chef, sous chef, cook',
    role_helper: 'Kitchen Helper',
    role_helper_desc: 'Cleaning, prep, dish wash',
    role_captain: 'Captain / Steward',
    role_captain_desc: 'Waiter, table service',
    role_other: 'Other',
    role_other_desc: 'Manager, cashier, etc.',
  },
  hi: {
    lang_label: 'भाषा:',
    s1_title: 'आप क्या काम करते हैं?',
    s1_desc: 'अपना काम चुनें',
    s2_title: 'बुनियादी जानकारी',
    s2_desc: 'अपना नाम और फोन नंबर दें',
    s3_title: 'आपकी फोटो',
    s3_desc: 'एक साफ फोटो लगाएं',
    s4_title: 'आपका शहर और भाषाएँ',
    s4_desc: 'आप कहाँ रहते हैं? कौन-सी भाषाएँ जानते हैं?',
    s5_title: 'अनुभव और वेतन',
    s5_desc: 'आपका अनुभव और अपेक्षित वेतन',
    s6_title: 'आपके कौशल',
    s6_desc: 'आप कौन-सा खाना बना सकते हैं?',
    s7_title: 'काम का अनुभव',
    s7_desc: 'पिछले काम के बारे में बताएं',
    s8_title: 'कहाँ काम करेंगे',
    s8_desc: 'कौन-से शहरों में काम कर सकते हैं?',
    label_name: 'पूरा नाम',
    label_phone: 'फोन नंबर',
    placeholder_name: 'जैसे रमेश कुमार',
    placeholder_phone: 'जैसे 9876543210',
    phone_hint: 'WhatsApp नंबर दें',
    tap_to_add: 'फोटो जोड़ें',
    label_city: 'आपका शहर',
    label_languages: 'आप कौन-सी भाषाएँ बोलते हैं',
    label_experience: 'अनुभव के साल',
    label_salary: 'अपेक्षित वेतन',
    salary_min: '₹5,000',
    salary_max: '₹1,00,000+',
    label_cuisines: 'कौशल और व्यंजन',
    label_job_title: 'काम का नाम',
    label_workplace: 'रेस्तराँ / होटल का नाम',
    label_from: 'कब से',
    label_to: 'कब तक',
    placeholder_job_title: 'जैसे हेड शेफ',
    placeholder_workplace: 'जैसे होटल ताज',
    add_more_exp: 'और काम जोड़ें',
    label_work_cities: 'काम के शहर',
    btn_back: 'वापस',
    btn_next: 'आगे',
    btn_submit: 'प्रोफ़ाइल सबमिट करें',
    success_title: 'प्रोफ़ाइल बन गई!',
    success_desc: 'आपकी प्रोफ़ाइल लाइव है। नियोक्ता आपको ढूंढ सकते हैं।',
    success_btn: 'होम पर जाएं',
    role_chef: 'शेफ / कुक',
    role_chef_desc: 'हेड शेफ, सू शेफ, कुक',
    role_helper: 'किचन हेल्पर',
    role_helper_desc: 'सफाई, प्रेप, बर्तन धोना',
    role_captain: 'कैप्टन / स्टीवर्ड',
    role_captain_desc: 'वेटर, टेबल सर्विस',
    role_other: 'अन्य',
    role_other_desc: 'मैनेजर, कैशियर, आदि',
  },
};

// ---------------------------------------------------------------------------
// Step titles for the progress bar
// ---------------------------------------------------------------------------
const stepTitles: Record<string, string[]> = {
  en: ['', 'Your Role', 'Basic Info', 'Your Photo', 'Location', 'Experience & Salary', 'Skills', 'Work History', 'Work Cities'],
  hi: ['', 'आपका काम', 'नाम और नंबर', 'आपकी फोटो', 'शहर', 'अनुभव और वेतन', 'कौशल', 'काम का अनुभव', 'कहाँ काम करेंगे'],
};

// ---------------------------------------------------------------------------
// Static lists
// ---------------------------------------------------------------------------
const LANGUAGE_CHIPS = [
  { code: 'Hindi', native: 'हिन्दी' },
  { code: 'English', native: 'English' },
  { code: 'Marathi', native: 'मराठी' },
  { code: 'Tamil', native: 'தமிழ்' },
  { code: 'Telugu', native: 'తెలుగు' },
  { code: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'Bengali', native: 'বাংলা' },
  { code: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  { code: 'Malayalam', native: 'മലയാളം' },
  { code: 'Urdu', native: 'اردو' },
  { code: 'Odia', native: 'ଓଡ଼ିଆ' },
  { code: 'Assamese', native: 'অসমীয়া' },
  { code: 'Konkani', native: 'कोंकणी' },
  { code: 'Nepali', native: 'नेपाली' },
  { code: 'Sindhi', native: 'سنڌي' },
  { code: 'Kashmiri', native: 'کٲشُر' },
  { code: 'Manipuri', native: 'মেইতেই' },
];

const CUISINES = [
  'North Indian', 'South Indian', 'Chinese / Indo-Chinese', 'Mughlai / Biryani',
  'Continental', 'Italian / Pizza', 'Tandoor', 'Bakery / Pastry',
  'Street Food / Chaat', 'Bengali', 'Gujarati / Rajasthani', 'Kerala',
];

const WORK_CITIES = [
  'Mumbai', 'Delhi NCR', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai',
  'Kolkata', 'Goa', 'Jaipur', 'Ahmedabad', 'Chandigarh', 'Lucknow',
];

const EXPERIENCE_OPTIONS = [
  'Less than 1 year', '1-2 years', '2-5 years', '5-10 years', '10-15 years', '15+ years',
];

const UI_LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'HI' },
  { code: 'mr', label: 'MR' },
  { code: 'ta', label: 'TA' },
  { code: 'te', label: 'TE' },
  { code: 'kn', label: 'KN' },
  { code: 'bn', label: 'BN' },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function CreateProfilePage() {
  const [step, setStep] = useState(1);
  const [lang, setLang] = useState('en');
  const [role, setRole] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [experience, setExperience] = useState('');
  const [selectedLangs, setSelectedLangs] = useState<string[]>([]);
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [salary, setSalary] = useState(25000);
  const [photo, setPhoto] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [expEntries, setExpEntries] = useState([{ title: '', workplace: '', from: '', to: '' }]);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const totalSteps = 8;

  // Translation helper — falls back to English, then the key itself
  const t = (key: string) => translations[lang]?.[key] ?? translations['en'][key] ?? key;

  function nextStep() { setStep(s => Math.min(s + 1, totalSteps + 1)); }
  function prevStep() { setStep(s => Math.max(s - 1, 1)); }

  function toggleItem(list: string[], setList: (v: string[]) => void, item: string) {
    setList(list.includes(item) ? list.filter(x => x !== item) : [...list, item]);
  }

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onload = ev => setPhoto(ev.target?.result as string);
    reader.readAsDataURL(file);
  }

  function addExp() {
    setExpEntries(entries => [...entries, { title: '', workplace: '', from: '', to: '' }]);
  }

  function formatSalary(val: number) {
    return '₹' + val.toLocaleString('en-IN') + ' /month';
  }

  function updateExpEntry(index: number, field: string, value: string) {
    setExpEntries(entries =>
      entries.map((entry, i) => (i === index ? { ...entry, [field]: value } : entry))
    );
  }

  async function submitProfile() {
    setSubmitting(true);
    setSubmitError('');

    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        setSubmitError('You must be logged in to create a profile.');
        setSubmitting(false);
        return;
      }

      // Upload photo if provided
      let photoUrl: string | null = null;
      if (photoFile) {
        const ext = photoFile.name.split('.').pop();
        const path = `${user.id}/avatar.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(path, photoFile, { upsert: true });

        if (!uploadError) {
          const { data: urlData } = supabase.storage.from('avatars').getPublicUrl(path);
          photoUrl = urlData.publicUrl;
        }
      }

      // Upsert profile
      const { error: profileError } = await supabase.from('profiles').upsert({
        id: user.id,
        role: role || 'worker',
        full_name: fullName,
        phone,
        city,
        photo_url: photoUrl,
        salary_expected: salary,
        experience,
        cuisines,
        languages: selectedLangs,
        work_cities: cities,
      });

      if (profileError) {
        setSubmitError(profileError.message);
        setSubmitting(false);
        return;
      }

      // Save work history
      const validEntries = expEntries.filter(e => e.title || e.workplace);
      if (validEntries.length > 0) {
        // Clear old entries first
        await supabase.from('work_history').delete().eq('profile_id', user.id);

        const { error: historyError } = await supabase.from('work_history').insert(
          validEntries.map(e => ({
            profile_id: user.id,
            job_title: e.title,
            workplace: e.workplace,
            year_from: e.from,
            year_to: e.to,
          }))
        );

        if (historyError) {
          setSubmitError(historyError.message);
          setSubmitting(false);
          return;
        }
      }

      // Success — go to done screen
      setStep(totalSteps + 1);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  }

  // ---------------------------------------------------------------------------
  // Steps
  // ---------------------------------------------------------------------------

  const Step1 = (
    <div className="step">
      <div className="step-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
      <h2>{t('s1_title')}</h2>
      <p className="step-desc">{t('s1_desc')}</p>
      <div className="option-grid">
        <div
          className={`option-card${role === 'chef' ? ' selected' : ''}`}
          onClick={() => setRole('chef')}
        >
          <div className="opt-icon">👨‍🍳</div>
          <div className="opt-label">{t('role_chef')}</div>
          <div className="opt-desc">{t('role_chef_desc')}</div>
        </div>
        <div
          className={`option-card${role === 'helper' ? ' selected' : ''}`}
          onClick={() => setRole('helper')}
        >
          <div className="opt-icon">🍽️</div>
          <div className="opt-label">{t('role_helper')}</div>
          <div className="opt-desc">{t('role_helper_desc')}</div>
        </div>
        <div
          className={`option-card${role === 'captain' ? ' selected' : ''}`}
          onClick={() => setRole('captain')}
        >
          <div className="opt-icon">🤵</div>
          <div className="opt-label">{t('role_captain')}</div>
          <div className="opt-desc">{t('role_captain_desc')}</div>
        </div>
        <div
          className={`option-card${role === 'other' ? ' selected' : ''}`}
          onClick={() => setRole('other')}
        >
          <div className="opt-icon">💼</div>
          <div className="opt-label">{t('role_other')}</div>
          <div className="opt-desc">{t('role_other_desc')}</div>
        </div>
      </div>
    </div>
  );

  const Step2 = (
    <div className="step">
      <div className="step-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <h2>{t('s2_title')}</h2>
      <p className="step-desc">{t('s2_desc')}</p>
      <div className="field">
        <label>{t('label_name')}</label>
        <input type="text" placeholder={t('placeholder_name')} value={fullName} onChange={e => setFullName(e.target.value)} />
      </div>
      <div className="field">
        <label>{t('label_phone')}</label>
        <input type="tel" placeholder={t('placeholder_phone')} value={phone} onChange={e => setPhone(e.target.value)} />
        <div className="hint">{t('phone_hint')}</div>
      </div>
    </div>
  );

  const Step3 = (
    <div className="step">
      <div className="step-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
      <h2>{t('s3_title')}</h2>
      <p className="step-desc">{t('s3_desc')}</p>
      <div className="photo-upload">
        <label htmlFor="photo-input" style={{ cursor: 'pointer' }}>
          <div className="photo-circle">
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span>{t('tap_to_add')}</span>
              </>
            )}
          </div>
        </label>
        <input
          id="photo-input"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handlePhoto}
        />
      </div>
    </div>
  );

  const Step4 = (
    <div className="step">
      <div className="step-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>
      <h2>{t('s4_title')}</h2>
      <p className="step-desc">{t('s4_desc')}</p>
      <div className="field">
        <label>{t('label_city')}</label>
        <select value={city} onChange={e => setCity(e.target.value)}>
          <option value="">Select your city</option>
          {WORK_CITIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="field">
        <label>{t('label_languages')}</label>
        <div className="chip-selector">
          {LANGUAGE_CHIPS.map(l => (
            <div
              key={l.code}
              className={`chip-option${selectedLangs.includes(l.code) ? ' selected' : ''}`}
              onClick={() => toggleItem(selectedLangs, setSelectedLangs, l.code)}
            >
              {l.code}
              {l.native !== l.code && <span className="lang-native">{l.native}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Step5 = (
    <div className="step">
      <div className="step-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>
      <h2>{t('s5_title')}</h2>
      <p className="step-desc">{t('s5_desc')}</p>
      <div className="field">
        <label>{t('label_experience')}</label>
        <select value={experience} onChange={e => setExperience(e.target.value)}>
          <option value="">Select experience</option>
          {EXPERIENCE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <div className="field">
        <label>{t('label_salary')}</label>
        <div className="salary-display">
          <div className="amount">{formatSalary(salary)}</div>
        </div>
        <input
          type="range"
          className="salary-range"
          min={5000}
          max={100000}
          step={1000}
          value={salary}
          onChange={e => setSalary(Number(e.target.value))}
        />
        <div className="salary-labels">
          <span>{t('salary_min')}</span>
          <span>{t('salary_max')}</span>
        </div>
      </div>
    </div>
  );

  const Step6 = (
    <div className="step">
      <div className="step-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>
      <h2>{t('s6_title')}</h2>
      <p className="step-desc">{t('s6_desc')}</p>
      <div className="chip-selector">
        {CUISINES.map(cuisine => (
          <div
            key={cuisine}
            className={`chip-option${cuisines.includes(cuisine) ? ' selected' : ''}`}
            onClick={() => toggleItem(cuisines, setCuisines, cuisine)}
          >
            {cuisine}
          </div>
        ))}
      </div>
    </div>
  );

  const Step7 = (
    <div className="step">
      <div className="step-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      </div>
      <h2>{t('s7_title')}</h2>
      <p className="step-desc">{t('s7_desc')}</p>
      {expEntries.map((entry, i) => (
        <div key={i} className="exp-entry">
          <div className="field">
            <label>{t('label_job_title')}</label>
            <input
              type="text"
              placeholder={t('placeholder_job_title')}
              value={entry.title}
              onChange={e => updateExpEntry(i, 'title', e.target.value)}
            />
          </div>
          <div className="field">
            <label>{t('label_workplace')}</label>
            <input
              type="text"
              placeholder={t('placeholder_workplace')}
              value={entry.workplace}
              onChange={e => updateExpEntry(i, 'workplace', e.target.value)}
            />
          </div>
          <div className="exp-row">
            <div className="field">
              <label>{t('label_from')}</label>
              <select value={entry.from} onChange={e => updateExpEntry(i, 'from', e.target.value)}>
                <option value="">Year</option>
                {Array.from({ length: 30 }, (_, k) => new Date().getFullYear() - k).map(yr => (
                  <option key={yr} value={String(yr)}>{yr}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>{t('label_to')}</label>
              <select value={entry.to} onChange={e => updateExpEntry(i, 'to', e.target.value)}>
                <option value="">Year / Present</option>
                <option value="Present">Present</option>
                {Array.from({ length: 30 }, (_, k) => new Date().getFullYear() - k).map(yr => (
                  <option key={yr} value={String(yr)}>{yr}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}
      <button className="add-exp-btn" onClick={addExp} type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        {t('add_more_exp')}
      </button>
    </div>
  );

  const Step8 = (
    <div className="step">
      <div className="step-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
      </div>
      <h2>{t('s8_title')}</h2>
      <p className="step-desc">{t('s8_desc')}</p>
      <div className="chip-selector">
        {WORK_CITIES.map(city => (
          <div
            key={city}
            className={`chip-option${cities.includes(city) ? ' selected' : ''}`}
            onClick={() => toggleItem(cities, setCities, city)}
          >
            {city}
          </div>
        ))}
      </div>
    </div>
  );

  const SuccessScreen = (
    <div className="success-screen">
      <div className="success-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h2>{t('success_title')}</h2>
      <p>{t('success_desc')}</p>
      <a href="/" className="btn-next" style={{ display: 'inline-flex', textDecoration: 'none' }}>
        {t('success_btn')}
      </a>
    </div>
  );

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  return (
    <>
      <Navbar />

      {/* Language Bar */}
      <div className="lang-bar">
        <div className="lang-bar-inner">
          <span className="lang-bar-label">{t('lang_label')}</span>
          <div className="lang-options">
            {UI_LANGS.map(l => (
              <button
                key={l.code}
                className={`lang-btn${lang === l.code ? ' active' : ''}`}
                onClick={() => setLang(l.code)}
                type="button"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar — hidden on success */}
      {step <= totalSteps && (
        <div className="progress-wrap">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / totalSteps) * 100}%` }} />
          </div>
          <div className="progress-label">
            <span>Step <strong>{step}</strong> of <strong>{totalSteps}</strong></span>
            <span>{(stepTitles[lang] ?? stepTitles['en'])[step]}</span>
          </div>
        </div>
      )}

      {/* Wizard */}
      <div className="wizard">
        {step === 1 && Step1}
        {step === 2 && Step2}
        {step === 3 && Step3}
        {step === 4 && Step4}
        {step === 5 && Step5}
        {step === 6 && Step6}
        {step === 7 && Step7}
        {step === 8 && Step8}
        {step > totalSteps && SuccessScreen}
      </div>

      {submitError && (
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
          <div className="auth-error">{submitError}</div>
        </div>
      )}

      {/* Bottom Navigation Bar — hidden on success */}
      {step <= totalSteps && (
        <div className="bottom-bar">
          <div className="bottom-inner">
            {step > 1 ? (
              <button className="btn-back" onClick={prevStep} type="button">
                {t('btn_back')}
              </button>
            ) : (
              <span />
            )}
            <button
              className="btn-next"
              onClick={step === totalSteps ? submitProfile : nextStep}
              type="button"
              disabled={submitting}
            >
              {submitting ? 'Saving...' : step === totalSteps ? t('btn_submit') : t('btn_next')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

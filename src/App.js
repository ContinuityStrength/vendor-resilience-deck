import React, { useState, useEffect } from 'react';

// Professional SVG Icons
const Icons = {
  cyber: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  ),
  operational: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  ),
  supply: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  smb: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  ),
  compliance: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>
  ),
  resource: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
    </svg>
  ),
  time: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  cascade: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  ),
  stakeholder: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  fog: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3v2M16 3v2M8 19v2M16 19v2M3 8h2M3 16h2M19 8h2M19 16h2"></path>
      <rect x="6" y="6" width="12" height="12" rx="2"></rect>
    </svg>
  ),
  external: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
  dice: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      <circle cx="8" cy="8" r="1" fill="currentColor"></circle>
      <circle cx="16" cy="8" r="1" fill="currentColor"></circle>
      <circle cx="8" cy="16" r="1" fill="currentColor"></circle>
      <circle cx="16" cy="16" r="1" fill="currentColor"></circle>
    </svg>
  ),
  list: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="8" y1="6" x2="21" y2="6"></line>
      <line x1="8" y1="12" x2="21" y2="12"></line>
      <line x1="8" y1="18" x2="21" y2="18"></line>
      <circle cx="4" cy="6" r="1" fill="currentColor"></circle>
      <circle cx="4" cy="12" r="1" fill="currentColor"></circle>
      <circle cx="4" cy="18" r="1" fill="currentColor"></circle>
    </svg>
  ),
  wildcard: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      <path d="M12 8v8M8 12h8"></path>
    </svg>
  ),
  unlock: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
    </svg>
  ),
  back: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  ),
  play: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  ),
  pause: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  ),
  reset: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="1 4 1 10 7 10"></polyline>
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
    </svg>
  ),
  refresh: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 4 23 10 17 10"></polyline>
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
    </svg>
  ),
  close: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
};

// Demo scenarios (3)
const demoScenarios = [
  {
    id: 1,
    category: 'cyber',
    categoryLabel: 'Vendor Cyber Incident',
    title: 'Payment Processor Ransomware',
    frontDescription: 'Your payment processing vendor reports a ransomware attack. All transactions are offline.',
    details: ['Vendor expects 72-hour minimum outage', '40% of your transactions flow through them', 'Customer support lines overwhelmed', 'Media is reporting the incident'],
    prompts: ['Do we have an alternate payment processor under contract?', 'How do we communicate with customers?', 'What is our financial exposure per hour?', 'Who has authority to activate backup vendors?'],
    realWorldCheck: ['Cyber insurance coverage?', 'Documented incident response plan?', 'Tested recovery procedures?']
  },
  {
    id: 2,
    category: 'smb',
    categoryLabel: 'SMB Vendor Failure',
    title: 'Vendor Owner Hospitalized',
    frontDescription: 'Your critical SMB vendor owner is hospitalized unexpectedly. No succession plan exists. Operations halted.',
    details: ['Owner handled all key relationships', 'No documented processes', 'Staff unsure how to proceed', 'Orders pending delivery this week'],
    prompts: ['Who at the vendor can we work with?', 'Can their staff continue without owner?', 'How quickly can we activate alternates?', 'What support can we provide?'],
    realWorldCheck: ['Which SMB vendors have succession plans?', 'Key person dependencies?', 'Whether vendor processes are documented?']
  },
  {
    id: 3,
    category: 'compliance',
    categoryLabel: 'Regulatory/Compliance',
    title: 'Vendor Fails DORA Audit',
    frontDescription: 'Your critical vendor cannot provide required operational resilience documentation. Regulators are asking.',
    details: ['Vendor has no documented BCP or IRP', 'Regulator wants evidence in 5 business days', 'Vendor serves 25% of customer base', 'Switching vendors takes 6+ months'],
    prompts: ['Can we help vendor create documentation?', 'What evidence can we provide regulators?', 'Do we accept risk or begin transition?', 'How do we prevent this with other vendors?'],
    realWorldCheck: ['Which vendors have audit-ready documentation?', 'Gaps in your vendor resilience evidence?', 'Remediation timelines for non-compliant vendors?']
  }
];

// Full scenarios would go here - abbreviated for file size
const fullScenarios = [...demoScenarios];

// Demo wild cards (6)
const demoWildCards = [
  { id: 1, category: 'resource', categoryLabel: 'Resource Loss', title: 'Key Decision Maker Unavailable', description: 'Your BC lead is unreachable for the next 2 hours.', consider: ['Who has backup authority?', 'What decisions can wait?', 'Are delegation protocols documented?'] },
  { id: 2, category: 'time', categoryLabel: 'Time Pressure', title: 'Media Inquiry Incoming', description: 'A journalist is calling in 30 minutes asking about this vendor disruption.', consider: ['What do you say?', 'What do you hold back?', 'Who speaks to media?'] },
  { id: 3, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Second Vendor Also Impacted', description: 'A second vendor uses the same sub-supplier. They are also disrupted.', consider: ['How did you miss this?', 'What is your third option?', 'How do you prioritize?'] },
  { id: 4, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Customer Panic Spiral', description: 'Your three largest customers threaten to leave. They want proof of recovery in 24 hours.', consider: ['What evidence can you provide?', 'What promises are realistic?', 'Who communicates with them?'] },
  { id: 5, category: 'fog', categoryLabel: 'Information Fog', title: 'Conflicting Information', description: 'Vendor says 6 hours. Their support says 3 days. Social media says weeks.', consider: ['How do you decide with bad info?', 'What is your planning assumption?', 'How do you verify?'] },
  { id: 6, category: 'external', categoryLabel: 'External Shock', title: 'Concurrent Internal Crisis', description: 'While managing this vendor failure, your own facility experiences an unrelated incident.', consider: ['How do you split resources?', 'Which crisis takes priority?', 'Who leads each response?'] }
];

const fullWildCards = [...demoWildCards];

const wildCardCategories = [
  { id: 'resource', label: 'Resource Loss', icon: 'resource' },
  { id: 'time', label: 'Time Pressure', icon: 'time' },
  { id: 'cascade', label: 'Cascading Failures', icon: 'cascade' },
  { id: 'stakeholder', label: 'Stakeholder Complications', icon: 'stakeholder' },
  { id: 'fog', label: 'Information Fog', icon: 'fog' },
  { id: 'external', label: 'External Shocks', icon: 'external' }
];

const scenarioCategories = [
  { id: 'cyber', label: 'Vendor Cyber Incidents', icon: 'cyber', range: '1-10' },
  { id: 'operational', label: 'Vendor Operational Failures', icon: 'operational', range: '11-20' },
  { id: 'supply', label: 'Supply Chain Disruptions', icon: 'supply', range: '21-30' },
  { id: 'smb', label: 'SMB-Specific Challenges', icon: 'smb', range: '31-40' },
  { id: 'compliance', label: 'Regulatory/Compliance', icon: 'compliance', range: '41-50' }
];

const getCategoryIcon = (category) => {
  const IconComponent = Icons[category];
  return IconComponent ? <IconComponent /> : null;
};

export default function VendorResilienceDeck() {
  const [hasAccess, setHasAccess] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [accessError, setAccessError] = useState('');
  const [currentView, setCurrentView] = useState('main');
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentWildCard, setCurrentWildCard] = useState(null);
  const [selectedWildCategory, setSelectedWildCategory] = useState(null);
  const [showWildCardSelector, setShowWildCardSelector] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(15);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerInput, setTimerInput] = useState('15');

  const availableScenarios = hasAccess ? fullScenarios : demoScenarios;
  const availableWildCards = hasAccess ? fullWildCards : demoWildCards;

  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        if (timerSeconds > 0) {
          setTimerSeconds(timerSeconds - 1);
        } else if (timerMinutes > 0) {
          setTimerMinutes(timerMinutes - 1);
          setTimerSeconds(59);
        } else {
          setTimerRunning(false);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerMinutes, timerSeconds]);

  const validateAccessCode = () => {
    if (accessCode.toUpperCase().startsWith('CS-DECK-') && accessCode.length >= 12) {
      setHasAccess(true);
      setAccessError('');
      setCurrentView('main');
    } else {
      setAccessError('Invalid access code. Please check and try again.');
    }
  };

  const drawRandomScenario = () => {
    const randomIndex = Math.floor(Math.random() * availableScenarios.length);
    setSelectedScenario(availableScenarios[randomIndex]);
    setIsFlipped(false);
    setCurrentWildCard(null);
    setCurrentView('scenario');
  };

  const selectScenario = (scenario) => {
    setSelectedScenario(scenario);
    setIsFlipped(false);
    setCurrentWildCard(null);
    setCurrentView('scenario');
  };

  const drawWildCard = (categoryId) => {
    const categoryCards = availableWildCards.filter(card => card.category === categoryId);
    const randomIndex = Math.floor(Math.random() * categoryCards.length);
    setCurrentWildCard(categoryCards[randomIndex]);
    setSelectedWildCategory(categoryId);
    setShowWildCardSelector(false);
  };

  const startTimer = () => {
    const mins = parseInt(timerInput) || 15;
    setTimerMinutes(mins);
    setTimerSeconds(0);
    setTimerRunning(true);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    const mins = parseInt(timerInput) || 15;
    setTimerMinutes(mins);
    setTimerSeconds(0);
  };

  const clearWildCard = () => {
    setCurrentWildCard(null);
    setSelectedWildCategory(null);
  };

  const renderHeader = () => (
    <div style={{ backgroundColor: '#fff', padding: '12px 24px', borderBottom: '3px solid #e86c3a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src="https://continuitystrength.com/s/CS-Logo_Cropped-and-Transparent.png" alt="Continuity Strength" style={{ height: '40px' }} />
      <div style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>Vendor Resilience Exercise Deck</div>
    </div>
  );

  const renderMain = () => (
    <div style={{ padding: '32px 24px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '8px', color: '#333', fontSize: '28px' }}>Vendor Resilience Exercise Deck</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '32px', fontSize: '15px' }}>Test your team's response to vendor failures. Identify gaps before crises hit.</p>
      
      {!hasAccess && (
        <div style={{ backgroundColor: '#fff8f6', padding: '16px', borderRadius: '8px', marginBottom: '24px', border: '1px solid #e86c3a' }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#e86c3a', fontSize: '14px' }}>Demo Mode: 3 scenarios + 6 wild cards</p>
          <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>Get the full deck with 50 scenarios + 48 wild cards. <a href="http://continuitystrength.com/buycards" style={{ color: '#e86c3a', fontWeight: '500' }}>Purchase now →</a></p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button onClick={drawRandomScenario} style={{ padding: '16px 24px', fontSize: '15px', backgroundColor: '#e86c3a', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <Icons.dice /> Draw Random Scenario
        </button>
        <button onClick={() => setCurrentView('guide')} style={{ padding: '16px 24px', fontSize: '15px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <Icons.list /> Browse Scenarios & Select
        </button>
        {!hasAccess && (
          <button onClick={() => setCurrentView('access')} style={{ padding: '16px 24px', fontSize: '15px', backgroundColor: '#fff', color: '#e86c3a', border: '2px solid #e86c3a', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Icons.unlock /> Enter Access Code
          </button>
        )}
      </div>
      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <a href="http://continuitystrength.com/buycards" style={{ color: '#e86c3a', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Get the full deck: 50 scenarios + 48 wild cards →</a>
      </div>
    </div>
  );

  const renderScenario = () => {
    if (!selectedScenario) return null;
    return (
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '16px' }}>
          <button onClick={() => { setCurrentView('main'); setCurrentWildCard(null); }} style={{ padding: '8px 16px', backgroundColor: 'transparent', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#666' }}>
            <Icons.back /> Back to Deck
          </button>
        </div>

        <div style={{ marginBottom: '20px', padding: '12px 16px', backgroundColor: '#f8f8f8', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: '600', fontSize: '14px', color: '#333' }}>Timer:</span>
          <input type="number" value={timerInput} onChange={(e) => setTimerInput(e.target.value)} style={{ width: '50px', padding: '6px 8px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }} min="1" max="60" />
          <span style={{ fontSize: '14px', color: '#666' }}>min</span>
          <button onClick={timerRunning ? () => setTimerRunning(false) : startTimer} style={{ padding: '6px 12px', backgroundColor: timerRunning ? '#666' : '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
            {timerRunning ? <><Icons.pause /> Pause</> : <><Icons.play /> Start</>}
          </button>
          <button onClick={resetTimer} style={{ padding: '6px 12px', backgroundColor: '#f5f5f5', color: '#666', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
            <Icons.reset /> Reset
          </button>
          <span style={{ fontWeight: '700', fontSize: '20px', color: timerMinutes === 0 && timerSeconds < 60 ? '#f44336' : '#333', marginLeft: 'auto' }}>
            {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: currentWildCard ? '0 0 calc(50% - 12px)' : '0 0 100%', maxWidth: '500px', minWidth: '300px', transition: 'all 0.3s ease' }}>
            <div onClick={() => setIsFlipped(!isFlipped)} style={{ perspective: '1000px', cursor: 'pointer' }}>
              <div style={{ position: 'relative', width: '100%', minHeight: '450px', transition: 'transform 0.6s', transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                <div style={{ position: 'absolute', width: '100%', minHeight: '450px', backfaceVisibility: 'hidden', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', padding: '24px', display: 'flex', flexDirection: 'column', border: '1px solid #eee' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <img src="https://continuitystrength.com/s/CS-FAvicon-minimized.jpg" alt="CS" style={{ width: '32px', height: '32px', borderRadius: '4px' }} />
                    <span style={{ fontSize: '12px', color: '#666', display: 'flex', alignItems: 'center', gap: '6px' }}>{getCategoryIcon(selectedScenario.category)} {selectedScenario.categoryLabel}</span>
                  </div>
                  <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#e86c3a', fontWeight: '700' }}>{selectedScenario.title}</h2>
                  <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#444', flexGrow: 1 }}>{selectedScenario.frontDescription}</p>
                  <div style={{ textAlign: 'center', marginTop: '24px', color: '#999', fontSize: '13px' }}>Click card to flip →</div>
                  <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '10px', color: '#bbb' }}>© Continuity Strength 2025</div>
                </div>
                <div style={{ position: 'absolute', width: '100%', minHeight: '450px', backfaceVisibility: 'hidden', backgroundColor: '#fafafa', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', padding: '24px', transform: 'rotateY(180deg)', overflow: 'auto', border: '1px solid #eee' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <img src="https://continuitystrength.com/s/CS-FAvicon-minimized.jpg" alt="CS" style={{ width: '32px', height: '32px', borderRadius: '4px' }} />
                  </div>
                  <h3 style={{ fontSize: '13px', color: '#e86c3a', marginBottom: '8px', fontWeight: '700' }}>SCENARIO DETAILS</h3>
                  <ul style={{ margin: '0 0 16px 0', paddingLeft: '18px', fontSize: '13px', color: '#444' }}>
                    {selectedScenario.details.map((detail, i) => <li key={i} style={{ marginBottom: '4px', lineHeight: '1.5' }}>{detail}</li>)}
                  </ul>
                  <h3 style={{ fontSize: '13px', color: '#e86c3a', marginBottom: '8px', fontWeight: '700' }}>DISCUSSION PROMPTS</h3>
                  <ul style={{ margin: '0 0 16px 0', paddingLeft: '18px', fontSize: '13px', color: '#444' }}>
                    {selectedScenario.prompts.map((prompt, i) => <li key={i} style={{ marginBottom: '4px', lineHeight: '1.5' }}>{prompt}</li>)}
                  </ul>
                  <h3 style={{ fontSize: '13px', color: '#e86c3a', marginBottom: '8px', fontWeight: '700' }}>REAL-WORLD CHECK</h3>
                  <ul style={{ margin: '0 0 16px 0', paddingLeft: '18px', fontSize: '13px', color: '#444' }}>
                    {selectedScenario.realWorldCheck.map((check, i) => <li key={i} style={{ marginBottom: '4px', lineHeight: '1.5' }}>{check}</li>)}
                  </ul>
                  <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '10px', color: '#bbb' }}>© Continuity Strength 2025</div>
                </div>
              </div>
            </div>
          </div>

          {currentWildCard && (
            <div style={{ flex: '0 0 calc(50% - 12px)', maxWidth: '500px', minWidth: '300px' }}>
              <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', padding: '24px', minHeight: '450px', display: 'flex', flexDirection: 'column', border: '2px solid #333' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <img src="https://continuitystrength.com/s/CS-FAvicon-minimized.jpg" alt="CS" style={{ width: '32px', height: '32px', borderRadius: '4px' }} />
                  <span style={{ fontSize: '11px', padding: '4px 10px', backgroundColor: '#333', color: '#fff', borderRadius: '4px', fontWeight: '600' }}>WILD CARD</span>
                </div>
                <div style={{ marginBottom: '12px', color: '#666' }}>{getCategoryIcon(currentWildCard.category)}</div>
                <h2 style={{ fontSize: '20px', marginBottom: '16px', color: '#333', fontWeight: '700' }}>{currentWildCard.title}</h2>
                <p style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '24px', color: '#444', flexGrow: 1 }}>{currentWildCard.description}</p>
                <h3 style={{ fontSize: '13px', color: '#666', marginBottom: '8px', fontWeight: '700' }}>CONSIDER:</h3>
                <ul style={{ margin: '0 0 20px 0', paddingLeft: '18px', fontSize: '13px', color: '#444' }}>
                  {currentWildCard.consider.map((item, i) => <li key={i} style={{ marginBottom: '4px', lineHeight: '1.5' }}>{item}</li>)}
                </ul>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => drawWildCard(selectedWildCategory)} style={{ flex: 1, padding: '10px 16px', backgroundColor: '#f5f5f5', color: '#333', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <Icons.refresh /> Draw Another
                  </button>
                  <button onClick={clearWildCard} style={{ padding: '10px 16px', backgroundColor: '#fff', color: '#666', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>
                    <Icons.close />
                  </button>
                </div>
                <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '10px', color: '#bbb' }}>© Continuity Strength 2025</div>
              </div>
            </div>
          )}
        </div>

        {!currentWildCard && !showWildCardSelector && (
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <button onClick={() => setShowWildCardSelector(true)} style={{ padding: '12px 24px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Icons.wildcard /> Add Wild Card Challenge
            </button>
          </div>
        )}

        {showWildCardSelector && !currentWildCard && (
          <div style={{ marginTop: '24px', padding: '20px', backgroundColor: '#f8f8f8', borderRadius: '12px', maxWidth: '500px', margin: '24px auto 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Select Wild Card Category</h3>
              <button onClick={() => setShowWildCardSelector(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}><Icons.close /></button>
            </div>
            <div style={{ display: 'grid', gap: '8px' }}>
              {wildCardCategories.map(cat => (
                <button key={cat.id} onClick={() => drawWildCard(cat.id)} style={{ padding: '12px 16px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#666' }}>{getCategoryIcon(cat.icon)}</span> {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderGuide = () => (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
      <button onClick={() => setCurrentView('main')} style={{ marginBottom: '20px', padding: '8px 16px', backgroundColor: 'transparent', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#666' }}>
        <Icons.back /> Back to Deck
      </button>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <img src="https://continuitystrength.com/s/CS-Logo_Cropped-and-Transparent.png" alt="Continuity Strength" style={{ height: '32px', marginBottom: '16px' }} />
        <h2 style={{ margin: '0 0 8px 0', fontSize: '24px' }}>Scenario Index</h2>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Click any scenario to begin exercise</p>
      </div>
      {scenarioCategories.map(category => {
        const categoryScenarios = availableScenarios.filter(s => s.category === category.id);
        if (categoryScenarios.length === 0) return null;
        return (
          <div key={category.id} style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '15px', color: '#e86c3a', marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700' }}>
              {getCategoryIcon(category.icon)} {category.label}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {categoryScenarios.map(scenario => (
                <button key={scenario.id} onClick={() => selectScenario(scenario)} style={{ padding: '12px 16px', backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#bbb', fontSize: '12px', minWidth: '28px', fontWeight: '500' }}>#{scenario.id}</span> {scenario.title}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderAccessEntry = () => (
    <div style={{ padding: '32px 24px', maxWidth: '400px', margin: '0 auto' }}>
      <button onClick={() => setCurrentView('main')} style={{ marginBottom: '24px', padding: '8px 16px', backgroundColor: 'transparent', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#666' }}>
        <Icons.back /> Back
      </button>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <img src="https://continuitystrength.com/s/CS-Logo_Cropped-and-Transparent.png" alt="Continuity Strength" style={{ height: '32px', marginBottom: '16px' }} />
        <h2 style={{ margin: '0 0 8px 0', fontSize: '24px' }}>Enter Access Code</h2>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Unlock the full deck with 50 scenarios and 48 wild cards.</p>
      </div>
      <input type="text" value={accessCode} onChange={(e) => setAccessCode(e.target.value.toUpperCase())} placeholder="CS-DECK-XXXX" style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2px solid #ddd', borderRadius: '8px', marginBottom: '16px', textAlign: 'center', letterSpacing: '2px', boxSizing: 'border-box' }} />
      {accessError && <p style={{ color: '#f44336', textAlign: 'center', marginBottom: '16px', fontSize: '14px' }}>{accessError}</p>}
      <button onClick={validateAccessCode} style={{ width: '100%', padding: '14px 24px', fontSize: '15px', backgroundColor: '#e86c3a', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Unlock Full Deck</button>
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <p style={{ color: '#666', marginBottom: '8px', fontSize: '14px' }}>Don't have an access code?</p>
        <a href="http://continuitystrength.com/buycards" style={{ color: '#e86c3a', fontWeight: '600', fontSize: '14px' }}>Purchase the full deck →</a>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafafa', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {renderHeader()}
      {currentView === 'main' && renderMain()}
      {currentView === 'scenario' && renderScenario()}
      {currentView === 'guide' && renderGuide()}
      {currentView === 'access' && renderAccessEntry()}
    </div>
  );
}

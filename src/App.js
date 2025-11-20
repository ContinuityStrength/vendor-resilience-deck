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

// Lead gen messages by category
const leadGenMessages = {
  cyber: "Continuity Strength helps organizations quickly assess and monitor vendor cyber resilience.",
  operational: "Continuity Strength helps organizations quickly build operational resilience into vendor relationships.",
  supply: "Continuity Strength helps organizations quickly map and mitigate supply chain concentration risks.",
  smb: "Continuity Strength helps organizations quickly assess, embed and manage resilience risk across their SMB vendors.",
  compliance: "Continuity Strength helps organizations quickly produce regulatory evidence across their third-party portfolio."
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

// ALL 50 SCENARIOS - Continue adding from where demo left off
const fullScenarios = [
  ...demoScenarios,
  // Cyber scenarios 4-10
  { id: 4, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Cloud Provider Outage', frontDescription: 'Your SaaS vendor\'s cloud infrastructure is down. No ETA for recovery.', details: ['All customer data inaccessible', 'Vendor blame shifting to AWS/Azure', 'Support overwhelmed with calls', 'Alternative access methods don\'t exist'], prompts: ['Do we have data backups?', 'Can we switch to competitor?', 'What processes are blocked?', 'How do we communicate internally?'], realWorldCheck: ['Vendor SLA terms?', 'Data portability clauses?', 'Alternative vendor pre-qualified?'] },
  { id: 5, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Vendor Data Breach', frontDescription: 'Your vendor reports customer data breach. Your data included.', details: ['Breach discovered 6 months ago', 'Customer PII exposed', 'Notification obligations triggered', 'Class action likely'], prompts: ['What data was exposed?', 'When must we notify customers?', 'What\'s our legal liability?', 'How do we support affected customers?'], realWorldCheck: ['Breach notification procedures?', 'Cyber liability insurance?', 'PR crisis plan?'] },
  { id: 6, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Supply Chain Malware', frontDescription: 'Malware found in vendor software update. Deployed to your systems.', details: ['Update pushed 2 weeks ago', 'Unknown what data was accessed', 'Vendor investigating source', 'Other customers also affected'], prompts: ['What systems got the update?', 'Do we rollback or quarantine?', 'What data could be compromised?', 'How do we assess damage?'], realWorldCheck: ['Software deployment controls?', 'Vendor security attestations?', 'Incident response capabilities?'] },
  { id: 7, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Vendor Insider Threat', frontDescription: 'Vendor employee arrested for data theft. Your data may be compromised.', details: ['Employee had broad access', 'Unclear what was taken', 'Criminal investigation ongoing', 'Media coverage expected'], prompts: ['What access did they have?', 'How do we assess exposure?', 'Must we notify customers?', 'What monitoring do we add?'], realWorldCheck: ['Vendor background check requirements?', 'Access logging and monitoring?', 'Incident notification SLAs?'] },
  { id: 8, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'DDoS Attack on Vendor', frontDescription: 'Massive DDoS attack takes vendor offline. Could last days.', details: ['Vendor has no DDoS protection', 'Attack specifically targeting them', 'They can\'t afford mitigation service', 'Business continuity not addressed'], prompts: ['Can we help fund mitigation?', 'Do we have offline workarounds?', 'What\'s our backup plan?', 'How long can we wait?'], realWorldCheck: ['Vendor DDoS protection requirements?', 'Alternative access methods?', 'Business continuity terms in contract?'] },
  { id: 9, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Credential Stuffing Success', frontDescription: 'Attackers accessed vendor systems using leaked credentials from another breach.', details: ['Vendor reused passwords', 'Multiple accounts compromised', 'MFA not enforced', 'Unclear what was accessed'], prompts: ['What accounts were compromised?', 'What data could be accessed?', 'How do we secure our connection?', 'What controls should they have had?'], realWorldCheck: ['Vendor security baseline requirements?', 'MFA enforcement policies?', 'Right to audit security controls?'] },
  { id: 10, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Vendor Certificate Expiration', frontDescription: 'Vendor SSL certificate expired. All integrations failing.', details: ['Issue went unnoticed by vendor', 'Will take 48 hours to resolve', 'Your production systems affected', 'Support says "not a priority"'], prompts: ['Can we help expedite renewal?', 'Do we have workarounds?', 'What processes are blocked?', 'How do we prevent this?'], realWorldCheck: ['Vendor operational monitoring requirements?', 'SLA penalty clauses?', 'Certificate management oversight?'] },
  
  // Operational scenarios 11-20
  { id: 11, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Warehouse Fire', frontDescription: 'Fire destroys vendor warehouse. All your inventory lost.', details: ['Insurance claim will take months', 'Vendor exploring alternative space', 'Your Q4 inventory destroyed', 'Other customers also affected'], prompts: ['Can we expedite production?', 'What\'s insurance recovery timeline?', 'Do we have other inventory sources?', 'How do we handle customer orders?'], realWorldCheck: ['Business interruption insurance?', 'Inventory diversification strategy?', 'Alternative storage arrangements?'] },
  { id: 12, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Key Personnel Exodus', frontDescription: 'Vendor loses entire engineering team to competitor.', details: ['No knowledge transfer occurred', 'Remaining staff can\'t support', 'Your projects in mid-development', 'Vendor hiring but takes months'], prompts: ['Can we help retain/hire staff?', 'What knowledge is lost?', 'Do we move projects elsewhere?', 'What\'s transition timeline?'], realWorldCheck: ['Key person risk clauses?', 'Knowledge management requirements?', 'Transition assistance terms?'] },
  { id: 13, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Quality Control Failure', frontDescription: 'Major quality issue detected in vendor deliverables. Recall required.', details: ['Issue affects 6 months of production', 'Root cause still unknown', 'Customer safety potentially at risk', 'Regulatory notification required'], prompts: ['What products are affected?', 'Do we recall or quarantine?', 'What caused the failure?', 'How do we manage customer impact?'], realWorldCheck: ['Quality assurance programs?', 'Recall insurance coverage?', 'Customer notification procedures?'] },
  { id: 14, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Utility Outage', frontDescription: 'Extended power outage at vendor facility. No backup generation.', details: ['Outage expected 5-7 days', 'Work in progress ruined', 'Vendor has no alternate site', 'Your critical delivery affected'], prompts: ['Can we relocate production?', 'What work can be salvaged?', 'Do we help fund generators?', 'What\'s our backup plan?'], realWorldCheck: ['Vendor business continuity requirements?', 'Alternative production sites?', 'Force majeure clauses?'] },
  { id: 15, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Equipment Failure', frontDescription: 'Critical equipment fails at vendor. Replacement takes 12 weeks.', details: ['Only equipment of its kind', 'Cannot source alternate', 'Repair not possible', 'You are sole customer'], prompts: ['Can we source equipment?', 'Can we move to another vendor?', 'What about refurbished equipment?', 'Do we redesign to avoid this?'], realWorldCheck: ['Equipment redundancy requirements?', 'Maintenance schedule oversight?', 'Alternative process capability?'] },
  { id: 16, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Labor Strike', frontDescription: 'Vendor workforce goes on strike. Picket lines prevent deliveries.', details: ['Union demands substantial', 'No end in sight', 'Other vendors also struck', 'Your inventory running low'], prompts: ['Can we cross picket lines?', 'What are alternative sources?', 'Do we reduce usage?', 'How long can we wait?'], realWorldCheck: ['Labor relations monitoring?', 'Strike contingency plans?', 'Multi-sourcing strategy?'] },
  { id: 17, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Contamination Event', frontDescription: 'Contamination discovered in vendor facility. All production halted.', details: ['Health department investigating', 'Timeline for clearance unknown', 'Existing inventory quarantined', 'You need product in 2 weeks'], prompts: ['Can we salvage any product?', 'What caused contamination?', 'Where else can we source?', 'Do we notify our customers?'], realWorldCheck: ['Vendor facility audit requirements?', 'Contamination insurance?', 'Alternative supplier qualification?'] },
  { id: 18, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Transportation Breakdown', frontDescription: 'Vendor loses all transportation contracts. Cannot ship.', details: ['All carriers dropped them', 'Credit terms dispute', 'Your orders ready but stuck', 'Other customers also affected'], prompts: ['Can we arrange transport?', 'Can we pick up ourselves?', 'What\'s the hold up?', 'Do we advance payment?'], realWorldCheck: ['Shipping responsibility clauses?', 'Incoterms understanding?', 'Logistics backup planning?'] },
  { id: 19, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Regulatory Shutdown', frontDescription: 'Regulatory agency shuts down vendor operations.', details: ['Safety violations cited', 'Immediate cease operations', 'Appeals process takes months', 'You have no alternative'], prompts: ['Can we help them remediate?', 'Is there an appeal?', 'Can we move production?', 'What\'s our legal position?'], realWorldCheck: ['Vendor compliance monitoring?', 'Regulatory liaison capability?', 'Contingency authorizations?'] },
  { id: 20, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Cyber-Physical Attack', frontDescription: 'Vendor industrial control systems hacked. Production disrupted.', details: ['Safety systems compromised', 'Physical damage to equipment', 'Unknown how they got in', 'Recovery timeline unclear'], prompts: ['Is our data safe?', 'Can they recover safely?', 'What\'s the root cause?', 'Do we need forensics?'], realWorldCheck: ['OT security requirements?', 'Cyber-physical risk assessments?', 'Safety system oversight?'] },
  
  // Supply Chain scenarios 21-30
  { id: 21, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Port Congestion', frontDescription: 'Your imports stuck at port. 6-week backlog.', details: ['All major ports affected', 'Demurrage charges mounting', 'Vendor can\'t expedite', 'Inventory critically low'], prompts: ['Can we air freight?', 'What\'s the cost tradeoff?', 'Can we use different ports?', 'How do we prioritize shipments?'], realWorldCheck: ['Supply chain visibility?', 'Alternative routing options?', 'Inventory buffer policies?'] },
  { id: 22, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Raw Material Shortage', frontDescription: 'Critical raw material unavailable. Vendor has 2 weeks inventory.', details: ['Global shortage developing', 'Prices skyrocketing', 'Substitutes don\'t exist', 'All vendors affected'], prompts: ['Can we buy material directly?', 'Can we reformulate?', 'What about strategic reserve?', 'Do we allocate to key customers?'], realWorldCheck: ['Material sourcing diversity?', 'Reformulation capabilities?', 'Strategic stockpile policies?'] },
  { id: 23, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Sole Source Failure', frontDescription: 'Your sole-source sub-supplier goes bankrupt.', details: ['No alternative exists', 'Tooling/IP in bankruptcy', 'Creditors seizing assets', 'Product redesign takes 9 months'], prompts: ['Can we buy them out?', 'Can we recover tooling?', 'What\'s expedited redesign cost?', 'Do we start now or wait?'], realWorldCheck: ['Sole source risk assessment?', 'IP/tooling protection?', 'Redesign contingency plans?'] },
  { id: 24, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Geographic Concentration', frontDescription: 'Disaster hits region where 80% of suppliers located.', details: ['Earthquake/flood/typhoon', 'All suppliers affected', 'Infrastructure destroyed', 'Recovery measured in months'], prompts: ['What production can continue?', 'Where else can we source?', 'Can we redesign around this?', 'How do we support suppliers?'], realWorldCheck: ['Geographic risk mapping?', 'Supplier diversification strategy?', 'Disaster recovery funding?'] },
  { id: 25, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Trade Embargo', frontDescription: 'Sudden embargo on country where key suppliers operate.', details: ['Effective immediately', 'No grandfather clause', 'Legal penalties for violations', 'Alternatives will take 6+ months'], prompts: ['What\'s legally permitted?', 'Can we relocate production?', 'What about existing orders?', 'How do we communicate?'], realWorldCheck: ['Geopolitical risk monitoring?', 'Trade compliance expertise?', 'Supply chain resilience planning?'] },
  { id: 26, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Logistics Provider Bankruptcy', frontDescription: 'Your primary freight forwarder files bankruptcy. Your goods in transit.', details: ['Shipments held as assets', 'Cannot release without payment', 'Timeline for resolution unclear', 'You own the goods but can\'t get them'], prompts: ['How do we recover goods?', 'What\'s legal process?', 'Can we use other forwarders?', 'What\'s financial exposure?'], realWorldCheck: ['Logistics provider financial monitoring?', 'Cargo insurance coverage?', 'Alternative logistics relationships?'] },
  { id: 27, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Customs Seizure', frontDescription: 'Customs seizes your shipment. Compliance investigation underway.', details: ['Classification dispute', 'Potential duty violations', 'Shipment held indefinitely', 'Other shipments at risk'], prompts: ['What\'s the issue?', 'How do we resolve?', 'Can we reclassify?', 'What about other shipments?'], realWorldCheck: ['Customs compliance programs?', 'Classification accuracy?', 'Customs broker quality?'] },
  { id: 28, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Currency Crisis', frontDescription: 'Vendor country currency collapses. Pricing in chaos.', details: ['100%+ inflation overnight', 'Vendor demanding USD payment', 'Banks limiting transfers', 'Contract pricing obsolete'], prompts: ['How do we price fairly?', 'Can we pay in USD?', 'What about existing POs?', 'Do we advance payment?'], realWorldCheck: ['Currency risk management?', 'Payment term flexibility?', 'Alternative supplier in stable region?'] },
  { id: 29, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Tier-N Surprise', frontDescription: 'Discover critical sub-sub-supplier you didn\'t know about is failing.', details: ['Your vendor didn\'t disclose', 'No alternative source', 'Affects multiple products', 'Found out from media'], prompts: ['What else don\'t we know?', 'How do we map the chain?', 'Can we work directly with them?', 'What\'s our leverage?'], realWorldCheck: ['N-tier visibility requirements?', 'Supply chain mapping?', 'Critical node identification?'] },
  { id: 30, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Cold Chain Failure', frontDescription: 'Temperature-controlled shipment compromised. Product unusable.', details: ['Refrigeration failed in transit', 'Full shipment of perishables', 'Insurance claim disputed', 'No inventory backup'], prompts: ['Can any product be saved?', 'What about insurance?', 'How do we expedite replacement?', 'Can we air freight?'], realWorldCheck: ['Cold chain monitoring?', 'Temperature excursion protocols?', 'Insurance terms understanding?'] },
  
  // SMB scenarios 31-40
  { id: 31, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Key Person Hospitalization', frontDescription: 'Your SMB supplier\'s only trained operator is hospitalized.', details: ['Specialized skill required', 'Other staff can\'t operate', 'Owner doesn\'t know the process', 'Recovery timeline unknown'], prompts: ['Is there backup person?', 'Can we send someone to train?', 'Can we wait for recovery?', 'What about hiring temp?'], realWorldCheck: ['Supplier key person risk?', 'Cross-training requirements?', 'Business continuity plans?'] },
  { id: 32, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'SMB Cash Flow Crisis', frontDescription: 'Your SMB supplier can\'t make payroll. Production may halt tomorrow.', details: ['Bank refused credit line renewal', 'They\'re 3 weeks from delivery', 'No completed inventory to ship', 'Total exposure: $400K'], prompts: ['Can we prepay to keep them running?', 'Should we acquire them?', 'Can we take over production?', 'How do we secure our tooling?'], realWorldCheck: ['Supplier financial monitoring?', 'Prepayment risk policies?', 'Asset protection clauses?'] },
  { id: 33, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Family Business Succession', frontDescription: 'Your longtime supplier\'s children refuse to take over the business.', details: ['Owner retiring in 6 months', 'No plan to sell the business', 'Specialized capability hard to find', 'They produce 30% of your volume'], prompts: ['Can we help find a buyer?', 'Should we acquire them?', 'Can we transfer knowledge elsewhere?', 'How long to qualify alternatives?'], realWorldCheck: ['Supplier succession planning?', 'Transition support offers?', 'M&A capability?'] },
  { id: 34, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Natural Disaster Recovery', frontDescription: 'Your SMB supplier\'s facility destroyed by tornado. No insurance for equipment.', details: ['Total loss of specialized machinery', 'Equipment lead time is 9 months', 'They can\'t afford replacement', 'Only source for this component'], prompts: ['Can we fund their recovery?', 'Can we source equipment faster?', 'Do we have any usable inventory?', 'Can we redesign around this part?'], realWorldCheck: ['Supplier insurance requirements?', 'Emergency funding mechanisms?', 'Component redesign capability?'] },
  { id: 35, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Retirement Without Exit', frontDescription: 'Your SMB vendor announces retirement, closing in 90 days.', details: ['Specialized tooling you own is there', 'Recipes and processes undocumented', 'They refuse to sell business', 'Alternative vendors need 6+ months'], prompts: ['Can we extend their timeline?', 'How do we get our tooling?', 'Can we hire their employees?', 'What documentation can we get?'], realWorldCheck: ['Tooling ownership and access?', 'Process documentation requirements?', 'Non-compete/non-solicit terms?'] },
  { id: 36, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Cyber Attack on Unprotected SMB', frontDescription: 'Your SMB supplier has ransomware. No backups. Your data at risk.', details: ['They stored your CAD files', 'No IT staff or security tools', 'Can\'t afford ransom demand', 'Don\'t know what data was taken'], prompts: ['What data did they have?', 'Can we help with recovery?', 'How do we assess our exposure?', 'Should we notify our customers?'], realWorldCheck: ['Vendor security requirements?', 'Data handling agreements?', 'Cyber liability coverage?'] },
  { id: 37, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Immigration Enforcement', frontDescription: 'Immigration raid removes 60% of your SMB supplier\'s workforce.', details: ['Production halted immediately', 'Owner also detained', 'Community tensions high', 'Media covering story'], prompts: ['What\'s our public statement?', 'Can remaining staff run operations?', 'How long can we wait?', 'What\'s our backup plan?'], realWorldCheck: ['Supplier labor compliance audits?', 'Reputational risk management?', 'Alternative supplier readiness?'] },
  { id: 38, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Bank Loan Called', frontDescription: 'Your SMB supplier\'s bank calls loan due. Assets to be liquidated.', details: ['All inventory is collateral', 'Includes your work in progress', 'Liquidator won\'t negotiate', 'Timeline: 30 days'], prompts: ['Can we buy out the loan?', 'Can we purchase from liquidator?', 'How do we protect our IP/tooling?', 'What legal options do we have?'], realWorldCheck: ['Security interests in assets?', 'Supplier financial covenants?', 'Legal recourse for WIP?'] },
  { id: 39, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Divorce Disrupts Business', frontDescription: 'Your supplier\'s divorce is splitting ownership and halting decisions.', details: ['Both spouses need to sign orders', 'They won\'t communicate', 'Court proceedings ongoing', 'Business operations in limbo'], prompts: ['Can we get both parties to agree?', 'What decisions are blocked?', 'Can we help them separate business?', 'How do we protect our interests?'], realWorldCheck: ['Supplier governance structure?', 'Contract authority clauses?', 'Legal standby support?'] },
  { id: 40, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Death of Owner', frontDescription: 'Your SMB supplier\'s owner dies suddenly. Estate in probate.', details: ['No designated successor', 'Staff unsure what to do', 'Bank accounts frozen', 'Outstanding orders pending'], prompts: ['Who can authorize shipments?', 'Can we help staff continue?', 'How do we work with estate?', 'What\'s our inventory position?'], realWorldCheck: ['Supplier succession documentation?', 'Emergency contact protocols?', 'Estate planning visibility?'] },
  
  // Compliance scenarios 41-50
  { id: 41, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'GDPR Violation Notice', frontDescription: 'Your vendor receives GDPR enforcement action. You\'re a data controller.', details: ['€20M fine proposed', 'Systematic compliance failures', 'You share liability risk', 'Must respond in 30 days'], prompts: ['What\'s our exposure?', 'Can we help them remediate?', 'Do we need to switch vendors?', 'What about our other vendors?'], realWorldCheck: ['Data processing agreements?', 'GDPR compliance audits?', 'Liability allocation terms?'] },
  { id: 42, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'SOC 2 Audit Failure', frontDescription: 'Vendor\'s SOC 2 audit identifies material weaknesses.', details: ['Multiple control failures', 'Auditor issued qualified opinion', 'Your compliance depends on them', 'Remediation timeline: 6 months'], prompts: ['Does this affect our certification?', 'What controls failed?', 'Can we accept the risk?', 'Do we accelerate transition?'], realWorldCheck: ['Right to SOC 2 reports?', 'Control reliance documentation?', 'Alternative vendor qualifications?'] },
  { id: 43, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'HIPAA Breach', frontDescription: 'Vendor data breach exposes PHI. OCR investigation initiated.', details: ['Encryption not implemented', 'BAA obligations breached', 'Mandatory reporting triggered', 'Penalties likely substantial'], prompts: ['What PHI was exposed?', 'When must we notify patients?', 'What\'s our liability?', 'Can we continue using them?'], realWorldCheck: ['BAA requirements met?', 'Vendor security validation?', 'Breach notification procedures?'] },
  { id: 44, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Export Control Violation', frontDescription: 'Vendor shipped controlled technology to embargoed country.', details: ['Shipment used your export license', 'Appears to be deliberate evasion', 'BIS investigation initiated', 'Other customers may be affected'], prompts: ['How do we cooperate with BIS?', 'What\'s our legal exposure?', 'How do we audit other vendors?', 'Should we self-disclose?'], realWorldCheck: ['Export control due diligence?', 'Vendor compliance certifications?', 'Legal defense preparations?'] },
  { id: 45, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Modern Slavery Discovery', frontDescription: 'Audit finds forced labor conditions at your tier-3 supplier.', details: ['Workers from vulnerable populations', 'Supplier was not on your radar', 'NGO threatening media campaign', 'Customer contracts require clean supply chain'], prompts: ['How deep does this go?', 'What\'s our remediation plan?', 'How do we verify other tiers?', 'What\'s our public response?'], realWorldCheck: ['Supply chain transparency laws?', 'Tier-n audit programs?', 'Remediation support capability?'] },
  { id: 46, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Environmental Permit Revoked', frontDescription: 'Your supplier loses environmental permits. Production must halt.', details: ['Violations accumulated over years', 'No timeline for reinstatement', 'Only qualified supplier for this process', 'Moving production requires permits too'], prompts: ['Can we help them remediate?', 'Can we find alternative processes?', 'How do we handle orders in progress?', 'What\'s the permit timeline?'], realWorldCheck: ['Supplier environmental monitoring?', 'Permit contingency requirements?', 'Alternative process capability?'] },
  { id: 47, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'FDA Warning Letter', frontDescription: 'Your contract manufacturer receives FDA warning letter citing your products.', details: ['Production must stop', 'Products may need recall', 'Re-inspection timeline unknown', 'Other customers pulling business'], prompts: ['What products are affected?', 'Is recall necessary?', 'Can we move production?', 'How do we communicate with FDA?'], realWorldCheck: ['cGMP audit programs?', 'Quality agreement terms?', 'Regulatory liaison capability?'] },
  { id: 48, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Accessibility Lawsuit', frontDescription: 'Vendor\'s software is sued for ADA violations. You\'re named too.', details: ['Product widely deployed', 'Class action filed', 'Vendor claims it\'s your configuration', 'Remediation requires significant rework'], prompts: ['What\'s our legal strategy?', 'How do we allocate responsibility?', 'What does remediation cost?', 'Do we switch vendors?'], realWorldCheck: ['Accessibility requirements in contracts?', 'WCAG compliance validation?', 'Indemnification terms?'] },
  { id: 49, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Anti-Corruption Investigation', frontDescription: 'Vendor under FCPA investigation. Your business relationship scrutinized.', details: ['Bribes allegedly paid on your behalf', 'DOJ requesting your records', 'Vendor cooperation uncertain', 'Potential debarment risk'], prompts: ['What\'s our legal exposure?', 'Do we cooperate or resist?', 'How do we protect privilege?', 'Do we terminate relationship?'], realWorldCheck: ['Anti-corruption due diligence?', 'Third-party risk assessments?', 'Legal representation readiness?'] },
  { id: 50, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Sanctions Violation', frontDescription: 'Vendor added to sanctions list. Immediate cessation required.', details: ['All transactions now illegal', 'Must terminate immediately', 'Outstanding obligations in limbo', 'Asset freeze in effect'], prompts: ['What transactions are affected?', 'Can we fulfill existing orders?', 'How do we protect assets?', 'What about accounts receivable?'], realWorldCheck: ['Sanctions screening programs?', 'Legal guidance on compliance?', 'Alternative vendor readiness?'] }
];

// Demo wild cards (12 - 2 per category)
const demoWildCards = [
  { id: 1, category: 'resource', categoryLabel: 'Resource Loss', title: 'Key Decision Maker Unavailable', description: 'Your BC lead is unreachable for the next 2 hours.', consider: ['Who has backup authority?', 'What decisions can wait?', 'Are delegation protocols documented?'] },
  { id: 7, category: 'resource', categoryLabel: 'Resource Loss', title: 'Budget Frozen', description: 'CFO just froze all discretionary spending. Recovery costs cannot be approved through normal channels.', consider: ['What can you do without spending?', 'What absolutely requires funding?', 'How do you get emergency approval?'] },
  { id: 2, category: 'time', categoryLabel: 'Time Pressure', title: 'Media Inquiry Incoming', description: 'A journalist is calling in 30 minutes asking about this vendor disruption.', consider: ['What do you say?', 'What do you hold back?', 'Who speaks to media?'] },
  { id: 8, category: 'time', categoryLabel: 'Time Pressure', title: 'Board Meeting Tomorrow', description: 'The board wants a full briefing on this situation at tomorrow morning\'s meeting.', consider: ['What can you know by then?', 'What decisions do you need?', 'What are you asking for?'] },
  { id: 3, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Second Vendor Also Impacted', description: 'A second vendor uses the same sub-supplier. They are also disrupted.', consider: ['How did you miss this?', 'What is your third option?', 'How do you prioritize?'] },
  { id: 9, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Backup System Fails', description: 'When you activate your backup vendor, you discover they also have capacity issues.', consider: ['What is your backup to the backup?', 'Can you get partial capacity?', 'How do you ration resources?'] },
  { id: 4, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Customer Panic Spiral', description: 'Your three largest customers threaten to leave. They want proof of recovery in 24 hours.', consider: ['What evidence can you provide?', 'What promises are realistic?', 'Who communicates with them?'] },
  { id: 10, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Executive Pressure', description: 'The CEO demands you fix this in 24 hours or they\'ll "find someone who can."', consider: ['What is realistic?', 'How do you manage up?', 'What help do you need?'] },
  { id: 5, category: 'fog', categoryLabel: 'Information Fog', title: 'Conflicting Information', description: 'Vendor says 6 hours. Their support says 3 days. Social media says weeks.', consider: ['How do you decide with bad info?', 'What is your planning assumption?', 'How do you verify?'] },
  { id: 11, category: 'fog', categoryLabel: 'Information Fog', title: 'Vendor Gone Silent', description: 'Your vendor has stopped responding. No status updates, no returned calls for 4 hours.', consider: ['What do you assume?', 'How do you plan without info?', 'Who else can you contact?'] },
  { id: 6, category: 'external', categoryLabel: 'External Shock', title: 'Concurrent Internal Crisis', description: 'While managing this vendor failure, your own facility experiences an unrelated incident.', consider: ['How do you split resources?', 'Which crisis takes priority?', 'Who leads each response?'] },
  { id: 12, category: 'external', categoryLabel: 'External Shock', title: 'Competitor Advantage', description: 'Your competitor announces they were not affected and is actively poaching your customers.', consider: ['How did they avoid it?', 'What do you tell customers?', 'How do you respond publicly?'] }
];

// ALL 48 WILD CARDS
const fullWildCards = [
  ...demoWildCards,
  // Resource Loss 13-18 (6 more)
  { id: 13, category: 'resource', categoryLabel: 'Resource Loss', title: 'Expert Consultant Unavailable', description: 'The external expert you rely on is unavailable for 3 days.', consider: ['Who else has this knowledge?', 'Can we proceed without them?', 'What decisions require expert input?'] },
  { id: 14, category: 'resource', categoryLabel: 'Resource Loss', title: 'System Access Lost', description: 'Your crisis management system is down. No access to plans or contacts.', consider: ['Where are backup copies?', 'Can we continue without it?', 'Who has offline information?'] },
  { id: 15, category: 'resource', categoryLabel: 'Resource Loss', title: 'Legal Counsel Conflicted Out', description: 'Your regular legal counsel has conflict of interest. Cannot advise.', consider: ['Who can we call instead?', 'What decisions need legal review?', 'Can we proceed without counsel?'] },
  { id: 16, category: 'resource', categoryLabel: 'Resource Loss', title: 'Insurance Claim Denied', description: 'Insurance denies your initial claim. Appeals process will take weeks.', consider: ['Why was it denied?', 'Can we self-fund temporarily?', 'What\'s the appeal timeline?'] },
  { id: 17, category: 'resource', categoryLabel: 'Resource Loss', title: 'HR Resources Diverted', description: 'HR is handling a separate major issue. No bandwidth to support your needs.', consider: ['What HR support is critical?', 'Can we handle without them?', 'Who else can assist?'] },
  { id: 18, category: 'resource', categoryLabel: 'Resource Loss', title: 'Translation Services Unavailable', description: 'Need to communicate in multiple languages but translation unavailable.', consider: ['Who speaks the languages?', 'Can we use automated translation?', 'What\'s the risk of miscommunication?'] },
  
  // Time Pressure 19-24 (6 more)
  { id: 19, category: 'time', categoryLabel: 'Time Pressure', title: 'Regulatory Deadline', description: 'Regulator wants incident report by end of business today.', consider: ['What do we know for certain?', 'What can we reasonably report?', 'Who drafts and who reviews?'] },
  { id: 20, category: 'time', categoryLabel: 'Time Pressure', title: 'Contract Renewal Deadline', description: 'Major customer contract renews tomorrow. This incident may affect renewal.', consider: ['Do we disclose the situation?', 'Can we delay renewal?', 'What assurances can we provide?'] },
  { id: 21, category: 'time', categoryLabel: 'Time Pressure', title: 'Quarter End Pressure', description: 'This is happening in the last week of the quarter. Financial impact critical.', consider: ['How does this affect revenue recognition?', 'What do we tell investors?', 'Can we accelerate any orders?'] },
  { id: 22, category: 'time', categoryLabel: 'Time Pressure', title: 'Holiday Weekend Approaching', description: 'This is Friday afternoon before a 3-day weekend.', consider: ['Who works through the weekend?', 'What can wait until Tuesday?', 'How do we maintain coverage?'] },
  { id: 23, category: 'time', categoryLabel: 'Time Pressure', title: 'Product Launch Tomorrow', description: 'Your major product launch is scheduled for tomorrow morning.', consider: ['Do we delay the launch?', 'Can we launch with limitations?', 'How do we communicate this?'] },
  { id: 24, category: 'time', categoryLabel: 'Time Pressure', title: 'Audit Starting Monday', description: 'External audit begins Monday. This will be scrutinized.', consider: ['How do we document this?', 'What do we tell auditors?', 'Can we delay the audit?'] },
  
  // Cascading Failures 25-30 (6 more)
  { id: 25, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Dependent System Fails', description: 'A system that depends on this vendor also fails.', consider: ['What else is connected?', 'How do we isolate failures?', 'What\'s the full impact map?'] },
  { id: 26, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Customer of Customer Impacted', description: 'Your customer reports their customer is also affected by this.', consider: ['How far does this cascade?', 'What\'s our ultimate liability?', 'Who manages the full chain?'] },
  { id: 27, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Payment System Affected', description: 'The vendor failure impacts your ability to pay other vendors.', consider: ['Who else needs payment?', 'Can we use alternative methods?', 'What\'s the ripple effect?'] },
  { id: 28, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Data Sync Broken', description: 'Data synchronization between systems is now broken.', consider: ['What data is out of sync?', 'Can we operate with stale data?', 'How do we resync later?'] },
  { id: 29, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Certificate Chain Broken', description: 'Security certificate dependencies now broken across multiple systems.', consider: ['What systems are affected?', 'Can we temporarily bypass?', 'What\'s the security risk?'] },
  { id: 30, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Inventory Domino Effect', description: 'This vendor\'s failure triggers inventory shortages in multiple product lines.', consider: ['Which products are affected?', 'How do we prioritize?', 'Can we substitute?'] },
  
  // Stakeholder Complications 31-36 (6 more)
  { id: 31, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Investor Call Scheduled', description: 'Quarterly investor call is in 2 hours. They\'ll ask about this.', consider: ['What do we disclose?', 'How do we frame this?', 'Who fields the questions?'] },
  { id: 32, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Union Notification Required', description: 'Union contract requires notification within 4 hours of this type of incident.', consider: ['What do we tell them?', 'How does this affect operations?', 'Do we need their cooperation?'] },
  { id: 33, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Competitor Circling', description: 'Your competitor is actively calling your customers offering alternatives.', consider: ['Do we proactively call customers?', 'What advantages do we have?', 'How do we retain them?'] },
  { id: 34, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Employee Morale Sinking', description: 'Staff are visibly stressed and questioning leadership competence.', consider: ['What do we tell the team?', 'How do we maintain confidence?', 'Who needs support?'] },
  { id: 35, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Supplier Demanding Payment', description: 'Other suppliers are demanding immediate payment, citing risk.', consider: ['Can we provide assurances?', 'Do we need to prepay?', 'What if we can\'t pay?'] },
  { id: 36, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Insurance Company Investigating', description: 'Your insurance company is investigating before committing to cover.', consider: ['What documentation do they need?', 'What if they deny coverage?', 'How does this affect decisions?'] },
  
  // Information Fog 37-42 (6 more)
  { id: 37, category: 'fog', categoryLabel: 'Information Fog', title: 'Root Cause Unknown', description: 'No one can explain what actually caused this failure.', consider: ['Can we recover without knowing?', 'What if it happens again?', 'Who investigates?'] },
  { id: 38, category: 'fog', categoryLabel: 'Information Fog', title: 'Scope Keeps Expanding', description: 'Every hour reveals this is bigger than previously thought.', consider: ['How do we plan with moving scope?', 'What\'s worst case?', 'When do we know enough?'] },
  { id: 39, category: 'fog', categoryLabel: 'Information Fog', title: 'Language Barrier', description: 'Vendor\'s English is limited. Critical details are being lost in translation.', consider: ['How do we ensure understanding?', 'Do we need interpreter?', 'What might we be missing?'] },
  { id: 40, category: 'fog', categoryLabel: 'Information Fog', title: 'Technical Jargon Barrier', description: 'Vendor\'s technical explanations are incomprehensible to decision makers.', consider: ['Who can translate this?', 'What do we need to understand?', 'Can we make decisions anyway?'] },
  { id: 41, category: 'fog', categoryLabel: 'Information Fog', title: 'Rumor Mill Active', description: 'Employees are sharing rumors that may or may not be accurate.', consider: ['How do we control narrative?', 'What do we confirm?', 'How often do we update?'] },
  { id: 42, category: 'fog', categoryLabel: 'Information Fog', title: 'Data Quality Issues', description: 'The data you\'re getting from vendor is inconsistent and unreliable.', consider: ['Can we verify independently?', 'What data is trustworthy?', 'How do we plan with bad data?'] },
  
  // External Shocks 43-48 (6 more)
  { id: 43, category: 'external', categoryLabel: 'External Shock', title: 'Social Media Firestorm', description: 'This incident is trending negatively on social media.', consider: ['Do we respond publicly?', 'What is key message?', 'Who monitors and responds?'] },
  { id: 44, category: 'external', categoryLabel: 'External Shock', title: 'Regulator Inquiry', description: 'Regulator calls asking questions about your vendor oversight practices.', consider: ['Who responds?', 'What documentation do you have?', 'What should you not say?'] },
  { id: 45, category: 'external', categoryLabel: 'External Shock', title: 'Cyber Attack on You', description: 'While dealing with vendor issue, your own systems come under cyber attack.', consider: ['Are they related?', 'How do you prioritize?', 'Do you have resources for both?'] },
  { id: 46, category: 'external', categoryLabel: 'External Shock', title: 'Weather Event Approaching', description: 'Major storm forecast to hit your region in 48 hours during this recovery.', consider: ['How does this change timeline?', 'What do you accelerate?', 'What do you defer?'] },
  { id: 47, category: 'external', categoryLabel: 'External Shock', title: 'Industry-Wide Issue Emerges', description: 'Turns out this vendor issue affects your entire industry. Collective response forming.', consider: ['Do you join collective effort?', 'What do you share?', 'What is competitive advantage?'] },
  { id: 48, category: 'external', categoryLabel: 'External Shock', title: 'Political Pressure', description: 'Local politician makes public statement criticizing your company response.', consider: ['Do you respond?', 'Who handles government relations?', 'What is the political context?'] }
];

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

function VendorResilienceDeck() {
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
    setSelectedWildCategory(null);
    setCurrentView('scenario');
  };

  const selectScenario = (scenario) => {
    setSelectedScenario(scenario);
    setIsFlipped(false);
    setCurrentWildCard(null);
    setSelectedWildCategory(null);
    setCurrentView('scenario');
  };

  const drawWildCard = (categoryId) => {
    const categoryCards = availableWildCards.filter(card => card.category === categoryId);
    const randomIndex = Math.floor(Math.random() * categoryCards.length);
    setCurrentWildCard(categoryCards[randomIndex]);
    setSelectedWildCategory(categoryId);
    setShowWildCardSelector(false);
  };

  const handleDrawAnother = () => {
    if (currentWildCard) {
      const categoryCards = availableWildCards.filter(card => card.category === currentWildCard.category);
      const randomIndex = Math.floor(Math.random() * categoryCards.length);
      setCurrentWildCard(categoryCards[randomIndex]);
    }
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
  };

  const renderHeader = () => (
    <div style={{ backgroundColor: '#fff', padding: '12px 24px', borderBottom: '3px solid #e86c3a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src="https://continuitystrength.com/s/CS-Logo_Cropped-and-Transparent.png" alt="Continuity Strength" style={{ height: '40px' }} />
      <div style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>Vendor Resilience Exercise Deck</div>
    </div>
  );

  const renderFooter = () => (
    <div style={{ backgroundColor: '#e0e0e0', padding: '16px 24px', marginTop: '40px', flexShrink: 0 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ color: '#333', fontSize: '13px' }}>
          www.ContinuityStrength.com/TPRM
        </div>
        <div style={{ color: '#333', fontSize: '13px' }}>
          © Continuity Strength 2025
        </div>
        <div style={{ color: '#333', fontSize: '13px' }}>
          Contact us at info@ContinuityStrength.com
        </div>
      </div>
    </div>
  );

  const renderMain = () => (
    <div style={{ padding: '32px 24px', maxWidth: '600px', margin: '0 auto', flex: 1 }}>
      <h1 style={{ textAlign: 'center', marginBottom: '8px', color: '#333', fontSize: '28px' }}>Vendor Resilience Exercise Deck</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '32px', fontSize: '15px' }}>Test your team's response to vendor failures. Identify gaps before crises hit.</p>
      
      {!hasAccess && (
        <div style={{ backgroundColor: '#fff8f6', padding: '16px', borderRadius: '8px', marginBottom: '24px', border: '1px solid #e86c3a' }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#e86c3a', fontSize: '14px' }}>Demo Mode: 3 scenarios + 12 wild cards</p>
          <p style={{ margin: '0', fontSize: '13px', color: '#666' }}>Get the full deck with 50 scenarios + 48 wild cards. <a href="https://buy.stripe.com/eVq6oH8MGcHB3XKdZ14sE0W" style={{ color: '#e86c3a', fontWeight: '500' }}>Purchase now →</a></p>
        </div>
      )}

      {hasAccess && (
        <div style={{ backgroundColor: '#f0f9ff', padding: '16px', borderRadius: '8px', marginBottom: '24px', border: '1px solid #0ea5e9' }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#0ea5e9', fontSize: '14px' }}>Full Access: 50 scenarios + 48 wild cards unlocked!</p>
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
      {!hasAccess && (
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href="https://buy.stripe.com/eVq6oH8MGcHB3XKdZ14sE0W" style={{ color: '#e86c3a', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>Get the full deck: 50 scenarios + 48 wild cards →</a>
        </div>
      )}
    </div>
  );

  const renderScenario = () => {
    if (!selectedScenario) return null;
    return (
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', flex: 1 }}>
        <div style={{ marginBottom: '16px' }}>
          <button onClick={() => { setCurrentView('main'); setCurrentWildCard(null); setSelectedWildCategory(null); }} style={{ padding: '8px 16px', backgroundColor: 'transparent', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#666' }}>
            <Icons.back /> Back to Deck
          </button>
        </div>

        {/* Timer and Wild Card Button Row */}
        <div style={{ marginBottom: '20px', padding: '12px 16px', backgroundColor: '#f8f8f8', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', position: 'relative' }}>
          <span style={{ fontWeight: '600', fontSize: '14px', color: '#333' }}>Timer:</span>
          <input type="number" value={timerInput} onChange={(e) => setTimerInput(e.target.value)} style={{ width: '50px', padding: '6px 8px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }} min="1" max="60" />
          <span style={{ fontSize: '14px', color: '#666' }}>min</span>
          <button onClick={timerRunning ? () => setTimerRunning(false) : startTimer} style={{ padding: '6px 12px', backgroundColor: timerRunning ? '#666' : '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
            {timerRunning ? <><Icons.pause /> Pause</> : <><Icons.play /> Start</>}
          </button>
          <button onClick={resetTimer} style={{ padding: '6px 12px', backgroundColor: '#f5f5f5', color: '#666', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
            <Icons.reset /> Reset
          </button>
          <span style={{ fontWeight: '700', fontSize: '20px', color: timerMinutes === 0 && timerSeconds < 60 ? '#f44336' : '#333' }}>
            {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
          </span>
          
          {/* Wild Card Button - always visible */}
          <div style={{ marginLeft: 'auto', position: 'relative' }}>
            <button onClick={() => setShowWildCardSelector(!showWildCardSelector)} style={{ padding: '8px 16px', backgroundColor: '#e86c3a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icons.wildcard /> {currentWildCard ? 'Change Category' : 'Add Wild Card'}
            </button>
            
            {/* Dropdown selector */}
            {showWildCardSelector && (
              <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: '8px', padding: '12px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #ddd', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 100, width: '220px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: '#333' }}>Select Category</span>
                  <button onClick={() => setShowWildCardSelector(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666', padding: '2px' }}><Icons.close /></button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {wildCardCategories.map(cat => (
                    <button key={cat.id} onClick={() => drawWildCard(cat.id)} style={{ padding: '8px 12px', backgroundColor: selectedWildCategory === cat.id ? '#fff8f6' : '#f8f8f8', border: selectedWildCategory === cat.id ? '1px solid #e86c3a' : '1px solid #eee', borderRadius: '6px', cursor: 'pointer', textAlign: 'left', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#666' }}>{getCategoryIcon(cat.icon)}</span> {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Cards container - side by side with fixed height */}
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'stretch' }}>
          {/* Scenario Card - fixed dimensions */}
          <div style={{ width: '520px', flexShrink: 0 }}>
            <div onClick={() => setIsFlipped(!isFlipped)} style={{ perspective: '1000px', cursor: 'pointer', height: '100%' }}>
              <div style={{ position: 'relative', width: '100%', height: '580px', transition: 'transform 0.6s', transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                {/* Front of card */}
                <div style={{ position: 'absolute', width: '100%', height: '580px', backfaceVisibility: 'hidden', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', padding: '24px', display: 'flex', flexDirection: 'column', border: '1px solid #eee', boxSizing: 'border-box' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <img src="https://continuitystrength.com/s/CS-favicon-cropped-minimized.png" alt="CS" style={{ width: '32px', height: '32px', borderRadius: '4px' }} />
                    <span style={{ fontSize: '12px', color: '#666', display: 'flex', alignItems: 'center', gap: '6px' }}>{getCategoryIcon(selectedScenario.category)} {selectedScenario.categoryLabel}</span>
                  </div>
                  <h2 style={{ fontSize: '24px', marginBottom: '16px', color: '#296ecb', fontWeight: '700' }}>{selectedScenario.title}</h2>
                  <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#444', flexGrow: 1 }}>{selectedScenario.frontDescription}</p>
                  <div style={{ textAlign: 'center', marginTop: '24px', color: '#999', fontSize: '13px' }}>Click card to flip →</div>
                  <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '10px', color: '#bbb' }}>© Continuity Strength 2025</div>
                </div>
                {/* Back of card */}
                <div style={{ position: 'absolute', width: '100%', height: '580px', backfaceVisibility: 'hidden', backgroundColor: '#fafafa', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', padding: '24px', transform: 'rotateY(180deg)', overflow: 'auto', border: '1px solid #eee', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <img src="https://continuitystrength.com/s/CS-favicon-cropped-minimized.png" alt="CS" style={{ width: '32px', height: '32px', borderRadius: '4px' }} />
                  </div>
                  <h3 style={{ fontSize: '13px', color: '#296ecb', marginBottom: '8px', fontWeight: '700' }}>SCENARIO DETAILS</h3>
                  <ul style={{ margin: '0 0 12px 0', paddingLeft: '18px', fontSize: '13px', color: '#444' }}>
                    {selectedScenario.details.map((detail, i) => <li key={i} style={{ marginBottom: '4px', lineHeight: '1.4' }}>{detail}</li>)}
                  </ul>
                  <h3 style={{ fontSize: '13px', color: '#296ecb', marginBottom: '8px', fontWeight: '700' }}>DISCUSSION PROMPTS</h3>
                  <ul style={{ margin: '0 0 12px 0', paddingLeft: '18px', fontSize: '13px', color: '#444' }}>
                    {selectedScenario.prompts.map((prompt, i) => <li key={i} style={{ marginBottom: '4px', lineHeight: '1.4' }}>{prompt}</li>)}
                  </ul>
                  <h3 style={{ fontSize: '13px', color: '#296ecb', marginBottom: '8px', fontWeight: '700' }}>REAL-WORLD CHECK</h3>
                  <ul style={{ margin: '0 0 16px 0', paddingLeft: '18px', fontSize: '13px', color: '#444' }}>
                    {selectedScenario.realWorldCheck.map((check, i) => <li key={i} style={{ marginBottom: '4px', lineHeight: '1.4' }}>{check}</li>)}
                  </ul>
                  {/* Lead gen message */}
                  <div style={{ marginTop: 'auto' }}>
                    <p style={{ fontSize: '11px', color: '#65b3cf', margin: '0 0 12px 0', lineHeight: '1.5', textAlign: 'center' }}>
                      {leadGenMessages[selectedScenario.category]}
                    </p>
                    <div style={{ textAlign: 'center', fontSize: '10px', color: '#bbb' }}>© Continuity Strength 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wild Card - same fixed height */}
          {currentWildCard && (
            <div style={{ width: '520px', flexShrink: 0 }}>
              <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', padding: '24px', height: '580px', display: 'flex', flexDirection: 'column', border: '2px solid #e86c3a', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <img src="https://continuitystrength.com/s/CS-favicon-cropped-minimized.png" alt="CS" style={{ width: '32px', height: '32px', borderRadius: '4px' }} />
                  <span style={{ fontSize: '11px', padding: '4px 10px', backgroundColor: '#e86c3a', color: '#fff', borderRadius: '4px', fontWeight: '600' }}>WILD CARD</span>
                </div>
                <div style={{ marginBottom: '12px', color: '#666' }}>{getCategoryIcon(currentWildCard.category)}</div>
                <h2 style={{ fontSize: '22px', marginBottom: '16px', color: '#333', fontWeight: '700' }}>{currentWildCard.title}</h2>
                <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#444' }}>{currentWildCard.description}</p>
                <h3 style={{ fontSize: '13px', color: '#666', marginBottom: '8px', fontWeight: '700' }}>CONSIDER:</h3>
                <ul style={{ margin: '0 0 20px 0', paddingLeft: '18px', fontSize: '14px', color: '#444', flexGrow: 1 }}>
                  {currentWildCard.consider.map((item, i) => <li key={i} style={{ marginBottom: '6px', lineHeight: '1.5' }}>{item}</li>)}
                </ul>
                <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (currentWildCard) {
                        const categoryCards = availableWildCards.filter(card => card.category === currentWildCard.category);
                        const randomIndex = Math.floor(Math.random() * categoryCards.length);
                        setCurrentWildCard(categoryCards[randomIndex]);
                      }
                    }} 
                    style={{ flex: 1, padding: '10px 16px', backgroundColor: '#f5f5f5', color: '#333', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <span style={{ pointerEvents: 'none', display: 'flex', alignItems: 'center' }}><Icons.refresh /></span> Draw Another
                  </button>
                  <button type="button" onClick={(e) => { e.stopPropagation(); clearWildCard(); }} style={{ padding: '10px 16px', backgroundColor: '#fff', color: '#666', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>
                    <Icons.close />
                  </button>
                </div>
                <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '10px', color: '#bbb' }}>© Continuity Strength 2025</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderGuide = () => (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto', flex: 1 }}>
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
            <h3 style={{ fontSize: '15px', color: '#296ecb', marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700' }}>
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
    <div style={{ padding: '32px 24px', maxWidth: '400px', margin: '0 auto', flex: 1 }}>
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
        <a href="https://buy.stripe.com/eVq6oH8MGcHB3XKdZ14sE0W" style={{ color: '#e86c3a', fontWeight: '600', fontSize: '14px' }}>Purchase the full deck →</a>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafafa', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', display: 'flex', flexDirection: 'column' }}>
      {renderHeader()}
      {currentView === 'main' && renderMain()}
      {currentView === 'scenario' && renderScenario()}
      {currentView === 'guide' && renderGuide()}
      {currentView === 'access' && renderAccessEntry()}
      {renderFooter()}
    </div>
  );
}

export default VendorResilienceDeck;

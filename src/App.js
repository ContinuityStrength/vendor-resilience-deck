import React, { useState, useEffect } from 'react';

// Professional SVG Icons
const Icons = {
  cyber: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  operational: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  supply: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  smb: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  compliance: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  resource: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  time: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  cascade: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  ),
  stakeholder: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  fog: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  ),
  external: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
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
    details: [
      'Vendor expects 72-hour minimum outage',
      '40% of your transactions flow through them',
      'Customer support lines overwhelmed',
      'Media is reporting the incident'
    ],
    prompts: [
      'Do we have an alternate payment processor under contract?',
      'How do we communicate with customers?',
      'What\'s our financial exposure per hour?',
      'Who has authority to activate backup vendors?'
    ],
    realWorldCheck: [
      'Cyber insurance coverage?',
      'Vendor SLA penalties?',
      'Customer notification requirements?'
    ]
  },
  {
    id: 2,
    category: 'operational',
    categoryLabel: 'Vendor Operational Failure',
    title: 'Logistics Partner Strike',
    frontDescription: 'Your primary logistics partner\'s drivers go on strike. All deliveries halt.',
    details: [
      'Strike expected to last 2+ weeks',
      'Peak season with 3x normal volume',
      'Perishable goods in transit',
      'Competitors affected too—capacity scarce'
    ],
    prompts: [
      'What inventory is currently in transit?',
      'Do we have secondary logistics contracts?',
      'Which customers get priority?',
      'Can we use customer pickup options?'
    ],
    realWorldCheck: [
      'Force majeure clauses?',
      'Insurance for spoilage?',
      'Customer contract obligations?'
    ]
  },
  {
    id: 3,
    category: 'supply',
    categoryLabel: 'Supply Chain Disruption',
    title: 'Single-Source Supplier Fire',
    frontDescription: 'A fire destroys your sole supplier\'s manufacturing facility. Lead time jumps to 6 months.',
    details: [
      'Component critical to flagship product',
      '8 weeks of inventory remaining',
      'No pre-qualified alternate suppliers',
      'Supplier has no disaster recovery site'
    ],
    prompts: [
      'Can we redesign to use alternate components?',
      'What\'s the qualification timeline for new suppliers?',
      'How do we allocate remaining inventory?',
      'Should we acquire supplier or competitor?'
    ],
    realWorldCheck: [
      'Business interruption insurance?',
      'Contract termination rights?',
      'Customer penalty clauses?'
    ]
  }
];

// Full scenarios (50 total)
const fullScenarios = [
  ...demoScenarios,
  { id: 4, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Cloud Provider Data Breach', frontDescription: 'Your cloud hosting provider suffers a data breach exposing customer PII.', details: ['Breach occurred 3 weeks ago, just disclosed', 'Uncertain which data was accessed', 'Regulatory notification deadlines approaching', 'Media inquiries incoming'], prompts: ['What customer data did we store there?', 'Who leads breach response?', 'What are our notification obligations?', 'How do we communicate with affected customers?'], realWorldCheck: ['Cyber liability coverage?', 'Vendor indemnification clauses?', 'Regulatory fine exposure?'] },
  { id: 5, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'HR System Compromise', frontDescription: 'Your HR/payroll vendor reports unauthorized access to employee records.', details: ['Social security numbers potentially exposed', 'Includes executive compensation data', 'Employee trust severely impacted', 'Class action risk is high'], prompts: ['How many employees affected?', 'What credit monitoring will we offer?', 'How do we communicate internally?', 'What\'s our legal exposure?'], realWorldCheck: ['Employee data protection policies?', 'Vendor security certifications?', 'D&O insurance coverage?'] },
  { id: 6, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Supply Chain Software Attack', frontDescription: 'Malicious code discovered in a software update from a trusted vendor.', details: ['Update was auto-installed across systems', 'Backdoor allows remote access', 'Unknown how long it was active', 'Vendor denies responsibility'], prompts: ['Which systems received the update?', 'Can we isolate affected systems?', 'How do we verify system integrity?', 'What\'s our forensics capability?'], realWorldCheck: ['Software supply chain controls?', 'Vendor code signing practices?', 'Incident response retainer?'] },
  { id: 7, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Email Service Outage', frontDescription: 'Your email security vendor experiences a complete service failure.', details: ['No email filtering for 48+ hours', 'Spam and phishing flooding inboxes', 'Business communications disrupted', 'Remote workers most affected'], prompts: ['Can we route email through backup?', 'How do we warn employees?', 'What critical communications are stuck?', 'Should we shut down email entirely?'], realWorldCheck: ['Email continuity plans?', 'Alternative communication channels?', 'SLA remedies available?'] },
  { id: 8, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'IoT Vendor Vulnerability', frontDescription: 'Critical vulnerability discovered in IoT devices throughout your facilities.', details: ['Devices control HVAC and security systems', 'Patch not yet available', 'Exploit code is public', 'Devices can\'t be easily isolated'], prompts: ['How many devices are affected?', 'Can we implement compensating controls?', 'What\'s the physical security risk?', 'Should we replace devices entirely?'], realWorldCheck: ['IoT security policies?', 'Network segmentation?', 'Vendor patch SLAs?'] },
  { id: 9, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Authentication Provider Down', frontDescription: 'Your single sign-on provider experiences a global outage.', details: ['Employees locked out of all systems', 'Customer-facing apps inaccessible', 'No ETA for restoration', 'Outage affects thousands of companies'], prompts: ['What break-glass procedures exist?', 'Which systems have local authentication?', 'How do we serve customers?', 'What\'s our manual workaround?'], realWorldCheck: ['SSO dependency mapping?', 'Backup authentication methods?', 'Business continuity for auth failure?'] },
  { id: 10, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Vendor Insider Threat', frontDescription: 'A vendor employee is caught exfiltrating your proprietary data.', details: ['Employee had privileged access', 'Data includes product roadmaps', 'Competitor may have received data', 'Vendor trying to minimize incident'], prompts: ['What data was accessed?', 'How do we preserve evidence?', 'What legal action is appropriate?', 'How do we prevent future access?'], realWorldCheck: ['Vendor background check requirements?', 'Data access logging?', 'NDA enforcement options?'] },
  { id: 11, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Manufacturing Quality Escape', frontDescription: 'Your contract manufacturer shipped defective products for 3 months.', details: ['Affects 50,000 units in market', 'Safety issue requiring recall', 'Root cause still unknown', 'Manufacturer claims your specs were followed'], prompts: ['How do we identify affected units?', 'What\'s our recall strategy?', 'Who bears the cost?', 'How do we prevent customer injuries?'], realWorldCheck: ['Product liability insurance?', 'Quality audit records?', 'Recall cost allocation?'] },
  { id: 12, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Data Center Cooling Failure', frontDescription: 'Your colocation provider\'s cooling system fails. Servers overheating.', details: ['Facility at 95°F and rising', 'Emergency shutdown imminent', 'Your DR site is also with this provider', 'Generator fuel running low'], prompts: ['What\'s our graceful shutdown procedure?', 'Can we failover to cloud?', 'Which systems are most critical?', 'How do we communicate the outage?'], realWorldCheck: ['Geographic diversity of infrastructure?', 'Warm standby capabilities?', 'Data backup locations?'] },
  { id: 13, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Cleaning Service Contamination', frontDescription: 'Your facility cleaning vendor used wrong chemicals, contaminating production.', details: ['Three production lines affected', 'Products must be destroyed', '2-week decontamination process', 'FDA notification required'], prompts: ['How do we prevent product from shipping?', 'What\'s our contamination response?', 'Can we shift to other facilities?', 'How do we communicate with regulators?'], realWorldCheck: ['Vendor insurance requirements?', 'Chemical handling protocols?', 'Regulatory reporting timelines?'] },
  { id: 14, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Security Guard No-Show', frontDescription: 'Your security vendor fails to staff your facility for overnight shift.', details: ['Discovered at 6am when day shift arrives', 'Loading dock was unsecured', 'Unknown if theft occurred', 'High-value inventory present'], prompts: ['How do we verify nothing was taken?', 'What\'s our incident documentation?', 'Should we close the facility?', 'What backup security exists?'], realWorldCheck: ['Security vendor SLAs?', 'Backup security arrangements?', 'Insurance for theft/loss?'] },
  { id: 15, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Fleet Maintenance Lapse', frontDescription: 'Your vehicle fleet vendor skipped required maintenance. Multiple breakdowns.', details: ['15 vehicles need immediate service', 'Some have safety issues', 'Delivery schedules in jeopardy', 'Vendor blames staffing shortages'], prompts: ['Which vehicles are safe to operate?', 'Can we rent replacements?', 'What deliveries are at risk?', 'How do we verify all maintenance?'], realWorldCheck: ['Maintenance records and audits?', 'Backup transportation contracts?', 'Liability for vehicle incidents?'] },
  { id: 16, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Catering Food Poisoning', frontDescription: 'Multiple employees sick after vendor-catered company event.', details: ['27 employees affected', 'Three hospitalized', 'Health department investigating', 'Media asking questions'], prompts: ['How do we support affected employees?', 'What documentation do we need?', 'How do we communicate internally?', 'What\'s our media response?'], realWorldCheck: ['Event liability coverage?', 'Vendor health certifications?', 'Workers\' comp implications?'] },
  { id: 17, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Print Vendor Data Leak', frontDescription: 'Your print/mail vendor sent customer statements to wrong addresses.', details: ['2,000 customers affected', 'Statements contain account numbers', 'Some went to completely wrong people', 'Vendor has history of issues'], prompts: ['How do we notify affected customers?', 'What remediation do we offer?', 'How do we recall misdirected mail?', 'Should we terminate the vendor?'], realWorldCheck: ['Vendor error and omission coverage?', 'Customer notification requirements?', 'Regulatory reporting obligations?'] },
  { id: 18, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Telecom Provider Outage', frontDescription: 'Your telecommunications provider has a regional network failure.', details: ['All voice and data circuits down', 'Affects headquarters and 3 branches', 'Provider estimates 24-hour repair', 'No cellular backup configured'], prompts: ['How do employees communicate?', 'How do customers reach us?', 'What transactions are frozen?', 'Can we work from other locations?'], realWorldCheck: ['Telecom redundancy?', 'Cellular backup plans?', 'Customer communication alternatives?'] },
  { id: 19, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'HVAC Contractor Error', frontDescription: 'HVAC vendor error floods server room. Critical equipment damaged.', details: ['Primary and backup servers affected', 'Water damage still being assessed', 'Building management system also down', 'Insurance adjuster en route'], prompts: ['What data was on local servers?', 'Can we operate from cloud backup?', 'How do we document the damage?', 'What\'s the replacement timeline?'], realWorldCheck: ['Equipment insurance coverage?', 'Data backup and recovery?', 'Vendor liability limits?'] },
  { id: 20, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Staffing Agency Background Lapse', frontDescription: 'Staffing agency failed to complete background checks on temporary workers.', details: ['12 temps working in sensitive areas', 'One has disqualifying criminal history', 'Regulatory compliance at risk', 'Agency trying to minimize exposure'], prompts: ['Which temps are affected?', 'What access did they have?', 'How do we notify regulators?', 'What\'s our remediation plan?'], realWorldCheck: ['Temp worker policies?', 'Agency audit requirements?', 'Regulatory penalties?'] },
  { id: 21, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Port Congestion Crisis', frontDescription: 'Major port congestion delays your inbound shipments by 4-6 weeks.', details: ['Container ships anchored offshore', '60% of inventory in transit', 'Expediting via air cost-prohibitive', 'Competitors facing same issue'], prompts: ['Which products will stock out?', 'Can we air freight critical items?', 'How do we allocate inventory?', 'What customer communication is needed?'], realWorldCheck: ['Supply chain insurance?', 'Alternative port arrangements?', 'Customer contract flexibility?'] },
  { id: 22, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Rare Earth Export Ban', frontDescription: 'New export restrictions cut off your supply of critical rare earth materials.', details: ['No domestic alternatives exist', 'Current inventory lasts 6 weeks', 'Product redesign would take 18 months', 'Ban effective immediately'], prompts: ['Can we source from other countries?', 'What\'s our inventory rationing plan?', 'Which products do we prioritize?', 'Can we acquire stockpiles?'], realWorldCheck: ['Geopolitical risk assessments?', 'Material substitution research?', 'Long-term contract coverage?'] },
  { id: 23, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Freight Carrier Bankruptcy', frontDescription: 'Your primary freight carrier files bankruptcy and ceases operations.', details: ['Shipments in transit are stranded', 'Pre-paid freight may be unrecoverable', 'Peak season capacity already tight', 'Carrier had lowest rates'], prompts: ['Where are our shipments right now?', 'How do we recover stranded goods?', 'What backup carriers can we use?', 'How do we absorb rate increases?'], realWorldCheck: ['Carrier financial monitoring?', 'Transportation contract terms?', 'Pre-payment policies?'] },
  { id: 24, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Agricultural Blight', frontDescription: 'Disease outbreak destroys 40% of a key agricultural input across multiple suppliers.', details: ['Global commodity prices spiking', 'Alternative ingredients change product', 'Customer taste expectations at risk', 'Shortage may last 2 harvest cycles'], prompts: ['Can we reformulate products?', 'How do we secure remaining supply?', 'What price increases do we pass on?', 'How do we communicate changes?'], realWorldCheck: ['Commodity hedging?', 'Formula flexibility?', 'Long-term supplier contracts?'] },
  { id: 25, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Trade War Tariffs', frontDescription: 'New tariffs increase your import costs by 25% overnight.', details: ['Affects 70% of your BOM', 'Competitor sources domestically', 'Passing costs loses customers', 'Absorbing costs loses margin'], prompts: ['Can we shift to domestic suppliers?', 'What\'s our pricing strategy?', 'Which products are most affected?', 'How do we communicate increases?'], realWorldCheck: ['Tariff exclusion applications?', 'Supplier country diversification?', 'Customer contract price clauses?'] },
  { id: 26, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Key Supplier Acquisition', frontDescription: 'Your critical supplier is acquired by your largest competitor.', details: ['New owner may discontinue supply', 'Alternative qualification takes 12 months', 'Pricing likely to increase dramatically', '90-day termination notice received'], prompts: ['Can we fast-track new suppliers?', 'Should we stockpile inventory?', 'Can we acquire another supplier?', 'What\'s our redesign timeline?'], realWorldCheck: ['Supplier market concentration?', 'Change of control clauses?', 'Strategic supplier agreements?'] },
  { id: 27, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Conflict Mineral Violation', frontDescription: 'Audit reveals conflict minerals in your supply chain despite certifications.', details: ['Vendor provided false documentation', 'Affects products sold to government', 'Debarment risk is significant', 'Public disclosure required'], prompts: ['How do we verify other suppliers?', 'What\'s our remediation plan?', 'How do we notify customers?', 'What legal action against vendor?'], realWorldCheck: ['Supply chain due diligence?', 'Vendor audit programs?', 'Regulatory disclosure compliance?'] },
  { id: 28, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Pandemic Production Halt', frontDescription: 'Disease outbreak forces extended closure of supplier\'s sole facility.', details: ['Region under strict lockdown', 'Remote work not possible for manufacturing', 'Duration uncertain—weeks to months', 'Other suppliers in same region'], prompts: ['What\'s our inventory runway?', 'Can suppliers in other regions help?', 'How do we ration remaining supply?', 'What products do we discontinue?'], realWorldCheck: ['Geographic supplier diversity?', 'Pandemic response clauses?', 'Force majeure definitions?'] },
  { id: 29, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Energy Price Spike', frontDescription: 'Energy costs triple for your suppliers, who demand immediate price increases.', details: ['Affects all suppliers in region', 'Some threaten to halt production', 'Your contracts don\'t allow mid-term increases', 'Customer contracts have fixed pricing'], prompts: ['Which suppliers are most critical?', 'Can we help with energy costs?', 'How do we renegotiate contracts?', 'What margin can we absorb?'], realWorldCheck: ['Price adjustment mechanisms?', 'Supplier financial health monitoring?', 'Energy hedging programs?'] },
  { id: 30, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'IP Theft by Supplier', frontDescription: 'Supplier employee steals your designs and starts competing business.', details: ['Copies appearing in market at lower prices', 'Supplier denies responsibility', 'Legal action will take years', 'Customers asking about cheaper alternative'], prompts: ['How do we differentiate from copies?', 'What legal action do we take?', 'How do we protect remaining IP?', 'Should we accelerate new designs?'], realWorldCheck: ['IP protection in supplier contracts?', 'Trade secret safeguards?', 'Competitive intelligence?'] },
  { id: 31, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Key Person Dependency', frontDescription: 'Your critical SMB supplier\'s owner is hospitalized. Only they know the process.', details: ['No documented procedures', 'Family can\'t run business', 'Your orders in production', 'Uncertain return timeline'], prompts: ['Can we help document their process?', 'Is there another person who could learn?', 'Can we move orders elsewhere?', 'How do we support the family?'], realWorldCheck: ['Supplier key person risk assessment?', 'Knowledge transfer requirements?', 'Business interruption coverage?'] },
  { id: 32, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'SMB Cash Flow Crisis', frontDescription: 'Your SMB supplier can\'t make payroll. Production may halt tomorrow.', details: ['Bank refused credit line renewal', 'They\'re 3 weeks from delivery', 'No completed inventory to ship', 'Total exposure: $400K'], prompts: ['Can we prepay to keep them running?', 'Should we acquire them?', 'Can we take over production?', 'How do we secure our tooling?'], realWorldCheck: ['Supplier financial monitoring?', 'Prepayment risk policies?', 'Asset protection clauses?'] },
  { id: 33, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Family Business Succession', frontDescription: 'Your longtime supplier\'s children refuse to take over the business.', details: ['Owner retiring in 6 months', 'No plan to sell the business', 'Specialized capability hard to find', 'They produce 30% of your volume'], prompts: ['Can we help find a buyer?', 'Should we acquire them?', 'Can we transfer knowledge elsewhere?', 'How long to qualify alternatives?'], realWorldCheck: ['Supplier succession planning?', 'Transition support offers?', 'M&A capability?'] },
  { id: 34, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Natural Disaster Recovery', frontDescription: 'Your SMB supplier\'s facility destroyed by tornado. No insurance for equipment.', details: ['Total loss of specialized machinery', 'Equipment lead time is 9 months', 'They can\'t afford replacement', 'Only source for this component'], prompts: ['Can we fund their recovery?', 'Can we source equipment faster?', 'Do we have any usable inventory?', 'Can we redesign around this part?'], realWorldCheck: ['Supplier insurance requirements?', 'Emergency funding mechanisms?', 'Component redesign capability?'] },
  { id: 35, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Retirement Without Exit', frontDescription: 'Your SMB vendor announces retirement, closing in 90 days.', details: ['Specialized tooling you own is there', 'Recipes and processes undocumented', 'They refuse to sell business', 'Alternative vendors need 6+ months'], prompts: ['Can we extend their timeline?', 'How do we get our tooling?', 'Can we hire their employees?', 'What documentation can we get?'], realWorldCheck: ['Tooling ownership and access?', 'Process documentation requirements?', 'Non-compete/non-solicit terms?'] },
  { id: 36, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Cyber Attack on Unprotected SMB', frontDescription: 'Your SMB supplier has ransomware. No backups. Your data at risk.', details: ['They stored your CAD files', 'No IT staff or security tools', 'Can\'t afford ransom demand', 'Don\'t know what data was taken'], prompts: ['What data did they have?', 'Can we help with recovery?', 'How do we assess our exposure?', 'Should we notify our customers?'], realWorldCheck: ['Vendor security requirements?', 'Data handling agreements?', 'Cyber liability coverage?'] },
  { id: 37, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Immigration Enforcement', frontDescription: 'Immigration raid removes 60% of your SMB supplier\'s workforce.', details: ['Production halted immediately', 'Owner also detained', 'Community tensions high', 'Media covering story'], prompts: ['What\'s our public statement?', 'Can remaining staff run operations?', 'How long can we wait?', 'What\'s our backup plan?'], realWorldCheck: ['Supplier labor compliance audits?', 'Reputational risk management?', 'Alternative supplier readiness?'] },
  { id: 38, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Bank Loan Called', frontDescription: 'Your SMB supplier\'s bank calls loan due. Assets to be liquidated.', details: ['All inventory is collateral', 'Includes your work in progress', 'Liquidator won\'t negotiate', 'Timeline: 30 days'], prompts: ['Can we buy out the loan?', 'Can we purchase from liquidator?', 'How do we protect our IP/tooling?', 'What legal options do we have?'], realWorldCheck: ['Security interests in assets?', 'Supplier financial covenants?', 'Legal recourse for WIP?'] },
  { id: 39, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Divorce Disrupts Business', frontDescription: 'Your supplier\'s divorce is splitting ownership and halting decisions.', details: ['Both spouses need to sign orders', 'They won\'t communicate', 'Court proceedings ongoing', 'Business operations in limbo'], prompts: ['Can we get both parties to agree?', 'What decisions are blocked?', 'Can we help them separate business?', 'How do we protect our interests?'], realWorldCheck: ['Supplier governance structure?', 'Contract authority clauses?', 'Legal standby support?'] },
  { id: 40, category: 'smb', categoryLabel: 'SMB-Specific Challenge', title: 'Death of Owner', frontDescription: 'Your SMB supplier\'s owner dies suddenly. Estate in probate.', details: ['No designated successor', 'Staff unsure what to do', 'Bank accounts frozen', 'Outstanding orders pending'], prompts: ['Who can authorize shipments?', 'Can we help staff continue?', 'How do we work with estate?', 'What\'s our inventory position?'], realWorldCheck: ['Supplier succession documentation?', 'Estate planning requirements?', 'Emergency contact protocols?'] },
  { id: 41, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Vendor GDPR Violation', frontDescription: 'Your vendor is fined for GDPR violations involving your customer data.', details: ['They processed data outside EU', 'Your customers are demanding answers', 'Regulator may investigate you too', 'Contract said they were compliant'], prompts: ['What data was involved?', 'How do we notify customers?', 'What\'s our regulatory exposure?', 'How do we verify other vendors?'], realWorldCheck: ['DPA requirements in contracts?', 'Vendor compliance verification?', 'Data flow documentation?'] },
  { id: 42, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'SOX Audit Finding', frontDescription: 'Auditors find material weakness in vendor-run financial process.', details: ['Affects revenue recognition', 'Disclosure deadline in 2 weeks', 'Remediation complex and costly', 'Board notification required'], prompts: ['Can we remediate in time?', 'What\'s the disclosure language?', 'How do we explain to board?', 'Can we bring process in-house?'], realWorldCheck: ['SOX control documentation?', 'Vendor audit rights?', 'Material weakness insurance?'] },
  { id: 43, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'HIPAA Breach via Vendor', frontDescription: 'Your business associate exposes PHI through unsecured cloud storage.', details: ['10,000 patient records exposed', '60-day notification deadline', 'OCR investigation likely', 'Vendor lacks breach insurance'], prompts: ['How do we notify patients?', 'What support do we offer?', 'How do we handle media?', 'What\'s our OCR strategy?'], realWorldCheck: ['BAA requirements met?', 'Vendor security validation?', 'Breach notification procedures?'] },
  { id: 44, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Export Control Violation', frontDescription: 'Vendor shipped controlled technology to embargoed country.', details: ['Shipment used your export license', 'Appears to be deliberate evasion', 'BIS investigation initiated', 'Other customers may be affected'], prompts: ['How do we cooperate with BIS?', 'What\'s our legal exposure?', 'How do we audit other vendors?', 'Should we self-disclose?'], realWorldCheck: ['Export control due diligence?', 'Vendor compliance certifications?', 'Legal defense preparations?'] },
  { id: 45, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Modern Slavery Discovery', frontDescription: 'Audit finds forced labor conditions at your tier-3 supplier.', details: ['Workers from vulnerable populations', 'Supplier was not on your radar', 'NGO threatening media campaign', 'Customer contracts require clean supply chain'], prompts: ['How deep does this go?', 'What\'s our remediation plan?', 'How do we verify other tiers?', 'What\'s our public response?'], realWorldCheck: ['Supply chain transparency laws?', 'Tier-n audit programs?', 'Remediation support capability?'] },
  { id: 46, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Environmental Permit Revoked', frontDescription: 'Your supplier loses environmental permits. Production must halt.', details: ['Violations accumulated over years', 'No timeline for reinstatement', 'Only qualified supplier for this process', 'Moving production requires permits too'], prompts: ['Can we help them remediate?', 'Can we find alternative processes?', 'How do we handle orders in progress?', 'What\'s the permit timeline?'], realWorldCheck: ['Supplier environmental monitoring?', 'Permit contingency requirements?', 'Alternative process capability?'] },
  { id: 47, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'FDA Warning Letter', frontDescription: 'Your contract manufacturer receives FDA warning letter citing your products.', details: ['Production must stop', 'Products may need recall', 'Re-inspection timeline unknown', 'Other customers pulling business'], prompts: ['What products are affected?', 'Is recall necessary?', 'Can we move production?', 'How do we communicate with FDA?'], realWorldCheck: ['cGMP audit programs?', 'Quality agreement terms?', 'Regulatory liaison capability?'] },
  { id: 48, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Accessibility Lawsuit', frontDescription: 'Vendor\'s software is sued for ADA violations. You\'re named too.', details: ['Product widely deployed', 'Class action filed', 'Vendor claims it\'s your configuration', 'Remediation requires significant rework'], prompts: ['What\'s our legal strategy?', 'How do we allocate responsibility?', 'What does remediation cost?', 'How do we assess other tools?'], realWorldCheck: ['Vendor accessibility warranties?', 'Accessibility testing programs?', 'Indemnification coverage?'] },
  { id: 49, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Antitrust Investigation', frontDescription: 'Your vendor is raided for antitrust violations in your industry.', details: ['You may have benefited from practices', 'Document preservation notice received', 'Media speculating about customers', 'Vendor communications may be reviewed'], prompts: ['What communications did we have?', 'How do we preserve documents?', 'What\'s our legal exposure?', 'How do we respond to media?'], realWorldCheck: ['Antitrust compliance training?', 'Legal hold procedures?', 'Crisis communication plan?'] },
  { id: 50, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Sanctions Violation', frontDescription: 'Your vendor is added to OFAC sanctions list.', details: ['Must cease all dealings immediately', 'Payments in transit', 'Critical components in production', 'No warning given'], prompts: ['How do we stop payments?', 'Can we recover WIP?', 'How do we license wind-down?', 'What\'s our alternative source?'], realWorldCheck: ['Sanctions screening program?', 'License application procedures?', 'Payment system controls?'] }
];

// Demo wild cards (6)
const demoWildCards = [
  { id: 1, category: 'resource', categoryLabel: 'Resource Loss', title: 'Key Person Unavailable', description: 'Your subject matter expert for this vendor is on vacation in a remote area with no connectivity.', consider: ['Who else has this knowledge?', 'Where is it documented?', 'Can you reach them?'] },
  { id: 2, category: 'time', categoryLabel: 'Time Pressure', title: 'Board Meeting Tomorrow', description: 'The board wants a full briefing on this situation at tomorrow\'s meeting.', consider: ['What can you know by then?', 'What decisions do you need?', 'What are you asking for?'] },
  { id: 3, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Second Vendor Affected', description: 'Another critical vendor just called—they\'re affected by the same incident.', consider: ['What\'s the common cause?', 'How does this change priority?', 'What resources do you split?'] },
  { id: 4, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Customer Audit Demand', description: 'Your largest customer demands an immediate audit of your vendor management. They want proof of recovery in 24 hours.', consider: ['What evidence can you provide?', 'What promises are realistic?', 'Who communicates with them?'] },
  { id: 5, category: 'fog', categoryLabel: 'Information Fog', title: 'Conflicting Information', description: 'Vendor says 6 hours. Their support says 3 days. Social media says weeks.', consider: ['How do you decide with bad info?', 'What is your planning assumption?', 'How do you verify?'] },
  { id: 6, category: 'external', categoryLabel: 'External Shock', title: 'Concurrent Internal Crisis', description: 'While managing this vendor failure, your own facility experiences an unrelated incident.', consider: ['How do you split resources?', 'Which crisis takes priority?', 'Who leads each response?'] }
];

// Full wild cards (48 total)
const fullWildCards = [
  ...demoWildCards,
  { id: 7, category: 'resource', categoryLabel: 'Resource Loss', title: 'Crisis Team Exhausted', description: 'Your crisis team has been working 16-hour days for a week. Performance is degrading.', consider: ['How do you rotate staff?', 'What decisions can wait?', 'Who are your backup people?'] },
  { id: 8, category: 'resource', categoryLabel: 'Resource Loss', title: 'Budget Frozen', description: 'CFO just froze all discretionary spending pending review. Your recovery costs can\'t be approved.', consider: ['What can you do without spending?', 'What must be funded?', 'How do you get emergency approval?'] },
  { id: 9, category: 'resource', categoryLabel: 'Resource Loss', title: 'System Access Lost', description: 'Your incident management system is down. No access to contact lists, runbooks, or status tracking.', consider: ['Where are your backups?', 'Can you work on paper?', 'How do you track status?'] },
  { id: 10, category: 'resource', categoryLabel: 'Resource Loss', title: 'Legal Counsel Conflicted', description: 'Your law firm also represents the vendor. They must withdraw from helping you.', consider: ['Do you have backup counsel?', 'What decisions are stuck?', 'How fast can new counsel ramp?'] },
  { id: 11, category: 'resource', categoryLabel: 'Resource Loss', title: 'War Room Unavailable', description: 'Your crisis management center is being used for a facilities emergency.', consider: ['Where do you relocate?', 'Do you have the right technology?', 'How do you notify people?'] },
  { id: 12, category: 'resource', categoryLabel: 'Resource Loss', title: 'Insurance Denied', description: 'Your insurer denies coverage for this incident citing an exclusion.', consider: ['What\'s your appeal strategy?', 'How do you fund recovery?', 'What outside help do you need?'] },
  { id: 13, category: 'resource', categoryLabel: 'Resource Loss', title: 'Communication Channels Down', description: 'Your primary communication tools (email, Slack) are affected by this outage.', consider: ['How do you coordinate?', 'What\'s your backup channel?', 'How do you reach external parties?'] },
  { id: 14, category: 'resource', categoryLabel: 'Resource Loss', title: 'Procurement Team Gone', description: 'Your entire procurement team is at an offsite with poor connectivity.', consider: ['Who can approve purchases?', 'Who knows the vendors?', 'Can you get them back?'] },
  { id: 15, category: 'time', categoryLabel: 'Time Pressure', title: 'Product Launch Tomorrow', description: 'You have a major product launch tomorrow that depends on this vendor.', consider: ['Can you delay the launch?', 'What\'s the partial launch option?', 'What\'s the cost of delay?'] },
  { id: 16, category: 'time', categoryLabel: 'Time Pressure', title: 'Regulatory Deadline', description: 'You have a regulatory filing due in 48 hours that requires data from this vendor.', consider: ['Can you get an extension?', 'What\'s the penalty for missing?', 'Do you have any data?'] },
  { id: 17, category: 'time', categoryLabel: 'Time Pressure', title: 'End of Quarter', description: 'It\'s the last week of the quarter and this affects revenue recognition.', consider: ['What deals are at risk?', 'Can you close manually?', 'What\'s the revenue impact?'] },
  { id: 18, category: 'time', categoryLabel: 'Time Pressure', title: 'Holiday Weekend', description: 'This is happening before a 3-day holiday weekend.', consider: ['Who\'s available?', 'What can wait until Tuesday?', 'What must be done now?'] },
  { id: 19, category: 'time', categoryLabel: 'Time Pressure', title: 'Market Hours', description: 'Stock markets open in 4 hours and this is material information.', consider: ['What must you disclose?', 'Who prepares the statement?', 'What\'s investor relations doing?'] },
  { id: 20, category: 'time', categoryLabel: 'Time Pressure', title: 'Customer Contract Deadline', description: 'Your biggest customer\'s contract expires in 72 hours and this affects renewal.', consider: ['Can you get an extension?', 'What can you promise?', 'Who\'s in the negotiation?'] },
  { id: 21, category: 'time', categoryLabel: 'Time Pressure', title: 'Payroll Processing', description: 'Payroll must be processed in 24 hours and your payroll vendor is the one affected.', consider: ['Can you process manually?', 'Do you have the data?', 'What do you tell employees?'] },
  { id: 22, category: 'time', categoryLabel: 'Time Pressure', title: 'Evidence Destruction', description: 'Critical evidence of the incident may be overwritten in 4 hours.', consider: ['How do you preserve it?', 'Who has access?', 'What do you need most?'] },
  { id: 23, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Internal System Failure', description: 'The stress on your systems from the workaround causes your own system to fail.', consider: ['What\'s the new priority?', 'How do you handle both?', 'What do you triage?'] },
  { id: 24, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Customer Defection', description: 'Your largest customer announces they\'re moving to a competitor due to this incident.', consider: ['Can you save the account?', 'What would it take?', 'What do you tell other customers?'] },
  { id: 25, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Employee Resignation', description: 'Your incident commander just resigned, citing this situation as the last straw.', consider: ['Who takes over?', 'What knowledge walks out?', 'How do you transition?'] },
  { id: 26, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Backup Failure', description: 'When you try to activate your backup vendor, you discover they have capacity issues.', consider: ['What\'s your backup to the backup?', 'Can you get partial capacity?', 'How do you ration?'] },
  { id: 27, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Supply Chain Domino', description: 'Your backup supplier gets their materials from the same source that\'s affected.', consider: ['How deep does this go?', 'Where can you break the chain?', 'What don\'t you know?'] },
  { id: 28, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Partner Impact', description: 'Your distribution partner says they\'ll drop your products if this continues another week.', consider: ['What do they need from you?', 'Can you meet their timeline?', 'What\'s the replacement cost?'] },
  { id: 29, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Credit Rating Watch', description: 'Rating agency puts you on watch negative due to the operational disruption.', consider: ['What do you tell them?', 'What\'s the capital impact?', 'How do you restore confidence?'] },
  { id: 30, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Regulatory Inquiry', description: 'Regulator calls asking questions about your vendor oversight practices.', consider: ['Who responds?', 'What documentation do you have?', 'What shouldn\'t you say?'] },
  { id: 31, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Board Member Conflict', description: 'A board member has a significant investment in the vendor.', consider: ['How does this affect decisions?', 'What disclosures are needed?', 'Who makes the call?'] },
  { id: 32, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Union Involvement', description: 'The union is claiming this is a health and safety issue and threatening action.', consider: ['What are their concerns?', 'Who negotiates with them?', 'What are the contract terms?'] },
  { id: 33, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Executive Pressure', description: 'The CEO demands you fix this in 24 hours or they\'ll "find someone who can."', consider: ['What\'s realistic?', 'How do you manage up?', 'What help do you need?'] },
  { id: 34, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Investor Call', description: 'Your largest institutional investor wants an emergency call to discuss.', consider: ['Who takes the call?', 'What can you say?', 'What can\'t you say?'] },
  { id: 35, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Government Customer', description: 'Your government customer demands a formal briefing within 24 hours.', consider: ['Who has clearance?', 'What do they need to know?', 'What are the contract requirements?'] },
  { id: 36, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Internal Politics', description: 'Another business unit blames your team for the vendor selection that caused this.', consider: ['How do you handle it?', 'What\'s the documentation?', 'Who mediates?'] },
  { id: 37, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Whistleblower', description: 'An employee claims they warned about this vendor risk and were ignored.', consider: ['What\'s the record?', 'Who investigates?', 'What are the legal risks?'] },
  { id: 38, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'M&A Due Diligence', description: 'You\'re in M&A due diligence and this incident will appear in the data room.', consider: ['What\'s the deal impact?', 'How do you position it?', 'What do buyers need to know?'] },
  { id: 39, category: 'fog', categoryLabel: 'Information Fog', title: 'Vendor Non-Responsive', description: 'Your vendor has gone completely silent. No status updates, no returned calls.', consider: ['What do you assume?', 'How do you plan without info?', 'Who else can you contact?'] },
  { id: 40, category: 'fog', categoryLabel: 'Information Fog', title: 'Rumors Spreading', description: 'Inaccurate information about the incident is spreading on social media.', consider: ['Do you respond?', 'How do you correct it?', 'What\'s your official statement?'] },
  { id: 41, category: 'fog', categoryLabel: 'Information Fog', title: 'Scope Unknown', description: 'You still don\'t know the full scope of impact and stakeholders are demanding answers.', consider: ['What can you say?', 'How do you set expectations?', 'When will you know more?'] },
  { id: 42, category: 'fog', categoryLabel: 'Information Fog', title: 'Data Quality Issues', description: 'The data you have about this vendor\'s dependencies is outdated and unreliable.', consider: ['How do you verify?', 'What assumptions do you make?', 'How do you prevent this next time?'] },
  { id: 43, category: 'fog', categoryLabel: 'Information Fog', title: 'Language Barrier', description: 'The vendor\'s technical staff only speaks a language your team doesn\'t.', consider: ['How do you get translation?', 'What might get lost?', 'Who can help?'] },
  { id: 44, category: 'fog', categoryLabel: 'Information Fog', title: 'Contradictory Data', description: 'Your monitoring shows the service is down, but the vendor insists it\'s up.', consider: ['Who\'s right?', 'How do you test?', 'What\'s causing the discrepancy?'] },
  { id: 45, category: 'fog', categoryLabel: 'Information Fog', title: 'Historical Data Lost', description: 'You need historical data to assess impact, but logs were purged last month.', consider: ['What can you reconstruct?', 'Who else has records?', 'How do you estimate?'] },
  { id: 46, category: 'fog', categoryLabel: 'Information Fog', title: 'Multiple Root Causes', description: 'Investigation reveals several contributing factors, not a single root cause.', consider: ['How do you communicate this?', 'What do you fix first?', 'How do you prevent blame games?'] },
  { id: 47, category: 'external', categoryLabel: 'External Shock', title: 'Media Investigation', description: 'A journalist calls saying they\'re writing a story about your vendor practices.', consider: ['Do you participate?', 'Who\'s your spokesperson?', 'What\'s your key message?'] },
  { id: 48, category: 'external', categoryLabel: 'External Shock', title: 'Competitor Announcement', description: 'Your competitor announces they weren\'t affected by this incident and are taking market share.', consider: ['How did they avoid it?', 'What do you tell customers?', 'How do you respond publicly?'] }
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

  // Timer effect
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
    if (accessCode.startsWith('CS-DECK-') && accessCode.length >= 12) {
      setHasAccess(true);
      setAccessError('');
      setCurrentView('main');
    } else {
      setAccessError('Invalid access code. Please try again.');
    }
  };

  const drawRandomScenario = () => {
    const randomIndex = Math.floor(Math.random() * availableScenarios.length);
    setSelectedScenario(availableScenarios[randomIndex]);
    setIsFlipped(false);
    setCurrentWildCard(null);
    setCurrentView('scenario');
  };

  const drawWildCard = (category) => {
    const categoryCards = availableWildCards.filter(card => card.category === category);
    if (categoryCards.length > 0) {
      const randomIndex = Math.floor(Math.random() * categoryCards.length);
      setCurrentWildCard(categoryCards[randomIndex]);
      setSelectedWildCategory(category);
      setShowWildCardSelector(false);
    }
  };

  const closeWildCard = () => {
    setCurrentWildCard(null);
    setSelectedWildCategory(null);
  };

  const setTimer = () => {
    const mins = parseInt(timerInput) || 15;
    setTimerMinutes(mins);
    setTimerSeconds(0);
    setTimerRunning(false);
  };

  const renderHeader = () => (
    <div style={{ padding: '16px 24px', borderBottom: '1px solid #e5e5e5', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img src="https://continuitystrength.com/s/CS-Logo_Cropped-and-Transparent.png" alt="Continuity Strength" style={{ height: '36px' }} />
      <div style={{ display: 'flex', gap: '16px' }}>
        {currentView !== 'main' && (
          <button onClick={() => setCurrentView('main')} style={{ padding: '8px 16px', fontSize: '14px', backgroundColor: 'transparent', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer' }}>
            ← Back
          </button>
        )}
        {!hasAccess && (
          <button onClick={() => setCurrentView('access')} style={{ padding: '8px 16px', fontSize: '14px', backgroundColor: '#e86c3a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Enter Access Code
          </button>
        )}
      </div>
    </div>
  );

  const renderFooter = () => (
    <div style={{ padding: '24px', backgroundColor: '#1a1a1a', color: 'white', textAlign: 'center', marginTop: 'auto' }}>
      <div style={{ marginBottom: '8px' }}>
        <a href="https://www.continuitystrength.com/TPRM" style={{ color: '#e86c3a', textDecoration: 'none', fontWeight: '600' }}>www.ContinuityStrength.com/TPRM</a>
      </div>
      <div style={{ fontSize: '14px', color: '#888', marginBottom: '8px' }}>© Continuity Strength 2025</div>
      <div style={{ fontSize: '14px', color: '#888' }}>Contact us at <a href="mailto:info@ContinuityStrength.com" style={{ color: '#e86c3a', textDecoration: 'none' }}>info@ContinuityStrength.com</a></div>
    </div>
  );

  const renderMain = () => (
    <div style={{ flex: 1, padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px', textAlign: 'center' }}>Vendor Resilience Exercise Deck</h1>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '40px', textAlign: 'center' }}>
        {hasAccess ? '50 scenarios and 48 wild cards' : '3 demo scenarios (unlock full deck with access code)'}
      </p>
      
      <div style={{ display: 'flex', gap: '24px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={drawRandomScenario} style={{ padding: '16px 32px', fontSize: '16px', backgroundColor: '#296ecb', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          Draw Random Scenario
        </button>
        <button onClick={() => setCurrentView('guide')} style={{ padding: '16px 32px', fontSize: '16px', backgroundColor: 'white', color: '#333', border: '2px solid #ddd', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          Practitioner Guide
        </button>
      </div>

      <div style={{ width: '100%', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Scenario Index</h2>
        <div style={{ display: 'grid', gap: '12px' }}>
          {scenarioCategories.map(cat => (
            <div key={cat.id} style={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e5e5' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ color: '#296ecb' }}>{getCategoryIcon(cat.icon)}</span>
                <span style={{ fontWeight: '600' }}>{cat.label}</span>
                <span style={{ color: '#888', fontSize: '14px' }}>({cat.range})</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {availableScenarios.filter(s => s.category === cat.id).map(scenario => (
                  <button
                    key={scenario.id}
                    onClick={() => { setSelectedScenario(scenario); setIsFlipped(false); setCurrentWildCard(null); setCurrentView('scenario'); }}
                    style={{ padding: '6px 12px', fontSize: '13px', backgroundColor: '#f5f5f5', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    #{scenario.id}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderScenario = () => (
    <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column' }}>
      {/* Timer Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <input
            type="number"
            value={timerInput}
            onChange={(e) => setTimerInput(e.target.value)}
            style={{ width: '60px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', textAlign: 'center' }}
          />
          <span style={{ color: '#666' }}>min</span>
          <button onClick={setTimer} style={{ padding: '8px 12px', fontSize: '13px', backgroundColor: '#f5f5f5', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>Set</button>
          <button onClick={() => setTimerRunning(!timerRunning)} style={{ padding: '8px 12px', fontSize: '13px', backgroundColor: timerRunning ? '#f44336' : '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            {timerRunning ? 'Pause' : 'Start'}
          </button>
          <span style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'monospace', marginLeft: '8px' }}>
            {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
          </span>
        </div>
        <button onClick={() => setShowWildCardSelector(!showWildCardSelector)} style={{ padding: '10px 20px', fontSize: '14px', backgroundColor: '#e86c3a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
          + Add Wild Card
        </button>
      </div>

      {/* Wild Card Category Selector */}
      {showWildCardSelector && (
        <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <p style={{ marginBottom: '12px', fontWeight: '600' }}>Select Wild Card Category:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {wildCardCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => drawWildCard(cat.id)}
                style={{ padding: '8px 16px', fontSize: '13px', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <span style={{ color: '#e86c3a' }}>{getCategoryIcon(cat.icon)}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Cards Container - Side by Side */}
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', flex: 1 }}>
        {/* Scenario Card */}
        {selectedScenario && (
          <div style={{ flex: currentWildCard ? '0 0 48%' : '0 0 100%', maxWidth: currentWildCard ? '500px' : '600px', minWidth: '300px' }}>
            <div 
              onClick={() => setIsFlipped(!isFlipped)}
              style={{ 
                backgroundColor: 'white', 
                borderRadius: '12px', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
                cursor: 'pointer',
                minHeight: '500px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              {/* Favicon */}
              <div style={{ position: 'absolute', top: '16px', left: '16px', width: '32px', height: '32px', backgroundColor: '#e86c3a', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700', fontSize: '12px' }}>
                CS
              </div>

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {!isFlipped ? (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', marginLeft: '40px' }}>
                      <span style={{ color: '#296ecb' }}>{getCategoryIcon(selectedScenario.category)}</span>
                      <span style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>{selectedScenario.categoryLabel}</span>
                    </div>
                    <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#296ecb' }}>{selectedScenario.title}</h2>
                    <p style={{ fontSize: '16px', color: '#333', marginBottom: '24px', lineHeight: '1.6' }}>{selectedScenario.frontDescription}</p>
                    <div style={{ marginBottom: '24px' }}>
                      <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#666' }}>SITUATION DETAILS:</h3>
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        {selectedScenario.details.map((detail, i) => (
                          <li key={i} style={{ marginBottom: '6px', color: '#444' }}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <p style={{ fontSize: '14px', color: '#888', marginTop: 'auto', textAlign: 'center' }}>Click to flip</p>
                  </>
                ) : (
                  <>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#666', marginTop: '24px' }}>DISCUSSION PROMPTS:</h3>
                    <ul style={{ margin: '0 0 24px 0', paddingLeft: '20px' }}>
                      {selectedScenario.prompts.map((prompt, i) => (
                        <li key={i} style={{ marginBottom: '8px', color: '#333' }}>{prompt}</li>
                      ))}
                    </ul>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#666' }}>REAL-WORLD CHECK:</h3>
                    <ul style={{ margin: 0, paddingLeft: '20px' }}>
                      {selectedScenario.realWorldCheck.map((check, i) => (
                        <li key={i} style={{ marginBottom: '8px', color: '#333' }}>{check}</li>
                      ))}
                    </ul>
                    <p style={{ fontSize: '14px', color: '#888', marginTop: 'auto', textAlign: 'center' }}>Click to flip back</p>
                  </>
                )}
              </div>
              <div style={{ padding: '12px', borderTop: '1px solid #e5e5e5', textAlign: 'center', fontSize: '12px', color: '#888' }}>
                © Continuity Strength 2025
              </div>
            </div>
          </div>
        )}

        {/* Wild Card */}
        {currentWildCard && (
          <div style={{ flex: '0 0 48%', maxWidth: '500px', minWidth: '300px' }}>
            <div style={{ 
              backgroundColor: '#fff8f6', 
              borderRadius: '12px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
              border: '2px solid #e86c3a',
              minHeight: '500px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              {/* Close button */}
              <button 
                onClick={closeWildCard}
                style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#888' }}
              >
                ×
              </button>

              {/* Favicon */}
              <div style={{ position: 'absolute', top: '16px', left: '16px', width: '32px', height: '32px', backgroundColor: '#e86c3a', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700', fontSize: '12px' }}>
                CS
              </div>

              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', marginLeft: '40px' }}>
                  <span style={{ color: '#e86c3a' }}>{getCategoryIcon(currentWildCard.category)}</span>
                  <span style={{ fontSize: '12px', color: '#e86c3a', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>WILD CARD</span>
                </div>
                <p style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>{currentWildCard.categoryLabel}</p>
                <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: '#e86c3a' }}>{currentWildCard.title}</h2>
                <p style={{ fontSize: '15px', color: '#333', marginBottom: '24px', lineHeight: '1.6' }}>{currentWildCard.description}</p>
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#666' }}>CONSIDER:</h3>
                  <ul style={{ margin: 0, paddingLeft: '20px' }}>
                    {currentWildCard.consider.map((item, i) => (
                      <li key={i} style={{ marginBottom: '6px', color: '#444' }}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={() => drawWildCard(selectedWildCategory)} 
                    style={{ flex: 1, padding: '10px', fontSize: '13px', backgroundColor: '#e86c3a', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                  >
                    Draw Another
                  </button>
                </div>
              </div>
              <div style={{ padding: '12px', borderTop: '1px solid #f5e0dc', textAlign: 'center', fontSize: '12px', color: '#888' }}>
                © Continuity Strength 2025
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
        <button onClick={drawRandomScenario} style={{ padding: '12px 24px', fontSize: '14px', backgroundColor: '#296ecb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
          Draw New Scenario
        </button>
      </div>
    </div>
  );

  const renderGuide = () => (
    <div style={{ flex: 1, padding: '40px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <img src="https://continuitystrength.com/s/CS-Logo_Cropped-and-Transparent.png" alt="Continuity Strength" style={{ height: '40px', marginBottom: '24px' }} />
      <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px' }}>Practitioner Guide</h1>
      
      <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', marginBottom: '24px', border: '1px solid #e5e5e5' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>How to Use This Deck</h2>
        <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li style={{ marginBottom: '12px' }}><strong>Set the Stage:</strong> Choose a scenario that's relevant to your organization's vendor landscape.</li>
          <li style={{ marginBottom: '12px' }}><strong>Start the Timer:</strong> Give your team 15-20 minutes to work through the scenario.</li>
          <li style={{ marginBottom: '12px' }}><strong>Add Complications:</strong> Use wild cards to increase difficulty and test adaptability.</li>
          <li style={{ marginBottom: '12px' }}><strong>Discuss & Document:</strong> Capture gaps, action items, and lessons learned.</li>
          <li style={{ marginBottom: '12px' }}><strong>Follow Up:</strong> Assign owners to address identified gaps.</li>
        </ol>
      </div>

      <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', marginBottom: '24px', border: '1px solid #e5e5e5' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Facilitation Tips</h2>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li style={{ marginBottom: '8px' }}>Encourage "what if" thinking</li>
          <li style={{ marginBottom: '8px' }}>Challenge assumptions about vendor capabilities</li>
          <li style={{ marginBottom: '8px' }}>Document specific action items, not just discussions</li>
          <li style={{ marginBottom: '8px' }}>Include diverse perspectives (IT, legal, business)</li>
          <li style={{ marginBottom: '8px' }}>Time-box discussions to maintain energy</li>
        </ul>
      </div>

      <div style={{ backgroundColor: '#fff8f6', padding: '24px', borderRadius: '8px', border: '2px solid #e86c3a' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#e86c3a' }}>Need Help Facilitating?</h2>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
          Continuity Strength offers facilitated tabletop exercises using these scenarios. We bring the expertise, you bring the team.
        </p>
        <a href="http://continuitystrength.com/buycards" style={{ color: '#e86c3a', fontWeight: '600' }}>Learn more →</a>
      </div>
    </div>
  );

  const renderAccessEntry = () => (
    <div style={{ flex: 1, padding: '40px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '400px', width: '100%', backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <img src="https://continuitystrength.com/s/CS-Logo_Cropped-and-Transparent.png" alt="Continuity Strength" style={{ height: '32px', marginBottom: '16px' }} />
          <h2 style={{ margin: '0 0 8px 0', fontSize: '24px' }}>Enter Access Code</h2>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Unlock the full deck with 50 scenarios and 48 wild cards.</p>
        </div>
        <input 
          type="text" 
          value={accessCode} 
          onChange={(e) => setAccessCode(e.target.value.toUpperCase())} 
          placeholder="CS-DECK-XXXX" 
          style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2px solid #ddd', borderRadius: '8px', marginBottom: '16px', textAlign: 'center', letterSpacing: '2px', boxSizing: 'border-box' }} 
        />
        {accessError && <p style={{ color: '#f44336', textAlign: 'center', marginBottom: '16px', fontSize: '14px' }}>{accessError}</p>}
        <button onClick={validateAccessCode} style={{ width: '100%', padding: '14px 24px', fontSize: '15px', backgroundColor: '#e86c3a', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Unlock Full Deck</button>
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <p style={{ color: '#666', marginBottom: '8px', fontSize: '14px' }}>Don't have an access code?</p>
          <a href="http://continuitystrength.com/buycards" style={{ color: '#e86c3a', fontWeight: '600', fontSize: '14px' }}>Purchase the full deck →</a>
        </div>
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

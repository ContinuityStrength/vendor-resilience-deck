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
    id: 31,
    category: 'smb',
    categoryLabel: 'SMB Vendor Failure',
    title: 'Vendor Owner Hospitalized',
    frontDescription: 'Your critical SMB vendor owner is hospitalized unexpectedly. No succession plan exists. Operations halted.',
    details: ['Owner handled all key relationships', 'No documented processes', 'Staff unsure how to proceed', 'Orders pending delivery this week'],
    prompts: ['Who at the vendor can we work with?', 'Can their staff continue without owner?', 'How quickly can we activate alternates?', 'What support can we provide?'],
    realWorldCheck: ['Which SMB vendors have succession plans?', 'Key person dependencies?', 'Whether vendor processes are documented?']
  },
  {
    id: 41,
    category: 'compliance',
    categoryLabel: 'Regulatory/Compliance',
    title: 'Vendor Fails DORA Audit',
    frontDescription: 'Your critical vendor cannot provide required operational resilience documentation. Regulators are asking.',
    details: ['Vendor has no documented BCP or IRP', 'Regulator wants evidence in 5 business days', 'Vendor serves 25% of customer base', 'Switching vendors takes 6+ months'],
    prompts: ['Can we help vendor create documentation?', 'What evidence can we provide regulators?', 'Do we accept risk or begin transition?', 'How do we prevent this with other vendors?'],
    realWorldCheck: ['Which vendors have audit-ready documentation?', 'Gaps in your vendor resilience evidence?', 'Remediation timelines for non-compliant vendors?']
  }
];

// Full scenarios (50 total) - PART 1: Scenarios 1-25
const fullScenariosP1 = [
  // Cyber (1-10)
  { id: 1, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Payment Processor Ransomware', frontDescription: 'Your payment processing vendor reports a ransomware attack. All transactions are offline.', details: ['Vendor expects 72-hour minimum outage', '40% of your transactions flow through them', 'Customer support lines overwhelmed', 'Media is reporting the incident'], prompts: ['Do we have an alternate payment processor under contract?', 'How do we communicate with customers?', 'What is our financial exposure per hour?', 'Who has authority to activate backup vendors?'], realWorldCheck: ['Cyber insurance coverage?', 'Documented incident response plan?', 'Tested recovery procedures?'] },
  { id: 2, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Cloud Provider Data Breach', frontDescription: 'Your cloud hosting provider suffers a data breach exposing customer PII stored in their environment.', details: ['Breach occurred 3 weeks ago, just disclosed', 'Uncertain which data was accessed', 'Regulatory notification deadlines approaching', 'Media inquiries already coming in'], prompts: ['What customer data did we store there?', 'Who leads our breach response?', 'What are our notification obligations?', 'How do we communicate with affected customers?'], realWorldCheck: ['Data inventory for cloud providers?', 'Breach notification procedures?', 'Cyber liability coverage?'] },
  { id: 3, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'HR System Compromise', frontDescription: 'Your HR and payroll vendor reports unauthorized access to employee records including SSNs and bank details.', details: ['All current and former employees affected', 'Includes executive compensation data', 'Vendor downplaying severity', 'Employees already posting on social media'], prompts: ['How do we communicate with employees?', 'What credit monitoring will we offer?', 'What is our legal exposure?', 'How do we handle media inquiries?'], realWorldCheck: ['Employee data protection policies?', 'Vendor security certifications current?', 'D&O insurance implications?'] },
  { id: 4, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Supply Chain Software Attack', frontDescription: 'Malicious code discovered in a routine software update from your trusted ERP vendor.', details: ['Update was auto-installed across systems', 'Backdoor allows remote access', 'Unknown how long it was active', 'Vendor investigating but no timeline'], prompts: ['Which systems received the update?', 'Can we isolate affected systems?', 'How do we verify system integrity?', 'What forensics capability do we have?'], realWorldCheck: ['Software supply chain controls?', 'Vendor code signing practices?', 'Incident response retainer in place?'] },
  { id: 5, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Email Security Outage', frontDescription: 'Your email security vendor experiences complete service failure. All filtering is offline.', details: ['Spam and phishing flooding inboxes', 'Business communications disrupted', 'Remote workers most affected', 'No ETA for restoration'], prompts: ['How do we warn employees?', 'Can we block email entirely?', 'What critical communications are stuck?', 'Do we have backup filtering?'], realWorldCheck: ['Email continuity plans?', 'Alternative communication channels?', 'SLA remedies available?'] },
  { id: 6, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'IoT Device Vulnerability', frontDescription: 'Critical vulnerability discovered in IoT devices from your building management vendor. Exploit code is public.', details: ['Devices control HVAC and access systems', 'Patch not available yet', 'Devices cannot be easily isolated', 'Affects multiple facilities'], prompts: ['How many devices are affected?', 'Can we implement compensating controls?', 'What is the physical security risk?', 'Should we replace devices entirely?'], realWorldCheck: ['IoT inventory and segmentation?', 'Vendor patch SLAs?', 'Physical security backup procedures?'] },
  { id: 7, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Authentication Provider Down', frontDescription: 'Your single sign-on provider experiences global outage. Employees locked out of all systems.', details: ['Customer-facing apps also inaccessible', 'Outage affects thousands of companies', 'Provider communications minimal', 'Workarounds creating security gaps'], prompts: ['What break-glass procedures exist?', 'Which systems have local authentication?', 'How do we serve customers?', 'What is our manual workaround?'], realWorldCheck: ['SSO dependency mapping?', 'Backup authentication methods?', 'Break-glass procedures tested?'] },
  { id: 8, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Vendor Insider Threat', frontDescription: 'A vendor employee with privileged access to your systems is caught exfiltrating proprietary data.', details: ['Product roadmaps and pricing accessed', 'Data may have been sold to competitor', 'Vendor minimizing the incident', 'Legal action being considered'], prompts: ['What data was accessed?', 'How do we preserve evidence?', 'What legal action is appropriate?', 'How do we prevent future access?'], realWorldCheck: ['Vendor background check requirements?', 'Access logging and monitoring?', 'NDA enforcement options?'] },
  { id: 9, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'DDoS Attack on Vendor', frontDescription: 'Your critical SaaS vendor is under sustained DDoS attack. Service degraded for 48+ hours.', details: ['Intermittent access frustrating users', 'Vendor says attack is ongoing', 'Competitors not affected', 'Customer complaints escalating'], prompts: ['Can we cache critical data locally?', 'How do we communicate with users?', 'What manual processes can we use?', 'Should we consider switching vendors?'], realWorldCheck: ['Vendor DDoS protection?', 'Service redundancy options?', 'Business continuity for SaaS outages?'] },
  { id: 10, category: 'cyber', categoryLabel: 'Vendor Cyber Incident', title: 'Third-Party API Breach', frontDescription: 'A vendor API integration is exploited, allowing unauthorized access to your customer database.', details: ['API keys were not rotated', 'Thousands of records accessed', 'Vendor blames your implementation', 'Breach discovered by security researcher'], prompts: ['How do we determine scope?', 'What immediate containment is needed?', 'Who is liable for the breach?', 'How do we communicate with customers?'], realWorldCheck: ['API security practices?', 'Key rotation policies?', 'Shared responsibility agreements?'] },
  
  // Operational (11-20)
  { id: 11, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Logistics Partner Strike', frontDescription: 'Your primary logistics partner drivers go on strike. All deliveries halt immediately.', details: ['Strike expected to last 2+ weeks', 'Peak season with 3x normal volume', 'Perishable goods in transit', 'Competitors also affected'], prompts: ['What inventory is currently in transit?', 'Do we have secondary logistics contracts?', 'Which customers get priority?', 'Can we use customer pickup options?'], realWorldCheck: ['Alternative carrier contracts?', 'Strike contingency plans?', 'Customer communication templates?'] },
  { id: 12, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Manufacturing Quality Escape', frontDescription: 'Your contract manufacturer shipped defective products for 3 months. Safety recall required.', details: ['50,000 units in market affected', 'Root cause still unknown', 'Manufacturer claims specs were followed', 'Regulatory notification required'], prompts: ['How do we identify affected units?', 'What is our recall strategy?', 'Who bears the cost?', 'How do we prevent customer injuries?'], realWorldCheck: ['Product liability insurance?', 'Quality audit records?', 'Recall cost allocation in contract?'] },
  { id: 13, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Data Center Cooling Failure', frontDescription: 'Your colocation provider cooling system fails. Servers overheating, emergency shutdown imminent.', details: ['Facility at critical temperature', 'Your DR site is same provider', 'Generator fuel running low', 'Other customers evacuating equipment'], prompts: ['What is our graceful shutdown procedure?', 'Can we failover to cloud?', 'Which systems are most critical?', 'How do we communicate the outage?'], realWorldCheck: ['Geographic diversity of infrastructure?', 'Warm standby capabilities?', 'Data backup verification?'] },
  { id: 14, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Cleaning Service Contamination', frontDescription: 'Facility cleaning vendor used wrong chemicals, contaminating production area.', details: ['Three production lines affected', 'Products must be destroyed', '2-week decontamination required', 'FDA notification required'], prompts: ['How do we prevent product shipment?', 'Can we shift to other facilities?', 'What is contamination response?', 'How do we communicate with regulators?'], realWorldCheck: ['Vendor insurance requirements?', 'Chemical handling protocols?', 'Regulatory reporting timelines?'] },
  { id: 15, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Security Guard No-Show', frontDescription: 'Security vendor fails to staff overnight shift. Facility unsecured for 8 hours.', details: ['Discovered when day shift arrives', 'Loading dock was open', 'High-value inventory present', 'Unknown if theft occurred'], prompts: ['How do we verify nothing was taken?', 'What incident documentation is needed?', 'Should we close facility for audit?', 'What backup security exists?'], realWorldCheck: ['Security vendor SLAs?', 'Backup security arrangements?', 'Insurance for theft and loss?'] },
  { id: 16, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Telecom Network Outage', frontDescription: 'Your telecommunications provider has regional network failure. Voice and data circuits down.', details: ['Headquarters and 3 branches affected', 'Provider estimates 24-hour repair', 'No cellular backup configured', 'Customer calls going unanswered'], prompts: ['How do employees communicate?', 'How do customers reach us?', 'What transactions are frozen?', 'Can we work from other locations?'], realWorldCheck: ['Telecom redundancy in place?', 'Cellular backup plans?', 'Customer communication alternatives?'] },
  { id: 17, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Catering Food Safety Incident', frontDescription: 'Multiple employees sick after vendor-catered company event. Health department investigating.', details: ['27 employees affected', 'Three hospitalized', 'Event was mandatory attendance', 'Media asking questions'], prompts: ['How do we support affected employees?', 'What documentation do we need?', 'How do we communicate internally?', 'What is our media response?'], realWorldCheck: ['Event liability coverage?', 'Vendor health certifications?', 'Workers comp implications?'] },
  { id: 18, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Print Vendor Data Leak', frontDescription: 'Your print and mail vendor sent customer statements to wrong addresses.', details: ['2,000 customers affected', 'Statements contain account numbers', 'Some went to completely wrong people', 'Vendor has history of issues'], prompts: ['How do we notify affected customers?', 'What remediation do we offer?', 'How do we recall misdirected mail?', 'Should we terminate the vendor?'], realWorldCheck: ['Vendor E&O coverage?', 'Customer notification requirements?', 'Regulatory reporting obligations?'] },
  { id: 19, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'HVAC Contractor Floods Server Room', frontDescription: 'HVAC maintenance error causes water damage to primary server room.', details: ['Primary and backup servers affected', 'Water damage still being assessed', 'Building systems also impacted', 'Insurance adjuster en route'], prompts: ['What data was on local servers?', 'Can we operate from cloud backup?', 'How do we document damage?', 'What is replacement timeline?'], realWorldCheck: ['Equipment insurance coverage?', 'Data backup and recovery tested?', 'Vendor liability limits adequate?'] },
  { id: 20, category: 'operational', categoryLabel: 'Vendor Operational Failure', title: 'Staffing Agency Compliance Failure', frontDescription: 'Staffing agency failed to complete background checks on temporary workers in sensitive areas.', details: ['12 temps working without clearance', 'One has disqualifying history', 'Regulatory compliance at risk', 'Agency minimizing exposure'], prompts: ['Which temps are affected?', 'What access did they have?', 'How do we notify regulators?', 'What is our remediation plan?'], realWorldCheck: ['Temp worker verification policies?', 'Agency audit requirements?', 'Regulatory penalties exposure?'] },
  
  // Supply Chain (21-25)
  { id: 21, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Port Congestion Crisis', frontDescription: 'Major port congestion delays inbound shipments by 4-6 weeks. Peak season approaching.', details: ['Container ships anchored offshore', '60% of inventory in transit', 'Air freight cost prohibitive', 'Competitors facing same issue'], prompts: ['Which products will stock out?', 'Can we air freight critical items?', 'How do we allocate inventory?', 'What customer communication is needed?'], realWorldCheck: ['Supply chain insurance?', 'Alternative port arrangements?', 'Customer contract flexibility?'] },
  { id: 22, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Rare Earth Export Ban', frontDescription: 'New export restrictions cut off supply of critical rare earth materials with no domestic alternative.', details: ['Current inventory lasts 6 weeks', 'Product redesign would take 18 months', 'Ban effective immediately', 'Competitors equally affected'], prompts: ['Can we source from other countries?', 'What is our inventory rationing plan?', 'Which products do we prioritize?', 'Can we acquire existing stockpiles?'], realWorldCheck: ['Geopolitical risk assessments?', 'Material substitution research?', 'Long-term supply contracts?'] },
  { id: 23, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Freight Carrier Bankruptcy', frontDescription: 'Your primary freight carrier files bankruptcy and ceases operations immediately.', details: ['Shipments in transit stranded', 'Prepaid freight unrecoverable', 'Peak season capacity tight', 'Carrier had lowest rates'], prompts: ['Where are our shipments now?', 'How do we recover stranded goods?', 'What backup carriers can we use?', 'How do we absorb rate increases?'], realWorldCheck: ['Carrier financial monitoring?', 'Transportation contract terms?', 'Prepayment risk policies?'] },
  { id: 24, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Agricultural Commodity Shortage', frontDescription: 'Disease outbreak destroys 40% of key agricultural input. Global shortage expected for 2 years.', details: ['Commodity prices already spiking', 'Alternative ingredients change product', 'Customer taste expectations at risk', 'All competitors affected'], prompts: ['Can we reformulate products?', 'How do we secure remaining supply?', 'What price increases do we pass on?', 'How do we communicate changes?'], realWorldCheck: ['Commodity hedging in place?', 'Formula flexibility?', 'Long-term supplier relationships?'] },
  { id: 25, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Trade Tariff Shock', frontDescription: 'New tariffs increase import costs by 25% overnight. Competitor sources domestically.', details: ['Affects 70% of your BOM', 'Passing costs loses customers', 'Absorbing costs loses margin', 'Domestic alternatives limited'], prompts: ['Can we shift to domestic suppliers?', 'What is our pricing strategy?', 'Which products most affected?', 'How do we communicate increases?'], realWorldCheck: ['Tariff exclusion applications?', 'Supplier country diversification?', 'Customer contract price clauses?'] },
]; 
// PART 2: Scenarios 26-50 and All Wild Cards

// Continue scenarios array from Part 1
const fullScenariosP2 = [
  // Supply Chain continued (26-30)
  { id: 26, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Supplier Acquisition by Competitor', frontDescription: 'Your critical supplier is acquired by your largest competitor. Supply termination expected.', details: ['90-day termination notice received', 'Alternative qualification takes 12 months', 'Pricing already increasing', 'Critical component with no substitute'], prompts: ['Can we fast-track new suppliers?', 'Should we stockpile inventory?', 'Can we acquire another supplier?', 'What is our redesign timeline?'], realWorldCheck: ['Supplier market concentration?', 'Change of control clauses?', 'Strategic supplier agreements?'] },
  { id: 27, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Conflict Mineral Violation', frontDescription: 'Audit reveals conflict minerals in supply chain despite vendor certifications.', details: ['Vendor provided false documentation', 'Affects products sold to government', 'Debarment risk significant', 'Public disclosure required'], prompts: ['How do we verify other suppliers?', 'What is our remediation plan?', 'How do we notify customers?', 'What legal action against vendor?'], realWorldCheck: ['Supply chain due diligence?', 'Vendor audit programs?', 'Conflict mineral compliance?'] },
  { id: 28, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Pandemic Factory Closure', frontDescription: 'Disease outbreak forces extended closure of supplier factory. Duration unknown.', details: ['Region under strict lockdown', 'No remote work possible', 'Other suppliers in same region', 'Could last weeks to months'], prompts: ['What is our inventory runway?', 'Can suppliers in other regions help?', 'How do we ration supply?', 'What products do we discontinue?'], realWorldCheck: ['Geographic supplier diversity?', 'Pandemic clauses in contracts?', 'Force majeure definitions?'] },
  { id: 29, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'Energy Price Spike', frontDescription: 'Energy costs triple for suppliers who demand immediate price increases or will halt production.', details: ['Affects all suppliers in region', 'Your contracts prohibit mid-term increases', 'Some threatening to stop shipments', 'Customer contracts have fixed pricing'], prompts: ['Which suppliers are most critical?', 'Can we help with energy costs?', 'How do we renegotiate contracts?', 'What margin can we absorb?'], realWorldCheck: ['Price adjustment mechanisms?', 'Supplier financial monitoring?', 'Energy hedging for suppliers?'] },
  { id: 30, category: 'supply', categoryLabel: 'Supply Chain Disruption', title: 'IP Theft by Supplier', frontDescription: 'Supplier employee steals designs and starts competing business selling copies at lower prices.', details: ['Copies appearing in market', 'Supplier denies responsibility', 'Legal action will take years', 'Customers asking about alternatives'], prompts: ['How do we differentiate from copies?', 'What legal action do we take?', 'How do we protect remaining IP?', 'Should we accelerate new designs?'], realWorldCheck: ['IP protection in contracts?', 'Trade secret safeguards?', 'Competitive intelligence monitoring?'] },
  
  // SMB (31-40)
  { id: 31, category: 'smb', categoryLabel: 'SMB Vendor Failure', title: 'Vendor Owner Hospitalized', frontDescription: 'Your critical SMB vendor owner is hospitalized unexpectedly. No succession plan exists.', details: ['Owner handled all key relationships', 'No documented processes', 'Staff unsure how to proceed', 'Orders pending delivery this week'], prompts: ['Who at vendor can we work with?', 'Can their staff continue?', 'How quickly can we find alternates?', 'What support can we provide?'], realWorldCheck: ['SMB vendor succession plans?', 'Key person dependencies mapped?', 'Vendor process documentation?'] },
  { id: 32, category: 'smb', categoryLabel: 'SMB Vendor Failure', title: 'SMB Cash Flow Crisis', frontDescription: 'Your SMB supplier cannot make payroll. Production may halt tomorrow.', details: ['Bank refused credit line renewal', 'Three weeks from delivery', 'No completed inventory to ship', 'Total exposure is $400K'], prompts: ['Can we prepay to keep them running?', 'Should we acquire them?', 'Can we take over production?', 'How do we secure our tooling?'], realWorldCheck: ['Supplier financial monitoring?', 'Prepayment risk policies?', 'Asset protection clauses?'] },
  { id: 33, category: 'smb', categoryLabel: 'SMB Vendor Failure', title: 'Family Business Succession Crisis', frontDescription: 'Your longtime supplier children refuse to take over. Owner retiring in 6 months.', details: ['No plan to sell business', 'Specialized capability hard to find', 'They produce 30% of your volume', 'Owner health is declining'], prompts: ['Can we help find a buyer?', 'Should we acquire them?', 'Can we transfer knowledge elsewhere?', 'How long to qualify alternatives?'], realWorldCheck: ['Supplier succession monitoring?', 'M&A capability?', 'Knowledge transfer requirements?'] },
  { id: 34, category: 'smb', categoryLabel: 'SMB Vendor Failure', title: 'Natural Disaster Destroys Facility', frontDescription: 'Tornado destroys SMB supplier facility. No insurance for specialized equipment.', details: ['Total loss of machinery', 'Equipment lead time 9 months', 'They cannot afford replacement', 'Only source for this component'], prompts: ['Can we fund their recovery?', 'Can we source equipment faster?', 'Do we have usable inventory?', 'Can we redesign around this part?'], realWorldCheck: ['Supplier insurance requirements?', 'Emergency funding mechanisms?', 'Component redesign capability?'] },
  { id: 35, category: 'smb', categoryLabel: 'SMB Vendor Failure', title: 'Sudden Retirement Closure', frontDescription: 'SMB vendor announces retirement, closing in 90 days. Refuses to sell business.', details: ['Your tooling is at their facility', 'Processes undocumented', 'Alternative vendors need 6 months', 'Key employees looking for jobs'], prompts: ['Can we extend their timeline?', 'How do we get our tooling?', 'Can we hire their employees?', 'What documentation can we get?'], realWorldCheck: ['Tooling ownership and access?', 'Process documentation requirements?', 'Employee non-solicit terms?'] },
  { id: 36, category: 'smb', categoryLabel: 'SMB Vendor Failure', title: 'Ransomware Hits Unprotected SMB', frontDescription: 'Your SMB supplier has ransomware. No backups. They stored your CAD files.', details: ['No IT security in place', 'Cannot afford ransom', 'Your designs may be lost', 'Unknown if data was exfiltrated'], prompts: ['What data did they have?', 'Can we help with recovery?', 'How do we assess our exposure?', 'Should we notify our customers?'], realWorldCheck: ['Vendor security requirements?', 'Data handling agreements?', 'Cyber liability coverage?'] },
  { id: 37, category: 'smb', categoryLabel: 'SMB Vendor Failure', title: 'Immigration Enforcement Action', frontDescription: 'Immigration raid removes 60% of SMB supplier workforce. Production halted.', details: ['Owner also detained', 'Community tensions high', 'Media covering the story', 'Political sensitivities involved'], prompts: ['What is our public statement?', 'Can remaining staff operate?', 'How long can we wait?', 'What is our backup plan?'], realWorldCheck: ['Supplier labor compliance audits?', 'Reputational risk management?', 'Alternative supplier readiness?'] },
  { id: 38, category: 'smb', categoryLabel: 'SMB Vendor Failure', title: 'Bank Calls Loan Due', frontDescription: 'Your SMB supplier bank calls loan due. Assets including your WIP to be liquidated.', details: ['All inventory is collateral', 'Liquidator will not negotiate', 'Timeline is 30 days', 'Your tooling also at risk'], prompts: ['Can we buy out the loan?', 'Can we purchase from liquidator?', 'How do we protect our IP/tooling?', 'What legal options do we have?'], realWorldCheck: ['Security interests documented?', 'Supplier financial covenants?', 'Legal recourse for WIP?'] },
  { id: 39, category: 'smb', categoryLabel: 'SMB Vendor Failure', title: 'Divorce Disrupts Business', frontDescription: 'Your supplier owners divorcing. Both must sign but refuse to communicate.', details: ['Business decisions frozen', 'Court proceedings ongoing', 'Operations in limbo', 'Employees leaving'], prompts: ['Can we get both to agree?', 'What decisions are blocked?', 'Can we help separate business?', 'How do we protect our interests?'], realWorldCheck: ['Supplier governance structure?', 'Contract authority clauses?', 'Legal standby support?'] },
  { id: 40, category: 'smb', categoryLabel: 'SMB Vendor Failure', title: 'Sudden Death of Owner', frontDescription: 'Your SMB supplier owner dies suddenly. Estate in probate, no clear successor.', details: ['No designated successor', 'Staff unsure what to do', 'Bank accounts frozen', 'Orders in production'], prompts: ['Who can authorize shipments?', 'Can we help staff continue?', 'How do we work with estate?', 'What is our inventory position?'], realWorldCheck: ['Supplier succession documentation?', 'Estate planning requirements?', 'Emergency contact protocols?'] },
  
  // Compliance (41-50)
  { id: 41, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Vendor Fails DORA Audit', frontDescription: 'Your critical vendor cannot provide required operational resilience documentation.', details: ['No documented BCP or IRP', 'Regulator wants evidence in 5 days', 'Vendor serves 25% of customers', 'Switching takes 6+ months'], prompts: ['Can we help vendor create docs?', 'What evidence can we provide?', 'Do we accept risk or transition?', 'How do we prevent with other vendors?'], realWorldCheck: ['Vendor audit-ready documentation?', 'Resilience evidence gaps?', 'Remediation timelines?'] },
  { id: 42, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'GDPR Violation by Vendor', frontDescription: 'Your vendor fined for GDPR violations involving your customer data processed outside EU.', details: ['Customers demanding answers', 'Regulator may investigate you', 'Contract said they were compliant', 'Notification deadline approaching'], prompts: ['What data was involved?', 'How do we notify customers?', 'What is our regulatory exposure?', 'How do we verify other vendors?'], realWorldCheck: ['DPA requirements in contracts?', 'Vendor compliance verification?', 'Data flow documentation?'] },
  { id: 43, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'SOX Audit Material Weakness', frontDescription: 'Auditors find material weakness in vendor-managed financial process.', details: ['Affects revenue recognition', 'Disclosure deadline in 2 weeks', 'Remediation is complex and costly', 'Board notification required'], prompts: ['Can we remediate in time?', 'What is disclosure language?', 'How do we explain to board?', 'Can we bring process in-house?'], realWorldCheck: ['SOX control documentation?', 'Vendor audit rights?', 'Material weakness response plan?'] },
  { id: 44, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'HIPAA Breach via Vendor', frontDescription: 'Your business associate exposes PHI through unsecured cloud storage.', details: ['10,000 patient records exposed', '60-day notification deadline', 'OCR investigation likely', 'Vendor lacks breach insurance'], prompts: ['How do we notify patients?', 'What support do we offer?', 'How do we handle media?', 'What is our OCR strategy?'], realWorldCheck: ['BAA requirements verified?', 'Vendor security validated?', 'Breach notification procedures?'] },
  { id: 45, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Export Control Violation', frontDescription: 'Vendor shipped controlled technology to embargoed country using your export license.', details: ['Appears to be deliberate evasion', 'BIS investigation initiated', 'Other customers may be affected', 'Criminal penalties possible'], prompts: ['How do we cooperate with BIS?', 'What is our legal exposure?', 'How do we audit other vendors?', 'Should we self-disclose?'], realWorldCheck: ['Export control due diligence?', 'Vendor compliance certifications?', 'Legal defense prepared?'] },
  { id: 46, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Modern Slavery Discovery', frontDescription: 'Audit finds forced labor conditions at your tier-3 supplier.', details: ['Workers from vulnerable populations', 'Supplier was not on your radar', 'NGO threatening media campaign', 'Customer contracts require clean supply'], prompts: ['How deep does this go?', 'What is our remediation plan?', 'How do we verify other tiers?', 'What is our public response?'], realWorldCheck: ['Supply chain transparency?', 'Tier-n audit programs?', 'Remediation support capability?'] },
  { id: 47, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Environmental Permit Revoked', frontDescription: 'Your supplier loses environmental permits. Production must halt immediately.', details: ['Violations accumulated over years', 'No timeline for reinstatement', 'Only qualified supplier', 'Moving production requires permits'], prompts: ['Can we help them remediate?', 'Can we find alternative processes?', 'How do we handle orders in progress?', 'What is permit timeline?'], realWorldCheck: ['Supplier environmental monitoring?', 'Permit contingency requirements?', 'Alternative process capability?'] },
  { id: 48, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'FDA Warning Letter', frontDescription: 'Your contract manufacturer receives FDA warning letter citing products you contracted.', details: ['Production must stop', 'Products may need recall', 'Re-inspection timeline unknown', 'Other customers leaving'], prompts: ['What products are affected?', 'Is recall necessary?', 'Can we move production?', 'How do we communicate with FDA?'], realWorldCheck: ['cGMP audit programs?', 'Quality agreement terms?', 'Regulatory liaison capability?'] },
  { id: 49, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Accessibility Lawsuit Names You', frontDescription: 'Vendor software sued for ADA violations. You are named as co-defendant.', details: ['Product widely deployed', 'Class action filed', 'Vendor claims your configuration', 'Remediation requires major rework'], prompts: ['What is our legal strategy?', 'How do we allocate responsibility?', 'What does remediation cost?', 'How do we assess other tools?'], realWorldCheck: ['Vendor accessibility warranties?', 'Accessibility testing programs?', 'Indemnification coverage?'] },
  { id: 50, category: 'compliance', categoryLabel: 'Regulatory/Compliance', title: 'Sanctions List Addition', frontDescription: 'Your vendor added to OFAC sanctions list. Must cease all dealings immediately.', details: ['Payments in transit', 'Critical components in production', 'No warning given', 'Wind-down license needed'], prompts: ['How do we stop payments?', 'Can we recover WIP?', 'How do we get wind-down license?', 'What is alternative source?'], realWorldCheck: ['Sanctions screening program?', 'License application procedures?', 'Payment system controls?'] }
];

// Combine all full scenarios
const fullScenarios = [...fullScenariosP1, ...fullScenariosP2];

// Demo wild cards (12 - 2 per category)
const demoWildCards = [
  { id: 1, category: 'resource', categoryLabel: 'Resource Loss', title: 'Key Decision Maker Unavailable', description: 'Your BC lead is unreachable for the next 2 hours.', consider: ['Who has backup authority?', 'What decisions can wait?', 'Are delegation protocols documented?'] },
  { id: 7, category: 'resource', categoryLabel: 'Resource Loss', title: 'Budget Frozen', description: 'CFO just froze all discretionary spending. Recovery costs cannot be approved through normal channels.', consider: ['What can you do without spending?', 'What absolutely requires funding?', 'How do you get emergency approval?'] },
  { id: 2, category: 'time', categoryLabel: 'Time Pressure', title: 'Media Inquiry Incoming', description: 'A journalist is calling in 30 minutes asking about this vendor disruption.', consider: ['What do you say?', 'What do you hold back?', 'Who speaks to media?'] },
  { id: 8, category: 'time', categoryLabel: 'Time Pressure', title: 'Board Meeting Tomorrow', description: 'The board wants a full briefing on this situation at tomorrow morning meeting.', consider: ['What can you know by then?', 'What decisions do you need?', 'What are you asking for?'] },
  { id: 3, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Second Vendor Also Impacted', description: 'A second vendor uses the same sub-supplier. They are also disrupted.', consider: ['How did you miss this?', 'What is your third option?', 'How do you prioritize?'] },
  { id: 9, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Backup System Fails', description: 'When you activate your backup vendor, you discover they also have capacity issues.', consider: ['What is your backup to the backup?', 'Can you get partial capacity?', 'How do you ration resources?'] },
  { id: 4, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Customer Panic Spiral', description: 'Your three largest customers threaten to leave. They want proof of recovery in 24 hours.', consider: ['What evidence can you provide?', 'What promises are realistic?', 'Who communicates with them?'] },
  { id: 10, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Executive Pressure', description: 'The CEO demands you fix this in 24 hours or they will find someone who can.', consider: ['What is realistic?', 'How do you manage up?', 'What help do you need?'] },
  { id: 5, category: 'fog', categoryLabel: 'Information Fog', title: 'Conflicting Information', description: 'Vendor says 6 hours. Their support says 3 days. Social media says weeks.', consider: ['How do you decide with bad info?', 'What is your planning assumption?', 'How do you verify?'] },
  { id: 11, category: 'fog', categoryLabel: 'Information Fog', title: 'Vendor Gone Silent', description: 'Your vendor has stopped responding. No status updates, no returned calls for 4 hours.', consider: ['What do you assume?', 'How do you plan without info?', 'Who else can you contact?'] },
  { id: 6, category: 'external', categoryLabel: 'External Shock', title: 'Concurrent Internal Crisis', description: 'While managing this vendor failure, your own facility experiences an unrelated incident.', consider: ['How do you split resources?', 'Which crisis takes priority?', 'Who leads each response?'] },
  { id: 12, category: 'external', categoryLabel: 'External Shock', title: 'Competitor Advantage', description: 'Your competitor announces they were not affected and is actively poaching your customers.', consider: ['How did they avoid it?', 'What do you tell customers?', 'How do you respond publicly?'] }
];

// Full wild cards (48 total - 8 per category)
const fullWildCards = [
  // Resource Loss (8)
  { id: 1, category: 'resource', categoryLabel: 'Resource Loss', title: 'Key Decision Maker Unavailable', description: 'Your BC lead is unreachable for the next 2 hours.', consider: ['Who has backup authority?', 'What decisions can wait?', 'Are delegation protocols documented?'] },
  { id: 2, category: 'resource', categoryLabel: 'Resource Loss', title: 'Budget Frozen', description: 'CFO just froze all discretionary spending. Recovery costs cannot be approved.', consider: ['What can you do without spending?', 'What absolutely requires funding?', 'How do you get emergency approval?'] },
  { id: 3, category: 'resource', categoryLabel: 'Resource Loss', title: 'Crisis Team Exhausted', description: 'Your team has been working 16-hour days for a week. Mistakes are increasing.', consider: ['How do you rotate staff?', 'What decisions can wait?', 'Who are your backup people?'] },
  { id: 4, category: 'resource', categoryLabel: 'Resource Loss', title: 'Legal Counsel Conflicted', description: 'Your law firm also represents the vendor and must withdraw from helping you.', consider: ['Do you have backup counsel?', 'What decisions are stuck?', 'How fast can new counsel ramp up?'] },
  { id: 5, category: 'resource', categoryLabel: 'Resource Loss', title: 'War Room Unavailable', description: 'Your crisis management center is being used for another emergency.', consider: ['Where do you relocate?', 'Do you have the right technology?', 'How do you notify the team?'] },
  { id: 6, category: 'resource', categoryLabel: 'Resource Loss', title: 'Insurance Claim Denied', description: 'Your insurer denies coverage citing an exclusion in the policy.', consider: ['What is your appeal strategy?', 'How do you fund recovery?', 'What outside help do you need?'] },
  { id: 7, category: 'resource', categoryLabel: 'Resource Loss', title: 'Communication Tools Down', description: 'Slack and email are affected by this same outage. Teams cannot coordinate.', consider: ['What is your backup channel?', 'How do you reach external parties?', 'Can you use personal devices?'] },
  { id: 8, category: 'resource', categoryLabel: 'Resource Loss', title: 'Subject Matter Expert Quit', description: 'The only person who understood this vendor relationship resigned last week.', consider: ['Where is their documentation?', 'Who else has partial knowledge?', 'Can you bring them back as consultant?'] },
  
  // Time Pressure (8)
  { id: 9, category: 'time', categoryLabel: 'Time Pressure', title: 'Media Inquiry Incoming', description: 'A journalist is calling in 30 minutes asking about this vendor disruption.', consider: ['What do you say?', 'What do you hold back?', 'Who speaks to media?'] },
  { id: 10, category: 'time', categoryLabel: 'Time Pressure', title: 'Board Meeting Tomorrow', description: 'The board wants a full briefing on this situation at tomorrow morning meeting.', consider: ['What can you know by then?', 'What decisions do you need?', 'What are you asking for?'] },
  { id: 11, category: 'time', categoryLabel: 'Time Pressure', title: 'Product Launch Tomorrow', description: 'You have a major product launch tomorrow that depends on this vendor.', consider: ['Can you delay the launch?', 'What is partial launch option?', 'What is cost of delay?'] },
  { id: 12, category: 'time', categoryLabel: 'Time Pressure', title: 'Regulatory Filing Due', description: 'You have a regulatory filing due in 48 hours that requires data from this vendor.', consider: ['Can you get an extension?', 'What is the penalty for missing?', 'Can you file with partial data?'] },
  { id: 13, category: 'time', categoryLabel: 'Time Pressure', title: 'End of Quarter', description: 'It is the last week of quarter and this affects revenue recognition.', consider: ['What deals are at risk?', 'Can you close manually?', 'What is revenue impact?'] },
  { id: 14, category: 'time', categoryLabel: 'Time Pressure', title: 'Holiday Weekend Starting', description: 'This is happening right before a 3-day holiday weekend.', consider: ['Who is available?', 'What can wait until Tuesday?', 'What must be done now?'] },
  { id: 15, category: 'time', categoryLabel: 'Time Pressure', title: 'Payroll Processing Due', description: 'Payroll must be processed in 24 hours and your payroll vendor is the one affected.', consider: ['Can you process manually?', 'Do you have the data?', 'What do you tell employees?'] },
  { id: 16, category: 'time', categoryLabel: 'Time Pressure', title: 'Contract Renewal Deadline', description: 'Your biggest customer contract expires in 72 hours and this affects the renewal.', consider: ['Can you get an extension?', 'What can you promise?', 'Who handles the negotiation?'] },
  
  // Cascading Failures (8)
  { id: 17, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Second Vendor Also Impacted', description: 'A second vendor uses the same sub-supplier. They are also disrupted.', consider: ['How did you miss this?', 'What is your third option?', 'How do you prioritize?'] },
  { id: 18, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Backup System Fails', description: 'When you activate your backup vendor, you discover they also have capacity issues.', consider: ['What is backup to backup?', 'Can you get partial capacity?', 'How do you ration resources?'] },
  { id: 19, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Internal System Buckles', description: 'The stress on your systems from the workaround causes your own system to fail.', consider: ['What is the new priority?', 'How do you handle both?', 'What do you triage?'] },
  { id: 20, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Key Customer Defects', description: 'Your largest customer announces they are moving to a competitor.', consider: ['Can you save the account?', 'What would it take?', 'What do you tell other customers?'] },
  { id: 21, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Key Employee Resigns', description: 'Your incident commander just resigned citing this as the last straw.', consider: ['Who takes over?', 'What knowledge walks out?', 'How do you transition?'] },
  { id: 22, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Supply Chain Domino', description: 'Your backup supplier gets materials from the same affected source.', consider: ['How deep does this go?', 'Where can you break the chain?', 'What do you not know?'] },
  { id: 23, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Partner Threatens to Drop You', description: 'Your distribution partner will drop your products if this continues another week.', consider: ['What do they need?', 'Can you meet their timeline?', 'What is replacement cost?'] },
  { id: 24, category: 'cascade', categoryLabel: 'Cascading Failure', title: 'Credit Rating Downgrade Watch', description: 'Rating agency puts you on watch negative due to operational disruption.', consider: ['What do you tell them?', 'What is capital impact?', 'How do you restore confidence?'] },
  
  // Stakeholder Complications (8)
  { id: 25, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Customer Panic Spiral', description: 'Your three largest customers threaten to leave. They want proof of recovery in 24 hours.', consider: ['What evidence can you provide?', 'What promises are realistic?', 'Who communicates with them?'] },
  { id: 26, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Executive Pressure', description: 'The CEO demands you fix this in 24 hours or they will find someone who can.', consider: ['What is realistic?', 'How do you manage up?', 'What help do you need?'] },
  { id: 27, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Board Member Conflict', description: 'A board member has significant investment in the vendor.', consider: ['How does this affect decisions?', 'What disclosures are needed?', 'Who makes the call?'] },
  { id: 28, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Union Involvement', description: 'The union claims this is a health and safety issue and threatens action.', consider: ['What are their concerns?', 'Who negotiates with them?', 'What are contract terms?'] },
  { id: 29, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Investor Emergency Call', description: 'Your largest institutional investor wants an emergency call to discuss.', consider: ['Who takes the call?', 'What can you say?', 'What can you not say?'] },
  { id: 30, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Government Customer Demands Briefing', description: 'Your government customer demands formal briefing within 24 hours.', consider: ['Who has clearance?', 'What do they need to know?', 'What are contract requirements?'] },
  { id: 31, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Internal Blame Game', description: 'Another business unit publicly blames your team for the vendor selection.', consider: ['How do you handle it?', 'What is the documentation?', 'Who mediates?'] },
  { id: 32, category: 'stakeholder', categoryLabel: 'Stakeholder Complication', title: 'Whistleblower Emerges', description: 'An employee claims they warned about this vendor risk and were ignored.', consider: ['What is the record?', 'Who investigates?', 'What are legal risks?'] },
  
  // Information Fog (8)
  { id: 33, category: 'fog', categoryLabel: 'Information Fog', title: 'Conflicting Information', description: 'Vendor says 6 hours. Their support says 3 days. Social media says weeks.', consider: ['How do you decide with bad info?', 'What is planning assumption?', 'How do you verify?'] },
  { id: 34, category: 'fog', categoryLabel: 'Information Fog', title: 'Vendor Gone Silent', description: 'Your vendor has stopped responding. No updates, no returned calls for 4 hours.', consider: ['What do you assume?', 'How do you plan without info?', 'Who else can you contact?'] },
  { id: 35, category: 'fog', categoryLabel: 'Information Fog', title: 'Rumors on Social Media', description: 'Inaccurate information about the incident is spreading on social media.', consider: ['Do you respond?', 'How do you correct it?', 'What is official statement?'] },
  { id: 36, category: 'fog', categoryLabel: 'Information Fog', title: 'Scope Still Unknown', description: 'You still do not know full scope and stakeholders are demanding answers.', consider: ['What can you say?', 'How do you set expectations?', 'When will you know more?'] },
  { id: 37, category: 'fog', categoryLabel: 'Information Fog', title: 'Outdated Vendor Data', description: 'Your data about this vendor dependencies is 18 months old and unreliable.', consider: ['How do you verify?', 'What assumptions do you make?', 'How do you prevent next time?'] },
  { id: 38, category: 'fog', categoryLabel: 'Information Fog', title: 'Language Barrier', description: 'The vendor technical staff only speaks a language your team does not.', consider: ['How do you get translation?', 'What might get lost?', 'Who can help?'] },
  { id: 39, category: 'fog', categoryLabel: 'Information Fog', title: 'Contradictory Monitoring', description: 'Your monitoring shows service down but vendor insists it is up.', consider: ['Who is right?', 'How do you test?', 'What is causing discrepancy?'] },
  { id: 40, category: 'fog', categoryLabel: 'Information Fog', title: 'Historical Data Lost', description: 'You need historical data to assess impact but logs were purged last month.', consider: ['What can you reconstruct?', 'Who else has records?', 'How do you estimate?'] },
  
  // External Shocks (8)
  { id: 41, category: 'external', categoryLabel: 'External Shock', title: 'Concurrent Internal Crisis', description: 'While managing vendor failure, your own facility experiences unrelated incident.', consider: ['How do you split resources?', 'Which crisis takes priority?', 'Who leads each response?'] },
  { id: 42, category: 'external', categoryLabel: 'External Shock', title: 'Competitor Advantage', description: 'Competitor announces they were not affected and is actively poaching customers.', consider: ['How did they avoid it?', 'What do you tell customers?', 'How do you respond publicly?'] },
  { id: 43, category: 'external', categoryLabel: 'External Shock', title: 'Media Investigation', description: 'A journalist calls saying they are writing story about your vendor practices.', consider: ['Do you participate?', 'Who is spokesperson?', 'What is key message?'] },
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
function App() {
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
  const availableWildCards = hasAccess ?
fullWildCards : demoWildCards;

  useEffect(() => {
    if (timerRunning && (timerMinutes > 0 || timerSeconds > 0)) {
      const interval = setInterval(() => {
        if (timerSeconds === 0) {
          if (timerMinutes === 0) {
            setTimerRunning(false);
          } else {
            setTimerMinutes(timerMinutes - 1);
            setTimerSeconds(59);
          }
        } else {
          setTimerSeconds(timerSeconds - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timerRunning, timerMinutes, timerSeconds]);

  const handleAccessSubmit = (e) => {
    e.preventDefault();
    if (accessCode.startsWith('CS-DECK-') && accessCode.length >= 12) {
      setHasAccess(true);
      setAccessError('');
    } else {
      setAccessError('Invalid access code. Please check and try again.');
    }
  };

  const selectRandomScenario = () => {
    const randomScenario = availableScenarios[Math.floor(Math.random() * availableScenarios.length)];
    setSelectedScenario(randomScenario);
    setCurrentView('scenario');
    setIsFlipped(false);
    setCurrentWildCard(null);
  };

  const drawWildCard = () => {
    const categoryCards = availableWildCards.filter(wc => wc.category === selectedWildCategory);
    const randomCard = categoryCards[Math.floor(Math.random() * categoryCards.length)];
    setCurrentWildCard(randomCard);
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
    setTimerMinutes(parseInt(timerInput) || 15);
    setTimerSeconds(0);
  };

  if (!hasAccess) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: 'white', borderRadius: '20px', padding: '60px 40px', maxWidth: '500px', width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          <img src="https://static1.squarespace.com/static/66f86e6ebf5a4c5663722daa/t/66f8739e95c2d96f26fe30fe/1727592351086/Continuity+Strength+Logo.png" alt="Continuity Strength" style={{ width: '200px', marginBottom: '30px' }} />
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', color: '#1a202c' }}>Vendor Resilience Exercise Deck</h1>
          <p style={{ color: '#718096', marginBottom: '30px' }}>Interactive scenarios to stress-test your vendor resilience</p>
          
          <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '15px', color: '#2d3748' }}>Demo Version Includes:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ padding: '8px 0', color: '#4a5568', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px', color: '#48bb78' }}>✓</span>
                3 sample scenarios
              </li>
              <li style={{ padding: '8px 0', color: '#4a5568', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px', color: '#48bb78' }}>✓</span>
                12 wild cards (2 per category)
              </li>
              <li style={{ padding: '8px 0', color: '#4a5568', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px', color: '#48bb78' }}>✓</span>
                Full timer functionality
              </li>
            </ul>
          </div>

          <div style={{ background: '#edf2f7', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '15px', color: '#2d3748' }}>Full Version Includes:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ padding: '8px 0', color: '#4a5568', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px', color: '#667eea' }}>★</span>
                50 detailed scenarios
              </li>
              <li style={{ padding: '8px 0', color: '#4a5568', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px', color: '#667eea' }}>★</span>
                48 wild cards (8 per category)
              </li>
              <li style={{ padding: '8px 0', color: '#4a5568', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px', color: '#667eea' }}>★</span>
                Complete exercise framework
              </li>
            </ul>
          </div>

          <form onSubmit={handleAccessSubmit}>
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="Enter access code (CS-DECK-XXXX)"
              style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '2px solid #e2e8f0', marginBottom: '15px', fontSize: '16px' }}
            />
            {accessError && <p style={{ color: '#e53e3e', marginBottom: '15px', fontSize: '14px' }}>{accessError}</p>}
            <button type="submit" style={{ width: '100%', padding: '15px', background: '#667eea', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginBottom: '15px' }}>
              Unlock Full Deck
            </button>
          </form>

          <button onClick={() => setHasAccess(true)} style={{ width: '100%', padding: '15px', background: 'white', color: '#667eea', border: '2px solid #667eea', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
            Try Demo Version
          </button>
        </div>
      </div>
    );
  }

  if (currentView === 'main') {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <img src="https://static1.squarespace.com/static/66f86e6ebf5a4c5663722daa/t/66f8739e95c2d96f26fe30fe/1727592351086/Continuity+Strength+Logo.png" alt="Continuity Strength" style={{ width: '200px', marginBottom: '20px' }} />
            <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>Vendor Resilience Exercise Deck</h1>
            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)' }}>
              {hasAccess && accessCode ? '50 Scenarios • 48 Wild Cards' : '3 Demo Scenarios • 12 Wild Cards'}
            </p>
          </div>

          <div style={{ background: 'white', borderRadius: '20px', padding: '60px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>Choose Your Exercise Type</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
              {scenarioCategories.map((cat) => (
                <div key={cat.id} style={{ padding: '30px', background: '#f7fafc', borderRadius: '12px', textAlign: 'center', border: '2px solid #e2e8f0' }}>
                  <div style={{ width: '50px', height: '50px', margin: '0 auto 15px', color: '#667eea' }}>
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px' }}>{cat.label}</h3>
                  <p style={{ fontSize: '14px', color: '#718096' }}>Scenarios {cat.range}</p>
                </div>
              ))}
            </div>

            <button onClick={selectRandomScenario} style={{ width: '100%', padding: '20px', background: '#667eea', color: 'white', border: 'none', borderRadius: '12px', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer' }}>
              Draw Random Scenario
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'scenario' && selectedScenario) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <img src="https://static1.squarespace.com/static/66f86e6ebf5a4c5663722daa/t/66f8739e95c2d96f26fe30fe/1727592351086/Continuity+Strength+Logo.png" alt="Continuity Strength" style={{ width: '150px', marginBottom: '15px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: currentWildCard ? '1fr 1fr' : '1fr', gap: '30px', marginBottom: '30px' }}>
            <div onClick={() => setIsFlipped(!isFlipped)} style={{ background: 'white', borderRadius: '20px', padding: '50px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', cursor: 'pointer', minHeight: '500px', position: 'relative' }}>
              {!isFlipped ? (
                <>
                  <div style={{ display: 'inline-block', padding: '8px 16px', background: '#667eea', color: 'white', borderRadius: '20px', fontSize: '14px', fontWeight: '600', marginBottom: '20px' }}>
                    {selectedScenario.categoryLabel}
                  </div>
                  <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', color: '#2563eb' }}>
                    {selectedScenario.title}
                  </h2>
                  <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#4a5568', marginBottom: '40px' }}>
                    {selectedScenario.description}
                  </p>
                  <p style={{ fontSize: '16px', color: '#718096', fontStyle: 'italic', textAlign: 'center' }}>
                    Click card to flip →
                  </p>
                  <p style={{ position: 'absolute', bottom: '20px', right: '20px', fontSize: '12px', color: '#a0aec0' }}>
                    © 2024 Continuity Strength LLC
                  </p>
                </>
              ) : (
                <>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '25px', color: '#2d3748' }}>
                    Consider:
                  </h3>
                  <ul style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568', paddingLeft: '25px' }}>
                    {selectedScenario.consider.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '15px' }}>{item}</li>
                    ))}
                  </ul>
                  <p style={{ fontSize: '16px', color: '#718096', fontStyle: 'italic', textAlign: 'center', marginTop: '40px' }}>
                    ← Click card to flip back
                  </p>
                  <p style={{ position: 'absolute', bottom: '20px', right: '20px', fontSize: '12px', color: '#a0aec0' }}>
                    © 2024 Continuity Strength LLC
                  </p>
                </>
              )}
            </div>

            {currentWildCard && (
              <div style={{ background: '#e37263', borderRadius: '20px', padding: '50px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', minHeight: '500px', position: 'relative' }}>
                <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(255,255,255,0.3)', color: 'white', borderRadius: '20px', fontSize: '14px', fontWeight: '600', marginBottom: '20px' }}>
                  {currentWildCard.categoryLabel}
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', color: 'white' }}>
                  {currentWildCard.title}
                </h2>
                <p style={{ fontSize: '20px', lineHeight: '1.8', color: 'white', marginBottom: '40px' }}>
                  {currentWildCard.description}
                </p>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>
                  Now consider:
                </h3>
                <ul style={{ fontSize: '18px', lineHeight: '1.8', color: 'white', paddingLeft: '25px' }}>
                  {currentWildCard.consider.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '15px' }}>{item}</li>
                  ))}
                </ul>
                <p style={{ position: 'absolute', bottom: '20px', right: '20px', fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                  © 2024 Continuity Strength LLC
                </p>
              </div>
            )}
          </div>

          <div style={{ background: 'white', borderRadius: '20px', padding: '30px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="number"
                    value={timerInput}
                    onChange={(e) => setTimerInput(e.target.value)}
                    style={{ width: '70px', padding: '10px', borderRadius: '8px', border: '2px solid #e2e8f0', fontSize: '16px' }}
                    disabled={timerRunning}
                  />
                  <span style={{ fontSize: '16px', color: '#4a5568' }}>minutes</span>
                </div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#2d3748', minWidth: '120px' }}>
                  {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
                </div>
                <button onClick={timerRunning ? resetTimer : startTimer} style={{ padding: '10px 24px', background: '#48bb78', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
                  {timerRunning ? 'Reset' : 'Start'}
                </button>
              </div>

              {!showWildCardSelector && !currentWildCard && (
                <button onClick={() => setShowWildCardSelector(true)} style={{ padding: '10px 24px', background: '#e37263', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
                  Draw Wild Card
                </button>
              )}

              {showWildCardSelector && (
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {wildCardCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setSelectedWildCategory(cat.id); drawWildCard(); }}
                      style={{ padding: '10px 20px', background: '#e37263', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button onClick={selectRandomScenario} style={{ padding: '15px 30px', background: '#667eea', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
              New Scenario
            </button>
            <button onClick={() => setCurrentView('main')} style={{ padding: '15px 30px', background: 'white', color: '#667eea', border: '2px solid #667eea', borderRadius: '12px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
              Back to Menu
            </button>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', padding: '30px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }}>
            <p style={{ color: 'white', fontSize: '14px', marginBottom: '10px' }}>
              Questions? Contact: <a href="mailto:roch@continuitystrength.com" style={{ color: 'white', textDecoration: 'underline' }}>roch@continuitystrength.com</a>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>
              © 2024 Continuity Strength LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default App;

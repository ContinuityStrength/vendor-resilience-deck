import React, { useState, useEffect } from 'react';

// Demo scenarios (3)
const demoScenarios = [
  {
    id: 1,
    category: 'cyber',
    categoryIcon: '🔒',
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
      'Documented incident response plan?',
      'Tested recovery procedures?'
    ]
  },
  {
    id: 2,
    category: 'smb',
    categoryIcon: '🏢',
    categoryLabel: 'SMB Vendor Failure',
    title: 'Vendor Owner Hospitalized',
    frontDescription: 'Your critical SMB vendor\'s owner is hospitalized unexpectedly. No succession plan exists. Operations halted.',
    details: [
      'Owner handled all key relationships',
      'No documented processes',
      'Staff unsure how to proceed',
      'Orders pending delivery this week'
    ],
    prompts: [
      'Who at the vendor can we work with?',
      'Can their staff continue without owner?',
      'How quickly can we activate alternates?',
      'What support can we provide?'
    ],
    realWorldCheck: [
      'Which SMB vendors have succession plans?',
      'Key person dependencies?',
      'Whether vendor processes are documented?'
    ]
  },
  {
    id: 3,
    category: 'compliance',
    categoryIcon: '📋',
    categoryLabel: 'Regulatory/Compliance',
    title: 'Vendor Fails DORA Audit',
    frontDescription: 'Your critical vendor cannot provide required operational resilience documentation. Regulators are asking.',
    details: [
      'Vendor has no documented BCP or IRP',
      'Regulator wants evidence in 5 business days',
      'Vendor serves 25% of customer base',
      'Switching vendors takes 6+ months'
    ],
    prompts: [
      'Can we help vendor create documentation?',
      'What evidence can we provide regulators?',
      'Do we accept risk or begin transition?',
      'How do we prevent this with other vendors?'
    ],
    realWorldCheck: [
      'Which vendors have audit-ready documentation?',
      'Gaps in your vendor resilience evidence?',
      'Remediation timelines for non-compliant vendors?'
    ]
  }
];

// Full scenarios (50) - structure for remaining 47
const fullScenarios = [
  ...demoScenarios,
  // Cyber Incidents (7 more = 10 total)
  { id: 4, category: 'cyber', categoryIcon: '🔒', categoryLabel: 'Vendor Cyber Incident', title: 'Cloud Provider Data Breach', frontDescription: 'Your cloud storage vendor reports a data breach. Customer data may be compromised.', details: ['Breach discovered 48 hours ago', 'Vendor unsure what data accessed', 'You store customer PII with them', 'GDPR notification clock ticking'], prompts: ['What data do we have with this vendor?', 'Do we need to notify customers/regulators?', 'Do we suspend use during investigation?', 'What\'s our legal exposure?'], realWorldCheck: ['Data inventory at vendor?', 'Vendor security certifications?', 'Breach notification terms?'] },
  { id: 5, category: 'cyber', categoryIcon: '🔒', categoryLabel: 'Vendor Cyber Incident', title: 'Software Supply Chain Compromise', frontDescription: 'Your vendor\'s software update contained malware. You installed it last week.', details: ['Malware was in routine update', 'Affects all vendor customers', 'Scope of compromise unknown', 'Vendor advising rollback'], prompts: ['What systems are affected?', 'Can we isolate compromised systems?', 'What data may be exposed?', 'How do we verify clean state?'], realWorldCheck: ['Software update verification processes?', 'Vendor security testing procedures?', 'Rollback capabilities?'] },
  { id: 6, category: 'cyber', categoryIcon: '🔒', categoryLabel: 'Vendor Cyber Incident', title: 'Vendor Loses Cyber Insurance', frontDescription: 'Your critical vendor\'s cyber insurance was cancelled due to poor security practices.', details: ['Discovered during annual review', 'Vendor failed to disclose', 'Increases your risk exposure', 'Contract requires insurance'], prompts: ['What are our contractual options?', 'Do we require remediation plan?', 'How do we assess their actual risk?', 'Should we seek alternate vendor?'], realWorldCheck: ['Vendor insurance verification?', 'Security assessment frequency?', 'Contract compliance monitoring?'] },
  { id: 7, category: 'cyber', categoryIcon: '🔒', categoryLabel: 'Vendor Cyber Incident', title: 'DDoS Attack on Logistics Platform', frontDescription: 'Your logistics vendor\'s platform is under sustained DDoS attack. Order processing offline.', details: ['Attack ongoing for 6 hours', 'No ETA for resolution', 'Backlog of orders building', 'Peak shipping season'], prompts: ['Can we process orders manually?', 'Do we have alternate logistics platform?', 'How do we communicate with customers?', 'What\'s the revenue impact?'], realWorldCheck: ['Vendor DDoS mitigation?', 'Platform redundancy?', 'Manual workaround procedures?'] },
  { id: 8, category: 'cyber', categoryIcon: '🔒', categoryLabel: 'Vendor Cyber Incident', title: 'Vendor Email System Compromised', frontDescription: 'Your vendor\'s email was hacked. Fraudulent invoices sent to your team from their address.', details: ['Finance paid one fraudulent invoice', '$50,000 transferred to attackers', 'Unknown if more invoices sent', 'Vendor unaware until you called'], prompts: ['How do we verify all recent invoices?', 'Can we recover the funds?', 'What verification process failed?', 'How do we prevent recurrence?'], realWorldCheck: ['Invoice verification procedures?', 'Vendor communication security?', 'Fraud detection controls?'] },
  { id: 9, category: 'cyber', categoryIcon: '🔒', categoryLabel: 'Vendor Cyber Incident', title: 'Third-Party API Breach', frontDescription: 'The API connecting your systems to vendor was compromised. Data flowing both directions at risk.', details: ['Breach detected by your SOC', 'API active for 2 weeks post-breach', 'Customer and operational data exposed', 'Vendor claims their side is secure'], prompts: ['What data traversed the API?', 'How do we determine breach scope?', 'Who is liable?', 'How do we secure the connection?'], realWorldCheck: ['API security monitoring?', 'Data classification for integrations?', 'Vendor API security standards?'] },
  { id: 10, category: 'cyber', categoryIcon: '🔒', categoryLabel: 'Vendor Cyber Incident', title: 'Vendor Backup Systems Corrupted', frontDescription: 'Your vendor\'s backups are corrupted. If primary fails, no recovery possible.', details: ['Discovered during routine test', 'Corruption spans 3 months', 'Primary system still operational', 'Fix requires full backup rebuild'], prompts: ['What\'s our exposure if primary fails?', 'Do we have our own copies of critical data?', 'How do we escalate urgency?', 'Should we accelerate alternate vendor?'], realWorldCheck: ['Vendor backup testing frequency?', 'Data recovery verification?', 'Your own backup of vendor-held data?'] },
  
  // Operational Failures (10 total)
  { id: 11, category: 'operational', categoryIcon: '📦', categoryLabel: 'Vendor Operational Failure', title: 'Distributor Bankruptcy', frontDescription: 'Your primary distributor files for bankruptcy. 40% of products in their warehouse.', details: ['Filing happened this morning', 'Warehouse access frozen', '40% of inventory locked', 'Peak season in 3 weeks'], prompts: ['How do we retrieve inventory legally?', 'Which alternates can we activate?', 'How do we fulfill existing orders?', 'Who manages legal recovery?'], realWorldCheck: ['Distributor BCPs documented?', 'Financial health monitoring?', 'Pre-qualified alternates?'] },
  { id: 12, category: 'operational', categoryIcon: '📦', categoryLabel: 'Vendor Operational Failure', title: 'Warehouse Fire at 3PL', frontDescription: 'Your 3PL\'s main warehouse catches fire. Facility destroyed. Your inventory is total loss.', details: ['$2M inventory destroyed', 'Alternate facility at capacity', 'Insurance claim begins', 'Orders due this week unfulfillable'], prompts: ['What inventory is recoverable elsewhere?', 'Can we expedite replacement production?', 'Which customers do we prioritize?', 'What\'s alternate 3PL plan?'], realWorldCheck: ['3PL disaster recovery capabilities?', 'Inventory distribution across sites?', 'Insurance for goods at vendor?'] },
  { id: 13, category: 'operational', categoryIcon: '📦', categoryLabel: 'Vendor Operational Failure', title: 'Manufacturing Equipment Failure', frontDescription: 'Your sole-source manufacturer\'s production line failed. 90-day repair timeline.', details: ['Specialized equipment', 'No spare parts available', 'Your product only made here', '90 days minimum downtime'], prompts: ['Can another facility produce?', 'Do we have safety stock?', 'Can we redesign for different equipment?', 'How do we manage customer expectations?'], realWorldCheck: ['Manufacturing redundancy?', 'Equipment maintenance schedules?', 'Alternative production capabilities?'] },
  { id: 14, category: 'operational', categoryIcon: '📦', categoryLabel: 'Vendor Operational Failure', title: 'Quality Control Failure/Recall', frontDescription: 'Your vendor shipped defective components. Products already in market need recall.', details: ['Defect causes safety risk', '10,000 units affected', 'Recall costs estimated $500K', 'Media starting to report'], prompts: ['How do we identify affected products?', 'What\'s our recall communication?', 'Who bears the costs?', 'How do we prevent recurrence?'], realWorldCheck: ['Vendor QC procedures?', 'Incoming inspection processes?', 'Traceability systems?'] },
  { id: 15, category: 'operational', categoryIcon: '📦', categoryLabel: 'Vendor Operational Failure', title: 'Vendor Loses Facility Lease', frontDescription: 'Your vendor\'s landlord terminated lease. They must relocate in 60 days.', details: ['Lease dispute unexpected', '60-day eviction notice', 'New location not secured', 'Production will halt during move'], prompts: ['How long will production stop?', 'Can we help them find space?', 'Do we accelerate alternate vendor?', 'How do we build buffer inventory?'], realWorldCheck: ['Vendor facility stability?', 'Lease term awareness?', 'Relocation contingency?'] },
  { id: 16, category: 'operational', categoryIcon: '📦', categoryLabel: 'Vendor Operational Failure', title: 'Vendor Fleet Breakdown', frontDescription: 'Your delivery vendor\'s fleet failed emissions inspection. 70% of trucks grounded.', details: ['Regulatory enforcement', 'Repairs take 2-3 weeks per truck', 'Delivery capacity at 30%', 'Peak demand period'], prompts: ['Can they rent replacement vehicles?', 'Do we have alternate delivery options?', 'Which deliveries do we prioritize?', 'What\'s customer communication?'], realWorldCheck: ['Vendor fleet maintenance?', 'Regulatory compliance monitoring?', 'Backup delivery options?'] },
  { id: 17, category: 'operational', categoryIcon: '📦', categoryLabel: 'Vendor Operational Failure', title: 'Vendor Labor Shortage', frontDescription: 'Your manufacturer lost 40% of workforce to competitor. Production capacity halved.', details: ['Mass resignation last week', 'Training new staff takes months', 'Your orders will be delayed', 'Vendor struggling to retain rest'], prompts: ['Can we help with retention incentives?', 'Do we shift volume to alternates?', 'How do we manage our commitments?', 'Is vendor viable long-term?'], realWorldCheck: ['Vendor workforce stability?', 'Labor market conditions?', 'Capacity diversification?'] },
  { id: 18, category: 'operational', categoryIcon: '📦', categoryLabel: 'Vendor Operational Failure', title: 'Key Production Line Shutdown', frontDescription: 'Vendor shut down production line that makes your product for retooling. 6-week outage.', details: ['Planned but not communicated', 'Discovered when placing order', '6-week production gap', 'Insufficient notice to build stock'], prompts: ['Why weren\'t we notified?', 'Can we get priority when line restarts?', 'Do we have alternate sources?', 'How do we prevent communication gaps?'], realWorldCheck: ['Vendor communication protocols?', 'Production schedule visibility?', 'Notification requirements in contract?'] },
  { id: 19, category: 'operational', categoryIcon: '📦', categoryLabel: 'Vendor Operational Failure', title: 'Vendor Inventory Loss', frontDescription: 'Your vendor reports theft of raw materials from their facility. Your orders affected.', details: ['Security breach at warehouse', 'Materials for your order stolen', 'Replacement lead time 4 weeks', 'Insurance claim in process'], prompts: ['Can we source materials directly?', 'Do we expedite from alternate vendor?', 'Who bears the cost?', 'What security improvements needed?'], realWorldCheck: ['Vendor security measures?', 'Material sourcing alternatives?', 'Insurance coverage terms?'] },
  { id: 20, category: 'operational', categoryIcon: '📦', categoryLabel: 'Vendor Operational Failure', title: 'Vendor Fails Health/Safety Inspection', frontDescription: 'Regulator shut down vendor facility for safety violations. Unknown reopening date.', details: ['Failed surprise inspection', 'Immediate closure ordered', 'Violations require structural fixes', 'Timeline to reopen unclear'], prompts: ['How critical is this vendor?', 'Do we have alternate sources?', 'Can we help expedite remediation?', 'What\'s our communication to customers?'], realWorldCheck: ['Vendor compliance history?', 'Inspection schedule awareness?', 'Regulatory risk monitoring?'] },

  // Supply Chain Disruptions (10 total)
  { id: 21, category: 'supply', categoryIcon: '🌍', categoryLabel: 'Supply Chain Disruption', title: 'Port Strike Impacts Vendor', frontDescription: 'Major port strike affects your vendor\'s shipping. 60% of output stuck at port.', details: ['Strike expected 2-4 weeks', 'No alternate routes available', 'Inventory runs out in 10 days', 'Competitors scrambling too'], prompts: ['Can vendor use alternate ports?', 'Do we have unaffected suppliers?', 'Can we air freight critical items?', 'Which customers do we prioritize?'], realWorldCheck: ['Vendor shipping dependencies?', 'Alternate route capabilities?', 'Geographic concentration risk?'] },
  { id: 22, category: 'supply', categoryIcon: '🌍', categoryLabel: 'Supply Chain Disruption', title: 'Natural Disaster in Vendor Region', frontDescription: 'Earthquake damages your vendor\'s region. Facility intact but infrastructure destroyed.', details: ['Roads and power out', 'Staff unable to reach facility', 'Recovery timeline 3-6 weeks', 'No shipping in or out'], prompts: ['Is staff safe?', 'What inventory is at the facility?', 'Can we activate regional alternates?', 'How do we support vendor recovery?'], realWorldCheck: ['Vendor disaster recovery plan?', 'Geographic risk assessment?', 'Regional alternates identified?'] },
  { id: 23, category: 'supply', categoryIcon: '🌍', categoryLabel: 'Supply Chain Disruption', title: 'Vendor\'s Sub-Supplier Fails', frontDescription: 'Your vendor\'s critical sub-supplier went out of business. 30 days of inventory left.', details: ['Fourth-party risk unknown to you', 'No alternate sub-supplier', 'Lead time for new source 90 days', 'Component critical to your product'], prompts: ['Can we help find alternate sources?', 'Do we have other suppliers for this?', 'Can we redesign product?', 'How do we ration remaining supply?'], realWorldCheck: ['Visibility into sub-suppliers?', 'Concentration risk in lower tiers?', 'Alternate sourcing options?'] },
  { id: 24, category: 'supply', categoryIcon: '🌍', categoryLabel: 'Supply Chain Disruption', title: 'Transportation Network Disruption', frontDescription: 'Rail strike halts your vendor\'s primary shipping method. Trucking alternatives scarce.', details: ['Strike duration unknown', 'Trucking rates tripled', 'Limited truck availability', 'Shipments backing up'], prompts: ['Can we absorb higher trucking costs?', 'Do we have priority with carriers?', 'Which shipments are most critical?', 'How do we manage customer expectations?'], realWorldCheck: ['Transportation mode diversity?', 'Carrier relationships?', 'Shipping contingency plans?'] },
  { id: 25, category: 'supply', categoryIcon: '🌍', categoryLabel: 'Supply Chain Disruption', title: 'Geopolitical Export Restrictions', frontDescription: 'New export controls restrict your vendor\'s ability to ship critical components.', details: ['Regulations effective immediately', 'Licensing process takes 6 months', 'No exemptions available', 'Affects multiple components'], prompts: ['Can we source domestically?', 'Do we qualify for any exemptions?', 'How do we redesign around restricted parts?', 'What\'s the legal/compliance path?'], realWorldCheck: ['Geopolitical risk monitoring?', 'Domestic sourcing alternatives?', 'Export control awareness?'] },
  { id: 26, category: 'supply', categoryIcon: '🌍', categoryLabel: 'Supply Chain Disruption', title: 'Raw Material Shortage', frontDescription: 'Global shortage of key raw material. Your vendor\'s allocation cut by 50%.', details: ['Industry-wide shortage', 'Prices doubled', 'Vendor prioritizing larger customers', 'You may be deprioritized'], prompts: ['Can we secure guaranteed allocation?', 'Do we have alternate materials?', 'Can we pay premium for priority?', 'How do we reduce consumption?'], realWorldCheck: ['Raw material sourcing diversity?', 'Strategic reserves?', 'Substitute materials identified?'] },
  { id: 27, category: 'supply', categoryIcon: '🌍', categoryLabel: 'Supply Chain Disruption', title: 'Border Closure Impacts Deliveries', frontDescription: 'Border between you and vendor closed unexpectedly. Shipments halted indefinitely.', details: ['Political tensions escalated', 'No timeline for reopening', 'Inventory in transit stuck', 'Alternative routes add 2 weeks'], prompts: ['Can shipments reroute?', 'Do we have domestic alternatives?', 'What inventory do we have on hand?', 'How do we communicate delays?'], realWorldCheck: ['Cross-border dependencies?', 'Geopolitical risk assessment?', 'Domestic backup sources?'] },
  { id: 28, category: 'supply', categoryIcon: '🌍', categoryLabel: 'Supply Chain Disruption', title: 'Fuel Shortage Affects Logistics', frontDescription: 'Regional fuel shortage grounds your logistics vendor. Deliveries suspended.', details: ['Fuel rationing in effect', 'Priority given to emergency services', 'Unknown duration', 'Affects all carriers in region'], prompts: ['Can we use carriers from other regions?', 'Do we have inventory positioned locally?', 'Which deliveries are most critical?', 'Can customers pick up instead?'], realWorldCheck: ['Fuel dependency awareness?', 'Multi-region carrier relationships?', 'Local inventory strategy?'] },
  { id: 29, category: 'supply', categoryIcon: '🌍', categoryLabel: 'Supply Chain Disruption', title: 'Shipping Container Shortage', frontDescription: 'Global container shortage. Your vendor cannot ship for 8+ weeks.', details: ['No containers available', 'Rates 5x normal', 'Backlog across all ports', 'Even premium can\'t guarantee space'], prompts: ['Can we switch to air freight?', 'Do we have regional alternatives?', 'What\'s the cost impact?', 'How do we prioritize products?'], realWorldCheck: ['Shipping mode flexibility?', 'Container booking lead times?', 'Regional sourcing options?'] },
  { id: 30, category: 'supply', categoryIcon: '🌍', categoryLabel: 'Supply Chain Disruption', title: 'Climate Event Disrupts Operations', frontDescription: 'Severe drought affects your vendor\'s water-intensive production. Output reduced 60%.', details: ['Water rationing mandated', 'Production scaled back', 'Multiple vendors in region affected', 'No relief forecast'], prompts: ['Can we source from other regions?', 'Do we have buffer inventory?', 'Can vendor relocate production?', 'How do we allocate reduced supply?'], realWorldCheck: ['Climate risk assessment?', 'Water dependency awareness?', 'Geographic diversification?'] },

  // SMB-Specific Challenges (10 total including #2)
  { id: 31, category: 'smb', categoryIcon: '🏢', categoryLabel: 'SMB-Specific Challenge', title: 'Key Personnel Departure', frontDescription: 'Your vendor\'s technical lead quit. They were the only one who understood your integration.', details: ['No documentation exists', 'Replacement hiring will take months', 'Your integration at risk', 'Vendor CEO scrambling'], prompts: ['Can we document the integration ourselves?', 'Do we send our team to help?', 'Should we rebuild internally?', 'Is vendor still viable?'], realWorldCheck: ['Key person dependencies identified?', 'Documentation requirements in contracts?', 'Knowledge transfer procedures?'] },
  { id: 32, category: 'smb', categoryIcon: '🏢', categoryLabel: 'SMB-Specific Challenge', title: 'Vendor Financial Distress', frontDescription: 'News reports your vendor missed payroll. Deliveries continue but viability uncertain.', details: ['Missed payroll last week', 'Sole source for regional deliveries', 'No immediate disruption yet', 'Contract has 90-day termination'], prompts: ['How do we verify financial situation?', 'Do we accelerate alternate qualification?', 'Should we adjust payment terms?', 'What triggers our exit?'], realWorldCheck: ['Financial health monitoring?', 'Early warning indicators?', 'Exit trigger definitions?'] },
  { id: 33, category: 'smb', categoryIcon: '🏢', categoryLabel: 'SMB-Specific Challenge', title: 'Vendor Bank Account Frozen', frontDescription: 'Your vendor\'s accounts frozen due to tax dispute. They can\'t pay suppliers or staff.', details: ['IRS enforcement action', 'Staff working without pay', 'Suppliers stopping shipments', 'Vendor operations grinding down'], prompts: ['How long can they operate?', 'Can we prepay to keep them running?', 'Do we find alternate immediately?', 'What\'s our legal exposure?'], realWorldCheck: ['Vendor tax compliance?', 'Financial stability indicators?', 'Prepayment risk controls?'] },
  { id: 34, category: 'smb', categoryIcon: '🏢', categoryLabel: 'SMB-Specific Challenge', title: 'Vendor Acquired by Competitor', frontDescription: 'Your competitor just acquired your key SMB vendor. Conflict of interest looms.', details: ['Acquisition announced today', 'Competitor now sees your data/specs', 'Contract honored for now', 'Future relationship uncertain'], prompts: ['What confidential info did vendor have?', 'Can we exit the contract?', 'How quickly can we switch?', 'What legal protections exist?'], realWorldCheck: ['Confidentiality protections?', 'Change of control clauses?', 'Alternate vendor readiness?'] },
  { id: 35, category: 'smb', categoryIcon: '🏢', categoryLabel: 'SMB-Specific Challenge', title: 'Vendor Loses Major Client', frontDescription: 'Your SMB vendor lost their largest client. They\'re now 70% dependent on you.', details: ['Lost 50% of revenue overnight', 'Cash flow concerns', 'Over-reliance on your business', 'Pressure to raise your prices'], prompts: ['Are they still financially viable?', 'Do we diversify away from them?', 'Can we help them find other clients?', 'How do we manage pricing pressure?'], realWorldCheck: ['Vendor client concentration?', 'Revenue dependency monitoring?', 'Vendor financial reserves?'] },
  { id: 36, category: 'smb', categoryIcon: '🏢', categoryLabel: 'SMB-Specific Challenge', title: 'Family Dispute Disrupts Operations', frontDescription: 'Family-owned vendor in ownership dispute. Operations paralyzed by internal conflict.', details: ['Siblings fighting over control', 'Staff taking sides', 'Decision-making frozen', 'Lawyers involved'], prompts: ['Who do we work with?', 'Can operations continue during dispute?', 'Do we pause new orders?', 'How long can we wait?'], realWorldCheck: ['Ownership structure awareness?', 'Succession plans verified?', 'Governance stability?'] },
  { id: 37, category: 'smb', categoryIcon: '🏢', categoryLabel: 'SMB-Specific Challenge', title: 'Vendor Tech Systems Outdated', frontDescription: 'Your vendor\'s legacy systems failed. No parts available. Could be weeks to replace.', details: ['20-year-old systems', 'No manufacturer support', 'Custom replacement needed', 'Vendor has no IT staff'], prompts: ['Can we help source replacement?', 'Do we have technical resources to assist?', 'How long can we wait?', 'Should we accelerate modernization?'], realWorldCheck: ['Vendor technology assessments?', 'Legacy system dependencies?', 'Modernization requirements?'] },
  { id: 38, category: 'smb', categoryIcon: '🏢', categoryLabel: 'SMB-Specific Challenge', title: 'Vendor Loses Key Certification', frontDescription: 'Your vendor failed recertification audit. Can\'t supply regulated products until resolved.', details: ['Failed audit last week', 'Remediation timeline 60-90 days', 'Affects 30% of your products', 'No certified alternates nearby'], prompts: ['Can we help with remediation?', 'Do we have other certified sources?', 'Can we ship from existing inventory?', 'How do we communicate to customers?'], realWorldCheck: ['Certification expiry tracking?', 'Audit schedule awareness?', 'Certified alternatives mapped?'] },
  { id: 39, category: 'smb', categoryIcon: '🏢', categoryLabel: 'SMB-Specific Challenge', title: 'Vendor Relocates Without Notice', frontDescription: 'Your vendor moved facilities without telling you. Shipments to old address returned.', details: ['Discovered via returned shipment', 'New address unknown', 'Phone numbers unchanged', 'No response to messages'], prompts: ['How do we locate them?', 'Is this a red flag for other issues?', 'Are our materials/tooling at old site?', 'Should we find alternative immediately?'], realWorldCheck: ['Vendor communication protocols?', 'Site visit frequency?', 'Asset tracking at vendor?'] },

  // Regulatory/Compliance (10 total including #3)
  { id: 40, category: 'compliance', categoryIcon: '📋', categoryLabel: 'Regulatory/Compliance', title: 'Vendor Loses ISO Certification', frontDescription: 'Your manufacturer loses ISO certification. Products can\'t ship to regulated markets.', details: ['Certification suspended', '35% of production affected', 'Recertification 60-90 days', 'Existing inventory unaffected'], prompts: ['Can we shift to other facilities?', 'Which markets are affected?', 'Do we support recertification?', 'How do we prevent this in future?'], realWorldCheck: ['Certification status monitoring?', 'Expiration tracking?', 'Alternate certified facilities?'] },
  { id: 41, category: 'compliance', categoryIcon: '📋', categoryLabel: 'Regulatory/Compliance', title: 'Vendor Data Handling Violates GDPR', frontDescription: 'Audit reveals vendor processed EU data in non-compliant jurisdiction. You\'re liable.', details: ['Data transferred to non-EU servers', 'Discovered in routine audit', 'Regulator inquiry likely', 'Potential significant fines'], prompts: ['What data was transferred?', 'How do we notify affected individuals?', 'What\'s our legal exposure?', 'How do we remediate immediately?'], realWorldCheck: ['Vendor data processing audits?', 'Data residency verification?', 'Processing agreement compliance?'] },
  { id: 42, category: 'compliance', categoryIcon: '📋', categoryLabel: 'Regulatory/Compliance', title: 'Vendor Cannot Provide SOC 2', frontDescription: 'During due diligence, critical vendor cannot produce SOC 2 report. Audit committee concerned.', details: ['Vendor has no SOC 2', 'Never completed assessment', 'Your policy requires it', 'Audit committee asking questions'], prompts: ['Can we accept alternative evidence?', 'Do we fund their SOC 2 assessment?', 'What\'s timeline to find alternative?', 'How do we satisfy audit committee?'], realWorldCheck: ['SOC 2 requirements in contracts?', 'Alternative assurance accepted?', 'Vendor assessment standards?'] },
  { id: 43, category: 'compliance', categoryIcon: '📋', categoryLabel: 'Regulatory/Compliance', title: 'New Regulation Requires Unverified Capability', frontDescription: 'New regulation requires vendor capability you\'ve never verified. Compliance deadline in 30 days.', details: ['Regulation just announced', '30-day compliance window', 'Applies to multiple vendors', 'Penalties for non-compliance'], prompts: ['How do we assess all vendors quickly?', 'What if vendors can\'t comply?', 'Do we have compliant alternatives?', 'How do we document our efforts?'], realWorldCheck: ['Regulatory horizon scanning?', 'Vendor capability assessments?', 'Rapid assessment processes?'] },
  { id: 44, category: 'compliance', categoryIcon: '📋', categoryLabel: 'Regulatory/Compliance', title: 'Vendor License Suspended', frontDescription: 'Your vendor\'s operating license suspended for violations. Must cease operations immediately.', details: ['License pulled yesterday', 'Violations were repeat offenses', 'Appeals process takes months', 'No operations allowed during appeal'], prompts: ['How critical is this vendor?', 'What inventory is at their site?', 'Do we have licensed alternatives?', 'What\'s our contractual position?'], realWorldCheck: ['Vendor license monitoring?', 'Compliance history awareness?', 'Licensed alternatives mapped?'] },
  { id: 45, category: 'compliance', categoryIcon: '📋', categoryLabel: 'Regulatory/Compliance', title: 'Vendor Fails Industry Audit', frontDescription: 'Your vendor failed industry-specific audit. Your products made there can\'t be sold until resolved.', details: ['Industry body audit failed', 'Products quarantined', 'Remediation required', 'Timeline to resolution unclear'], prompts: ['What products are affected?', 'Do we have compliant alternatives?', 'Can we help vendor remediate?', 'How do we communicate to customers?'], realWorldCheck: ['Industry audit schedules?', 'Pre-audit assessments?', 'Compliant alternatives identified?'] },
  { id: 46, category: 'compliance', categoryIcon: '📋', categoryLabel: 'Regulatory/Compliance', title: 'Vendor Contract Violates New Law', frontDescription: 'New legislation makes clause in your vendor contract unenforceable. Relationship terms unclear.', details: ['Law effective immediately', 'Key clause now void', 'Vendor wants to renegotiate everything', 'Legal reviewing implications'], prompts: ['What protections did we lose?', 'How do we renegotiate fairly?', 'Do we have leverage?', 'What\'s our exposure during uncertainty?'], realWorldCheck: ['Legislative monitoring?', 'Contract review processes?', 'Legal update procedures?'] },
  { id: 47, category: 'compliance', categoryIcon: '📋', categoryLabel: 'Regulatory/Compliance', title: 'Vendor Environmental Compliance Failure', frontDescription: 'Your vendor fined for environmental violations. ESG concerns raised about your supply chain.', details: ['Major fine announced', 'Media coverage growing', 'Your ESG report references them', 'Investor questions coming'], prompts: ['Do we terminate relationship?', 'What\'s our public response?', 'Can we verify remediation?', 'How do we update ESG disclosures?'], realWorldCheck: ['Vendor ESG monitoring?', 'Environmental compliance verification?', 'Supply chain disclosure accuracy?'] },
  { id: 48, category: 'compliance', categoryIcon: '📋', categoryLabel: 'Regulatory/Compliance', title: 'Vendor Labor Practice Investigation', frontDescription: 'Government investigating your vendor for labor violations. Association risk to your brand.', details: ['Investigation announced', 'Allegations are serious', 'Media connecting to your products', 'Activists targeting your brand'], prompts: ['Do we suspend the relationship?', 'What\'s our public statement?', 'How do we verify the allegations?', 'What due diligence did we do?'], realWorldCheck: ['Vendor labor audits?', 'Social compliance verification?', 'Due diligence documentation?'] },
  { id: 49, category: 'compliance', categoryIcon: '📋', categoryLabel: 'Regulatory/Compliance', title: 'Cross-Border Data Transfer Blocked', frontDescription: 'New ruling blocks data transfers to your vendor\'s country. Operations require this data.', details: ['Court ruling immediate', 'No transition period', 'Standard clauses insufficient', 'Operations depend on data flow'], prompts: ['Can we localize data processing?', 'Does vendor have compliant facilities?', 'What operations are affected?', 'How quickly can we restructure?'], realWorldCheck: ['Data transfer dependencies?', 'Vendor facility locations?', 'Data localization capabilities?'] },
  { id: 50, category: 'compliance', categoryIcon: '📋', categoryLabel: 'Regulatory/Compliance', title: 'Vendor Anti-Bribery Violation', frontDescription: 'Your vendor is under investigation for bribery. Your transactions are being scrutinized.', details: ['DOJ investigation ongoing', 'Your contracts being reviewed', 'Potential FCPA implications', 'Board wants immediate answers'], prompts: ['What due diligence did we do?', 'Are our transactions implicated?', 'Do we suspend relationship?', 'How do we cooperate with investigation?'], realWorldCheck: ['Anti-bribery due diligence?', 'Third-party screening?', 'Transaction monitoring?'] }
];

// Demo wild cards (6 - one per category)
const demoWildCards = [
  { id: 1, category: 'resource', categoryIcon: '🔥', categoryLabel: 'Resource Loss', title: 'Key Decision Maker Unavailable', description: 'Your BC lead is unreachable for the next 2 hours.', consider: ['Who has backup authority?', 'What decisions can wait?', 'Are delegation protocols documented?'] },
  { id: 2, category: 'time', categoryIcon: '⏰', categoryLabel: 'Time Pressure', title: 'Media Inquiry Incoming', description: 'A journalist is calling in 30 minutes asking about this vendor disruption.', consider: ['What do you say?', 'What do you hold back?', 'Who speaks to media?'] },
  { id: 3, category: 'cascade', categoryIcon: '🌊', categoryLabel: 'Cascading Failure', title: 'Second Vendor Also Impacted', description: 'A second vendor uses the same sub-supplier. They\'re also disrupted.', consider: ['How did you miss this?', 'What\'s your third option?', 'How do you prioritize?'] },
  { id: 4, category: 'stakeholder', categoryIcon: '👥', categoryLabel: 'Stakeholder Complication', title: 'Customer Panic Spiral', description: 'Your three largest customers threaten to leave. They want proof of recovery in 24 hours.', consider: ['What evidence can you provide?', 'What promises are realistic?', 'Who communicates with them?'] },
  { id: 5, category: 'fog', categoryIcon: '🌫️', categoryLabel: 'Information Fog', title: 'Conflicting Information', description: 'Vendor says 6 hours. Their support says 3 days. Social media says weeks.', consider: ['How do you decide with bad info?', 'What\'s your planning assumption?', 'How do you verify?'] },
  { id: 6, category: 'external', categoryIcon: '🌍', categoryLabel: 'External Shock', title: 'Concurrent Internal Crisis', description: 'While managing this vendor failure, your own facility experiences an unrelated incident.', consider: ['How do you split resources?', 'Which crisis takes priority?', 'Who leads each response?'] }
];

// Full wild cards (48)
const fullWildCards = [
  ...demoWildCards,
  // Resource Loss (9 more = 10 total)
  { id: 7, category: 'resource', categoryIcon: '🔥', categoryLabel: 'Resource Loss', title: 'Budget Freeze', description: 'Finance froze all discretionary spending. No new contracts or emergency purchases.', consider: ['What exists in current agreements?', 'How do you escalate for approval?', 'What\'s the cost of NOT spending?'] },
  { id: 8, category: 'resource', categoryIcon: '🔥', categoryLabel: 'Resource Loss', title: 'Communication Blackout', description: 'Your primary communication platform is down. Email/Slack/Teams unavailable.', consider: ['What backup channels exist?', 'How do you coordinate internally?', 'How do you reach vendors?'] },
  { id: 9, category: 'resource', categoryIcon: '🔥', categoryLabel: 'Resource Loss', title: 'Subject Matter Expert On Leave', description: 'The person who manages this vendor relationship is on vacation, unreachable.', consider: ['Who else knows this vendor?', 'Where is documentation?', 'Do you wait or proceed?'] },
  { id: 10, category: 'resource', categoryIcon: '🔥', categoryLabel: 'Resource Loss', title: 'Legal Team Delay', description: 'Your legal team is tied up with another crisis. 48-hour delay on any reviews.', consider: ['Do you proceed without legal?', 'What decisions need their input?', 'What\'s the risk of delay?'] },
  { id: 11, category: 'resource', categoryIcon: '🔥', categoryLabel: 'Resource Loss', title: 'Insurance Coverage Gap', description: 'Your insurance doesn\'t cover this type of vendor failure. All costs from operating budget.', consider: ['What\'s the financial impact?', 'How does this change decisions?', 'Who approves unbudgeted spend?'] },
  { id: 12, category: 'resource', categoryIcon: '🔥', categoryLabel: 'Resource Loss', title: 'Vendor Contact Ghosting', description: 'Your primary vendor contact isn\'t responding. Backup also unavailable.', consider: ['How do you escalate at vendor?', 'Do you have executive contacts?', 'At what point do you invoke alternates?'] },
  { id: 13, category: 'resource', categoryIcon: '🔥', categoryLabel: 'Resource Loss', title: 'Executive Override', description: 'A C-suite executive demands hourly updates. 20% of response time consumed by reporting.', consider: ['How do you balance action vs. reporting?', 'Can you delegate updates?', 'What format is most efficient?'] },
  { id: 14, category: 'resource', categoryIcon: '🔥', categoryLabel: 'Resource Loss', title: 'Procurement Team Unavailable', description: 'Procurement is engaged with another crisis. Can\'t onboard new vendors through standard channels.', consider: ['What emergency processes exist?', 'Can you use existing contracts?', 'Who has purchasing authority?'] },
  { id: 15, category: 'resource', categoryIcon: '🔥', categoryLabel: 'Resource Loss', title: 'IT Resources Maxed Out', description: 'IT is dealing with an unrelated outage. Technical support for vendor integration limited.', consider: ['What can you do without IT?', 'How do you prioritize their time?', 'What workarounds exist?'] },
  
  // Time Pressure (7 more = 8 total)
  { id: 16, category: 'time', categoryIcon: '⏰', categoryLabel: 'Time Pressure', title: 'Regulator Notification Required', description: 'Regulations require notification within 4 hours. Clock is ticking.', consider: ['What evidence do you provide?', 'How do you document unknowns?', 'Who owns regulatory relationship?'] },
  { id: 17, category: 'time', categoryIcon: '⏰', categoryLabel: 'Time Pressure', title: 'Customer SLA Breach Imminent', description: 'You have 2 hours before SLA penalties kick in. Current recovery is 6+ hours.', consider: ['Do you invoke alternates?', 'Do you offer credits proactively?', 'How do you manage expectations?'] },
  { id: 18, category: 'time', categoryIcon: '⏰', categoryLabel: 'Time Pressure', title: 'Peak Season Crisis', description: 'This failure is happening during your busiest period. Every hour = 3x normal loss.', consider: ['How do priorities shift?', 'What shortcuts are acceptable?', 'What\'s the reputational impact?'] },
  { id: 19, category: 'time', categoryIcon: '⏰', categoryLabel: 'Time Pressure', title: 'Competitor Exploit Window', description: 'Your competitor knows about your issue and is launching targeted campaign.', consider: ['How do you retain customers?', 'What\'s your counter-messaging?', 'Do you acknowledge the issue publicly?'] },
  { id: 20, category: 'time', categoryIcon: '⏰', categoryLabel: 'Time Pressure', title: 'Vendor Ransom Deadline', description: 'Vendor received ransom demand with 12-hour deadline. They want your input on paying.', consider: ['What\'s your recommendation?', 'What are the implications?', 'Who else needs to weigh in?'] },
  { id: 21, category: 'time', categoryIcon: '⏰', categoryLabel: 'Time Pressure', title: 'Board Meeting Tomorrow', description: 'The board wants full briefing in 18 hours. Need to demonstrate control.', consider: ['How do you present an unfolding crisis?', 'What decisions need board input?', 'What materials do you need?'] },
  { id: 22, category: 'time', categoryIcon: '⏰', categoryLabel: 'Time Pressure', title: 'Contract Renewal Deadline', description: 'This failing vendor\'s contract is up for renewal next week.', consider: ['Do you renew during crisis?', 'How does failure inform terms?', 'What leverage do you have?'] },
  
  // Cascading Failures (7 more = 8 total)
  { id: 23, category: 'cascade', categoryIcon: '🌊', categoryLabel: 'Cascading Failure', title: 'Internal System Dependency Discovered', description: 'You just learned your internal system depends on this vendor more than documented.', consider: ['How do you map true dependencies?', 'Who else needs to be involved?', 'How do you reassess impact?'] },
  { id: 24, category: 'cascade', categoryIcon: '🌊', categoryLabel: 'Cascading Failure', title: 'Vendor\'s Vendor Failed', description: 'Root cause is your vendor\'s supplier. Your vendor has no alternate source.', consider: ['Can you influence fourth-party?', 'Do you help source alternatives?', 'What visibility should you have had?'] },
  { id: 25, category: 'cascade', categoryIcon: '🌊', categoryLabel: 'Cascading Failure', title: 'Geographic Concentration Risk', description: 'You discover 4 vendors share the same data center. All affected simultaneously.', consider: ['How did diversification fail?', 'What\'s your actual redundancy?', 'How do you restructure?'] },
  { id: 26, category: 'cascade', categoryIcon: '🌊', categoryLabel: 'Cascading Failure', title: 'Shared Technology Platform', description: 'Multiple vendors use same cloud platform, which is experiencing outage.', consider: ['How many vendors affected?', 'Is this portfolio-level crisis?', 'How do you coordinate response?'] },
  { id: 27, category: 'cascade', categoryIcon: '🌊', categoryLabel: 'Cascading Failure', title: 'Regulatory Scrutiny Expands', description: 'What started as vendor issue is triggering broader compliance review.', consider: ['What evidence do you need?', 'How do you manage scope?', 'What resources do you need?'] },
  { id: 28, category: 'cascade', categoryIcon: '🌊', categoryLabel: 'Cascading Failure', title: 'Customer Data Exposure', description: 'You discover customer data was stored at impacted vendor. Privacy crisis emerges.', consider: ['What notification is required?', 'What data was exposed?', 'How do you manage two crises?'] },
  { id: 29, category: 'cascade', categoryIcon: '🌊', categoryLabel: 'Cascading Failure', title: 'Financial Contagion', description: 'The failing vendor owes you $500k. They may not survive to deliver or refund.', consider: ['How do you protect receivables?', 'Does this change your response?', 'What\'s the write-off impact?'] },
  
  // Stakeholder Complications (7 more = 8 total)
  { id: 30, category: 'stakeholder', categoryIcon: '👥', categoryLabel: 'Stakeholder Complication', title: 'Vendor Blames You', description: 'Vendor publicly claims disruption is due to your specifications.', consider: ['How do you respond publicly?', 'What\'s the relationship impact?', 'What evidence do you have?'] },
  { id: 31, category: 'stakeholder', categoryIcon: '👥', categoryLabel: 'Stakeholder Complication', title: 'Internal Blame Game', description: 'Procurement blames BC. BC blames Procurement. Leadership wants accountability.', consider: ['How do you refocus on response?', 'When do you do post-mortem?', 'How do you maintain team cohesion?'] },
  { id: 32, category: 'stakeholder', categoryIcon: '👥', categoryLabel: 'Stakeholder Complication', title: 'Competitor Poaching Campaign', description: 'Competitor actively reaching out to your customers offering alternatives.', consider: ['How do you stabilize customers?', 'What can you offer to retain?', 'Who leads retention effort?'] },
  { id: 33, category: 'stakeholder', categoryIcon: '👥', categoryLabel: 'Stakeholder Complication', title: 'Union/Labor Involvement', description: 'Workers at vendor threatening to strike during your crisis.', consider: ['Do you have influence?', 'How does this change timeline?', 'What\'s your contingency?'] },
  { id: 34, category: 'stakeholder', categoryIcon: '👥', categoryLabel: 'Stakeholder Complication', title: 'Activist Investor Pressure', description: 'Activist investor using this failure to challenge management.', consider: ['How do you respond to board?', 'What\'s the governance impact?', 'How do you manage narrative?'] },
  { id: 35, category: 'stakeholder', categoryIcon: '👥', categoryLabel: 'Stakeholder Complication', title: 'Audit Committee Summons', description: 'Audit committee wants you in meeting in 4 hours to explain due diligence.', consider: ['What evidence do you present?', 'Who else should attend?', 'How do you balance prep vs. response?'] },
  { id: 36, category: 'stakeholder', categoryIcon: '👥', categoryLabel: 'Stakeholder Complication', title: 'Vendor CEO Calling Your CEO', description: 'Failing vendor\'s CEO bypassing you and going to your CEO.', consider: ['How do you maintain authority?', 'What narrative are they spinning?', 'How do you brief your CEO?'] },
  
  // Information Fog (7 more = 8 total)
  { id: 37, category: 'fog', categoryIcon: '🌫️', categoryLabel: 'Information Fog', title: 'Root Cause Unknown', description: '4 hours in, no one knows what caused the failure. Could be anything.', consider: ['How do you plan without knowing?', 'What assumptions do you make?', 'How do you communicate uncertainty?'] },
  { id: 38, category: 'fog', categoryIcon: '🌫️', categoryLabel: 'Information Fog', title: 'Vendor Communication Breakdown', description: 'Vendor went silent 2 hours ago. No updates, no ETAs.', consider: ['Do you assume worst case?', 'How do you escalate?', 'At what point invoke alternates?'] },
  { id: 39, category: 'fog', categoryIcon: '🌫️', categoryLabel: 'Information Fog', title: 'Scope Creep', description: 'What you thought was limited keeps expanding. Impact assessment obsolete every hour.', consider: ['How do you keep up?', 'When do you stop reassessing?', 'How do you communicate moving target?'] },
  { id: 40, category: 'fog', categoryIcon: '🌫️', categoryLabel: 'Information Fog', title: 'Contradictory Expert Opinions', description: 'Internal IT says 24 hours. Consultant says 2 weeks. Vendor says "working on it."', consider: ['Whose timeline do you use?', 'How do you reconcile opinions?', 'What\'s the cost of being wrong?'] },
  { id: 41, category: 'fog', categoryIcon: '🌫️', categoryLabel: 'Information Fog', title: 'Hidden Dependencies Surface', description: 'You\'re discovering undocumented integrations mid-crisis.', consider: ['How do you map quickly?', 'Who knows about these?', 'How do you update impact assessment?'] },
  { id: 42, category: 'fog', categoryIcon: '🌫️', categoryLabel: 'Information Fog', title: 'Misinformation Spreading', description: 'False information about crisis circulating on social media.', consider: ['Do you correct publicly?', 'How do you inform customers?', 'Who monitors social media?'] },
  { id: 43, category: 'fog', categoryIcon: '🌫️', categoryLabel: 'Information Fog', title: 'Vendor\'s Vendor is Opaque', description: 'Your vendor says their supplier is the problem but won\'t say who.', consider: ['Can you demand transparency?', 'How do you assess root cause?', 'What contractual rights do you have?'] },
  
  // External Shocks (5 more = 6 total)
  { id: 44, category: 'external', categoryIcon: '🌍', categoryLabel: 'External Shock', title: 'Market-Wide Disruption', description: 'The issue affecting your vendor is industry-wide. All alternates also affected.', consider: ['What makes you different?', 'How do you compete for scarce resources?', 'What\'s the industry response?'] },
  { id: 45, category: 'external', categoryIcon: '🌍', categoryLabel: 'External Shock', title: 'Regulatory Change Mid-Crisis', description: 'New regulation just dropped affecting how you can work with this vendor.', consider: ['Does this change your options?', 'Are you still compliant?', 'Who interprets the regulation?'] },
  { id: 46, category: 'external', categoryIcon: '🌍', categoryLabel: 'External Shock', title: 'Currency/Financial Shock', description: 'Exchange rates just shifted dramatically. Alternates now 30% more expensive.', consider: ['Do you absorb the cost?', 'Does budget change the decision?', 'How do you get approval?'] },
  { id: 47, category: 'external', categoryIcon: '🌍', categoryLabel: 'External Shock', title: 'Geopolitical Event', description: 'Political tensions escalated in vendor\'s country. Sanctions may apply.', consider: ['Are you still legally allowed to work with them?', 'What\'s the timeline for clarity?', 'Do you preemptively exit?'] },
  { id: 48, category: 'external', categoryIcon: '🌍', categoryLabel: 'External Shock', title: 'Natural Disaster Escalation', description: 'What started as storm is now federal emergency. Access to vendor restricted.', consider: ['How long will restrictions last?', 'Can anything move in or out?', 'How do you support vendor/staff?'] }
];

// Wild card categories
const wildCardCategories = [
  { id: 'resource', icon: '🔥', label: 'Resource Loss' },
  { id: 'time', icon: '⏰', label: 'Time Pressure' },
  { id: 'cascade', icon: '🌊', label: 'Cascading Failures' },
  { id: 'stakeholder', icon: '👥', label: 'Stakeholder Complications' },
  { id: 'fog', icon: '🌫️', label: 'Information Fog' },
  { id: 'external', icon: '🌍', label: 'External Shocks' }
];

// Scenario categories for index
const scenarioCategories = [
  { id: 'cyber', icon: '🔒', label: 'Vendor Cyber Incidents', range: '1-10' },
  { id: 'operational', icon: '📦', label: 'Vendor Operational Failures', range: '11-20' },
  { id: 'supply', icon: '🌍', label: 'Supply Chain Disruptions', range: '21-30' },
  { id: 'smb', icon: '🏢', label: 'SMB-Specific Challenges', range: '31-40' },
  { id: 'compliance', icon: '📋', label: 'Regulatory/Compliance', range: '41-50' }
];

export default function VendorResilienceDeck() {
  const [hasAccess, setHasAccess] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [accessError, setAccessError] = useState('');
  const [currentView, setCurrentView] = useState('main'); // main, scenario, wildcard, guide, access
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentWildCard, setCurrentWildCard] = useState(null);
  const [selectedWildCategory, setSelectedWildCategory] = useState(null);
  const [timerMinutes, setTimerMinutes] = useState(15);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerInput, setTimerInput] = useState('15');

  // Get available scenarios and wild cards based on access
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

  // Validate access code
  const validateAccessCode = () => {
    // Simple validation - in production, verify against server
    if (accessCode.toUpperCase().startsWith('CS-DECK-') && accessCode.length >= 12) {
      setHasAccess(true);
      setAccessError('');
      setCurrentView('main');
    } else {
      setAccessError('Invalid access code. Please check and try again.');
    }
  };

  // Draw random scenario
  const drawRandomScenario = () => {
    const randomIndex = Math.floor(Math.random() * availableScenarios.length);
    setSelectedScenario(availableScenarios[randomIndex]);
    setIsFlipped(false);
    setCurrentView('scenario');
  };

  // Select specific scenario
  const selectScenario = (scenario) => {
    setSelectedScenario(scenario);
    setIsFlipped(false);
    setCurrentView('scenario');
  };

  // Draw wild card from category
  const drawWildCard = (categoryId) => {
    const categoryCards = availableWildCards.filter(card => card.category === categoryId);
    const randomIndex = Math.floor(Math.random() * categoryCards.length);
    setCurrentWildCard(categoryCards[randomIndex]);
    setSelectedWildCategory(categoryId);
  };

  // Start timer
  const startTimer = () => {
    const mins = parseInt(timerInput) || 15;
    setTimerMinutes(mins);
    setTimerSeconds(0);
    setTimerRunning(true);
  };

  // Reset timer
  const resetTimer = () => {
    setTimerRunning(false);
    const mins = parseInt(timerInput) || 15;
    setTimerMinutes(mins);
    setTimerSeconds(0);
  };

  // Render header with logo
  const renderHeader = () => (
    <div style={{ 
      backgroundColor: '#fff', 
      padding: '16px 24px', 
      borderBottom: '2px solid #e86c3a',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ 
          fontSize: '24px', 
          fontWeight: 'bold',
          color: '#e86c3a'
        }}>Continuity</span>
        <span style={{ 
          fontSize: '24px', 
          fontWeight: 'bold',
          color: '#000'
        }}>Strength</span>
      </div>
      <div style={{ fontSize: '14px', color: '#666' }}>
        Vendor Resilience Exercise Deck
      </div>
    </div>
  );

  // Render main view
  const renderMain = () => (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '8px', color: '#333' }}>
        Vendor Resilience Exercise Deck
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '32px' }}>
        Test your team's response to vendor failures. Identify gaps before crises hit.
      </p>

      {!hasAccess && (
        <div style={{ 
          backgroundColor: '#fff3e0', 
          padding: '16px', 
          borderRadius: '8px', 
          marginBottom: '24px',
          border: '1px solid #e86c3a'
        }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', color: '#e86c3a' }}>
            Demo Mode: 3 scenarios + 6 wild cards
          </p>
          <p style={{ margin: '0', fontSize: '14px' }}>
            Get the full deck with 50 scenarios + 48 wild cards.{' '}
            <a href="http://continuitystrength.com/buycards" style={{ color: '#e86c3a' }}>
              Purchase now →
            </a>
          </p>
        </div>
      )}

      <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
        <button
          onClick={drawRandomScenario}
          style={{
            padding: '16px 24px',
            fontSize: '16px',
            backgroundColor: '#e86c3a',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          🎲 Draw Random Scenario
        </button>

        <button
          onClick={() => setCurrentView('guide')}
          style={{
            padding: '16px 24px',
            fontSize: '16px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          📋 Browse Scenarios & Select
        </button>

        <button
          onClick={() => setCurrentView('wildcard')}
          style={{
            padding: '16px 24px',
            fontSize: '16px',
            backgroundColor: '#fff',
            color: '#333',
            border: '2px solid #333',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          🎴 Draw Wild Card
        </button>

        {!hasAccess && (
          <button
            onClick={() => setCurrentView('access')}
            style={{
              padding: '16px 24px',
              fontSize: '16px',
              backgroundColor: '#fff',
              color: '#e86c3a',
              border: '2px solid #e86c3a',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            🔓 Enter Access Code for Full Deck
          </button>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <a 
          href="http://continuitystrength.com/buycards"
          style={{ 
            color: '#e86c3a', 
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Get the full deck: 50 scenarios + 48 wild cards →
        </a>
      </div>
    </div>
  );

  // Render scenario card
  const renderScenario = () => {
    if (!selectedScenario) return null;

    return (
      <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
        <button
          onClick={() => setCurrentView('main')}
          style={{
            marginBottom: '16px',
            padding: '8px 16px',
            backgroundColor: 'transparent',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ← Back to Deck
        </button>

        {/* Timer Controls */}
        <div style={{ 
          marginBottom: '16px', 
          padding: '12px', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontWeight: 'bold' }}>Timer:</span>
          <input
            type="number"
            value={timerInput}
            onChange={(e) => setTimerInput(e.target.value)}
            style={{ width: '60px', padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }}
            min="1"
            max="60"
          />
          <span>minutes</span>
          <button
            onClick={startTimer}
            style={{
              padding: '4px 12px',
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Start
          </button>
          <button
            onClick={resetTimer}
            style={{
              padding: '4px 12px',
              backgroundColor: '#666',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>
          <span style={{ 
            fontWeight: 'bold', 
            fontSize: '18px',
            color: timerMinutes === 0 && timerSeconds < 60 ? '#f44336' : '#333'
          }}>
            {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
          </span>
        </div>

        {/* Card */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          style={{
            perspective: '1000px',
            cursor: 'pointer'
          }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            minHeight: '400px',
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}>
            {/* Front */}
            <div style={{
              position: 'absolute',
              width: '100%',
              minHeight: '400px',
              backfaceVisibility: 'hidden',
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <div style={{
                  backgroundColor: '#e86c3a',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  CS
                </div>
                <span style={{ fontSize: '12px', color: '#666' }}>
                  {selectedScenario.categoryIcon} {selectedScenario.categoryLabel}
                </span>
              </div>

              <h2 style={{ 
                fontSize: '24px', 
                marginBottom: '16px', 
                color: '#e86c3a',
                flexGrow: 0
              }}>
                {selectedScenario.title}
              </h2>

              <p style={{ 
                fontSize: '16px', 
                lineHeight: '1.6', 
                color: '#333',
                flexGrow: 1
              }}>
                {selectedScenario.frontDescription}
              </p>

              <div style={{ 
                textAlign: 'center', 
                marginTop: '24px',
                color: '#666',
                fontSize: '14px'
              }}>
                Click to flip →
              </div>

              <div style={{ 
                textAlign: 'center', 
                marginTop: '16px',
                fontSize: '10px',
                color: '#999'
              }}>
                © Continuity Strength 2025
              </div>
            </div>

            {/* Back */}
            <div style={{
              position: 'absolute',
              width: '100%',
              minHeight: '400px',
              backfaceVisibility: 'hidden',
              backgroundColor: '#f5f5f5',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              padding: '24px',
              transform: 'rotateY(180deg)',
              overflow: 'auto'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '12px'
              }}>
                <div style={{
                  backgroundColor: '#e86c3a',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  CS
                </div>
              </div>

              <h3 style={{ fontSize: '14px', color: '#e86c3a', marginBottom: '8px' }}>
                SCENARIO DETAILS:
              </h3>
              <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px' }}>
                {selectedScenario.details.map((detail, i) => (
                  <li key={i} style={{ marginBottom: '4px' }}>{detail}</li>
                ))}
              </ul>

              <h3 style={{ fontSize: '14px', color: '#e86c3a', marginBottom: '8px' }}>
                DISCUSSION PROMPTS:
              </h3>
              <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px' }}>
                {selectedScenario.prompts.map((prompt, i) => (
                  <li key={i} style={{ marginBottom: '4px' }}>□ {prompt}</li>
                ))}
              </ul>

              <h3 style={{ fontSize: '14px', color: '#e86c3a', marginBottom: '8px' }}>
                REAL-WORLD CHECK:
              </h3>
              <p style={{ fontSize: '12px', marginBottom: '8px', color: '#666' }}>
                Do you actually know:
              </p>
              <ul style={{ margin: '0 0 16px 0', paddingLeft: '20px', fontSize: '13px' }}>
                {selectedScenario.realWorldCheck.map((check, i) => (
                  <li key={i} style={{ marginBottom: '4px' }}>✓ {check}</li>
                ))}
              </ul>

              {!hasAccess && (
                <div style={{ 
                  marginTop: '16px', 
                  padding: '12px', 
                  backgroundColor: '#fff3e0', 
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <a 
                    href="http://continuitystrength.com/buycards"
                    style={{ color: '#e86c3a', fontWeight: 'bold', textDecoration: 'none' }}
                  >
                    Want 47 more scenarios? Get the full deck →
                  </a>
                </div>
              )}

              <div style={{ 
                textAlign: 'center', 
                marginTop: '16px',
                fontSize: '10px',
                color: '#999'
              }}>
                © Continuity Strength 2025
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <button
            onClick={() => setCurrentView('wildcard')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            🎴 Add Wild Card Challenge
          </button>
        </div>
      </div>
    );
  };

  // Render wild card view
  const renderWildCard = () => (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <button
        onClick={() => {
          setCurrentView(selectedScenario ? 'scenario' : 'main');
          setCurrentWildCard(null);
          setSelectedWildCategory(null);
        }}
        style={{
          marginBottom: '16px',
          padding: '8px 16px',
          backgroundColor: 'transparent',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back
      </button>

      {!currentWildCard ? (
        <>
          <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>
            Select Wild Card Category
          </h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {wildCardCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => drawWildCard(cat.id)}
                style={{
                  padding: '16px',
                  backgroundColor: '#fff',
                  border: '2px solid #333',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '16px'
                }}
              >
                <span style={{ fontSize: '20px', marginRight: '12px' }}>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            padding: '24px'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              marginBottom: '16px'
            }}>
              <div style={{
                backgroundColor: '#e86c3a',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                CS
              </div>
              <span style={{ 
                fontSize: '12px', 
                padding: '4px 8px', 
                backgroundColor: '#333', 
                color: '#fff', 
                borderRadius: '4px' 
              }}>
                🎴 WILD CARD
              </span>
            </div>

            <div style={{ fontSize: '24px', marginBottom: '8px' }}>
              {currentWildCard.categoryIcon}
            </div>
            
            <h2 style={{ 
              fontSize: '20px', 
              marginBottom: '16px', 
              color: '#e86c3a' 
            }}>
              {currentWildCard.title}
            </h2>

            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.6', 
              marginBottom: '24px' 
            }}>
              {currentWildCard.description}
            </p>

            <h3 style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              CONSIDER:
            </h3>
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px' }}>
              {currentWildCard.consider.map((item, i) => (
                <li key={i} style={{ marginBottom: '4px' }}>{item}</li>
              ))}
            </ul>

            <div style={{ 
              textAlign: 'center', 
              marginTop: '24px',
              fontSize: '10px',
              color: '#999'
            }}>
              © Continuity Strength 2025
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            marginTop: '16px',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => {
                setCurrentWildCard(null);
                setCurrentView(selectedScenario ? 'scenario' : 'main');
              }}
              style={{
                padding: '12px 24px',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Use This Card
            </button>
            <button
              onClick={() => drawWildCard(selectedWildCategory)}
              style={{
                padding: '12px 24px',
                backgroundColor: '#666',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Draw Another
            </button>
          </div>

          {!hasAccess && (
            <div style={{ 
              marginTop: '24px', 
              padding: '12px', 
              backgroundColor: '#fff3e0', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{ margin: '0', fontSize: '14px' }}>
                Demo includes 6 wild cards. Full deck has 48.{' '}
                <a href="http://continuitystrength.com/buycards" style={{ color: '#e86c3a' }}>
                  Get full deck →
                </a>
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );

  // Render guide/index view
  const renderGuide = () => (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <button
        onClick={() => setCurrentView('main')}
        style={{
          marginBottom: '16px',
          padding: '8px 16px',
          backgroundColor: 'transparent',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back to Deck
      </button>

      <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>Scenario Index</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>
        Click any scenario to begin exercise
      </p>

      {!hasAccess && (
        <div style={{ 
          backgroundColor: '#fff3e0', 
          padding: '12px', 
          borderRadius: '8px', 
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          <p style={{ margin: '0', fontSize: '14px' }}>
            Demo: 3 scenarios available. Full deck has 50.{' '}
            <a href="http://continuitystrength.com/buycards" style={{ color: '#e86c3a' }}>
              Get full deck →
            </a>
          </p>
        </div>
      )}

      {scenarioCategories.map(category => {
        const categoryScenarios = availableScenarios.filter(s => 
          s.category === category.id || 
          (category.id === 'cyber' && s.category === 'cyber') ||
          (category.id === 'operational' && s.category === 'operational') ||
          (category.id === 'supply' && s.category === 'supply') ||
          (category.id === 'smb' && s.category === 'smb') ||
          (category.id === 'compliance' && s.category === 'compliance')
        );

        if (categoryScenarios.length === 0) return null;

        return (
          <div key={category.id} style={{ marginBottom: '24px' }}>
            <h3 style={{ 
              fontSize: '16px', 
              color: '#e86c3a', 
              marginBottom: '12px',
              borderBottom: '1px solid #eee',
              paddingBottom: '8px'
            }}>
              {category.icon} {category.label}
              {hasAccess && <span style={{ color: '#666', fontWeight: 'normal' }}> ({category.range})</span>}
            </h3>
            <div style={{ display: 'grid', gap: '8px' }}>
              {categoryScenarios.map(scenario => (
                <button
                  key={scenario.id}
                  onClick={() => selectScenario(scenario)}
                  style={{
                    padding: '12px 16px',
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <span style={{ 
                    color: '#999', 
                    fontSize: '12px',
                    minWidth: '24px'
                  }}>
                    #{scenario.id}
                  </span>
                  {scenario.title}
                </button>
              ))}
            </div>
          </div>
        );
      })}

      <div style={{ marginTop: '32px' }}>
        <h3 style={{ 
          fontSize: '16px', 
          color: '#333', 
          marginBottom: '12px',
          borderBottom: '1px solid #eee',
          paddingBottom: '8px'
        }}>
          🎴 Wild Card Categories
        </h3>
        <div style={{ display: 'grid', gap: '8px' }}>
          {wildCardCategories.map(cat => {
            const count = availableWildCards.filter(w => w.category === cat.id).length;
            return (
              <div
                key={cat.id}
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  fontSize: '14px',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <span>{cat.icon} {cat.label}</span>
                <span style={{ color: '#666' }}>{count} cards</span>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <a 
          href="http://continuitystrength.com/buycards"
          style={{ 
            color: '#e86c3a', 
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Get the full deck: 50 scenarios + 48 wild cards →
        </a>
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '24px',
        fontSize: '10px',
        color: '#999'
      }}>
        © Continuity Strength 2025
      </div>
    </div>
  );

  // Render access code entry
  const renderAccessEntry = () => (
    <div style={{ padding: '24px', maxWidth: '400px', margin: '0 auto' }}>
      <button
        onClick={() => setCurrentView('main')}
        style={{
          marginBottom: '16px',
          padding: '8px 16px',
          backgroundColor: 'transparent',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back
      </button>

      <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>
        Enter Access Code
      </h2>

      <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>
        Enter your access code to unlock the full deck with 50 scenarios and 48 wild cards.
      </p>

      <input
        type="text"
        value={accessCode}
        onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
        placeholder="CS-DECK-XXXX"
        style={{
          width: '100%',
          padding: '12px 16px',
          fontSize: '16px',
          border: '2px solid #ddd',
          borderRadius: '8px',
          marginBottom: '16px',
          textAlign: 'center',
          letterSpacing: '2px'
        }}
      />

      {accessError && (
        <p style={{ color: '#f44336', textAlign: 'center', marginBottom: '16px' }}>
          {accessError}
        </p>
      )}

      <button
        onClick={validateAccessCode}
        style={{
          width: '100%',
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#e86c3a',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Unlock Full Deck
      </button>

      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <p style={{ color: '#666', marginBottom: '8px' }}>
          Don't have an access code?
        </p>
        <a 
          href="http://continuitystrength.com/buycards"
          style={{ color: '#e86c3a', fontWeight: 'bold' }}
        >
          Purchase the full deck →
        </a>
      </div>
    </div>
  );

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#fafafa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {renderHeader()}
      
      {currentView === 'main' && renderMain()}
      {currentView === 'scenario' && renderScenario()}
      {currentView === 'wildcard' && renderWildCard()}
      {currentView === 'guide' && renderGuide()}
      {currentView === 'access' && renderAccessEntry()}
    </div>
  );
}

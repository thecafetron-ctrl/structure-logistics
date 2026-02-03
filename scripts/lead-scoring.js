// Lead Scoring System for Structure Logistics
// Automatically scores and ranks new leads based on multiple factors

const db = {
  prospects: [
    {
      id: 1,
      name: "Ahmed Al-Fayed",
      email: "ahmed@globalfreight.com",
      company: "Global Freight Forwarders Ltd",
      industry: "Freight Forwarding",
      revenue: "AED 50M-100M",
      website: "globalfreight.com",
      source: "LinkedIn",
      status: "prospect",
      score: 0
    },
    {
      id: 2,
      name: "Sara Hassan",
      email: "sara@fasttracklogistics.com",
      company: "FastTrack Logistics",
      industry: "3PL",
      revenue: "AED 20M-50M",
      website: "fasttracklogistics.com",
      source: "Apollo.io",
      status: "prospect",
      score: 0
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael@pacificcargo.com",
      company: "Pacific Cargo Solutions",
      industry: "Freight Forwarding",
      revenue: "AED 100M+",
      website: "pacificcargo.com",
      source: "Manual",
      status: "prospect",
      score: 0
    }
  ]
};

// Lead scoring weights
const weights = {
  companyRevenue: 20,      // Higher revenue = higher priority
  industryMatch: 25,       // Freight forwarder/3PL = high priority
  leadSource: 15,          // LinkedIn = higher than Apollo
  websiteAuthority: 15,    // .com domains = higher authority
  emailFormat: 10,         // Proper email format = better
  status: 25               // Manual = very high priority initially
};

// Scoring factors
function scoreLead(lead) {
  let totalScore = 0;
  let factors = {};

  // Company revenue score
  if (lead.revenue === "AED 100M+") {
    factors.companyRevenue = weights.companyRevenue;
    totalScore += weights.companyRevenue;
  } else if (lead.revenue === "AED 50M-100M") {
    factors.companyRevenue = weights.companyRevenue * 0.7;
    totalScore += weights.companyRevenue * 0.7;
  } else if (lead.revenue === "AED 20M-50M") {
    factors.companyRevenue = weights.companyRevenue * 0.5;
    totalScore += weights.companyRevenue * 0.5;
  }

  // Industry match score
  if (lead.industry === "Freight Forwarding" || lead.industry === "3PL") {
    factors.industryMatch = weights.industryMatch;
    totalScore += weights.industryMatch;
  }

  // Lead source score
  if (lead.source === "LinkedIn") {
    factors.leadSource = weights.leadSource;
    totalScore += weights.leadSource;
  } else if (lead.source === "Apollo.io") {
    factors.leadSource = weights.leadSource * 0.7;
    totalScore += weights.leadSource * 0.7;
  } else if (lead.source === "Manual") {
    factors.leadSource = weights.leadSource * 0.5;
    totalScore += weights.leadSource * 0.5;
  }

  // Website authority score
  if (lead.website.endsWith('.com')) {
    factors.websiteAuthority = weights.websiteAuthority;
    totalScore += weights.websiteAuthority;
  }

  // Email format score
  if (lead.email.includes('@') && lead.email.includes('.')) {
    factors.emailFormat = weights.emailFormat;
    totalScore += weights.emailFormat;
  }

  // Status score
  if (lead.status === "prospect") {
    factors.status = weights.status;
    totalScore += weights.status;
  }

  // Return scored lead with all original properties preserved
  return {
    ...lead,
    totalScore,
    factors
  };
}

// Rank leads by score
function rankLeads(leads) {
  return leads
    .map(scoreLead)
    .sort((a, b) => b.totalScore - a.totalScore);
}

// Generate outreach priority list
function generatePriorityList(leads) {
  const ranked = rankLeads(leads);

  return {
    tier1: ranked.slice(0, 3).map(lead => ({
      ...lead,
      outreachType: "Immediate",
      recommendedAction: "Send personalized outreach + follow up within 2 hours"
    })),
    tier2: ranked.slice(3, 6).map(lead => ({
      ...lead,
      outreachType: "Today",
      recommendedAction: "Add to email sequence, follow up tomorrow"
    })),
    tier3: ranked.slice(6).map(lead => ({
      ...lead,
      outreachType: "This Week",
      recommendedAction: "Add to CRM, follow up next week"
    })),
    ranked: ranked.map(lead => ({
      rank: leads.indexOf(lead) + 1,
      ...lead
    }))
  };
}

// Run the scoring system
console.log("=".repeat(70));
console.log("LEAD SCORING SYSTEM - Structure Logistics");
console.log("=".repeat(70));
console.log("\nScoring 3 prospects...\n");

const { tier1, tier2, tier3, ranked } = generatePriorityList(db.prospects);

console.log("📋 PRIORITY OUTREACH LIST");
console.log("-".repeat(70));

console.log("\n🥇 TIER 1 - Immediate Outreach (Top 3)");
console.log("Send to within 2 hours\n");
tier1.forEach((lead, index) => {
  console.log(`${index + 1}. ${lead.company} - ${lead.name}`);
  console.log(`   Email: ${lead.email}`);
  console.log(`   Score: ${lead.totalScore}/100`);
  console.log(`   Action: ${lead.recommendedAction}\n`);
});

console.log("🥈 TIER 2 - Outreach Today (Next 3)");
console.log("Add to email sequence, follow up tomorrow\n");
tier2.forEach((lead, index) => {
  console.log(`${index + 1}. ${lead.company} - ${lead.name}`);
  console.log(`   Email: ${lead.email}`);
  console.log(`   Score: ${lead.totalScore}/100`);
  console.log(`   Action: ${lead.recommendedAction}\n`);
});

console.log("🥉 TIER 3 - Outreach This Week (Remaining)");
console.log("Add to CRM, follow up next week\n");
tier3.forEach((lead, index) => {
  console.log(`${index + 1}. ${lead.company} - ${lead.name}`);
  console.log(`   Email: ${lead.email}`);
  console.log(`   Score: ${lead.totalScore}/100`);
  console.log(`   Action: ${lead.recommendedAction}\n`);
});

console.log("=".repeat(70));
console.log("📊 OVERALL RANKINGS");
console.log("-".repeat(70));

ranked.forEach((lead, index) => {
  console.log(`#${index + 1}. ${lead.company} - ${lead.name}`);
  console.log(`   Score: ${lead.totalScore}/100`);
  console.log(`   ${lead.factors.companyRevenue} - Revenue`);
  console.log(`   ${lead.factors.industryMatch} - Industry Match`);
  console.log(`   ${lead.factors.leadSource} - Lead Source`);
  console.log(`   ${lead.websiteAuthority} - Website Authority`);
  console.log(`   ${lead.factors.emailFormat} - Email Format`);
  console.log(`   ${lead.factors.status} - Status`);
  console.log("");
});

console.log("=".repeat(70));
console.log("✅ TOTAL LEADS SCORED: 3");
console.log("✅ LEADER: " + ranked[0].company + " (" + ranked[0].name + ")");
console.log("=".repeat(70));

module.exports = {
  scoreLead,
  rankLeads,
  generatePriorityList,
  db
};

// Email Outreach System for Structure Logistics
// Generates personalized outreach emails for decision makers

const prospects = [
  {
    name: "Ahmed Al-Fayed",
    title: "CEO",
    company: "Global Freight Forwarders Ltd",
    industry: "Freight Forwarding",
    revenue: "AED 50M-100M",
    email: "ahmed@globalfreight.com",
    painPoint: "Spending 20+ hours/week on manual quoting",
    goal: "Reduce quote time from hours to minutes"
  },
  {
    name: "Sara Hassan",
    title: "Operations Director",
    company: "FastTrack Logistics",
    industry: "3PL",
    revenue: "AED 20M-50M",
    email: "sara@fasttracklogistics.com",
    painPoint: "Losing 60% of quotes to competitors",
    goal: "Increase quote win rate to 85%+"
  },
  {
    name: "Michael Chen",
    title: "VP of Operations",
    company: "Pacific Cargo Solutions",
    industry: "Freight Forwarding",
    revenue: "AED 100M+",
    painPoint: "Manual quoting causing delays",
    goal: "Automate quote generation"
  }
];

function generateOutreachEmail(prospect, tone = "professional") {
  const templates = {
    professional: {
      subject: "AI automation for logistics - reducing quote time by 95%",
      body: `Hi ${prospect.name},

I saw that ${prospect.company} is handling freight forwarding operations. Many companies like yours are losing 60%+ of quotes to competitors due to manual quoting processes.

We help logistics companies automate quote generation using AI multi-agent systems. Our customers reduce quote time from 2-3 hours → 10-30 seconds, while maintaining 95% accuracy.

In fact, one 3PL company we worked with increased their win rate from 20% → 85% in 3 months.

Are you open to a 15-minute call to see how AI can transform your quoting process?

Best,
Molty
AI Automation Specialist`

    },
    direct: {
      subject: "Can we save you 20 hours/week on quoting?",
      body: `${prospect.name}, 

You're probably spending 20+ hours/week on manual quotes. Every hour you save is revenue you don't have to chase.

Our AI system generates accurate quotes in 10-30 seconds vs 2-3 hours. For a company like ${prospect.company}, that's potentially saving you 100+ hours/month.

Want to see it in action?

Best,
Molty`

    },
    value-driven: {
      subject: "How this 3PL company went from losing quotes to winning 85%",
      body: `Hi ${prospect.name},

${prospect.company} was losing 60% of their quotes. After implementing AI-automated quoting, they won 85%+ of quotes and saved AED 50k/month in operational costs.

We're now helping logistics companies do the same. Our system:

✅ Reduces quote time from hours → minutes
✅ Maintains 95% accuracy
✅ Auto-optimizes routes and rates
✅ Integrates with your existing systems

Are you open to seeing how it works?

Best,
Molty`

    }
  };

  return templates[tone] || templates.professional;
}

function generateFollowUp(prospect, day = 1) {
  const followUps = {
    1: {
      subject: `Re: AI automation for logistics`,
      body: `${prospect.name},

I wanted to follow up on my previous email. Many logistics companies are hesitant about AI initially, but those who adopt it are outperforming competitors by 10x.

Are you still open to seeing a quick demo?

Best,
Molty`
    },
    3: {
      subject: `Quick question about your quoting process`,
      body: `${prospect.name},

I noticed you haven't replied yet. I just wanted to make sure you got my previous email.

Are you currently happy with your manual quoting process, or would you be open to seeing how AI can help?

Best,
Molty`
    },
    5: {
      subject: `Final follow-up - AI for logistics`,
      body: `${prospect.name},

Last chance to see how AI automation can transform your quoting process.

I'd love to show you a 5-minute demo of how it works.

Best,
Molty`
    }
  };

  return followUps[day];
}

// Generate emails for all prospects
console.log("=".repeat(60));
console.log("EMAIL OUTREACH SYSTEM - Structure Logistics");
console.log("=".repeat(60));
console.log("\nTARGET: 3 prospects (1 email + 3 follow-ups each)\n");

prospects.forEach((prospect, index) => {
  console.log(`\n--- PROSPECT ${index + 1}: ${prospect.name} @ ${prospect.company} ---\n`);

  // Primary email
  console.log("📧 PRIMARY EMAIL:");
  const primary = generateOutreachEmail(prospect, "professional");
  console.log(`SUBJECT: ${primary.subject}\n`);
  console.log(primary.body);
  console.log(`\n---\n`);

  // Day 1 follow-up
  console.log(`📧 FOLLOW-UP (Day 1):`);
  const followUp1 = generateFollowUp(prospect, 1);
  console.log(`SUBJECT: ${followUp1.subject}\n`);
  console.log(followUp1.body);
  console.log(`\n---\n`);

  // Day 3 follow-up
  console.log(`📧 FOLLOW-UP (Day 3):`);
  const followUp3 = generateFollowUp(prospect, 3);
  console.log(`SUBJECT: ${followUp3.subject}\n`);
  console.log(followUp3.body);
  console.log(`\n---\n`);

  // Day 5 follow-up
  console.log(`📧 FOLLOW-UP (Day 5):`);
  const followUp5 = generateFollowUp(prospect, 5);
  console.log(`SUBJECT: ${followUp5.subject}\n`);
  console.log(followUp5.body);
  console.log(`\n---\n`);
});

console.log("\n" + "=".repeat(60));
console.log("TOTAL EMAILS TO SEND: 12 (3 prospects × 4 emails each)");
console.log("=".repeat(60));

module.exports = { generateOutreachEmail, generateFollowUp, prospects };

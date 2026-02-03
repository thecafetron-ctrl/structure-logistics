// TikTok Content Generator for Structure Logistics
// Generates scripts for 3 TikToks per week

const contentTypes = {
  aiTech: {
    title: "AI TECH BREAKDOWN",
    description: "How I built Structure Logistics AI",
    hook: "Most freight forwarders don't realize 80% of their time is wasted on manual quotes",
    script: [
      "3 years ago I spent 2-3 hours on EVERY quote",
      "Now? 10-30 seconds. Same accuracy.",
      "How? Multi-agent AI system.",
      "Agent 1: Analyzes freight data",
      "Agent 2: Compares 50+ routes",
      "Agent 3: Generates optimal quote",
      "Result: 95% efficiency gain.",
      "Link in bio to see it in action."
    ],
    hashtags: "#AI #Logistics #FreightForwarding #Automation #MultiAgentSystems",
    platform: "TikTok"
  },
  logisticsCase: {
    title: "LOGISTICS CASE STUDY",
    description: "How AI saved this company AED 50k/month",
    hook: "This 3PL company went from losing 20% of quotes to winning 85%",
    script: [
      "Freight forwarding is brutal. 80% of quotes are lost to competitors.",
      "Until we implemented AI automation.",
      "They went from 20% win rate → 85% win rate in 3 months.",
      "How?",
      "AI analyzes shipping patterns",
      "Predicts competitor pricing",
      "Optimizes route and rate dynamically",
      "Result: AED 50k/month in saved costs.",
      "Want to see their full case study? Link below."
    ],
    hashtags: "#FreightForwarding #AI #Logistics #BusinessGrowth #CaseStudy",
    platform: "TikTok"
  },
  industryInsight: {
    title: "INDUSTRY INSIGHT",
    description: "What's happening in freight in 2026",
    hook: "The biggest opportunity in freight automation is AI lead gen",
    script: [
      "Freight is broken. Manual quoting, email hell, lost leads.",
      "In 2026, that's not a business strategy. That's a mistake.",
      "AI lead gen is the game changer.",
      "Automate outreach to 500 prospects daily.",
      "Personalized, 24/7, while you sleep.",
      "That's how you get 100+ qualified leads weekly.",
      "Build it right, and you're 10x ahead of the competition."
    ],
    hashtags: "#AI #FreightIndustry #Automation #BusinessStrategy #Growth",
    platform: "TikTok"
  }
};

function generateScripts(weekNumber) {
  const scripts = [];

  // Generate Monday script (AI Tech)
  scripts.push({
    id: `monday-${weekNumber}`,
    type: 'aiTech',
    content: contentTypes.aiTech,
    scheduledDate: `Monday, Week ${weekNumber}`,
    estimatedDuration: '45-60 seconds',
    preview: "How I built Structure Logistics AI - Multi-agent systems in action"
  });

  // Generate Wednesday script (Logistics Case)
  scripts.push({
    id: `wednesday-${weekNumber}`,
    type: 'logisticsCase',
    content: contentTypes.logisticsCase,
    scheduledDate: `Wednesday, Week ${weekNumber}`,
    estimatedDuration: '50-70 seconds',
    preview: "AI saved this company AED 50k/month - 3PL case study"
  });

  // Generate Friday script (Industry Insight)
  scripts.push({
    id: `friday-${weekNumber}`,
    type: 'industryInsight',
    content: contentTypes.industryInsight,
    scheduledDate: `Friday, Week ${weekNumber}`,
    estimatedDuration: '40-55 seconds',
    preview: "What's happening in freight in 2026 - The AI opportunity"
  });

  return scripts;
}

// Generate scripts for next 4 weeks
for (let week = 1; week <= 4; week++) {
  const scripts = generateScripts(week);
  console.log(`\n=== WEEK ${week} ===\n`);
  scripts.forEach(script => {
    console.log(`📝 ${script.scheduledDate}`);
    console.log(`📌 ${script.preview}`);
    console.log(`⏱️  Est. Duration: ${script.estimatedDuration}\n`);

    console.log(`HOOK:`);
    console.log(`"${script.content.hook}"\n`);

    console.log(`SCRIPT:`);
    script.content.script.forEach((line, i) => {
      console.log(`${i + 1}. ${line}`);
    });
    console.log(`\n${script.content.hashtags}\n`);
    console.log(`— ${script.content.description}\n`);
    console.log('='.repeat(50) + '\n');
  });
}

module.exports = { generateScripts, contentTypes };

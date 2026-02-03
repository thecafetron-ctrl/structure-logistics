# Automation Scripts

All automation scripts for Structure Logistics.

## 📋 Available Scripts

### `tiktok-generator.js`
- Auto-generates 3 TikTok scripts per week
- Generates 4 weeks of content at once
- Includes hooks, scripts, hashtags, and scheduling

### `email-outreach-generator.js`
- Generates personalized outreach emails
- Creates 3 prospects with 4 emails each (primary + 3 follow-ups)
- Multiple tone options (professional, direct, value-driven)

### `daily-reports.yml`
- GitHub Actions workflow for 3 daily reports
- Runs 10:00 AM, 2:00 PM, 11:00 PM Pakistan Time
- Sends reports to WhatsApp automatically

## 🚀 How to Use

```bash
# Generate TikTok scripts
node scripts/tiktok-generator.js

# Generate email outreach
node scripts/email-outreach-generator.js
```

## 📊 Output

Each script generates:
- Full email content (subject + body)
- Ready to copy-paste
- Prospects with custom details
- Multiple follow-up sequences

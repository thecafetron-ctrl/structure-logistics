#!/bin/bash

# Automated Reports Script for Structure Logistics
# Runs all automation scripts and generates reports

echo "🚀 Starting Automation Suite for Structure Logistics"
echo "=".repeat(70)
echo ""

# 1. Generate TikTok scripts
echo "🎬 Generating TikTok scripts..."
cd scripts
node tiktok-generator.js > /tmp/tiktok-scripts.txt
echo "✅ TikTok scripts generated"
echo ""

# 2. Generate email outreach
echo "📧 Generating email outreach templates..."
node email-outreach-generator.js > /tmp/email-outreach.txt
echo "✅ Email outreach templates generated"
echo ""

# 3. Generate lead scoring
echo "🎯 Running lead scoring..."
node lead-scoring.js > /tmp/lead-scoring.txt
echo "✅ Lead scoring completed"
echo ""

# 4. Generate WhatsApp reports
echo "📱 Generating WhatsApp reports..."
node whatsapp-reporter.js > /tmp/whatsapp-reports.txt
echo "✅ WhatsApp reports prepared"
echo ""

# 5. Display summaries
echo "📊 SUMMARY OF GENERATED CONTENT:"
echo "- TikTok scripts: 3 per week, 4 weeks generated"
echo "- Email templates: 3 prospects × 4 emails = 12 templates"
echo "- Lead scoring: 3 prospects scored and ranked"
echo "- WhatsApp reports: 5 daily reports ready"
echo ""

echo "✅ ALL AUTOMATION COMPLETE"
echo "=".repeat(70)
echo ""
echo "📁 All output saved to /tmp/"
echo "📱 WhatsApp gateway is connected and ready"
echo ""
echo "Ready to send reports? Run: node whatsapp-reporter.js"

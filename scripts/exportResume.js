const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * Generates a PDF from a resume HTML string or URL.
 * 
 * Usage:
 * node exportResume.js <output_path> <url_or_html_content>
 * 
 * Example:
 * node exportResume.js ./resume.pdf "http://localhost:3000/#/resume-builder"
 */

async function generateResumePDF(outputPath, source) {
  console.log('Starting PDF generation...');
  
  // Launch browser
  // Note: In production (e.g. AWS Lambda/Vercel), you might need 'chrome-aws-lambda'
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport to A4 dimensions approx (at 96 DPI)
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });

    // Check if source is URL or HTML content
    if (source.startsWith('http') || source.startsWith('file://')) {
      await page.goto(source, { waitUntil: 'networkidle0' });
    } else {
      await page.setContent(source, { waitUntil: 'networkidle0' });
    }

    // Inject specific print styles to ensure cleaner output
    await page.addStyleTag({
      content: `
        @page { size: A4; margin: 0; }
        body { -webkit-print-color-adjust: exact; }
        .no-print { display: none !important; }
        /* Hide scrollbars */
        ::-webkit-scrollbar { display: none; }
      `
    });

    // Wait for fonts or images if needed
    await page.evaluateHandle('document.fonts.ready');

    // Generate PDF
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
      displayHeaderFooter: false,
      preferCSSPageSize: true
    });

    console.log(`PDF successfully saved to ${outputPath}`);

  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// CLI Execution
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Usage: node exportResume.js <output_path> <url_or_html_content>");
} else {
  generateResumePDF(args[0], args[1]);
}

module.exports = generateResumePDF;
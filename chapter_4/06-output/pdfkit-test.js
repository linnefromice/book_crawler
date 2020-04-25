const PDFDocument = require('pdfkit')
const fs = require('fs')

const content = `
Rule No. 1: Never lose money. Rule No. 2: Never forget rule No.1\n\n
It’s More Important to Do Good\n\n
On Finding Honesty in Others`

const main = () => {
    const doc = new PDFDocument()
    doc.pipe(fs.createWriteStream('sample.pdf'))
    doc.fontSize(30).text('Warren Edward Buffett', 90, 100)
    doc.fontSize(20).text(content, 100, 180)
    doc.save().moveTo(80, 80).lineTo(400, 80).lineTo(400, 150).lineTo(80, 150).lineTo(80, 80).stroke('#0000FF');
    doc.addPage();
    doc.save().moveTo(100, 150).lineTo(100, 250).lineTo(200, 250).fill('FFAAAA')
    doc.end()
}

main()
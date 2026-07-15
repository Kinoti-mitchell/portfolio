# Add your CV and certificates here

Drop PDF files into this folder, then update `src/data/documents.ts` with the correct file names and titles.

## Quick setup

1. **CV** — save your resume as:
   ```
   public/documents/mitchell-kinoti-cv.pdf
   ```

2. **Certificates** — save each certificate in:
   ```
   public/documents/certificates/your-cert-name.pdf
   ```

3. **Edit the list** — open `src/data/documents.ts` and update titles, issuers, dates, and file paths.

4. **Deploy** — commit and push, or run:
   ```
   npm run build:pages
   npx gh-pages -d dist -b gh-pages
   ```

## Tips

- Use short, lowercase file names with hyphens (e.g. `react-certificate.pdf`)
- Keep PDFs under 5 MB for fast loading
- You can add as many certificates as you want in `documents.ts`
- Remove placeholder entries you are not using

## Example entry in documents.ts

```ts
{
  id: 'aws-cert',
  title: 'AWS Cloud Practitioner',
  description: 'Foundational cloud certification.',
  file: 'documents/certificates/aws-cloud-practitioner.pdf',
  type: 'certificate',
  issuer: 'Amazon Web Services',
  date: '2025',
  emoji: '☁️',
  accent: 'from-amber-500 to-orange-600',
},
```

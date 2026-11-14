URL - https://rupamsau0010.github.io/iamrupam/

## Contact form email setup

The contact form uses EmailJS. Create an EmailJS email service connected to
`contact.iamrupam@gmail.com` and a template with these settings:

- **To Email:** `rupamsau721401@gmail.com`
- **From Email:** the connected `contact.iamrupam@gmail.com` account
- **Reply-To:** `{{sender_email}}`
- **BCC:** `{{sender_email}}`
- **Subject:** `Message from "{{sender_name}}"`
- **Body:**

  ```text
  Name: {{sender_name}}
  Email: {{sender_email}}
  Subject: {{subject}}
  Message:
  {{message}}
  ```

Copy `.env.example` to `.env.local` and fill in the service ID, template ID, and
EmailJS public key from the EmailJS dashboard. `.env.local` is ignored by Git.
Run `npm run dev` to test locally. The `npm run deploy` script builds the site
locally, so these variables must be present in that shell before deploying.

The `.github/workflows/deploy.yml` workflow builds and deploys the site on
pushes to `main`. Add the three `VITE_EMAILJS_*` values under **Settings →
Secrets and variables → Actions → Variables**; the workflow passes them to the
build step. In **Settings → Pages**, set the deployment source to **GitHub
Actions**. These EmailJS identifiers and public key are included in the
client-side bundle; do not put email passwords, SMTP passwords, or private API
keys in `VITE_*` variables. Restrict the EmailJS service to your site's allowed
domain and the local development origin.
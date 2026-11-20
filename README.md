# Ryan Maina — Portfolio Source

This is the React + TypeScript + Vite source for the portfolio currently published at:

https://ryan-maina-minimal-portfolio-ldbas6.v2.appdeploy.ai/

## Run locally

1. Install Node.js (18+ recommended).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

To create a production build, run `npm run build`. The output is written to `dist/`.

## Included functionality

- Responsive single-page portfolio with Work, About, Services and Get in Touch sections.
- Four project cards and project-detail modal.
- Automatic image gallery advancement every 2 seconds, with previous/next controls and a looping sequence.
- Original image aspect-ratio preservation in the gallery.
- Three separate video players for Visual Experiments.
- About portrait with smooth hover enlargement.
- Gmail compose, WhatsApp chat and Instagram DM destinations in the contact panel.
- Poppins typography, mint/green palette, orange accents and Lucide icons.

## Media assets — important

The application source references media under `public/resources/`. The About portrait is included at:

`public/resources/about/ryan-maina-portrait.png`

The other original portfolio media files were stored as AppDeploy resources and in the connected Dropbox portfolio library. They are **not bundled in this ZIP**, so the app will compile but project galleries and project-card cover images will show missing media until those files are copied into the matching paths.

See `ASSET_MANIFEST.md` for the exact expected paths and original Dropbox folder names. No Photoshop source files are included because the deployed portfolio displays exported previews, not editable PSD documents.

## Contact destinations in source

- Email: `ryanmaina384@gmail.com`
- WhatsApp: `+254116283435`
- Instagram: `@gurutechstudios`

## Hosting

This is a Vite static frontend. Deploy the contents of `dist/` to a static hosting provider, or connect the project repository to a host that supports Vite builds. For the custom domain, configure the DNS records required by the chosen hosting provider.

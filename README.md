# ELEVATE-SDE-Task-2 — CredVault

Certificate Issuing & Verification Platform — frontend prototype for the ELEVATE SDE Internship Task 2.

## Technology
- React 19 + TypeScript
- Vite
- Tailwind CSS 4 (with custom responsive styling)
- React Router
- Lucide React icons
- React Hot Toast
- Browser LocalStorage for demo persistence

## Run locally
1. Install Node.js (current LTS recommended).
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Create a production build: `npm run build`

## Routes
| Route | Purpose |
|---|---|
| `/` | Home and service navigation |
| `/request` | Submit a certificate request |
| `/track` | Track an application by Application ID |
| `/verify` | Verify a certificate by Certificate ID |
| `/admin/login` | Demo administrator login |
| `/admin/applications` | Review, issue and reject applications |
| `/admin/certificates` | View and revoke certificates |

## Demo login
- Username: `admin`
- Password: `admin`

This is intentionally a frontend-only demo login. It is not secure authentication and must be replaced by a backend authentication service before production use.

## Demo behavior
- Citizen applications are saved in LocalStorage.
- Application IDs are generated automatically (`APP-0001`, etc.).
- Approving an application creates a certificate record.
- Certificate IDs are generated automatically (`CERT-2026-0001`, etc.).
- Tracking and public verification read the same stored records used by the admin pages.
- Revoked certificates remain searchable and show `Revoked`.
- Initial demo records are provided when the browser has no saved records.

To reset the demo, clear LocalStorage for the app origin (keys `credvault_applications` and `credvault_certificates`) and reload.

## Submission checklist
- [ ] Push this project to a GitHub repository named `ELEVATE-SDE-Task-2`.
- [ ] Run the app and capture screenshots of all seven routes.
- [ ] Add screenshots to a `screenshots/` folder and embed them in this README before submission.

## Screenshots
Add your page captures here, for example:
- `screenshots/home.png`
- `screenshots/request.png`
- `screenshots/track.png`
- `screenshots/verify.png`
- `screenshots/admin-login.png`
- `screenshots/admin-applications.png`
- `screenshots/admin-certificates.png`

This project uses dummy data only. No backend or database is included, as required by the task brief.

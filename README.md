# Welcome to Wilde Blog Site

## Project info
**Hosting**: Hostinger  
**Repository**: https://github.com/w1ld3w0rks/wildeblogsite  
**Live Site**: https://wildew3rks.com/

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**
If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:
```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/w1ld3w0rks/wildeblogsite.git

# Step 2: Navigate to the project directory.
cd wildeblogsite

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**
- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**
- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploying to Hostinger

This project is hosted on Hostinger. To deploy updates:

**Option 1: Using Git (Recommended)**
1. Push your changes to the GitHub repository
2. SSH into your Hostinger server
3. Navigate to your project directory
4. Pull the latest changes: `git pull origin main`
5. Build the project: `npm run build`
6. The built files in the `dist` folder will be served by Hostinger

**Option 2: Manual Upload**
1. Build the project locally: `npm run build`
2. Upload the contents of the `dist` folder to your Hostinger public_html directory via FTP/SFTP or File Manager

**Build Command:**
```sh
npm run build
```

The production-ready files will be in the `dist` directory.

## Can I connect a custom domain?

Yes! Custom domains are managed through your Hostinger control panel:
1. Log into Hostinger hPanel
2. Navigate to Domains
3. Add or point your custom domain to your hosting account
4. Configure DNS settings as needed

Read more: [Hostinger Domain Documentation](https://support.hostinger.com/en/collections/1656878-domains)

## Server Requirements

- Node.js (for building)
- Web server (Apache/Nginx) - provided by Hostinger
- The `dist` folder should be pointed to your web root (typically `public_html`)

## Development

Local development server runs on `http://localhost:5173` by default when using `npm run dev`.

## Contributing

Feel free to submit issues and pull requests!

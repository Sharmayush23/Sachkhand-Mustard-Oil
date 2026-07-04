# Deploying to GoDaddy Hosting

This document provides instructions on how to build and deploy this website to a standard GoDaddy Shared Web Hosting (cPanel) environment.

## Overview
Because GoDaddy's entry-level shared hosting plans do not support running a persistent Node.js/Express backend server, we have configured the application to be deployed as a **fully static frontend Single Page Application (SPA)**, with the contact form handled by a lightweight **PHP handler** (`api/contact.php`) that runs natively on GoDaddy.

This allows the site to load extremely fast, run cost-effectively, and handle contact requests (and redirect users to WhatsApp) out of the box.

---

## Step 1: Build the Project Locally
To generate the production-ready assets, run the following command in your terminal:

```bash
npm run build
```

This compiles your React frontend code and places the deployable files in the `dist/public/` directory.

### Output Structure
After building, verify that `dist/public/` contains:
- `assets/` (CSS, JavaScript, and compiled images)
- `index.html` (the main landing file)
- `.htaccess` (Apache server routing configuration)
- `api/contact.php` (PHP contact form handler)

---

## Step 2: Upload Files to GoDaddy

There are two primary ways to upload your files to GoDaddy:

### Method A: Via GoDaddy cPanel File Manager (Recommended for beginners)
1. Log in to your **GoDaddy Dashboard**.
2. Under **Web Hosting**, click **Manage** next to your hosting account.
3. Click the **cPanel Admin** button.
4. Open the **File Manager** tool.
5. In the left panel, click on **public_html** (this is the root directory for your main domain name).
6. Click **Upload** at the top menu.
7. Upload all the files and folders from your local `dist/public/` directory.
   - *Note: Make sure you upload the files **inside** `dist/public/`, not the `dist` or `public` folder itself. Your `index.html` should reside directly in `public_html`.*
   - *Ensure that `.htaccess` is uploaded. Files starting with a dot might be hidden in some FTP clients or file managers. In cPanel File Manager, you may need to click "Settings" in the top right corner and check "Show Hidden Files (dotfiles)".*

### Method B: Via FTP (FileZilla)
1. Download and install an FTP client like **FileZilla**.
2. Retrieve your FTP credentials from your GoDaddy hosting dashboard (FTP Username, Password, and Host).
3. Connect to your host.
4. Navigate to the `public_html` directory on the remote site.
5. Drag and drop all contents of your local `dist/public/` folder into the remote `public_html` folder.

---

## Step 3: Test Your Site
Once the files are uploaded:
1. Open your web browser and navigate to your domain name (e.g., `https://yourdomain.com`).
2. Test the routing by clicking around the pages (Products, Timeline, About, Facilities, Contact) and refreshing the browser on a sub-page. The `.htaccess` file should ensure that reloading on `/products` loads the page successfully instead of showing a `404 Not Found` error.
3. Go to the **Contact** page, fill in the form, and submit it.
   - The form should submit successfully.
   - It will trigger a redirection to WhatsApp to send the message.
   - An email notification will be sent to `Amarnath_vinodkumar@yahoo.com` with the submission details.

---

## Customization & Troubleshooting

### Changing the Email Recipient
By default, the contact form sends emails to `Amarnath_vinodkumar@yahoo.com`. If you need to change this:
1. Open `client/public/api/contact.php` in a text editor.
2. Locate the line:
   ```php
   $to = "Amarnath_vinodkumar@yahoo.com";
   ```
3. Change it to your desired email address.
4. Re-run `npm run build` and re-upload the `api/contact.php` file to your server.

### Emails Not Received
GoDaddy shared servers have strict anti-spam filters. If you are not receiving contact emails:
1. Check your Spam / Junk folder.
2. In `client/public/api/contact.php`, the sender address is automatically constructed based on your website domain:
   `webmaster@yourdomain.com`. Make sure your GoDaddy hosting account doesn't block this email address.
3. Ensure that your domain's SPF (Sender Policy Framework) record in DNS includes GoDaddy's mail servers. (GoDaddy hosting support can help you verify this).

# Maharashtra Mandal Krakow Website

A modern, responsive website for Maharashtra Mandal Krakow - a cultural organization preserving and promoting Marathi culture, traditions, and heritage in Krakow, Poland.

## Features

- **Modern Design**: Elegant dark theme with saffron/gold accents representing Maharashtra
- **Responsive**: Works perfectly on mobile, tablet, and desktop
- **Events Section**: Timeline view of upcoming events with calendar
- **Gallery**: Photo gallery with lightbox and video embeds (YouTube, Facebook, Instagram)
- **Blog System**: Markdown-based event posts for easy updates
- **Contact Form**: Netlify Forms ready for email notifications
- **SEO Optimized**: Meta tags for search engines

## Sections

1. **Home** - Hero section with animated elements
2. **About** - Mission and community highlights
3. **Events** - Upcoming events timeline
4. **Gallery** - Photos and videos from past events
5. **Blog** - Latest updates and event recaps
6. **Contact** - Contact form and social links

## Deployment to Netlify

### Option 1: Git Integration (Recommended)

1. Create a GitHub repository
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/maharashtra-mandal-krakow.git
   git push -u origin main
   ```

3. Log in to [Netlify](https://netlify.com)
4. Click "Add new site" → "Import an existing project"
5. Select your GitHub repository
6. Netlify will automatically detect the settings from `netlify.toml`
7. Click "Deploy site"

### Option 2: Drag and Drop

1. Create a ZIP file of all files
2. Log in to [Netlify](https://netlify.com)
3. Drag and drop the ZIP file to the deployment area
4. Your site will be deployed automatically

## Updating Events/Blog Posts

### Method 1: Edit HTML files

Simply edit the HTML files in the `events/` folder.

### Method 2: Add new events

1. Create a new HTML file in the `events/` folder (e.g., `new-event.html`)
2. Copy the structure from existing event files
3. Update the content

### Method 3: Use Netlify CMS (Optional)

For a more user-friendly content management system, you can add Netlify CMS:
1. Create an `admin` folder in the root
2. Add `index.html` and `config.yml` for Netlify CMS
3. Enable Identity in Netlify dashboard

## Customization

### Colors

Edit the CSS variables in `index.html`:
```css
:root {
    --primary: #FF6B35;      /* Saffron orange */
    --secondary: #1A1A2E;    /* Dark navy */
    --accent: #FFD700;       /* Gold */
    --background: #0F0F1A;   /* Dark background */
}
```

### Adding Images

1. Place images in the `images/` folder
2. Update image references in HTML

### Adding Videos

In the gallery section, add YouTube embed URLs:
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
```

## Social Media Links

Update social media links in the contact section:
- Facebook: `https://facebook.com/your-page`
- Instagram: `https://instagram.com/your-account`
- YouTube: `https://youtube.com/your-channel`

## Contact Form

The form is configured for Netlify Forms. When deployed to Netlify:
1. Netlify will automatically detect the form
2. You'll receive email notifications for new submissions
3. View submissions in the Netlify dashboard

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

---

*जय महाराष्ट्र | Jai Maharashtra!*
# mmk
# mmk
# npx @11ty/eleventy --serve
# mmk_website

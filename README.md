# Octa Broker Website Clone

A modern, responsive clone of the Octa Broker landing page (https://id.octabroker.com/) built with HTML, CSS, and JavaScript.

## Features

### 🌍 Geographical Confirmation Modal
- Modal appears on page load asking users to confirm they are not from the US or Philippines
- Includes detailed legal disclaimer and privacy notice
- Uses localStorage to remember user confirmation
- Accessible with proper ARIA attributes

### 🎨 Modern Design
- Clean, minimalist interface using black and white color scheme
- Responsive design that works on all device sizes
- Modern typography using Google Fonts (Inter)
- Smooth animations and hover effects
- No external icon libraries - relies on typography and layout

### 📱 Responsive Layout
- Mobile-first design approach
- Flexible grid layouts using CSS Grid and Flexbox
- Optimized for desktop, tablet, and mobile devices
- Touch-friendly interface elements

### 🚀 Key Sections
- **Header**: Navigation with trading-related links and CTA button
- **Hero Section**: Main headline and app download information
- **Trading Section**: Information about 300+ assets available
- **Safety Section**: Features like 0% swap, no commission, secure deposits
- **Awards Section**: Statistics about awards, years in market, countries served
- **Investment Features**: Leverage ratios, instruments, bonuses, support
- **Mobile App Section**: App download links and features
- **Call-to-Action**: Final signup encouragement

### ⚡ Performance & Accessibility
- Fast loading times with optimized assets
- Semantic HTML5 structure
- Alt text for all images
- Keyboard navigation support
- Error handling for failed image loads
- Cross-browser compatibility

## File Structure

```
/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles and responsive rules
├── js/
│   └── script.js      # JavaScript functionality
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with Grid, Flexbox, and custom properties
- **JavaScript**: Modal functionality, error handling, and user interactions
- **Google Fonts**: Inter font family for modern typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Setup Instructions

1. Clone or download the project files
2. Open `index.html` in a web browser
3. The geographical confirmation modal will appear first
4. Click "Konfirmasi" to proceed to the main website

## Key Features Implemented

### Modal Functionality
- Displays on page load
- Stores confirmation in localStorage
- Prevents body scroll when open
- Focus management for accessibility
- Cannot be closed with Escape key (required confirmation)

### Responsive Design
- Breakpoints at 768px and 480px
- Mobile navigation adjustments
- Flexible image sizing
- Stacked layouts on smaller screens

### Error Handling
- Image loading error fallbacks
- JavaScript error catching
- Graceful degradation if JS is disabled

### Performance Optimizations
- Lazy loading for images
- Debounced resize handlers
- Efficient CSS selectors
- Minimal JavaScript footprint

## Customization

The website uses CSS custom properties (variables) for easy theming:

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --accent-color: #28a745;
    --text-dark: #212529;
    --text-light: #6c757d;
    --bg-light: #f8f9fa;
    --bg-white: #ffffff;
}
```

## License

This is a clone created for educational/demonstration purposes. All content and branding belong to Octa Markets Incorporated.

## Notes

- All external images are loaded from the original Octa CDN
- Links point to the actual Octa Broker signup pages
- The design closely matches the original while being fully responsive
- No external dependencies or frameworks used

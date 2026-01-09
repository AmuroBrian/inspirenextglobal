# Email Templates for Inspire Next Global

This directory contains professional HTML/CSS email templates for demo and pricing requests.

## Templates

### 1. `demo-request-confirmation.html`
**Purpose:** Confirmation email sent to customers after they submit a demo/pricing request.

**Variables to Replace:**
- `{{firstName}}` - Customer's first name
- `{{lastName}}` - Customer's last name
- `{{productName}}` - Product name (LoopWork or DeskHRX)
- `{{workEmail}}` - Customer's email address
- `{{companyName}}` - Company name
- `{{jobTitle}}` - Job title
- `{{phoneNumber}}` - Phone number
- `{{employeeCount}}` - Number of employees
- `{{country}}` - Country

**Usage:**
Replace all `{{variable}}` placeholders with actual values before sending.

### 2. `demo-request-notification.html`
**Purpose:** Internal notification email sent to the sales team when a new demo request is submitted.

**Variables to Replace:**
- `{{productName}}` - Product name (LoopWork or DeskHRX)
- `{{timestamp}}` - Date and time of submission
- `{{firstName}}` - Customer's first name
- `{{lastName}}` - Customer's last name
- `{{workEmail}}` - Customer's email address
- `{{phoneNumber}}` - Phone number
- `{{companyName}}` - Company name
- `{{jobTitle}}` - Job title
- `{{employeeCount}}` - Number of employees
- `{{country}}` - Country

## Email Client Compatibility

These templates are designed to work with:
- ✅ Gmail
- ✅ Outlook (Desktop & Web)
- ✅ Apple Mail
- ✅ Yahoo Mail
- ✅ Most modern email clients

## Design Features

- **Responsive Design:** Works on desktop and mobile devices
- **Brand Colors:** Uses Inspire Next Global brand colors (#0A3D74, #D4AF37)
- **Professional Layout:** Clean, modern design with proper spacing
- **Inline CSS:** All styles are inline for maximum email client compatibility
- **Accessibility:** Proper HTML structure and semantic markup

## Integration

### Using with EmailJS

1. Copy the HTML content from the template
2. Replace all `{{variable}}` placeholders with EmailJS template variables
3. Configure in EmailJS dashboard

### Using with Other Email Services

1. Replace `{{variable}}` placeholders with your service's template syntax
2. Test in multiple email clients
3. Send test emails before going live

## Testing

Before sending to customers:
1. Test in multiple email clients (Gmail, Outlook, Apple Mail)
2. Test on mobile devices
3. Verify all links work correctly
4. Check that all variables are replaced correctly
5. Ensure images load (if any are added)

## Customization

### Changing Colors

To change the brand colors, replace:
- `#0A3D74` - Primary blue (LoopWork)
- `#D4AF37` - Gold (DeskHRX)
- `#083058` - Dark blue (gradient)

### Adding Logo

Replace the placeholder logo div with an actual image:
```html
<img src="https://your-domain.com/logo.png" alt="Inspire Next Global" style="max-width: 200px; height: auto;">
```

## Support

For questions or issues with these templates, contact the development team.

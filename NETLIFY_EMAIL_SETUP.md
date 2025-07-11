# Netlify Email Configuration Guide

## Overview

This document explains how Netlify handles form submissions and email delivery for the Pro-Actis platform.

## How Netlify Forms Work

### 1. Form Detection

Netlify automatically detects forms in your HTML during build time. Forms are detected by:

- Having `netlify` attribute in the form tag
- Being listed in `/public/forms.html` (our approach)
- Having `data-netlify="true"` attribute

### 2. Form Processing

When a form is submitted:

1. Netlify intercepts the POST request to "/"
2. Processes the form data based on the `form-name` field
3. Stores the submission in Netlify's dashboard
4. Triggers any configured notifications
5. Optionally sends emails to specified recipients

## Current Email Setup

### Form Types in Our App

#### 1. Contact Forms

```
- demo-request: Demo booking requests
- info-request: Information package requests
- newsletter-subscription: Email newsletter signups
```

#### 2. Assessment Forms (NEW)

```
- ai-assessment-admin: Sends assessment results to admin
- ai-assessment-user: Sends assessment results to user
```

#### 3. Content Forms

```
- content-ideas-email: Content generator results
- linkedin-posts-email: LinkedIn post generator results
- audio-upload: Audio content uploads
```

### Email Recipients Configuration

All emails are currently configured to send to: **sarafollador01@gmail.com**

This is configured in `netlify.toml`:

```toml
[[form]]
  name = "ai-assessment-admin"
  [form.settings]
    [form.settings.notification]
      recipients = ["sarafollador01@gmail.com"]
      subject = "New AI Assessment Completed - Pro-Actis"
```

## Configuration Steps

### 1. Netlify Dashboard Setup

1. **Login to Netlify Dashboard**

   - Go to https://app.netlify.com
   - Navigate to your site

2. **Forms Section**

   - Click "Forms" in the sidebar
   - You'll see all detected forms after deployment
   - Can view submissions and configure notifications

3. **Form Notifications**
   - Go to Site Settings > Forms
   - Configure email notifications
   - Set recipients and email templates

### 2. Environment Variables (Recommended)

Instead of hardcoding the admin email, set up environment variables:

1. **In Netlify Dashboard:**

   ```
   Site Settings > Environment Variables > Add Variable

   Key: ADMIN_EMAIL
   Value: sarafollador01@gmail.com
   ```

2. **Update netlify.toml** to use environment variable:
   ```toml
   [[form]]
     name = "ai-assessment-admin"
     [form.settings]
       [form.settings.notification]
         recipients = ["${ADMIN_EMAIL}"]
         subject = "New AI Assessment Completed - Pro-Actis"
   ```

### 3. HTML Email Support

Our forms now support HTML emails by including:

- `html` field: Full HTML email content
- `text` field: Plain text fallback
- `subject` field: Dynamic email subjects
- `to` field: Recipient email address

## Assessment Email Flow

### Current Implementation

1. **User completes assessment**
2. **Two emails are generated:**
   - Admin email: Contains lead information and assessment summary
   - User email: Contains detailed results and next steps
3. **Both emails submitted to Netlify simultaneously**
4. **Netlify processes and delivers emails**

### Email Content

#### Admin Email Contains:

- Lead qualification (High/Medium/Low priority)
- Contact information
- Assessment scores
- Strategic recommendations
- Follow-up suggestions

#### User Email Contains:

- Personalized assessment results
- Score breakdown with visual elements
- Strategic recommendations
- Call-to-action to book discovery call
- Professional branding

## Testing and Development

### Development Mode

- Forms simulate successful submission
- Console logging shows what would be sent
- No actual emails are sent

### Production Mode

- Real form submissions to Netlify
- Actual email delivery
- Submissions visible in Netlify dashboard

## Troubleshooting

### Common Issues

1. **Forms not detected**

   - Ensure forms are in `/public/forms.html`
   - Check form names match exactly
   - Redeploy after form changes

2. **Emails not sending**

   - Check Netlify Forms dashboard for submissions
   - Verify email addresses are correct
   - Check spam folders
   - Ensure form-name matches configuration

3. **HTML emails not rendering**
   - Test HTML in email clients
   - Include plain text fallback
   - Use inline CSS for better compatibility

### Debugging Steps

1. **Check Netlify Dashboard**

   - Site > Forms > View submissions
   - Look for error messages

2. **Browser Console**

   - Check for JavaScript errors
   - Look at network requests

3. **Form Data**
   - Verify all required fields are included
   - Check field names match exactly

## Advanced Configuration

### Custom Email Templates

You can customize email templates in the Netlify dashboard:

1. Go to Site Settings > Forms
2. Click "Form notifications"
3. Customize subject lines and content

### Webhook Integration

For more advanced email handling:

1. Set up webhook endpoints
2. Configure in Site Settings > Build & deploy > Deploy notifications
3. Process form data with external services

### Spam Prevention

Our forms include:

- Honeypot fields (`bot-field`)
- reCAPTCHA integration (can be added)
- Rate limiting (Netlify built-in)

## Security Considerations

1. **Email Addresses**

   - Store admin emails in environment variables
   - Never expose in client-side code

2. **Form Validation**

   - Server-side validation by Netlify
   - Client-side validation for UX

3. **Data Protection**
   - GDPR compliance for user data
   - Secure transmission over HTTPS

## Monitoring

### Netlify Analytics

- Form submission rates
- Success/failure rates
- Traffic sources

### Email Delivery

- Monitor inbox for admin notifications
- Set up forwarding rules if needed
- Check bounce rates in Netlify dashboard

## Next Steps

1. **Deploy current changes**
2. **Test form submissions in production**
3. **Verify emails are received**
4. **Configure environment variables**
5. **Set up email forwarding if needed**
6. **Monitor form submissions in Netlify dashboard**

---

For questions or issues with email delivery, contact the Netlify support team or check their documentation at https://docs.netlify.com/forms/setup/

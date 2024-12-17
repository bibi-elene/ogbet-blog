## **1. Philosophy & Approach**

### **Landing Page Design (React)**
- **Why React?**  
  React was chosen for simplicity and fast implementation since I'm most familiar with it and it's really convenient to use for small projects
- **HTML/CSS Structure**  
  - **Semantic HTML**: used proper tags like `<header>`, `<main>`, and `<footer>` for accessibility and SEO.
  - **Mobile-First Design**: CSS flexbox and media queries were implemented to prioritize responsiveness on smaller devices.
- **Conversion-Oriented UI**  
  - added call-to-action (CTA) button
  - used simple form fields to reduce friction for lead submission

---

## **2. CRM Integration Reasoning**

### **CRM Endpoint: HubSpot**
- **Why HubSpot?**  
  HubSpot was chosen because:
  - It’s a leading CRM platform with well-documented APIs
  - it was free :D
- **Implementation**  
  - Used Express.js cause no complex architecture was needed on server side
  - Handled access token expiration by implementing a **refresh token mechanism**.
- **Error Handling & Security Considerations**  
  - added simple fields validation (name, email)
  - API Key Security: Environment variables (`dotenv`) were used to secure sensitive data, were included in .gitignore in the first place to avoid a leak due to commit history

---

## **3. Analytics Integration Decisions**

### **Why Google Analytics?**
- It's one of the most popular tools for user actions tracking, alongside segment (also one of my favorites)
- I've used it before and I know how it works

### **Event Tracking**
- **Form Submission**:  
  Tracked using:
  ```javascript
  gtag("event", "lead_form_submission", {
    event_category: "Lead Capture",
    event_label: "React Lead Form",
  });
  ```
- **Blog Link Clicks**:  
  Implemented tracking for the blog navigation link:
  ```javascript
  gtag("event", "click", {
    event_category: "Navigation",
    event_label: "Blog Link",
  });
  ```

### **How Data Helps Marketing Decisions**  
- Analyzing user actions allows for optimization:
  - High CTA engagement → Confirm the page’s effectiveness, importance and success rate of new features
  - Blog click-through rates → Determine interest in additional resources

---

## **4. WordPress & Hybrid Setup**

### **Why a Hybrid Approach?**
- **React for Landing Page**: lightweight, fast, and interactive promotional page
- **WordPress for Blog**: mainly for people with lack of technical knowledge on code level (content managers)  to easily publish articles, guides, and updates without requiring developer intervention

### **Integration**
- **Blog Path**: Configured WordPress to run under `/blog` (e.g., `ogbet.in/blog`) for clear separation.
- **Consistency**:  
  - Matched the branding of the WordPress blog with the React landing page:
    - Fonts: Arial/Roboto.
    - Colors: `#ff5722` (primary) and `#4caf50` (secondary).
  - Navigation added in React:
    ```javascript
    <a href="http://ogbet.in/blog" target="_blank">Blog</a>
    ```

### **Future Scalability**
- The static React landing page and dynamic WordPress blog allow for future upgrades:
  - React can integrate API-based content from WordPress.
  - WordPress can scale for additional blogging features (SEO, tags, categories).

---

## **5. SEO & Accessibility Choices**

### **SEO Best Practices**
1. **Descriptive Meta Tags**:  
   Added in `public/index.html` for SEO optimization:
   ```html
   <meta name="description" content="Claim 50 free spins and explore iGaming promotions. Visit our blog for guides and tips!" />
   <link rel="canonical" href="http://ogbet.in" />
   ```

2. **Heading Hierarchy**:  
   Used logical structure:
   - `H1`: Main heading (e.g., Claim 50 Free Spins!).  
   - `H2/H3`: Subheadings where applicable.

3. **Performance Optimization**:
   - Minimized CSS and JS in the React app.
   - Optimized images for faster load times.

4. **Mobile Responsiveness**:  
   Verified using Chrome DevTools for mobile, tablet, and desktop views.

5. **SEO for WordPress**:
   - Installed **Yoast SEO** plugin to manage meta tags, sitemaps, and content analysis.
   - Optimized individual blog posts.

### **Accessibility**
- **Alt Attributes**: Added for all images to support screen readers.  
- **Form Labels**: Inputs are clearly labeled for accessibility.  
- **WCAG Compliance**: Ensured mobile responsiveness and logical content order.

### **Why Accessibility Matters**
- Accessibility improves usability for all users and benefits SEO rankings, especially for mobile users in the Indian market.

---

## **External Resources**
1. **ChatGPT**: for css mainly, to avoid repetetive work
2. **HubSpot API Documentation**:  
   - [https://developers.hubspot.com/](https://developers.hubspot.com/)
3. **Google Analytics Events**:  
   - [https://developers.google.com/analytics/](https://developers.google.com/analytics/)
4. **WordPress SEO (Yoast)**:  
   - [https://yoast.com/wordpress/plugins/seo/](https://yoast.com/wordpress/plugins/seo/)

---

## **Key Takeaways**
This hybrid solution combines the **speed and interactivity** of React with the **content flexibility** of WordPress. The integration with **HubSpot** CRM and Google Analytics ensures a robust system for capturing leads and monitoring user interactions. SEO and accessibility practices further optimize the website for visibility and usability.

---

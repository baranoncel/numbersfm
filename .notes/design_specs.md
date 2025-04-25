# Design Specifications: Numbers.fm UI

This document outlines the design requirements and styling guidelines for the Numbers.fm interface. The design should be modern, responsive, and closely resemble the volt.fm aesthetic.

## Overall Design Goals
- **Consistency & Responsiveness:**  
  Use a consistent style across all pages with full responsiveness across devices.
- **Secure & Accessible:**  
  Ensure secure connections (SSL) across the application and adhere to accessibility best practices.
- **Volt.fm Inspired:**  
  Leverage provided volt.fm screenshots to match layout, typography, and visual elements.

## Component Guidelines

### 1. Navigation & Layout
- **Navigation Bar:**  
  - Top navigation with links to Dashboard, Analytics, Subscription, and Settings.
  - Responsive design (hamburger menu for mobile).

- **Page Layout:**  
  - Use modular design components to create structured sections.
  - Ensure consistent spacing, margins, and alignment inspired by volt.fm.

### 2. Dashboard Widgets & Data Visualization
- **Interactive Charts:**  
  - Utilize react-chartjs-2 and chart.js for creating line, bar, and pie charts.
  - Include filters for time range selection, with a clean interface for ease of use.
  
- **Statistical Cards:**  
  - Design cards to display key Spotify statistics.
  - Each card should have a clear hierarchy and visual emphasis on primary data.

### 3. Content Generation & Shareability
- **Image Capture Area:**  
  - Define a section of the dashboard for image generation using html-to-image or html2canvas.
  - Ensure the generated images have a clean, shareable layout optimized for platforms like Instagram.

### 4. Subscription & Payment UI
- **Subscription Panels:**  
  - Provide clear presentation of different subscription plans.
  - Highlight limited spots for Lifetime Deals with urgency cues (e.g., "23 spots left out of 50").
  
- **Payment Processing:**  
  - Integrate secure, SSL-enforced forms for payment details.
  - Use Stripe's UI components to enhance trust and security.

### 5. Style Tokens & Typography
- **Primary Colors:**  
  - Base text and main UI elements: a dark color (e.g., #1a202c).
  - Accent elements (e.g., buttons, links): a contrasting color (e.g., #3182ce).
- **Background & Neutrals:**  
  - Use light neutral tones for backgrounds (e.g., #f7fafc) with dark mode alternatives.
- **Typography:**  
  - Utilize the system's default fonts or those provided with shadcn/ui.
  - Ensure headings, subheadings, and body text are consistent with volt.fm's style.

## Additional Guidelines
- **SSL & Security:**  
  - Every page and API call must enforce SSL.
- **Mock Data Integration:**  
  - Initially use mock data; the UI should clearly indicate "Demo Mode" until live integrations are enabled.
- **Accessibility:**  
  - Follow ARIA guidelines and ensure keyboard navigability for all interactive elements.
- **Design Consistency:**  
  - Refer to the provided volt.fm screenshots regularly to align layout and component behavior. 
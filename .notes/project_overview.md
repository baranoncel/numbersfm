# Project Overview: Numbers.fm

## Project Name
**Numbers.fm**

## Vision & Purpose
Numbers.fm is a web application that offers personalized Spotify statistics through an attractive, data-driven dashboard. It connects securely to Spotify via OAuth, retrieves user data such as Top Tracks, Top Artists, Top Genres, and Recently Played tracks, and presents these insights with interactive charts. The platform also enables the generation of shareable images tailored for social media and incorporates a subscription model using Stripe for monetization.

## Architecture Overview

### Core Components
- **User Authentication & Spotify Integration:**
  - **OAuth Login:** Utilize next-auth to securely log users in with their Spotify accounts.
  - **Data Fetching:** Retrieve and process statistics like Top Tracks, Artists, Genres, and recently played tracks from the Spotify API. (Start with mock data until live integrations are stable.)

- **Dashboard & Analytics:**
  - **Interactive Visualization:** Build responsive line, bar, and pie charts using libraries such as react-chartjs-2 and chart.js.
  - **Dynamic Filtering:** Let users choose different time ranges (last 4 weeks, 6 months, all time, etc.) to update their data view.
  - **Additional Insights:** Include extra analytics such as mood and listening duration analysis along with custom playlist recommendations.

- **Shareable Content Generation:**
  - **Image Creation:** Use html-to-image or html2canvas to capture dashboard sections into shareable visuals.
  - **Social Sharing Options:** Provide options to download the image or post directly to social media.

- **Subscription & Monetization:**
  - **Stripe Integration:** Securely process payments over SSL with Stripe.
    - **Plans:** Two subscription models: a Monthly/Yearly Plan ($2/month, billed annually) and a Lifetime Deal ($49) with a "limited spots" indicator.
  - **Feature Unlocking:** Differentiate between free-tier users and subscribers to offer premium features.

### Integration & Design Requirements
- **Security:** All API interactions and page loads must enforce SSL and secure connections.
- **Initial Data:** Begin using mock data, then switch to live API calls as integrations stabilize.
- **Visual Style:** The application UI should closely emulate volt.fm. (Screenshots of volt.fm will be provided for guidance.)
- **Tech Stack:**
  - **Framework & Language:** Next.js (version 13+), React, and TypeScript.
  - **UI & Styling:** Tailwind CSS combined with shadcn/ui components.
  - **State Management & Data Fetching:** Use React Query or SWR.
  - **Error Logging:** Integrate Sentry or a similar service for monitoring. 
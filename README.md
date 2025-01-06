# REST API - Flight Results Project

## Project Overview
This project focuses on creating a REST API that fetches flight results from a provided JSON file. It includes functionalities to display itineraries and their respective details, ensuring users can filter and view relevant flight information.

## Features
- **Fetch Flight Results**: Retrieve flight data from a local JSON file.
- **Itineraries List**: 
  - Display a list of itineraries.
  - Implement search bar to refine search results.
- **Itinerary Detail**:
  - Show legs associated with a selected itinerary.
  - Display detailed information such as duration, stops, and airlines.

## API Collections
The provided JSON file contains two primary collections:
- **Itineraries**:
  - Serve as containers for trips.
  - Connect legs and prices.
  - Prices are provided by an agent (airline or travel agent).
- **Legs**:
  - Represent outbound and return journeys.
  - Include details like duration, stops, and airline providers.

## Screens
- **Itineraries Screen**: 
  - Displays all available itineraries.
  - Provides a search bar.
- **Itinerary Detail Screen**: 
  - Shows detailed legs of a chosen itinerary.

## Requirements
- Node.js (v16 or higher)
- npm or yarn
- JSON file with flight data

# REST API - Flight Results Project

## Project Overview
This project focuses on creating a REST API that fetches flight results from a provided JSON file. It includes functionalities to display itineraries and their respective details, ensuring users can filter and view relevant flight information.

## Features
- **Fetch Flight Results**: Retrieve flight data from a local JSON file.
- **Itineraries List**: 
  - Display a list of itineraries.
  - Implement filtering options to refine search results.
- **Itinerary Detail**:
  - Show legs (journeys) associated with a selected itinerary.
  - Display detailed information such as duration, stops, and airlines.

## API Collections
The provided JSON file contains two primary collections:
- **Itineraries**:
  - Serve as containers for trips.
  - Connect legs and prices.
  - Prices are provided by an agent (airline or travel agent).
- **Legs**:
  - Represent outbound and return journeys.
  - Include details like duration, stops, and airline providers.

## Screens
- **Itineraries Screen**: 
  - Displays all available itineraries.
  - Provides filter options for users to narrow down choices.
- **Itinerary Detail Screen**: 
  - Shows detailed legs of a chosen itinerary.

---

### Inside `src`:

#### **app**
- Contains the application's structure, including page components, global styles, and layouts.
  - **itineraries/** – May contain components related to the itinerary list.
  - **globals.css** – Defines global styles for the entire application.
  - **layout.tsx** – Component that defines the overall layout.
  - **page.tsx** – The main page, possibly the entry point for the UI.
  - **page.module.css** – Styles specific to `page.tsx`.

#### **data**
- Stores data and definitions.
  - **api.json** – Acts as the flight API, containing itinerary and leg information.
  - **definitions.tsx** – Likely contains TypeScript types or interfaces to define project data structures.
  - **functions.ts** – Reusable functions, possibly for manipulating or filtering data from `api.json`.

#### **lib**
- Reusable components used across different parts of the application.
  - **AgencyCard.tsx** – Component to display agency information.
  - **ConnectAirportsIcon.tsx** – Icon or component related to airport connections.
  - **LogOutIcon.tsx** – Icon or component for logout functionality.

#### **styles**
- Dedicated folder for styles.
  - **components.module.css** – Component-specific styles.
  - **fonts.ts** – Likely manages fonts used in the application.
  - **ThemeConfiguration.tsx** – Theme configuration or global design variables for colors, fonts, etc.
---
### General Structure
- **Modular Organization:** The project is organized into subfolders separating components, data, and styles.
- **Separation of Concerns:** There is a clear division between logic (functions.ts), data (api.json), and presentation (app, styles).
- **TypeScript Usage:** Indicated by `.tsx` and `.ts` extensions, adding type safety and robustness to development.

## Improvements and Future Enhancements
**Presentation Improvements:**
- The visual design could better align with the original wireframe or design theme by refining colors and icons.
- Adding animations and smoother transitions between routes would improve the user experience.
- Enhance responsiveness to ensure better adaptability across devices.

**Additional Work with More Time:**
- Reduce the use of pre-assembled components from external libraries in favor of custom-built solutions.
- Implement the search filter that remains incomplete.
- Improve the leg detail view by adding more information and enhancing the layout.
- Provide more thorough comments and documentation throughout the code.
- Restructure folders and components for better scalability and maintainability.


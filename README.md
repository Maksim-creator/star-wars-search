# AllianceBook React Native Project

## Key Concepts and Approach

### Project Setup

1. **Initialize Project**: Created using Expo CLI for quick setup and easier development.
2. **Dependencies**:
   - `react-native`: Core library for building the UI.
   - `redux-toolkit`: For state management.
   - `nativewind`: For styling using Tailwind CSS in React Native.
   - `redux-persist`: For persisting data.

### API Integration

- **Character Data**: Used SWAPI to fetch character data.
- **Avatars**: Fetched character avatars using `https://starwars-visualguide.com/assets/img/characters/{id}.jpg`.

### UI Implementation

- **Infinite Scrolling**: Implemented infinite scrolling to load characters as the user scrolls down.
- **Search and Filter**: Added search functionality and filtering options to refine character lists based on different attributes.
- **Pull-to-Refresh**: Added pull-to-refresh feature to reload character data.
- **Animations**: Included subtle animations to enhance user experience without overdoing it.

### Best Practices

- **Code Structure**: Followed a modular approach, separating components, services, and utilities for maintainability.
- **State Management**: Utilized Redux Toolkit for efficient state management.
- **Styling**: Used NativeWind (Tailwind CSS for React Native) for consistent and responsive design.
- **Version Control**: Committed changes frequently with meaningful commit messages to demonstrate the development process.

## Incomplete Features

- While the core functionalities are implemented, additional features such as advanced filtering options and detailed character views are not yet complete.

## Getting Started

### Prerequisites

- Node.js
- Expo CLI

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Maksim-creator/star-wars-search.git
   cd star-wars-search
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the project:
   ```sh
   expo start
   ```

### Conclusion

This project aims to showcase the ability to build a functional and user-friendly React Native application using best practices and modern tools. The focus is on clean code, maintainability, and efficient state management. Further enhancements and optimizations can be made based on additional requirements and feedback.

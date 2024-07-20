# AllianceBook React Native Project

## Introduction

This document represents the testing brief of the imaginary project called AllianceBook. It will be used to assess the abilities of the candidate to verify their overall skills and chosen approach in solving problems and challenges. It tries to simulate a real-world scenario or an example of a problem that programmers at BRACKETS encounter, but in the very fun world of Star Wars.

Don’t hesitate to ask any further questions, we’ll try to be cooperative.

## Brief

### Situation

You are a highly tech-skilled member of the Alliance, programming a UI to help other members see information about all the characters in the universe.

Luckily, you found an API: [SWAPI](https://swapi.py4e.com/) with all the data you need. However, since the API doesn’t provide any avatar or image attribute for said characters, you can use this endpoint to load avatars by character ID: `https://starwars-visualguide.com/assets/img/characters/{id}.jpg`.

May the Force be with you.

### Goals

Your goals are:
1. Use the API to load all characters and show them in a listing with infinite scrolling.
2. Implement search and some filtering by the attributes of your choice (possible on the API).
3. Ensure the UI is clean, modern, and user-friendly. You can add a pull-to-refresh feature to make it bulletproof.
4. Animations are welcome but don’t overdo it; find the balance.

### Stack

We prefer to use React Native with Expo and the power of RTK, but you can use any state management tool you are comfortable with. For the styles, we love to use Tailwind (NativeWind), but you are free to choose any other CSS framework or even a component library.

### Evaluation Criteria

We will consider multiple criteria during the assessment. Feel free to create a README file where you can explain key concepts used, your approach, or other aspects of your results that should not be overlooked.

Examples to guide you in fulfilling this assignment (you don’t need to cover everything and you can add more):
- Show us your work through your commit history.
- Best practices and approach chosen.
- Maintainability - Is it written in a clean, maintainable way?
- Correctness - Does the functionality act in sensible and efficient, thought-out ways?
- Is it ready for cooperation with the rest of the team (code style, Prettier config, etc.)?
- Completeness of the system is not important (we don’t expect it to be the final solution), but highlight what’s not yet complete when submitting.

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

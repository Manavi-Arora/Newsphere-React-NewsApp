# Newsphere - React News Website

Newsphere is a modern, responsive React-based news website that provides news articles across multiple categories, including Business, Sports, Technology, Entertainment, Health, Science, and more. It integrates with a news API to fetch the latest articles and display them to the users.

## Features

- **Category-based News**: View the latest news from various categories such as Business, Entertainment, Sports, Technology, Science, Health, and more.
- **Dynamic Navigation**: The navigation bar dynamically highlights the active category based on the current route.
- **Loading Bar and Spinner**: A progress bar and loading spinner is displayed while news articles are being loaded.
- **Mobile-Responsive**: The website is optimized for both desktop and mobile devices.
- **Dynamic Badge for Latest News**: A dynamic badge is displayed on news articles if they are the latest updates, making it easier for users to spot breaking news.

## Tech Stack

- **React**: Frontend library for building the user interface.
- **React Router**: For handling dynamic routing between pages.
- **React Hooks**: Used for managing state and side effects.
- **Axios**: For fetching data from a news API.
- **React Loading Bar**: A loading bar component to show progress during data fetching.
- **Bootstrap**: For responsive and styled UI components.

## Installation

To set up this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/newsphere.git
```
### 2. Navigate to the project directory
```bash
cd newsphere
```
### 3. Install dependencies
Run the following command to install the necessary dependencies.
```bash
npm install
```
### 4. Set up API Key
This project requires a news API key to fetch news data. You can get a free API key from NewsAPI.

Create a .env file in the root of your project directory and add the following line with your API key:
```bash
REACT_APP_NEWS_API_KEY=your_api_key_here
```
### 5. Start the development server
```bash
npm start
```
The website should now be running at http://localhost:3000.
## Available Routes

- `/`: Home page with the latest general news.
- `/sports`: News articles related to sports.
- `/business`: News articles related to business.
- `/entertainment`: News articles related to entertainment.
- `/health`: News articles related to health.
- `/science`: News articles related to science.
- `/technology`: News articles related to technology.

## File Structure

```bash
├── public/
│   ├── index.html           # Main HTML file
│   └── favicon.ico          # Favicon for the website
├── src/
│   ├── components/          # React components (Navbar, News, etc.)
│   ├── App.js               # Main app component with routing setup
│   ├── App.css              # Global styles
│   ├── index.js             # Entry point for the React app
│   ├── .env                 # API key configuration
│   └── assets/              # Static files (images, etc.)
├── package.json             # Project metadata and dependencies
├── .gitignore               # Git ignore rules
└── README.md                # Project documentation
```
## Contributing

We welcome contributions to this project! If you'd like to contribute, follow these steps:

1. **Fork the repository**: Create a copy of the repository under your own GitHub account.
2. **Create a new branch**: Create a new branch for your changes (e.g., `git checkout -b feature-branch`).
3. **Make your changes**: Implement your changes or improvements.
4. **Submit a pull request**: Once your changes are complete, submit a pull request to the main repository.

## Visual Preview

![Screenshot 2024-12-28 162059](https://github.com/user-attachments/assets/2badc6a5-650d-4e6e-879e-bebc820581b8)
![Screenshot 2024-12-28 162258](https://github.com/user-attachments/assets/a7ebe108-b437-4b29-a703-421e3e68cdcb)
![Screenshot 2024-12-28 162410](https://github.com/user-attachments/assets/e1086564-e9d0-44ce-80aa-2461e6dd7ee3)
![Screenshot 2024-12-28 163155](https://github.com/user-attachments/assets/ed1527c0-31e0-4cdf-a984-b6390636366c)


   

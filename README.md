# Weather App

A sleek and modern weather app built with **React**, designed to display real-time weather information for any city in the world. This app fetches data from the OpenWeather API and provides users with essential weather details, including temperature, humidity, wind speed, and an interactive toggle for Celsius and Fahrenheit units. The app also displays a live date and time for a polished user experience.

## Features

- **Search Functionality**: Enter any city name to fetch its current weather information.
- **Temperature Units Toggle**: Switch between Celsius and Fahrenheit with a single click.
- **Weather Icons**: Displays visually appealing weather icons corresponding to the current weather condition.
- **Live Date and Time**: The app shows the current date and time, updating every second.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Dynamic Styling**: Background images and UI elements adapt to provide a visually engaging experience.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Axios**: For making API requests to the OpenWeather API.
- **CSS**: For styling and responsive design.

## Installation

Follow these steps to run the app locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## API Integration

This app uses the **OpenWeather API** to fetch real-time weather data. To use this app, you will need an API key:

1. Sign up for a free API key at [OpenWeather](https://openweathermap.org/api).
2. Replace the placeholder `appid` value in the `fetchWeatherData` function of `src/App.js` with your API key:
   ```javascript
   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=${unit}`);
   ```

## Project Structure

The project follows the standard **create-react-app** structure:

```
weather-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.css        # Styling for the app
│   ├── App.js         # Main React component
│   ├── index.js       # React entry point
│   └── ...
├── .gitignore         # Ignoring unnecessary files (e.g., node_modules)
├── package.json       # Project dependencies and scripts
└── README.md          # Documentation (this file)
```

## Features in Action

- **Real-time Weather**: Displays the current weather, including a detailed description (e.g., "Overcast Clouds").
- **Weather Icons**: Icons dynamically match the weather conditions (e.g., clear skies, rain, etc.).
- **Live Clock**: A live date and time display, formatted according to the user's locale.

## Future Improvements

- **5-Day Weather Forecast**: Add support for displaying a multi-day weather forecast.
- **Geolocation**: Automatically detect the user's location to show their local weather by default.
- **Backgrounds by Weather**: Change the background image dynamically based on the weather condition.
- **Error Handling**: Improve error messages for invalid cities or network issues.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

### Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: realjakeanderson@gmail.com
- **GitHub**: [jakeanderson-dev]((https://github.com/jakeanderson-dev))



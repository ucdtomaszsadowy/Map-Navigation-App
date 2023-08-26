# Map Navigation App

## A simple web application that utilizes the Mapbox API for map rendering and navigation. Additionally, it calculates the carbon footprint and fuel cost based on the route.

## Features:

- Interactive Map: Uses Mapbox to render a map.
- Geolocation: Fetches the user's current location and shows on the map.
- Map Navigation: Provides a navigation control for map usage.
- Route Direction: Calculates and displays the best route to a given destination.
- Carbon Footprint Calculation: Computes the carbon emission based on the route.
- Fuel Cost Calculation: Computes the fuel cost based on the route.

## Usage:

- Map Initialization: On page load, the map initializes to the user's current location or defaults to (0,0) if there's an error.
- Start GPS: Clicking the "Start GPS" button will constantly update the map to the user's location.
- Calculate Carbon Footprint: After plotting a route, click on the "Calculate Carbon Footprint" button to get an estimate of the carbon emissions for the chosen route.
- Calculate Fuel Cost: After plotting a route, click on the "Calculate Fuel Cost" button to get an estimate of the fuel cost for the chosen route.

## Setup:

    1. Ensure you have an active internet connection as the application fetches libraries and resources online.
    2. Open the HTML file in your browser.
    3. Ensure you allow the application to access your location for a better user experience.
    4. Interact with the application as desired.

## Dependencies:

    1. Mapbox GL JS: For rendering the map and providing map functionalities.
    2. Mapbox Directions Plugin: For plotting routes on the map.
    3. Geolocation API: To get the user's current location.

## Notes:

The application assumes an average fuel efficiency and fuel cost. Adjustments may be needed for different regions or vehicles.
The carbon emission calculation is based on average data. It might not be 100% accurate for all vehicles.
Please note that you need to have your Mapbox token to make this application work. This example uses a token, and it's advised not to expose your private tokens in the client-side code for production use cases.

Weather-Project
Objective:
Use the ReactJS to request the current weather data in Nashville, TN and render the temperature, apparent temperature, humidity, and precipitation on the DOM.
Think about what components you will need and how you will represent the data.
SETUP:
Go to the Dark Sky API site and create an account You will get 1000 API calls per day. If you exceed 1000 API calls in a day then they will charge you $0.0001 per call. To help avoid hitting this limit, after you create an account, go to Account Settings, and update your Daily Usage Limit to 800.

Click on Console, to view your secret key. This will be used when you make an API request

PHASE 1:
To get the current weather for Nashville you will first need to have the longitude and latitude.

Use Google Maps to get this information. Put the following link in your browser and find the lat and lng. (You’ll be using these values to make a request to the Dark Sky Weather API): Save the lat and lng values: You will be using these in when you make the weather API call

https://maps.googleapis.com/maps/api/geocode/json?address=37211

Now that you have the lat and lng values, make a fetch request to the following URL: Use the lat and lng values you collected from the first step to get the current weather information

https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/YOUR_SECRET_KEY/lat,lng

Make sure that you are successfully collecting the weather date by logging the result to the console.

PHASE 2:
Store and parse the data you collected to display the temperature, apparent temperature, humidity, and precipitation.
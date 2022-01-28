
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  html,
  div,
  body {
    background-color: #1a1a1a;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 18px;
    outline: none;
  }
  body {
    font-family: Helvetica, sans-serif;
  }
  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    margin-left: 50px;
  }
  .content p {
    margin: 0px;
  }
  .content .afterbutton
  {
    padding-top: 16px;
  }
  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: '';
    position: absolute;
    width: 1px;
    background-color: white;
    top: 15px;
    bottom: 80px;
    left: 18px;
    margin-left: -2px;
  }
  /* Container around content */
  .container {
    padding: 0px 0px;
    width: 70%;
    align-content: left;
    margin: 0px 0px 0px 0px;
    margin-left: 25px;
    margin-top: 32px;
  }
  /* The circles on the timeline */
  .container::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    right: -6px;
    background-color: white;
    border: 0px solid #FF9F55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    margin: 0px 0px 0px 0px;
  }
  /* Place the container to the left */
  .left {
    left: 0px;
  }
  /* Place the container to the right */
  .right {
    left: 0px;
  }
  /* Add arrows to the left container (pointing right) */
  .left::before {
    content: " ";
    height: 0;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }
  /* Fix the circle for containers on the right side */
  .right::after {
    left: -13px;
  }
  /* The actual content */
  .content {
    padding: 5px 10px;
    color: white;
    background: transparent;
  }
  .button.is-dark.is-medium {
    font-family: 'IBM Plex Sans', sans-serif;
    background: transparent;
    border-color: white;
    color: #fff;
    border: 1px solid white;
    padding: 10px;
    padding-left: 20px;
    margin-bottom: 13px;
    border-radius: 0px;
    min-width: 180px;
    font-size: 14px;
    text-align: left;
    min-height: 48px;
    margin: 0px;
    justify-content:left;
  }
  .button.is-dark.is-medium:hover {
    font-family: 'IBM Plex Sans', sans-serif;
    background-color: #2a67f5;
    border-color: white;
    color: #fff;
    text-decoration: none;
  }
  .footer {
    display: flex;
    background-color: #343A3E;
    margin-top: 20px;
    padding: 0px;
    max-width: 1200px;
  }
  .github-icon {
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
    object-position: 250% 100px;
    opacity: 15%;
    bottom: 15px;
  }
  .image-content {
    padding: 5px 10px;
    background: transparent;
    color: black;
    position: absolute;
    font-size: 27px;
  }
  .image-div {
    position: relative;
    background-color: white;
    min-width: 50%;
    background-image: linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("https://raw.githubusercontent.com/IBM/Developer-Playground/master/didact/images/github.svg");
    background-position: -50% 60px;
    background-repeat: no-repeat;
    padding-top: 20px;
    padding-left: 20px;
  }
  .image-btn {
    position: absolute;
    right: 0;
    bottom: 0%;
    background-color: #0062FF;
    width: 300px;
    padding: 0px;
    padding-bottom: 20px;
  }
  .image-link span 
  {
    float: right;
    font-size: 32px;
    padding-right: 20px;
  }
  .image-btn .image-link:hover
  {   
    text-decoration: none;
    color: white;
    background-color: #0353E9;
  }
  .image-btn  a:hover
  {
    text-decoration: none;
    color: white;
  }
  .image-link {
    color: white;
    display: block;
    padding: 5px 10px 5px 10px;
    line-height: 28px;
    font-size: 16px;
  }
  .header
  {
   background-image: url('https://github.com/IBM/Developer-Playground/blob/development/didact/images/weather.png?raw=true');
    background-position: right;
    width: 100%;
    height: fixed;
    min-height: 320px;
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 30px;
    max-width: 1200px;
    background-repeat: no-repeat;
    background-size: 700px 500px;
  }
  .header .left-content
  {
    width: 45%;
    background-color:#2a67f5;
    min-height: 320px;
    padding: 20px;
    /* padding-top: 2.5%; */
    font-size: 16px;
  }
  .header .left-content h4
  {
    background: none;
    color: white;
    padding-left: 25px;
    padding-right: 25px;
  }
  .header .left-content div
  {
    background: none;
    color: white;
    padding-left: 15px;
    padding-right: 25px;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top:10px;
  }
  .header .left-content ul
  {
    margin: 0px;
    margin-left: 25px;
    margin-bottom: 10px;
    line-height: 16px;
  }
  .container a
  {
    color: #78A9FF;
    background-color: transparent;
    text-decoration: none;
  }
  .container a:visited
  {
    color: #8C43FC;
    background-color: transparent;
    text-decoration: none;
  }
  .apptitle
  {
    margin-left: 25px;
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 28px;
    color: white;
  }
  .subheading
  {
    margin-left: 25px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 16px;
    color: #c1c7cd;
  }
  .assetdetails{
    margin-left: 30px;
    padding-bottom: 20px;
    margin-top: 16px;
}
  a:hover{
      color: #A6C8FF;
      text-decoration: underline;
  }
  a:visited{
      color: #BE95FF;
  }

</style>
</head>
<body>
  <div class="apptitle"> 
    Weather Data Assistant for Travel
  </div>
    <div class="subheading">
    Get to know weather trends of a location from a set of GIS information
  </div>
   <div class="header">
       <div class="left-content">
            <div>
              Choosing a travel destination is by far one of the most exciting parts of trip planning. However, understanding weather trends and conditions of the location helps to make informed decisions to plan a visit. Explore the weather forecast on a daily, hourly, and intraday basis. The weather application allows you to understand the weather's impact on your travel itinerary.
         </div>
         <div>
            Showcasing an application to understand the best of Weather conditions using weather Forecast & Historical data by using APIs by Here Maps.
         </div>
      </div> 
   </div>
   <br>
   <br>
    <div class="assetdetails">
            <p style="font-size: 24px;">Learning Resources</p>
            <ul>
            <li><a href="https://developer.ibm.com/apis/catalog/weather--weather-forecast-apis/Weather%20Company%20Data%20-%20API%20Common%20Usage%20Guide">Weather Forecast APIs</a></li>
            <li><a href="https://developer.ibm.com/apis/catalog/weather--environmental-intelligence-suite_historical-apis/Weather%20Company%20Data%20-%20API%20Common%20Usage%20Guide">Historical APIs</a></li>
            </ul>
            <br>
            <p style="font-size: 24px;">API components</p>
            <ul>
            <li><a href="https://developer.ibm.com/apis/catalog/weather--weather-forecast-apis/Introduction">Weather Forecast APIs</a></li>
            <li><a href="https://developer.ibm.com/apis/catalog/weather--environmental-intelligence-suite_historical-apis/Introduction">Historical APIs</a></li>
            <li><a href="https://developer.ibm.com/apis/catalog/heremaps--geocoding-and-search-api-v7/Introduction">HERE Geocoding and Search API</a></li>
            <li><a href="https://developer.ibm.com/apis/catalog/heremaps--here-public-transit-api/Introduction">HERE Public Transit API</a></li>
            <li><a href="https://developer.here.com/documentation/map-tile/dev_guide/topics/quick-start.html">HERE Maps API</a></li>
            </ul>
            <br>
            <p style="font-size: 24px;">Prerequisites</p>
            <p>Sign up for a Weather Company Data trial </p>
            <p style="margin-top:-16px;">(It might take up to 48 hours to get the API provisioned)</p>
            <p>Subscribe to the HERE Public Transit API</p>
            <ol>
            <li>Sign up as HERE Developer</li>
            <li>Login to your HERE account, navigate to Projects > REST </li>
            <li>Go to OAuth2.0 > Generate App and click 'Create credentials' </li>
            <li>'Access Key ID' and 'Access Key Secret' is your Client ID and Secret</li>
            <li>Proceed to the 'API Keys' section and create your API Key</li>
            </ol>
            <br>
            <p style="font-size: 24px;">Instructions</p>
        </div>
   <div class="timeline">
      <div class="container right" style="margin-top:0px;padding-top:0px;">
         <div class="content">
            <p>Clone the application source code</p>
            <a class="button is-dark is-medium" title="Get the Code" href="didact://?commandId=extension.sendToTerminal&text=weather%7Cget-code%7Cweather|git%20clone%20-b%20weather%20https://github.com/IBM/Developer-Playground.git%20${CHE_PROJECTS_ROOT}/weather/">Get the Code</a>
         </div>
      </div>
      <div class="container right">
         <div class="content">
            <p>Start to build the application</p>
            <a class="button is-dark is-medium" title="Build the Application" href="didact://?commandId=extension.sendToTerminal&text=weather%7Cbuild-application%7Cweather%7Ccd%20${CHE_PROJECTS_ROOT}/weather/WeatherDataAssistant%20%26%26%20npm%20config%20set%20@here:registry%20https://repo.platform.here.com/artifactory/api/npm/maps-api-for-javascript/%20%26%26%20npm%20install%20--production">Build Application</a>
         </div>
      </div>     
      <div class="container right">
         <div class="content">
            <p>Configure the application. See prerequisites</p>
            <a class="button is-dark is-medium" title="Open the File" href="didact://?commandId=extension.openFile&text=weather%7Cconfigure-application%7C${CHE_PROJECTS_ROOT}/weather/WeatherDataAssistant/.env">Configure Application</a>
         </div>
      </div>
      <div class="container right">
         <div class="content">
            <p>Launch the application</p>
            <a class="button is-dark is-medium" title="Launch the Application" href="didact://?commandId=extension.sendToTerminal&text=weather%7Claunch-application%7Cweather|cd%20${CHE_PROJECTS_ROOT}/weather/WeatherDataAssistant%20%26%26%20node%20token.js%20%26%26%20node%20server.js">Launch the Application</a>
         </div>
      </div>
        <div class="container right">
         <div class="content">
            <p>Integrating ‘HERE Geocoding and Maps’ to get weather data</p>
            <a class="button is-dark is-medium" title="Install HERE Features" href="didact://?commandId=extension.sendToTerminal&text=weather%7Claunch-application%7Cweather|cd%20${CHE_PROJECTS_ROOT}/weather/WeatherDataAssistant%20%26%26%20mv%20here-components/airport.js%20here-components/hotels.js%20here-components/transit.js%20here-components/progcomp.js%20src/components%20%26%26%20cp%20here-components/App.js%20src/App.js">Integrate Features</a>
         </div>
      </div>
      <div class="container right">
         <div class="content">
            <p>Launch the updated application </p>
            <a class="button is-dark is-medium" title="Launch" href="didact://?commandId=extension.sendToTerminal&text=weather%7Crelaunch-application%7Cweather|cd%20${CHE_PROJECTS_ROOT}/weather/WeatherDataAssistant%20%26%26%20npm%20install%20%26%26%20export%20REACT_APP_mode=dev%20%26%26%20npm%20start">Launch the Application</a>
         </div>
      </div>
   </div>
   <br>
      <div class="assetdetails">
    <p style="font-size: 24px;">Stop and cleanup services</p>
    <p>Once you are done or would like to edit or explore the application, make sure to stop the services</p>
   </div>
   <div class="footer">
<div class="content" style="padding:30px;padding-left:60px;margin-right:80px;padding-bottom:0px;">
         <p>Stop the services</p>
<a class="button is-dark is-medium afterbutton" title="Stop Application" href="didact://?commandId=vscode.didact.sendNamedTerminalCtrlC&text=weather" >Stop Application</a>
         <p class="afterbutton">Explore and update the code as per your requirement</p>
         <a class="button is-dark is-medium afterbutton" title="Explore the Code" href="didact://?commandId=extension.openFile&text=weather%7Cexplore-code%7C${CHE_PROJECTS_ROOT}/weather/WeatherDataAssistant/src/App.js">Explore Code</a>
         <p class="afterbutton ">Re-launch the application with the updated code</p>
         <a class="button is-dark is-medium afterbutton" title="Re-Launch the Application" href="didact://?commandId=extension.sendToTerminal&text=weather%7Crelaunch-application%7Cweather|cd%20${CHE_PROJECTS_ROOT}/weather/WeatherDataAssistant%20%26%26%20npm%20install%20%26%26%20export%20REACT_APP_mode=dev%20%26%26%20npm%20start">Re-Launch Application</a>
      </div>
      <div class="image-div">
         <p class="image-content">Want to explore this project more?
            <span style="font-size:15px;margin-top:0px;display:block;">Head over to the <a href="https://github.com/IBM/Developer-Playground/tree/weather/WeatherDataAssistant">Github Repository</a></span>
         </p>
         <div class="image-btn">
<a class="image-link" href="didact://?commandId=extension.openURL&text=weather%7Cview-product-details%7Chttps://docs.google.com/document/d/15Ru_3wdMgpbM4aOCm-4qNAnRfjx2w-Ruw3lnr8Hnodk/edit" target="_blank">
               View Product Details 
               <span>
                  <svg style="position: absolute; right: 10px;" fill="#ffffff" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/  svg" width="25" height="25" viewBox="0 0 32 32" aria-hidden="true">
                     <path d="M18 6L16.6 7.4 24.1 15 3 15 3 17 24.1 17 16.6 24.6 18 26 28 16z"></path>
                     <title>Arrow right</title>
                  </svg>
               </span>
            </a>
  <a class="image-link" href="didact://?commandId=extension.openURL&text=weather%7Cget-trial-subscription%7Chttps://epwt-www.mybluemix.net/software/support/trial/cst/welcomepage.wss?siteId=1525&tabId=4159&w=1&_ga=2.232934494.1143069578.1643043347-1238955782.1642421092" target="_blank">
               Get Trial Subscription 
               <span>
                  <svg style="position: absolute; right: 10px;" fill="#ffffff" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/  svg" width="25" height="25" viewBox="0 0 32 32" aria-hidden="true">
                     <path d="M18 6L16.6 7.4 24.1 15 3 15 3 17 24.1 17 16.6 24.6 18 26 28 16z"></path>
                     <title>Arrow right</title>
                  </svg>
               </span>
            </a>
         </div>
      </div>
   </div>
   <br><br>
</body>
</html>
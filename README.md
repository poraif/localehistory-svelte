# Locale history - Sveltekit version

A people's history app for users to submit their own local knowledge and points of interest.
https://localehistory-svelte.netlify.app/ 
 
## Introduction
People's history - i.e. the events and stories of normal people and communities - can be hard to learn about and find without insider or local knowledge. This web app will allow users to add, collate and share points of interest to facilitate sharing and preserving stories both within the local community, and for interested visitors.

## example logins

Log in with:
email: homer@simpson.com
password: secret

##  Key Features
1.	At points of historical interest 
2.	See chart layouts of your points of interest based on town, category and century
3.	View a clickable map of your points

## Known bugs for future updates
-	Clerk authentication currently not connected to backend
-	Image deletion causes other placemarks to be removed
-	Rendering issues upon page reload
-	Markers on individual placemark maps not rendering
   
## Technologies
- Built with Sveltekit framework
-	Node.js backend built with Hapi framework and Joi validation
-	Clerk third party authentication
-	Leaflet map and Frappe charts
-	MongoDB Atlas database
-	Frontend deployed in Netlify, backend deployed Heroku

## Installation
To run the app locally, enter the following into the terminal:
- git clone git clone https://github.com/poraif/localehistory-svelte.git
- npm install
- npm run dev
- visit http://localhost:5173 in browser
_NB the above assumes git, node and npm are installed
_


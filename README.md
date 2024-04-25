# Locality App
Welcome to the Locality App! This application helps users explore nearby businesses and add them to their bucket list for future reference. Below is a guide to help you understand the project structure, setup instructions, and the key functionalities.

## Project Structure
The project consists of the following files and directories:

1. index.html: The main entry point for the application, where users can log in and access the main features.
2. map.html: The page displaying the map, nearby locations, and the bucket list.
3. app.js: Handles the login functionality and particle animation effect on the login page.
4. map.js: Initialize the Google Map and handle location-related functionalities.
5. db.js: Initializes the PouchDB database used in the application.
6. styles.css: Contains the CSS styles for the application.
7. README.md: Documentation file providing information about the project.

## Setup instructions
Step 1: Clone the repository to your local machine.

            git clone https://github.com/tkachwala/CS326.git

Step 2: Open the VSCode terminal and write this command

            npm install

Step 3: After the installation, write this command

            npm run milestone-02

## Key Functionalities
1. Login: Users can log in to the application using their email address. Only the email "user@example.com" is accepted for login right now.

   ![Login Page](images\Login-pic.png)

2. Map Display: The map.html page shows a Google Map with nearby locations marked.
   
   ![Map Display](images\map-display.png)

3. Filter Option: The filter option allows you to customize your search based on your preference.

   ![Filter Option](images\filter-button-pic.png)

4. Bucket List: Users can add locations to their bucket list by clicking on the "Add to Bucket List" button on the map.

   ![Bucket List Button](images\add-to-bucket-list-pic.png) 

5. Help Screen: Clicking on the "Help" button displays information and support options for users.

   ![Help Button](images\help-button-pic.png)

## Note
To access the application, use the email address "user@example.com".
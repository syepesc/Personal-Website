# Personal-Website
Personal portfolio website. 

Initialize express environment: 
1. Create Github repository (clone in case you created on the website)
2. Create folder with project name
3. Open project folder on VS Code
4. Open terminal and type/install:
    4.1 npm install
    4.2 npm init
    4.3 npm install express --save
    4.4 npm install express-generator -g
    4.5 express -e
        follow the folder structure proposed by prof Tom/ Thiago
            - move the file "WWW" from /bin/WWW to the front 
            - change name from "WWW" too "server.js"
            - change npm start file to the new server.js --> go to package.json and change on "scripts" the "start" element.
            - delete bin folder
            - erase all folders on public and add: 
                - assets/images
                - content [ here goes the custom css files ]
                - scripts [ here goes the main js file ]
            - add "partials" folder on views [ here goes the html templates for each sites - chunks of html ]
    4.6 npm install nodemon
    4.7 run nodemon and check.

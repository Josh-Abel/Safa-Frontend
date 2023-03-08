# Safa-Frontend
This is the frontend repository to the application Safa.

In the root directory of the application create a file called config.js

The file looks like:

    const config = {
        API_URL: '<API DOMAIN (http://<IPv4>:8000)>'
    }
  
    export default config;

Then to run the backend locally, use the command:

    npm start

If you want to run this with the docker:

    To build the docker image:
    
        docker build -t safa_frontend .
        
    To run docker container:
    
        docker run -it -p 19000:19000 -p 19001:19001 -p 19002:19002 safa_frontend

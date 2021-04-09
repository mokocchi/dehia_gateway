# DEHIA Gateway
A gateway for [DEHIA](link-sedici), a platform for managing and executing data collection activities that require human intervention.

## Contents
- DEHIA
- Installation
  - Docker (recommended)
  - Run locally (Linux)
- Deploying to Heroku
  - Prerequisites
  - Deploy
- Environment Variables
- Endpoints
  - General Endpoints
  - Define Service Endpoints
  - Auth Service Endpoints
  - Collect Service Endpoints
  - Results Service Endpoints
- See Also

## DEHIA
DEHIA is a platform for Defining and Executing Human Intervention Activities. Its goal is to allow users without programming knowledge to create activities (sets of tasks, mainly for data collection) through a web authoring tool. The activities are exported to a configuration file and then "executed" (solved) from a mobile app. This kind of activities requires human intervention and cannot be solved automatically. 

There is also an API that manages the activities lifecycle, collects the data from the mobile app and returns the results. It also manages the security of the application. The API includes a Gateway and four services: Define, Auth, Collect and Results.
## Installation
You can install the gateway either in containerized version using Docker or locally (on Linux) using NodeJS.
### Docker (recommended)
 1. Create a `app/.env` file based in `app/.env.dist` (See [Environment Variables](#Environment-Variables))
 2. If the services are also run with docker, take note of the docker network.
 3. Build the image: 

 ```
 docker image build -t <image-tag> .
 ```
 4. Run the container exposing the port you set in the `.env` file (and using the network if needed): 
 ```
 docker run --name <container-name> -p <host-port>:<container-port> [--network <poc-network>] <image-tag>
 ```
 5. Go to `http://localhost:<host-port>`. You should see an "API Gateway" message.
 6. Now you can add the URL to the frontend or use the gateway with an HTTP client.
### Run locally (Linux)
## Deploying to Heroku
You can deploy the dockerized version to Heroku if you want.
### Prerequisites
 - Having the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed
 - Having a heroku account and room for one more app

### Deployment
 1. Login in to the Heroku CLI
  ```
  heroku login
  ```
  2. Create a new app
  ```
  heroku create
  ```
  3. You can now change the app name if you want at the Heroku [Dashboard](https://dashboard.heroku.com/)
  4. Set the [Environment Variables](#Environment-Variables) from the Dashboard
  5. Set the stack to `container`
  ```
  heroku stack:set container
  ```
  6. Push app to heroku
  ```
  git push heroku master
  ```
  7. Go to https://<your-app>.herokuapp.com. You should see an "API Gateway" message.
  6. Now you can add the URL to the frontend or use the gateway with an HTTP client.
# Environment Variables
- **API_PREFIX** (default '/api/v1.0'): the prefix for the services' endpoints. Don't change this if you're using the default ones.
- **AUTH_BASE_URL**: URL of the Auth service*
- **DEFINE_BASE_URL**: URL of the Define service*
- **COLLECT_BASE_URL**: URL of the Collect service*
- **RESULTS_BASE_URL**: URL of the Results service*
- **PORT**: the port in which the gateway will listen

*If you're using Docker in the services and the gateway at the same time, create a network first (`docker network create <dehia-network>`) and then run the other containers. Run `docker network inspect <dehia-network>` to get the IP address of the other container and take note. Don't forget to add the port if it's different from Port `80`.
## Endpoints
### General Endpoints
### Define Service Endpoints
### Auth Service Endpoints
### Collect Service Endpoints
### Results Service Endpoints
## See Also
- [DEHIA Frontend](https://github.com/mokocchi/autores-demo-client)
- [DEHIA Mobile App](https://github.com/mokocchi/prototipo-app-actividades)
- [DEHIA Define Service](https://github.com/mokocchi/dehia_define)
- [DEHIA Auth Service](https://github.com/mokocchi/dehia_auth)
- [DEHIA Collect Service](https://github.com/mokocchi/dehia_collect)
- [DEHIA Results Service](https://github.com/mokocchi/dehia_results)
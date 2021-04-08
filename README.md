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
### Run locally (Linux)
## Deploying to Heroku
### Prerequisites
### Deploy
## Environment Variables
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
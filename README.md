# NextJS Event Template

- Next JS 14
- npm package manager


## HOW TO RUN LOCALLY

### Start mock server
- npm run start:stubby

### Start application
- npm run use 20
- npm ci
- npm run dev


## Docker run

Use env vars starting with `REPLACE_SERVER_ENV_` to have them substituted properly at runtime inside Docker or K8S
docker build . -t nextjsplatmosphere
docker run -it -p 3000:3000 -e CRUD_FILE_PATH="MY_ENV_VALUE" REPLACE_SERVER_ENV_FILES_SERVICE_PATH="1" nextjsplatmosphere

docker run -it -p 3000:3000 -env-file=path_to_env ......docker port 8000 must go to my machine port 8000.....    nextjsplatmosphere
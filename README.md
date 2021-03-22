Process of making referral builder
===================================

## What you need to run

Docker environment

## How to run

docker-compose up --build

## current features complete

- Crud of Referrer in API
- Create Referrer from front end.
- Refreshing state of created data. 
- Layout
- Dockerised

## Missing features

Due to the time I promised to deliver I have missing out of the following:

- Unit tests.
- Action icon with events.
- migrations of data into the a new Database.

## 1) Decide on what to use to build the app.
   
I decided to go type script all the way using mysql as the db

Using:

- Nestjs - lastest version

https://docs.nestjs.com/

- React - lastest version
- Mysql - lastest version.

## 2) I created my version of my environment in docker for the above (0.5 hours)

Issues - Could not create DB in docker due multistep issue. Had to use base db due to time.

## 3) Setting up the backend. (2 hours)

I decided to setup the backend in Nest Js as it is very similar to php styled frameworks. 

I used NestJs base functionality to create the scafolding for the REST API.

I used a few plugins to help with Database and data management

"@nestjs/typeorm": "^7.1.5",
"class-transformer": "^0.4.0",
"class-validator": "^0.13.1",

Issues 
- Could not use migrations due to unknown compilation issue, skipped due to time
- Could not get do Unit tests due to time. Wanted to come back later, ran out of time due to complexity of module loading.

I created everything in a standard way using DTO's and modules. Note: I did not go the provider route due to time constraints.

## 4) front end (base form construction - no components) 1.5 hours

 npm i --save react-hook-form
 npm i --save yup
 npm i --save @hookform/resolvers

Looked for good form libraries as I have not done this before:

https://openbase.com/js/react-hook-form

This libray was ok. Took a little time to get used to hook with I have not done before. I am used to class based. 
Concerted to Typescript.

Issues 
- Wasted a lot of time with this library.

## 5) Front end (Api calling) - 0.5 hour

Decided to use Axios as I have used that before.

Created this as a service.

npm i --save axios

https://github.com/axios/axios#axios-api

Issues 
- Cross side scripting, took some time to work out as I have never done this with nestjs.

## 6) React Boot strap - 1 hour

Time to add in the page formatting. Decided to use Bootstrap to speed things up. 

Never done this from scrath so I found out the you have to use react-bootstrap as one of option.
Note: this converts bootstrap into components. 

I did the layout for the form

npm install --save react-bootstrap bootstrap
https://react-bootstrap.netlify.app/getting-started/introduction

Issues 
- Not to bad but syntax a little weird for plugin.

## 7) Table listing - 1 hour

I then created a table using react-table. This is quite bad as a plugin. Hard and fidley to use. 

npm install react-table --save
npm install --save-dev @types/react-table
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

Issues 
- Had to hide table header by css due to bad plugin design.
- decided not to show actions as running out of time.

## 8) Refactor in components - 0.5 hours

I fully refactored into components so I could to the props and save state events. 

Issues 
- I did this do I could pass in the props and create the states needed to autoload.

## 9) Formatting and CSS - 0.25 hour

Adding styling to make it look similar to the requirements.

## 10) Cleanup - 0.25 mins

Removing everything that was not used in the end. 

Time to complete = 7.5 hours.
















 







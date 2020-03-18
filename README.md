# Fullstack technical test
### This test will be between 45-60 minutes and contains two main tasks:

- Clone both repos
  - [bravo-technical-test-backend](https://github.com/trufa-me/bravo-technical-test-backend)
  - [bravo-technical-test-frontend](https://github.com/trufa-me/bravo-technical-test-frontend)
- Review and familiarise yourself with each project directory.
- Install dependencies for both repos, you can use yarn or npm. 
- Run both projects. 
  - The backend is a express app and can be run using `yarn dev` or `npm run dev`
  - The frontend is a create-react-app and should auto load the browser on `yarn start` or `npm run start` if not, browse to `http://localhost:5001`

## Task 1:
### Backend:

Currently the backend is able to provide a list of results using a GET request to: `http://localhost:5002/api/v1/jobs`
The problem you will be required solve, is by figuring out the best way to filter and sort the results. For example, 
a user might only want to see jobs from a specific `location` or might want to sort jobs by `salary`, what would be the best way to go about this?

For now we only require you to add the following features:
 - return only results by title
 - return only results by location
 - and sort results by salary

The end user of this API should be able use this new functionality separately or in combination.

**Feel free to make what ever changes required to the express app you deem necessary** 

## Task 2:
### Frontend:

The frontend will now need to be connected to your backend so that a user can see the job ads. 
You will notice that there are already some components available for each of your values on a job object. 
The task to be accomplished here is to 
 - compose a Card component with your existing components
 - fetch jobs from `http://localhost:5002/api/v1/jobs` and render them in your new composed card component. 
 - feel free to use your the data coming back from your new features on the backend.

**For inspiration:** 

<img src="https://github.com/Trufa-me/bravo-technical-test-frontend/blob/master/designs/layout.png?raw=true" alt="component design" width="350px"/>

## Other Notes:
Here is an example of what the structure looks like. All the data can be found in `bravo-technical-test-backend/db/data.js`
```
 [
    {
        id: "job-1001",
        title: "React Developer",
        location: "London",
        salary: 75000,
        type: "Permanent",
        company: "Acme Company",
        post_date: "14 days ago",
        description: "React Developer Circa £75,000 City of London - Marylebone (NW1) The React Developer will work on a re-platforming of existing products ...",
        logo:"https://logo.clearbit.com/company.com"
    }
 ]
```

# IRON JOBS PROJECT

## Description

Website of the job board for students and alumnis of IronHack, where we can both look for offers and sign up for them and post offers.

## User Stories

**404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.

**500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault.

**Homepage** - As a user, I want to be able to access the home page to see the offers and if I am interested in logging in and registering.

**Sign up** - As a user I want to register on the website to see the offers in which I can register.

**Login** - As a user I want to be able to log in on the webpage so that I can get back to my account.

**Logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account.

**Job list** - As a user, I want to see all the job offers available to be able to choose which ones fit my knowledge.

**Job create** - As a user, I want to create a job offer so that my colleagues can sign up.

**Job detail** - As a user, I want to see the details of job offers so I can decide if it fits with what I am looking for.

**Job application** - As a user I want to be able to sign up for the offer that suits my preferences so they can count on me.

## Backlog

List of other features outside of the MVPs scope

User profile: 
- Upload my profile picture 
- Upload my CV
- Download my CV, from my profile data
- See all offers near my location

Company entity:
- Create a new company entity, who could only create an offer and manage a selection process for the position created.

Add statistics:
- Total registered by offer


## Routes
# User
| Name                  | Method | Endpoint     | Description                                           | Body                          | Redirect  |
| --------------------  | ------ | ------------ | ---------------------------------------------------   | ----------------------------- | --------  |
| Landing               | GET    | /            | Show landing page with 2 options:login/register       |                               |           |
| Login                 | POST   | /login       | Login to the app                                      | {email, password}             | /profile  |
| Sign up               | POST   | /register    | Register user to the app                              | {email, password}             | /profile  |
| User profile          | GET    | /user/:id    | Show user profile                                     |                               |           |
| Log out               | GET    | /            | Log out to the app                                    |                               | /         |           

# Job
| Name                  | Method | Endpoint     | Description                                           | Body                          | Redirect  |
| --------------------  | ------ | ------------ | ---------------------------------------------------   | ----------------------------- | --------  |
| Job                   | POST   | /job         | Create new job                                        |                               |           |
| Show jobs             | GET    | /job         | Show all jobs                                         |                               |           |
| Show job              | GET    | /offer/:id   | Show offer detail                                     |                               |           |
| My jobs               | GET    | /offers/:id  | Show my published jobs                                |                               |           |

# Apply
| Name                  | Method | Endpoint     | Description                                           | Body                          | Redirect  |
| --------------------  | ------ | ------------ | ---------------------------------------------------   | ----------------------------- | --------  |
| Apply                 | POST   | /apply       | User create new apply                                 |                               |           |
| My applies            | GET    | /appy/:id    | Show all user applies                                 |                               |           |



## Models

### User model
```Javascript
{
    firstName: string, required
    lastName: string, required
    email: string, required
    mobile: number,
    studies: {
        start: date,
        end: date,
        careerTitle: string,
        college: string,
        sector: string,
        comments: string
    },
    workExperience: {
        company: string, 
        job: string,
        sectot: string,
        comments: string
    },
    languages:{
        language: string,
        spokenLevel: number,
        writtenLevel: number,
        certificate: string
    }
}
```

### Job model
```Javascript
{
    job: string, required,
    jobDescription: string,
    companyName: string,
    typePosition: string,
    specialty: string,
    salary: number,
    requirements: string,
    isOffered: string,
    location: string,
    user_id: string
}
```

### Apply model
```Javascript
{
    user_id: string, required,
    job_id: string, required,
    data: timestamp,
    state: string,
    hired: boolean
}
```

## Links

### Git

The url to your repository and to your deployed project

[Repository Frontend Link](https://github.com/elenapiaggio/ironjobs-frontend)

[Repository Backend Link](https://github.com/elenapiaggio/ironjobs-backend)

[Deploy Link](https://ironjobs.netlify.com/)

### Slides

[Slides Link](https://slides.com/elenapiaggio/ironjobs/)

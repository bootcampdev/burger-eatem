# Burger-Eatem
<p>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="jQuery" src="https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white"/>
 <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
 <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
 <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>
 <img alt="GitHub" src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
 </p>

 

![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)


# Burger-Eatem-13


## Description

Create an application that tracks burgers orders and eaten.  The goal of this application is to demonstrate the MVC design using Node and MySQL to query and route the data in the app.  This assignment also use Express and Handlebars.

 



## Table of Contents

- [Installation](#installation-requirements)
- [Usage](#usage)
- [Application Repo](#application-repository)
- [Questions?](#questions)
- [License](#license)


## Installation Requirements

$ node install mysql

$ node install express

$ node install express-handlebars

#

* Run the `schema.sql` and `seeds.sql` files are in the db folder and will need to be run to create the database and table.   In the db folder, `mysql>` command line tool running, enter the command `source schema.sql`. This will run the schema file and all of the queries in it.

 * The `connection.js` file inside `config` directory.

   * Inside the `connection.js` file, is the code to connect Node to MySQL.

   * Export the connection.

* The `orm.js` file, has the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

 * Import (require) `connection.js` into `orm.js`

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

 * Export the ORM object in `module.exports`.

#

## Usage
```md
Deployment is using Heroku for our public server

https://fast-lowlands-81468.herokuapp.com/

```



## Questions

[GitHub Account](https://github.com/bootcampdev)


<p><a href="mailto:kimberleyheuer@hotmail.com">eMail Contact</a></p>


## Contributing

* The URL of the deployed application. This should be the link to the url provided by Heroku. Be sure not to submit a link to the Heroku dashboard.

* The URL of the GitHub repository


## Application Repository

[burger-eatem](https://github.com/bootcampdev/burger-eatem/)

## License

The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s.

The Mozilla Public License is a free and open-source software license developed and maintained by the Mozilla Foundation.

---
### Last update

Sun Jan 31 2021 16:58:01 GMT-0600 (Central Standard Time)

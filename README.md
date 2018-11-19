#### A POC for demonstrating user defined fields in a database



#### boilerpate code credits: https://github.com/umayr/koa2-kickstarter



**docker command in case you dont have pg installed locally:**

*docker run --name some-postgres -p 5432:5432 -e POSTGRES_USER=user -e POSTGRES_PASSWORD=pass -e POSTGRES_DB=database -d postgres:10.4-alpine*



**since this was a POC, we did not have the time to create proper database migrations to setup the database schema.
However, we have saved the queries in the postgres sql commands.txt file. after running those queries, the basic
schema of the database would be setup and you can run the POC on it.**

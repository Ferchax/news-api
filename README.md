This project has been created using VS Code and It needs two extensions that be #C Dev Kit (by Microsoft) and C# Extensions (by JosKreativ)
For the .Net Core Web API project I didn't install any dependencies.
For the React project I used Vite to create the project and I installed only one dependency that is tailwind.

To execute the Backend application do the following steps:
1. You need an API KEY from https://newsapi.org/ and put the apikey in appsettings.json
2. cd Backend/NewsAPI
3. dotnet watch run

To execute the Frontend application do the following steps:
1. There are a .env file, there you can change the news api base url to call the backend api
2. cd Frontend
3. npm install
4. npm run dev

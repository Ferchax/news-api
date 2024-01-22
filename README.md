This project has been created using VS Code and need It two extension that be #C Dev Kit (by Microsoft) and C# Extensions (by JosKreativ)
You need an API KEY from https://newsapi.org/ and put the apikey in appsettings.json
For the .Net Core Web API project I didn't install any dependencies.
For the React project I used Vite to create the project and I instelled only one dependency that be tailwind but I didn't use It.

To exceute the Backend application do following steps:
1. cd Backend/NewsAPI
2. dotnet watch run

To exceute the Frontend application do following steps:
1. There are a .env file, there you can change the news api base url to call the backend api
2. cd Frontend
3. npm run dev

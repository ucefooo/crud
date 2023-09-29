# crud
Simple crud system using nextjs 13 nad nestjs and posgresql with prisma
 to run please run npm install in all directories main one and in  ```front-end``` and in ```back-end```


You need to have a postgresql database connected to ur local machine and change .env file to work for prisma with database or just run this cmd :
```docker run --name postgresql -e POSTGRES_USER=database -e POSTGRES_PASSWORD=password -p 5432:5432 -v /Users/youssama/Desktop/data:/var/lib/postgresql/data -d postgres```

if u have docker everything will run perfectly 

enter back-end first and run ```npm run start:dev``` 
after go to front-end and run  ```npm run dev```

and it will work fine.

I first started with creating a full stack app, then later I realized that it was just node.js

I tried using different middlewares like vhost, express-subdomain, etc. However, they didn't work. So at the end I tried using hostname and then splitting the subdomains. 

In this application, the hostname is split into different subdomains and then request to send to server based on subdomain. 
Here we have 2 types of subdomains user and blog. If user is mentioned in the url then list of users is displayed and if blog is mentioned in the url then list of blogs is displayed.

For testing purposes, I used postman.

For deployment purposes, I used vercel.
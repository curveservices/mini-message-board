# Project: Mini Messageboard

## Live Demo 👉 [Mini Messageboard](https://mini-message-board-production-8466.up.railway.app/)

## PC View 👇
![Screenshot 2024-09-02 at 10 59 03](https://github.com/user-attachments/assets/bf8f15eb-05a5-42b6-b9de-8ec5df64db53)

![Screenshot 2024-09-02 at 10 58 51](https://github.com/user-attachments/assets/2ddeecc9-ab32-4751-ae32-9737b2494317)


## Overview

[Project mini messageboard](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) has been set as part of [The Odin Project](https://www.theodinproject.com/). 

After an introduction to Express and, learning Routes, Controls & views in the Express section of NodeJS course, a project was set to create a mini messageboard. 

The lessons on Routes helped me describe how routes are defined, explain route parameters and query parameters and set up new routers on a path. 

The lessons on Controllers helped me explore various response methods, implement error handling middleware to catch and process errors gracefully and helped me describe common use cases for middleware, such as validation and authentication. 

The views section of this course showed me how to setup EJS in an Express project also how to use EJS.

## Assets

- none provided

## Obejective

1. Set up a basic Express app by installing Express and EJS. Set up a basic index route and run your server. Create the required folders and files as discussed in the previous lessons.

2. 2 routes, the index ```("/")``` and a “new message” form ```("/new")```.

3. Create an array at the top of your index router called messages and put a couple of sample messages inside of it.

```
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
```

4. Next, in your index template (in the ```"views"``` folder) loop through the messages array and for each one, display the user, text and the date the message was added. Don’t forget to make your messages available to your template by including it in the ```res.render``` ‘locals’ object (e.g. ```res.render("index", { title: "Mini Messageboard", messages: messages })```).

5. Set up the new message form. In the router add a ```router.get()``` for the ```"/new"``` route and point it to a template named ```"form"```. In the views directory create your ```form``` template. Add a heading, 2 inputs (one for the author’s name and one for the message text) and a submit button. To have the form make a network request you will need to define it with both a method and an action like so (we will learn how to handle forms in a later lesson):

```
<form method="POST" action="/new">
   put your inputs and buttons in here!
</form>
```

6. With your form set up like this, when you click on the submit button it should send a POST request to the url specified by the action attribute, so go back to your index router and add a ```router.post()``` for ```"/new"```.
7. In order to get and use the data from your form, you will need to access the contents of your form inside ```router.post()``` as an object called ```req.body```. The individual fields inside the body object are named according to the name attribute on your inputs (the value of ```<input name="messageText">``` will show up as ```req.body.messageText``` inside the ```router.post``` function). For this to work as intended, you’ll need to use a app level Express middleware called ```express.urlencoded()``` to parse the form data into req.body. You can set this up by adding the following line to your app setup:

```app.use(express.urlencoded({ extended: true }));```

8. In your ```router.post()``` take the contents of the form submission and push them into the messages array as an object that looks something like this:

```messages.push({ text: messageText, user: messageUser, added: new Date() });```

9. At the end of the ```router.post()``` function use ```res.redirect("/")``` to send users back to the index page after submitting a new message.
10. Add an “open” button or link next to every message to open a new page with the message details.

## Extra
- 

## Languages & Tools

<a href="https://javascript.info/">
    <img width="100" alt="Javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" /></a> 
<a href="https://nodejs.org/en/">
    <img width="100" alt="nodejs" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" /></a> 
<a href="https://expressjs.com/">
    <img width="100" alt="express" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" /></a> 
<a href="https://css3.com/">
    <img width="100" alt="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" /></a> 
<a href="https://git-scm.com/">
    <img width="100" alt="GIT" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /></a>
<a href="https://webpack.js.org/">
    <img width="100" alt="Webpack"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" /></a>


***<a href="https://twitter.com/Crypto_Rozla"> Rozla-Dev </a> 02-09-2024***


[Back to top 👆](#project-mini-messageboard)
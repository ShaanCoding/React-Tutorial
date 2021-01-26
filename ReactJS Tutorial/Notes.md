# Codevolutions React Tutorial

## 1. Introduction

* In this series we will start from scratch and learn different concepts of react
* In this video we will talk about what is react, why we should learn react & future content

* We also will go over the prerequisites of what to learn react

### What is React?

* It is an open source javascript library for building user interfaces
* React is a Javascript library and is **not a framework**
* It focuses on one thing and doing one thing really well, **building user interfaces**
* It does not focus on routing or http requests
* React has a rich ecosystem and plays well off other libraries to build full fledged applications

### Why learn React?

* React is a project created and maintained by facebook, as such it's got a huge backing and has money & resources for the project to be kept alive
* It has more than 100k stars on github
* Additionally it has a huge community
* Also from a stackoverflow survey, it is one of the most used libraries and is one of the most in demand skillsets right now

### Component Based Architecture

* React uses a componennt based architecture, this bascially breaks down a website into component based parts which is great for encapsulation
* I.e a traditional website can be broken down into
![picture 1](../images/2eaa9bde81ffad1d2367441e9ce3a000bc63102c61ed6c4f02b03440675596dc.png)  

### Reusable Code

* Components also allow reusable code
* I.e we can make a react component for articles
* We can then use this article for a react, angular and vue article after the fact
* Especially for enterprise solutions this is a huge benefit

### React is declarative

* We just tell react what we want and react through the REACTDOM will build the UI
* This is a declarative paradigm, which alternative to the imperative paradigm is where we do it line by line
* I.e we go to an artist and tell them what has to be done, whilst we would tell a 5 year old child what to do, which we'd say instruction by instruction.
* React helps to abstract away the complicated parts
* React will handle efficentvely updating and rendering of the components
* DOM updates are also handled gracefully in react

### More on why React?

* React seamlessly intergrates react into any of your applications
* A small sub-section or the entire application can be done into react
* Additionally once getting familar with react, we can venture into mobile applications through react-native

### Prerequisites

* HTML, CSS & JavaScript fundamentals are necessary
* ES6 is also mandatory
* JavaScript - 'this' keyword, filter, map and reduce
* ES6 - let & const, arrow functions, template literals, default parameters, object literals, rest and spread operators, destructuring assignments
* We will be learning react from scratch

### Guideline

![picture 2](../images/11c3854403bb4bf5145c07612bb70d90a505373d6758ca7abc63efd5a38e512e.png)  

## 2. Hello World

* We will start this by making our development environment, to start we first need two things:
  * Node
  * Visual Studio Code
* To create a new react application we will be making use of `Create React App`
  * This is great as we can quickly generate the template files for a react application by running a command
  * In VSC run the command
  ```
  npx create-react-app nameOfProject --template typescript
  npm start (alternatively yarn start in wsm which is a lot faster)
  ```
* To edit the project, go to the App.tsx file and change the content
  * For now we will change the text to now say `Hello World!`
* When the changes are made the react project will automatically update the items

* Before the next video, we will also show an alternative method of creating a react project
    * In the first method we used npx, which is a npm package runner
    * There is also a slightly different mode which is through the npm, we could install the npm package globally and run it through create-react-app
    ```
    npm install create-react-app -g
    create-react-app <project name>
    ```


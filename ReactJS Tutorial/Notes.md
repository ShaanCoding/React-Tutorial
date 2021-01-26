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

## 3. Folder Structure

* In this video we will be talking about the root structure of the program
![picture 3](../images/aaaa17cb0bb3e9991a637d9018f34e2a532769ad683475922420f29ab9106eb6.png)  

  * **package.json** - Contains the key files, dependencies and the scripts to run the react project
  * **package-lock.json** - Depending on our package manager we have package-lock for our yarn files.
  * **node_modules** - This is our folder for where all our dependencies are installed
  * **public** - This is our public folder which contains the public info
    * **manifest.json** - this is for progressive web-apps which is out of scope
    * **favicon.ico** - this is the main icon of the app
    * **index.html** - This index.html file is the only html file in our application, we are building single page application and this is it. The view may change dynamically on our browser but this is what turns up
      * We typically won't add any code in this project, maybe in the head but not iin the body
      * We have one div, where id="root", in runtime our react app takeovers the div which makes up our ui
    * **src** - This is our main folder which the majority of our application is going to be developed on.
      * **index.tsx** - This contains our "main" application which takes over the main-component of the root div, through the DOM
      * **app.tsx** - This is the root component that is rendered via index.tsx which is rendered on the html file. The app component is the view which we see on our view browser
      * **app.css** - This is a css file for styling
      * **App.test.tsx** - This is a file for simplistic unit tests

* When we run the command `yarn start`
  * Index.html file is served in the browser
  * Index.html contains the root DOM node
  * Next index.tsx renders the root component of the dom node
  * App.tsx contains the components to be rendered in index.tsx

## 4. Components

* In react, a component represents a part of the user interface
* Going back to the earlier example in the previous video, we can say our website has 5 components
  * Root component
    * Header
    * Sidenav
    * Main content
    * Footer
* Components are also reusable
  * The same components can be used with different properties to display differently i.e the left sidenav can be just a sidenav so it can also become a right sidenav

### Components In Code

* A component code is usually placed in a typescript folder
* I.e the AppComponent files are placed in the App.tsx files
* What does the code look like?
  * This depends on the type of the component

### Component Types

* In React there are two component types:
  * Stateless Functional Component
  * Stateful Class Components

* Functional components are JavaScript functions that return html files that describes the UI
  * ![picture 4](../images/687efd2b074cf83f5297feb70af4952e27c3ca7e9ff970318907f21479c83b67.png)

* Class Components alternatively extend from the component class from the react library.
  * They must contain a render method that contain the return of html
  *  ![picture 5](../images/97e6402941368bf851257fd7cb71b7d0d9b00fe2539cf47418566022d88ab988.png)  

## 5. Functional Components

* Functional components are just javascript function
  * They can also take an optional object of properties (which is called props)
  * They output a HTML file called JSX / TSX
* This is pretty much a typescript function that takes in props and outputs a html file
![picture 6](../images/7eba5cd7484f820826ac999d8d2d43524d32d37ef51b01e54cf3abf0f8161ea9.png)  

### Making A Functional Component

* In the app component we will remove all the html excluding the main `div` tag
* We will now create a functional component that will say `Hello Shaan`
* Make a new file called `Components/Greet.tsx`

```tsx
import React from 'React';

let Greet = () => {
    return (<div>Hello Shaan Khan</div>);
};

export default Greet;
```

* From this we can then import the functional component into `App.tsx` by

```tsx
import Greet from './Components/Greet.tsx';

<Greet/>
```

* We can see that it now appears in our program
* One additional important thing about exporting / importing
  * See we are exporting it as a default, now this is how we are able to import it with any name
  * If we weren't we would have to use a thing called Aliasing

```tsx
export const Greet = () => ();
```

```tsx
import {Greet} from './Components/Greet.tsx'
```
/*
    type worksData = Work[];

    type Work = {
        isLatest: boolean,
        projectType: 'react' | 'js' | 'websites',
        imgSrc: string,
        title: string,
        bodyText: string,
        linkOnCode: string,
        linkOnApp?: string
    }
*/

const getWorksData = () => [
    {
        isLatest: true,
        projectType: 'react',
        imgSrc: './images/works/webpack-configuration.png',
        title: 'Webpack configuration',
        bodyText: `In this project, I have practiced with Webpack and created my own custom configuration - CRA analog. It includes support of React, TS, SASS and contains optimization mechanisms.`,
        linkOnCode: 'https://github.com/dengoloborodko/webpack-configuration'
    },
    {
        isLatest: true,
        projectType: 'react',
        imgSrc: './images/works/redux-store.png',
        title: 'Redux store',
        bodyText: `A simple book store, where you can add the book to the cart, increase/decrease amount of books in the cart, delete a book from the cart, and also you can see the total order price and books count in the header.`,
        linkOnCode: 'https://github.com/dengoloborodko/redux-store',
        linkOnApp: 'https://dengoloborodko.github.io/redux-store'
    },
    {
        isLatest: true,
        projectType: 'react',
        imgSrc: './images/works/password-manager.png',
        title: 'Password Manager',
        bodyText: `In this project, I have practiced working with Hooks (useState, useContext, useEffect, useCallback, custom Hooks), Firebase, Context. And I also used prop-types & react-router-dom libraries`,
        linkOnCode: 'https://github.com/dengoloborodko/password-manager',
        linkOnApp: 'https://password-manager-e57aa.firebaseapp.com'
    },
    {
        isLatest: true,
        projectType: 'react',
        imgSrc: './images/works/star-db.png',
        title: 'Star DB',
        bodyText: `In this project I have practiced working with: Fetch API, React Lifecycle Methods, Children & Context API, default props, prop-types & react-router-dom libraries.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/react-projects/star-db',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/react-projects/star-db/build'
    },
    {
        isLatest: false,
        projectType: 'react',
        imgSrc: './images/works/react-todo-app.png',
        title: 'Todo List',
        bodyText: `In this project I have learned to work with: create-react-app, JSX, props, functional and class components, state, setState, events, controllable components and forms in React.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/react-projects/todo',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/react-projects/todo/build'
    },
    {
        isLatest: false,
        projectType: 'js',
        imgSrc: './images/works/hillel-graduation-project.png',
        title: 'Hillel graduation project',
        bodyText: `It's a project where I had my first experience of working in a team (5 people were participating in the development). It's a multipage online store on pure JS, where you can filter goods, add/remove goods from the basket, place an order`,
        linkOnCode: 'https://github.com/dengoloborodko/hillel-graduation-project',
        linkOnApp: 'https://dengoloborodko.github.io/hillel-graduation-project'
    },
    {
        isLatest: false,
        projectType: 'js',
        imgSrc: './images/works/todo-list.png',
        title: 'Todo List',
        bodyText: `In this todo-list initial data is located in data.json file. So, in this project, I've trained with AJAX requests to the server using Fetch API, and also combined Gulp with Webpack.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/js-projects/hillel-homeworks/lesson_20',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/js-projects/hillel-homeworks/lesson_20/app'
    },
    {
        isLatest: false,
        projectType: 'js',
        imgSrc: './images/works/crud-jquery.png',
        title: 'CRUD List on jQuery',
        bodyText: `In this app, I remade manipulation with the DOM using jQuery methods, customized select with bootstrap-select plugin and added time of registration for person and company. To work with a date I've used moment.js library.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/js-projects/hillel-homeworks/lesson_19/bonus',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/js-projects/hillel-homeworks/lesson_19/bonus/app'
    },
    {
        isLatest: false,
        projectType: 'js',
        imgSrc: './images/works/crud.png',
        title: 'CRUD List',
        bodyText: `In this app I have worked with LocalStorage, constructor functions, prototypes and regular expressions.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/js-projects/hillel-homeworks/lesson_16',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/js-projects/hillel-homeworks/lesson_16/app'
    },
    {
        isLatest: false,
        projectType: 'js',
        imgSrc: './images/works/slider.png',
        title: 'Slider',
        bodyText: `Loop auto-slider which i created using setInterval.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/js-projects/hillel-homeworks/lesson_15-1',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/js-projects/hillel-homeworks/lesson_15-1'
    },
    {
        isLatest: false,
        projectType: 'js',
        imgSrc: './images/works/clock.png',
        title: 'Clock',
        bodyText: `One of my homeworks from Hillel. Here I have practised with setInterval and Date object.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/js-projects/hillel-homeworks/lesson_15-2',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/js-projects/hillel-homeworks/lesson_15-2'
    },
    {
        isLatest: false,
        projectType: 'js',
        imgSrc: './images/works/hardware-store.png',
        title: 'Hardware store',
        bodyText: `In this project I have practised to manipulate with DOM (add elements, remove elements, move elements around etc).`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/js-projects/hillel-homeworks/lesson_11/homework',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/js-projects/hillel-homeworks/lesson_11/homework'
    },
    {
        isLatest: false,
        projectType: 'js',
        imgSrc: './images/works/calculator.png',
        title: 'Calculator',
        bodyText: `Created simple calculator using math.js library.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/js-projects/calculator',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/js-projects/calculator'
    },
    {
        isLatest: false,
        projectType: 'js',
        imgSrc: './images/works/knight-moves.png',
        title: 'Knight moves',
        bodyText: `This app will help to figure out what moves can the knight make in chess.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/js-projects/knight-moves',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/js-projects/knight-moves'
    },
    {
        isLatest: false,
        projectType: 'js',
        imgSrc: './images/works/film-searcher.png',
        title: 'Movies searcher',
        bodyText: `At this site, I have realized the searching for movies (Kinopoisk analog). Here I have been worked with AJAX, XMLHttpRequest, API.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/js-projects/movies-searcher',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/js-projects/movies-searcher'
    },
    {
        isLatest: false,
        projectType: 'js',
        imgSrc: './images/works/ozone-store.png',
        title: 'Online store(Ozone analog)',
        bodyText: `In this store you can: add/remove goods from the basket, search of goods by input, filter goods by price, stock, category. Technologies used: ES6, DOM API, JSON, Fetch API, Webpack.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/js-projects/ozone',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/js-projects/ozone/dist'
    },
    {
        isLatest: false,
        projectType: 'js',
        imgSrc: './images/works/user-registration-app.png',
        title: 'User registration and login',
        bodyText: `In this project, I realized user registration, login into the user’s own cabinet and the ability to change user data in his cabinet. I have been worked with AJAX, XMLHttpRequest, Cookie.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/js-projects/practise-js-course/16_user-registration-and-login/app'
    },
    {
        isLatest: false,
        projectType: 'websites',
        imgSrc: './images/works/site-7.png',
        title: 'Site#7',
        bodyText: `In this project, I started to realize my knowledge of JS. All JS code, except slider, was written by me personally(for example preloader, parallax effect, scrolling button, modal window).`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/websites/site7',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/websites/site7/dist'
    },
    {
        isLatest: false,
        projectType: 'websites',
        imgSrc: './images/works/site-6.png',
        title: 'Site#6',
        bodyText: `Used technologies: HTML5, SCSS, GULP, JS, JQuery, additional plugins(Mmenu, OwlCarouel2, Fotorama, selectize.js, jQuery.equalHeights).`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/websites/site6',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/websites/site6/dist'
    },
    {
        isLatest: false,
        projectType: 'websites',
        imgSrc: './images/works/site-5.png',
        title: 'Site#5',
        bodyText: `On this website, I used additional plugins such as slick-slider, fancybox and jQuery Form Styler. `,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/websites/site5',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/websites/site5/app'
    },
    {
        isLatest: false,
        projectType: 'websites',
        imgSrc: './images/works/animation-project.png',
        title: 'CSS animation',
        bodyText: `Here I was practicing with CSS @keyframes animation.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/websites/css-animation-training',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/websites/css-animation-training/app'
    },
    {
        isLatest: false,
        projectType: 'websites',
        imgSrc: './images/works/site-4.png',
        title: 'Site#4',
        bodyText: `Here I was improving my skills using CSS Flex Layout and SCSS. I used task runner Gulp with autoprefixer here also.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/websites/site4',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/websites/site4/app'
    },
    {
        isLatest: false,
        projectType: 'websites',
        imgSrc: './images/works/site-3.png',
        title: 'Site#3',
        bodyText: `In my second website, I was using CSS Grid Layout for training with this modern tool.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/websites/site3',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/websites/site3'
    },
    {
        isLatest: false,
        projectType: 'websites',
        imgSrc: './images/works/site-2.png',
        title: 'Site#2',
        bodyText: `This is my first site fully created by myself. The code is written on pure HTML5, CSS3, and the site has responsive design.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/websites/site2',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/websites/site2'
    },
    {
        isLatest: false,
        projectType: 'websites',
        imgSrc: './images/works/site-1.png',
        title: 'Site#1',
        bodyText: `I made this website by watching YouTube video tutorials.`,
        linkOnCode: 'https://github.com/dengoloborodko/beginning-projects/tree/master/websites/site1',
        linkOnApp: 'https://dengoloborodko.github.io/beginning-projects/websites/site1'
    }
];
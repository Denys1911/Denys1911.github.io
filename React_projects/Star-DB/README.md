# Star DB App

  This project is based on [SWAPI](https://swapi.co/) and [Starwars-visualguide](https://starwars-visualguide.com) (for images). Server interaction was based on Fetch API usage.

  For routing, I was using react-router-dom library.

  In this app, I have practiced with React Lifecycle Methods, Children and Context API. I have also worked with prop-types 
library for runtime component's properties type checking.

  Star DB has several similar components, as a list, item-details, so I was refactoring my project to reuse
these components for either people, planets, and starships. I've practiced with such techniques as render functions, hoc, 
currying, composition.

### In this SPA we have 6 pages:
  1. Star DB page - main page.
  2. People page - there are a list of people, you can click on any person from the list and detail information about
     person will be shown on the right / below list (depends on window size).
  3. Planets page - has the same functional as the people page.
  4. Starships page - on this page the list of starships is shown, for detail information about ship click on it and
     it will appear, without list.
  5. Login page - there the simple registration is realized, just for training. At the real project, registration will
     be handled on a server. If you will register, you will be redirected to the main page.
  6. Secret page - accessible only after a user is registered. If not, a user will be redirected to the login page.
 
### What can you do at Star DB:
   1. Toggle (show/hide) random planet.
   2. Throw error at the main components or the details of items. This is also just for training.
   3. Change service, just pressing the button at the header. All components will receive data from another service
      (at my app it's just random data for testing).
   4. After page reloading, if, for example, any item was selected, it will be upload again thanks to the
      routing system. So you can share links on certain components.

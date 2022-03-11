# SwapStation - Client Side

<!-- ABOUT THE PROJECT -->

### About

SwapStation is an e-commerce system for gamers who want to avoid the unnecessary expenses for the same game experience (if they don’t want to buy games on retail prices).

Gamers (members) can create accounts and upload their original discs, browse other gamers’ listings and send trade offers each other.

Besides that, they also can buy and sell products on the portal, but the main goal is the swap (pay for the shipping only).

<!-- WIREFRAMES -->

### Wirefrmaes

<img src="https://github.com/huLasTar/swapstation-client/blob/master/wireframe.jpg?raw=true">

<!--USER STORIES-->

### User Stories

Personas:<br />
<b>Leslie:</b> Leslie has a collection of console video games. He wants to refresh his collection with new titles and also gets rid of some games.<br />
Leslie is an authenticated <b>member</b>.
<b>David:</b> David also has some games, and he wants to swap them to new ones.<br />
David is an authenticated <b>member</b>.
<b>Carla:</b> Carla has a son who get bored by his games. Carla wants to share her son's game collection to replace the existing titles with new ones.
Carla is also a <b>member</b>. She needs to register to create products.<br />
<b>Peter:</b> Peter is not registered, so he can see the available products only.<br />
Peter is a <b>visitor</b> who is able to visit the website and see the products.<br />

Stories:<br />
As a visitor, I can browse the available games (products) and create user profile.
As a member, I can log into the system.
As a member, I can create, edit and delete my products.
As a member, I can send trade offers to other users.
As a member, I can report other users’ listings.
As a super user, I can modify anything on database level.

<!--TECHNOLOGIES USED-->

### Technologies used

- [ReactJS](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/")
- [HTML](http://www.html5.com/)
- [CSS](https://www.w3schools.com/w3css/defaulT.asp)

<!--MODELS-->

### Models

- User - User account details (username, email, password, first name, last name, address, city, zip code, phone number).
- Product- Product details (title, category, condition, description, purchasable, price, image).
- Exchange - Swap details (date of swap, seller, buyer, seller's item, buyer's item, comment, status).
- Report - Details of the reported product (product ID, reported by, message, status).

<!--SERVER ROUTES-->

### Server routes

| HTTP verb | URL                                      | Request body | Action                                 |
| --------- | ---------------------------------------- | ------------ | -------------------------------------- |
| POST      | `/api/report/:id`                        | JSON         | Posting report                         |
| --------- | ---------------------------------------- | ------------ | -------------------------------------- |
| GET       | `/api/products`                          | (empty)      | Get all products                       |
| POST      | `/api/products`                          | JSON         | Add a new product                      |
| GET       | `/api/products/:productId`               | (empty)      | Get the selected product               |
| PUT       | `/api/products/:productId/edit`          | JSON         | Edit product details                   |
| PATCH     | `/api/products/:productId/exchange`      | (empty)      | Add new trade offer                    |
| DELETE    | `/api/:toolId/delete`                    | (empty)      | Delete the selected product by ID      |
| --------- | ---------------------------------------- | ------------ | -------------------------------------- |
| GET       | `/api/signup`                            | (empty)      | Get signup form                        |
| POST      | `/api/signup`                            | JSON         | Post signup form (registration)        |
| GET       | `/api/login`                             | (empty)      | Get login form                         |

<!--Project Link-->

### Link to project

<a href="https://swapstation.netlify.app/">SwapStation</a>

<!--Future Work-->

### Future Work

- Bugfixes in the Swap Offer system
- Better way to manage reported products
- Product search
- Messaging system to the users
- Email notification system
- Watchlist / Wishlist

<!--RESOURCES-->

### Resources

- <a href="https://www.ironhack.com/">Ironhack Student Portal</a>
- <a href="https://www.npmjs.com/">npm</a>
- <a href="https://stackoverflow.com/">Stack Overflow</a>

<!--TEAM MEMBERS-->

### Team members

- László Tarnai

<!-- ACKNOWLEDGMENTS -->

### Acknowledgments

- [Ironhack](https://www.ironhack.com/en)

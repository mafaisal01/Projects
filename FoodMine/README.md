
![1](https://github.com/user-attachments/assets/76783819-fa9e-4d4c-828b-8699ccdbbc21)
![2](https://github.com/user-attachments/assets/b8721956-e706-4ba2-90d2-dd4448ab2f33)
![3](https://github.com/user-attachments/assets/f1886f70-576a-43dc-9a94-5f02c6bb2b69)
![4](https://github.com/user-attachments/assets/41925e4f-6158-417d-9e6c-b79c40287c24)
![5](https://github.com/user-attachments/assets/dc593b18-909d-4b34-be76-2ee05aab438a)
![6](https://github.com/user-attachments/assets/1b965ef6-fcb4-453f-bab3-a35aafe792a6)
![7](https://github.com/user-attachments/assets/88bd14f9-c2d9-4442-ad17-e56d611a34d1)
![8](https://github.com/user-attachments/assets/9d920db9-8ba4-44b9-b174-fff018954997)
![9](https://github.com/user-attachments/assets/0c176fc7-8920-4399-a5b3-74ed395aadb1)
![10](https://github.com/user-attachments/assets/e62c8c7e-d373-4396-9cbe-680719faf779)
![11](https://github.com/user-attachments/assets/9c5bf5a6-9f65-4f23-b413-2b5a75cd7d0a)
![12](https://github.com/user-attachments/assets/1e0996a0-92a3-4951-9b65-247c7dd1542f)
![13](https://github.com/user-attachments/assets/3a8f5e6b-fbd1-4984-abd3-969379f4cce6)
![14](https://github.com/user-attachments/assets/f62b91c9-97a8-43a6-8da7-a94e92fcfae9)
![15](https://github.com/user-attachments/assets/a3486043-5353-46cc-9d3e-f96749767df6)
![16](https://github.com/user-attachments/assets/a83d872a-60bc-45d7-b332-ec6910617932)


##  Lessons
1. Introduciton to the course
2. Install development tools
3. Create Angular App
   1. Create project's folder
   2. Install @angular/cli
   3. Create App as frontend

4. Add Header
   1. Generate Component
   2. Add Html
   3. Add CSS

5. List Foods
    1. Create Food model
    2. Create data.ts
       1. Add sample foods
    3. Add images to assets
    4. Create Food service
    5. Create Home component
       1. Add ts
       2. Add html
       3. Add css

6. Search
   1. Add method to Food service
   2. Add search route
   3. Show search result in Home component
   4. Generate search component
      1. Add to home component
      2. Add ts
      3. Add html
      4. Add css
   
7. Tags Bar
   1. Create Tag model
   2. Add sample tags to data.ts
   3. Food service
      1. Add get all tags method
      2. Add get all foods by tag method
   4. Add tags route
   5. Show tag result in Home component
   6. Generate Tags component
      1. Add to home component
      2. Add ts
      3. Add html
      4. Add css

8. Food Page
   1. Add method to food service
   2. Generate Food Page component
      1. Add Route
      2. Add ts
      3. Add html
      4. Add css

9. Cart Page
   1. Create CartItem Model
   2. Create Cart Model
   3. Generate Cart service
   4. Add to Cart Button in Food Page
   5. Generate Cart page component
      1. Add Route
      2. Add ts
      3. Add html
      4. Add css

10. Not Found!
    1. Generate Component
       1. Add ts
       2. Add html
       3. Add css
    2. Add To Pages
       1. Home Page
       2. Food Page
       3. Cart Page

11. Connect To Backend
    1.  Create backend folder
    2.  npm init
    3.  npm install typescript
    4.  Create tsconfig.json
    5.  Create .gitignore
    6.  Copy data.ts to backend/src
    7.  npm install express cors
    8.  Create server.ts
        1. install @types
        2. Add Apis
    9.  npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update food service

12. Login Page
    1.  Generate Component
        1.  Add to routes
        2.  Add ts 
        3.  Add html
            1.  Import Reactive Forms Module
        4.  Add Css
    2.  Add Login Api
        1.  Use json
        2.  Add jsonwebtoken
        3.  Test Using Postman
    
    3.  Generate User Service
        1.  Generate User model
        2.  Add User Subject
        3.  Add Login Method   
            1.  Add User Urls
            2.  Generate IUserLogin interface
            3.  Add ngx-toastr
                1.  Import Module
                2.  Import BrowserAnimationsModule
                3.  Add styles in angular.json
            4.  Add to Header
        1. Add Local Storage methods
        2. Add Logout Method
           1. Add to Header


13. Make Components For Login Page
    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button

14. Connect Login API To MongoDB Atlas
    1. Moving Apis into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
       1. mongoose
       2. dotenv
       3. bcryptjs
       4. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis


15. Register User
    1.  Add Register api
    2.  Add Register service method
    3.  Add Register link 
    4.  Add Register Component


16. Loading!
    1.  Add Image 
    2.  Add Component
    3.  Add Service
    4.  Add Interceptor




17. Checkout Page
    1.  Create Order Model
    2.  Create Checkout Page Component
        1.  Add To Router   
    3.  Add User to User Service 
    4.  Add Cart to Cart Service 
    5.  Create Order Items List Component
    6.  Adding Map To The Checkout Page
        1.  Add Leaflet npm package
            1.  Add @types/leaflet
            2.  Add Css to angular.json
        2.  Add AddressLatLng to Order Model
        3.  Create Map component
            1.  Add to checkout page
            2.  Add TS
                1.  Change app-map selector to map
            3.  Add Html
            4.  Add CSS
        4.  Add Auth Guard
    7.  Save Order
        1. Add Order Model
        2. Add Order Status Enum
        3. Add Auth Middleware
        4. Add Order Router
           1. Add create API
        5. Add Order Urls to urls.ts
        7. Add Order Service
           1. Add create Method
        8. Add Auth Interceptor

18. Payment Page
    1. Generate Component
    2. Add 'getOrderForCurrentUser' api 
    3. Add Order Service method
    4. Connect Component to Service
    5. Make the map component readonly

19. Adding Paypal
    1. Generate Component
       1. Add to payment page
    2. Get Paypal client Id
    3. Add Paypal JS to index.html
    4. Set up Paypal button
    5. Add Pay api to order router   
    6. Get Paypal sandbox account

20. Order Track Page
    1.  Generate Component
        1.  Add to routes
    2.  Add API
        1.  Add to urls.ts
    3.  Add method to order.service
    4.  Add HTML
    5.  Add CSS

21. Deploy On Heroku
    1.  OutputPath in angular.json
    2.  package.json
        1.  frontend
        2.  backend
        3.  root
    3.  BASE_URL in urls.ts
    4.  Public folder config in server.ts
    5.  Run commands
    6.  Add built folder to .gitignore
    7.  Commit and Push

22. Updating Packages (Optional)
    1.  Install npm-check-upates as a global package
    2.  Run ncu -u in the frontend folder
    3.  Downgrade typescript to version ~4.8.2
    4.  Run npm install --force
    5.  Run npm start
    6.  Run ncu -u in the backend folder
    7.  Run npm install
    8.  Run npm start

---


## **🍽️ Food Mine (Like Zomato) Platform – Project Summary**

| **Category**                     | **Details**                                                                                                                                                                                                                                          |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Project Title**                | Food Mine – E-commerce Platform (Like Zomato)                                                                                                                                                                                                        |
| **Project Description**          | A fully functional online food ordering platform with features like product/restaurant browsing, secure checkout, and order tracking. Developers can learn to integrate payment gateways, build shopping carts, and implement dynamic product pages. |
| **Project Complexity**           | Advanced                                                                                                                                                                                                                                             |
| **Project Duration**             | 8–10 weeks                                                                                                                                                                                                                                           |
| **API Development**              | 12+ endpoints for product/restaurant management, cart, and orders                                                                                                                                                                                    |
| **Deployment Options**           | AWS, Firebase                                                                                                                                                                                                                                        |
| **Functionality Scope**          | • Product/restaurant browsing and search <br> • Shopping cart and checkout <br> • Payment gateway integration                                                                                                                                        |
| **Security Features**            | • Secure payment handling <br> • User authentication for account protection                                                                                                                                                                          |
| **Technology Stack Integration** | • MongoDB – product & order data <br> • Express.js – backend logic <br> • Angular – user interface <br> • Node.js – server-side processing                                                                                                           |
| **Tasks in Project**             | • Develop modules for product/restaurant management <br> • Implement cart and checkout systems <br> • Integrate payment gateways                                                                                                                     |
| **Technical Highlights**         | • Payment gateway integration <br> • Dynamic product/restaurant listing <br> • Secure order handling                                                                                                                                                 |
| **Learning Outcomes**            | • Build scalable e-commerce/food ordering solutions <br> • Learn payment gateway integration <br> • Understand dynamic product displays                                                                                                              |
| **Skills Acquired**              | • E-commerce/food delivery platform design <br> • Secure payment systems <br> • Shopping cart logic                                                                                                                                                  |
| **Source Code**                  | GitHub Repository (professional)                                                                                                                                                                                                                     |

---

## ⭐ **STAR Method – Food Mine (Like Zomato) Platform**

### **S — Situation**

Food delivery businesses require digital platforms that allow users to browse restaurants, view menus, place orders securely, and track order progress. Traditional systems lack modern UI, secure payment handling, and scalability. This created the need to build **Food Mine**, a Zomato-like platform with modern e-commerce capabilities.



### **T — Task**

Develop a complete food ordering e-commerce solution that supports product/restaurant browsing, shopping cart functions, secure checkout, order tracking, and payment processing. The platform must be secure, scalable, user-friendly, and deployable on cloud services such as AWS or Firebase.



### **A — Action**

* Designed and developed **12+ backend API endpoints** for restaurants, products, user accounts, cart, and orders using **Node.js + Express**.
* Created a scalable **MongoDB database** to store restaurant menus, user profiles, cart items, and order details.
* Built an **Angular-based frontend** providing dynamic restaurant menus, search capabilities, filtering, and responsive UI.
* Implemented **shopping cart and checkout logic**, allowing users to add items, modify quantities, and proceed with orders.
* Integrated **secure payment gateway** for smooth and protected transactions.
* Added **authentication and authorization** using JWT and encrypted credentials.
* Ensured secure order processing and optimized backend logic for real-time performance.
* Deployed the platform to **AWS / Firebase** with scalable hosting configurations.



### **R — Result**

* Successfully built a functional **Zomato-style food ordering platform** with full e-commerce capabilities.
* Delivered a system with **fast browsing, smooth ordering, secure payments, and reliable order tracking**.
* Enhanced proficiency in the **MEAN stack**, REST API development, cloud deployment, and payment gateway integration.
* Achieved strong understanding of **dynamic data rendering**, secure order flow, and modern UI design.
* Produced **professional, production-ready source code** hosted on GitHub for real-world reference.

---





# Authentication
step 1. for backend install
npm install express mongoose bcryptjs jsonwebtoken dotenv cors
npm install nodemon --save-dev


step 2. Create file structure of the backend
/backend
├── config/
│   └── db.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── controllers/
│   └── authController.js
├── .env
├── index.js

step 3. Go to package.json and write start command 
"start": "nodemon index.js",

step 4: Connect mongodb
step 5: Define User Model (User.js)
step 6: Create Auth Controller (authController.js)
step 7: Define Auth Routes (authRoutes.js)
step 8: Setup Server (index.js)
step 9: Add environment variables (.env)
step 10: start server

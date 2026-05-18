# The Global Kitchen API

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB
- **Configuration:** dotenv

## Features
- Create a recipe with title, ingredients, instructions, cookingTime, difficulty, and category
- Retrieve all recipes, with optional category filtering
- Update individual recipe fields using PATCH
- Delete recipes by ID
- MongoDB schema validation, timestamp tracking, and category indexing
- Centralized database connection and global error handling

## Installation & Setup
1. Clone the repository:
```bash
git clone [your-repo-url]
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/global_kitchen
NODE_ENV=development
```
4. Start the server:
```bash
npm run dev
```

## API Endpoints
- `GET /recipes` - get all recipes (optional `category` query)
- `POST /recipes` - create a recipe
- `PATCH /recipes/:id` - update a recipe
- `DELETE /recipes/:id` - delete a recipe

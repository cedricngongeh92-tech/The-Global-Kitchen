const Recipe = require('../models/Recipe');

const getAllRecipes = async (filter = {}) => {
  return await Recipe.find(filter);
};

const createRecipe = async (recipeData) => {
  // Business logic: Validating that cooking time is a positive number
  if (recipeData.cookingTime <= 0) {
    throw new Error('Cooking time must be a positive number');
  }
  return await Recipe.create(recipeData);
};

const updateRecipe = async (id, updateData) => {
  if (updateData.cookingTime !== undefined && updateData.cookingTime <= 0) {
    throw new Error('Cooking time must be a positive number');
  }
  const recipe = await Recipe.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });
  return recipe;
};

const deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};

const getRecipeById = async (id) => {
  return await Recipe.findById(id);
};

module.exports = {
  getAllRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipeById
};

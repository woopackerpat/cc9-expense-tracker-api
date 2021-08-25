const { v4: uuidv4 } = require('uuid');
const { getCategory, saveCategory } = require('../utils/file');

exports.findAll = () => {
  return getCategory();
};

exports.save = async data => {
  const categories = await getCategory();
  const category = { id: uuidv4(), ...data };
  categories.push(category);
  await saveCategory(categories);
  return category;
};

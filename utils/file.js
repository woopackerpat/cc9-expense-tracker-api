const { readFile, writeFile } = require('fs/promises');

exports.getCategory = async () => {
  const data = await readFile('dbs/category.json');
  return JSON.parse(data);
};

exports.saveCategory = data => {
  return writeFile('dbs/category.json', JSON.stringify(data));
};

const { users, movies, characters } = require('./database');
const bestCharacters = require('./utils/best-characters')

module.exports = () => {
  const data = {
    users,
    movies,
    characters,
  };

  data.bestCharacters = bestCharacters(characters)

  return data;
}
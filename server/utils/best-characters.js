module.exports = (characters) => {
  const response = {}
  const order = characters.sort((a, b) => b.stars - a.stars)
  response.best = order[0]
  response.others = order.slice(1, 5).map(({name, image, id, stars}) => ({ name, image, id, stars }))
  return response
}
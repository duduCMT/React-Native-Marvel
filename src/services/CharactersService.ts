import api from "./api"

const getAll = () => api.get<Character[]>('/characters')
const getBests = () => api.get<BestCharacters>('/characters/bests')

export const CharactersService = {
  getBests,
  getAll
}
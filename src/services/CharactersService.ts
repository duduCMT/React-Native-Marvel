import api from "./api"

const getBests = () => api.get<BestCharacters>('/characters/bests')

export const CharactersService = {
  getBests
}
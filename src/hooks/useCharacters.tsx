import { useCallback, useState } from "react"
import { CharactersService } from "../services"
import { UseRequestState, UseRequestStatus } from "./types"

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([] as Character[])
  const [stateCharacter, setState] = useState<UseRequestState>({
    status: UseRequestStatus.NOTHING,
    message: '',
    statusCode: -1
  })

  const getBestCharacters = useCallback(async () => {
    setState({ status: UseRequestStatus.LOADING })
    CharactersService.getAll()
      .then(({ status, data }) => {
        if (status !== 200) {
          setState({
            status: UseRequestStatus.ERROR,
            message: 'Erro ao receber os dados',
            statusCode: status
          })
        } else {
          setCharacters(data)
          setState({
            status: UseRequestStatus.SUCCESS,
            message: 'Dados recebidos com sucesso',
            statusCode: status
          })
        }
      })
      .catch((error) => {
        console.log(error.response.status)
        setState({
          statusCode: error.response.status ? error.response.status : undefined,
          status: UseRequestStatus.ERROR,
          message: 'Erro de comunicação com o servidor.',
        })
      })
  }, [])

  return {
    getBestCharacters,
    characters,
    stateCharacter,
  }
}
import { useCallback, useState } from "react"
import { CharactersService } from "../services"
import { UseRequestState, UseRequestStatus } from "./types"

export const useBestCharacters = () => {
  const [bestCharacters, setBestCharacters] = useState<BestCharacters>({} as BestCharacters)
  const [stateBestCharacter, setState] = useState<UseRequestState>({
    status: UseRequestStatus.NOTHING,
    message: '',
    statusCode: -1
  })

  const getBestCharacters = useCallback(async () => {
    setState({ status: UseRequestStatus.LOADING })
    CharactersService.getBests()
      .then(({ status, data }) => {
        if (status !== 200) {
          setState({
            status: UseRequestStatus.ERROR,
            message: 'Erro ao receber os dados',
            statusCode: status
          })
        } else {
          setBestCharacters(data)
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
    bestCharacters,
    stateBestCharacter,
  }
}
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { ApplicationState } from '../store'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

type Props = {
  
}

export default function Routes({}: Props){
  const user = useSelector((state: ApplicationState) => state.user.data)

  return (
    <NavigationContainer>
      { 
        !user 
        ? <AuthRoutes />
        : <AppRoutes />
      }
    </NavigationContainer>  
  )
}
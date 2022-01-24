import { Store } from 'redux'
import { createStore } from 'redux'

import reducers from './ducks'
import { UserState } from './ducks/user'

export interface ApplicationState {
  user: UserState
}


const store: Store<ApplicationState> = createStore(reducers)

export default store
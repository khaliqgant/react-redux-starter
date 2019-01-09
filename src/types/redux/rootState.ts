import { StateType } from 'typesafe-actions';
import rootReducer from '@root/redux/rootReducer';

export type RootState = StateType<typeof rootReducer>;

import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

/*
 요청을 위한 액션 타입을 payload로 설정합니다.
 요청 예시
 {
   type: 'loading/START_LOADGING',
   payload: 'sample/GET_POST',
 }

 loading redux가 payload의 액션을 true/false로 만들어준다.
*/

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType,
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType,
);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;

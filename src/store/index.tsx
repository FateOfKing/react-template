import React, { createContext, useContext, useReducer } from 'react'

import Action, { ACTION_TYPES_M } from './action'

/* ---------------------- TS类型定义Start ------------------------------- */
/**
 * @description: 内部状态
 */
export interface MBottom {
  width: number
}

/**
 * @description: 初始状态
 */
export interface MState {
  doctorInfo: Record<string, any>
  customerInfo: Record<string, any>
}

/**
 * @description: reducer的Action类型
 */
interface InteriorActions {
  type: ACTION_TYPES_M
  payload: Partial<MState> | Partial<unknown>
}

export type MInteriorActions = InteriorActions
/* ---------------------- TS类型定义End ------------------------------- */

/* ---------------------- 代码实现Start ------------------------------- */
/**
 * 初始化state
 */
const initialState: MState = {
  doctorInfo: {},
  customerInfo: {},
}

/**
 * reducer定义，action转发
 * @param state 状态
 * @param action action
 * @returns
 */
const interiorReducer = (state: Partial<MState>, action: InteriorActions) => {
  const { type, payload } = action

  const fn = Action[type]
  if (fn) {
    // fn执行得到的是一个对象，因此加 return 的意思是要把这个对象返回出去。
    // 不加的话是仅仅得到，不会在这个函数里返回的
    return fn(state, payload)
  }
  return { ...state }
}

/**
 * 创建context
 */
const ValueContext = createContext<Partial<MState>>(initialState)

const UpdateContext = createContext<(props: InteriorActions) => void>(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
)

/**
 * reducer实例化
 * @returns
 */
export function Reducer() {
  const [initState, dispatch] = useReducer(interiorReducer, initialState)
  return { state: initState, dispatch }
}

// export const useMssConfig = () => useContext(AppContext);
export const useValueConfig = () => useContext(ValueContext) // useContext 的参数必须是context对象本身
export const useUpdateConfig = () => useContext(UpdateContext)

/**
 * 创建context的provider
 */
export function Provider({ children }: { children: React.ReactNode }) {
  const { state, dispatch } = Reducer()
  return (
    <ValueContext.Provider value={state}>
      <UpdateContext.Provider value={dispatch}>
        {children}
      </UpdateContext.Provider>
    </ValueContext.Provider>
  )
}

/* ---------------------- 代码实现End ------------------------------- */

/* ---------------------- 异步actionStart ------------------------------- */
// function isPromise(obj: Partial<MState> | Partial<unknown>) {
//   return !!obj && (typeof obj === 'object' || typeof obj === 'function') && obj instanceof Promise;
// }

// function wrapperDispatch(dispatch: (props: InteriorActions) => void) {
//   return (action: InteriorActions) => {
//     if (isPromise(action.payload)) {
//       dispatch({ type: ACTION_TYPES.LOADING_START, payload: true });
//       (action.payload as any).then((v: Partial<MState> | Partial<unknown>) => {
//         dispatch({ type: action.type, payload: v });
//         dispatch({ type: ACTION_TYPES.LOADING_END, payload: false });
//       });
//     } else {
//       dispatch(action);
//     }
//   };
// }

// export async function asyncFetch(p: Partial<MState>) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(p);
//     }, 1000);
//   });
// }

/* ---------------------- 异步actionEnd ------------------------------- */

import { MState } from '.'

export enum ACTION_TYPES_M {
  DOCTOR_INFO = 'DOCTOR_INFO',
  CUSTOMER_INFO = 'CUSTOMER_INFO',
}

const Action = {
  [ACTION_TYPES_M.DOCTOR_INFO]: (
    state: Partial<MState>,
    payload: Partial<MState>,
  ) => {
    sessionStorage.setItem('DOCTOR_INFO', JSON.stringify(payload.doctorInfo))

    return {
      ...state,
      doctorInfo: payload.doctorInfo,
    }
  },
  [ACTION_TYPES_M.CUSTOMER_INFO]: (
    state: Partial<MState>,
    payload: Partial<MState>,
  ) => {
    sessionStorage.setItem(
      'CUSTOMER_INFO',
      JSON.stringify(payload.customerInfo),
    )
    return {
      ...state,
      customerInfo: payload.customerInfo,
    }
  },
}
export default Action

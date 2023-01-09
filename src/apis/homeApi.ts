import request from './request'

export function getOrderListMonthly(params: any) {
  return request({
    url: '/web/order/getOrderListMonthly',
    method: 'GET',
    params,
  })
}
export function wxAuthorization(code: string | null) {
  return request({
    url: `/web/com/wxAuthorization?code=${code}`,
    method: 'GET',
  })
}

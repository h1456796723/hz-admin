import request, { Response } from "./request";

export const loginApi = <T>(data: T) => {
  return request<Response>({
    url: '/users/login',
    data,
    method: 'POST'
  })
}

export const getRoutesApi = () => {
  return request<Response>({
    url: 'routes/',
    method: 'GET'
  })
}
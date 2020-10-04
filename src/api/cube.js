import { Request } from './utils'

export const getCubeListByProjectID = (params) => {
    return Request(
        'POST',
        '/',
        params)
}

export const getCubeListByCompanyID = (params) => {
    return Request(
        'POST',
        '/',
        params)

}

export const getCubeListByCubeID = (params) => {
    return Request(
        'POST',
        '/',
        params)
}

export const getCubeStatement = (params) => {
    return Request(
        'POST',
        '/',
        params)
}
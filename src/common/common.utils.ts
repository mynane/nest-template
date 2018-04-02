/**
 * @file common.utils.ts
 * @author shijh
 *
 * 公共工具
 */

import * as _ from 'lodash';

/**
 * 成功请求
 * @param data 
 */
export const success = (data = {}, message = '请求成功') => {
    if (data === null) {
        data = {}
    }
    return {
        code: 200,
        message,
        data
    }
}

/**
 * 请求失败
 * @param data 
 */
export const fail = (data = {}, message = '请求失败') => {
    if (data === null) {
        data = {}
    }
    return {
        code: 500,
        message,
        data
    }
}

/**
 * 用户未登录
 * @param data 
 */
export const notFound = (data = {}, message = '用户未登录') => {
    if (data === null) {
        data = {}
    }
    return {
        code: 401,
        message,
        data
    }
}

/**
 * 登录过期
 */
export const expired = (data = {}, message = '登录失效') => {
    if (data === null) {
        data = {}
    }
    return {
        code: 401,
        message,
        data
    }
}

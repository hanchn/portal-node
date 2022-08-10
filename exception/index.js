export const exceptions = {
    "200000": {
        retInfo: '操作成功！',
        success: true
    },
    "000001": {
        retInfo: '操作失败！',
        success: false
    },
    "000002": {
        retInfo: '未登录！',
        success: false
    },
    "000003": {
        retInfo: '未登录/登录已过期，请先登录！',
        success: false
    },
    "000004": {
        retInfo: '字段不能为空！',
        success: false
    },
    "000005": {
        retInfo: '重复创建！',
        success: false
    },
    "000404": {
        retInfo: '页面不存在！',
        success: false
    },
    "000500": {
        retInfo: '服务器错误',
        success: false
    }
}

export default ({ code = '200000', data = null }) => ({...exceptions[code], data, code })
const { NODE_ENV = 'production' } = process.env;

const mongo = {
    "development": {
        "host": "localhost",
        "port": 27027,
        "database": "nest"
    },
    "production": {
        "host": "118.24.172.203",
        "port": 27027,
        "database": "nest"
    }
}

export default {
    // api 版本号
    "version": "v1",
    // 启动服务的端口
    "port": 4000,
    // 登录过期时间
    "expiresIn": 7 * 24 * 60 * 60,
    // 秘钥
    "secretOrKey": "28194567387",
    // mongodb 配置
    "mongo": mongo[NODE_ENV],
    // 应用名称
    "appName": "快应用",
    "email": {
        "host": "smtp.qq.com",
        "user": "755836844@qq.com",
        "pass": "lkaaladoeerhbcgg" 
    }
}

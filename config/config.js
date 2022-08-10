import development from './development.config.js'
import test from './test.config.js'
import pre from './pre.config.js'
import production from './production.config.js'
export const NODE_ENV = process.env.NODE_ENV
const config = {
    development,
    test,
    pre,
    production
}

export default {
    ...config[NODE_ENV],
    NODE_ENV
}
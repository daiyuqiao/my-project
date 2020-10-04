const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

process.env.VUE_APP_VERSION = require('./package.json').version
module.exports={
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: 8086,
        hot: true,
        inline: true,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        // proxy: 'http://uk8s-treasure-gray.prj-uk8s-gray.svc.a1.gw.ucloudadmin.com'，
        // proxy:{
        //     '/':{
        //         target: 'http://uk8s-treasure-gray.prj-uk8s-gray.svc.a1.gw.ucloudadmin.com',
        //         changeOrigin: true,
        //          pathRewrite: { // 修改路径数据
        //             ['^/']: '' // 举例 '^/api:""' 把路径中的/api字符串删除
        //         }

        //     }
        // }
    },
    configureWebpack: {
        // @路径走src文件夹
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack(config) {
        // set preserveWhitespace
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
            .end()
    }
}
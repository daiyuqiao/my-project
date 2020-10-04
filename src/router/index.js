import Vue from 'vue'
import Router from 'vue-router'

const Layout = () => import('@/view/layout')
const superAdmin = () => import('@/view/superAdmin')
// const cube = () => import('@/view/cube')
const listQuery = () => import('@/view/cube/listQuery')
const cubeStatement = () => import('@/view/cube/cubeStatement')
const operationLog = () => import('@/view/cube/operationLog')

Vue.use(Router)

const baseRouters = [
    // {
    //     path: '/',
    //     name: 'layout',
    //     component: Layout,
    //     redirect: '/superAdmin',
    //     children: [
    //         {
    //             component: superAdmin,
    //             meta: {
    //                 title: '超级管理员',
    //                 keepAlive: true,
    //                 hasLeaf: false,
    //                 iconClass: 'user-solid'
    //             },
    //             path: '/superAdmin',
    //             name: 'superAdmin',
    //         },
    //         {
    //             component: cube,
    //             meta: {
    //                 title: 'cube',
    //                 keepAlive: true,
    //                 hasLeaf: true,
    //                 iconClass: 's-cooperation'
    //             },
    //             path: '/cube',
    //             name: 'cube',
    //             children: [
    //                 {
    //                     component: listQuery,
    //                     meta: {
    //                         title: '列表查询',
    //                         keepAlive: true,
    //                         iconClass: 'tickets'
    //                     },
    //                     path: 'listQuery',
    //                     name: 'listQuery',
    //                 },
    //                 {
    //                     component: cubeStatement,
    //                     meta: {
    //                         title: 'cube报表',
    //                         keepAlive: true,
    //                         iconClass: 'magic-stick'
    //                     },
    //                     path: 'cubeStatement',
    //                     name: 'cubeStatement',
    //                 },
    //                 {
    //                     component: operationLog,
    //                     meta: {
    //                         title: '操作日志',
    //                         keepAlive: true,
    //                         iconClass: 'magic-stick'
    //                     },
    //                     path: 'operationLog',
    //                     name: 'operationLog',
    //                 }
    //             ]
    //         },
    //     ]
    // }


    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/superAdmin',
        children: [
            {
                component: superAdmin,
                meta: {
                    title: '超级管理员',
                    keepAlive: true
                },
                path: '/superAdmin',
                name: 'superAdmin',
            },
            {
                component: listQuery,
                meta: {
                    title: '列表查询',
                    keepAlive: true
                },
                path: '/cube/listQuery',
                name: 'listQuery',
            },
            {
                component: cubeStatement,
                meta: {
                    title: 'cube报表',
                    keepAlive: true
                },
                path: '/cube/cubeStatement',
                name: 'cubeStatement',
            },
            {
                component: operationLog,
                meta: {
                    title: '操作日志',
                    keepAlive: true
                },
                path: '/cube/operationLog',
                name: 'operationLog',
            }
        ]
    }




    // {
    //         path: '/',
    //         name: 'systemTools',
    //         component: Layout,
    //         mata: {
    //             title: '系统工具',
    //             keepAlive: true
    //         },
    //         clildren: [
    //             {
    //                 path: '/systemTools/autoCode',
    //                 name: 'autoCode',
    //                 component: autoCode,
    //                 mata: {
    //                     title: '代码生成器',
    //                     keepAlive: true
    //                 }
    //             },
    //             {
    //                 path: '/systemTools/formCreate',
    //                 name: 'formCreate',
    //                 component: formCreate,
    //                 mata: {
    //                     title: '表单生成器',
    //                     keepAlive: true
    //                 }
    //             }
    //         ]
    //     },
    // {
    //     path: '/',
    //     component: Layout,
    //     children: [
    //         {
    //             path: 'superAdmin',
    //             name: 'superadmin',
    //             component: superAdmin,
    //             meta: {
    //                 title: '超级管理员',
    //                 keepAlive: true
    //             }
    //         },
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Layout,
    //     children: [
    //         {
    //             path: '/systemTools',
    //             name: 'systemtools',
    //             component: systemTools,
    //             mata: {
    //                 title: '系统工具',
    //                 keepAlive: true
    //             },
    //             clildren: [
    //                 {
    //                     path: '/autoCode',
    //                     name: 'autoCode',
    //                     component: autoCode,
    //                     mata: {
    //                         title: '代码生成器',
    //                         keepAlive: true
    //                     }
    //                 },
    //                 {
    //                     path: '/formCreate',
    //                     name: 'formCreate',
    //                     component: formCreate,
    //                     mata: {
    //                         title: '表单生成器',
    //                         keepAlive: true
    //                     }
    //                 }
    //             ]
    //         }
    //     ]
    // },

]

const createRouter = () => new Router({
    routes: baseRouters
})

const router = createRouter()

export default router
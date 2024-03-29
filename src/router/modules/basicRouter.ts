/****************************************   router参数扩展   ***************************************
 *
 *  @Icon   {srting}                 展示icon
 *  @hiddenChildren {Boolean}        是否展示Children子页面
 *  @hidden {Boolean}                是否展示当前页面，优先级大于hiddenChildren
 *  @tagHidden {Boolean}             是否在tag展示当前页面
 *  @cache {Boolean}                 是否缓存当前页面，默认 false 关闭缓存
 *  @rank {Number}                   路由排序，数字越大权重越高
 *  @frameSrc {srting}               iframe页面地址
 *
 ***********************************************************************************************/

const basicRouter = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/layout/index.vue'),
        redirect: '/home',
        meta: {
            title: '首页',
            icon: 'home-filled',
            parentid:'/',
            hiddenChildren: true,
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home.vue'),
                meta: {
                    title: '首页',
                },
            },
        ],
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('@/layout/index.vue'),
        redirect: '/error/404',
        meta: {
            hiddenChildren: true,
            hidden: true,
            tagHidden: true,
        },
        children: [
            {
                path: '/error/403',
                name: '403',
                component: () => import('@/layout/error/403.vue'),
                meta: {
                    title: '403',
                    icon: 'document',
                },
            },
            {
                path: '/error/404',
                name: '404',
                component: () => import('@/layout/error/404.vue'),
                meta: {
                    title: '404',
                    icon: 'document',
                },
            },
            {
                path: '/error/500',
                name: '500',
                component: () => import('@/layout/error/500.vue'),
                meta: {
                    title: '500',
                    icon: 'document',
                },
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录',
            hidden: true,
            tagHidden: true,
        },
    },
    {
        path: '/redirect',
        name: 'redirect',
        component: () => import('@/layout/index.vue'),
        meta: {
            hidden: true,
            tagHidden: true,
        },
        children: [
            {
                path: '/redirect/:path(.*)',
                name: 'redirect',
                component: () => import('@/layout/redirect.vue'),
            },
        ],
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/error/404',
    },
]

export default basicRouter

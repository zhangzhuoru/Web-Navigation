//锚点效果

$(function () {
    //锚点跳转滑动效果
    $('a[href*=#],area[href*=#]').click(function () {
        console.log(this.pathname)
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    300);
                return false;
            }
        }
    });
})





// 网站数据


var nav = new Vue({
    el: '#navItem',
    data: {
        navItem: [{
                url: '#Design',
                class: 'icon-Design',
                text: '设计资源'
            },
            {
                url: '#Study',
                class: 'icon-Resources',
                text: '学无止境'
            },
            {
                url: '#Software',
                class: 'icon-Resources',
                text: '软件资源'
            },
            {
                url: '#Docs',
                class: 'icon-Documentation',
                text: '参考文档'
            },
            {
                url: '#Development-Community',
                class: 'icon-Community',
                text: '开发社区'
            },
            {
                url: '#Tools',
                class: 'icon-Tool',
                text: '实用工具'
            },
            {
                url: '#Leisure-and-Entertainment',
                class: 'icon-Entertainment',
                text: '文娱休闲'
            },
            {
                url: '#Cloud-Server',
                class: 'icon-Cloud-Server',
                text: '云端服务'
            }
        ]

    }
})


var boxList = new Vue({
    el: '#boxList',
    data: {
        boxList: [{
                name: 'Design',
                class: 'icon-Design',
                text: '设计资源',
                list: [{
                        href: 'https://www.58pic.com/',
                        src: 'img/千图网.ico',
                        name: '千图网',
                        text: '设计素材'
                    },
                    {
                        href: 'http://www.51yuansu.com/',
                        src: 'img/觅元素.ico',
                        name: '觅元素',
                        text: '设计素材'
                    },
                    {
                        href: 'https://ibaotu.com/',
                        src: 'img/包图网.ico',
                        name: '包图网',
                        text: '设计素材'
                    },
                    {
                        href: 'http://www.nipic.com/',
                        src: 'img/昵图网.ico',
                        name: '昵图网',
                        text: '设计素材'
                    },
                    {
                        href: 'https://huaban.com/',
                        src: 'img/花瓣.ico',
                        name: '花瓣',
                        text: '设计灵感'
                    },
                    {
                        href: 'https://www.pinterest.com/?autologin=true',
                        src: 'img/Pinterest.png',
                        name: 'Pinterest',
                        text: '设计灵感'
                    },
                    {
                        href: 'https://www.instagram.com/explore/',
                        src: 'img/Instagram.ico',
                        name: 'Instagram',
                        text: '设计灵感'
                    },
                    {
                        href: 'https://dribbble.com/',
                        src: 'img/DeviantART.ico',
                        name: 'DeviantART',
                        text: '设计素材'
                    },
                    {
                        href: 'https://www.deviantart.com/',
                        src: 'img/Dribbble.ico',
                        name: 'Dribbble',
                        text: '设计素材'
                    },
                    {
                        href: 'https://www.iconfont.cn/',
                        src: 'img/iconfont.ico',
                        name: '阿里矢量图标库',
                        text: 'Iconfont'
                    },
                    {
                        href: 'https://www.hellofont.cn/',
                        src: 'img/字由.ico',
                        name: '字由',
                        text: '设计师必备字体利器'
                    },
                    {
                        href: 'https://mp.toutiao.com/profile_v3/xigua',
                        src: 'img/头条.png',
                        name: '头条号',
                        text: '内容推广'
                    },
                    {
                        href: 'https://www.weibo.com/login.php',
                        src: 'img/新浪.ico',
                        name: '新浪',
                        text: '内容推广'
                    },
                    {
                        href: 'https://www.facebook.com/',
                        src: 'img/Facebook.ico',
                        name: 'Facebook',
                        text: '外国社交'
                    },
                    {
                        href: 'https://twitter.com/home',
                        src: 'img/Twitter.ico',
                        name: 'Twitter',
                        text: '外国社交'
                    },
                    {
                        href: 'http://www.bootcss.com/p/font-awesome/',
                        src: 'img/font-awesome.png',
                        name: 'Font Awesome',
                        text: '图标字体'
                    },
                    {
                        href: 'http://www.iosicongallery.com/',
                        src: 'img/iosicon.png',
                        name: 'iOS图标',
                        text: '图标字体'
                    },
                    {
                        href: 'http://www.qiuziti.com/',
                        src: 'img/qicon.ico',
                        name: '求字体',
                        text: '图标字体'
                    },
                    {
                        href: 'https://zh.fonts2u.com/',
                        src: 'img/fonts2u.png',
                        name: 'Fonts2u',
                        text: '图标字体'
                    },
                    {
                        href: 'https://www.dafont.com/',
                        src: 'img/dafont.png',
                        name: 'DaFont',
                        text: '图标字体'
                    },

                ]
            },
            {
                name: 'Study',
                class: 'icon-Learn',
                text: '学无止境',
                list: [{
                        href: 'https://huke88.com/',
                        src: 'img/虎克网.png',
                        name: '虎克网',
                        text: '设计学习网站'
                    },
                    {
                        href: 'https://shida66.com/',
                        src: 'img/视达网.ico',
                        name: '视达网',
                        text: '设计学习网站'
                    },
                    {
                        href: 'https://www.zcool.com.cn/',
                        src: 'img/站酷网.ico',
                        name: '站酷网',
                        text: '设计学习网站'
                    },
                    {
                        href: 'https://www.51zxw.net/',
                        src: 'img/我要自学网.ico',
                        name: '我要自学网',
                        text: '设计学习网站'
                    },
                    {
                        href: 'https://study.163.com/',
                        src: 'img/网易云课堂.ico',
                        name: '网易云课堂',
                        text: '程序员学习网站'
                    },
                    {
                        href: 'https://www.imooc.com/',
                        src: 'img/慕课网.ico',
                        name: '慕课网',
                        text: '程序员学习网站'
                    },
                    {
                        href: 'https://www.nowcoder.com/',
                        src: 'img/牛客网.ico',
                        name: '牛客网',
                        text: '程序员面试学习网站'
                    },
                    {
                        href: 'http://www.xiachufang.com/',
                        src: 'img/下厨房.ico',
                        name: '下厨房',
                        text: '学习厨艺的好地方'
                    },
                    {
                        href: 'https://www.icourse163.org/',
                        src: 'img/中国大学.png',
                        name: '中国大学',
                        text: '大学公开课'
                    },
                    {
                        href: 'https://cn.rx.js.org/',
                        src: 'img/Rx_Logo.png',
                        name: 'RxJS中文文档',
                        text: 'JavaScript'
                    },
                    {
                        href: 'http://svgtrick.com/',
                        src: 'img/svgtick.png',
                        name: 'svgtrick',
                        text: 'SVG'
                    },
                    {
                        href: 'http://cssreference.parryqiu.com/',
                        src: 'img/cssfavicon.png',
                        name: 'CSSReference',
                        text: 'CSS'
                    },
                    {
                        href: 'https://postcss.docschina.org/',
                        src: 'img/postcssfavicon.png',
                        name: 'PostCSS',
                        text: 'CSS'
                    },
                    {
                        href: 'https://www.yuque.com/airing/canvas/readme',
                        src: 'img/canvas.svg',
                        name: 'CANVAS·语雀',
                        text: 'Canvas'
                    },
                    {
                        href: 'https://d3js.org.cn/',
                        src: 'img/d3js.png',
                        name: 'D3js',
                        text: '数据可视化'
                    },
                    {
                        href: 'http://sass.bootcss.com/',
                        src: 'img/sass.png',
                        name: 'Sass中文文档',
                        text: 'Sass'
                    },
                    {
                        href: 'https://sass-guidelin.es/zh/',
                        src: 'img/sassg.png',
                        name: 'Sass Guidelines',
                        text: 'Sass'
                    },
                    {
                        href: 'https://www.sass.hk/',
                        src: 'img/sass.png',
                        name: 'Sass中文网',
                        text: 'Sass'
                    },
                ]
            },
            {
                name: 'Software',
                class: 'icon-Resources',
                text: '软件资源',
                list: [{
                        href: 'https://msdn.itellyou.cn/',
                        src: 'img/MSDN.ico',
                        name: 'MSDN我告诉你',
                        text: 'windows官方系统与Office'
                    },
                    {
                        href: 'https://www.52pojie.cn/forum-16-1.html',
                        src: 'img/吾爱破解.ico',
                        name: '吾爱破解',
                        text: '软件破解'
                    },
                    {
                        href: 'https://weibo.com/vposy?refer_flag=1001030103_&is_all=1',
                        src: 'img/Adobe.ico',
                        name: 'Adobe全家桶',
                        text: '软件破解'
                    },
                    {
                        href: 'http://www.yishimei.cn/',
                        src: 'img/GitHub.ico',
                        name: '亦是美网络',
                        text: '软件破解'
                    },
                    {
                        href: 'https://www.ghpym.com/',
                        src: 'img/果核剥壳.ico',
                        name: '果核剥壳',
                        text: '破解软件'
                    },
                    {
                        href: 'http://www.dayanzai.me/',
                        src: 'img/大眼仔.ico',
                        name: '大眼仔',
                        text: '破解软件'
                    },
                    {
                        href: 'http://www.carrotchou.blog/',
                        src: 'img/胡萝卜周.jpg',
                        name: '胡萝卜周',
                        text: '破解软件'
                    },
                    {
                        href: 'https://www.itjc8.com/forum.php?gid=1',
                        src: 'img/IT教程吧.ico',
                        name: 'IT教程吧',
                        text: 'IT学习资源'
                    },
                    {
                        href: 'https://pan.baidu.com/disk/home?#/all?path=%2F&vmode=list',
                        src: 'img/百度网盘.ico',
                        name: '百度网盘',
                        text: '国内最好的网盘'
                    },
                    {
                        href: 'https://tfc.alloyteam.com/',
                        src: 'img/qq.png',
                        name: '腾讯web前端大会',
                        text: '腾讯web前端大会'
                    },
                    {
                        href: 'http://d2forum.alibaba-inc.com/#/index?_k=6nb1d2',
                        src: 'img/d2.png',
                        name: 'D2前端技术论坛',
                        text: 'D2前端技术论坛'
                    },
                    {
                        href: 'https://fequan.com/',
                        src: 'img/webfavicon.ico',
                        name: '前端圈',
                        text: '前端圈'
                    },
                    {
                        href: 'https://css.w3ctech.com/',
                        src: 'img/csskf.png',
                        name: 'CSS开发者大会',
                        text: 'CSS开发者大会'
                    },
                    {
                        href: 'http://jsconf.cn/',
                        src: 'img/jsconf.png',
                        name: 'JSConf',
                        text: 'JavaScript'
                    },
                    {
                        href: 'http://nodejs.cn/',
                        src: 'img/nodejscn.png',
                        name: 'Node.js中文网',
                        text: '后端技术'
                    },
                    {
                        href: 'https://eggjs.org/',
                        src: 'img/egg.svg',
                        name: 'egg',
                        text: '后端技术'
                    },
                    {
                        href: 'https://thinkjs.org/doc/index.html',
                        src: 'img/thinkjs.png',
                        name: 'ThinkJS',
                        text: '后端技术'
                    },
                    {
                        href: 'http://teahour.fm/',
                        src: 'img/teahour.jpg',
                        name: 'teahour.fm',
                        text: '技术电台'
                    },
                ]
            },
            {
                name: 'Docs',
                class: 'icon-Documentation',
                text: '参考文档',
                list: [{
                        href: 'https://www.layui.com/doc/',
                        src: 'img/layui.ico',
                        name: 'LaYui',
                        text: '前端 UI 框架'
                    },
                    {
                        href: 'https://www.bootcss.com/',
                        src: 'img/Bootstrap.ico',
                        name: 'Bootstrap',
                        text: '响应式前端框架'
                    },
                    {
                        href: 'https://vuejs.org/',
                        src: 'img/Vue.png',
                        name: 'Vue',
                        text: '渐进式前端框架'
                    },
                    {
                        href: 'https://uniapp.dcloud.io/component/README',
                        src: 'img/Uni-app.png',
                        name: 'Uni-app',
                        text: '跨平台框架'
                    },
                    {
                        href: 'https://youzan.github.io/vant/#/zh-CN/intro',
                        src: 'img/Vant.ico',
                        name: 'Vant',
                        text: '移动端框架'
                    },
                    {
                        href: 'https://element.eleme.cn/#/zh-CN/component/installation',
                        src: 'img/Element.ico',
                        name: 'Element',
                        text: 'PC响应式框架'
                    },
                    {
                        href: 'https://www.webpackjs.com/',
                        src: 'img/webpack.ico',
                        name: 'Webpack',
                        text: '打包工具'
                    },
                    {
                        href: 'https://mp.weixin.qq.com',
                        src: 'img/微信公众平台.ico',
                        name: '微信公众平台',
                        text: '微信小程序、公众号'
                    },
                    {
                        href: 'https://daneden.github.io/animate.css/',
                        src: 'img/GitHub.ico',
                        name: 'Animate',
                        text: 'CSS动画库'
                    },
                    {
                        href: 'https://www.echartsjs.com/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts',
                        src: 'img/echart.png',
                        name: 'ECharts',
                        text: 'JS图形库'
                    },
                    {
                        href: 'https://eggjs.org/en/intro/quickstart.html',
                        src: 'img/Eggjs.png',
                        name: 'Eggjs',
                        text: 'nodejs框架'
                    },
                    {
                        href: 'https://electronjs.org/docs',
                        src: 'img/Electron.ico',
                        name: 'Electron',
                        text: '桌面js框架'
                    },
                    {
                        href: 'https://github.com/sprov065/v2-ui',
                        src: 'img/V2ray.ico',
                        name: 'V2-UI',
                        text: 'V2ray多用户管理'
                    },
                    {
                        href: 'https://www.v2ray.com/',
                        src: 'img/V2ray.ico',
                        name: 'V2ray',
                        text: 'V2ray代理文档'
                    },
                    {
                        href: 'https://docs.v2board.com/',
                        src: 'img/V2Board.png',
                        name: 'V2Board',
                        text: 'V2ray机场前端文档'
                    },
                    {
                        href: 'https://github.com/ColetteContreras/v2ray-poseidon',
                        src: 'img/GitHub.ico',
                        name: 'V2ray-Poseidon',
                        text: 'V2ray机场后端文档'
                    },
                    {
                        href: 'https://www.zhangxinxu.com/jq/stylus/',
                        src: 'img/stylus.png',
                        name: 'stylus中文版参考文档',
                        text: 'Stylus'
                    },
                    {
                        href: 'https://www.gulpjs.com.cn/',
                        src: 'img/gulp.png',
                        name: 'Gulp中文网',
                        text: 'Gulp'
                    },
                    {
                        href: 'https://webpack.docschina.org/',
                        src: 'img/webpack.ico',
                        name: 'webpack中文文档',
                        text: 'Webpack'
                    },
                    {
                        href: 'http://lodash.think2011.net/',
                        src: 'img/lodash.png',
                        name: 'lodash中文文档 - ',
                        text: 'Lodash'
                    },
                    {
                        href: 'http://www.jq22.com/',
                        src: 'img/jq22.png',
                        name: 'jQuery插件库 - ',
                        text: 'jQuery'
                    },
                    {
                        href: 'http://www.jqueryfuns.com/',
                        src: 'img/jq22.png',
                        name: 'jQueryFuns-响应式模板',
                        text: 'jQueryFuns'
                    },
                    {
                        href: 'http://hemin.cn/jq/',
                        src: 'img/jq22.png',
                        name: 'jQuery 参考手册',
                        text: 'jQuery'
                    },
                    {
                        href: 'https://v3.bootcss.com/',
                        src: 'img/Bootstrap.ico',
                        name: 'Bootstrap中文文档',
                        text: 'Bootstrap'
                    },
                    {
                        href: 'http://hcysun.me/vue-design/',
                        src: 'img/Vue.png',
                        name: 'Vue技术内幕',
                        text: 'Vue'
                    },
                    {
                        href: 'https://ustbhuangyi.github.io/vue-analysis/',
                        src: 'img/Vue.png',
                        name: 'Vue.js技术揭秘',
                        text: 'Vue.js'
                    },
                    {
                        href: 'https://reactnative.cn/',
                        src: 'img/react.svg',
                        name: 'React Native中文网',
                        text: 'React'
                    },
                    {
                        href: 'https://chenshenhai.github.io/koajs-design-note/',
                        src: 'img/koa.png',
                        name: 'Koa.js设计模式',
                        text: 'Koa.js'
                    },
                    {
                        href: 'https://chenshenhai.github.io/koa2-note/',
                        src: 'img/koa.png',
                        name: 'Koa2进阶学习笔记',
                        text: 'Koa2'
                    },
                    {
                        href: 'https://www.npmjs.com.cn/',
                        src: 'img/npm.ico',
                        name: 'npm中文文档',
                        text: 'npm'
                    },
                    {
                        href: 'https://backlog.com/git-tutorial/cn/',
                        src: 'img/gitcn.ico',
                        name: 'Git指南',
                        text: 'Git'
                    },
                    {
                        href: 'http://www.cocos.com/',
                        src: 'img/apple-touch-icon.png',
                        name: 'Cocos引擎',
                        text: '游戏引擎'
                    },
                    {
                        href: 'https://www.egret.com/',
                        src: 'img/favicon.ico',
                        name: '白鹭时代-H5游戏引擎',
                        text: '游戏引擎'
                    },
                    {
                        href: 'https://www.zhangxinxu.com/',
                        src: 'img/GitHub.ico',
                        name: '张鑫旭',
                        text: '技术博客'
                    },
                    {
                        href: 'https://www.ximalaya.com/jiaoyu/3740790/',
                        src: 'img/GitHub.ico',
                        name: '陪你读书（JS前端）',
                        text: '开发博客'
                    },
                    {
                        href: 'https://jeffjade.com/',
                        src: 'img/GitHub.ico',
                        name: '晚晴幽草轩',
                        text: '技术博客'
                    },
                ]
            }, {
                name: 'Development-Community',
                class: 'icon-Community',
                text: '开发社区',
                list: [{
                        href: 'https://juejin.im/',
                        src: 'img/掘金.png',
                        name: '掘金',
                        text: '外国开发社区'
                    },
                    {
                        href: 'https://github.com/',
                        src: 'img/GitHub.ico',
                        name: 'GitHub',
                        text: '代码库'
                    },
                    {
                        href: 'https://gitee.com/',
                        src: 'img/码云.ico',
                        name: '码云',
                        text: '代码库'
                    },
                    {
                        href: 'https://www.zhihu.com/',
                        src: 'img/知乎.png',
                        name: '知乎',
                        text: '都是牛人'
                    },
                    {
                        href: 'https://stackoverflow.com/',
                        src: 'img/stackoverflow.png',
                        name: 'Stackoverflow',
                        text: '外国牛人'
                    },
                    {
                        href: 'https://www.coursera.org/',
                        src: 'img/coursera.png',
                        name: 'coursera',
                        text: '外国IT学习网站'
                    },
                    {
                        href: 'https://www.csdn.net/nav/web',
                        src: 'img/CSDN.ico',
                        name: 'CSDN',
                        text: '中国IT社区'
                    },
                    {
                        href: 'https://www.oschina.net/',
                        src: 'img/oschina.ico',
                        name: 'Coschina',
                        text: '中国IT社区'
                    },
                    {
                        href: 'https://www.right.com.cn/forum/',
                        src: 'img/恩山无线论坛.ico',
                        name: '恩山无线论坛',
                        text: '上网硬件论坛'
                    },
                    {
                        href: 'https://www.vpsgo.com/',
                        src: 'img/VPSGO.ico',
                        name: 'VPSGO',
                        text: 'vps评测'
                    },
                    {
                        href: 'https://baiyue.one/',
                        src: 'img/佰阅部落.ico',
                        name: '佰阅部落',
                        text: '网站源码'
                    },
                    {
                        href: 'https://www.v2rayssr.com/',
                        src: 'img/V2ray.ico',
                        name: 'V2raySSR',
                        text: '翻墙论坛'
                    },
                    {
                        href: 'https://www.vue-js.com/',
                        src: 'img/Vue.png',
                        name: 'Vue.js中文社区',
                        text: 'Vue.js中文社区'
                    },
                    {
                        href: 'http://riny.net/lab/',
                        src: 'img/postcssfavicon.png',
                        name: '前端实验室',
                        text: '优秀站点'
                    },
                    {
                        href: 'http://www.css88.com/',
                        src: 'img/postcssfavicon.png',
                        name: 'WEB前端开发',
                        text: '优秀站点'
                    },
                    {
                        href: 'https://www.docschina.org/',
                        src: 'img/yj.ico',
                        name: '印记中文',
                        text: '优秀站点'
                    },
                    {
                        href: '"http://caibaojian.com/',
                        src: 'img/rowk.ico',
                        name: '前端开发博客',
                        text: '优秀站点'
                    },
                    {
                        href: 'http://www.w3cplus.com/',
                        src: 'img/w3c.png',
                        name: 'w3cplus',
                        text: '优秀站点'
                    },
                    {
                        href: 'https://toutiao.io/',
                        src: 'img/apple-icon.png',
                        name: '开发者头条',
                        text: '优秀站点'
                    },
                    {
                        href: 'https://www.zcfy.cc/entry',
                        src: 'img/V2ray.ico',
                        name: '众成翻译',
                        text: '优秀站点'
                    },
                    {
                        href: 'https://css-tricks.com/',
                        src: 'img/csstricks.png',
                        name: 'CSS-Tricks',
                        text: '英文站点'
                    },
                    {
                        href: 'https://aotu.io/index.html',
                        src: 'img/aotu.ico',
                        name: '凹凸实验室',
                        text: '企业站点'
                    },
                    {
                        href: 'https://coding.net/',
                        src: 'img/coding.ico',
                        name: 'CODING',
                        text: '企业站点'
                    },
                    {
                        href: 'http://fex.baidu.com/',
                        src: 'img/fex.svg',
                        name: 'FEX百度',
                        text: '企业站点'
                    },
                    {
                        href: 'http://efe.baidu.com/',
                        src: 'img/efe.ico',
                        name: '百度EFE',
                        text: '企业站点'
                    },
                    {
                        href: 'https://cloud.tencent.com/developer/devdocs',
                        src: 'img/aliyun.ico',
                        name: '开发者手册-腾讯云',
                        text: '企业站点'
                    },
                    {
                        href: 'https://weex.apache.org/cn/',
                        src: 'img/weex.svg',
                        name: 'Weex',
                        text: '阿里产品'
                    },
                    {
                        href: 'https://www.weexdaxue.com/',
                        src: 'img/weex.svg',
                        name: 'Weex学院',
                        text: '阿里产品'
                    },
                    {
                        href: 'https://antv.alipay.com/zh-cn/index.html',
                        src: 'img/antv.png',
                        name: 'AntV',
                        text: '阿里产品'
                    },
                    {
                        href: 'https://ant.design/index-cn',
                        src: 'img/ant.png',
                        name: 'Ant Design',
                        text: '阿里产品'
                    },
                ]
            },
            {
                name: 'Tools',
                class: 'icon-Tool',
                text: '实用工具',
                list: [{
                        href: 'https://dalipan.com/',
                        src: 'img/大力盘搜索.ico',
                        name: '大力盘搜索',
                        text: '网盘资源搜索'
                    },
                    {
                        href: 'http://www.qiuziti.com/',
                        src: 'img/求字体.ico',
                        name: '求字体',
                        text: '字体识别，字体下载'
                    },
                    {
                        href: 'https://tinypng.com/',
                        src: 'img/tinypng.ico',
                        name: 'TinyPNG',
                        text: '图片压缩'
                    },
                    {
                        href: 'https://www.fontke.com/tool/compressimage/',
                        src: 'img/图片压缩.ico',
                        name: '图片压缩',
                        text: '图片压缩'
                    },
                    {
                        href: 'https://mail.163.com',
                        src: 'img/163邮箱.ico',
                        name: '163邮箱',
                        text: '电话号码邮箱'
                    },
                    {
                        href: 'https://mail.163.com',
                        src: 'img/QQ邮箱.png',
                        name: 'QQ邮箱',
                        text: 'QQ自带邮箱'
                    },
                    {
                        href: 'https://mail.google.com/mail/u/0/#inbox',
                        src: 'img/谷歌邮箱.ico',
                        name: '谷歌邮箱',
                        text: '谷歌邮箱'
                    },
                    {
                        href: 'https://www.51job.com/',
                        src: 'img/前程无忧.ico',
                        name: '前程无忧',
                        text: '海投找工作'
                    },
                    {
                        href: 'https://www.zhipin.com/guangzhou/',
                        src: 'img/BOSS直聘.ico',
                        name: 'BOSS直聘',
                        text: '精准找工作'
                    },
                    {
                        href: 'https://www.tianyancha.com/',
                        src: 'img/天眼查.ico',
                        name: '天眼查',
                        text: '查看企业信息'
                    },
                    {
                        href: 'https://fabiaoqing.com/',
                        src: 'img/发表情包.png',
                        name: '发表情包',
                        text: '尔等可敢一战'
                    },
                    {
                        href: 'https://www.weshineapp.com/',
                        src: 'img/闪萌.ico',
                        name: '闪萌',
                        text: '尔等可敢一战'
                    },
                    {
                        href: 'https://tools.ipip.net/newping.php',
                        src: 'img/ipip.ico',
                        name: 'IPIP',
                        text: 'ping网络连通性'
                    },
                    {
                        href: 'https://www.speedtest.cn/',
                        src: 'img/测速网.ico',
                        name: '测速网',
                        text: '测试网络速度'
                    },
                    {
                        href: 'https://weishi.iiilab.com',
                        src: 'img/短视频解析.png',
                        name: '短视频解析',
                        text: '视频解析下载'
                    },
                    {
                        href: 'https://vtool.pro/',
                        src: 'img/抖音解析.png',
                        name: '抖音解析',
                        text: '视频解析下载'
                    },
                    {
                        href: 'https://www.findyoutube.net/',
                        src: 'img/YouTube.png',
                        name: '视频下载',
                        text: 'Youtube视频和字幕在线下载'
                    },
                    {
                        href: 'https://apkpure.com/cn/',
                        src: 'img/APKPure.webp',
                        name: 'APKPure',
                        text: '安卓应用下载'
                    },
                    {
                        href: 'https://FreeSSL.cn/',
                        src: 'img/FreeSSL.cn.ico',
                        name: 'FreeSSL.cn',
                        text: 'SSL证书申请'
                    },
                    {
                        href: 'https://tool.lu/',
                        src: 'img/在线工具.ico',
                        name: '在线工具',
                        text: '工具集合'
                    },
                    {
                        href: 'https://www.toptal.com/developers/css/sprite-generator',
                        src: 'img/CSSSprites.png',
                        name: 'CSS Sprites',
                        text: '多图合一'
                    },
                    {
                        href: 'https://convertio.co/zh/',
                        src: 'img/文件转换器.png',
                        name: '文件转换器',
                        text: '文件格式转换'
                    },
                    {
                        href: 'https://cli.im/',
                        src: 'img/草料二维码.ico',
                        name: '草料二维码',
                        text: '生成二维码'
                    },
                    {
                        href: 'http://fund.jrj.com.cn/',
                        src: 'img/基金频道.ico',
                        name: '基金频道',
                        text: '基金曲线图'
                    },
                   
                    {
                        href: 'https://extension.yunpanjingling.com/',
                        src: 'img/云盘万能钥匙.png',
                        name: '云盘万能钥匙',
                        text: '自动识别百度网盘提取密码'
                    },
                    {
                        href: 'https://www.amap.com/',
                        src: 'img/高德地图.ico',
                        name: '高德地图',
                        text: '中国最好的导航'
                    },
                    {
                        href: 'https://www.google.com/maps/@35.274241,160.2981017,3z?hl=zh-CN',
                        src: 'img/谷歌地图.ico',
                        name: '谷歌地图',
                        text: '外国最好的导航'
                    },
                    {
                        href: 'https://www.vps234.com/ipchecker/',
                        src: 'img/Vps234.ico',
                        name: 'Vps234',
                        text: '检测IP连通性'
                    },
                    {
                        href: 'https://developers.google.com/speed/pagespeed/insights/',
                        src: 'img/PageSpeed见解.ico',
                        name: 'PageSpeed见解',
                        text: '检测网站性能'
                    },
                    {
                        href: 'https://analytics.google.com/analytics/web/#/report-home/a157349190w221495475p210595989',
                        src: 'img/Analytics.svg',
                        name: 'Analytics',
                        text: '网站流量分析'
                    },
                    {
                        href: 'https://www.jb51.net/onlineread/htmlchar.htm',
                        src: 'img/Analytics.svg',
                        name: 'HTML特殊字符编码对照表',
                        text: 'HTML特殊字符编码对照表'
                    },
                    {
                        href: 'https://www.bt.cn/download/linux.html',
                        src: 'img/宝塔面板.ico',
                        name: '宝塔面板',
                        text: '服务器运行环境'
                    },
                    {
                        href: 'https://cdnjs.com/',
                        src: 'img/GitHub.ico',
                        name: 'cdnjs',
                        text: 'CDN公共库'
                    },
                    {
                        href: 'https://mrchportalweb.alipay.com/user/home.htm#/',
                        src: 'img/支付宝.ico',
                        name: '支付宝',
                        text: '商家中心'
                    },
                    {
                        href: 'https://www.paypal.com/',
                        src: 'img/PayPal.ico',
                        name: 'PayPal',
                        text: '外国第三方支付平台'
                    },
                    {
                        href: 'http://www.runoob.com/tags/html-ascii.html',
                        src: 'img/ascll.ico',
                        name: 'ASCII 字符集',
                        text: 'ASCII 字符集'
                    },
                    {
                        href: 'https://www.processon.com/',
                        src: 'img/processon.ico',
                        name: 'ProcessOn作图',
                        text: 'ProcessOn作图'
                    },
                    {
                        href: 'http://idea.iteblog.com/',
                        src: 'img/free.ico',
                        name: '在线生成IntelliJ IDEA注册码',
                        text: '在线生成IntelliJ IDEA注册码'
                    },
                    {
                        href: 'https://regexper.com/',
                        src: 'img/regexper.ico',
                        name: 'Regexper正则表达式',
                        text: 'Regexper正则表达式'
                    },
                    {
                        href: 'http://www.114la.com/other/rgb.htm',
                        src: 'img/rgb.ico',
                        name: 'RGB颜色查询对照表',
                        text: 'RGB颜色查询对照表'
                    },
                    {
                        href: 'http://www.sioe.cn/yingyong/yanse-rgb-16/',
                        src: 'img/rgba.ico',
                        name: 'RGB颜色值与十六进制颜色码转换',
                        text: 'RGB颜色值与十六进制颜色码转换'
                    },
                    {
                        href: 'https://encycolorpedia.cn/',
                        src: 'img/rgbas.ico',
                        name: '十六进制颜色代码表，图表及调色板',
                        text: '十六进制颜色代码表，图表及调色板'
                    },
                ]
            },
            {
                name: 'Leisure-and-Entertainment',
                class: 'icon-Entertainment',
                text: '文娱休闲',
                list: [{
                        href: 'https://www.youku.com/',
                        src: 'img/优酷.svg',
                        name: '优酷',
                        text: '综艺好看'
                    },
                    {
                        href: 'https://www.iqiyi.com/',
                        src: 'img/爱奇艺.ico',
                        name: '爱奇艺',
                        text: '电视剧好看'
                    },
                    {
                        href: 'https://v.qq.com/',
                        src: 'img/腾讯视频.ico',
                        name: '腾讯视频',
                        text: '动漫好看'
                    },
                    {
                        href: 'https://www.bilibili.com/',
                        src: 'img/哔哩哔哩.ico',
                        name: '哔哩哔哩',
                        text: '动漫好看'
                    },
                    {
                        href: 'https://www.youtube.com/',
                        src: 'img/YouTube.png',
                        name: 'YouTube',
                        text: '外国最大的视频网站'
                    },
                    {
                        href: 'https://www.netflix.com/',
                        src: 'img/Netflix.ico',
                        name: 'Netflix',
                        text: '外国最大的电影网站'
                    },
                    {
                        href: 'https://www.hulu.com/',
                        src: 'img/Hulu.png',
                        name: 'Hulu',
                        text: '美国在线直播电视和电影'
                    },
                    {
                        href: 'https://www.hbo.com/',
                        src: 'img/HBO.jpg',
                        name: 'HBO',
                        text: '美国电影喜剧纪录片'
                    },
                    {
                        href: 'https://www.disneyplus.com/',
                        src: 'img/Disney+.ico',
                        name: 'Disney+',
                        text: '美国电影网站'
                    },
                    {
                        href: 'https://www.mytvsuper.com/',
                        src: 'img/myTVsuper.ico',
                        name: 'myTVsuper',
                        text: '香港电影网站'
                    },
                    {
                        href: 'https://ani.gamer.com.tw/',
                        src: 'img/动漫疯.ico',
                        name: '动漫疯',
                        text: '台湾电影网站'
                    },
                    {
                        href: 'https://www.foxplus.com/',
                        src: 'img/F0X+.png',
                        name: 'F0X+',
                        text: '香港电影网站'
                    },
                    {
                        href: 'https://abema.tv/',
                        src: 'img/AbemaTV.ico',
                        name: 'AbemaTV',
                        text: '日本直播网站'
                    },
                    {
                        href: 'https://www.nicovideo.jp/',
                        src: 'img/nicovideo.ico',
                        name: 'nicovideo',
                        text: '日本动漫视频网站'
                    },
                    {
                        href: 'https://www.dytt8.net/',
                        src: 'img/电影天堂.ico',
                        name: '电影天堂',
                        text: '磁力电影'
                    },
                    {
                        href: 'https://www.zxzj.me/',
                        src: 'img/在线之家.ico',
                        name: '在线之家',
                        text: '在线视频'
                    },
                    {
                        href: 'https://www.88ys.com/',
                        src: 'img/88影视网.ico',
                        name: '88影视网',
                        text: '在线视频'
                    },
                    // {
                    //     href: 'https://theporndude.com/zh',
                    //     src: 'img/PornDude.webp',
                    //     name: 'Porn Dude',
                    //     text: '成人世界的大门'
                    // },
                    {
                        href: 'https://music.163.com',
                        src: 'img/网易云音乐.ico',
                        name: '网易云音乐',
                        text: '评论史诗级'
                    },
                    {
                        href: 'https://y.qq.com/',
                        src: 'img/QQ音乐.ico',
                        name: 'QQ音乐',
                        text: '版权最全'
                    },
                    {
                        href: 'https://www.xiami.com/',
                        src: 'img/虾米音乐.png',
                        name: '虾米音乐',
                        text: '88会员赠送'
                    },
                    {
                        href: 'http://www.kugou.com/',
                        src: 'img/酷狗音乐.ico',
                        name: '酷狗音乐',
                        text: '哈喽，酷狗！'
                    },
                    {
                        href: 'https://www.ximalaya.com/',
                        src: 'img/喜马拉雅.ico',
                        name: '喜马拉雅',
                        text: '听书'
                    },
                    {
                        href: 'https://www.taobao.com/',
                        src: 'img/淘宝.ico',
                        name: '淘宝',
                        text: '中国第一'
                    },
                    {
                        href: 'https://www.jd.com',
                        src: 'img/京东.ico',
                        name: '京东',
                        text: '买数码上京东'
                    },
                    {
                        href: 'https://www.amazon.cn/',
                        src: 'img/亚马逊.ico',
                        name: '亚马逊商城',
                        text: '外国第一'
                    },
                    {
                        href: 'https://www.mi.com/',
                        src: 'img/小米商城.ico',
                        name: '小米商城',
                        text: '小米生态'
                    },
                    {
                        href: 'https://www.xiaomiyoupin.com/',
                        src: 'img/小米有品.ico',
                        name: '小米有品',
                        text: '小米生态'
                    },
                    {
                        href: 'https://voice.google.com/',
                        src: 'img/google_voice.png',
                        name: 'Google Voice',
                        text: '美国虚拟电话'
                    },
                    {
                        href: 'http://d.aamaomi.com/signup?invite_uid=gzj3LDoA0kb2yaNZ',
                        src: 'img/logo.png',
                        name: '咪咪联盟',
                        text: '刷单平台'
                    },
                    {
                        href: 'https://weekly.75team.com/',
                        src: 'img/weekly.png',
                        name: '奇舞周刊',
                        text: '前端周刊'
                    },
                    {
                        href: 'http://fex.baidu.com/weekly/',
                        src: 'img/fex.svg',
                        name: 'FEX',
                        text: '前端周刊'
                    },
                    {
                        href: 'https://weekly.manong.io/issues/',
                        src: 'img/manong.ico',
                        name: '码农周刊',
                        text: '前端周刊'
                    },
                    {
                        href: 'https://javascriptweekly.com/',
                        src: 'img/jsweekly.png',
                        name: 'JavaScript Weekly',
                        text: '前端周刊'
                    },
                    {
                        href: 'https://css-weekly.com/',
                        src: 'img/cssweekly.ico',
                        name: 'CSS Weekly',
                        text: '前端周刊'
                    },
                    {
                        href: 'https://news.vuejs.org/',
                        src: 'img/Vue.png',
                        name: 'Vue.js News',
                        text: '前端周刊'
                    },
                    {
                        href: 'https://nodeweekly.com/',
                        src: 'img/nodejscn.png',
                        name: 'Node Weekly',
                        text: '前端周刊'
                    }, 
                ]
            },
            {
                name: 'Cloud-Server',
                class: 'icon-Cloud-Server',
                text: '云端服务',
                list: [
                    {
                        href: 'https://www.aliyun.com/minisite/goods?userCode=3xxeu8uc',
                        src: 'img/阿里云.ico',
                        name: '阿里云',
                        text: '中国区'
                    },
                    {
                        href: 'https://cloud.tencent.com/act/cps/redirect?redirect=1053&cps_key=789d07ea8be50b3706f29b464fe131ad&from=console',
                        src: 'img/腾讯云.ico',
                        name: '腾讯云',
                        text: '中国区'
                    },
                    {
                        href: 'https://www.alibabacloud.com/',
                        src: 'img/阿里云.ico',
                        name: '阿里云',
                        text: '美国区'
                    },
                    // {
                    //     href: 'https://cloud.tencent.com/',
                    //     src: 'img/腾讯云.ico',
                    //     name: '腾讯云',
                    //     text: '中国区'
                    // },
                    {
                        href: 'https://cloud.google.com/?hl=zh-CN',
                        src: 'img/谷歌云.ico',
                        name: '谷歌云',
                        text: '外币信用卡送300美金'
                    },
                    {
                        href: 'https://aws.amazon.com',
                        src: 'img/亚马逊.ico',
                        name: '亚马逊云',
                        text: '有信用卡可以白嫖一年'
                    },
                    {
                        href: 'https://www.vultr.com/?ref=8205489',
                        src: 'img/vultr.png',
                        name: 'Vultr',
                        text: '按小时计费'
                    },
                    {
                        href: 'https://www.vultr.com/?ref=8439176-6G',
                        src: 'img/vultr.png',
                        name: 'Vultr',
                        text: '注册就送100美金'
                    },
                    {
                        href: 'https://bandwagonhost.com/aff.php?aff=57350',
                        src: 'img/搬瓦工.png',
                        name: '搬瓦工',
                        text: '中国优化线路'
                    },
                    {
                        href: 'https://my.hostkvm.com/aff.php?aff=886',
                        src: 'img/HostKvm.ico',
                        name: 'HostKvm',
                        text: '中国建站推荐'
                    },
                    {
                        href: 'https://www.dmit.io/aff.php?aff=1001',
                        src: 'img/DMIT.ico',
                        name: 'DMIT',
                        text: '原生IP服务器'
                    },
                    {
                        href: 'https://9shost.com/aff.php?aff=257',
                        src: 'img/死海网络.png',
                        name: '死海网络',
                        text: '原生IP服务器'
                    },
                    {
                        href: 'https://www.rizhuji.com/aff.php?aff=148',
                        src: 'img/日主机.png',
                        name: '日主机',
                        text: 'GIA服务器'
                    },
                    {
                        href: 'https://ksc.serverdiscounter.com/aff.php?aff=110',
                        src: 'img/serverdiscounter.png',
                        name: 'serverdiscounter',
                        text: '不限流量服务器'
                    },
                    {
                        href: 'https://kiwivm.64clouds.com/main.php',
                        src: 'img/搬瓦工.png',
                        name: '搬瓦工',
                        text: '后台管理'
                    },
                    {
                        href: 'http://192.168.123.1/',
                        src: 'img/小米路由器.ico',
                        name: '小米路由器',
                        text: '管理界面'
                    },
                    
                    {
                        href: 'http://35.240.134.57:8888/',
                        src: 'img/宝塔面板.ico',
                        name: 'V2Board',
                        text: '宝塔管理界面'
                    },
                    {
                        href: 'https://v2b.xiaolong0418.com',
                        src: 'img/V2Board.png',
                        name: '合资小分队',
                        text: '节点登陆'
                    },
                     {
                        href: 'https://v2b.xiaolong0418.com/admin#/dashboard',
                        src: 'img/V2Board.png',
                        name: '合资小分队',
                        text: '节点管理'
                    },
                    {
                        href: 'https://www.namecheap.com/',
                        src: 'img/namecheap.ico',
                        name: 'Namecheap',
                        text: '外国域名购买'
                    },
                    {
                        href: 'https://dash.cloudflare.com/',
                        src: 'img/Cloudflare.ico',
                        name: 'Cloudflare',
                        text: 'DNS解析，CDN加速'
                    },
                    {
                        href: 'https://steamsv.com/aff.php?aff=110',
                        src: 'img/Cloudflare.ico',
                        name: 'STEAMSV',
                        text: '流媒体解锁'
                    },
                    {
                        href: 'https://chrome.google.com/webstore/category/themes?hl=zh-CN',
                        src: 'img/谷歌浏览器.svg',
                        name: 'chrome 网上应用店',
                        text: '谷歌浏览器插件'

                    }
                ]
            },
            {
                name: 'common software',
                class: 'icon-Software',
                text: '常用软件',
                list: [{
                        href: 'https://u.tools/download.html',
                        src: 'img/uTools.png',
                        name: 'uTools',
                        text: '各种小工具集合'
                    },
                    {
                        href: 'https://tim.qq.com/download.html',
                        src: 'img/TIM.png',
                        name: 'TIM',
                        text: '简约风格'
                    },
                    {
                        href: 'https://weixin.qq.com/cgi-bin/readtemplate?uin=&stype=&promote=&fr=&lang=zh_CN&ADTAG=&check=false&nav=download&t=weixin_download_list&loc=readtemplate,weixin,body,6',
                        src: 'img/微信.ico',
                        name: '微信',
                        text: '沟通工具第一'
                    },
                    {
                        href: 'http://www.lianty.com/',
                        src: 'img/链图网.ico',
                        name: '链图网',
                        text: '匹配字体'
                    },
                    {
                        href: 'https://www.firefox.com.cn/',
                        src: 'img/火狐浏览器.png',
                        name: '火狐浏览器',
                        text: '中国浏览器'
                    },
                    {
                        href: 'https://www.google.com/intl/zh-CN/chrome/',
                        src: 'img/谷歌浏览器.svg',
                        name: '谷歌浏览器',
                        text: '开发必备'
                    },
                    {
                        href: 'http://www.potplayer.org/',
                        src: 'img/PotPlayer.ico',
                        name: 'PotPlayer',
                        text: '视频播放器'
                    },
                    {
                        href: 'https://www.xmind.cn/download/',
                        src: 'img/XMind.ico',
                        name: 'XMind',
                        text: '思维导图'
                    },
                    {
                        href: 'https://www.typora.io/',
                        src: 'img/Typora.png',
                        name: 'Typora',
                        text: '强大的文本编辑软件'
                    },
                    {
                        href: 'https://www.huorong.cn/',
                        src: 'img/火绒安全.ico',
                        name: '火绒安全',
                        text: '杀毒软件'
                    },
                    {
                        href: 'https://www.teamviewer.cn/cn/',
                        src: 'img/TeamViewer.webp',
                        name: 'TeamViewer',
                        text: '远程控制桌面'
                    },
                    {
                        href: 'http://mail.163.com/dashi/',
                        src: 'img/网易邮箱大师.ico',
                        name: '网易邮箱大师',
                        text: '多邮箱合一'
                    },
                    {
                        href: 'https://pan.baidu.com/download',
                        src: 'img/百度网盘.ico',
                        name: '百度网盘',
                        text: '万恶的资本家'
                    },
                    {
                        href: 'https://emumo.xiami.com/apps/mobile?spm=a2oj1.12028025.topnav.5.54776ee1me1a2G',
                        src: 'img/虾米音乐.png',
                        name: '虾米音乐',
                        text: '88会员音乐'
                    },
                    {
                        href: 'https://cn.bandisoft.com/bandizip/',
                        src: 'img/BandiZip.ico',
                        name: 'BandiZip',
                        text: '文件压缩解压工具'
                    },
                    {
                        href: 'https://github.com/2dust/v2rayN/releases',
                        src: 'img/GitHub.ico',
                        name: 'V2rayN',
                        text: 'V2ray window桌面连接软件'
                    },
                    {
                        href: 'https://github.com/2dust/v2rayNG/releases',
                        src: 'img/GitHub.ico',
                        name: 'V2rayNG',
                        text: 'V2ray 安卓连接软件'
                    },
                    {
                        href: 'https://github.com/Cenmrev/V2RayX',
                        src: 'img/GitHub.ico',
                        name: 'V2rayX',
                        text: 'V2ray 苹果桌面连接软件'
                    },
                    {
                        href: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
                        src: 'img/GitHub.ico',
                        name: 'Shadowrocket',
                        text: 'V2ray 苹果手机连接软件'
                    },
                    {
                        href: 'https://telegram.org/',
                        src: 'img/Telegram.ico',
                        name: 'Telegram',
                        text: '消息传递的新时代'
                    },
                    {
                        href: 'https://code.visualstudio.com/Download',
                        src: 'img/Visual Studio Code.png',
                        name: 'Visual Studio Code',
                        text: '编程软件'
                    },
                    {
                        href: 'https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html',
                        src: 'img/微信小程序.ico',
                        name: '微信小程序',
                        text: '编程软件'
                    },
                    {
                        href: 'https://www.dcloud.io/hbuilderx.html',
                        src: 'img/HBuilder X.png',
                        name: 'HBuilder X',
                        text: '编程软件'
                    },
                    {
                        href: 'https://www.navicat.com.cn/download/navicat-premium',
                        src: 'img/Navicat.png',
                        name: 'Navicat',
                        text: '数据库连接软件'
                    },
                    {
                        href: 'https://www.xp.cn/download.html',
                        src: 'img/PHPStudy.ico',
                        name: 'PHPStudy',
                        text: '服务端运行环境'
                    },
                    {
                        href: 'https://www.netsarang.com/zh/xshell/',
                        src: 'img/Xshell6.ico',
                        name: 'Xshell 6',
                        text: '业界最强大的SSH客户机'
                    },
                    {
                        href: 'http://www.hostbuf.com/t/988.html',
                        src: 'img/Xshell6.ico',
                        name: 'FinalShell ',
                        text: 'SSH连接与文件传输'
                    },
                    {
                        href: 'https://www.getpostman.com/downloads/',
                        src: 'img/postman.png',
                        name: 'Postman',
                        text: 'API接口测试'
                    },
                    {
                        href: 'https://www.i4.cn/',
                        src: 'img/爱思助手.png',
                        name: '爱思助手',
                        text: '苹果刷机工具'
                    },
                    {
                        href: 'http://www.pcgeshi.com/download.html',
                        src: 'img/格式工厂.png',
                        name: '格式工厂',
                        text: '文件格式转换'
                    },
                    {
                        href: 'https://www.yeshen.com/',
                        src: 'img/夜神模拟器.ico',
                        name: '夜神模拟器',
                        text: '安卓模拟器'
                    },
                    
                    {
                        href: 'http://www.laomaotao.org/',
                        src: 'img/老毛桃.ico',
                        name: '老毛桃',
                        text: 'U盘启动盘'
                    },
                    {
                        href: 'http://www.cnblogs.com/zhcncn/p/4097881.html',
                        src: 'img/hexo.png',
                        name: 'Hexo搭建Github博客',
                        text: '博客设计'
                    },
                    {
                        href: 'http://blog.sina.com.cn/s/blog_617ccc0c0101h84p.html',
                        src: 'img/cnfeat.png',
                        name: '搭建独立博客',
                        text: '博客设计'
                    },
                    {
                        href: 'http://ibruce.info/2013/11/22/hexo-your-blog/',
                        src: 'img/hexoburu.png',
                        name: 'Hexo在Github上搭建博客',
                        text: '博客设计'
                    },
                    {
                        href: 'http://jekyllthemes.org/',
                        src: 'img/hexo.png',
                        name: 'Jekyll Themes',
                        text: '博客设计'
                    },
                    {
                        href: 'https://jmblog.github.io/color-themes-for-google-code-prettify/',
                        src: 'img/hexo.png',
                        name: '代码样式主题',
                        text: '博客设计'
                    },
                ]
            }
        ]
    }
})
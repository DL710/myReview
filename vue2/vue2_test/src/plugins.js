//Vue插件
export default {
    install(Vue) {
        //定义过滤器
        Vue.filter('sliceStr', function (value) {
            if (!value) return ''
            return sliceStr(1, 4)
        })

        // 注册一个全局自定义指令 `v-focus`
        Vue.directive('focus', {
            // 当被绑定的元素插入到 DOM 中时……
            inserted: function (el) {
                // 聚焦元素
                el.focus()
            }
        })

        // 为自定义的选项 'myOption' 注入一个处理器。
        Vue.mixin({
            data() {
                return {
                    haha: '88888'
                }
            },
        })

        Vue.prototype.abc = function () {
           console.log(1);
        }

    }
}
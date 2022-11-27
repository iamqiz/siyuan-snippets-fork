import * as block from './util/blocks.js'
import 核心api from './util/kernelApi.js'
import 自定义块标菜单 from './customMenu/index.js'
import 添加自定义随机背景图 from './customBackground/index.js'
import 自定义工具栏 from './customToolbar/index.js'
import {生成单个dom元素} from './util/dom.js'
import {Tab,注册自定义tab}  from './customTab/index.js'
import * as layoutUtil from './util/layouts.js'
添加自定义随机背景图()
let noobApi={
	自定义菜单:{
		块标菜单:自定义块标菜单
	},
    内容块:block,
    编辑器:{
        自定义工具栏:自定义工具栏
    },
    核心api:核心api,
    DOM工具:{
        生成单个dom元素
    },
    layouts:{
        注册自定义tab,
        Tab,
        util:layoutUtil
    }
}
window.noobApi = noobApi

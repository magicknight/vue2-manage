import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
const area = r => require.ensure([], () => r(require('@/page/area')), 'area');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const uploadFile = r => require.ensure([], () => r(require('@/page/uploadFile')), 'uploadFile');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');


export default new Router({
	routes: [
		{
			path: '/',
			component: login
		},
		{
			path: '/manage',
			component: manage,
			name: '',
			children: [{
				path: '',
				component: home,
				meta: [],
			},{
				path: '/addShop',
				component: addShop,
				meta: ['添加数据', '添加商铺'],
			},{
				path: '/addGoods',
				component: addGoods,
				meta: ['添加数据', '添加商品'],
			},{
				path: '/userList',
				component: userList,
				meta: ['数据管理', '用户列表'],
			},{
				path: '/shopList',
				component: shopList,
				meta: ['数据管理', '商家列表'],
			},{
				path: '/area',
				component: area,
				meta: ['数据管理', '地区管理'],
			},{
				path: '/adminList',
				component: adminList,
				meta: ['数据管理', '管理员列表'],
			},{
				path: '/visitor',
				component: visitor,
				meta: ['图表', '访问数据'],
			},{
				path: '/newMember',
				component: newMember,
				meta: ['图表', '用户数据'],
			},{
				path: '/uploadImg',
				component: uploadImg,
				meta: ['上传', '上传图片'],
			},{
				path: '/uploadFile',
				component: uploadFile,
				meta: ['上传', '上传文件'],
			},{
				path: '/adminSet',
				component: adminSet,
				meta: ['设置', '管理员设置'],
			},{
				path: '/sendMessage',
				component: sendMessage,
				meta: ['设置', '发送通知'],
			},{
				path: '/explain',
				component: explain,
				meta: ['说明', '说明'],
			}]
		}
	]
})

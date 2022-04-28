'use strict';
const db = uniCloud.database() //获取数据库引用
exports.main = async (event, context) => {
	// 数据库集合的引用，也就是获取创建的数据表
	const collection = db.collection('usersInfo') 
	
	// 增加, 支持添加多个
	// const res = await collection.add([
	// 	{
	// 		userName:'testName01',
	// 		age:'18'
	// 	}
	// ])
	
	// 删除
	// await collection.doc('626a20ee1b29930001414e4d').remove()
	
	// 修改 updata 修改数据表中有的字段 或者set 可以修改不存在的字段，不存在则新建
	// const res = await collection.doc('626a20ee1b29930001414e4d').updata({
	// 	userName:'testName00'
	// })
	// const res = await collection.doc('626a20ee1b29930001414efe').set({
	// 	userName:'testName01',
	// 	age:'23'
	// })
	
	// 查询
	const res = await collection.doc('626a6c3cc016f400017f5acb').get()
	// const res = await collection.where({
	// 	userName: 'testName00'
	// }).get()
	
	// 删除云存储资源
	const result = await uniCloud.deleteFile({
		// 文件ID组成的数组
		fileList: [
			'6841c689-d87a-406b-9665-50fc0d85f5c4'
		]
	})
	
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return res
};

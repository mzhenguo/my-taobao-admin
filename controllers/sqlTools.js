/**
 * sql 增删改查
 */
let { mysql } = require('../qcloud')
module.exports = async(ctx) => {
  // 1,新增
  // let insetSql = {
  //   user_name: '17545123205',
  //   user_password: '112233445566',
  //   role: 'seller'
  // }
  // try {
  //   await mysql('user')
  //     .insert(insetSql)
  //   console.log('插入成功')
  // } catch (e) {
  //   console.log('插入失败', e)
  // }

  // 2,删除
  // try {
  //   await mysql('user')
  //     .delete()
  //     .where({user_name: '17545123205'})
  //   console.log('删除成功')
  // } catch (e) {
  //   console.log('删除失败', e.sqlMessage)
  // }

  // 3，更新
  // try {
  //   console.log(11111)
  //   await mysql('user')
  //     .update({role: 'updateaaa'})
  //     .where({user_name: '18600000000'})
  // } catch (err) {
  //   console.log(err.sqlMessage)
  // }

  // 4，查询
  // 使用 as 设置别名：.select('user.id as uId', 'product.id as pId')
  // 单表查询
  // try {
  //   let selectRes = await mysql('user')
  //     .select('id', 'user_password', 'role')
  //     .where({user_name: '18600000000'})
  //   console.log('查询成功', selectRes)
  // } catch (e) {
  //   console.log('查询失败', e.sqlMessage)
  // }

  // 链表查询
  // try {
  //   let selectRes = await mysql('user')
  //     .select('user.id as uId', 'product.id as pId')
  //     .join('product', 'user.id', 'product.user_id')
  //     .where({user_name: '18600000000'})
  //   console.log('查询成功', selectRes)
  // } catch (e) {
  //   console.log('查询失败', e.sqlMessage)
  // }
  
}

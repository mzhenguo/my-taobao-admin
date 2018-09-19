let { mysql } = require('../qcloud')
module.exports = async(ctx) => {
  let { userName, password } = ctx.request.body
  // let userName = '18600000000'
  // let password = '11223344'
  console.log(userName)

  // 查询用户是否存在
  let userCount = await mysql('user')
    .select('user_name')
    .where({ user_name: userName })

  console.log(userCount)
  
  if (userCount.length) {
    ctx.state = {
      code: -1,
      data: {
        msg: '用户名已存在'
      }
    }
    return false
  }

  let obj = {
    user_name: userName,
    user_password: password,
    role: 'buyer'
  }

  try {
    await mysql('user').insert(obj)
    ctx.state.data = {
      msg: `${userName}注册成功`
    }
  } catch (e) {
    ctx.state = {
      code: -1,
      data: {
        msg: '注册失败' + e.sqlMessage
      }
    }
  }
  
}

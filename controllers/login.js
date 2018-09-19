let { mysql } = require('../qcloud')
module.exports = async(ctx) => {
  let { userName, password } = ctx.request.body

  let userNameCount = await mysql('user')
    .select()
    .where({user_name: userName})
  let userCount = await mysql('user')
    .select()
    .where({user_name: userName, user_password: password})

    console.log(userNameCount)
  if (!userNameCount.length) {
    ctx.state = {
      code: -1,
      data: {
        msg: '用户名不存在'
      }
    }

  } else if (!userCount.length) {
    ctx.state = {
      code: -2,
      data: {
        msg: '用户名或密码错误'
      }
    }
  } else {
    ctx.state.data = {
      msg: `${userName}登录成功`
    }
  }
  
}

let { mysql } = require('../qcloud')
module.exports = async(ctx) => {
  let user = {
    name: '马振国',
    password: '666666'
  }
  try {
  await mysql('demoo').insert(user)
      ctx.state.data = {
      msg: '登录成功'
    }
  } catch (e) {
    ctx.state = {
      code: -1,
      data: {
        msg: '登录失败' + e.sqlMessage
      }
    }
  }
  
}

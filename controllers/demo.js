module.exports = async(ctx) => {
  console.log('2222', ctx)
  ctx.state.data = {
    msg: 'hello demo'
  }
}

// let https = require('https')
// module.exports = async(ctx) => {
//   console.log('后台数据', ctx.request.body)
//   const { isbn, openId } = ctx.request.body
//   if (isbn && openId) {
//     let url = 'https://api.douban.com/v2/book/isbn/' + isbn
//     getJSON(url).then(res => {
//       console.log('哈哈哈', res)
//     })
//   }
// }

// function getJSON(url) {
//   return new Promise((resolve, reject) => {
//     https.get(url, res => {
//       let urlData = ''
//       res.on('data', data => {
//         urlData += data
//       })
//       res.on('end', data => {
//         const bookInfo = JSON.parse(urlData)
//         if (bookInfo.title) {
//           resolve(bookInfo)
//         } else {
//           reject(bookInfo)
//         }
//       })
//     })
//   })
// }


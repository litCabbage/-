let fs = require('fs') // 引入node的文件模块
let src = 'images' // 定义路径变量
fs.readdir(src, (err, files) => { // 访问指定路径的文件夹，files是该文件夹内的文件名称数组
  files.forEach(((filename, count) => { // 遍历该文件夹数组
    let oldPath = src + '/' + filename,
      newPath = src + '/' + count + '.png'
    fs.rename(oldPath, newPath, (err) => { // 重命名文件名称
      if (!err) {
        console.log(filename + '排序成功')
      }
    })
  }))
})
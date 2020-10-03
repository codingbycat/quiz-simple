const path = require('path')
const fs = require('fs')

/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const deleteMapFiles = async (p) => {
  // 请实现……
  const targetDir = path.resolve(__dirname, p);
  fs.readdir(targetDir, (err, files) => {
    if (err) return console.error(err);

    files.forEach(filename => {
      const targetFileOrDir = path.resolve(targetDir, filename);
      fs.stat(targetFileOrDir, (statErr, info) => {
        if (err) return console.error(statErr);

        const isFile = info.isFile();
        isFile ? deleteFile(targetFileOrDir) : deleteMapFiles(targetFileOrDir);
      });
    });
  });
};

/**
 * @description 具体的删除函数
 * @param {string} p 删除路径
 * @param {string} deleteExtname 需要删除的后缀名
 */
function deleteFile(p, deleteExtname = '.map') {
  const isCanDelete = path.extname(p) === deleteExtname;
  if (!isCanDelete) return
  fs.unlink(p, (err) => {
    err ? console.error(err) : console.log('删除成功，文件路径：', p)
  })
}

deleteMapFiles('./playground')


// * ------------------------------------------------

// * playground 文件夹目前的目录结构如下：

/*
playground
├── index.html
├── index.js
├── index.js.map
└── static
    ├── main.js
    ├── main.js.map
    ├── style.css
    └── style.css.map
*/

// * 调用 deleteMapFiles('./playground') ，将删除所有 map 文件
// * 然后文件结构应该如下：

/*
playground
├── index.html
├── index.js
└── static
    ├── main.js
    └── style.css
*/

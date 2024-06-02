const { default: axios } = require("axios");
const fs = require('fs');
const path = require('path');
function SourceMapPlugin(config) {
    this.config = config;
};

const handleSourcemap = (compilation, callback) => {
    const sourcemaps = [];
    for (const file in compilation.assets) {
      if (file.endsWith('.map')) {
        sourcemaps.push(file);
      }
    }
    console.log(sourcemaps, 'sourcemaps')

    Promise.all(sourcemaps.map(async(file) => {
        try {
            const content = compilation.assets[file];
            await axios.post('http://localhost:3000/manage/upload', content, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            // 从编译产物中删除sourcemap文件
            delete compilation.assets[file];
          } catch (error) {
            console.error(`Failed to upload sourcemap ${sourcemaps[0]}:`, error);
          }
    })).then(() => {
        callback();
    });
}

SourceMapPlugin.prototype.apply = (compiler) => {
    compiler.hooks.emit.tapAsync(
        'SourceMapPlugin',
        handleSourcemap,
    );
}


module.exports = SourceMapPlugin;
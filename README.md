# webpack-learn
TIPS
1、配置文件配置项 
entry -> 指定入口
output -> filename,打包后的文件名、path,生成路径
module -> loader配置项
plugins -> 插件配置项
mode -> 模式，分为development和production两种

2、Loader
Webpack是能识别js、json文件，不能识别如css、ts等文件，loader是翻译官可以将这些文件翻译为webpack认识的。

3、Plugins
可以执行范围更广的任务。插件的范围包括，打包优化、压缩、重新定义环境变量等等。

4、指定模式打包命令 webpack ./src/index.js -o ./build --mode=production/development

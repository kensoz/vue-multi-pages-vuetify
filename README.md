# vue-multi-pages-vuetify

a sample of vue mpa with ui framework

2021-02-20  
vue@cli 4x  
vue 2x  
vue-router hash

http://localhost:8080/client#/  
http://localhost:8080/master#/

# Description

一个多项目并存的 vue 项目模板，场景比如说客户端管理端并存，或者两个同级网站。很简单的模板，具体看代码老铁

MPA の Vue プロジェクトテンプレートです。クライアント側と管理側が共存するプロジェクトがよく使われています

a vue MPA project

# sample step

1. 像往常一样创建项目，这时还是 spa
2. 在 src 下面新建 pages 文件夹，并在其中创建你想要并存的子文件夹，并把 spa 的文件复制进去。注意文件路径
3. 在根文件夹里创建 vue.config.js，并把 cli 官网中的 pages 配置  
   修改成自己的配置并复制 https://cli.vuejs.org/config/#pages
4. 这个时候其实已经是 mpa 了，如果需要安装 ui 库，按照往常一样追加 ui 库
5. 修改文件路径,并在 main.js 分别导入 ui 库，或者按需导入
6. npm run serve

1) いつもの通りに vue プロジェクトを新規作成します、ここまでは spa の状態です
2) src フォルダの中に、pages ファイルを新規作成して、その中に作成したい mpa フォルダを作成します。  
   spa の時のファイルを mpa フォルダにそれぞれコピーします。フォルダのパスは要注意です
3) vue.config.js を新規作成して、cli ガイドの pages 設定に従って、自分の設定を行います https://cli.vuejs.org/config/#pages
4) ここまで mpa になりましたが、ui ライブラリが必要であれば、引き続きいつもの通りに追加します
5) main.js にそれぞれ ui ライブラリをインポートします。一つしかインポートしなくても構いません
6) npm run serve

1. create your vue project
2. set of directories with the pair and folders . make spa folders to mpa folders
3. create vue.config.js and copy the code from https://cli.vuejs.org/config/#pages
4. install vuetify or any ui Framework you like
5. set of directories with the pair and folders
6. npm run serve

# setup

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

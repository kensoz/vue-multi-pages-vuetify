# vue-multi-pages-vuetify

a sample of vue mpa with ui framework

2021-02-20  
vue@cli 4x  
vue 2x  
vue-router hash

http://localhost:8080/client#/  
http://localhost:8080/master#/

# Description

- 一个多项目并存的 vue 项目模板，场景比如说客户端管理端并存，或者两个同级网站。很简单的模板，具体看代码老铁

- MPA の Vue プロジェクトテンプレートです。クライアント側と管理側が共存するプロジェクトがよく使われています

- a vue MPA project

# sample step

```
1. 像往常一样创建项目，这时还是spa
2. 在src下面新建pages文件夹，并在其中创建你想要并存的子文件夹，并把spa的文件复制进去。注意文件路径
3. 在根文件夹里创建vue.config.js，并把cli官网中的pages配置，修改成自己的配置并复制 https://cli.vuejs.org/config/#pages
4. 这个时候其实已经是mpa了，如果需要安装ui库，按照往常一样追加ui库
5. 修改文件路径,并在main.js分别导入ui库，或者按需导入
6. npm run serve
```

```
1. いつもの通りにvueプロジェクトを新規作成します、ここまではspaの状態です
2. srcフォルダの中に、pagesファイルを新規作成して、その中に作成したいmpaフォルダを作成します。spaの時のファイルをmpaフォルダにそれぞれコピーします。フォルダのパスは要注意です
3. vue.config.jsを新規作成して、cliガイドのpages設定に従って、自分の設定を行います https://cli.vuejs.org/config/#pages
4. ここまでmpaになりましたが、uiライブラリが必要であれば、引き続きいつもの通りに追加します
5. main.jsにそれぞれuiライブラリをインポートします。一つしかインポートしなくても構いません
6. npm run serve
```

```
1. create your vue project
2. set of directories with the pair and folders . make spa folders to mpa folders
3. create vue.config.js and copy the code from https://cli.vuejs.org/config/#pages
4. install vuetify or any ui Framework you like
5. set of directories with the pair and folders
6. npm run serve
```

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

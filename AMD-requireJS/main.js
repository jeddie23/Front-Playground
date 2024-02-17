//配置模块的路径
requirejs.config({
    baseUrl:'./',  //配置所有引入模块的公共路径（基本路径）
    //模块标识名与模块路径映射
    paths : {
      // 模块名称（一定要与引入的模块名称一一对应）: 模块的路径
      dataServer: 'modules/dataService',  
      //一定不能写文件的后缀名，它会自动补全
      alerter: 'modules/alerter',
      //库/框架自己实现模块化的功能，定义了暴露模块的名称
    }
  })
  
  //主模块,下面requirejs可以用require代替,require是异步可缓存的
  requirejs(['alerter'],function (alerter) {
    alerter();
  });
  
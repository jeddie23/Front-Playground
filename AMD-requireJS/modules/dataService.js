define(function () {
    let msg = 'hello world lyuya';
    function dataServer() {
      return msg.toUpperCase();
    }
    //暴露这个模块
    return dataServer;
  });
  
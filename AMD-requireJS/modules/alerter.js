//一定要注意一一对应，前面有，后面一定要有，别忘记后面的传参
define(['dataServer'],function (dataServer) {
    let msg = dataServer();
    function alerter() {
      alert(msg);
    }
    return alerter;
  });
  
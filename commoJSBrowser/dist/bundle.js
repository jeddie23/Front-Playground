(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const m2 = require('./module2');
const {showData} = require('./module3');

showData(m2.newsData);
showData(m2.commentsData)

},{"./module2":3,"./module3":4}],2:[function(require,module,exports){
const newsUrl = 'http://localhost:3000/news';
const commentsUrl = 'http://localhost:3000/comments';
//通过exports暴露出去
exports.newsUrl = newsUrl;
exports.commentsUrl = commentsUrl;

},{}],3:[function(require,module,exports){
//引入依赖
const m1 = require('./module1');

//定义发送请求的方法
function getNews(url) {
  console.log('发送请求获取数据，请求地址为：' + url);
  return 'newsData';
}
function getComments(url) {
  console.log('发送请求获取数据，请求地址为：' + url);
  return 'commentsData';
}

const newsData = getNews(m1.newsUrl);
const commentsData = getComments(m1.commentsUrl);

//通过module.exports暴露模块
module.exports = {
  newsData,
  commentsData
}

},{"./module1":2}],4:[function(require,module,exports){
//定义显示内容的方法
function showData(data) {
    console.log('要显示的信息：' + data);
  }
  //通过module.exports暴露模块
  module.exports = {showData};
  
},{}]},{},[1]);

import {foo, bar} from './module1'
import {DATA_ARR} from './module1'
import {fun1, fun2} from './module2'
import person from './module3'

import $ from 'jquery'  //引入第三方jQuery模块 npm install jquery@1 --save

$('body').css('background', 'red')

foo()
bar()
console.log(DATA_ARR);
fun1()
fun2()

person.setName('JACK')
console.log(person.name);

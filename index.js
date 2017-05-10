// console.log(typeof null); //object
// console.log(typeof /a/); //object
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number('')); // 0
// console.log(String(null)); // null
// console.log(null.toString()); // TypeError
// console.log(String(undefined)); // undefined
// console.log(undefined.toString()); // TypeError
// console.log(true.toString()); // true
// console.log(false.toString()); // false
// console.log(!{}); // false
// console.log(!''); // true
// console.log(!0); // true
// && 返回能最先确定代表false的值
// || 返回能最先确定代表true的值
// console.log(undefined && ''); // undefined
// console.log(null && 0); // null
// console.log(NaN && {}); // NaN
// console.log(NaN || {}); // {}
// console.log(true && someVar); // ReferenceError
// console.log(false && someVar); // false
// console.log(true || someVar); // true
// console.log(false || someVar); // ReferenceError
// console.log({ o: 1 } && { o: 2 }); // {o:2}
// console.log({ o: 1 } || { O: 2 }); // {O:1}
// console.log({} && 0); // 0
// console.log({} || 0); // {}
// console.log(true && {}); // {}
// console.log(true || {}); // true
// + 与字符串、对象转为字符串连接，其他调用Number()
// console.log(1 + {}); // 1[object Object]
// console.log(1 + { o: 1 }); // 1[object Object]
// console.log(1 + '2'); // 12
// console.log(1 + null); // 1
// console.log(undefined + 1); // NaN
// console.log(1 - '2'); // -1
// 逻辑关系优先使用数值（转化后的数值）,字符串比较用编码,出现NaN结果为false(不相等为true)
// console.log('23' < '3'); // true
// console.log('23' < 3); // false
// console.log('a' < 3); //        NaN < 3  => false
// console.log(undefined < 1); //  NaN < 1  => false
// console.log(null < 1); //       0   < 1  => true
// 相等比较中null、undefined不转换
// console.log(null == 0); // false 
// console.log(undefined == 0); // false
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// 修改数组的length删除元素
// let array = [1, 2, 3];
// array.length = 2;
// console.log(array[2]); // undefined
// 下面：a-b返回负值，参数顺序不变，返回正值，调换顺序，实现从小到大排序
// let sort = array.sort((a, b) => { return a - b });
// console.log(sort);
// let origin = [2, 3, 100];
// let result = origin.reduce((prev, cur) => {
//   return prev + cur
// }, 0);
// console.log(result);
// console.log(new Date(1492990979262)); // 传入毫秒数 
// console.log(new Date(2017, 3, 24, 7, 42, 51)); // 模仿new Date(Date.UTC(2017,3,24,7,42,51)),月份从0开始
// console.log(new Date('2017-4-24 7:42:51')); // 模仿new Date(Date.parse('2017-4-24 7:42:51'))，参数依赖时区
// console.log(/mom( and dad( and baby)?)?/.exec('mom and dad and baby'));
// console.log('mom and dad and baby'.match(/mom( and dad( and baby)?)?/)); 
// console.log(Math.floor(Math.random() * 10 + 1)); // 1--10

// let person = {};
// Object.defineProperty(person, 'name', {
//   configurable: false,
//   value: 'Nicholas'
// });

// Object.defineProperty(person, 'name', {
//   configurable: true,
//   value: 'Nicholas'
// }); // TypeError


// function Person() {}
// let friend1 = new Person();
// Person.prototype = {
//   constructor: Person,
//   name: "Nicholas",
//   age: 29,
//   job: "Software Engineer",
//   sayName: function() {
//     console.log(this.name);
//   }
// };
// let friend2 = new Person();
// friend2.sayName();
// friend1.sayName(); //error 


// 组合继承 对应class
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function() {
//   console.log(this.name);
// };
// function SubType(name, age) {
//   // 继承属性 
//   SuperType.call(this, name);
//   this.age = age;
// }
// //继承方法 
// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function() {
//   console.log(this.age);
// };
// var instance1 = new SubType("Nicholas", 29);
// instance1.colors.push("black");
// console.log(instance1.colors); //"red,blue,green,blac
// instance1.sayName(); //"Nicholas"; 
// var instance2 = new SubType("Greg", 27);
// console.log(instance2.colors); //"red,blue,green" 
// instance2.sayName(); //"Greg"; 


// 原型式继承 对应Object.create()
// function object(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }
// let person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"] //引用型在原型上会被共用
// };
// let person1 = object(person);
// person1.name = "Greg";
// person1.friends.push("Rob");
// let person2 = object(person);
// person2.name = "Linda";
// person2.friends.push("Barbie");
// console.log(person.friends); //"Shelby,Court,Van,Rob,Barbie" 
// console.log(person1.name); // 
// console.log(person2.name); // 


// 寄生组合式继承 
// function inheritPrototype(subType, superType) {
//   var prototype = object(superType.prototype); // 创建对象 
//   prototype.constructor = subType; // 增强对象 
//   subType.prototype = prototype; // 指定对象 
// }
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function() {
//   console.log(this.name);
// };
// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }
// inheritPrototype(SubType, SuperType);
// SubType.prototype.sayAge = function() {
//   console.log(this.age);
// };
// let type = new SubType('wang', 19);
// type.sayAge();
// type.sayName();

// var name = "The Window";
// var object = {
//   name: "My Object",
//   getNameFunc: function() {
//     return function() {
//       return this.name;
//     };
//   }
// };
// console.log(object.getNameFunc()()); //"The Window" （在非严格模式下） 
// console.log(top === window); // top指向最外层窗口
// console.log(document.implementation.hasFeature('core', '3.0')); // DOM级别检测


// Boolean(false) //显示转换 false
// new Boolean(false) // 创建对像 true


// 闭包
// var a = 'outer',
//   b = 'outerWindow';
// function checkScope() {
//   let a = 'inner';
//   function f() {
//     console.log(a, '    ', this.b);
//   }
//   return f;
// }
// var o = {
//   b: 'outerO',
//   scope: checkScope()
// }
// o.scope(); // inner      outerO
// checkScope()();  // inner      outerWindow  使用let时为undefined

// 当正则表达式带有全局标志g时，二者表现不一致。
// match会返回所有符合条件的匹配项，并以数组形式返回。数组第一项存放第一个匹配项，数组第二项存放第二个匹配项...依次类推。
// exec则永远返回第一个匹配项。但是当连续调用exec时，则每次的返回值都是下一个匹配项。
// let string = 'cat,bat,kat';
// let pattern = /.?(at)/g;
// console.log(pattern.exec(string));
// console.log(string.match(pattern));


// document.write("100"+100+"<br>");
// var box=[6,15,62,45,16,94];
// document.write(box+"<br>");
// box.sort(compare);
// document.write(box+"<br>");
// function compare(value1,value2){
//  if(value1 > value2){
//      return 1;
//  }else if(value1 < value2){
//      return -1;
//  }else{
//      return 0;
//  }
// }
// var box2=[4,367,3];
// document.write(box.concat(box2));
// document.write(box.slice(1,3));
// var box3=box2.splice(1,0,'计算机编程','江苏');
// document.write(box3);
// var box=new Date();
// document.write(box.getMilliseconds());
// var pattern=/box/ig;
// var str="This box is a Box.";
// document.write(str.replace(pattern,"Tom"));
// document.write(str.split(/ /));
// var pattern=/(g)oo(gle)/g;
// var str="This google is google!";
// document.write(pattern.exec(str)+"<br>");
// document.write(str.match(pattern));
// alert(RegExp.rightContext);
// var pattern=/8(.+?)8/g;
// var str="This is 8google8,That is 8google8,There is 8google8";
// var result=str.replace(pattern,"<strong>$1</strong>");
// alert(result);
// var pattern=/(A?(B?(C?)))/;
// var str="ABC";
// alert(pattern.exec(str));
// var pattern=/(\d+)(?:[a-z]+)/;
// var str="123abc";
// alert(pattern.exec(str));
// function box(fn,num){
//     return fn(num);
// }
// function sum(num){
//  if(num <= 1){
//      return 1;
//  }else{
//      return num * arguments.callee(num-1);
//  }
// }
// alert(box.length);
// function box(n1,n2){
//  return n1+n2;
// }
// function sayBox(num1,num2){
//  return box.apply(this,[num1,num2]);
// }
// function sayBox2(num1,num2){
//  return box.apply(this,arguments);
// }
// alert(sayBox instanceof Array);
// alert("st" instanceof String);
// var str="string";
// var str1="box";
// alert(str.concat(str1));
// alert(str.indexOf("i"));
// alert(encodeURIComponent("http://www.google.com"));
// alert(Math.ceil(4.1));
// alert(Math.floor(4.1));
// alert(Math.round(4.1));
// document.write(Math.random()*10+5);
// alert(Math.abs(-1));
// var y = 1, x = y = typeof x;
// alert(y);
//工厂模式
// function createObject(name,age){
//  var obj=new Object();
//  obj.name=name;
//  obj.age=age;
//  obj.run=function(){
//      return this.name+this.age+"运行中...";
//  };
//  return obj;
// }
// function Box(name,age){
//  this.name=name;
//  this.age=age;
//  this.run=run;
// }
// Box.prototype.calc=function(){};
// function run(){
//  return this.name+this.age+"运行中...";
// }
// var box1=new Box("lee",100);
// var box2=new Box("le",200);
// alert(Box.prototype.isPrototypeOf(box1));
// alert(box1.hasOwnProperty("calc")); //实例中有
// alert("calc" in box1);  //有
// alert(box1.constructor === Box);
// var x=20;
// var obj={
//  x:10,
//  fn:function(){
//      function f(){
//          alert(this.x);
//      }
//      f();
//  }
// };
// obj.fn();
// function Box(){}
// Box.prototype={
//  constructor:Box,
//  name:"Lee",
//  age:100,
//  run:function(){
//      return this.name+this.age+"运行中...";
//  }
// };
// Box.prototype={
//  age:200
// };
// var box=new Box();
// alert(box.run());
// function Box(){
//  this.name="Lee";
// }
// function Desk(){
//  this.age=100;
// }
// function Table(){
//  this.level="AAAAA";
// }
// Desk.prototype=new Box();
// Table.prototype=new Desk();
// var table = new Table();
// var box = new Box();
// alert(Table.prototype.name);
// alert(Desk.prototype.name);
// alert(box.constructor === box.__proto__.constructor);
// var desk=new Desk();
// alert(Desk.prototype.constructor == Desk); //false
// alert(table.constructor === table.__proto__.constructor); //true
// function box(count){
//  for (var i = 0; i < count; i++) {}
//  var i;
//  alert(i);
// }
// box(2);
// (function(){
//  var age=100;
//  function run(){
//      return "运行中...";
//  }
//  Box=function(){};
//  Box.prototype.go=function(){
//      return age+run();
//  };
// })();
// var box=new Box();
// alert(box.go());
// if(confirm("请确定或者取消")){
//  alert("确定");
// }else{
//  alert("取消");
// }
// var num=prompt("请输入一个字",0);
// alert(num);
// print();
// open("http://www.baidu.com","baidu","left:300,top:300,width:300,height:300");
//窗口坐标
// if(typeof screenX != "undefined"){
//  alert(screenX+"  "+screenY);
// }else if(typeof screenLeft != "undefined"){
//  alert(screenTop+"  "+screenLeft);
// }
//窗口大小
// if(typeof innerWidth != "undefined"){
//  alert(innerWidth+" inner "+innerHeight);
// }else if(typeof document.documentElement.clientWidth != "undefined"){
//  alert(document.documentElement.clientWidth+" client "+document.documentElement.clientHeight);
// }
// alert(location.search);
// location.assign("http://www.baidu.com");
// location.href="http://www.baidu.com";
// alert(navigator.userAgent);
// for (var i = 0; i < navigator.plugins.length; i++) {
//  document.write(navigator.plugins[i].name+"<br>");
// }
// alert(box.tagName);
// alert(box.id);
// box.style.color="red";
// box.item(2).style.color="red";
// box.item(2).innerHTML=box.length;
window.onload = function() {


  // var name=document.getElementsByName("name1");
  // name[0].value="我的值变了。";
  // alert(name[0].getAttribute("type"));
  // name[0].removeAttribute("value");
  // var box=document.getElementById("box1");
  // var box=document.getElementsByTagName("div");
  // document.write(box.previousSibling.nodeName+"<br>");
  // document.write(box.previousSibling.nodeType+"<br>");
  // document.write(box.previousSibling.nodeValue+"<br>");
  // document.write(box.attributes["class"].nodeName+"<br>");
  // document.write(box.attributes["class"].nodeType+"<br>");
  // document.write(box.attributes["class"].nodeValue+"<br>");
  // document.write(box.childNodes[0].nodeName+"<br>");
  // document.write(box.childNodes[0].nodeType+"<br>");
  // document.write(box.childNodes[0].nodeValue+"<br>");
  // document.write(box.attributes.getNamedItem("class").nodeValue+"<br>");
  // alert(box.ownerDocument.nodeName);
  // alert(box.previousSibling.nodeValue);
  // var box5=document.createElement("div");
  // var text5=document.createTextNode("boxContent5");
  // box5.appendChild(text5);
  // box5.setAttribute("class","boxClass5");
  // box5.setAttribute("id","box5");
  // box.parentNode.insertBefore(box5,box);
  // box.parentNode.replaceChild(box5,box.nextSibling);
  // box.parentNode.removeChild(box.previousSibling.previousSibling);
  // alert(box.children.length);
  // alert(box.textContent);
  // alert(box.innerText);
  // alert(style.color);
  // var style=window.getComputedStyle?window.getComputedStyle(box1,null):box1.currentStyle;
  // alert(style.width+"<width height>"+style.height);
  // alert(box1.clientWidth+"client"+box1.clientHeight);
  // alert(box1.scrollWidth+"scroll"+box1.scrollHeight);
  // alert(box1.offsetWidth+"offset"+box1.offsetHeight);
  // alert(box1.clientLeft+"clientLeft"+box1.clientTop);
  // alert(box1.offsetLeft+"offsetLeft"+box1.offsetTop);
  // alert(box1.offsetParent);
  // var button=document.getElementById("button");
  // button.onclick=function(){
  //  alert(box1.scrollLeft+"scrollLeft"+box1.scrollTop);
  // };   
  // var button2=document.getElementById("button2");
  // button2.onclick=function(){
  //  box1.scrollTop=0;
  // };
  // box1.onclick=function(event){
  //  var e = event || window.event;
  //  alert(e.clientX+"client"+e.clientY+"\n"+
  //        e.offsetX+"offset"+e.offsetY+"\n"+
  //        e.screenX+"screen"+e.screenY);
  // };
  // alert(screen.width+"screen"+screen.height);
  // var box1=document.getElementById("box1");
  // var gbc=box1.getBoundingClientRect();
  // alert(gbc.top);
  // alert(document.documentElement.clientTop);
  // document.onmouseup=function(event){
  //  var event = event || window.event;
  //  switch(getButton(event)){
  //      case 0:
  //          if (event.shiftKey) { //ctrlKey,altKey
  //              alert("你按下了左键。shift");
  //          }else{
  //              alert("你按下了左键。");
  //          }
  //          break;
  //      case 2:
  //          if (event.shiftKey) {
  //              alert("你按下了右键。shift");
  //          }else{
  //              alert("你按下了右键。");
  //          }
  //          break;
  //  }
  // };
  // function getButton(event){
  //  if (event) {
  //      return event.button;
  //  }
  //  var event = window.event;
  //  switch(event.button){
  //      case 1:
  //          return 0;
  //      case 4:
  //          return 1;
  //      case 2:
  //          return 2;
  //  }
  // }
  // document.onkeyup=function(e){
  //  alert(e.keyCode);
  // };    
  // document.onkeypress=function(e){
  //  alert(e.charCode);
  // };
  // var box1=document.getElementById("box1");
  // box1.addEventListener("contextmenu",function(e){
  //  e.preventDefault();
  // },false);
  // window.onbeforeunload = function(event) { 
  //  return confirm("确定退出吗"); 
  // }
  // box1.addEventListener("mouseover",function(e){
  //  alert(e.relatedTarget);
  // },false);
  // box1.addEventListener("mouseout",function(e){
  //  alert(e.relatedTarget);
  // },false);
  // var button=document.getElementById("button");
  // var text=document.getElementById("text");
  // button.addEventListener("click",function(){
  //     alert(text.value);
  //     text.select();
  //  text.setSelectionRange(0,1);
  //  text.focus();
  // },false);
  // text.addEventListener("select",function(){
  //  alert(text.value.substring(text.selectionStart,text.selectionEnd));
  // },false);
  // var select1=document.getElementById("select1");
  // alert(select1.type);
  // button.addEventListener("click",function(){
  // alert(select1.selectedIndex);
  //  select1.selectedIndex=2;
  // },false);
  // var date=new Date();
  // date.setDate(date.getDate()+7);
  // document.cookie="user="+encodeURIComponent("李炎恢")+";expires="+date;
  // alert(decodeURIComponent(document.cookie));

  //IE--xml
  // function createXMLDOM(){
  //  var version=["MSXML2.DOMDocument.6.0","MSXML2.DOMDocument.3.0","MSXML2.DOMDocument"];
  //  for (var i = 0; i < version.length; i++) {
  //      try{
  //          var xmlDom=new ActiveXObject(version[i]);
  //          return xmlDom;
  //      }catch(e){

  //      }
  //  }
  //  throw new Error("您的系统不支持MSXML!");
  // }
  // var xmlDom=createXMLDOM();
  // xmlDom.loadXML("<root version='1.0'><user>Lee</user></root>");
  // alert(xmlDom.xml);
  // var user=xmlDom.getElementsByTagName('user')[0];
  // alert(user.tagName);
  // var user=xmlDom.selectSingleNode("root/user[1]");
  // alert(user.xml);

  // xmlDom.async=true;
  // xmlDom.onreadystatechange=function(){
  //  if(xmlDom.readyState == 4){
  //      if(xmlDom.parseError == 0){
  //          alert(xmlDom.xml);
  //      }else{
  //          throw Error("错误行号:"+xmlDom.parseError.line+
  //                      "错误解释:"+xmlDom.parseError.reason);
  //      }
  //  }
  // };
  // xmlDom.load("test.xml");


  //DOM2--xml
  // var xmlParser=new DOMParser();
  // var str="<root version='1.0'><user>Lee</user><user>Jin</user></root>";
  // var xmlDom=xmlParser.parseFromString(str,"text/xml");
  // alert(xmlDom.getElementsByTagName("user")[0].tagName);
  // var result=xmlDom.evaluate("root/user",xmlDom,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
  // alert(result.singleNodeValue.tagName);
  // var serializer = new XMLSerializer();
  // var xml=serializer.serializeToString(xmlDom);
  // alert(xml);

  //兼容字符创建XMLDOM
  // function strToXMl(str){
  //     var xmlDom=null;
  //     //DOM2
  //     if(typeof window.DOMParser != "undefined") {
  //         var xmlParser = new DOMParser();
  //         xmlDom = xmlParser.parseFromString(str,"text/xml");
  //         var error = xmlDom.getElementsByTagName("parsererror");
  //         if(error.length > 0) {
  //             throw new Error("DOM2 xml 解析错误"+error[0].textContent);
  //         }
  //     }else if (typeof window.ActiveXObject != "undefined") { //IE
  //         var versions = ["MSXML2.DOMDocument.6.0","MSXML2.DOMDocument.3.0","MSXML2.DOMDocument"];
  //         for (var i = 0; i < versions.length; i++) {
  //             try {
  //                 xmlDom = new ActiveXObject(versions[i]);
  //             } catch(e) {

  //             }
  //         }
  //         xmlDom.loadXML(str);
  //         if(xmlDom.parseError != 0){
  //             throw new Error("IE解析XML错误"+xmlDom.parseError.reason);
  //         }
  //     }else{
  //         throw new Error("无法解析XML,请升级浏览器.");
  //     }
  //     return xmlDom;
  // }

  // function serializeXML(xmlDom){
  //     var xml="";
  //     //w3c
  //     if(typeof window.XMLSerializer != "undefined") {
  //         var serializer = new XMLSerializer();
  //         xml = serializer.serializeToString(xmlDom);
  //     }else if(typeof xmlDom.xml != "undefined"){ //ie
  //         xml = xmlDom.xml;
  //     }else{
  //         throw new Error("无法解析XML字符,请升级浏览器");
  //     }
  //     return xml;
  // }
  // var xmlDom = strToXMl(str);
  // var xml = serializeXML(xmlDom);
  // console.log(xmlDom);

  // var box = '[{"name":"a","age":1},{"name":"b","age":2}]';
  // var json=JSON.parse(box);
  // console.log(json);
  // var box = [{"name":"a","age":1},{"name":"b","age":2}];
  // // var json=JSON.stringify(box,['age']);
  // var json = JSON.stringify(box,function(key,value){
  //     switch(key){
  //         case "name":
  //             return "Mr." + value;
  //             break;
  //         case "age":
  //             return value + "year";
  //             break;
  //         default:
  //             return value;
  //     }
  // },4);
  // alert(json);

  // IE6-AJAX
  // function createXMLDOM(){
  //  var version=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];
  //  for (var i = 0; i < version.length; i++) {
  //      try{
  //          var xmlDom=new ActiveXObject(version[i]);
  //          return xmlDom;
  //      }catch(e){

  //      }
  //  }
  //  throw new Error("您的系统不支持MSXML!");
  // }

  // var xhr=new XMLHttpRequest();
  // var xmlDom=null;
  // document.addEventListener("click",function(){
  //     xhr.open("get","test.xml",true);
  //     xhr.send(null);

  //     xhr.onreadystatechange=function(){
  //         if(xhr.readyState==4){
  //             if(xhr.status == 200){
  //                 alert(xhr.responseText);
  //                 // alert(xhr.getAllResponseHeaders());
  //                 // console.log(xhr.responseXML);
  //                 //xmlDom=xhr.responseXML;
  //             }else{
  //                 alert("失败: "+xhr.status+"原因: "+xhr.statusText);
  //             }
  //         }
  //     };
  // },false);
  /*
      //兼容ajax
      function ajax(obj){
          var xhr=new XMLHttpRequest();
          obj.url=obj.url+"?rand="+Math.random();
          obj.data=params(obj.data);
          if(obj.method === "get") {
              obj.url=obj.url+"&"+obj.data;
          }
          if (obj.async === true) {
              xhr.onreadystatechange=function(){
                  if(xhr.readyState == 4) {
                      callback();
                  }
              };
          }
          xhr.open(obj.method,obj.url,obj.async);
          if(obj.method==="post"){
              xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
              xhr.send(obj.data);
          }else if(obj.method === "get"){
              xhr.send(null);
          }
          if(obj.async === false){
              callback();
          }
          //回调函数
          function callback(){
              if(xhr.status == 200) {
                  obj.success(xhr.responseText);
              }else{
                  console.log("数据返回失败"+xhr.status+":"+xhr.statusText);
              }
          }
          //对象转网址hash
          function params(data){
              var arr=[];
              for(var i in data){
                  arr.push(encodeURIComponent(i)+"="+encodeURIComponent(data[i]));
              }
              return arr.join("&");
          }
      }

      ajax({
          method:"post",
             url:"test.php",
           async:true,
            data:{url:"baidu"},
         success:function(responseText){
                     alert(responseText);
                 },
      });
  */

};
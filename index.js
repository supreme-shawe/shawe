roll(1);
changecolor(1);
var a = 1;
var time;
var time1;
change(a);


 /**
 * 定时改变图片
 * author: xiao
 * date: 2019-11-12
 */
function change(a){
   time = setInterval(function e(){
   if(a > 3){
      a = 1;
   }
   roll(a);
   a++;
}, 5000);
}

/**
 * 点击后让图片停止滚动
 * author: xiao
 * date: 2019-11-12
 *  
 */
function stop(s){
   clearInterval(time);
   setTimeout(change(s),5000);
}

/**
 * 图片通过点击按钮改变
 * author: xiao
 * date: 2019-11-12
 */
function roll(n){
    if(n == 1){
      let sets = document.getElementById("image"+n);
      let sets1 = document.getElementById("image2");
      let sets2 = document.getElementById("image3");
      sets.style.display = "block";
      sets1.style.display = "none";
      sets2.style.display = "none";
      let light = document.getElementsByClassName('point1');
      let light2 = document.getElementsByClassName('point2');
      let light3 = document.getElementsByClassName('point3');
      light[0].style.backgroundColor = "black";
      light2[0].style.backgroundColor = "#fff";
      light3[0].style.backgroundColor = "#fff";
    } 
    else if(n == 2){
      let sets = document.getElementById("image"+n);
      let sets1 = document.getElementById("image1");
      let sets2 = document.getElementById("image3");
      sets.style.display = "block";
      sets1.style.display = "none";
      sets2.style.display = "none";
      let light = document.getElementsByClassName('point2');
      let light2 = document.getElementsByClassName('point1');
      let light3 = document.getElementsByClassName('point3');
      light[0].style.backgroundColor = "black";
      light2[0].style.backgroundColor = "#fff";
      light3[0].style.backgroundColor = "#fff";
    }
    else{
      let sets = document.getElementById("image"+n);
      let sets1 = document.getElementById("image1");
      let sets2 = document.getElementById("image2");
      sets.style.display = "block";
      sets1.style.display = "none";
      sets2.style.display = "none";
      let light = document.getElementsByClassName('point3');
      let light2 = document.getElementsByClassName('point1');
      let light3 = document.getElementsByClassName('point2');
      light[0].style.backgroundColor = "black";
      light2[0].style.backgroundColor = "#fff";
      light3[0].style.backgroundColor = "#fff";
    }
   //  stop(n);

}

/**
 * 改变点击之后界面显示与背景颜色改变
 * author: xiao
 * date: 2019-11-12
 */
function changecolor(x){
   var loginn = document.getElementById('font-login');
   var  regist = document.getElementById('font-regist');
   var  loginmenu = document.getElementById("login");
   var  registmenu = document.getElementById("regist");
   if(x == 1){
      loginn.style.backgroundColor = "#fff";
      loginn.style.color = "black";
      loginmenu.style.display = "block";
      regist.style.backgroundColor = "#ff4500";
      registmenu.style.display = "none";
   }
   else{
      loginn.style.backgroundColor = "#ff4500";
      loginmenu.style.display = "none";
      regist.style.backgroundColor = "#fff";
      registmenu.style.display = "block";
      regist.style.color = "black";
   }
}

/**
 * 用来判断是否输入的用户名与密码正确
 * author: xiao
 * date; 2019-11-14
 */
function ensure(){
   let user = document.getElementById("username").value;
   let psd = document.getElementById("passward").value;
   let uuu = localStorage.getItem("用户");
   let ppp = localStorage.getItem("密码");
   if(user == "xiaowei" && psd == "12345678"){
      window.location.href = "success.html";
   }
   else if(user == uuu && psd == ppp){
      window.location.href = "success.html";
   }
   else{
      alert("用户名或密码不正确,请重试");
      let uu = document.getElementById("username");
      let pp = document.getElementById("passward");
      pp.value = "";
   }
}


/**
 * 焦点事件(用户名)
 * author: xiao
 * date; 2019-11-14
 */
function  sureuser(){
   let tx = document.getElementById('tips1');
   tx.innerHTML = "";
   document.getElementById("username").style.border = "1px solid #3385ff";
   document.getElementById("username").style.height = 30 + "px";
}

/**
 * 焦点偏离blur事件(用户名)
 * author: xiao
 * date; 2019-11-14
 */
function inspectuser(){
   document.getElementById("username").style.border = "1px solid gray";
   document.getElementById("username").style.height = 25 + "px";
   let user = document.getElementById("username").value;
   let tx = document.getElementById('tips1');
   if(user == ""){
      tx.innerHTML = "*用户名不能为空*";
      tx.style.color = "red";
   }
}


/**
 * 焦点偏离blur事件(密码)
 * author: xiao
 * date; 2019-11-14
 */
function inspectpsd(){
   document.getElementById("passward").style.border = "1px solid gray";
   document.getElementById("passward").style.height = 25 + "px";
   let user = document.getElementById("passward").value;
   let tx = document.getElementById('tips2');
   if(user == ""){
      tx.innerHTML = "*密码不能为空*";
      tx.style.color = "red";
   }
}

/**
 * 焦点事件(密码)
 * author: xiao
 * date; 2019-11-14
 */
function surepsd(){
   document.getElementById("passward").style.border = "1px solid #3385ff";
   document.getElementById("passward").style.height = 30 + "px";
   let tx = document.getElementById('tips2');
   tx.innerHTML = "";
}


//用户注册事件

/**
 * 焦点事件(用户名)
 * author: xiao
 * date: 2019-11-15
 */
function registuser(){
   let tx = document.getElementById('name-validation');
   tx.innerHTML = "";
}

/**
 * 脱离焦点事件
 * author: xiao
 * date: 20119-11-15
 */
function inspectionuser(){
   let user = document.getElementById("name-input").value;
   let tx = document.getElementById("name-validation");
   let reguser = /^\s*\w{6,12}\s*$/;
   if(user == "" || user  == null){
      tx.innerHTML = "*用户名不能为空*";
      tx.style.color = "red";
   }
   else if(!reguser.test(user)){
      tx.innerHTML = "*请填写正确的用户名";
      tx.style.color = "red";
   }
   else{
      tx.innerHTML = "√  正确";
      tx.style.color = "green";
   }
}

/**
 * 焦点事件(密码)
 * author: xiao
 * date: 2019-11-15
 */
function registpsd(){
   let tx = document.getElementById('passward-validation');
   tx.innerHTML = "";
}


/***
 * 脱离焦点事件(密码)
 * author: xiao
 * date: 2019-11-15
 */
function inspectionpsd(){
   let psd = document.getElementById("passward-input").value;
   let tx = document.getElementById("passward-validation");
   let regpassward = /\w{8,18}/;
   if(psd == "" || psd == null){
      tx.innerHTML = "*密码名不能为空*";
      tx.style.color = "red";
   }
   else if(!regpassward.test(psd)){
      tx.innerHTML = "*请填写正确的密码";
      tx.style.color = "red";
   }
   else{
      tx.innerHTML = "√  正确";
      tx.style.color = "green";
   }
}

/**
 * 焦点事件(确认密码)
 * author: xiao
 * date: 2019-11-15
 */
function registpsd2(){
    let tx = document.getElementById("passward2-validation");
    tx.innerHTML = "";
}

/***
 *脱离焦点事件(确认密码)
 *author: xiao
 *date: 2019-11-15
 */
function inspectionpsd2(){
   let tx = document.getElementById('passward2-validation');
   let psd1 = document.getElementById("passward-input").value;
   let psd2 = document.getElementById("passward2-input").value;
   if(psd2 == "" || psd2 == null){
      tx.innerHTML = "*请填写确认密码*";
      tx.style.color = "red";
   }
   else if(psd1 != psd2){
      tx.innerHTML = "*两次输入的密码不一样";
      tx.style.color = "red";
   }
   else{
      tx.innerHTML = "√  正确";
      tx.style.color = "green";
   }
}

/**
 * 检查要注册的数据是否合理
 * author: xiao
 * date: 2019-11-15
 */

 function submit(){
     let user = document.getElementById('name-input').value;
     let psd1 = document.getElementById("passward-input").value;
     let psd2 = document.getElementById("passward2-input").value;
     let text1 = document.getElementById("passward-validation");
     let text2 = document.getElementById("passward2-validation");
     let reguser = /^\s*\w{6,12}\s*$/;
     let regpassward = /\w{8,18}/;
     if(!reguser.test(user) || !regpassward.test(psd1) || psd1 != psd2){
          alert("请确认填写了正确的信息");
          let psdd1 = document.getElementById("passward-input");
          psdd1.value = "";
          let psdd2 = document.getElementById("passward2-input");
          psdd2.value = "";
          text1.innerHTML = "";
          text2.innerHTML = "";
     }
     else{
          localStorage.setItem("用户",user);
          localStorage.setItem("密码",psd1);
         
          window.location.href = "success.html";
     }
 }

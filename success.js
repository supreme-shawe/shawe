let match = document.getElementById("match-information");
let indivisual = document.getElementById("indivisual-information");
let imagem = document.getElementById("image-match");
let textm = document.getElementById("text-match");
let imager = document.getElementById("image-regist");
let textr = document.getElementById("text-regist");
let con = document.getElementById("main-container");
let ss = document.getElementById("menu");
let width1 = con.offsetWidth;
console.log(width1);
let LL = con.offsetLeft;
console.log(LL);
let welcome = document.getElementById("welcome");
let containerM = document.getElementById("match-container");
let containerI = document.getElementById("information-container");
/**
 * 菜单图片效果
 * author: xiao
 * datee: 2019-11-23
 */
function widthchange(){ 
    con.style.left = LL + "px";
    con.style.width = width1+"px";
    if(LL >= 350){
        document.getElementById("operator").style.width = 400+"px";
    }
    else
   {
    document.getElementById("operator").style.width = 300+"px";
   }
    match.style.background = "#7b1fa2";
    indivisual.style.background = "#7b1fa2";
    document.getElementById("image-regist").src = "../images/个人.png";
    document.getElementById("image-match").src = "../images/电脑1.png";
    textm.style.fontSize = 15 + "px";
    textr.style.fontSize = 15 + "px";
    textm.style.color = "black";
    textr.style.color = "black";
    imager.style.height = 20+"px";
    imager.style.width = 20+"px";
    imagem.style.height = 20+"px";
    imagem.style.width = 20+"px";

    welcome.style.display = "block";
    containerI.style.display = "none";
    containerM.style.display = "none";
    document.getElementById("logout").style.display = "block";
}

let imagemenu = document.getElementById("image-menu");
imagemenu.onmouseover = function e(){
    document.getElementById("image-menu").src = "../images/menu1.png"
}
imagemenu.onmouseout = function e (){
    document.getElementById("image-menu").src = "../images/menu.png"
}

/**
 * 点击比赛信息之后的界面改变
 * author: xiao
 * date : 2019-11-23
 */

match.onmousedown = function e(){
    match.style.background = "#4a148c";
    indivisual.style.background = "#7b1fa2";
    imagem.style.height = 25+"px";
    imagem.style.width = 25 +"px";
    textm.style.fontSize = 18 + "px";
    textm.style.color = "#fff";


    imager.style.height = 20+"px";
    imager.style.width = 20+"px";
    textr.style.fontSize = 15 + "px";
    textr.style.color = "black";
    document.getElementById("operator").style.width = 200 + "px";
    document.getElementById("image-match").src = "../images/match.png";
    document.getElementById("image-regist").src = "../images/个人.png";
    if(LL > 350){
        var  wid = width1+200;
    }
    else{
        var  wid = width1+100;
    }
    ss.style.width = wid+"px";
    console.log(wid);
    con.style.left = 200+"px";
    welcome.style.display = "none";
    containerI.style.display = "none";
    containerM.style.display = "block";
    document.getElementById("logout").style.display = "none";
} 

/**
 * 点击个人信息之后界面的变化
 * author: xiao
 * date； 2019-11-23
 */
indivisual.onmousedown =function ee(){
    indivisual.style.background = "#4a148c";
    match.style.background = "#7b1fa2";
    imager.style.height = 25+"px";
    imager.style.width = 25 +"px";
    textr.style.fontSize = 18 + "px";
    textr.style.color = "#fff";


    imagem.style.height = 20+"px";
    imagem.style.width = 20+"px";
    textm.style.fontSize = 15 + "px";
    textm.style.color = "black";
    document.getElementById("operator").style.width = 200 + "px";
    document.getElementById("image-regist").src = "../images/private.png";
    document.getElementById("image-match").src = "../images/电脑1.png";

    // let wid = document.getElementById("main-container").offsetWidth;
    // wid += 100;

    if(LL > 350){
        var  wid = width1+200;
    }
    else{
        var  wid = width1+100;
    }
    ss.style.width = wid+"px";
    con.style.left = 200+"px";
    welcome.style.display = "none";
    containerI.style.display = "block";
    containerM.style.display = "none";
    document.getElementById("logout").style.display = "none";
}

/**
 *  退出系统
 * author: xiao
 * date: 2019-11-23
 */
function logout(){
    window.location.href = "index.html";
}


/**
 * 焦点事件
 * author: xiao
 * date: 2019-11-23
 */

function nameinput(){
    let tx = document.getElementById("name-inspect");
    tx.innerHTML = "";
}

function  departmentinput(){
    let tx = document.getElementById("department-inspect");
    tx.innerHTML = "";
}

function  majorinput(){
    let tx = document.getElementById("major-inspect");
    tx.innerHTML = "";
}

function  classinput(){
    let tx = document.getElementById("class-inspect");
    tx.innerHTML = "";
}

function  phoneinput(){
    let tx = document.getElementById("phone-inspect");
    tx.innerHTML = "";
}

function  emailinput(){
    let tx = document.getElementById("email-inspect");
    tx.innerHTML = "";
}


/**
 * 脱离焦点事件
 * author: xiao
 * date: 2019-11-23
 */


/**
 * 姓名验证
 * author: xiao
 * date： 2019-11-23
 */ 
function nameinspect(){
    let tx = document.getElementById("name-inspect");
    let namevalue = document.getElementById("name").value;
    let name = /\p{Unified_Ideograph}{2,4}/u;
    if(namevalue == null || namevalue ==""){
        tx.style.color = "red";
        tx.innerHTML = "*姓名不能为空*";
    }
    else if(!name.test(namevalue)){
        tx.style.color = "red";
        tx.innerHTML = "*请输入正确的姓名*";
    }
    else{
        tx.style.color = "green";
        tx.innerHTML = "*√ 正确*";
    }

}

/**
 * 姓名验证
 * author: xiao
 * date： 2019-11-23
 */ 
function departmentinspect(){
    let tx = document.getElementById("department-inspect");
    let departmentvalue = document.getElementById("departments").value;
    if(departmentvalue <= 1){
        tx.style.color = "red";
        tx.innerHTML = "*请选择*";
    }
    else{
        tx.innerHTML = "";
    }
}

/**
 * 专业格式验证
 * author: xiao
 * date： 2019-11-23
 */ 
function majorinspect(){
    let tx = document.getElementById("major-inspect");
    let majorvalue = document.getElementById("major").value;
    let major = /\p{Unified_Ideograph}{4,12}/u;
    if(majorvalue == null || majorvalue ==""){
        tx.style.color = "red";
        tx.innerHTML = "*专业不能为空*";
    }
    else if(!major.test(majorvalue)){
        tx.style.color = "red";
        tx.innerHTML = "*请输入正确的专业*";
    }
    else{
        tx.style.color = "green";
        tx.innerHTML = "*√ 正确*";
    }
}

/**
 * 班级格式验证
 * author: xiao
 * date： 2019-11-23
 */ 
function classinspect(){
    let tx = document.getElementById("class-inspect");
    let classvalue = document.getElementById("class").value;
    let classs = /[0-9]{4,5}/;
    if(classvalue == null || classvalue ==""){
        tx.style.color = "red";
        tx.innerHTML = "*班级不能为空*";
    }
    else if(!classs.test(classvalue)){
        tx.style.color = 'red';
        tx.innerHTML = "*请输入正确的班级*";
    }
    else{
        tx.style.color = "green";
        tx.innerHTML = "*√ 正确*";
    }
}


/**
 * 电话号码验证
 * author: xiao
 * date： 2019-11-23
 */ 
function phoneinspect(){
    let tx = document.getElementById("phone-inspect");
    let phonevalue = document.getElementById("phonenumber").value;
    let phone = /[0-9]{11}/;
    if(phonevalue == null || phonevalue == ""){
        tx.style.color = "red";
        tx.innerHTML = "*电话号码不能为空*";
    }
    else if(!phone.test(phonevalue)){
        tx.style.color = "red";
        tx.innerHTML = "*请输入正确的电话号码*";
    }
    else{
        tx.style.color = "green";
        tx.innerHTML = "*√ 正确*";
    }
}


/**
 * 邮箱格式验证
 * author: xiao
 * date： 2019-11-23
 */ 
function emailinspect(){
    let tx = document.getElementById("email-inspect");
    let emailvalue = document.getElementById("email").value;
    let email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if(emailvalue == null || emailvalue == ""){
        tx.style.color = "red";
        tx.innerHTML = "*邮箱地址不能为空*";
    }
    else if(!email.test(emailvalue)){
        tx.style.color = "red";
        tx.innerHTML = "*请输入正确的邮箱地址*";
    }
    else{
        tx.style.color = "green";
        tx.innerHTML = "√ 正确";
    }
}


/**
 * 信息验证
 * author: xiao
 * date: 2019-11-23
 */
function submit(){
    let namevalue = document.getElementById("name").value;
    let name = /\p{Unified_Ideograph}{2,4}/u;
    let departmentvalue = document.getElementById("departments").value;
    let majorvalue = document.getElementById("major").value;
    let major = /\p{Unified_Ideograph}{4,12}/u;
    let classvalue = document.getElementById("class").value;
    let classs = /[0-9]{4,5}/;
    let phonevalue = document.getElementById("phonenumber").value;
    let phone = /[0-9]{11}/;
    let emailvalue = document.getElementById("email").value;
    let email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if(name.test(namevalue) && departmentvalue > 1 && major.test(majorvalue) && classs.test(classvalue) && phone.test(phonevalue) && email.test(emailvalue)){
        alert("修改成功");
    }
    else{
        alert("请确认你输入了正确的信息");
        if(!name.test(namevalue)){
            document.getElementById("name").value = "";
        }
        if(departmentvalue <= 1 ){
            document.getElementById("departments").value = 1;
        }
        if(!major.test(majorvalue)){
            document.getElementById("major").value = "";
        }
        if(!classs.test(classvalue)){
            document.getElementById("class").value = "";
        }
        if(!phone.test(phonevalue)){
            document.getElementById("phonenumber").value = "";
        }
        if(!email.test(emailvalue)){
            document.getElementById("email").value = "";
        }
    }
}

function reset(){
    document.getElementById("name").value = "";
    document.getElementById("departments").value = 1;
    document.getElementById("major").value = "";
    document.getElementById("class").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("name-inspect").innerHTML = "";
    document.getElementById("department-inspect").innerHTML = "";
    document.getElementById("major-inspect").innerHTML = "";
    document.getElementById("class-inspect").innerHTML = "";
    document.getElementById("phone-inspect").innerHTML = "";
    document.getElementById("email-inspect").innerHTML = "";
}

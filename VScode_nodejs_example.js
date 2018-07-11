//@ts-check //加在檔案開頭 用於檢查 錯誤 EX :await 沒包含在async裡面 type錯誤 ...等
/**
 * @author BYS
 * @version 1.0.0
 * how to  use Extended by `todohighlight` 請先安裝 todohighlight
 * keyboard`F1` -> list -> ALL or TODO or FIXME -> output //使用TODO 表單
 * official VS code 註解其他用法
 * <a href ="https://code.visualstudio.com/docs/languages/javascript">VScode官方nodejs 快速功能</a>
 * <a href ="http://ntustproject.blogspot.com/2009/03/javadoc.html">javadoc 撰寫</a>
 * 可以把values 放進這邊 keyname= {@values #keyname}
 */
var memlist = {}
var keyid = 'id';
var keyname = 'name';
var keyacc = 'account';
var keypwd = 'password';
memlist[keyid] = 1;
memlist[keyacc] = 'account'
memlist[keypwd] = 'password'
/**
 * FIXME: 這個有貓並阿
 * 取得會員帳號{@code acc}
 * @param {Number} id 會員ID
 * @param {String} name 會員名稱
 * @returns {String} 會員帳號
 */
function acc(id, name) {
    return memlist.id;
}
/**
 * 取得會員密碼
 * @param {Number} id 會員ID
 * @returns {String} 會員密碼
 * TODO: 這個要修阿
 */
function pwd(id) {
    return memlist(id); //error 找不到memlist func
}
// keyboard `ctrl` + `.` 或是選取完按燈泡 可以變成新的function 

function sum(a, b) {
    return await awaitfunc(a, b);
}
/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
function awaitfunc(a, b) {
    return a;
}

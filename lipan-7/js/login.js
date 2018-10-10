function fnLogin() {
    var uname = document.getElementById("username");
    var upsw = document.getElementById("userpsw");
    var oError = document.getElementById("error_box");
    var isError = true;
    if (uname.value.length > 20 || uname.value.length < 6) {
        oError.innerHTML = "用户名请输入6-20位字符";
        isError = false;
        return;
    } else if ((uname.value.charCodeAt(0) >= 48) && (uname.value.charCodeAt(0) <= 57)) {
        oError.innerHTML = "首字符必须为字母";
        return;
    } else for (var i = 0; i < uname.value.charCodeAt(i); i++) {
        if ((uname.value.charCodeAt(i) < 48) || (uname.value.charCodeAt(i) > 57) && (uname.value.charCodeAt(i) < 97) || (uname.value.charCodeAt(i) > 122)) {
            oError.innerHTML = "必须为字母跟数字组成";
            return;
        }
    }


    if (upsw.value.length > 20 || upsw.value.length < 6) {
        oError.innerHTML = "密码请输入6-20位字符"
        isError = false;
        return;
    }
    window.alert("登录成功")
}
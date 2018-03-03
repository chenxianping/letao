/**
 * Created by Administrator on 2018/3/3.
 */
$(function(){
    //1、加载进度条插件
    //禁用进度环
    NProgress.configure({
        showSpinner: false
    })

    //发送ajax请求开始时加载进度条
    $(document).ajaxStart(function () {
        NProgress.start();
    });

    //ajax请求结束后关闭进度条
    $(document).ajaxStop(function () {
        setTimeout(function(){
            NProgress.done();
        },500)
    })


    //2、二级菜单的显示与隐藏
    //思路：找到二级分类的a标签
    $(".second").prev().on("click",function(){
        $(this).next().slideToggle();
    });

    //3、点击icon_menu，切换隐藏侧边栏
    $(".icon_menu").on("click",function(){
        $(".lt_aside").toggleClass("now");
        $(".lt_main").toggleClass("now");
    })

    //4、点击icon_logOut弹出模态框
    $(".icon_logOut").on("click",function(){
        //console.log(1);
        $("#logoutModal").modal("show");
    })

    //点击退出按钮 退出页面功能
    $(".btn_logOut").on("click",function(){
        //console.log(1);
        $.ajax({
            type:'get',
            url:'/employee/employeeLogout',
            dataType:'json',
            success:function(info){
                console.log(info);
                if(info.success==true){
                    location.href = "login.html";
                }
            }
        })
    });

    //如果不是login.html，发送ajax请求，查询管理员是否登录
    if(window.location.href.indexOf("login.html") == -1 ){
        $.ajax({
            type:'get',
            url:'/employee/checkRootLogin',
            dataType:'json',
            success:function(info){
                console.log(info);
                if(info.error === 400){
                    location.href = "login.html";
                }
            }
        })
    }
})


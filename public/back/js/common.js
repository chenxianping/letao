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
})


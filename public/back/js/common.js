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
})


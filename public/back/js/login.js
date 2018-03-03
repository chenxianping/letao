/**
 * Created by Administrator on 2018/3/2.
 */
/*入口函数总用：1、等待所有资源加载完毕
 *              2、防止全局变量污染*/
$(function(){
//    1、校验表单
    $("form").bootstrapValidator({
        fields:{
            //对应form表单中的name属性
            username:{
                validators:{
                    //校验非空
                    notempty:{
                        message:"用户名不能为空"
                    },

                    //校验长度
                    stringLength:{
                        min:2,
                        max:6,
                        message:"用户名长度应在2-6位"
                    },
                    callback:{
                        message:'用户名不存在'
                    }
                }
            },

            password:{
                validators:{
                    //校验非空
                    notempty:{
                        message:"密码不能为空"
                    },

                    //校验长度
                    stringLength:{
                        min:2,
                        max:6,
                        message:"密码长度应在2-6为"
                    },
                    callback:{
                        message:"密码错误"
                    }
                }
            },
        },


        //配置小图标, 成功 失败  校验中
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
    });

//    2、给注册表单验证成功事件，验证成功时阻止表单的默认提交，使用ajax请求
    $("form").on("success.form.bv",function(e){
        e.preventDefault();
        //console.log($(".form-horizontal").serialize());
        //发送ajax请求登录
        $.ajax({
            type:'post',
            url:'/employee/employeeLogin',
            data:$("form").serialize(),
            dataType:'json',
            success:function(info){
                console.log(info);
                if(info.error==1000){
                    //把username这个字段改成校验失败
                    $("form").data("bootstrapValidator").updateStatus("username", "INVALID", "callback");
                }
                if(info.error==1000){
                    //把passaword这个字段改成校验失败
                    $("form").data("bootstrapValidator").updateStatus("pasword", "INVALID", "callback");
                }
                if(info.success==true) {
                    location.href = "index.html";
                }
            }
        })
    })
})
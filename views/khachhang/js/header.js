$(document).ready(function () {
    $("#registernow").click(function () {
        $('#login-modal').modal('hide');
    });
    $("#loginbutton").click(function () {
        var postdata = {
            username: $("#username-modal").val(),
            password: $("#password-modal").val()
        }
        $.post("../../controllers/controllerlogin.php",postdata,function (data,status) {
            console.log(data);
            var $datares=JSON.parse(data);

            if($datares.mesage==='success'){

                if($datares.vaitro==='admin'){
                    alert($datares.vaitro);

                }
                else{
                    // alert($datares.vaitro);
                    location.reload('index.php');
                }
            }
            else {
                $("#message_dangnhap").text("Sai tài khoản hoặc mật khẩu");
            }


        });

    });
    $('#log_out').click(function () {
        $.post("../../controllers/controllerlogout.php",'',function (data,status) {
            console.log(data);
            location.reload('index.php');
        });
    });
    $('#buttonregister').click(function () {
        var datapost ={
            username_register :$('#username-registermodal').val(),
            password_register :$('#password-registermodal').val(),
            fullname_register :$('#fullname-registermodal').val(),
            email_register :$('#email-registermodal').val(),
            mobilephone_register :$('#mobilephone-registermodal').val(),
            address_register :$('#address-registermodal').val()

        }
        $.post('../../controllers/controllerRegister.php',datapost,function (data,status) {

        })
    });
})
$(document).ready(function() {
    $('#add-user-form').ajaxForm(function(res) {
        if ( res.rtn == 0 ){
            $('#output1').html(res.msg).addClass('alert-success').show().delay(1500).fadeOut();
            setTimeout('window.location.href="add_card"', 1500);
        }
        else {
            $('#output1').html(res.msg).addClass('alert-danger').show().delay(1500).fadeOut();
        }
    });

});

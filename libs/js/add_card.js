$(document).ready(function() {
    $('#add-card-form').ajaxForm(function(res) {
        if ( res.rtn == 0 ){
            $('#output1').html(res.msg).addClass('alert-success').show().delay(1500).fadeOut();
            setTimeout('window.location.href="cards"', 1500);
        }
        else {
            $('#output1').html(res.msg).addClass('alert-danger').show().delay(1500).fadeOut();
        }
    });

});

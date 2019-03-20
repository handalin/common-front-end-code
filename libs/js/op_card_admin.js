$(document).ready(function() {
    $('#borrow-form').ajaxForm(function(res) {
        if ( res.rtn == 0 ){
            $('#output-borrow').html(res.msg).addClass('alert-success').show().delay(1500).fadeOut();
            $('#curr_debt').text(res.data.curr_debt);
            $('#available_credit').text(res.data.available_credit);

            $('.form-input').val('');

            var ctime = res.data.ctime;
            var amount = res.data.amount;
            var note = res.data.note;
            var tid = res.data.tid;

            var new_record = "<span tid='" + tid + "' class='trans-record color-light-red'>" + ctime + " : &nbsp; -" + amount + "&nbsp; : &nbsp; " + note + " &nbsp;&nbsp; </span><br>";
            var $new_record = $(new_record);

            // alert(new_record);

            $('.transaction-title').after($new_record);
        }
        else {
            $('#output-borrow').html(res.msg).addClass('alert-danger').show().delay(1500).fadeOut();
        }
    });

    $('#pay-form').ajaxForm(function(res) {
        if ( res.rtn == 0 ){
            $('#output-pay').html(res.msg).addClass('alert-success').show().delay(1500).fadeOut();
            $('#curr_debt').text(res.data.curr_debt);
            $('#available_credit').text(res.data.available_credit);

            $('.form-input').val('');

            var ctime = res.data.ctime;
            var amount = res.data.amount;
            var note = res.data.note;
            var tid = res.data.tid;

            var new_record = "<span tid='" + tid + "' class='trans-record color-light-green'>" + ctime + " : &nbsp; +" + amount + "&nbsp; : &nbsp; " + note + " &nbsp;&nbsp; </span><br>";
            var $new_record = $(new_record);

            // alert(new_record);

            $('.transaction-title').after($new_record);
        }
        else {
            $('#output-pay').html(res.msg).addClass('alert-danger').show().delay(1500).fadeOut();
        }
    });

    $('body').on('click', '.trans-record', function(o){
        var $tr = $(this);
        var tid = $tr.attr('tid');
        var content = $tr.text();
        var cfm = confirm('确认删除记录 ' + content + ' 吗？');

        if (cfm) {
            $.ajax({
                url: '/api/card/op_revert',
                method: 'GET',
                data: {
                    tid: tid,
                },
                success: function(res){
                    if (res.rtn == 0){
                        alert(res.msg);

                        // clean the record
                        $tr.remove();

                        // update the info-zone
                        $('#curr_debt').text(res.data.curr_debt);
                        $('#available_credit').text(res.data.available_credit);
                    }
                    else {
                        alert(res.msg);
                    }
                },
            });
        }

    });

});

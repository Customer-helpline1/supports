$('.phoneNum').inputmask({
    mask: "(999) 999-9999",
    jitMasking: true,
    definitions: {
        '9': {
            validator: function (chrs, buffer, pos, strict, opts) {
                // Only allow digits
                return /\d/.test(chrs);
            }
        }
    }
});

$('.form-get-quote').on('submit', function (e) {
    //$('.btn-quote').on('click' , function(e){        
    var obj = $(this);
    e.preventDefault();
    var data = $(obj).serialize();
    var phoneNumberInput = obj.find('.phoneNum');
    if(phoneNumberInput.val().length < 14)
    {
        alert('Please enter correct number..');
        return
    }
    jQuery.ajax({
        url: window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + "sendmail.php",
        // For Demo
        // url: window.location.origin + '/lvm-track-html/v6/sendmail.php',
        // For Live
        // url: window.location.origin + '/sendmail.php',
        
        type: "POST",
        data: data,
        async: false, // Has to be false to be able to return response
        dataType: "json", // Has to be false to be able to return response
        success: function (response) {
            if (response.status == 1) {
                window.location = "https://ewebdesignusa.com/lp5/step-2.php?id=" + response.last_id;
                obj.trigger("reset");
            } else {
                return false;
            }

        },
        beforeSend: function () {
            // Loader.show();
        }
    });

    return false;
});

function showScrollbar() {
    document.body.style.overflow = 'auto'; // or 'scroll'
}

showScrollbar();


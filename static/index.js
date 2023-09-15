var date = new Date()
var new_date = date.toLocaleDateString('pt-BR')
let display_date= "Data: " + new_date

$(document).ready(function () {
    $("#display_date").html(display_date)
    $('#save_button').prop('disabled', true);
})

let predicted_emotion;
$(function () {
    $("#predict_button").click(function () {
        let input_data = {
            "text": $("#text").val()
        }
        $.ajax({
            type: 'POST',
            url: "/predict-emotion",
            data: JSON.stringify(input_data),
            dataType: "json",
            contentType: 'application/json',
            success: function (result) {





                
            },
            error: function (result) {
                alert(result.responseJSON.message)
            }
        });
    });
    $("#save_button").click(function () {



        
        }
        $.ajax({






        
            },
            error: function (result) {
                alert(result.responseJSON.message)
            }
        });

    });
})


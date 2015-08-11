$(document).ready(function() {
    
    function generateGrid(numb) {
        for (var i = 0; i < numb; i++) {
            for (j=0; j< numb; j++) {
                $('<div />', {
                    'class': 'field'
                }).appendTo('#container');
            };
        };
    
        $('.field').on('mouseenter', function() {
            $(this).css({'backgroundColor': '#FFB6C1'});
        });
    };

    generateGrid(16);

    $('button').on('click', function() {    //moze i $('button').click(function() {});
        var num = prompt("How many fields in a row?");
        $('.field').remove();   //old <divs> should be deleted first
        generateGrid(num);
        var containerSize = 480;
        var fieldSize = Math.floor(containerSize / num) - 2;    // take away 2 for borders
        $('.field').css({'height': fieldSize+'px',
                                  'width': fieldSize+'px'});
    });
    

});


$(document).ready(function() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        type: 'get',
        success: function(data, status, xhr) {
            fillSlider(data.slice(0, 8)); 
        },
        error: function() { alert('Oops!'); }
    });

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'get',
        success: function(data, status, xhr) {
            var modalText = data[1];
            
            $(`<h4>` + modalText.title + `</h4>
                <p>` + modalText.body + `</p>`).appendTo($('#modal-content'));
             
            $('.modal').modal();           
        },
        error: function() { alert('Oops!'); }
    }); 
})

function fillSlider(array) {
     $.each(array, function (key, item) {
            $(` <li>
                    <img src="` + item.url + `" class="img-responsive-slide">
                    <div class="caption right-align">
                    <h3>` + item.title + `</h3>
                    <h5 class="light grey-text text-lighten-3">` + item.id + `</h5>
                    </div>
                </li>`).appendTo($('#slider-list'));
            });
    $('.slider').slider();
    }


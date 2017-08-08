$(document).ready(function() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        type: 'get',
        success: function(data, status, xhr) {
            fillCarousel(data.slice(0, 10));
        },
        error: function() { alert('Oops!'); }
    });

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'get',
        success: function(data, status, xhr) {
            accordionFacts(data.slice(0, 5));                 
        },
        error: function() { alert('Oops!'); }
    });
})

function fillCarousel(array) {
    $.each(array, function (key, item) {
        $(`<li data-target="#carousel-example-generic" data-slide-to="` + item.id + `" class="carousel-list"></li>`).appendTo($('#carousel-indicators'));
   
        $(` <div class="item ">
                <img src="` + item.url + `" alt="Image" class="img-responsive">
                <div class="carousel-caption">` + item.title + `</div>
            </div>
            
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
             </a>`).appendTo($('#carousel-inner'));
        });

            $(".carousel .carousel-list").first().addClass("active");
            $(".carousel .item").first().addClass("active");
            $(".carousel").carousel({interval: 2000});
    }

function accordionFacts(array) {
     $.each(array, function (key, item) {
                $(`<div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne` + item.id + `">
                            <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne` + item.id + `" aria-expanded="false" aria-controls="collapseOne` + item.id + `">
                                ` + item.title + `
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne` + item.id + `" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne` + item.id + `">
                            <div class="panel-body">
                            ` + item.body + `
                            </div>
                        </div>
                    </div>`).appendTo($('#accordion'));
            });

             $(".panel .panel-collapse").first().addClass("in"); 
    }

function readMoreAlert() { alert('Read more'); }
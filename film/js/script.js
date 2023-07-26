$("#search-button").on("click" , function(){
    $.ajax({
        url : 'http://www.omdbapi.com',
        type : 'GET',
        dataType : 'json',
        data : {
            'apikey' : "12af6b81",
            's': $("#search-input").val()
        },
        success : function(result){
           if(result.Response == 'True'){
            let movies = result.Search;
            
            $.each(movies, function(i,data){
                $("#daftar-film").append(`<div class="col-4"><div class="card mb-3"><img src="`+ data.Poster +`" class="card-img-top" alt="bih"><div class="card-body"><h5 class="card-title">`+ data.Title +`</h5><p class="card-text">IMDB ID: `+ data.imdbID +`</p><h5 class="card-title">`+ data.Year +`</h5><a href="#" class="btn btn-primary justify-content-center">See More</a></div></div></div>`);
            });
           }

           else{
                $("#daftar-film").html(`
                    <h3 class="text-center">`+ result.Error +`</h3>`
                );
           };
        }
    });
});
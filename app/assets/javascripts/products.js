$(document).on('ready page:load', function() {
  $('#search-form').submit(function(e){
    e.preventDefault();
    var searchValue = $('#search').val();

    $.get('/products?search=' + searchValue)
      .done(function(data){
        console.log(data);
        $('#products').html(data);
      });

  });
});
    // $.ajax({
    //   url: '/products?search=' + searchValue
    //   type: 'GET'
    //   dataType: 'html'
    // }).done(function(data){
    //     $('#products').html(data);
    // });

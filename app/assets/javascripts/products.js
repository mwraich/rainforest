$(document).on('ready page:load', function() {
  $('#search-form').submit(function (){
    var searchValue = $('#search').val();
    $.getScript('/products?search=' + searchValue);
  });
});
//
// $(document).on('ready page:load', function() {
//   $('#search-form').submit(
//     function(e){
//     e.preventDefault();
    // var searchValue = $('#search').val();
    // $.ajax({
    //   url: '/products?search=' + searchValue
    //   type: 'GET'
    //   dataType: 'html'
    // }).done(function(data){
    //     $('#products').html(data);
    // });

$(document).on('ready page:load', function() {
  $('#search-form').submit(function (e){
    event.preventDefault();
    var searchValue = $('#search').val();

    $.getScript('/products?search=' + searchValue);
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      return alert('near bottom');
    }
  })
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

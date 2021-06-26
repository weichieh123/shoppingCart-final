/* slide down的商品列 */
$("document").ready(function () {
  $(".dropdownItems").click(function () {
    $(".dropdownItemsPanel").toggle();
    $("#dropdownBtn").toggleClass("down");
  });
});

/* 多選多的Checkbox與全選功能 */
$(".myCheckbox").click(function () {
  console.log($(this));
  $(this).toggleClass("checked");
});
$(".selectAll").click(function () {
  if ($(".selectAll").hasClass("checked")) {
    $(".selectOne").addClass("checked");
  } else {
    $(".selectOne").removeClass("checked");
  }
});

/* 多選一的Radio */
$(".myRadio").click(function () {
  console.log($(this));
  $(this).toggleClass("checked");
});
$(".myRadio").click(function () {
  console.log($(this));
  if ($(this).hasClass("checked")) {
    $(this).parent().siblings().children().first().removeClass("checked");
  }
});

// $('*').on('mouseover', function(){
//     $(this).addClass("animate__animated animate__pulse")
// })

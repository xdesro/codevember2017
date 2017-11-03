const thingsToSay = [
  "It's a lie!",
  "Huge success!",
  "You monster.",
  "This is your fault!",
  "You are not a good person!",
  "Seriously, wow.",
  "This was a triumph"
]
$('.plate').click(function () {
  const windowWidth = $(window).width();
  const windowHeight = $(window).height();
  const plateWidth = $(this).width();
  const plateHeight = $(this).height();

  let newTop = Math.random() * windowHeight;
  let newLeft = Math.random() * windowWidth;

  (newTop > (windowHeight / 2)) ? newTop -= 2 * plateHeight: newTop += plateHeight;
  (newLeft > (windowWidth / 2)) ? newLeft -= 2 * plateWidth: newLeft += plateWidth;

  if (!$('#alert').hasClass('first')) {
    $('#alert').addClass('first');
    $('#alert .text').text(thingsToSay[0]);
    $('.invitation').hide();

  } else {
    const randomThingToSay = thingsToSay[Math.floor(Math.random() * thingsToSay.length)];
    $('#alert .text').text(randomThingToSay);
  }
  $('#alert').addClass('active');

  const flash = setTimeout(function () {
    $('#alert').removeClass('active');
    clearTimeout(flash);


  }, 200);

  ;



  $(this).css({
    "top": newTop,
    "left": newLeft,
    "right": 'auto'
  })
})

$(() => {
  $('<div>').appendTo('.third-block').addClass('container').addClass('container-third');
  $('<section>').appendTo('.container-third').addClass('first-wrapper');
  $('<div>').appendTo('.first-wrapper').addClass('first-wrapper-logo');
  $('<div>').appendTo('.first-wrapper-logo').
    addClass('first-third-logo').
    css({ 'background-image': "url('../homework/img/ic-stat.png')" });
  $('<h2>').appendTo('.first-wrapper-logo').addClass('first-third-title').
    text('Seo Optimized');
  $('<div>').appendTo('.first-wrapper').addClass('third-text').
    text("Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of the type and scrambled it to make");
  $('<div>').appendTo('.first-wrapper').addClass('plus');
  $("<a href='#'>").appendTo('.first-wrapper').addClass('plus-one').text('+')

  $('<section>').appendTo('.container-third').addClass('second-wrapper');
  $('<div>').appendTo('.second-wrapper').addClass('second-wrapper-logo');
  $('<div>').appendTo('.second-wrapper-logo').
    addClass('second-third-logo').
    css({ 'background-image': "url('../homework/img/ic-screen.png')" });
  $('<h2>').appendTo('.second-wrapper-logo').addClass('second-third-title').
    text('Responsive');
  $('<div>').appendTo('.second-wrapper').addClass('third-text').
    text("Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of the type and scrambled it to make");
  $('<div>').appendTo('.second-wrapper').addClass('plus');
  $("<a href='#'>").appendTo('.second-wrapper').addClass('plus-one').text('+')

  $('<section>').appendTo('.container-third').addClass('third-wrapper');
  $('<div>').appendTo('.third-wrapper').addClass('third-wrapper-logo');
  $('<div>').appendTo('.third-wrapper-logo').
    addClass('third-third-logo').
    css({ 'background-image': "url('../homework/img/ic-cloud.png')" });
  $('<h2>').appendTo('.third-wrapper-logo').addClass('third-third-title').
    text('Cloud Services');
  $('<div>').appendTo('.third-wrapper').addClass('third-text').
    text("Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of the type and scrambled it to make");
  $('<div>').appendTo('.third-wrapper').addClass('plus');
  $("<a href='#'>").appendTo('.third-wrapper').addClass('plus-one').text('+')
});


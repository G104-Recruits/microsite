$(document).ready(function() {
  var sliders = {};

  var tempSliders = $('div.slider');
  var tempData;
  var tempSliderData;
  for (var i=0; i<tempSliders.length;i++) {
    tempSliderData = [];
    tempData = $(tempSliders[i]).find('div.items p');

    
    for (var y=0; y<tempData.length;y++)
      tempSliderData.push($(tempData[y]).text());

    sliders[i] = tempSliderData;
  }
  startSliders();
  
  function startSliders() {
    var tempSliders = $('div.slider');
    for (var i=0; i<tempSliders.length;i++) {
      tempData = $(tempSliders[i]).find('div.items p');
      tempData.remove();
      $(tempSliders[i]).attr("index", i);
      $(tempSliders[i]).find('div.items')[0].innerHTML += '<p cur=0>' + sliders[i][0] + '</p>';

      $(tempSliders[i]).find('.control.left').click(function(event) {
        moveSlider($(event.target).closest('div.slider').attr('index'), -1);
      });

      $(tempSliders[i]).find('.control.right').click(function(event) {
        moveSlider($(event.target).closest('div.slider').attr('index'), 1);
      });
    }
  }

  function moveSlider(index, amount) {
    var slider = $('div.slider')[index];
    var text = $(slider).find('div.items p');
    var cur = parseInt(text.attr("cur"));

    cur += amount;
    if (cur < 0)
      cur = sliders[index].length-1;
    else if (cur >= sliders[index].length)
      cur = 0;

    text.attr("cur", cur);
    text.fadeOut();
    setTimeout(() => { text.text(sliders[index][cur]).fadeIn(); }, 300);
  }
});
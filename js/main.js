$(document).ready(function() {
  var docsPath = 'docs/';
  var docs = [{name: 'MAS-E2-Relatorio-Visao.pdf', date: '08/05/2020'}];

  var row = $($('div#docs tbody tr')[0]);
  $('div#docs tbody tr').remove();

  docs.forEach(doc => {
    row.find('td[data-label="Documento"]').text(doc.name);
    row.find('td[data-label="Última Atualização"]').text(doc.date);
    row.find('td[data-label="Download"] a')[0].href =   docsPath + doc.name;
    
    row.appendTo($('div#docs tbody'));
  });

  $('span.openclose').click(function() {
    var menu = $('div.ui.left.fixed.vertical.inverted.menu');
    var page = $('div#page');
    menu.toggleClass("open");
    page.toggleClass("full");
  });
});
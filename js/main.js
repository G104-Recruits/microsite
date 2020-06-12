$(document).ready(function() {
  var docsPath = 'docs/';
  var docs = [{name: 'MAS-E2-Relatorio-Visao.pdf', date: '08/05/2020'},
              {name: 'MAS-E3-Relatorio de Analise.docx.zip', date: '22/05/2020'},
              {name: 'Apresentacao-Prototipo.mp4', date: '22/05/2020'},
              {name: 'MAS-E2-Relatorio-Visao-V2.pdf', date: '01/06/2020'},
              {name: 'MAS-E6.zip', date: '12/06/2020'}];
  var resources = [{name: 'Protótipo', date: '18/05/2020', path: 'https://www.figma.com/file/E9tT3gA1ITBCDN545vNFVQ/RECRUITS?node-id=43%3A468'},
                   {name: 'Protótipo Funcional', date: '12/06/2020', path: 'https://masrecruits.000webhostapp.com/'}];

  var row = $($('div#docs tbody tr')[0]);
  var temp;
  $('div#docs tbody tr').remove();

  docs.forEach(doc => {
    temp = $(row.clone());
    
    temp.find('td[data-label="Documento"]').text(doc.name);
    temp.find('td[data-label="Última Atualização"]').text(doc.date);
    temp.find('td[data-label="Download"] a')[0].href =   docsPath + doc.name;
    
    temp.appendTo($('div#docs tbody'));
  });

  resources.forEach(resource => {
    temp = $(row.clone());
    temp.find('td[data-label="Documento"]').text(resource.name);
    temp.find('td[data-label="Última Atualização"]').text(resource.date);
    temp.find('td[data-label="Download"] a').text("Ver");
    temp.find('td[data-label="Download"] a')[0].href = resource.path;
    
    temp.appendTo($('div#docs tbody'));
  });

  $('span.openclose').click(function() {
    var menu = $('div.ui.left.fixed.vertical.inverted.menu');
    var page = $('div#page');
    menu.toggleClass("open");
    page.toggleClass("full");
  });
});
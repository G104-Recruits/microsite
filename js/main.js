$(document).ready(function() {
  var docsPath = 'docs/';
  var docs = [{name: 'teste.doc', date: '07/05/2019'}];

  var row = $($('div#docs tbody tr')[0]);
  $('div#docs tbody tr').remove();

  docs.forEach(doc => {
    row.find('td[data-label="Documento"]').text(doc.name);
    row.find('td[data-label="Última Atualização"]').text(doc.date);
    row.find('td[data-label="Download"] a')[0].href =   docsPath + doc.name;
    
    row.appendTo($('div#docs tbody'));
  })

});
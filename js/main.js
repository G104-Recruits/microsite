$(document).ready(function() {
  var docsPath = 'docs/';
  var docs = ['teste.doc'];

  var row = $($('div#docs tbody tr')[0]);
  $('div#docs tbody tr').remove();

  docs.forEach(doc => {
    row.find('td[data-label="Documento"]').text(doc);
    row.find('td[data-label="Download"] a')[0].href =   docsPath + doc;
    
    row.appendTo($('div#docs tbody'));
  })

});
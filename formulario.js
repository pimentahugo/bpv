$(document) .ready(function () {
    $("#id_tipo_formulario2").on('change', function(){
    $('.formularios').hide();
    $('#' + this.value).show();
  })
$("#id_tipo_formulario").on('change', function(){
    $('.formulario').hide();
    $('#' + this.value).show();
  })
      jQuery('#send').click(function() {
      var user = jQuery(this).parents().find('input#field4').val();
      var title = "Voc� foi denunciado!"; // Assunto
      var message = [
        '[size=24]Mensagem autom�tica[/size]',
        '',
        'Ol�, esta mensagem � [b]autom�tica[/b], por favor, n�o responda.',
        'Voc� foi denunciado por mim atrav�s da [url=http://aaaaappp.forumeiros.com/h1-]Central de Den�ncias[/url] do servidor, por gentileza, procure a den�ncia no f�rum e verifique-a.'
      ].join('\r\n');
      jQuery.post('/privmsg', {
        folder: 'inbox',
        mode: 'post',
        post: '1',
        'username[]': user.split(','),
        subject: title,
        message: message
      }).done(function() {
        console.log("Enviado");
      }).fail(function() {
        console.log("Erro");
      });
    });
var inputs = $('#generated_form input');
inputs.on('keyup', verificarInputs);
function verificarInputs() {
    var preenchidos = true;  
    inputs.each(function () {
        if (!this.value) {
          preenchidos = false;
          // parar o loop, evitando que mais inputs sejam verificados sem necessidade
          return false;
        }
    });
    $('.button2').prop('disabled', !preenchidos);
}
    $('#apagar-td').click(function() {
          $('#generated_form input[type="text"], #generated_form textarea').val('');
  });
});
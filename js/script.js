$(document).ready(function() {
	$('.mascaraDataNascimento').mask('99/99/9999');
	$('.mascaraTelefone').mask('(99) 99999-9999');
	$('.mascaraCep').mask('99999-999');
	$('.mascaraCpf').mask('999.999.999-99');

	$('.mascaraDinheiroReal').priceFormat({
		prefix: 'R$ ',
		centsSeparator: ',',
		thousandsSeparator: '.'
	});
});
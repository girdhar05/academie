function submitForm(formname, submit_page, divid='')
{
	$('form[name='+formname+']').on('submit', function (e) {
        
		e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'includes/ajax/'+submit_page,
            data: $('form[name='+formname+']').serialize(),
            success: function (res) {
				result = JSON.parse(res);
				if (divid !== '')
				{
					$('#'+divid).html(result['message']).fadeIn().delay(3000).fadeOut();
				}
				if (result['url'] !== undefined)
				{
					window.location.href = result['url'];
				}
            },
			error: function (error) {
				result = error;
			}
        });
    });
}
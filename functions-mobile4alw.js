
function toggleElement(element)
{
	if ( $(element).hasClass('hidden') )
	{
		$(element).removeClass('hidden');
	}
	else
	{
		$(element).addClass('hidden');
	}
}

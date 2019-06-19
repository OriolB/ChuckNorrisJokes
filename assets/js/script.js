$(function (){
	
	getJoke(); 
	
	$('#refreshjoke').on('click', function(){
		getJoke();	
	});
	
	function getJoke(){
		var $jokegoeshere = $('#jokegoeshere');
		$.ajax({
			type:'GET',
			url: 'http://api.icndb.com/jokes/random',
			dataType:'json',
			success: function (jokegoeshere) {
                            $.each(jokegoeshere, function(i,order){
                                $jokegoeshere.html(order.joke);
                            });
			}
		});		
	}
	
});


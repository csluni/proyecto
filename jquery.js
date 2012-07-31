$(document).ready(function(){
					
		
//EFECTO DE LOS ENLACES (CAMBIO DE COLOR)
//############################################

		$("a").mouseover(function(event){																//toma todos los enlaces 
									$("#caja").addClass("clasecss");										//agregar efecto css
			});
			
			$("a").mouseout(function(event){
									  $("#caja").removeClass("clasecss");
			});
											

//CREAR BOTONES DE HTML EN JQUERY
//############################################
											
			$('<input type="button" value="toggle" id="hideButton">').insertAfter('img');  //creo el boton toggle
			
			$('<input type="button" value="algo" id="boton">').insertAfter('img');  // creo el boton algo
										
									
//EFECTO  DEL BOTON TOGGLE
//############################################
		
			$('#hideButton').click(function() {																
									$('img').toggle('slow', function() {
												});

									$('p').html('good bye, cruel paragraphs!');
									
									
								//	if($('img').is(':visible')){
								//	$('img').hide(); 		
								//	}				
								//	else{				
								//	$('img').show(); 				
								//	} 
									
			});
						
									
//EFECTO DEL BOTON ALGO
//############################################
										
			$("#boton").click(function(){
									$('img').fadeOut(10000);
			});
										
										
//EFECTO DEL SPOILER
//############################################
										
			$('.spoiler').hide();
			
			$('<span class="revealer">Tell me!</span>').insertBefore('.spoiler');
					
			$('.revealer').click(function() {
										$(this).hide();
										$(this).next().fadeIn();
			});
					

//ANIMACION DEL PARRAFO
//############################################
					
			$('p:first').animate(
					{
					height: '+=100px',
					backgroundColor: 'green'
					},
					{
					duration: 'slow',
					easing: 'swing',
					complete: function() {alert('done!');},
					queue: false
					}
			);
});  
				
	
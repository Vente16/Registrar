$(document).ready(function(){
    
    
   
    
    
    
  $('.Agregar').click(function(){
      
      var codigo = $('#codigo').val();
      var cantidad = $('#cantidad').val();
      
     
       $.post('Consultar.jsp',{"Codigo":codigo,"Cantidad":cantidad},function(datos){
            
            
           $('.tabla').append('<tr>'+datos+'</tr>');
          
           
             $('.Eliminar').click(function(){
          
               $(this).parents('tr').remove();
              
              });   
   
        });  
   
      
   
   });
    
    
    
    
});


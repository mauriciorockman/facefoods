<?php

require_once('../db.class.php');
include '../config.php';

// database connection----------------------------------------------------
$objDb = new db();
$link = $objDb->conecta_mysql();
//-------------------------------------------------------------------------

?>


<!DOCTYPE html>
<html>
    <head>
        <title>Dashboard</title>
        <!-- jquery - link cdn -->
		<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
		
		<!-- jquery (play sound) - link cdn -->
		<script src='https://cdn.rawgit.com/admsev/jquery-play-sound/master/jquery.playSound.js'></script>

		<!-- bootstrap - link cdn -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
		
		<!-- CSS Styles -->
		<link rel="stylesheet" href="../styles/styles.css">
		
		
		<script>
		
		$(document).ready(function(){
		var old_count = 0;

		setInterval(function(){    
		    $.ajax({
		        type : "POST",
		        url : "notify.php",
		        success : function(data){
		            if (data > old_count) {
		               $.playSound("../assets/notification.mp3");
		               old_count = data;
		               updateOrders();
		           }
		        }
		    });
		},1000);
		
		
		function updateOrders(){
		   $.ajax({
					url: 'get_orders.php',
					success:function(data){
						$('#orders').html(data)
							$(".btn_order").click(function(){
                    		   var client_id = $(this).data('client_id');
                    		   $.ajax({
                    		      url: 'send_message.php',
                    		      method: 'post',
                    		      data: {id_facebook : client_id},
                    		      success: function(data){
                    		          alert("confirmação enviada com sucesso!")
                    		      }
                    		   });
							});
					}
					}); // -> function updateOrders
				}
		
	
		    
		
		
});

	</script>
    </head>

<body>
    
    <div id="orders" class="list-group">
	    			
    </div>
    
   
    
    
    
    <!-- bootstrap js -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</body>

</html>
<?php
    $psid = $_GET['psid'];
?>


<html>

<head>
    <title>Super Pizza</title>
    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/styles/styles.css">
    <meta charset='utf-8'>
</head>

<body class="container">
<script>

var item_quantity = 0;
var attribute_selection_order = 0;
var selected_food_category ;

var psid = <?php echo $psid; ?>;

var pedido = { 
	"psid": <?php echo $psid; ?>, 
	"item_quantity" : 0, 
	"items": [
				{
				"product" : "",
				"price" : 0,
				"n_attributes": 2,
				"attributes" : [
									{
										"attribute" :"",
										"price" : 0
									},
									{
										"attribute" :"",
										"price" : 0
									}
								]
				},
				{
				"product" : "",
				"price" : 0,
				"n_attributes": 2,
				"attributes" : [
									{
										"attribute" :"",
										"price" : 0
									},
									
									{
										"attribute" :"",
										"price" : 0
									}
								]		
				}

			]
};

// SDK do Facebook
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.com/en_US/messenger.Extensions.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'Messenger'));
    
    
// JQuery Start
    $(document).ready(function(){
        
         
        $.ajax({
           type: 'post',
           url: '/get_menu.php', // script para recuperar as os items do cardápio
           data: {restaurant_id : '1'}, // envia a ID do restaurante
           success: function(data){
               $('#menu').html(data);
               $("[data-selection_order]").hide();
           }
        });
       
       
      $('#concluir').click(function(){
         $.ajax({
             type: 'post',
             url: '/get_orders_json.php',
             data: pedido,
             success: function (data){
                 MessengerExtensions.requestCloseBrowser(function() {}, function(a) {})
             }
         });  
       });
       

       
        $(document).on( 'click', '.food', function () {
            selected_food_category = $(this).data('food_category_id');
 
            item_quantity += 1;
            $('#product_list').hide();
            $('[data-attribute_type_id='+selected_food_category+'] > [data-selection_order='+attribute_selection_order+']').show();
        });
        
        
        $(document).on( 'click', '#attributes', function () {
            $('[data-attribute_type_id='+selected_food_category+'] > [data-selection_order='+attribute_selection_order+']').hide();
            attribute_selection_order += 1;
            $('[data-attribute_type_id='+selected_food_category+'] > [data-selection_order='+attribute_selection_order+']').show();
        });
         
         
    });
    
</script>


<div class="row col-sm-12" id="menu" style="margin-bottom: 10px;">
    
   
    
</div>

  <hr>
    <br/>
    <br/>
    <br/>
    
<div class="row">
  
    <input id="user" hidden value="1455054381290329">
    <div class="col-xs-1 col-sm-1 col-md-2"> </div>
    <div class="col-xs-10 col-sm-10 col-md-8">
        <button id="concluir" class="btn btn-primary">Concluir</button>
    </div>
    <div class="col-xs-1 col-sm-1 col-md-2"> </div>
</div>
</div>
</body>

</html>

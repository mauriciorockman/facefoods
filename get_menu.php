<?php

    require_once('db.class.php');
    
    $objDb = new db();
	$link = $objDb->conecta_mysql();
	
	$restaurant_id = $_POST['restaurant_id'];
	$restaurant_id = '1';
	
	$categories = array(); // nomes das categorias de produtos
	$categories_ids = array(); // IDs das categorias de produtos
	
	$attributes_types = array(); // nomes dos tipos de atributos
	$attributes_types_ids = array(); // IDs dos tipos de atributos
	$attr_types_food_cat = array(); // categorias de produtos que podem receber esse atributo
	
	// recuperar categorias de produtos------------------------------------------------------------------
	$sql = "SELECT name, food_category_id FROM food_categories WHERE restaurant_id=$restaurant_id";
	$qry = mysqli_query($link, $sql);
	
	while( $result = mysqli_fetch_array($qry, MYSQLI_ASSOC)){
	        $categories[] = $result['name'];
	    	$categories_ids[] = $result['food_category_id'];
	    	
	}
	
	$n_categories = sizeof($categories); // número de categorias de produtos
	
	//recuperar atributos ---------------------------------------------------------------------------------
	
	$sql = "SELECT attribute_type_id, type, food_category_id FROM attribute_type WHERE restaurant_id=$restaurant_id";
	$qry = mysqli_query($link, $sql);
	
	while( $result = mysqli_fetch_array($qry, MYSQLI_ASSOC)){
	    	
	    	$attributes_types[] = $result['type'];
	    	$attributes_types_ids[] = $result['attribute_type_id'];
	    	$attr_types_food_cat[] = $result['food_category_id'];
	    	
	}
	
	$n_attributes_types = sizeof($attributes_types); // número de categorias de produtos
	
	
	
	echo '<div id="product_list">'; // abertura do container do menu
	
	// loop para varredura dos items do menu----------------------------------------------------------------------------------------
	for($i=0; $i<$n_categories; $i++){
	    
	    $sql = "SELECT name, description, price FROM foods where restaurant_id=$restaurant_id and food_category_id= $categories_ids[$i]";
    	$result = mysqli_query($link, $sql);
    	
    	echo '<h3>'.$categories[$i].'</h3><hr>';
    	
        while($food = mysqli_fetch_array($result, MYSQLI_ASSOC)){
    	    echo '<a href="#" class="list-group-item food" data-product_type="main" data-food_category_id="'.$categories_ids[$i].'"data-food_name="'.$food['name'].'" data-price="'.$food['price'].'">';
    	    echo '<strong>'.$food['name'].'</strong>';
    	    echo '</br>';
    	    echo '<small>'.$food['description'].'</small>';
    	    echo '<p class="pull-right price">';
    	    echo 'R$'.$food['price'];
    	    echo '</p>';
    	    echo '<div class="clearfix"></div>';
    	    echo '</a>';
    	}
	}
	
	echo '</div>'; // fechamento do container do menu--------------------------------------------------------------------------------------------

	
	echo '<div id="attributes">'; // abertura do container dos atributos
	
	// loop para varredura dos atributos----------------------------------------------------------------------------------------
	for($i=0; $i<$n_attributes_types; $i++){
	    
	    $sql = "SELECT name, description, price, attribute_type_id FROM attributes where attribute_type_id=$attributes_types_ids[$i] ORDER BY price ASC";
    	$result = mysqli_query($link, $sql);
    	
    	
    	
    	echo '<div data-attribute_type_id="'.$attr_types_food_cat[$i].'">'; // container de um tipo específico de atributo
        	echo '<div data-selection_order="'.$i.'">';
    	
    	
    	echo '<h3>'.$attributes_types[$i].'</h3><hr>';
    	
    	 while($food = mysqli_fetch_array($result, MYSQLI_ASSOC)){
    	    echo '<a href="#" class="list-group-item attribute" data-product_typ="attribute" data-food_name="'.$food['name'].'" data-price="'.$food['price'].'">';
    	    echo '<strong>'.$food['name'].'</strong>';
    	    echo '</br>';
    	    echo '<small>'.$food['description'].'</small>';
    	    echo '<p class="pull-right price">';
    	    echo 'R$'.$food['price'];
    	    echo '</p>';
    	    echo '<div class="clearfix"></div>';
    	    echo '</a>';
    	}
    	
    		echo '</div>'; // fechamento do container específico de um produto-
    	echo '</div>'; // fechamento do container específico de um produto--------------------------------------------------------------------------------------------

       
	}
	
	echo '</div>'; // fechamento do container do menu--------------------------------------------------------------------------------------------



























/*


	
	echo "-------------------------<br/> <br/> <br/> <br/>";
	$sql = 'SELECT * FROM foods where restaurant_id=1 and food_category_id=1';
	$result = mysqli_query($link, $sql);
	
	echo '<div id="product_list">';
	echo 'PIZZAS <hr/>'; 
	while($food_list = mysqli_fetch_array($result, MYSQLI_ASSOC)){
	    echo '<a href="#" class="list-group-item food-menu" data-food_category_id="1" data-food_name="'.$food_list['name'].'" data-price="'.$food_list['price'].'">';
	    echo '<strong>'.$food_list['name'].'</strong>';
	    echo '</br>';
	    echo '<small>'.$food_list['description'].'</small>';
	    echo '<p class="pull-right price">';
	    echo 'R$'.$food_list['price'];
	    echo '</p>';
	    echo '<div class="clearfix"></div>';
	    echo '</a>';
	}
	
		
	$sql = 'SELECT * FROM foods where restaurant_id=1 and food_category_id=2';
	$result = mysqli_query($link, $sql);
	
	echo '<br/> <br/> BEBIDAS <hr/>'; 
	while($food_list = mysqli_fetch_array($result, MYSQLI_ASSOC)){
	    echo '<a href="#" class="list-group-item food-menu" data-food_category_id="2" data-food_name='.$food_list['name'].' data-price='.$food_list['price'].'>';
	    echo '<strong>'.$food_list['name'].'</strong>';
	    echo '</br>';
	    echo '<small>'.$food_list['description'].'</small>';
	    echo '<p class="pull-right price">';
	    echo 'R$'.$food_list['price'];
	    echo '</p>';
	    echo '<div class="clearfix"></div>';
	    echo '</a>';
	}
	
	echo '</div>';
	
	echo '<div id="borda">';
	
	$sql = 'SELECT name, price
            FROM attributes
            LEFT JOIN attribute_type ON attribute_type.attribute_type_id = attributes.attribute_type_id
            WHERE restaurant_id =1
            AND attribute_type.attribute_type_id =1 ';
	
	$result = mysqli_query($link, $sql);
	
		echo '<br/> <br/> ESCOLHA A BORDA <hr/>'; 
	while($food_list = mysqli_fetch_array($result, MYSQLI_ASSOC)){
	    echo '<a href="#" class="list-group-item food-menu" data-food_category_id=3>';
	    echo '<strong>'.$food_list['name'].'</strong>';
	    echo '<p class="pull-right price">';
	    echo 'R$'.$food_list['price'];
	    echo '</p>';
	    echo '<div class="clearfix"></div>';
	    echo '</a>';
	}
	
	echo '</div>';
	
	
	echo '<div id="sabor">';
	
	$sql = 'SELECT name, price
            FROM attributes
            LEFT JOIN attribute_type ON attribute_type.attribute_type_id = attributes.attribute_type_id
            WHERE restaurant_id =1
            AND attribute_type.attribute_type_id =2 ';
	
	$result = mysqli_query($link, $sql);
	
		echo '<br/> <br/> ESCOLHA O SABOR <hr/>'; 
	while($food_list = mysqli_fetch_array($result, MYSQLI_ASSOC)){
	    echo '<a href="#" class="list-group-item food-menu" data-food_category_id=4>';
	    echo '<strong>'.$food_list['name'].'</strong>';
	    echo '<p class="pull-right price">';
	    echo '+ R$'.$food_list['price'];
	    echo '</p>';
	    echo '<div class="clearfix"></div>';
	    echo '</a>';
	}
	
	echo '</div>';

?>

*/
<?php

	require_once('../db.class.php');
	include '../config.php';

	$objDb = new db();
	$link = $objDb->conecta_mysql();

	$sql = "SELECT * FROM orders WHERE restaurant_id = '$restaurant_id' AND order_status = 'NEW_ORDER'" ;
	$resultado_id = mysqli_query($link, $sql);


	if($resultado_id){
		while($registro = mysqli_fetch_array($resultado_id, MYSQLI_ASSOC)){
			// --> O MYSQLI_ASSOC busca somente as chaves com "nomes"
			echo '<a href="#" class="list-group-item">';
				echo '<strong> '.$registro['order_name'].' </strong>';
				echo '<br/>';
				echo 'Endereço: '.$registro['order_address'];
				echo '<br/>';
				echo 'Telefone: '.$registro['order_phone'];
				echo '<br/>';
				echo 'Forma de Pagamento: '.$registro['order_payment_method'];
				echo '<br/>';
				echo 'Tipo de endereço: '.$registro['order_house_type'];
				echo '<br/>';
				echo '<strong> ITENS PEDIDOS </strong>';
				echo '<hr>';
				
				
					// varredura dos itens comprados
					$sql_order_items = 'SELECT * FROM order_items WHERE order_id = 40' ;
					$result_order_items = mysqli_query($link, $sql_order_items);

					
					while($order_items_entries = mysqli_fetch_array($result_order_items, MYSQLI_ASSOC)){
					
						$food_id = (int)$order_items_entries['food_id'];
						var_dump($food_id);
						$sql_foods_list = 'SELECT * FROM foods where food_id = $food_id';
						$result_foods_list = mysqli_query($link, $sql_foods_list);

						while($food_list_entries = mysqli_fetch_array($result_foods_list, MYSQLI_ASSOC)){
							
							echo $food_list_entries['name'].'<br/>';
						}
					}
				
				echo '<p class="list-group-item-text pull-right"> ';
					echo '<button type="button" id="btn_order_'.$registro['id'].'" class="btn btn-default btn_order" data-client_id="'.$registro['client_id'].'">Confirm</button> ';
					// --> o HTML5 permite criar atributos personalizados usando o prefixo -data
				echo '</p>';
				echo '<div class="clearfix"></div>';
			echo '</a>';
		}
	}else{
		echo 'Erro na consulta de tweets no banco de dados!';
	}




?>
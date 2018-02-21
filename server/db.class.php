<?php
	
	class db {
		private $host = 'localhost';
		private $usuario = 'root';
		private $senha = '';
		private $database = 'facefoods';



		public function conecta_mysql(){

			// conexão com BD
			$con = mysqli_connect($this->host, $this->usuario, $this->senha, $this->database);

			// definição do charset
			mysqli_set_charset($con, 'utf8');

			if(mysqli_connect_errno()){
				echo 'Houve um erro de conexão ao banco de dados: '.mysqli_connect_error();
			}

			return $con;
		}
	}


?>
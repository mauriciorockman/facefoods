app.run(function($rootScope){
    $rootScope.pizzaData = {
        "combos" : 
        [
            {
                "imagem" : "img1.jpg",
                "titulo" : "PIZZA GRANDE SALGADA + PIZZA DOCE PEQUENA + REFRIGERANTE 2L",
                "descricao" : "Descrição dessa promoção",
                "preco" : "65"
            },
            {
                "imagem" : "img1.jpg",
                "titulo" : "PIZZA GIGANTE SALGADA + PIZZA DOCE PEQUENA + REFRIGERANTE 2L",
                "descricao" : "Descrição dessa promoção",
                "preco" : "75"
            }
    
        ],
        "pizzas" :
            [
                {
                    "tamanhos" : 
                        [
                            {
                                "titulo" : "Pizza Broto",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20",
                                "nsabores" : "1"
                                
                                
                            },
                            {
                                "titulo" : "Pizza Pequena",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20",
                                "nsabores" : "1"
                                
                            },
                            {
                                "titulo" : "Pizza Média",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20",
                                "nsabores" : "2"
                                
                            },
                            {
                                "titulo" : "Pizza Grande",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20",
                                "nsabores" : "3"
                                
                            },
                            {
                                "titulo" : "Pizza Gigante",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20",
                                "nsabores" : "4"
                                
                            }
                        ]
    
                },
                {
                    "opcoes": 
                        [
                            {
                                "bordas":
                                [
                                    {
                                        "borda" : "Catupiry",
                                        "valor" : "5"
                                    },
                                    {
                                        "borda" : "Cheddar",
                                        "valor" : "5"
                                    },
                                    {
                                        "borda" : "Sem Borda",
                                        "valor" : ""
                                    }
                                ]
                            },
                            {
                                "massas": 
                                    [
                                        {
                                            "massa" : "Massa Fina",
                                            "valor" : ""
                                        },
                                        {
                                            "borda" : "Massa Média",
                                            "valor" : ""
                                        },
                                        {
                                            "borda" : "Massa Grossa",
                                            "valor" : ""
                                        }
                                    ]
                            }
                        ]
    
                },
                {
                    "sabores_salgados":
                        [
                            {
                                "sabor" : "ALHO E ÓLEO",
                                "descricao" : "feita com alho frito e molho de alho",
                                "valor": "",
                                "id" : "1",
                                "selected" : false
                            },
                            {
                                "sabor" : "AIPIM COM BACON",
                                "descricao" : "molho, purê de aipim e bacon",
                                "valor": "",
                                "id" : "2",
                                "selected" : false
                            },
                            {
                                "sabor" : "BACON",
                                "descricao" : "molho, mussarela e bacon",
                                "valor": "",
                                "id" : "3",
                                "selected" : false
                            },
                            {
                                "sabor" : "BAIANA",
                                "descricao" : "molho, mussarela, calabresa, molho de pimenta, ovos e cebola",
                                "valor": "",
                                "id" : "4",
                                "selected" : false
                            },
                            {
                                "sabor" : "BOLONHESA",
                                "descricao" : "coxão mole moído sem nenhuma gordura, milho e parmesão.",
                                "valor": "",
                                "id" : "5",
                                "selected" : false
                            },
                            {
                                "sabor" : "BRASILEIRA",
                                "descricao" : "frango, presunto, tomate e queijo minas",
                                "valor": "",
                                "id" : "6",
                                "selected" : false
                            },
                            {
                                "sabor" : "BRÓCOLIS",
                                "descricao" : "com bacon ou alho",
                                "valor": "",
                                "id" : "7",
                                "selected" : false
                            },
                            {
                                "sabor" : "CALABRESA",
                                "descricao" : "calabresa fatiada com ou sem cebola",
                                "valor": "",
                                "id" : "8",
                                "selected" : false
                            },
                            {
                                "sabor" : "CATUPERU",
                                "descricao" : "peito de peru fatiado com catupiry®",
                                "valor": "",
                                "id" : "9",
                                "selected" : false
                            },
                            {
                                "sabor" : "CHAMPIGNON",
                                "descricao" : "champignons de primeira fatiados.",
                                "valor": "",
                                "id" : "10",
                                "selected" : false
                            },
                            {
                                "sabor" : "ALEMÃ",
                                "descricao" : "lombo alemão com champignon",
                                "valor": "3",
                                "id" : "11",
                                "selected" : false
                            },
                            {
                                "sabor" : "AMALFITANA",
                                "descricao" : "salada de alcachofra e mussarela de búfala",
                                "valor": "2",
                                "id" : "12",
                                "selected" : false
                            },
                            {
                                "sabor" : "ARGENTINA",
                                "descricao" : "mignon, palmito e chimichurri",
                                "valor": "2",
                                "id" : "13",
                                "selected" : false
                            },
                            {
                                "sabor" : "GREGA",
                                "descricao" : "mussarela de búfala, tomates secos, queijo minas, azeitonas Azapa, gorgonzola, um toque de manjericão e Catupiry.",
                                "valor": "4",
                                "id" : "14",
                                "selected" : false
                            }
                        ]
                },
                {
                    "sabores_doces": 
                        [
                                {
                                    "sabor" : "AMAZÔNIA",
                                    "descricao" : "açaí com leite condensado.",
                                    "valor": "",
                                    "id" : "50"
                                },
                                {
                                    "sabor" : "BANANA AO RUN",
                                    "descricao" : "banana, chocolate preto ou branco e licor de run.",
                                    "valor": "3",
                                    "id" : "51"
                                },
                                {
                                    "sabor" : "BANANA COM CANELA",
                                    "descricao" : "banana e canela.",
                                    "valor": "4",
                                    "id" : "52"
                                },
                                {
                                    "sabor" : "BANANA COM CHOCOLATE",
                                    "descricao" : "banana, chocolate preto ou branco.",
                                    "valor": "",
                                    "id" : "53"
                                },
                                {
                                    "sabor" : "BANANA NEVADA",
                                    "descricao" : "banana caramelada e claras em neve.",
                                    "valor": "",
                                    "id" : "54"
                                }
                            ]
                }
            ],
        
        "bebidas" :
            [
                {
                    "titulo" : "Coca Cola 2L",
                    "descricao" : "",
                    "preco" : "10"
                    
                },
                {
                    "titulo" : "Kuat 2L",
                    "descricao" : "",
                    "preco" : "8"
                    
                }
            ]
    }
})
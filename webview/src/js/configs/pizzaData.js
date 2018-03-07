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
                                "preco" : "20"
                                
                            },
                            {
                                "titulo" : "Pizza Pequena",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20"
                                
                            },
                            {
                                "titulo" : "Pizza Média",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20"
                                
                            },
                            {
                                "titulo" : "Pizza Grande",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20"
                                
                            },
                            {
                                "titulo" : "Pizza Gigante",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20"
                                
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
                    "saboresSalgados":
                        [
                            {
                                "sabor" : "ALHO E ÓLEO",
                                "descricao" : "feita com alho frito e molho de alho",
                                "valor": ""
                            },
                            {
                                "sabor" : "AIPIM COM BACON",
                                "descricao" : "molho, purê de aipim e bacon",
                                "valor": ""
                            },
                            {
                                "sabor" : "BACON",
                                "descricao" : "molho, mussarela e bacon",
                                "valor": ""
                            },
                            {
                                "sabor" : "BAIANA",
                                "descricao" : "molho, mussarela, calabresa, molho de pimenta, ovos e cebola",
                                "valor": ""
                            },
                            {
                                "sabor" : "BOLONHESA",
                                "descricao" : "coxão mole moído sem nenhuma gordura, milho e parmesão.",
                                "valor": ""
                            },
                            {
                                "sabor" : "BRASILEIRA",
                                "descricao" : "frango, presunto, tomate e queijo minas",
                                "valor": ""
                            },
                            {
                                "sabor" : "BRÓCOLIS",
                                "descricao" : "com bacon ou alho",
                                "valor": ""
                            },
                            {
                                "sabor" : "CALABRESA",
                                "descricao" : "calabresa fatiada com ou sem cebola",
                                "valor": ""
                            },
                            {
                                "sabor" : "CATUPERU",
                                "descricao" : "peito de peru fatiado com catupiry®",
                                "valor": ""
                            },
                            {
                                "sabor" : "CHAMPIGNON",
                                "descricao" : "champignons de primeira fatiados.",
                                "valor": ""
                            },
                            {
                                "sabor" : "ALEMÃ",
                                "descricao" : "lombo alemão com champignon",
                                "valor": "3"
                            },
                            {
                                "sabor" : "AMALFITANA",
                                "descricao" : "salada de alcachofra e mussarela de búfala",
                                "valor": "2"
                            },
                            {
                                "sabor" : "ARGENTINA",
                                "descricao" : "mignon, palmito e chimichurri",
                                "valor": "2"
                            },
                            {
                                "sabor" : "GREGA",
                                "descricao" : "mussarela de búfala, tomates secos, queijo minas, azeitonas Azapa, gorgonzola, um toque de manjericão e Catupiry.",
                                "valor": "4"
                            }
                        ]
                },
                {
                    "sabores-doces": 
                        [
                                {
                                    "sabor" : "Alho e Óleo",
                                    "descricao" : "ingrediente 1, ingrediente 2, ingrediente 3",
                                    "valor": ""
                                },
                                {
                                    "sabor" : "Frango com Catupiry",
                                    "descricao" : "ingrediente 1, ingrediente 2, ingrediente 3",
                                    "valor": "3"
                                },
                                {
                                    "sabor" : "Calabresa",
                                    "descricao" : "ingrediente 1, ingrediente 2, ingrediente 3",
                                    "valor": "4"
                                },
                                {
                                    "sabor" : "Portuguesa",
                                    "descricao" : "ingrediente 1, ingrediente 2, ingrediente 3",
                                    "valor": ""
                                },
                                {
                                    "sabor" : "Siciliana",
                                    "descricao" : "ingrediente 1, ingrediente 2, ingrediente 3",
                                    "valor": ""
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
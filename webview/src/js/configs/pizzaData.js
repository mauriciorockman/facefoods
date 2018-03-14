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
                                "nsabores" : "1",
                                "id" : "1"
                                
                                
                            },
                            {
                                "titulo" : "Pizza Pequena",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20",
                                "nsabores" : "1",
                                "id" : "2"
                                
                            },
                            {
                                "titulo" : "Pizza Média",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20",
                                "nsabores" : "2",
                                "id" : "3"
                                
                            },
                            {
                                "titulo" : "Pizza Grande",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20",
                                "nsabores" : "3",
                                "id" : "4"
                                
                            },
                            {
                                "titulo" : "Pizza Gigante",
                                "descricao" : "15 cm e 1 sabor",
                                "preco" : "20",
                                "nsabores" : "4",
                                "id" : "6"
                                
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
                                        "nome" : "Borda de Catupiry",
                                        "preco" : "5",
                                        "id" : "1",
                                        "descrição" : ""
                                    },
                                    {
                                        "nome" : "Borda de Cheddar",
                                        "preco" : "5",
                                        "id" : "2",
                                        "descrição" : ""
                                    },
                                    {
                                        "nome" : "Sem Borda",
                                        "preco" : "",
                                        "id" : "3",
                                        "descrição" : ""
                                    }
                                ]
                            },
                            {
                                "massas": 
                                    [
                                        {
                                            "nome" : "Massa Fina",
                                            "preco" : "",
                                            "descrição" : "",
                                            "id" : "1"
                                        },
                                        {
                                            "nome" : "Massa Média",
                                            "preco" : "",
                                            "descrição" : "",
                                            "id" : "2"
                                        },
                                        {
                                            "nome" : "Massa Grossa",
                                            "preco" : "1",
                                            "descrição" : "",
                                            "id" : "3"
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
                                "preco": "",
                                "id" : "1",
                                "selected" : false
                            },
                            {
                                "sabor" : "AIPIM COM BACON",
                                "descricao" : "molho, purê de aipim e bacon",
                                "preco": "",
                                "id" : "2",
                                "selected" : false
                            },
                            {
                                "sabor" : "BACON",
                                "descricao" : "molho, mussarela e bacon",
                                "preco": "",
                                "id" : "3",
                                "selected" : false
                            },
                            {
                                "sabor" : "BAIANA",
                                "descricao" : "molho, mussarela, calabresa, molho de pimenta, ovos e cebola",
                                "preco": "",
                                "id" : "4",
                                "selected" : false
                            },
                            {
                                "sabor" : "BOLONHESA",
                                "descricao" : "coxão mole moído sem nenhuma gordura, milho e parmesão.",
                                "preco": "",
                                "id" : "5",
                                "selected" : false
                            },
                            {
                                "sabor" : "BRASILEIRA",
                                "descricao" : "frango, presunto, tomate e queijo minas",
                                "preco": "",
                                "id" : "6",
                                "selected" : false
                            },
                            {
                                "sabor" : "BRÓCOLIS",
                                "descricao" : "com bacon ou alho",
                                "preco": "",
                                "id" : "7",
                                "selected" : false
                            },
                            {
                                "sabor" : "CALABRESA",
                                "descricao" : "calabresa fatiada com ou sem cebola",
                                "preco": "",
                                "id" : "8",
                                "selected" : false
                            },
                            {
                                "sabor" : "CATUPERU",
                                "descricao" : "peito de peru fatiado com catupiry®",
                                "preco": "",
                                "id" : "9",
                                "selected" : false
                            },
                            {
                                "sabor" : "CHAMPIGNON",
                                "descricao" : "champignons de primeira fatiados.",
                                "preco": "",
                                "id" : "10",
                                "selected" : false
                            },
                            {
                                "sabor" : "ALEMÃ",
                                "descricao" : "lombo alemão com champignon",
                                "preco": "3",
                                "id" : "11",
                                "selected" : false
                            },
                            {
                                "sabor" : "AMALFITANA",
                                "descricao" : "salada de alcachofra e mussarela de búfala",
                                "preco": "2",
                                "id" : "12",
                                "selected" : false
                            },
                            {
                                "sabor" : "ARGENTINA",
                                "descricao" : "mignon, palmito e chimichurri",
                                "preco": "2",
                                "id" : "13",
                                "selected" : false
                            },
                            {
                                "sabor" : "GREGA",
                                "descricao" : "mussarela de búfala, tomates secos, queijo minas, azeitonas Azapa, gorgonzola, um toque de manjericão e Catupiry.",
                                "preco": "4",
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
                                    "preco": "",
                                    "id" : "50",
                                    "selected" : false
                                },
                                {
                                    "sabor" : "BANANA AO RUN",
                                    "descricao" : "banana, chocolate preto ou branco e licor de run.",
                                    "preco": "3",
                                    "id" : "51",
                                    "selected" : false
                                },
                                {
                                    "sabor" : "BANANA COM CANELA",
                                    "descricao" : "banana e canela.",
                                    "preco": "4",
                                    "id" : "52",
                                    "selected" : false
                                },
                                {
                                    "sabor" : "BANANA COM CHOCOLATE",
                                    "descricao" : "banana, chocolate preto ou branco.",
                                    "preco": "",
                                    "id" : "53",
                                    "selected" : false
                                },
                                {
                                    "sabor" : "BANANA NEVADA",
                                    "descricao" : "banana caramelada e claras em neve.",
                                    "preco": "",
                                    "id" : "54",
                                    "selected" : false
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
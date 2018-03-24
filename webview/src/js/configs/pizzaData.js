// app.run(function ($rootScope) {
//   $rootScope.pizzaData = {
//     "combos":
//       [
//         {
//           "imagem": "img1.jpg",
//           "titulo": "PIZZA GRANDE SALGADA + PIZZA DOCE PEQUENA + REFRIGERANTE 2L",
//           "descricao": "Descrição dessa promoção",
//           "preco": "65"
//         },
//         {
//           "imagem": "img1.jpg",
//           "titulo": "PIZZA GIGANTE SALGADA + PIZZA DOCE PEQUENA + REFRIGERANTE 2L",
//           "descricao": "Descrição dessa promoção",
//           "preco": "75"
//         }

//       ],
//     "pizzas":
//       [
//         {
//           "tamanhos":
//             [
//               {
//                 "titulo": "Pizza Broto",
//                 "descricao": "15 cm e 1 sabor",
//                 "preco": "20",
//                 "nsabores": "1",
//                 "id": "1"


//               },
//               {
//                 "titulo": "Pizza Pequena",
//                 "descricao": "15 cm e 1 sabor",
//                 "preco": "20",
//                 "nsabores": "1",
//                 "id": "2"

//               },
//               {
//                 "titulo": "Pizza Média",
//                 "descricao": "15 cm e 1 sabor",
//                 "preco": "20",
//                 "nsabores": "2",
//                 "id": "3"

//               },
//               {
//                 "titulo": "Pizza Grande",
//                 "descricao": "15 cm e 1 sabor",
//                 "preco": "20",
//                 "nsabores": "3",
//                 "id": "4"

//               },
//               {
//                 "titulo": "Pizza Gigante",
//                 "descricao": "15 cm e 1 sabor",
//                 "preco": "20",
//                 "nsabores": "4",
//                 "id": "6"

//               }
//             ]

//         },
//         {
//           "opcoes":
//             [
//               {
//                 "bordas":
//                   [
//                     {
//                       "nome": "Borda de Catupiry",
//                       "preco": "5",
//                       "id": "1",
//                       "descrição": ""
//                     },
//                     {
//                       "nome": "Borda de Cheddar",
//                       "preco": "5",
//                       "id": "2",
//                       "descrição": ""
//                     },
//                     {
//                       "nome": "Sem Borda",
//                       "preco": "",
//                       "id": "3",
//                       "descrição": ""
//                     }
//                   ]
//               },
//               {
//                 "massas":
//                   [
//                     {
//                       "nome": "Massa Fina",
//                       "preco": "",
//                       "descrição": "",
//                       "id": "1"
//                     },
//                     {
//                       "nome": "Massa Média",
//                       "preco": "",
//                       "descrição": "",
//                       "id": "2"
//                     },
//                     {
//                       "nome": "Massa Grossa",
//                       "preco": "1",
//                       "descrição": "",
//                       "id": "3"
//                     }
//                   ]
//               }
//             ]

//         },
//         {
//           "sabores_salgados":
//             [
//               {
//                 "sabor": "ALHO E ÓLEO",
//                 "descricao": "feita com alho frito e molho de alho",
//                 "preco": "",
//                 "id": "1",
//                 "selected": false
//               },
//               {
//                 "sabor": "AIPIM COM BACON",
//                 "descricao": "molho, purê de aipim e bacon",
//                 "preco": "",
//                 "id": "2",
//                 "selected": false
//               },
//               {
//                 "sabor": "BACON",
//                 "descricao": "molho, mussarela e bacon",
//                 "preco": "",
//                 "id": "3",
//                 "selected": false
//               },
//               {
//                 "sabor": "BAIANA",
//                 "descricao": "molho, mussarela, calabresa, molho de pimenta, ovos e cebola",
//                 "preco": "",
//                 "id": "4",
//                 "selected": false
//               },
//               {
//                 "sabor": "BOLONHESA",
//                 "descricao": "coxão mole moído sem nenhuma gordura, milho e parmesão.",
//                 "preco": "",
//                 "id": "5",
//                 "selected": false
//               },
//               {
//                 "sabor": "BRASILEIRA",
//                 "descricao": "frango, presunto, tomate e queijo minas",
//                 "preco": "",
//                 "id": "6",
//                 "selected": false
//               },
//               {
//                 "sabor": "BRÓCOLIS",
//                 "descricao": "com bacon ou alho",
//                 "preco": "",
//                 "id": "7",
//                 "selected": false
//               },
//               {
//                 "sabor": "CALABRESA",
//                 "descricao": "calabresa fatiada com ou sem cebola",
//                 "preco": "",
//                 "id": "8",
//                 "selected": false
//               },
//               {
//                 "sabor": "CATUPERU",
//                 "descricao": "peito de peru fatiado com catupiry®",
//                 "preco": "",
//                 "id": "9",
//                 "selected": false
//               },
//               {
//                 "sabor": "CHAMPIGNON",
//                 "descricao": "champignons de primeira fatiados.",
//                 "preco": "",
//                 "id": "10",
//                 "selected": false
//               },
//               {
//                 "sabor": "ALEMÃ",
//                 "descricao": "lombo alemão com champignon",
//                 "preco": "3",
//                 "id": "11",
//                 "selected": false
//               },
//               {
//                 "sabor": "AMALFITANA",
//                 "descricao": "salada de alcachofra e mussarela de búfala",
//                 "preco": "2",
//                 "id": "12",
//                 "selected": false
//               },
//               {
//                 "sabor": "ARGENTINA",
//                 "descricao": "mignon, palmito e chimichurri",
//                 "preco": "2",
//                 "id": "13",
//                 "selected": false
//               },
//               {
//                 "sabor": "GREGA",
//                 "descricao": "mussarela de búfala, tomates secos, queijo minas, azeitonas Azapa, gorgonzola, um toque de manjericão e Catupiry.",
//                 "preco": "4",
//                 "id": "14",
//                 "selected": false
//               }
//             ]
//         },
//         {
//           "sabores_doces":
//             [
//               {
//                 "sabor": "AMAZÔNIA",
//                 "descricao": "açaí com leite condensado.",
//                 "preco": "",
//                 "id": "50",
//                 "selected": false
//               },
//               {
//                 "sabor": "BANANA AO RUN",
//                 "descricao": "banana, chocolate preto ou branco e licor de run.",
//                 "preco": "3",
//                 "id": "51",
//                 "selected": false
//               },
//               {
//                 "sabor": "BANANA COM CANELA",
//                 "descricao": "banana e canela.",
//                 "preco": "4",
//                 "id": "52",
//                 "selected": false
//               },
//               {
//                 "sabor": "BANANA COM CHOCOLATE",
//                 "descricao": "banana, chocolate preto ou branco.",
//                 "preco": "",
//                 "id": "53",
//                 "selected": false
//               },
//               {
//                 "sabor": "BANANA NEVADA",
//                 "descricao": "banana caramelada e claras em neve.",
//                 "preco": "",
//                 "id": "54",
//                 "selected": false
//               }
//             ]
//         }
//       ],

//     "bebidas":
//       [
//         {
//           "titulo": "Coca Cola 2L",
//           "descricao": "",
//           "preco": "10"

//         },
//         {
//           "titulo": "Kuat 2L",
//           "descricao": "",
//           "preco": "8"

//         }
//       ]
//   };


//   $rootScope.MenuData = {
//     "user": [],
//     "menu": {
//       "combos": [],
//       "pizzas": {
//         "tamanhos": [
//           {
//             "titulo": "Pizza Broto",
//             "descricao": "25cm e 4 fatias",
//             "preco": "18",
//             "id": "1",
//             "nsabores": "1"
//           },
//           {
//             "titulo": "Pizza Pequena",
//             "descricao": "30 cm e 6 fatias",
//             "preco": "22",
//             "id": "2",
//             "nsabores": "1"
//           },
//           {
//             "titulo": "Pizza Média",
//             "descricao": "35 cm e 8 fatias",
//             "preco": "27",
//             "id": "3",
//             "nsabores": "2"
//           },
//           {
//             "titulo": "Pizza Grande",
//             "descricao": "40 cm e 12 fatias",
//             "preco": "34",
//             "id": "4",
//             "nsabores": "3"
//           },
//           {
//             "titulo": "Pizza Gigante",
//             "descricao": "45 cm e 16 fatias",
//             "preco": "38",
//             "id": "5",
//             "nsabores": "4"
//           }
//         ],
//         "extras": {
//           "borda": [
//             {
//               "nome": "Borda de Catupiry",
//               "descricao": "",
//               "preco": "5",
//               "id": "1"
//             },
//             {
//               "nome": "Borda de Cheddar",
//               "descricao": "",
//               "preco": "5",
//               "id": "2"
//             },
//             {
//               "nome": "Sem Borda",
//               "descricao": "",
//               "preco": "0",
//               "id": "3"
//             }
//           ],
//           "massa": [
//             {
//               "nome": "Massa fina",
//               "descricao": "",
//               "preco": "0",
//               "id": "1"
//             },
//             {
//               "nome": "Massa Média",
//               "descricao": "",
//               "preco": "0",
//               "id": "2"
//             },
//             {
//               "nome": "Massa Grossa",
//               "descricao": "",
//               "preco": "1",
//               "id": "3"
//             }
//           ]
//         },
//         "sabores": {
//           "Salgada": [
//             {
//               "sabor": "ALHO E ÓLEO",
//               "descricao": "feita com alho frito e molho de alho.",
//               "preco": "0",
//               "id": "1",
//               "selected": false
//             },
//             {
//               "sabor": "AIPIM COM BACON",
//               "descricao": "molho, purê de aipim e bacon",
//               "preco": "0",
//               "id": "2",
//               "selected": false
//             },
//             {
//               "sabor": "BACON",
//               "descricao": "molho, mussarela e bacon.",
//               "preco": "0",
//               "id": "9",
//               "selected": false
//             },
//             {
//               "sabor": "BAIANA",
//               "descricao": "molho, mussarela, calabresa, molho de pimenta, ovos e cebola.",
//               "preco": "0",
//               "id": "10",
//               "selected": false
//             },
//             {
//               "sabor": "BOLONHESA",
//               "descricao": "coxão mole moído sem nenhuma gordura, milho e parmesão.",
//               "preco": "0",
//               "id": "11",
//               "selected": false
//             },
//             {
//               "sabor": "BRASILEIRA",
//               "descricao": "frango, presunto, tomate e queijo minas.",
//               "preco": "0",
//               "id": "12",
//               "selected": false
//             },
//             {
//               "sabor": "BRÓCOLIS",
//               "descricao": "com bacon ou alho.",
//               "preco": "0",
//               "id": "13",
//               "selected": false
//             },
//             {
//               "sabor": "CAMARÃO",
//               "descricao": "camarões médios com ou sem Catupiry®.",
//               "preco": "5",
//               "id": "3",
//               "selected": false
//             },
//             {
//               "sabor": "CATARINENSE",
//               "descricao": "lombo, bacon, palmito e Catupiry®.",
//               "preco": "5",
//               "id": "4",
//               "selected": false
//             },
//             {
//               "sabor": "CATARINENSE",
//               "descricao": "lombo, bacon, palmito e Catupiry®.",
//               "preco": "3",
//               "id": "14",
//               "selected": false
//             },
//             {
//               "sabor": "ESCONDIDINHO DE CARNE SECA",
//               "descricao": "molho, mussarela, purê de aipim, carne seca desfiada.",
//               "preco": "3",
//               "id": "15",
//               "selected": false
//             },
//             {
//               "sabor": "ESTROGONOFE DE CAMARÃO",
//               "descricao": "camarões médios com molho especial de estrogonofe e batata palha.",
//               "preco": "4",
//               "id": "16",
//               "selected": false
//             },
//             {
//               "sabor": "ESTROGONOFE DE MIGNON",
//               "descricao": "mignon com molho especial de estrogonofe e batata palha.",
//               "preco": "3",
//               "id": "17",
//               "selected": false
//             },
//             {
//               "sabor": "FRANCESA",
//               "descricao": "peperoni com palmito.",
//               "preco": "3",
//               "id": "18",
//               "selected": false
//             }
//           ],
//           "doce": [
//             {
//               "sabor": "BANANA COM CHOCOLATE:",
//               "descricao": "banana, chocolate preto ou branco.",
//               "preco": "1",
//               "id": "5",
//               "selected": false
//             },
//             {
//               "sabor": "CAPUCCINO",
//               "descricao": "chocolate preto ou branco com café.",
//               "preco": "1",
//               "id": "6",
//               "selected": false
//             },
//             {
//               "sabor": "AMAZÔNIA",
//               "descricao": "açaí com leite condensado.",
//               "preco": "0",
//               "id": "19",
//               "selected": false
//             },
//             {
//               "sabor": "BANANA AO RUN",
//               "descricao": "banana, chocolate preto ou branco e licor de run.",
//               "preco": "1",
//               "id": "20",
//               "selected": false
//             },
//             {
//               "sabor": "BANANA COM CANELA",
//               "descricao": "banana e canela",
//               "preco": "1",
//               "id": "21",
//               "selected": false
//             },
//             {
//               "sabor": "BANANA COM CHOCOLATE",
//               "descricao": "banana, chocolate preto ou branco.",
//               "preco": "0",
//               "id": "22",
//               "selected": false
//             },
//             {
//               "sabor": "BANANA NEVADA",
//               "descricao": "banana caramelada e claras em neve.",
//               "preco": "0",
//               "id": "23",
//               "selected": false
//             },
//             {
//               "sabor": "JAPONESA",
//               "descricao": " chocolate preto ou branco com cerejas e calda de cereja.",
//               "preco": "5",
//               "id": "7",
//               "selected": false
//             },
//             {
//               "sabor": "TRUFAS",
//               "descricao": "chocolate preto com licor de cacau.",
//               "preco": "6",
//               "id": "8",
//               "selected": false
//             }
//           ]
//         }
//       },
//       "geral": [
//         {
//           "categoria": "Bebidas",
//           "produtos": [
//             {
//               "name": "Coca Cola 2L",
//               "description": "",
//               "price": "9",
//               "id": "1",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "Kuat 2L",
//               "description": "",
//               "price": "7",
//               "id": "2",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "Sprite 2L",
//               "description": "",
//               "price": "8",
//               "id": "3",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "Fanta Laranja 1,5L",
//               "description": "",
//               "price": "7",
//               "id": "4",
//               "extras_disponiveis": []
//             }
//           ]
//         },
//         {
//           "categoria": "Risotos",
//           "produtos": [
//             {
//               "name": "RISOTO DE ALHO PORÓ, 1 PESSOA",
//               "description": "Arroz arbóreo, Alho poró, alho fresco triturado, queijo parmesão, cebola picada, salsinha fresca, vinho branco e temperos",
//               "price": "34",
//               "id": "5",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "RISOTO DE ALHO PORÓ, 2 PESSOAS",
//               "description": "Arroz arbóreo, Alho poró, alho fresco triturado, queijo parmesão, cebola picada, salsinha fresca, vinho branco e temperos",
//               "price": "55",
//               "id": "6",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "RISOTO DE LINGUIÇA BLUMENAL, 1 PESSOA",
//               "description": "Arroz arbóreo, Alho poró, alho fresco triturado, queijo parmesão, cebola picada, salsinha fresca, vinho branco e temperos",
//               "price": "34",
//               "id": "7",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "RISOTO DE LINGUIÇA BLUMENAL, 2 PESSOAS",
//               "description": "Arroz arbóreo, Alho poró, alho fresco triturado, queijo parmesão, cebola picada, salsinha fresca, vinho branco e temperos",
//               "price": "54",
//               "id": "8",
//               "extras_disponiveis": []
//             }
//           ]
//         },
//         {
//           "categoria": "Massas",
//           "produtos": [
//             {
//               "name": "Fetuccine, 1 Pessoa",
//               "description": "Porção para 1 pessoa (aprox. 450 gramas)",
//               "price": "29",
//               "id": "9",
//               "extras_disponiveis": ["1", "2"]
//             },
//             {
//               "name": "Fetuccine, 2 Pessoas",
//               "description": "Porção para 2 pessoas (aprox. 900 gramas)",
//               "price": "50",
//               "id": "10",
//               "extras_disponiveis": ["1", "2"]
//             },
//             {
//               "name": "Nhoque, 1 Pessoa",
//               "description": "Massa Nhoque com molho preferencial para 1 pessoa (450 gramas aproximadamente)",
//               "price": "29",
//               "id": "11",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "Nhoque, 2 Pessoas",
//               "description": "Massa Nhoque com molho preferencial para 2 pessoas (900 gramas aproximadamente)",
//               "price": "50",
//               "id": "12",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "Pappardelle, 1 pessoa",
//               "description": "Porção para 1 pessoa. (450 gramas aproximadamente)",
//               "price": "30",
//               "id": "13",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "Pappardelle, 2 pessoas",
//               "description": "Porção para 2 pessoas. (900 gramas aproximadamente)",
//               "price": "40",
//               "id": "14",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "Penne, 1 Pessoa",
//               "description": "Porção para 1 pessoa. (450 gramas aproximadamente)",
//               "price": "30",
//               "id": "15",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "Penne, 2 pessoas",
//               "description": "Porção para 2 pessoas. (900 gramas aproximadamente)",
//               "price": "50",
//               "id": "16",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "Spaghetti, 1 pessoa",
//               "description": "Porção para 1 pessoa. (450 gramas aproximadamente)",
//               "price": "30",
//               "id": "17",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "Spaghetti, 2 pessoas",
//               "description": "Porção para 2 pessoas. (900 gramas aproximadamente)",
//               "price": "50",
//               "id": "18",
//               "extras_disponiveis": []
//             }
//           ]
//         },
//         {
//           "categoria": "Açaí",
//           "produtos": [
//             {
//               "name": "Açaí tigela 360g",
//               "description": "escolha seus acompanhamentos",
//               "price": "11",
//               "id": "19",
//               "extras_disponiveis": []
//             },
//             {
//               "name": "Açaí, tigela 480g",
//               "description": "escolha seus acompanhamentos",
//               "price": "14",
//               "id": "20",
//               "extras_disponiveis": []
//             }
//           ]
//         }
//       ],
//       "extras": [
//         {
//           "nome": "Complemento Fettuccine",
//           "id": "1",
//           "tipo": "1",
//           "opcoes": [
//             {
//               "name": "Alho e óleo",
//               "description": "Alho fresco triturado, óleo de soja, salsinha fresca e temperos",
//               "price": "0",
//               "id": "1",
//               "selected": false,
//               "qtd": 0
//             },
//             {
//               "name": "Bolonhesa",
//               "description": "Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",
//               "price": "0",
//               "id": "2",
//               "selected": false,
//               "qtd": 0
//             },
//             {
//               "name": "Bolonhesa",
//               "description": "Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",
//               "price": "0",
//               "id": "3",
//               "selected": false,
//               "qtd": 0
//             },
//             {
//               "name": "Bolonhesa",
//               "description": "Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",
//               "price": "0",
//               "id": "4",
//               "selected": false,
//               "qtd": 0
//             },
//             {
//               "name": "Bolonhesa",
//               "description": "Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",
//               "price": "0",
//               "id": "5",
//               "selected": false,
//               "qtd": 0
//             },
//             {
//               "name": "Bolonhesa",
//               "description": "Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",
//               "price": "0",
//               "id": "6",
//               "selected": false,
//               "qtd": 0
//             }
//           ]
//         },
//         {
//           "nome": "Complemento Fettuccine 2",
//           "id": "2",
//           "tipo": "2",
//           "qtd_max": "10",
//           "qtd_min": "1",
//           "opcoes": [
//             {
//               "name": "Alho e óleo",
//               "description": "Alho fresco triturado, óleo de soja, salsinha fresca e temperos",
//               "price": "0",
//               "id": "7",
//               "selected": false,
//               "qtd": 0
//             },
//             {
//               "name": "Bolonhesa",
//               "description": "Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",
//               "price": "0",
//               "id": "8",
//               "selected": false,
//               "qtd": 0
//             },
//             {
//               "name": "Bolonhesa",
//               "description": "Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",
//               "price": "0",
//               "id": "9",
//               "selected": false,
//               "qtd": 0
//             },
//             {
//               "name": "Bolonhesa",
//               "description": "Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",
//               "price": "0",
//               "id": "10",
//               "selected": false,
//               "qtd": 0
//             },
//             {
//               "name": "Bolonhesa",
//               "description": "Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",
//               "price": "0",
//               "id": "11",
//               "selected": false,
//               "qtd": 0
//             },
//             {
//               "name": "Bolonhesa",
//               "description": "Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",
//               "price": "0",
//               "id": "12",
//               "selected": false,
//               "qtd": 0
//             }
//           ]
//         }
//       ]
//     }
//   };


// })
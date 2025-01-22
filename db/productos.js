const productosComunes = [
    { descripcion: "Kg pollo beneficiado", precio: 210 },
    { descripcion: "Pollo picado x Kg", precio: 230 },
    { descripcion: "Pollo Entero", precio: 580 },
    { descripcion: "Kg carne molida", precio: 240 },
    { descripcion: "Kg carne corte ganso", precio: 230 },
    { descripcion: "Kg salchicha", precio: 210 },
    { descripcion: "Mortadela 500gr", precio: 94 },
    { descripcion: "Kg queso blanco", precio: 200 },
    { descripcion: "Bandeja Queso Guayanes", precio: 120 },
    { descripcion: "Queso Duro x Kg", precio: 190 },
    { descripcion: "Kg queso amarillo", precio: 380 },
    { descripcion: "Mortadela cilindro 500g", precio: 175 },
    { descripcion: "Cartón de huevos", precio: 180 },

    { descripcion: "Kg sal", precio: 30 },
    { descripcion: "Mayonesa Mavesa 500g", precio: 166 },
    { descripcion: "Salsa de tomate Pampero", precio: 85 },
    { descripcion: "Kg azúcar", precio: 60 },
    { descripcion: "Café 250gr", precio: 150 },
    { descripcion: "Aceite Comestible Litro", precio: 130 },
    { descripcion: "Kg pasta", precio: 65 },
    { descripcion: "Cubito", precio: 25 },
    { descripcion: "Galletas sal ricas", precio: 145 },
    { descripcion: "Bolsa de hielo", precio: 75 },
    { descripcion: "Arroz", precio: 65 },
    { descripcion: "Harina Kaly", precio: 50 },
    { descripcion: "Harina Pan", precio: 65 },
    { descripcion: "Mantequilla Deline peque�a", precio: 50 },
    { descripcion: "Bolsa de Pan frances 12u", precio: 39 },
    { descripcion: "Docena Pan frances", precio: 39 },
    { descripcion: "Bolsa de pan canilla 5u", precio: 40 },
    { descripcion: "Pan canilla por unidad", precio: 12 },
    
    { descripcion: "Refresco Sun cola 2Lt", precio: 40 },
    { descripcion: "Refresco Pepsi 2Lt", precio: 75 },
    { descripcion: "Refresco Coca Cola 2Lt", precio: 80 },
    { descripcion: "Panelada", precio: 25 },
    { descripcion: "Panelista", precio: 30 },
    { descripcion: "Jugo Naranja Justy", precio: 43 },

    { descripcion: "Kg cebolla", precio: 70 },
    { descripcion: "Kg ajo", precio: 362 },
    { descripcion: "Kg ají dulce", precio: 75 },
    { descripcion: "Kg papa", precio: 53 },
    { descripcion: "Zanahoria", precio: 80 },
    { descripcion: "Repollo", precio: 150 },
    { descripcion: "Aliños verdes", precio: 111 },

    { descripcion: "Kg Naranja", precio: 95 },
    { descripcion: "Kg Mandarina", precio: 95 },
    { descripcion: "Kg Patilla", precio: 150 },
    { descripcion: "Melon", precio: 130 },
    { descripcion: "Kg Cambur", precio: 60 },



//bultos de comida
    { descripcion: "Bulto harina Kaly 1x20", precio: 630 },
    { descripcion: "Bulto harina Pan 1x20", precio: 720 },
    { descripcion: "Bulto harina trigo 1x20", precio: 600 },
    { descripcion: "Bulto arroz 1x20", precio: 740 },
    { descripcion: "Mantequilla Deline (caja 1x24)", precio: 541 },
    { descripcion: "Caja de refrescos Sun", precio: 240 },
    { descripcion: "Caja de refrescos Pepsi", precio: 333 },
    { descripcion: "Caja de refrescos Coca Cola", precio: 350 },
    { descripcion: "Caja de refrescos varios", precio: 310 },
    { descripcion: "CAJA DE AGUA 600ML", precio: 360 },
    { descripcion: "CAJA DE AGUA 1Lt", precio: 400 },
    { descripcion: " Caja de Paneladas ", precio: 800 },

//Productos Plasticos
    { descripcion: "Cajas de bandejas 700 ML 10x25", precio: 1227 },
    { descripcion: "Bulto de platos plásticos #8 50x10", precio: 1200 },
    { descripcion: "Bulto de platos plásticos #9 50x10", precio: 1373 },
    { descripcion: "Bultos de vasos #77 25x100", precio: 1250 },
    { descripcion: "Paquete de vasos de café #47 (caja 1x50x20U)", precio: 900 },
    { descripcion: "Bultos de vasos para café #47 25x100", precio: 793 },
    { descripcion: "Bulto de cubiertos 10x100", precio: 530 },
    { descripcion: "Bulto servilletas Brilux cuadradas 30x250H", precio: 722 },
    { descripcion: "Rollo de papel envoplas", precio: 555 },
    { descripcion: "Paquete de bolsas negras para basura 100UND", precio: 865 },
    { descripcion: "Bolsas Negras Para Basura Tipo B-40 Kg Calibre 14 100u", precio: 871 },
    { descripcion: "PQ BOLSA NEGRA 100 UND", precio: 761 },
    { descripcion: "paq. De bolsas sin asa 1kg", precio: 397 },
    { descripcion: "bulto de bandejas medianas 10x25", precio: 2230 },
    { descripcion: "BOLSAS NEGRAS DE BASURA 100UND ", precio: 800 },

//Productos de Limpieza
    { descripcion: "Litro de cloro", precio: 30 },
    { descripcion: "Litro de desinfectante", precio: 31 },
    { descripcion: "Litro de desengrasante", precio: 48 },
    { descripcion: "Litro de jabón líquido", precio: 46 },
    { descripcion: "Litros de cera Roja", precio: 48 },
    { descripcion: "Litros de cera Blanca", precio: 40 },
    { descripcion: "Litros de cera Verde", precio: 40 },
    { descripcion: "Pañitos de cocina", precio: 55 },
    { descripcion: "Docena de cepillo suave", precio: 930 },
    { descripcion: "Bulto de ACE en polvo 20kg", precio: 1620 },
    { descripcion: "Pala cuadrada con cabo", precio: 563 },

//servicios publicos
    { descripcion: "Disco De Esmeril Dewalt Desbaste Metal 4-1/2 X 1/4 X 7/8", precio: 80 },
    { descripcion: "Disco Esmerila 7 Pulgada Desbaste Hudson", precio: 90 },
    { descripcion: "Disco Esmerilar Desbaste Metco 4,5 PLG", precio: 88 },
    { descripcion: "Disco Esmerilar Desbaste Metco De 7pLG", precio: 100 },
    { descripcion: "Disco Debaste 7 PuLG 3w Esmerilar ", precio: 112 },
    { descripcion: "Disco run 7", precio: 200 },
    { descripcion: "Disco de corte rápido 7''", precio: 190 },

    { descripcion: "Disco De Corte Diamante Turbo Ultrafino 4-1/2 Porcelanato", precio: 376 },
    { descripcion: "Disco Diamante 4-1/2 Turbo Corte Porcelanato Mármol Cerámica", precio: 546 },
    { descripcion: "Disco Diamante Corte De Concreto Segmentado 4 1/2 Total", precio: 130 },
    { descripcion: "Disco Diamantado Turbo 4 1/2 Concreto Granito Ceramica", precio: 122 },



    { descripcion: "Disco Tronzadora 14 Pulgadas Dewalt", precio: 222 },
    { descripcion: "Disco Corte Tronzadora 14 Dewalt Dw44640", precio: 266 },
    { descripcion: "Disco Para Tronzadora 14 X 1/8 X 1", precio: 131 },
    { descripcion: "Disco De Corte Tronzadora 12 Pulgadas ", precio: 180 },
    { descripcion: "Disco Dewalt trozadora 14''", precio: 245 },


    { descripcion: "Nylon Cuadrado desmalezadora 15m 3mm COVO", precio: 240 },
    { descripcion: "Nylon Dentado Desmalezadora 3.30mm x42m trimmer", precio: 530 },
    { descripcion: "Nylon Desmalezadora Redondo 2mm X 15 M", precio: 131 },
    { descripcion: "Rollo Nylon Cuadrado Desmalezadora 3.3mm 125 Metros", precio: 813 },
    { descripcion: "Nylon Para Desmalezadora/cortagrama 3.3mm 200 Metros Exxel", precio: 941 },


    { descripcion: "Cuchilla desmalezadora Bellota", precio: 200 },
    { descripcion: "Cuchilla Roja Pesada Para Guadaña Bellota", precio: 150 },
    { descripcion: "Cuchilla Desmalezadora liviana Bellota", precio: 140 },

    { descripcion: "Electrodos 6013 1/8", precio: 120 },
    { descripcion: "KG Electrodos 7018 5/32 Lincoln", precio: 145 },
    { descripcion: "Caja Electrodos Acero Inoxidable Aws E308 3/32 5kg", precio: 636 },
    { descripcion: "Caja Electrodos Inoxidables 1/8 Welding Pro", precio: 598 },
    { descripcion: "Electrodos Hoffman (2.4mm)x14 ", precio: 131 },

    { descripcion: "Alambre Dulce Liso Galvanizado Rollo 800gr ", precio: 118 },
    { descripcion: "Kg Alambre Liso Galvanizado Calibre 12", precio: 150 },
    { descripcion: "Alambre Liso Galvanizado Calibre 12 X Kg", precio: 188 },
    { descripcion: "Alambre Liso Dulce Calibre 17.5 Rollo 1Kg", precio: 140 },
    { descripcion: "Kg Alambre Liso Galvanizado Cal 12", precio: 112 },


    { descripcion: "Recargas Cilindros Industrial Bombona Oxigeno x Kg", precio: 1200 },
    { descripcion: "RECARGA DE BOMBONA DE GAS DE ACETILENO x Kg", precio: 1600 },

    { descripcion: "Lija 80", precio: 80 },
    { descripcion: "Lija 100", precio: 80 },
    { descripcion: "Lija 120", precio: 80 },
    { descripcion: "Lija 150", precio: 80 },
    { descripcion: "Lija 180", precio: 80 },


    { descripcion: "PAR DE GUANTES DE CARNAZA", precio: 142 },
    { descripcion: "Guante Carnaza Soldador 16'' ", precio: 160 },
    { descripcion: "Guante De Carnaza Largo Para Soldador De 16'", precio: 152 },
    { descripcion: "Guante De Carnaza Para Soldador Forrado Mata Chispa.", precio: 155 },

    { descripcion: "Guantes De Seguridad Tejido Tipo Carolina Con Puntos De Pvc", precio: 135 },
    { descripcion: "x12 Guante Tejido Blanco Con Puntos Pvc", precio: 305 },
    { descripcion: "Guante Tejido Con Puntos Pvc Blanco", precio: 123 },

//Materiales construccion

    { descripcion: "BISAGRA X2", precio: 130 },
    { descripcion: "VIGA 2X1", precio: 412 },
    { descripcion: "BARRA LISA", precio: 444 },
    { descripcion: "SACO DE CEMENTO", precio: 333 },
    { descripcion: "CABILLA 1/2  3/8", precio: 224 },
    { descripcion: "SACO DE CAL", precio: 183 },
    { descripcion: "LAVAMANOS", precio: 1300 },
    { descripcion: "POCETA", precio: 4000 },
    { descripcion: "Asiento de sanitario", precio: 686 },


//MAteriales electricos
    { descripcion: "Teipe cobra", precio: 80 },
    { descripcion: "Teipe negro tipo cobra 10 unid", precio: 750 },
    { descripcion: "Docena Teipe Negro Cobra", precio: 890 },
    { descripcion: "Metro de cable spot 2*1", precio: 155 },
    { descripcion: "Cable Numero 12 Thw Thhn 7 Hilos 100% Cobre (50 Mts)", precio: 1250 },
    { descripcion: "Socate Plafon", precio: 80 },
    { descripcion: "CABLE 12THW / 100M", precio: 2500 },
    { descripcion: "LUMINARIA LED 200W", precio: 1200 },
    { descripcion: "TUBO DE ELECTRICIDAD", precio: 155 },
    { descripcion: "TOMACORRIENTE DOBLE", precio:76 },
    { descripcion: "BOMBILLOS LED 15W", precio: 80 },
    { descripcion: "cable 8thw /200m", precio: 7296 },
    { descripcion: "cable 10thw /100m", precio: 1745 },
    { descripcion: "cable 12thw /150m", precio: 2390 },
    { descripcion: "Kg electrodos Lincon", precio: 187 },
    { descripcion: "enchufe vinil metal", precio: 47 },
    { descripcion: "Bombillos LED 12w", precio: 75 },
    { descripcion: "Cajetin 4x2 plástico", precio: 30 },
    { descripcion: "Interruptor de luz doble", precio: 70 },
    { descripcion: "Lámparas LED Superficiales 24w", precio: 185 },
    { descripcion: "Lámpara Reflector 40w para Socate E27 110v (x5u)", precio: 170 },





//materiales plomeria

    { descripcion: "Teflón profesional 3/4", precio: 70 },
    { descripcion: "Teflon Profesional 3/4 X 15mts Pack De ( 10 Unidades )", precio: 301 },
    { descripcion: "Cinta Teflón 1/2 Belt G 2x1", precio: 75 },
    { descripcion: "Teflón mediano amarillo", precio: 100 },

    { descripcion: "Llave De Lavamanos Sencilla Marca Fp", precio: 941 },
    { descripcion: "Llave Para Lavamanos Pomo Aleta Griven Acero", precio: 538 },
    { descripcion: "Llave Lavamanos Monomando", precio: 678 },




    { descripcion: "LLAVE DE ARRESTO", precio: 261 },
    { descripcion: "Llave De Arresto 1/2 X 1/2 Tipo Fp Marca Griven ", precio: 131 },
    { descripcion: "Llave De Arresto 1/2 X 1/2 Doble Griven", precio: 199 },

    { descripcion: "Sifón Para Lavamanos Y Fregadero Flexible Pvc ", precio: 169 },
    { descripcion: "Sifón De Lavamanos Flexible Con Desagüe Incluido ", precio: 376 },
    { descripcion: "Sifon Para Lavamanos Y Fregadero Pvc 1/14", precio: 112 },
    { descripcion: "Sifon Para Lavamanos Y Fregadero Pvc 1/12", precio: 107 },

    { descripcion: "Herraje Poceta Universal Palanca Cromada Kit Acero Metal", precio: 338 },
    { descripcion: "Herraje De Inodoro Universal De Palanca Griven", precio: 338 },
    { descripcion: "Herraje De Poceta Universal Delta Para Baño 5 Piezas", precio: 376 },
    { descripcion: "Herraje Universal Para Pocetas De Manilla Valvula Flotante", precio: 388 },
    { descripcion: "Herraje New oasis", precio: 626 },

    { descripcion: "Canilla Manguera Flexible Lavamanos Y Fregadero 20 1/2x1/2 ", precio: 86 },
    { descripcion: "Canilla Para Lavamanos Fregaderos Metalico 1/2 X 1/2", precio: 75 },
    { descripcion: "Canilla 1/2'' X 1/2'' Pvc Lavamano", precio: 104 },
    { descripcion: "Canilla Bm Para Lavamanos Fregadero 40cm 1/2 X 1/2 Fp", precio: 207 },



    { descripcion: "Copa Reductora De Hierro Galvanizado De 1 A 1/2", precio: 75 },
    { descripcion: "Anillo/copa H.g. Astm A-197 Reforzado 1/2''", precio: 75 },
    { descripcion: "Reducción Galvanizada De 1 A 1/2 Pulgadas Tipo Copa", precio: 94 },

    { descripcion: "Codos 3/4", precio: 78 },
    { descripcion: "Pack X 2 Codo Pavco 1 Pulgada Pvc", precio: 75 },
    { descripcion: "Codo Pvc 1/2 Agua Fría Tubrica (kit De 10und)", precio: 203 },
    { descripcion: "Codo Pvc 90 Grados De 1 1/2 Pulgadas ", precio: 145 },
    { descripcion: "Codo Pvc T/ Pavco Agua Fría 90°", precio: 92 },

    { descripcion: "llave de chorro wequp", precio: 250 },
    { descripcion: "Llave De Chorro O Maguera 1/2 Fundicion Pacifico Cromada Fp ", precio: 715 },
    { descripcion: "Llave De Chorro Jardín 3/4 X 1/2 Griven", precio: 112 },
    { descripcion: "Llave De Chorro O Manguera De 1/2 Paso Rapido Bm", precio: 375 },
    { descripcion: "Llave De Chorro 1/2 Griven", precio: 225 },

//Repuestos Vehiculos
    { descripcion: "PAILA DE  ACEITE MAXIDIESEL SAE 50 LUBRIPLUS", precio: 3400 },
    { descripcion: "Aceite Maxidiesel 50 Roshfrans Paila 19lts", precio: 5365 },
    { descripcion: "Aceite Sae50 Mineral Valvoline Paila 19lts", precio: 4773 },
    { descripcion: "Aceite Maxi Diesel Sae 50 Paila 19 Mobil", precio: 3200 },
    { descripcion: "Aceite Maxi Diesel 50 CASTROL Paila 19lt", precio: 3500 },
    { descripcion: "Aceite Maxi Diesel 50 DELO Paila 20Lt", precio: 3700 },


    { descripcion: "PAILA ACEITE HIDRAULICO AW68 ISO 68 MOBIL", precio: 4200 },
    { descripcion: "Aceite Pdv Hidralub Aw68 Paila 19lt ", precio: 4216 },
    { descripcion: "Aceite Paila Apex Hidráulico 68 19lt", precio: 3576 },
    { descripcion: "Hidraulico Iso 68 Aw Paila Ultraplus Imp", precio: 3726 },
    { descripcion: "Paila Aceite Hidraulico Ultralub 68", precio: 3765 },
    { descripcion: "Paila Aceite Hidraulico 68 Oliven", precio: 3690 },
    { descripcion: "Paila Aceite Fc Hidraulico Aw68 19l ", precio: 3720 },
    { descripcion: "Aceite Hidraulico Iso 68 Marca Wolf Paila 20lts", precio: 4820 },

    { descripcion: "aceite PDV 2 tiempos", precio: 281 },
    { descripcion: "Aceite Super 2t Tc Marca Valvoline", precio: 331 },
    { descripcion: "Aceite 2t Moto Motul 710", precio: 753 },
    { descripcion: "Aceite 2t Moto Motul 510", precio: 451 },
    { descripcion: "Aceite Motul 2 Tiempos Garden Hitech ", precio: 489 },
    { descripcion: "Aceite 2 Tiempos 2t Desmalezadora Motosierra Ultralub", precio: 282 },
    { descripcion: "Aceite 2 Tiempos Oilven Api Tc Jaso Fb 0.9 Sae 30", precio: 207 },
    { descripcion: "Aceite Mobil 2 Tiempos", precio: 263 },


    { descripcion: "Bateria Moura 34mr 1100 Amp. Me75ld", precio: 5267 },
    { descripcion: "Bateria 1100 Amp Duncan 24mr", precio: 4480 },
    { descripcion: "Bateria 1100 Amp 24mr Extrema Willard", precio: 4141 },
    { descripcion: "Bateria Fulgor 30h 1100amp", precio: 6475 },
    { descripcion: "Motor ventilador condensador", precio: 1665 },
    { descripcion: "Filtro Aceite Planta Electrica Generac", precio: 941 },


//Pinturas

    { descripcion: "Barniz caoba", precio: 927 },
    { descripcion: "Brocha covo 3", precio: 57 },
    { descripcion: "Goles de pintura Pintusa azul", precio: 370 },
    { descripcion: "ESMALTE DE PINTURAS", precio: 1332 },
    { descripcion: "brochas #4", precio: 168 },
    { descripcion: "brochas #3", precio: 107 },
    { descripcion: "KIT PARA PINTAR", precio: 250 },
    { descripcion: "GALON DE FONDO", precio: 1600 },
    { descripcion: "CUNETE DE PINTURA CAUCHO CLASE A", precio: 1200 },
    { descripcion: "GALON DE PINTURA EN CAUCHO", precio: 383 },
    { descripcion: "galones de pintura satinada", precio: 1300 },
    { descripcion: "Fondo titan anticorrosivo", precio: 1095 },
    { descripcion: "manpica galon esmalte", precio: 1725 },
    { descripcion: "fondo 2 en 1 blanco 1/4", precio: 312 },

//Papeleria
    { descripcion: "Resma de hojas blancas Carta", precio: 239 },
    { descripcion: "Resma De Papel Carta Marca Hp 500 Hojas", precio: 190 },
    { descripcion: "Resma De Papel Tamaño Carta 500 Hojas Report", precio: 165 },
    { descripcion: "Papel Vegetal Kores Tamaño Carta Resma De 100 Hojas", precio: 300 },


    { descripcion: "Resma de hojas blancas Oficio", precio: 330 },
    { descripcion: "Resma de Papel Tamaño Oficio Alpes", precio: 240 },
    { descripcion: "Resma De Papel Hammermill 500 Hojas", precio: 376 },
    { descripcion: "Resma De Papel Navigator Hp Tamaño Oficio 500 Hojas ", precio: 360 },
    { descripcion: "Resma De Papel Reprograf Oficio 500 Hojas ", precio: 355 },



    { descripcion: "Docena de carpetas amarillas", precio: 80 },
    { descripcion: "Carpeta Manila Oficio Paq*25und", precio: 180 },
    { descripcion: "Carpeta Manila Carta Merletto (50 Unidades)", precio: 225 },
    { descripcion: "Carpeta Manila Tamaño Carta Paquete 10 Unidades 160gr", precio: 142 },



    { descripcion: "Carpetas Fibra Manila Kraft Caja 50pzas Oficio Oslo ", precio: 376 },
    { descripcion: "Carpetas Manila Tamaño Oficio Caribe 100U", precio: 665 },
    { descripcion: "Carpeta Manila Oficio Paq*25und Ofimak", precio: 200 },
    { descripcion: "Carpeta Manila Oficio Docena CRISVI", precio: 180 },


    { descripcion: "Docena de boligrafos Offiesk", precio: 247 },
    { descripcion: "Lapiceros Paper Mate. Kilométricos", precio: 180 },
    { descripcion: "Bolígrafos Lapiceros Faber Castell Negro", precio: 175 },
    { descripcion: "Bolígrafos Lapiceros Faber Castell Azul", precio: 170 },
    { descripcion: "Bolígrafos De Gel Lapiceros Caja. Punta Fina.", precio: 190 },
    { descripcion: "Bolígrafos Lapiceros Faber Castell Azul", precio: 170 },
    { descripcion: "Bolígrafo Paper Mate Kilométrico (caja)", precio: 180 },


    { descripcion: "Libreta", precio: 75 },
    { descripcion: "Libreta Cosida Escolar 100 Hojas Rayados Norma (2 Unidades)", precio: 95 },
    { descripcion: "Libreta Empastada Unicolor 100 Hojas Pack 2", precio: 75 },



    { descripcion: "Resaltador KORES", precio: 41 },

    { descripcion: "Caja hoja Carta HP 8.5\"", precio: 2375 },
    { descripcion: "Caja De Resma De Papel Carta Marca Hp 500 Hojas", precio: 1807 },
    { descripcion: "Caja De Resma Carta Marca Printon", precio: 1618 },
    { descripcion: "Caja De Resma De Papel Carta Reprograf 500h", precio: 1850 },


    { descripcion: "Caja hoja Oficio HP 8.5\"", precio: 2375 },
    { descripcion: "Caja De Resma De Papel Oficio Hp 500 Hojas", precio: 2000 },
    { descripcion: "Caja De Resma De Papel Tamaño Oficio Report", precio: 2375 },
    { descripcion: "Caja De Hojas Tamaño Oficio Paperline 5 Unidades", precio: 1355 },


    { descripcion: "Clip Binder Mordaza 41mm (Caja x20 Und Ofimak)", precio: 286 },
    { descripcion: "Binder Gancho Doble Clip #1 1/4 32mm (1 Caja *12 Und)", precio: 95 },
    { descripcion: "Clip Binder Mordaza 41mm Caja X12 Und Ofimak", precio: 88 },
    { descripcion: "Ganchos Binder Doble Clip (32mm) #32 Printa", precio: 160 },


    { descripcion: "Lápiz MONGOL", precio: 25 },
    { descripcion: "Lapiz De Grafito Hb Triangular Kores (caja De 12 Lápices) ", precio: 95 },
    { descripcion: "Caja Lapiz Mongol Original Natural ", precio: 75 },
    { descripcion: "Lápiz Mongol Nro. 2 El Original, Gruesa De 144 Lápiz ", precio: 677 },


    { descripcion: "Tinta para sello PRINTA", precio: 182 },
    { descripcion: "Almohadilla de sello POINTER", precio: 182 },

    { descripcion: "Grapas Lisas 26/6 5000 Unidades Marca Crisvi (3 Cajas)", precio: 300 },
    { descripcion: "Grapas Lisa Ofimax 26/6 De 5000 Grapas Pack De 3 Cajas ", precio: 350 },
    { descripcion: "Grapas Lisas Ofimak 5000 Unidades Medida 26/6 (2 Unidades)", precio: 150 },

    { descripcion: "Grapas Corrugadas 26/6 - Ofimak", precio: 80 },
    { descripcion: "Grapas Onduladas Corrugadas Marca Fanagra Nro 200", precio: 75 },
    { descripcion: "Grapas Corrugadas 26/6mm Shark (5.000 Und X Caja)", precio: 140 },

    { descripcion: "Caja clip metálicos", precio: 50 },
    { descripcion: "Clips Número 1 Ofimak Pack 3 Unidades", precio: 112 },
    { descripcion: "Clip Jumbo Wingo 100 Unidades Pack 2 Und ", precio: 112 },
    { descripcion: "Clips N° 1 X 10 Unidades", precio: 188 },
    { descripcion: "Cajas De Clips Nº 1 Marca Printa (x 100 Unidades)", precio: 75 },
    { descripcion: "Clips Número 1 Ofimak Pack 3 Unidades", precio: 112 },
    { descripcion: "Clips Número 1 Ofimak Pack 3 Unidades", precio: 112 },


    { descripcion: "Carpeta marrón Carta", precio: 35 },
    { descripcion: "Carpeta Marrón Oficio Con Ganchos Paquete X 25 Unidades", precio: 365 },
    { descripcion: "Carpeta De Fibra Ecológica Oslo Tamaño Oficio 25 Pax", precio: 375 },

    { descripcion: "Resma papel carbón KORES", precio: 187 },
    { descripcion: "Bolígrafo Paper mate", precio: 30 },
    { descripcion: "Carpeta amarilla manila Carta", precio: 30 },

    { descripcion: "Paquete de fundas protectoras", precio: 200 },
    { descripcion: "Hojas Fundas Protectoras Ofiart Carta 100 Unid", precio: 188 },
    { descripcion: "Fundas Protectoras De HojaCarta Taff ofimak", precio: 190 },
    { descripcion: "Fundas Protectoras Carta Crisvi 50u", precio: 220 },


    { descripcion: "Toner MXP Samsung 111", precio: 500 },
    { descripcion: "Toner Compatible Samsung 111s Mlt-d111s M2020 M2070 D111", precio: 450 },
    { descripcion: "Toner Maxiprint Samsung 111s Mlt-d111s M2020", precio: 620 },
    { descripcion: "Toner Eocprint Samsung 111s Mlt-d111s M2020", precio: 527 },


    { descripcion: "Toner MXP HP 85A", precio: 444 },
    { descripcion: "Toner Maxiprint 85a/35a/36a/crg125", precio: 493 },
    { descripcion: "Recarga De Toner Hp85a", precio: 574 },
    { descripcion: "Toner Hp85a,36a,35a,78a Canon125,128 Compatible Ac Ink Negro", precio: 413 },

];
 const infoProductos=[
    {
        "tipo": "Catamaran a motor",
        "modelo": "A10",
        "precio": "238386 usd",
        "astillero": "Aventura Catamarans",
        "fabricacion": "2022",
        "localizacion": "España",
        "imagen": ["https://imagenes.cosasdebarcos.com/barcosOcasion/9/0/4/6/a10-aventura-catamarans-70789100210854487068545254684570x.jpg"],
        "id":21
    },
    {
        "tipo": "Velero",
        "modelo": "34",
        "precio": "175000 usd",
        "astillero": "Grand Soleil",
        "fabricacion": "2021",
        "localizacion": "Monaco",
        "imagen": ["https://imagenes.cosasdebarcos.com/barcosOcasion/3/6/8/6/grand-soleil-34-60847020210354565765666852654568x.jpg"],
        "id":22
    },
    {
        "tipo": "Yate de motor",
        "modelo": "86",
        "precio": "1798000 usd",
        "astillero": "Canados",
        "fabricacion": "2009",
        "localizacion": "Suiza",
        "imagen":["https://imagenes.cosasdebarcos.com/barcosNuevos/1/3/3/6/canados-86-40393060171565664855525751524557x.jpg"],
        "id":23
    },
    {
        "tipo": "Embarcacion de crucero",
        "modelo": "S36 HT",
        "precio": "417000 usd",
        "astillero": "Bavaria",
        "fabricacion": "2022",
        "localizacion": "España",
        "imagen": ["https://imagenes.cosasdebarcos.com/barcosOcasion/9/9/6/0/bavaria-yachts-bavaria-s36-ht-31592070221748656957505256484557x.jpg"],
        "id":24
    },
    {
        "tipo": "Velero",
        "modelo": "C42",
        "precio": "313000 usd",
        "astillero": "Bavaria",
        "fabricacion": "2021",
        "localizacion": "Estados Unidos",
        "imagen": ["https://imagenes.cosasdebarcos.com/barcosOcasion/4/8/1/0/bavaria-c42-30849070221748656868676751524548x.jpg"],
        "id":25
    },
    {
        "tipo": "Lancha",
        "modelo": "Endurance 30",
        "precio": "85000 usd",
        "astillero": "Cranchi",
        "fabricacion": "2022",
        "localizacion": "Estados Unidos",
        "imagen": ["https://www.cranchi.com/sites/default/files/styles/griglia_gallery_big/public/galleryYacht/2_0000_e30_0.jpg?itok=FrUlE-Aj"],
        "id":26
    },
    {
        "tipo": "Embarcacion de crucero",
        "modelo": "Gladiator 493 Grand",
        "precio": "1085500 usd",
        "astillero": "Canados",
        "fabricacion": "2019",
        "localizacion": "España",
        "imagen": ["https://www.smartyachting.com/wp-content/uploads/2021/12/AA3R6712.jpg"],
        "id":27
    },
    {
        "tipo": "Embarcacion de motor",
        "modelo": "26 CC",
        "precio": "33000 usd",
        "astillero": "Karnic",
        "fabricacion": "2006",
        "localizacion": "Paises Bajos",
        "imagen": ["https://imagenes.cosasdebarcos.com/barcosOcasion/4/5/2/9/karnic-26cc-43152070220969505454526648674566x.jpg"],
        "id":28
    },
    {
        "tipo": "Embarcacion de motor",
        "modelo": "Key Largo",
        "precio": "65000 usd",
        "astillero": "Sessa Marine",
        "fabricacion": "2021",
        "localizacion": "Estados Unidos",
        "imagen": ["https://imagenes.cosasdebarcos.com/barcosOcasion/9/5/1/8/sessa-marine-key-largo-20-51395060223066525670525566564567x.jpg"],
        "id":29
    },
    {
        "tipo": "Velero de crucero",
        "modelo": "Sun Odyssey 380",
        "precio": "214300 usd",
        "astillero": "Jeanneau",
        "fabricacion": "2022",
        "localizacion": "España",
        "imagen": ["https://imagenes.cosasdebarcos.com/barcosOcasion/3/3/7/4/jeanneau-sun-odyssey-380-36345110210369534867496770554569x.jpg"],
        "id":30
    },
    {
        "tipo": "Velero de crucero",
        "modelo": "61",
        "precio": "1773696 usd",
        "astillero": "Dufour",
        "fabricacion": "2021",
        "localizacion": "Francia",
        "imagen": ["https://www.dufour-yachts.com/wp-content/uploads/2021/06/dufour-61-sailing-yacht-luxury-5-min-v2.jpg"],
        "id":31
    },
    {
        "tipo": "Velero de crucero",
        "modelo": "Oceanis 30.1",
        "precio": "195065 usd",
        "astillero": "Beneteau",
        "fabricacion": "2022",
        "localizacion": "Estados Unidos",
        "imagen": ["https://imagenes.cosasdebarcos.com/barcosOcasion/4/8/7/2/beneteau-oceanis-301-45520120191170526749545151504565x.jpg"],
        "id":32
    },
    {
        "tipo": "Lancha",
        "modelo": "70.2 WA",
        "precio": "69800 usd",
        "astillero": "Idea Marine",
        "fabricacion": "2022",
        "localizacion": "Estados Unidos",
        "imagen": ["https://imagenes.cosasdebarcos.com/barcosOcasion/8/0/5/8/idea-marine-702-wa-37635050222748526551565557654548x.jpg"],
        "id":33
    },
    {
        "tipo": "Embarcacion de crucero",
        "modelo": "2008",
        "precio": "210000 usd",
        "astillero": "Bruno Abbate",
        "fabricacion": "2008",
        "localizacion": "Francia",
        "imagen": ["https://imagenes.cosasdebarcos.com/barcosOcasion/3/1/7/1/bruno-abbate-primatist-g46-31472050222848575466695453494557x.jpg"],
        "id":34
    },
    {
        "tipo": "Catamaran de vela",
        "modelo": "Aventura 34",
        "precio": "180000 usd",
        "astillero": "Aventura Catamarans",
        "fabricacion": "2022",
        "localizacion": "España",
        "imagen": ["https://imagenes.cosasdebarcos.com/barcosOcasion/8/7/7/5/aventura-catamarans-aventura-34-66337100210854486657555257554568x.jpg"],
        "id":35
    },



    {
        "Marca": "Genesis",
        "Modelo": "Genesis290",
        "fabricacion": "2018",
        "fabricacion del motor": "2018",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_623052-MLA49561613143_042022-O.webp"],
        "id":36
    },
    {
        "Marca": "Bailayner",
        "Modelo": "Bailayner310 ",
        "fabricacion": "2012",
        "fabricacion del motor": "2012",
        "Motor": "cummins turbo diésel",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_848070-MLA50742566845_072022-O.webp"],
        "id":37
    },
    {
        "Marca": "SEGUE",
        "Modelo": "SEGUE 55",
        "fabricacion": "1992",
        "fabricacion del motor": "1992",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_804100-MLA49389966299_032022-O.webp"],
        "id":38
    },
    {
        "Marca": "KLASE A",
        "Modelo": "KLASE A 50",
        "fabricacion": "2018",
        "fabricacion del motor": "2018",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_979856-MLA49155170908_022022-O.webp"],
        "id":39
    },
    {
        "Marca": "SEGUE",
        "Modelo": "SEGUE 44",
        "fabricacion": "1993",
        "fabricacion del motor": "1993",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_883036-MLA46928095415_072021-O.webp"],
        "id":40
    },
    {
        "Marca": "ORTHOLAN",
        "Modelo": "ORTHOLAN 20",
        "fabricacion": "1985",
        "fabricacion del motor": "1985",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_671287-MLA47061347909_082021-O.webp"],
        "id":41
    },
    {
        "Marca": "SEGUE",
        "Modelo": "SEGUE 46",
        "fabricacion": "2008",
        "fabricacion del motor": "2008",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_993965-MLA49435729116_032022-O.webp"],
        "id":42
    },
    {
        "Marca": "Segue",
        "Modelo": "Segue 44",
        "fabricacion": "1993",
        "fabricacion del motor": "1993",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_775273-MLA27962368262_082018-O.webp"],
        "id":43
    },
    {
        "Marca": "SEGUE",
        "Modelo": "SEGUE 45 HT",
        "fabricacion": "2013",
        "fabricacion del motor": "2013",
        "Motor": "4 tiempos",
        "Imagenes":["https://http2.mlstatic.com/D_NQ_NP_771887-MLA49055828388_022022-O.webp"],
        "id":44
    },
    {
        "Marca": "CUSTON SPECIAL",
        "Modelo": "CUSTON SPECIAL",
        "fabricacion": "2004",
        "fabricacion del motor": "2004",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_930745-MLA47547254696_092021-O.webp"],
        "id":45
    },
    {
        "Marca": "QUEST",
        "Modelo": "QUEST 325",
        "fabricacion": "2013",
        "fabricacion del motor": "2013",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_792734-MLA47093429849_082021-O.webp"],
        "id":46
    },
    {
        "Marca": "Garcia Del Fino",
        "Modelo": "generico",
        "fabricacion": "1964",
        "fabricacion del motor": "1964",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_606478-MLA47922678953_102021-O.webp"],
        "id":47
    },
    {
        "Marca": "Koala",
        "Modelo": "Koala 40",
        "fabricacion": "1985",
        "fabricacion del motor": "1985",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_782201-MLA50603125063_072022-O.webp"],
        "id":48
    },
    {
        "Marca": "Tarrab 101",
        "Modelo": "Yate Motor",
        "fabricacion": "1983",
        "fabricacion del motor": "1983",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_935038-MLA29982767086_042019-O.webp"],
        "id":49
    },
    {
        "Marca": "Princess V42 Volvo",
        "Modelo": "V42 2002",
        "fabricacion": "2002",
        "fabricacion del motor": "2002",
        "Motor": "4 tiempos",
        "Imagenes": ["https://http2.mlstatic.com/D_NQ_NP_744815-MLA49138408233_022022-O.webp"],
        "id":50
    },

    {
        "producto":"Chaleco Salvavidas",
        "imagen":["https://www.eduardono.com/nautico/1/chaleco-salvavidas-eduardono-1.jpg"],
        "descripcion":"Chaleco salvavidas de neopreno con 2 hebillas para hombre Yamaha Construcción de neopreno de alta calidad. Paneles de espuma totalmente segmentados Dos correas ajustables con hebillas de liberación lateral para mayor apoyo y seguridad Cremallera frontal duradera",
        "Tamaño" : "XL pecho de 114 a 48.8 in",
        "precio": "US$124.96",
        "tipo":"seguridad",
        "stock":10,
        "id":1
    },
    {
        "producto":"Bote inflable",
        "imagen":["https://http2.mlstatic.com/D_NQ_NP_821055-MLA41327582058_042020-O.webp"],
        "descripcion":"Inflables de remolque OBRIEN deluxe nylon-wrapped con asas y neopreno nudillos. Cubierta de nylon de doble costura y alta resistencia PVC virgen vejiga. Velocidad Válvula De Seguridad",
        "Tamaño":" Rider, 54 de diámetro, (desinflado)",
        "precio":"US$96.61",
        "tipo":"esparcimiento",
        "stock":10,
        "id":2
    },
    {
        "producto":"Ecosondas Garmin",
        "imagen":["https://nautycar.com.ar/wp-content/uploads/2020/04/eco.jpg"],
        "descripcion":"Garmin Striker 4 con transductor, Sensor de peces GPS con transductor tradicional CHIRP, te muestra más de lo que hay en el agua alrededor de tu barco; este sonar de alta frecuencia ofrece imágenes fotográficas cerca con representaciones detalladas de objetos, estructura y peces",
        "Tamaño":"3.5 Pulgadas",
        "precio":"US$129.29",
        "tipo":"electronica",
        "stock":10,
        "id":3
    },
    {
        "producto":"Manillar Wake doble manija Straight Line",
        "imagen":["https://nautycar.com.ar/wp-content/uploads/2020/04/manillar-doble-400x300.jpg"],
        "descripcion":"núcleo de aluminio de alta resistencia, protector de dedos de espuma que flota de 10cm. Mango de aluminio de 15 cm, Incluye cincha de sujeción ",
        "Tamaño":"178, 152, 127 y 101 cm",
        "precio":" US$38.98",
        "tipo":"seguridad",
        "stock":10,
        "id":4
    },
    {
        "producto":"SKIES NAUTICOS",
        "imagen":["https://http2.mlstatic.com/D_NQ_NP_980862-MLA31587520506_072019-O.jpg"],
        "descripcion":"Esquís acuáticos moldeados con borde de 67 pulgadas. Perfecto para diferentes niveles de habilidad.Colas anchas/parte inferior con forma de túnel para rendimiento, control y estabilidad. Construcción compuesta y aletas de nailon reforzadas con fibra de vidrio. ",
        "Tamaño":"Fijaciones ajustables de tipo deslizante para tallas de EE.UU. 5 a 12",
        "precio":"US$319.98",
        "tipo":"esparcimiento",
        "stock":10,
        "id":5
    },
    {
        "producto":"HYPERLITE 119 Motivo Jr BWF (2020)",
        "imagen":["https://m.media-amazon.com/images/I/31h6agKsWTL._AC_US200_.jpg"],
        "descripcion":"Construcción de monocroco: integra el cristal superior y el cristal inferior en uno. Generando una placa más duradera en los impactos laterales para evitar la deslaminación.",
        "Tamaño":"59.06 x 19.69 x 3.94 pulgadas",
        "precio":"US$239.99",
        "tipo":"esparcimiento",
        "stock":10,
        "id":6
    },
    {
        "producto":"Airhead AHDL-4 Bungee Dockline 4 pies",
        "imagen":["http://cdn.shopify.com/s/files/1/0134/1272/8896/products/AHDL-D12-15-20-loop2_88741807-dbdb-4a19-b652-82cca7948a1f_600x.jpg?v=1607229142"],
        "descripcion":"Material: cuerda, 2.150 libras de resistencia. La soga de 4 ft se extiende a 5.5 ft. La soga de 5 ft se extiende a 7 ft. La soga de 6 ft se extiende a 9 ft.",
        "Tamaño":"Talla única",
        "precio":"US$31.48",
        "tipo":"esparcimiento",
        "stock":10,
        "id":7
    },
    {
        "producto":"Tono Popa Cockpit Lona Nautica, Toneau",
        "imagen":["https://http2.mlstatic.com/D_NQ_NP_983989-MLA46454012431_062021-O.webp"],
        "descripcion":"Confeccionado con lona nautica, reforzada en todo su perimetro y con ribete de terminacion, cuenta con broches de presion colocados cada 40cm aprox, para su fijacion.",
        "Tamaño":"Largo x Ancho: 2.8 m x 1.7 m",
        "precio":"US$250",
        "tipo":"esparcimiento",
        "stock":10,
        "id":8
    },
    {
        "producto":"Kit de seguridad ",
        "imagen":["https://img.nauticexpo.es/images_ne/photo-m2/23078-410963.jpg"],
        "descripcion":"Linterna silbato Bailer & Line Bailer KitIncluye: linterna de emergencia, silbato de seguridad sin pelar, bailer con mango de fácil agarre y 50 pies de línea flotante con flotador y espejo reflectante de señal Mylar",
        "Tamaño":"estandar",
        "precio":"US$33.24",
        "tipo":"seguridad",
        "stock":10,
        "id":9
    },
    {
        "producto":"Orion Safety 584,",
        "imagen":["https://images-na.ssl-images-amazon.com/images/I/411jLdJD08L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"],
        "descripcion":"Orion Safety 584, Alerter Basic 4, lanzador de calibre 12 y paquete de señal aéreaSeñal de día o noche aprobada por USCG.",
        "Tamaño":"calibre 12 ",
        "precio":"US$98",
        "tipo":"seguridad",
        "stock":10,
        "id":10
    },
    {
        "producto":"Cornamusas para muelles de amarre",
        "imagen":["https://m.media-amazon.com/images/I/518HVHunAPL._AC_SL1001_.jpg"],
        "descripcion":"Cornamusas para muelles de amarre, 5 pulgadas de cornamusa inoxidable 316 para yate marino, Cornamusa de amarre, Base hueca",
        "Tamaño":" 5 pulgadas",
        "precio":"US$17.22",
        "tipo":"seguridad",
        "stock":10,
        "id":11
    },
    {
        "producto":"Barco de Cebo de Pesca GPS ",
        "imagen":["https://m.media-amazon.com/images/I/61IQuRGr7nL._AC_SX425_.jpg"],
        "descripcion":"Doorslay Barco de Cebo de Pesca GPS con contenedor de Cebo. Grande Barco de Cebo automático con Alcance Remoto de 400-500M",
        "Tamaño":"55 x 32 x 20 cm; 2.76 kilogramos",
        "precio":"US$187.37",
        "tipo":"esparcimiento",
        "stock":10,
        "id":12
    },
    {
        "producto":"Eulbevoli Plotter GPS",
        "imagen":["https://images-na.ssl-images-amazon.com/images/I/61-MeBD1xqL.__AC_SX300_SY300_QL70_ML2_.jpg"],
        "descripcion":"Eulbevoli Plotter GPS, Pantalla a Color de 8 Pulgadas, Navegador Satelital, 200 Rutas, Protección IP20 para Barcos",
        "Tamaño":"43 x 28 x 15 cm; 4.76 kilogramos",
        "precio":"US$1023.51",
        "tipo":"electronica",
        "stock":10,
        "id":13
    },
    {
        "producto":"Easterner Luz de navegación EVOLED",
        "imagen":["https://images-na.ssl-images-amazon.com/images/I/41iFPTCz8lL.__AC_SY300_SX300_QL70_ML2_.jpg"],
        "descripcion":"Luz de navegación EVOLED. Para montaje en suelo, izquierda y derecha. Luces LED de bajo consumo. Luces de navegación de acero inoxidable. Áreas de luz: verde: 112,5 ° rojo: 112,5 °",
        "Tamaño":"27.6 x 19.4 x 4.7 cm; 333 gramos",
        "precio":"US$61.95",
        "tipo":"seguridad",
        "stock":10,
        "id":14
    },
    {
        "producto":"Luces de Proa de Barcos",
        "imagen":["https://m.media-amazon.com/images/I/71pNZswuOpS._AC_SX425_.jpg"],
        "descripcion":"4 Piezas Luces de Proa de Barcos Luces de Navegación de Barcos LED con 5 Pilas de Botón para Barco Kayak Pontón Aerodeslizador Yate Motora Caza Pesca Correr de Noche (Rojo, Verde, Blanco)",
        "Tamaño":"14.8 x 12.8 x 4.7 cm; 90 gramos",
        "precio":"US$16.11",
        "tipo":"seguridad",
        "stock":10,
        "id":15
    },
    {
        "producto":"KAOLALI Luces para Barcos",
        "imagen":["https://m.media-amazon.com/images/I/51PE5tkIQ4S._AC_SY879_.jpg"],
        "descripcion":"KAOLALI Luces para Barcos, Luz de Navegación Ajustable para Barcos Yates LED Lámpara de Navegación Todo Redondo 360 ° Blanco Puro 12 V/24 V",
        "Tamaño":"31.5 x 7.3 x 5.4 cm; 360 gramos",
        "precio":"US$38.27",
        "tipo":"seguridad",
        "stock":10,
        "id":16
    },
    {
        "producto":"Cuerda Flotante de Anclaje",
        "imagen":["https://m.media-amazon.com/images/I/51VPtgEv3cL._AC_SX425_.jpg"],
        "descripcion":"BeGrit 10M Cuerda Flotante de Anclaje 6mm para Amarre, Cuerda multifunción, línea de Remolque para Barco, Camping, Senderismo, Escalada Naranja, capacidad máxima de carga de 20 kg",
        "Tamaño":"10 m, 20 m, 30 m, diámetro: 6 mm.",
        "precio":"US$14.09",
        "tipo":"seguridad",
        "stock":10,
        "id":17
    },
    {
        "producto":"Kit de Anclaje de Barco",
        "imagen":["https://m.media-amazon.com/images/I/61JZvPE7vYL._AC_SX425_.jpg"],
        "descripcion":"VEVOR Kit de Anclaje de Barco 6,35 kg, Anclas de Barco 63 x 31 x 29 cm, de Material de Acero Inoxidable 316, para Tamaño de Barco de 6-10,7 m, Color Plata, Ideal para Fondos de Arena, Guijarros, etc.",
        "Tamaño":" 58.42 x 27.94 x 25.4 cm; 7.44 kilogramos",
        "precio":"US$147.07",
        "tipo":"seguridad",
        "stock":10,
        "id":18
    },
    {
        "producto":"Escalera Náutica Enrollable",
        "imagen":["https://http2.mlstatic.com/D_NQ_NP_864655-MLA31112668151_062019-O.webp"],
        "descripcion":"Posee 4 escalones de acero inoxidable. Ideal para botes y lanchas sin escalera.  Incluye bolsa de guardado.",
        "Tamaño":" 35cm de ancho x 1,30m de largo.",
        "precio":"US$60.48",
        "tipo":"seguridad",
        "stock":10,
        "id":19
    },
    {
        "producto":"Cámara Fish Finder de pesca subacuática",
        "imagen":["https://m.media-amazon.com/images/I/71dn2Qs612L._AC_SX425_.jpg"],
        "descripcion":"Fish Finder visual con pantalla IPS de 4,3 pulgadas El fishfinder está compuesto principalmente por un host con pantalla IPS de 4,3 pulgadas y un objetivo impermeable IP68 para formar un sistema de cámaras subacuáticas.",
        "Tamaño":"15.9 x 14.8 x 7.4 cm; 560 gramos",
        "precio":"US$102.14",
        "tipo":"electronica",
        "stock":10,
        "id":20
    }
]
export default infoProductos;
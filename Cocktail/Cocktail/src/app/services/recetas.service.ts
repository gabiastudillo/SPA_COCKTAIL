import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable()
export class RecetasService {

  // Variable tipo Array, de tipo Interface Heroe
  private recetas: Receta[] = [
    {
      nombre: "Mojito cubano",
      ingredientes:[
        "1 1/2 oz (45 ml) Ron Blanco",
        "2 cucharas Azúcar",
        "8 hojas Hierbabuena",
        "¾ oz. Jugo de limón",
        "½ oz. Jarabe de azúcar",
        "Hielo",
        "Agua con gas"
      ],
      link: "https://www.youtube.com/watch?v=fBRKF0npNUU",
      descripcion: "En un vaso agregar el jugo de limón, la hierba buena, azúcar, jarabe de azúcar; revolver los ingredientes, agregar el hielo junto con el ron blanco volvemos a revolver. En caso de necesitar más hielo se le incorpora junto con el agua con gas, por ultimo lo revolvemos bien y decoramos con hierbabuena.",
      img: "assets/img/mojito.jpg"
    },
    {
      nombre: "Piña colada",
      ingredientes:[
        "2 oz Ron Blanco",
        "3 oz Leche de Coco",
        "3 oz Jugo de Piña",
        "1 oz jarabe de azúcar"
      ],
      link: "https://www.youtube.com/watch?v=2UUngx-_LHY",
      descripcion: "En un vaso incorporamos el jugo de piña, la leche de coco, ron blanco, el jarabe de azúcar. Esta mezcla la ponemos en la licuadora con hielo, se licua, servimos en una copa y decoramos con piña o cereza(a su elección).",
      img: "assets/img/pinaColada.jpg"
    },
    {
      nombre: "Daiquiri de lima",
      ingredientes:[
        "75 ml Ron Blanco",
        "Jugo de medio limón",
        "1 Cucharada de azúcar",
      ],
      link: "https://www.youtube.com/watch?v=Hvy4wDs_QK4",
      descripcion: "En una coctelera incorporamos el jugo de limón, azúcar, revolvemos hasta disolver el azúcar. Agregamos el ron, hielo, cerramos y agitamos unos 11 segundo la coctelera. En una copa bien helada agregamos la mezcla sin los hielos y por ultimo lo decoramos con la cascara del limón.",
      img: "assets/img/daiquiriLima.jpg"
    },
    {
      nombre: "Margarita",
      ingredientes:[
        "1 1/2 oz (45 ml) tequila blanco",
        "1/2 oz (15 ml) triple seco",
        "1 oz (30 ml) leche de coco",
        "3/4 oz (22 ml) jugo de lima",
        "1/2 oz (15 ml) jarabe de azúcar",
        "5 hojas de albahaca"
      ],
      link: "https://www.youtube.com/watch?v=tazXBlxauog",
      descripcion: "En una coctelera incorporamos el jarabe de azúcar, jugo de limón, leche de coco, triple seco, tequila blanco tapamos y agitamos. En un vaso con hielo se incorpora la mezcla de la coctelera por ultimo decoramos con albaca y cerezas.",
      img: "assets/img/margarita.jpg"
    },
    {
      nombre: "Daiquiri de durazno",
      ingredientes:[
        "2 onzas de Ron blanco",
        "1 Durazno en almíbar o fresco pelado y bien maduro",
        "1/2 onza de Jugo de Limón",
        "2 cucharadas de Azúcar blanca o 1 onza de jarabe de goma",
        "5 cubos de hielo triturado"
      ],
      link: "https://www.youtube.com/watch?v=eD4nR_VQNr8",
      descripcion: "Añade en una licuadora los duraznos pelados y rebanados en trozos, y si fuese en almíbar con un poco de almíbar del durazno, el jugo de limón, dos cucharadas de azúcar y dos onzas de  ron. Licuar hasta obtener un suave y homogéneo jugo. En una copa de vino, agregar hielo triturado, pero no llenar. Verter la mezcla anterior encima y decorar con una ramita de menta y disfrutar en épocas de calor o verano.",
      img: "assets/img/daiquiriDurazno.jpg"
    },
    {
      nombre: "Caipiriña",
      ingredientes:[
        "1 ½ limón",
        "Azúcar blanca",
        "Hielo trozado",
        "2 oz. Cachaca "
      ],
      link: "https://www.youtube.com/watch?v=i_dFheBbg6g",
      descripcion: "En un vaso vertemos el limón trozado, azúcar con un mortero machacamos. Agregamos el hielo, la cachaca mezclamos los ingredientes y decoramos con limón.",
      img: "assets/img/caipirina.jpg"
    },
    {
      nombre: "Alexander",
      ingredientes:[
        "1 1/2 oz Ginebra",
        "1 oz Licor de chocolate blanco",
        "3/4 oz Crema de leche",
        "1/4 oz Clara de huevo",
        "Nuez moscada o canela "
      ],
      link: "https://www.youtube.com/watch?v=HWMgMupoFTA",
      descripcion: "En la coctelera agregamos la crema de leche, licor, ginebra, clara de huevo. Agitar y colar en un vaso frío de coctel. Espolvorear nuez moscada o canela por encima.",
      img: "assets/img/Alexander.jpg"
    },
    {
      nombre: "Americano",
      ingredientes:[
        "2 oz. Campari",
        "2 oz. Vermut Rojo",
        "2 oz. Soda"
      ],
      link: "https://www.youtube.com/watch?v=7YKfOts3_3o",
      descripcion: "En un vaso ancho lleno de hielo agregar el campari, vermut rojo, soda mezclar bien los ingredientes y decorar con media rodaja de naranja.",
      img: "assets/img/Americano.jpg"
    },
    {
      nombre: "Bacardi",
      ingredientes:[
        "4,5 cl ron Bacardi superior",
        "2 cl limón ",
        "1 cl granadina",
      ],
      link: "https://www.youtube.com/watch?v=ooJ3pQgLOrU",
      descripcion: "En una coctelera verter el limón, granadina y el ron con hielos, agitar y colar en un vaso de coctel frío.",
      img: "assets/img/Bacardi.jpg"
    },
    {
      nombre: "Between the Sheets",
      ingredientes:[
        "1 oz (30 ml) Ron Blanco",
        "1 oz (30 ml) Brandy o Cognac",
        "1 oz (30 ml) Triple Seco",
        "1/2 oz (15 ml) Jugo de limón",
        "1/2 oz (15 ml) Jarabe de azúcar (esto es opcional para suavizar)"
      ],
      link: "https://www.youtube.com/watch?v=kWk9aEF6A-w",
      descripcion: "En una coctelera verter jugo de limón, triple seco, brandy o cognac, ron blanco con hielos y jarabe de azúcar, agitar y colar en un vaso frío de coctel. Decorar con cascar de naranja o a su gusto.",
      img: "assets/img/BetweenTheSheets.jpg"
    },
    {
      nombre: "Black Russian/White Russian",
      ingredientes:[
        "5 cl. vodka",
        "2 cl. Licor de café",
        "Jarabe de azúcar",
        "Crema de leche"
      ],
      link: "https://www.youtube.com/watch?v=mslRGG2IpVk",
      descripcion: "En un vaso verter vodka, licor de café, jarabe de azúcar y hielo remover suavemente. Agregar la crema de leche en forma de hilo decorar a su gusto.",
      img: "assets/img/BlackRussianWhiRussian.jpg"
    },
    {
      nombre: "Bloody Mary",
      ingredientes:[
        "9 cl de zumo de tomate",
        "4.5 cl de vodka",
        "1.5 cl de zumo de limón",
        "2 o 3 toques de salsa Worcestershire o perrins",
        "Tabasco, sal y pimienta"
      ],
      link: "https://www.youtube.com/watch?v=SSZh1_wnO2k",
      descripcion: "En una coctelera vertemos hielo, vodka, jugo de tomate, sal, tabasco, salsa Worcestershire o perrins y pimienta, remover los ingredientes suavemente y echarlo en un vaso largo. Se puede adornar con apio y media tajada de limón.",
      img: "assets/img/BloodyMary.jpg"
    },
    {
      nombre: "Casino",
      ingredientes:[
        "Hielo",
        "4 cl de Old Tom Gin",
        "1 cl de Marasquino",
        "1 cl de amargo naranja",
        "1 cl de jugo de limón",
        "Cascara de limón"
      ],
      link: "https://www.youtube.com/watch?v=B19MfXQlSVs",
      descripcion: "Mezclar old tom gin, marrasquino, amargo de naranja, limón, en una coctelera con hielos, agitar bien, colar en un vaso de coctel frío y decorar con cascara de limón.",
      img: "assets/img/Casino.jpg"
    },
    {
      nombre: "Piña colada sin alcohol",
      ingredientes:[
        "1 lata Crema de coco",
        "1 lata Leche condensada",
        "1 lata Leche evaporada",
        "½ litro Jugo de piña",
        "2 rebanadas piña"
      ],
      link: "https://www.youtube.com/watch?v=_cBVXcihDJ8",
      descripcion: "En una licuadora agregamos el jugo de piña, piña, leche evaporada, crema de coco, leche condensada y licuar. Cernir y licuar de nuevo pero con hielo. Servir y decorar con piña y cerezas.",
      img: "assets/img/pinaColadaSinAlcohol.jpg"
    },
    {
      nombre: "Shirley Temple",
      ingredientes:[
        "35 gramos de granadina",
        "14 gramos de zumo de limón ",
        "14 gramos de jugo de lima exprimida",
        "Hielo",
        "85 gramos de soda",
        "2 cerezas al marraschino"
      ],
      link: "https://www.youtube.com/watch?v=JR8M-6WVgGM",
      descripcion: "Ponemos la granadina, el zumo de limón y el jugo de lima en un vaso alto. Removemos con una cuchara de cóctel o con una pajita hasta que se combine todo. Ponemos hielo en el vaso y añadimos la soda hasta llenarlo. Removemos otra vez hasta mezclarlo todo y decoramos con las cerezas al marraschino.",
      img: "assets/img/ShirleyTemple.jpg"
    },
    {
      nombre: "San Francisco",
      ingredientes:[
        "15 cl de zumo de naranja",
        "3 cl de zumo de limón",
        "6 cl de zumo de piña",
        "3 cl de zumo de melocotón",
        "3 cl de granadina",
        "Hielo"
      ],
      link: "https://www.youtube.com/watch?v=eXmk6fpkx60",
      descripcion: "Añadir todos los zumos en la coctelera, agitar bien, y servir la mezcla en un vaso alto y ancho, tipo Collins, repleto de hielo. Se puede decorar con una rodaja de naranja y una guinda.",
      img: "assets/img/sanFrancisco.jpg"
    },
    {
      nombre: "Sangría",
      ingredientes:[
        "750 ml de vino tinto (1 botella)",
        "2 latas de refresco de limón",
        "100 ml de ginebra (1 copa)",
        "1/2 manzana verde",
        "1/2 manzana roja",
        "1/2 melocotón",
        "1 limón",
        "1 naranja",
        "2 a 5 cucharadas de azúcar (al gusto)"
      ],
      link: "https://www.youtube.com/watch?v=Nn9WicidzD8",
      descripcion: "Lava bien la fruta que vas a emplear. Corta en daditos el melocotón y las manzanas. Corta la naranja y el limón en rodajas y luego parte por la mitad si ves que son muy grandes. Vierte el vino en un recipiente de cristal o acero inoxidable. ",
      img: "assets/img/sangria.jpg"
    }
  ];

  constructor( private messageService: MessageService ) {
    console.log('Servicio listo para usar!!!');
  }

  // Funcion que se encarga de obtener el listado de Heroes, devuelve un array de tipo Heroe
  getRecetas():Receta[] {
    this.log("getReceta()");
    return this.recetas;

  }

  getReceta( idx: string):Receta {
    this.log("getReceta("+idx+")");
    return this.recetas[idx];
  }

  buscarRecetas( termino:string ):Receta[] {

    let reccetasArr:Receta[] = [];
    termino = termino.toLowerCase();

    for (let receta of this.recetas ) {

      let nombre = receta.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0 ) {
        reccetasArr.push( receta );
        this.log("buscarRecetas("+termino+")");
      }
    }

    return reccetasArr;
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('RecetaService: ' + message);
  }


}
// Declaración del objeto Hereo (es la estructura que requerira nuestro elemento)
// Se escribe la palabra reservada "export" porque se necesita exportarlo a otros componentes
export interface Receta {
  nombre: string;
  ingredientes: Array<any>;
  link: string;
  descripcion: string;
  img: string;
  //aparicion: string ;
  //casa: string;
}

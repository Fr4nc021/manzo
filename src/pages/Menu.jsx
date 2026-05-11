import { useState, useRef } from "react";
import "../styles/menu.css";

const categories = [
  {
    id: "entradas",
    name: "Entradas",
    items: [    
      
      {
      name: "Couvert",
      description: "Couvert especial da casa."
    },
    {
      name: "Empanada",
      description: "Empanadas fritas de carne ou gorgonzola com cebola."
    },
    {
      name: "Pão de Alho",
      description: "Pão de alho feito na casa, com alho assado e parmesão."
    },
    {
      name: "Provoleta",
      description: "Queijo provolone no estilo parrillero."
    },
    {
      name: "Linguiça Parrillera",
      description: "Linguiça suína artesanal de 250g."
    },
    {
      name: "Linguiça Provoleta",
      description: "Linguiça suína e queijo provolone grelhados na parrilla."
    },
    {
      name: "Molleja",
      description:
        "Peça tradicional dos miúdos na parrilla, é a glândula do pescoço do boi, conhecida como “timo”."
    },
    {
      name: "Morcilla",
      description: "Embutido suíno tradicional das parrillas."
    }

  ]
  },
  {
    id: "saladas",
    name: "Saladas",
    items:  [
      {
        "name": "Da horta",
        "description": "seleção de folhas verdes e legumes na brasa."
      },
      {
        "name": "Salada manzo",
        "description": "seleção de folhas, tomates cerejas confitados, mussarela de búfala, azeitonas pretas, e vinagrete."
      },
      {
        "name": "Salada de batata",
        "description": "salada de batatas com maionese caseira e um toque de azeite de oliva (250g)."
      }
    ]
  },

  {
    id: "carnes",
    name: "Carnes",
    items: [
      {
        "name": "Bife de chorizo",
        "description": "Miolo do contrafilé, corte de sabor incrível, um dos mais tradicionais da parrilla."
      },
      {
        "name": "Assado de tira",
        "description": "Corte transversal de costela com osso."
      },
      {
        "name": "Entrecot – premium",
        "description": "Famoso corte de ponta do contrafilé marmorizado de sabor único."
      },
      {
        "name": "Entrana",
        "description": "Corte alongado de bom marmoreio e maciez incrível. Também conhecido como Skirt Steak."
      },
      {
        "name": "Denver",
        "description": "Corte do dianteiro bovino, proveniente da região do acém."
      },
      {
        "name": "Picanha",
        "description": "Corte com generosa e uniforme camada de gordura proporcionando um sabor e maciez únicos."
      },
      {
        "name": "Prime rib",
        "description": "Um corte primoroso da costela de 900g na transversal e sua carne suculenta!"
      },
      {
        "name": "Carré de cordeiro",
        "description": "Corte mais nobre do cordeiro, o carré apresenta sabor e maciez incríveis."
      },
      {
        "name": "Frango parrillero",
        "description": "Sobrecoxa desossada marinada com ervas e assada na parrilla."
      },
      {
        "name": "Matambrito manzo",
        "description": "Matambre suíno grelhado com tempero da casa levemente picante e agridoce."
      }
    ]
  },
  {
    id: "pratos",
    name: "Pratos",
    items: [
      {
        "name": "Especial dia (Somente almoço)",
        "description": "Especiais de terça a sexta feira. Consulte a opção do dia. (Somente almoço)"
      },
      {
        "name": "Executivo (Somente almoço)",
        "description": "Entrecot ou frango, arroz, feijão, batata frita, ovo frito, salada. (Somente almoço)"
      },
      {
        "name": "Entrecot dijon",
        "description": "Suculento bife de entrecot grelhado ao molho especial da casa com base de dijon. Acompanha fritas ou salada de batata."
      },
      {
        "name": "Entrecot gorgonzola",
        "description": "Suculento bife de entrecot grelhado ao molho especial da casa com base de gorgonzola. Acompanha fritas ou salada de batata."
      },
      {
        "name": "Milanesa manzo",
        "description": "Bife empanado e gratinado com mussarela, tomate e salsa verde. Acompanha fritas."
      },
      {
        "name": "Milanesa fugazzeta",
        "description": "Com cebola, gorgonzola e mussarela. Acompanha fritas."
      },
      {
        "name": "Kids (Somente crianças)",
        "description": "Iscas de entrecot, feijão, arroz e fritas. (Somente para crianças)"
      }
    ]
  },
  {
    id: "acompanhamentos",
    name: "Acompanhamentos",
    items: [
      {
        "name": "Tábua de legumes",
        "description": "Legumes assados na parrilla, com azeite de ervas."
      },
      {
        "name": "Morrones a la parrilla",
        "description": "Pimentão recheado com ovo e queijo assado na parrilla."
      },
      {
        "name": "Couve flor gratinada",
        "description": "Couve flor gratinada com molho gorgonzola."
      },
      {
        "name": "Champiñones",
        "description": "Cogumelos salteados na manteiga com tempero verde."
      },
      {
        "name": "Batata recheada",
        "description": "Lentamente assada e recheada com molho de gorgonzola."
      },
      {
        "name": "Arroz branco",
        "description": ""
      },
      {
        "name": "Batata frita",
        "description": ""
      },
      {
        "name": "Batata rustica",
        "description": ""
      },
      {
        "name": "Farofa manzo",
        "description": ""
      },
      {
        "name": "Cafézinho",
        "description": ""
      }
    ]
  },
  {
    id: "sobremesas",
    name: "Sobremesas",
    items: [
    {
      "name": "Panqueca com dulce de leche",
      "description": "O autêntico doce de leite uruguaio envolto em massa de panqueca, maçaricado, e servido com sorvete de creme."
    },
    {
      "name": "Coalho com doce de leite",
      "description": "Queijo coalho grelhado na brasa com o famoso e delicioso doce de leite uruguaio."
    },
    {
      "name": "Marshmallow com chocolate",
      "description": "Panelinha de ganache de chocolate meio amargo com marshmallow tostado."
    },
    {
      "name": "Banana brulee",
      "description": "Banana caramelizada acompanhado de doce de leite e sorvete de creme."
    },
    {
      "name": "Torta chajá",
      "description": "Doce tradicional das parrillas uruguaias, é uma torta a base de doce de leite, pêssegos e merengue."
    }
  ]
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        "name": "Guaipeca",
        "description": "Bacardi prata, licor artesanal de doce de leite, leite de coco e xarope de abacaxi grelhado. Características: cremoso e adocicado."
      },
      {
        "name": "Sangrita",
        "description": "Vinho tinto, redução de brut rosé, frutas vermelhas, ramazzotti rosato. Características: vínico e frisante."
      },
      {
        "name": "Campari tonica",
        "description": "Campari, tônica. Características: amargo e refrescante."
      },
      {
        "name": "Amaretto sour",
        "description": "Licor amaretto, suco de limão, xarope simples. Características: cítrico e adocicado."
      },
      {
        "name": "Pinicillin",
        "description": "Whiskey blended, xarope de mel, xarope de gengibre, suco de limão. Características: cítrico e adocidado."
      },
      {
        "name": "Aperol spritz",
        "description": "Aperol, espumante brut, água com gás. Características: adocicado e refrescante."
      },
      {
        "name": "Mojito",
        "description": "Rum, folhas de hortelã, suco de limão, água com gás. Características: cítrico e refrescante."
      },
      {
        "name": "Jack & coke",
        "description": "Clássico Jack Daniel's e Coca."
      },
      {
        "name": "Vivente",
        "description": "Cachaça amburana, xarope de abacaxi grelhado, ramazzotti amaro, limão siciliano e tônica. Características: herbal e refrescante."
      },
      {
        "name": "Muy guava",
        "description": "Little blanc, vermute bianco, suco de goiaba, tahiti e brut rosé. Características: refrescante, vínico e frutado."
      },
      {
        "name": "Florada",
        "description": "Vinho branco, little blanc, geléia de damasco e limão siciliano. Características: seco e levemente adocicado."
      },
      {
        "name": "Manzopirinha",
        "description": "Cachaça prata, cachaça sassafrás, mel e limão bergamota. Características: amadeirado e cítrico."
      },
      {
        "name": "Licor de dulche de leche",
        "description": "Um licor feito por nós, de cair o queixo! Sensacional!"
      },
      {
        "name": "Fernet cola",
        "description": "Fernet branca e cola. Características: herbal e doce."
      },
      {
        "name": "Amarguito",
        "description": "Fernet branca, vermute rosso, suco de bergamota, siciliano e açúcar. Características: herbal e frutado."
      },
      {
        "name": "Clementina",
        "description": "Suco de bergamota, mel, siciliano e espumante da casa sem álcool. Características: cítrico e defumado."
      },
      {
        "name": "Guapa",
        "description": "Leite de coco, xarope de abacaxi grelhado, geléia de damasco e siciliano. Características: cremoso e adocicado."
      },
      {
        "name": "Taça de espumante sem álcool da casa",
        "description": ""
      }
    ]
  },
  {
    id: "chopp",
    name: "Chopp",
    items: [
      { 
        "name": "Cachorro Ovelheiro - IPA",
        "description": "Unica eleita 3 vezes a melhor IPA do Brasil. "
      },
      { 
        "name": "Chopp Stella Artois Pilsener",
        "description": ""
      },
      { 
        "name": "Chopp Patagônia Amber Lager",
        "description": ""
      },
      { 
        "name": "Chopp Patagônia",
        "description": ""
      }
    ]
  }
];

/** Fileiras dos botões de categoria (layout em “degrau”: 3 + 1 + 2 + 2) */
const categoryRows = [
  ["entradas", "carnes", "pratos"],
  ["acompanhamentos"],
  ["sobremesas", "drinks"],
  ["saladas", "chopp"],
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(null);
  const menuItemsRef = useRef(null);

  const currentCategory = activeCategory
    ? categories.find((cat) => cat.id === activeCategory)
    : undefined;

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    // Scroll suave para a seção de pratos após um pequeno delay
    setTimeout(() => {
      menuItemsRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  return (
    <>
      <section id="menu" className="menu-section">
        <div className="menu-container">
          {/* Título */}
          <h1 className="menu-title">Nosso Menu</h1>
          
          {/* Descrição */}
          <p className="menu-description">
            Seleção especial de carnes nobres e pratos tradicionais da parrilla, 
            preparados com técnica e paixão.
          </p>

    
            <a
            href="https://drive.google.com/file/d/1sfFk_r_ymmcfbNHkG0H39qrSakSPHlgL/view"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-cta-button"
            >
            <span>Acessar Cardápio completo</span>

            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M5 15L15 5M15 5H5M15 5V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
            </a>

          {/* Botões de Categorias — fileiras: 3 | 1 (largo) | 2 | 2 */}
          <div className="categories-wrap" role="tablist" aria-label="Categorias do menu">
            {categoryRows.map((rowIds, rowIndex) => (
              <div
                key={rowIndex}
                className={`categories-row${rowIds.length === 1 ? " categories-row--single" : ""}`}
              >
                {rowIds.map((categoryId) => {
                  const category = categories.find((c) => c.id === categoryId);
                  if (!category) return null;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="tab"
                      aria-selected={category.id === activeCategory}
                      className={`category-button${
                        rowIds.length === 1 ? " category-button--wide" : ""
                      } ${category.id === activeCategory ? "active" : ""}`}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.name}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Área de Conteúdo dos Pratos — só aparece após escolher uma categoria */}
          <div className="menu-items-container" ref={menuItemsRef}>
            {currentCategory && (
              <>
                <h2 className="current-category-title">{currentCategory.name}</h2>
                <div className="menu-items-list">
                  {currentCategory.items.map((item, index) => (
                    <div key={index} className="menu-item">
                      <div className="menu-item-header">
                        <h3 className="menu-item-name">{item.name}</h3>
                      </div>

                      <p className="menu-item-description">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}


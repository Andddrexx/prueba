import React, { useState } from 'react';
import { MenuCategory } from './components/MenuCategory';
import { SubMenuCategory } from './components/SubMenuCategory';

// Menu data with spirits organized by categories
const menuData = {
  refreshments: {
    title: 'Refrescos',
    items: [
      { name: 'RED BULL', price: '2,50 €', description: '' },
      { name: 'RED BULL SIN AZÚCAR', price: '2,50 €', description: '' },
      { name: 'COCA COLA', price: '2,50 €', description: 'Light, Zero' },
      { name: 'FANTA', price: '2,50 €', description: 'Light, Zero' },
      { name: 'TÓNICA SCHWEPPES', price: '2,50 €', description: 'Zero' },
      { name: 'SEVEN UP', price: '2,00 €', description: '' },
      { name: 'LIPTON TEA', price: '2,30 €', description: '' },
      { name: 'CASERA', price: '1,30 €', description: '' },
      { name: 'PEPSI', price: '2,00 €', description: '' },
    ],
  },
  beers: {
    title: 'Cervezas',
    items: [
      { name: 'TOSTADA DE ÁMBAR', price: '2,90 €', description: '' },
      { name: 'MAHOU CINCO ESTRELLAS', price: '2,90 €', description: '' },
      { name: 'ESTRELLA GALICIA', price: '2,90 €', description: '' },
      { name: 'ALHAMBRA', price: '2,90 €', description: '' },
      { name: 'CORONITA', price: '2,90 €', description: '' },
      { name: 'CERVEZA 1870', price: '2,90 €', description: '' },
    ],
  },
  spirits: {
    title: 'Combinados',
    subcategories: {
      ron: {
        title: 'RON',
        items: [
          { name: 'BRUGAL', price: '8,00 €', description: '' },
          { name: 'BRUGAL EXTRA VIEJO', price: '8,00 €', description: '' },
          { name: 'BARCELO', price: '8,00 €', description: '' },
          { name: 'LEGENDARIO', price: '8,00 €', description: '' },
        ],
      },
      whisky: {
        title: 'WHISKY',
        items: [
          { name: 'JB', price: '7,00 €', description: '' },
          { name: 'RED LABEL ', price: '7,00 €', description: '' },
          { name: 'DYC', price: '7,00 €', description: '' },
          { name: 'BALLANTINES', price: '7,00 €', description: '' },
          { name: 'JAMESON', price: '8,00 €', description: '' },
        ],
      },
      vodka: {
        title: 'VODKA',
        items: [
          { name: 'ERISTOFF', price: '7,00 €', description: '' },
          { name: 'BELVEDERE', price: '8,00 €', description: '' },
          { name: 'ABSOULUT', price: '7,00 €', description: '' },
        ],
      },
      ginebra: {
        title: 'GINEBRA',
        items: [
          { name: 'LARIOS 12', price: '9,00 €', description: '' },
          { name: 'PUERTO DE INDIAS', price: '8,00 €', description: '' },
          { name: 'BOMBAY SAPPHIRE', price: '9,00 €', description: '' },
          { name: 'NORDES', price: '9,00 €', description: '' },
          { name: 'FEATER', price: '6,00 €', description: '' },
        ],
      },
    },
  },
  cocktails: {
    title: 'Coktails',
    items: [
      {
        name: 'MOJITO CLÁSICO',
        price: '9,00 €',
        description: 'Ron, soda, limón y menta',
      },
      {
        name: 'SEX ON THE BEACH',
        price: '8,00 €',
        description:
          'Vodka, zumo de naranja, zumo de arándanos y zumo de melocotón',
      },
      {
        name: 'LONG ISLAND ICE TEA',
        price: '8,00 €',
        description:
          'Ginebra, vodka, ron, tequila, triple seco y zumo de limón',
      },
      {
        name: 'PIÑA COLADA',
        price: '8,00 €',
        description: 'Ron, zumo de piña y leche de coco',
      },
      {
        name: 'CAIPIROSKA',
        price: '6,00 €',
        description: 'Vodka, zumo de limón y azúcar',
      },
      {
        name: 'BLODDY MARY',
        price: '8,00 €',
        description: 'Vodka, zumo de tomate, salsa inglesa, tabasco y lima',
      },
    ],
  },
  mocktails: {
    title: 'Coktails sin alcohol y Zumos',
    items: [
      {
        name: 'PIÑA COLADA',
        price: '7,00 €',
        description: 'Zumo de piña, zumo de coco y sirope de coco',
      },
      {
        name: 'SAN FRANCISCO',
        price: '7,00 €',
        description:
          'Zumo de piña, zumo de naranja, zumo de limón y mix de frutas',
      },
      { name: 'LIMONADA', price: '4,00 €', description: 'Limón y azúcar' },
      { name: 'ZUMO DE PIÑA', price: '2,50 €', description: '' },
      { name: 'ZUMO DE ZANAHORIA', price: '3,00 €', description: '' },
      { name: 'ZUMO DE NARANJA', price: '3,00 €', description: '' },
      { name: 'ZUMO DE TOMATE', price: '3,50 €', description: '' },
      { name: 'ZUMO DE MELOCOTÓN', price: '2,50 €', description: '' },
    ],
  },
  hookah: {
    title: 'Cachimbas',
    items: [
      {
        name: 'BERLIN NIGHTS',
        price: '14,00 €',
        description: 'Melocotón y menta',
      },
      {
        name: 'BLUE YELLOW',
        price: '14,00 €',
        description: 'Melón y arándanos',
      },
      {
        name: 'GREEN LEON KIZZ',
        price: '14,00 €',
        description: 'Lima y menta',
      },
      {
        name: 'LADY KILLER',
        price: '14,00 €',
        description: 'Melocotón, mango, menta y hielo',
      },
      { name: 'LOVE 66', price: '14,00 €', description: '6 sabores y menta' },
      { name: 'DOS MANZANAS', price: '14,00 €', description: '' },
      {
        name: 'THREE ÁNGELES',
        price: '14,00 €',
        description: 'Pomelo, maracuyá y hielo',
      },
      {
        name: 'ESKIMO LEON',
        price: '14,00 €',
        description: 'Kiwi, limón y hielo',
      },
      {
        name: 'GIPSY KINGS',
        price: '14,00 €',
        description: 'Melón dulce, melocotón, sandía y limón',
      },
      {
        name: 'BLUE DRAGON',
        price: '14,00 €',
        description: 'Fruta dragón, arándanos y bombón helado',
      },
      {
        name: 'SKYFALL',
        price: '14,00 €',
        description: 'Melocotón, sandía, melón y hielo',
      },
      { name: 'HAWAI', price: '14,00 €', description: 'Piña, mango y menta' },
      {
        name: 'AMORE',
        price: '14,00 €',
        description: 'Piña, crema de plátano y hielo',
      },
      {
        name: 'LAVANDA SHISHA',
        price: '14,95 €',
        description: 'Sabores especiales de la casa',
      },
    ],
  },
  food: {
    title: 'Comida',
    items: [
      {
        name: 'HAMBURGUESA DE CERDO',
        price: '0,00 €',
        description: 'Cerdo, lechuga, tomate y queso',
      },
      {
        name: 'HAMBURGUESA DE TERNERA',
        price: '0,00 €',
        description: 'Ternera, lechuga, tomate y queso',
      },
      {
        name: 'HAMBURGUESA DE POLLO',
        price: '0,00 €',
        description: 'Pollo, lechuga, tomate y queso',
      },
    ],
  },
};

function App() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);

  const handleCategoryToggle = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
    // Reset subcategory when changing main category
    if (openCategory !== category) {
      setOpenSubCategory(null);
    }
  };

  const handleSubCategoryToggle = (subcategory: string) => {
    setOpenSubCategory(openSubCategory === subcategory ? null : subcategory);
  };

  // Define the order of categories
  const categoryOrder = [
    'refreshments',
    'beers',
    'spirits',
    'cocktails',
    'mocktails',
    'hookah',
    'food',
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
        url('https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=60&w=800')`,
      }}
    >
      <div className="max-w-3xl mx-auto px-3 py-6">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-amber-100 mb-2">
            Lavanda Shisha Lounge
          </h1>
          <p className="text-amber-100/70 text-base mb-4">
            Disfruta de nuestra selección de bebidas y cachimbas en un ambiente
            único
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-300 mb-4">
            Nuestra Carta
          </h2>
        </header>

        <nav className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
          {categoryOrder.map((key) => {
            if (key === 'spirits') {
              return (
                <div
                  key={key}
                  className="border-b border-amber-200/20 last:border-b-0"
                >
                  <button
                    onClick={() => handleCategoryToggle(key)}
                    className="w-full p-3 text-lg font-medium text-amber-100 hover:bg-white/5 transition-colors duration-200 focus:outline-none"
                    aria-expanded={openCategory === key}
                  >
                    <span className="text-center block">
                      {menuData[key].title}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      openCategory === key
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-1 py-2">
                        {Object.entries(menuData.spirits.subcategories).map(
                          ([subKey, subCategory]) => (
                            <SubMenuCategory
                              key={subKey}
                              title={subCategory.title}
                              items={subCategory.items}
                              isOpen={openSubCategory === subKey}
                              onToggle={() => handleSubCategoryToggle(subKey)}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <MenuCategory
                  key={key}
                  title={menuData[key].title}
                  items={menuData[key].items}
                  isOpen={openCategory === key}
                  onToggle={() => handleCategoryToggle(key)}
                />
              );
            }
          })}
        </nav>

        <footer className="mt-8 text-center text-amber-100/50 text-xs">
          <p>Abierto todos los días de 10:00 - 00:00</p>
          <p>Reservas: +34 614 234 758</p>{' '}
        </footer>
      </div>
    </div>
  );
}

export default App;

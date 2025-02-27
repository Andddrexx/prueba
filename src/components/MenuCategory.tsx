import React from 'react';

interface MenuItemType {
  name: string;
  price: string;
  description: string;
}

interface MenuCategoryProps {
  title: string;
  items: MenuItemType[];
  isOpen: boolean;
  onToggle: () => void;
}

export function MenuCategory({ title, items, isOpen, onToggle }: MenuCategoryProps) {
  return (
    <div className="border-b border-amber-200/20 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full p-3 text-lg font-medium text-amber-100 hover:bg-white/5 transition-colors duration-200 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-center block">{title}</span>
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-3 space-y-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="group hover:bg-white/5 p-2 rounded-lg transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-amber-100 font-medium group-hover:text-amber-300 transition-colors duration-200 text-sm sm:text-base">
                    {item.name}
                  </h3>
                  <span className="text-amber-300 font-medium ml-2 text-sm sm:text-base whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                {item.description && (
                  <p className="text-amber-100/70 text-xs sm:text-sm mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
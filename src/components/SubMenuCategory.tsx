import React from 'react';

interface MenuItemType {
  name: string;
  price: string;
  description: string;
}

interface SubMenuCategoryProps {
  title: string;
  items: MenuItemType[];
  isOpen: boolean;
  onToggle: () => void;
}

export function SubMenuCategory({ title, items, isOpen, onToggle }: SubMenuCategoryProps) {
  return (
    <div className="border-t border-amber-200/10 first:border-t-0 mx-3">
      <button
        onClick={onToggle}
        className="w-full p-2 text-base font-medium text-amber-100 hover:bg-white/5 transition-colors duration-200 focus:outline-none text-left"
        aria-expanded={isOpen}
      >
        <span className="block pl-2">{title}</span>
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-2 space-y-2 pl-4">
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
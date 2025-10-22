import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsGrid({ products, viewMode }: any) {
  const gridColsMap: { [key: string]: string } = {
  'grid-3': 'lg:grid-cols-3',
  'grid-4': 'lg:grid-cols-4',
  'grid-5': 'lg:grid-cols-5',
};

const gridCols = gridColsMap[viewMode];

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">No products available in this category</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 ${gridCols} gap-6`}>
      {products.map((product: any) => (
        <ProductCard key={product.baseId} product={product} />
      ))}
    </div>
  );
}
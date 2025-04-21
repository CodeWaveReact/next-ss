'use client'
import { ProductProps } from "@/app/(main)/products/page";
import { withClientSideCheck } from "../withClientSideCheck";

import Image from "next/image";
import Link from "next/link";

const Product = ({ products }: { products: ProductProps[] }) => {
  console.log('products', products)
  return (
    <div className="flex flex-wrap">
     {products?.map((product: ProductProps) => (
         <div key={product.id} className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] xl:w-[calc(20%-1rem)] p-2">
         <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
           <Link className="relative mx-2 mt-2 flex h-48 sm:h-56 md:h-60 overflow-hidden rounded-xl" href="#">
             <Image 
               width={500} 
               height={500} 
               className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
               src={product.category.image} 
               alt="product image" 
               loading="lazy"
             />
           </Link>
           <div className="mt-4 px-5 pb-5">
             <Link href="#">
               <h5 className="text-lg sm:text-xl tracking-tight text-slate-900 line-clamp-2">{product.title}</h5>
               <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
             </Link>
             <div className="mt-2 mb-5 flex items-center justify-between">
               <span className="text-2xl sm:text-3xl font-bold text-slate-900">${product.price}</span>
             </div>
             <Link 
               href="/xyz" 
               className="flex items-center justify-center rounded-md bg-slate-900 px-3 sm:px-5 py-2 sm:py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-300"
             >
               <svg 
                 xmlns="http://www.w3.org/2000/svg" 
                 className="mr-2 h-5 w-5 sm:h-6 sm:w-6" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor" 
                 strokeWidth={2}
               >
                 <path 
                   strokeLinecap="round" 
                   strokeLinejoin="round" 
                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                 />
               </svg>
               Add to cart
             </Link>
           </div>
         </div>
       </div>
      ))}
    </div>
  );
  
};

export default withClientSideCheck(Product); 
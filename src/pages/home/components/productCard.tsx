export const ProductCard=()=>{
    return <>
    <div className='flex justify-center items-center gap-4'>
                <div className='bg-slate-200 p-2 rounded-md'>
                    <div className='w-40 h-40 overflow-hidden'>
                        <img src={'.././products/p1.png'} className='w-full h-full object-cover' alt='Products'></img>
                    </div>
                    <div>
                        <h1 className=' text-slate-800 text-lg py-2'>Piedras</h1>
                    </div>
                    <div>
                        <h1 className='text-md font-bold text-slate-500'>$ 17</h1>
                    </div>
                    <div className='w-full text flex justify-center py-2'>
                        <button className='bg-primary text-sm text-white py-1 px-2 rounded-md hover:bg-[#c79243]'>Add to cart</button>
                    </div>
                </div>
                <div className='bg-slate-200 p-2 rounded-md'>
                    <div className='w-40 h-40 overflow-hidden'>
                        <img src={'.././products/p2.png'} className='w-full h-full object-cover' alt='Products'></img>
                    </div>
                    <div>
                        <h1 className=' text-slate-800 text-lg py-2'>Piedras</h1>
                    </div>
                    <div>
                        <h1 className='text-md font-bold text-slate-500'>$ 20</h1>
                    </div>
                    <div className='w-full text flex justify-center py-2'>
                        <button className='bg-primary text-sm text-white py-1 px-2 rounded-md hover:bg-[#c79243]'>Add to cart</button>
                    </div>
                </div>
                <div className='bg-slate-200 p-2 rounded-md'>
                    <div className='w-40 h-40 overflow-hidden'>
                        <img src={'.././products/p4.png'} className='w-full h-full object-cover' alt='Products'></img>
                    </div>
                    <div>
                        <h1 className=' text-slate-800 text-lg py-2'>Piedras</h1>
                    </div>
                    <div>
                        <h1 className='text-md font-bold text-slate-500'>$ </h1>
                    </div>
                    <div className='w-full text flex justify-center py-2'>
                        <button className='bg-primary text-sm text-white py-1 px-2 rounded-md hover:bg-[#c79243]'>Add to cart</button>
                    </div>
                </div>
            </div>
    </>
}
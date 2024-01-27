import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const {totalPrice, totalProducts} = props

    return(
        <div className="flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg cursor-pointer ">
            <p className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <span className='font-light'>01.02.23</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </div>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black'/>
                </p>

            </p>
        </div>
    )
}

export default OrdersCard

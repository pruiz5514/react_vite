const Card = () => {
    return(
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    Electronics
                </span>
                <img className="w-full h-full object-cover rounded-lg" src="https://media.istockphoto.com/id/1400263773/es/foto/ilustraci%C3%B3n-3d.jpg?s=1024x1024&w=is&k=20&c=UQSGsY6Ya6IBgwwilEqyamTUpdx5353qHVEMz9D8fag=" alt="headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-start bg-white w-7 h-7 rounded-full m-2">
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Headphones</span>
                <span className="text-lg font-medium">$300</span>
            </p>
        </div>
    )
}

export default Card
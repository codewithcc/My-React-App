const ServiceCard = ({ title, items, onClick }) => {
    return (
        <div className="flex flex-col justify-between gap-6 p-5 w-[300px] min-h-[450px] bg-white border border-gray-200 rounded-xl shadow-lg transform transition-all ease-in-out duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex flex-col items-center gap-4 w-full">
                <h2 className="text-2xl font-bold text-center">{title}</h2>
                <ul className="list-disc w-full pl-8 text-lg">
                    {items.map((item, index) => (
                        <li key={index} className="mb-1.5">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <button 
                onClick={onClick}
                className="w-full bg-yellow-300 text-black text-center py-2 text-lg rounded-lg font-bold transition-all ease-in-out duration-200 hover:bg-black hover:text-yellow-300 cursor-pointer"
            >
                Contact
            </button>
        </div>
    );
}

export default ServiceCard;
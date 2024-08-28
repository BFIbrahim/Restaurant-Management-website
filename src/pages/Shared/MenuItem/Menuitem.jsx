
const Menuitem = ({item}) => {

    const {name, image, price, recipe} = item

    return (
        <div className="flex  gap-5 mb-4 px-4 md:px-0">
            <img className="w-[100px] h-[100px] rounded-tr-full rounded-br-full rounded-bl-full" src={image} alt="" />
            <div className="">
                <h3 className="uppercase">{name} -----------</h3>
                <p>{recipe}</p>
                
            </div>
            <p className="font-semibold text-yellow-500">${price}</p>
        </div>
    );
};

export default Menuitem;
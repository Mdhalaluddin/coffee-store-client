import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    const { name, supplier, category, chef, teste, details, photo, _id } = coffee;
    return (
        <div>
            <h2 className="text-2xl">Update data: {name}</h2>
            
        </div>
    );
};

export default UpdateCoffee;
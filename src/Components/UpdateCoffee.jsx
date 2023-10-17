import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id, name, supplier, category, chef, teste, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const teste = form.teste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = { name, supplier, category, chef, teste, details, photo };

        console.log(updateCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }
    return (
        <div className="  rounded-lg mt-10 ">
            <div className="mx-auto bg-[#F4F3F0] w-3/4 p-10">
                <h2 className=" font-rancho text-2xl text-center my-6 text-[#374151]">Update Coffee</h2>
                <p className="text-center font-raleway p-4">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleUpdateCoffee} className="font-raleway">
                    <div className="grid md:grid-cols-2 gap-4">
                        <nav>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter coffee name" name="name" defaultValue={name} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" placeholder="Enter coffee supplier" className="input input-bordered" name="supplier" defaultValue={supplier} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" placeholder="Enter coffee category" className="input input-bordered" name="category" defaultValue={category} required />
                            </div>
                        </nav>
                        <nav>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input type="text" placeholder="Enter coffee chef" className="input input-bordered" name="chef" defaultValue={chef} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" placeholder="Enter coffee taste" name="teste" defaultValue={teste} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" placeholder="Enter coffee details" name="details" defaultValue={details} className="input input-bordered" required />
                            </div>
                        </nav>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Enter photo URL" name="photo" defaultValue={photo} className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn font-rancho bg-[#D2B48C]">Update Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;
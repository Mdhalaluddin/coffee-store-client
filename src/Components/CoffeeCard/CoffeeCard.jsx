import { AiOutlineDelete, AiFillEdit, AiOutlineFundView } from 'react-icons/Ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { name, supplier, category, chef, teste, details, photo, _id } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <nav className=" mx-auto mt-10 ">
            <div className="card card-side shadow-xl bg-[#f4ebcf]">
                <figure className="justify-start">
                    <img className="w-1/2 p-4 rounded-lg max-h-screen" src={coffee.photo} alt="Movie" />
                </figure>
                <div className="flex justify-between w-full pr-4 p-4">
                    <div>
                        <h2 className="card-title">{coffee.name}</h2>
                        <p>{supplier}</p>
                        <p>{category}</p>
                        <p>{chef}</p>
                        <p>{coffee.details}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical  space-y-2 text-lg">
                            <button className="btn bg-[#D2B48C]"><AiOutlineFundView></AiOutlineFundView></button>
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn bg-[#3C393B]"><AiFillEdit></AiFillEdit></button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744]"><AiOutlineDelete></AiOutlineDelete></button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default CoffeeCard;
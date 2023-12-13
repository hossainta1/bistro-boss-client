import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


// Image hosting start
const img_hosting_token = import.meta.env.VITE_image_upload_token;
// Image hosting end


const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }

                    console.log(newItem);

                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('After posing new items', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "New Item Add successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            })
    };

    // console.log(img_hosting_token)
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="What's New" heading="Add an Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full mb-4">
                    <div className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>

                    </div>
                    <input type="text" placeholder="Recie Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </label>
                <div className="flex my-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </div>
                        <select defaultValue="Pick One"
                            {...register("category", { required: true })}
                            className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Deseart</option>
                            <option>Desi</option>
                        </select>
                    </label>
                    <label className="form-control w-full ml-4">
                        <div className="label">
                            <span className="label-text font-semibold">Price*</span>

                        </div>
                        <input type="number"
                            {...register("price", { required: true })}
                            placeholder="Price" className="input input-bordered w-full " />
                    </label>
                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text font-semibold">Recipe Details</span>
                    </div>
                    <textarea
                        {...register("recipe", { required: true })}
                        className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                </label>

                <label className="form-control w-full my-4">
                    <div className="label">
                        <span className="label-text font-semibold">Item Image*</span>
                    </div>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full " />
                </label>

                <input className="btn btn-sm btn-success mt-4 mb-2" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield, FaUsersSlash } from "react-icons/fa";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        },
    });



    const handleMakeAdmin = id => {

    };



    const handleDelete = user => {

    };



    return (
        <div className="w-full ml-2">
            <Helmet>
                <title>Bistro | All Users</title>

            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users:{users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}

                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghos bg-orange-400 text-white "><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-400 text-white "><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
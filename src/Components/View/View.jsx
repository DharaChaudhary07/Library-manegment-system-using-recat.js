import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAsync, GetDataAsync, SingleRecord } from '../../Service/Action/LibraryAction/booksAction';

const categories = [
    "All", 
    "Fiction", 
    "Non-Fiction", 
    "Science", 
    "Biography", 
    "Physical Book", 
    "Horror Books", 
    "Comedy Books", 
    "Hindu Books", 
    "Movie Magazine", 
    "Category Book"
]; 

const ViewData = () => {
    const { Books = [] } = useSelector(state => state.LibraryManagementReducer); // Set default to []
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleView = (id) => {
        navigate(`/view-details/${id}`);
    };

    const handleEdit = (id) => {
        dispatch(SingleRecord(id));
        navigate(`/edit/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            dispatch(DeleteAsync(id));
        }
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    useEffect(() => {
        dispatch(GetDataAsync());
    }, [dispatch]);

    const filteredBooks = selectedCategory === "All" ? Books : Books.filter(book => book.genre === selectedCategory);

    return (
        <div className="container mx-auto p-6 min-h-screen">
            <div className="mb-6">
                <label htmlFor="category" className="text-white text-lg font-semibold">Select Category: </label>
                <select 
                    id="category" 
                    value={selectedCategory} 
                    onChange={handleCategoryChange} 
                    className="ml-2 p-2 rounded-lg bg-white text-gray-700 shadow-md"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredBooks.map((data) => (
                    <div key={data.id} className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
                        <div className="text-center">
                            <img 
                                src={data.image || 'path_to_default_image.jpg'} // Ensure you have a default image
                                alt={data.title} 
                                className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-gray-200" 
                            />
                        </div>

                        <h1 className="text-2xl font-bold text-center text-gray-800 mt-4">{data.title}</h1>
                        <h4 className="text-center text-gray-600">Author: <span className="text-gray-800">{data.author}</span></h4>
                        <h4 className="text-center text-gray-600">Genre: <span className="text-gray-800">{data.genre}</span></h4>
                        <h4 className="text-center text-gray-600">Year: <span className="text-gray-800">{data.year}</span></h4>

                        <div className="flex justify-center mt-4 space-x-2">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200 flex items-center"
                                onClick={() => handleView(data.id)}
                            >
                                <span className="mr-1">View</span>
                            </button>

                            <button
                                className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-200 flex items-center"
                                onClick={() => handleEdit(data.id)}
                            >
                                <span>Edit</span>
                            </button>

                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-200 flex items-center"
                                onClick={() => handleDelete(data.id)}
                            >
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewData;

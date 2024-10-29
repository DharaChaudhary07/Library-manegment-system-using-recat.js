import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure you're importing from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { AddDataPostAsync } from '../../Service/Action/LibraryAction/booksAction';

const AddForm = () => {
    const [formInput, setFormInput] = useState({
        id: '',
        title: '',
        author: '',
        genre: '',
        year: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFormInput = (e) => {
        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddDataPostAsync(formInput));
        navigate('/view');

        // Reset form input after submission
        setFormInput({
            id: '',
            title: '',
            author: '',
            genre: '',
            year: '',
        });
    };

    return (
        <>
        
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Library Management System</h2>

                <div className="container">
                    <div className="row">
                        <div className="col-10">
                        <form onSubmit={handleSubmit} >
                    <input type="text" hidden name='id' value={formInput.id} onChange={handleFormInput} />
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
                            Title :-
                        </label> 
                        <input
                            className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500"
                            type="text"
                            id="title"
                            name='title'
                            value={formInput.title}
                            onChange={handleFormInput}
                            placeholder="Enter book title"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="author">
                            Author :-
                        </label>
                        <input
                            className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500"
                            type="text"
                            id="author"
                            name='author'
                            value={formInput.author}
                            onChange={handleFormInput}
                            placeholder="Enter author's name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="genre">
                            Genre :-
                        </label>
                        <input
                            className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500"
                            type="text"
                            id="genre"
                            name='genre' 
                            value={formInput.genre} 
                            onChange={handleFormInput}
                            placeholder="Enter book genre"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="year">
                            Year :- 
                        </label>
                        <input
                            className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-blue-500"
                            type="number"
                            id="year"
                            name='year'
                            value={formInput.year}
                            onChange={handleFormInput}
                            placeholder="Enter publication year"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-dark">
                        Add Book
                    </button>
                </form>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default AddForm;
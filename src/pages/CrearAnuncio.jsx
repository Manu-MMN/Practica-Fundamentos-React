import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnunciosContext } from '../context/AnunciosContext';

const CrearAnuncio = () => {
    const navigate = useNavigate();
    const { agregarAnuncio } = useContext(AnunciosContext);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        sale: true,
        tags: [],
    });
    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const tagOptions = ['lifestyle', 'mobile', 'motor', 'work'];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleTagChange = (tag) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.includes(tag)
                ? prev.tags.filter(t => t !== tag)
                : [...prev.tags, tag]
        }));
    };

    const handlePhotoChange = (e) => {
        if (e.target.files?.[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('price', formData.price);
            data.append('sale', formData.sale);
            formData.tags.forEach(tag => data.append('tags', tag));
            if (photo) {
                data.append('photo', photo);
            }

            const nuevoAnuncio = await agregarAnuncio(data);
            navigate(`/adverts/${nuevoAnuncio.id}`);
        } catch {
            setError('Error al crear el anuncio. Por favor, inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Crear Nuevo Anuncio</h1>
            
            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Nombre
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </label>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Precio
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                            min="0"
                            step="0.01"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </label>
                </div>

                <div>
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="sale"
                            checked={formData.sale}
                            onChange={handleInputChange}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">
                            Venta (desmarca para compra)
                        </span>
                    </label>
                </div>

                <div>
                    <p className="block text-sm font-medium text-gray-700 mb-2">Tags</p>
                    <div className="space-y-2">
                        {tagOptions.map(tag => (
                            <label key={tag} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={formData.tags.includes(tag)}
                                    onChange={() => handleTagChange(tag)}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">{tag}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Foto
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="mt-1 block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-blue-50 file:text-blue-700
                                hover:file:bg-blue-100"
                        />
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    {loading ? 'Creando...' : 'Crear Anuncio'}
                </button>
            </form>
        </div>
    );
};

export default CrearAnuncio; 
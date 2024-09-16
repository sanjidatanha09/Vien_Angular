

function Topbar() {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center space-x-4">
                <button className="text-xl focus:outline-none">
                    <i className="fas fa-bars"></i>
                </button>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border px-4 py-2 rounded focus:outline-none"
                />
            </div>
            <div className="flex items-center space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Buy</button>
                <span className="font-bold">EN</span>
                <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                />
            </div>
        </div>
    );
}

export default Topbar;

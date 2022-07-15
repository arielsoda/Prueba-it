
const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="relative w-24 h-24 rounded-full animate-spin bg-gradient-to-r from-pink-600 via-indigo-600 to-green-600">
                <div className="absolute w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-full top-1/2 left-1/2">
                </div>
            </div>
        </div>
    )
};

export default Loading;
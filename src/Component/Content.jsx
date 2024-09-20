import Iphone from '../../public/Iphone.png';

const Content = () => {
    return (
        <>
           
            <div className="bg-black text-white mb-2">
                <div className="relative min-h-screen flex items-center justify-center lg:justify-between px-4 lg:px-20">
               
                    <div className="absolute lg:static lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                            iPhone
                        </h1>
                        <p className="text-lg lg:text-2xl mb-6 lg:mb-8 leading-relaxed">
                            Sistem Kamera tercanggih kami. Chip ultra cepat. Dan USB-C
                        </p>
                        <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 lg:gap-6">
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition">
                                Selengkapnya
                            </button>
                            <button className="px-6 py-3 bg-gray-300 text-gray-900 rounded-full shadow-lg hover:bg-gray-200 transition">
                                Beli iPhone
                            </button>
                        </div>
                    </div>

                    <div className="absolute right-0 bottom-0 lg:w-1/2">
                        <img src={Iphone} alt="iPhone 15 Pro" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div className="bg-black text-white mb-2">
                <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 lg:px-20">
             
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                            iPhone 13
                        </h1>
                        <p className="text-lg lg:text-2xl mb-6 lg:mb-8 leading-relaxed">
                            Sistem Kamera tercanggih kami. Chip ultra cepat. Dan USB-C
                        </p>
                        <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6">
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition">
                                Selengkapnya
                            </button>
                            <button className="px-6 py-3 bg-gray-300 text-gray-900 rounded-full shadow-lg hover:bg-gray-200 transition">
                                Beli iPhone
                            </button>
                        </div>
                    </div>
                 
                    <div className="mt-10 lg:mt-16 w-full lg:w-1/2">
                        <img src={Iphone} alt="iPhone 13" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>

            <div className="bg-black text-white mb-2">
                <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 lg:px-20">
                 
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                            iPhone 11
                        </h1>
                        <p className="text-lg lg:text-2xl mb-6 lg:mb-8 leading-relaxed">
                            Sistem Kamera tercanggih kami. Chip ultra cepat. Dan USB-C
                        </p>
                        <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6">
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition">
                                Selengkapnya
                            </button>
                            <button className="px-6 py-3 bg-gray-300 text-gray-900 rounded-full shadow-lg hover:bg-gray-200 transition">
                                Beli iPhone
                            </button>
                        </div>
                    </div>
                  
                    <div className="mt-10 lg:mt-16 w-full lg:w-1/2">
                        <img src={Iphone} alt="iPhone 11" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;

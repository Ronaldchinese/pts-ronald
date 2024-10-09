import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Mac = () => {
    return (
        <>
            <Navbar />
            
            <div className="relative w-full h-screen bg-black overflow-hidden">
               
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/Mac.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
      
                <div className="absolute bottom-0 left-10 flex flex-col p-4">
                    <h1 className="text-5xl font-bold text-gray-400 mb-1">Mac</h1>
                    <p className="text-lg text-gray-400">
                        Temukan pengalaman baru dengan Mac. Dirancang untuk meningkatkan produktivitas dan kreativitas Anda.
                    </p>
                </div>
            </div>

    
            <div className="bg-black py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Mac.png" alt="MacBook Pro" className="w-full h-48 object-cover mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">MacBook Pro</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 25.000.000</p>
                            <p className="text-gray-400">
                                MacBook Pro dengan chip M1 menawarkan performa tak tertandingi dan daya tahan baterai yang luar biasa.
                            </p>
                        </div>

                     
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Mac.png" alt="MacBook Air" className="w-full h-48 object-cover mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">MacBook Air</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 18.000.000</p>
                            <p className="text-gray-400">
                                Tipis, ringan, dan kini lebih bertenaga berkat chip M1, MacBook Air adalah pilihan sempurna untuk mobilitas.
                            </p>
                        </div>

            
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Mac.png" alt="iMac" className="w-full h-48 object-cover mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iMac</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 22.000.000</p>
                            <p className="text-gray-400">
                                Dengan desain all-in-one yang ikonik dan layar 4.5K Retina, iMac siap mendukung kreativitas Anda.
                            </p>
                        </div>

               
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Mac.png" alt="Mac Mini" className="w-full h-48 object-cover mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Mac Mini</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 15.000.000</p>
                            <p className="text-gray-400">
                                Mac Mini memberikan kekuatan desktop dalam bentuk kecil, ideal untuk berbagai keperluan.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Mac.png" alt="Mac Studio" className="w-full h-48 object-cover mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Mac Studio</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 30.000.000</p>
                            <p className="text-gray-400">
                                Mac Studio dirancang untuk para profesional yang membutuhkan performa tinggi untuk kreatifitas.
                            </p>
                        </div>

     
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Mac.png" alt="MacBook Pro 16" className="w-full h-48 object-cover mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">MacBook Pro 16"</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 30.000.000</p>
                            <p className="text-gray-400">
                                Dengan layar besar dan performa yang kuat, sempurna untuk para profesional.
                            </p>
                        </div>

      
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Mac.png" alt="MacBook Air 13" className="w-full h-48 object-cover mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">MacBook Air 13"</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 19.000.000</p>
                            <p className="text-gray-400">
                                Ringan dan bertenaga, ideal untuk tugas sehari-hari dan mobilitas tinggi.
                            </p>
                        </div>

             
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Mac.png" alt="iMac 24" className="w-full h-48 object-cover mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iMac 24"</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 24.000.000</p>
                            <p className="text-gray-400">
                                Desain elegan dan performa mengesankan untuk setiap keperluan.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Mac.png" alt="MacBook Pro 14" className="w-full h-48 object-cover mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">MacBook Pro 14"</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 27.000.000</p>
                            <p className="text-gray-400">
                                Kompak dan bertenaga, cocok untuk profesional kreatif.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Mac;

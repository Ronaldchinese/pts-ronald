import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";


const Ipad = () => {
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
                    <source src="/Ipad.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute bottom-0 left-10 flex flex-col p-4">
                    <h1 className="text-5xl font-bold text-gray-400 mb-1">iPad</h1>
                    <p className="text-lg text-gray-400">
                        Temukan keajaiban di ujung jari Anda dengan iPad. Dibuat untuk kreativitas dan produktivitas maksimal.
                    </p>
                </div>
            </div>

        
            <div className="bg-black py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Ipad.png" alt="iPad Pro" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPad Pro</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 18.000.000</p>
                            <p className="text-gray-400">
                                iPad Pro dengan chip M1 memberikan performa luar biasa untuk tugas kreatif dan profesional.
                            </p>
                        </div>


                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Ipad.png" alt="iPad Air" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPad Air</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 12.000.000</p>
                            <p className="text-gray-400">
                                Tipis, ringan, dan bertenaga, iPad Air cocok untuk semua kebutuhan.
                            </p>
                        </div>

  
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Ipad.png" alt="iPad Mini" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPad Mini</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 8.000.000</p>
                            <p className="text-gray-400">
                                Desain kompak dan kinerja tinggi untuk mobilitas yang maksimal.
                            </p>
                        </div>


                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Ipad.png" alt="iPad" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPad</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 10.000.000</p>
                            <p className="text-gray-400">
                                Performa solid untuk penggunaan sehari-hari dengan harga terjangkau.
                            </p>
                        </div>

                    
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Ipad.png" alt="iPad Pro 2022" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPad Pro 2022</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 20.000.000</p>
                            <p className="text-gray-400">
                                iPad Pro 2022 dengan teknologi terbaru untuk mendukung pekerjaan dan kreativitas.
                            </p>
                        </div>

             
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Ipad.png" alt="iPad Mini 2022" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPad Mini 2022</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 9.000.000</p>
                            <p className="text-gray-400">
                                Kecil tapi bertenaga dengan desain elegan dan performa maksimal.
                            </p>
                        </div>

                    
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Ipad.png" alt="iPad Air 2021" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPad Air 2021</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 11.000.000</p>
                            <p className="text-gray-400">
                                Desain ringan, kuat, dan siap untuk aktivitas sehari-hari.
                            </p>
                        </div>

              
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Ipad.png" alt="iPad Pro 2020" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPad Pro 2020</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 17.000.000</p>
                            <p className="text-gray-400">
                                Performa terbaik untuk tahun 2020, masih unggul hingga kini.
                            </p>
                        </div>

                      
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Ipad.png" alt="iPad 2020" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPad 2020</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 9.500.000</p>
                            <p className="text-gray-400">
                                iPad model lama yang masih bisa diandalkan untuk penggunaan sehari-hari.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Ipad;

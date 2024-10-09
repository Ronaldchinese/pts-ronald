import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Iphone = () => {
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
                    <source src="/Iphone.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute bottom-0 left-10 flex flex-col p-4">
                    <h1 className="text-5xl font-bold text-gray-400 mb-1">iPhone</h1>
                    <p className="text-lg text-gray-400">
                        Temukan inovasi luar biasa dengan iPhone. Desain elegan dan performa yang tak tertandingi.
                    </p>
                </div>
            </div>

   
            <div className="bg-black py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iphone.png" alt="iPhone 13 Pro" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPhone 13 Pro</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 20.000.000</p>
                            <p className="text-gray-400">
                                Kamera Pro, layar Super Retina XDR, dan performa unggul dengan chip A15 Bionic.
                            </p>
                        </div>


                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iphone.png" alt="iPhone 13" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPhone 13</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 15.000.000</p>
                            <p className="text-gray-400">
                                Performa solid, desain ramping, dan kamera ganda canggih dengan teknologi Night Mode.
                            </p>
                        </div>

             
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iphone.png" alt="iPhone 12 Pro" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPhone 12 Pro</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 18.000.000</p>
                            <p className="text-gray-400">
                                Layar Super Retina XDR dan performa tinggi dengan chip A14 Bionic.
                            </p>
                        </div>


                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iphone.png" alt="iPhone 12" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPhone 12</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 12.000.000</p>
                            <p className="text-gray-400">
                                Teknologi 5G, layar OLED, dan ketahanan air IP68.
                            </p>
                        </div>

               
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iphone.png" alt="iPhone 11 Pro" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPhone 11 Pro</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 13.000.000</p>
                            <p className="text-gray-400">
                                Kamera ganda dengan mode malam, performa handal, dan daya tahan baterai luar biasa.
                            </p>
                        </div>


                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iphone.png" alt="iPhone 11" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPhone 11</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 9.000.000</p>
                            <p className="text-gray-400">
                                Performa yang andal dengan harga yang lebih terjangkau.
                            </p>
                        </div>

             
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iphone.png" alt="iPhone XS Max" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPhone XS Max</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 8.000.000</p>
                            <p className="text-gray-400">
                                Layar besar dengan performa yang masih sangat baik hingga kini.
                            </p>
                        </div>

           
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iphone.png" alt="iPhone XR" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPhone XR</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 7.500.000</p>
                            <p className="text-gray-400">
                                Desain warna-warni dengan performa yang masih solid.
                            </p>
                        </div>

                    
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iphone.png" alt="iPhone SE" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">iPhone SE</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 6.000.000</p>
                            <p className="text-gray-400">
                                iPhone kecil dengan performa tangguh dan harga terjangkau.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Iphone;

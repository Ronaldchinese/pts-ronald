import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Iwatch = () => {
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
                    <source src="/Iwatch.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute bottom-0 left-10 flex flex-col p-4">
                    <h1 className="text-5xl font-bold text-gray-400 mb-1">Apple Watch</h1>
                    <p className="text-lg text-gray-400">
                        Temukan inovasi yang menjaga kesehatan Anda dengan Apple Watch. Teknologi canggih di pergelangan tangan Anda.
                    </p>
                </div>
            </div>


            <div className="bg-black py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iwatch.png" alt="Apple Watch Series 8" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Apple Watch Series 8</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 8.000.000</p>
                            <p className="text-gray-400">
                                Apple Watch paling canggih dengan sensor kesehatan dan fitur keselamatan inovatif.
                            </p>
                        </div>


                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iwatch.png" alt="Apple Watch SE" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Apple Watch SE</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 5.000.000</p>
                            <p className="text-gray-400">
                                Semua fitur penting untuk keseharian, dengan harga yang lebih terjangkau.
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iwatch.png" alt="Apple Watch Ultra" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Apple Watch Ultra</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 12.000.000</p>
                            <p className="text-gray-400">
                                Desain kokoh untuk petualangan ekstrem, dilengkapi GPS akurat dan fitur keselamatan.
                            </p>
                        </div>

                   
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iwatch.png" alt="Apple Watch Series 7" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Apple Watch Series 7</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 7.500.000</p>
                            <p className="text-gray-400">
                                Layar besar yang tangguh, dengan fitur kesehatan canggih seperti pengukur oksigen dalam darah.
                            </p>
                        </div>

          
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iwatch.png" alt="Apple Watch Series 6" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Apple Watch Series 6</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 6.000.000</p>
                            <p className="text-gray-400">
                                Pemantauan kesehatan jantung dan fitur pelacakan tidur yang akurat.
                            </p>
                        </div>


                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iwatch.png" alt="Apple Watch Series 5" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Apple Watch Series 5</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 5.500.000</p>
                            <p className="text-gray-400">
                                Layar always-on, dengan pelacakan aktivitas sepanjang hari.
                            </p>
                        </div>

                 
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iwatch.png" alt="Apple Watch Series 4" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Apple Watch Series 4</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 4.500.000</p>
                            <p className="text-gray-400">
                                Desain baru dengan pelacakan detak jantung dan fitur EKG.
                            </p>
                        </div>

           
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iwatch.png" alt="Apple Watch Series 3" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Apple Watch Series 3</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 3.500.000</p>
                            <p className="text-gray-400">
                                Fitur pelacakan aktivitas, latihan, dan detak jantung yang mendasar.
                            </p>
                        </div>

                   
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src="/Iwatch.png" alt="Apple Watch Nike" className="w-full h-48 object-contain mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Apple Watch Nike</h3>
                            <p className="text-gray-300 mb-2">Dari Rp 4.000.000</p>
                            <p className="text-gray-400">
                                Desain sporty dan fitur Nike Run Club untuk para pelari.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Iwatch;

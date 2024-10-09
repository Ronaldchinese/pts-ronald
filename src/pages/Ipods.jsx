import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Ipods = () => {
    const products = [
        { name: "iPod Touch", price: "Rp 3.500.000", description: "Dari alat pemutar musik paling ringan dengan layar sentuh dan fitur canggih." },
        { name: "iPod Nano", price: "Rp 2.500.000", description: "Kecil, ringan, dan nyaman digunakan, ideal untuk berolahraga." },
        { name: "iPod Shuffle", price: "Rp 1.500.000", description: "Pemutar musik tanpa layar, sempurna untuk pengalaman mendengarkan yang sederhana." },
        { name: "iPod Classic", price: "Rp 4.500.000", description: "Kapasitas penyimpanan besar dengan desain ikonik, sempurna untuk koleksi musik Anda." },
        { name: "iPod Mini", price: "Rp 3.000.000", description: "Ukuran kecil dengan kapasitas yang cukup, cocok untuk perjalanan." },
        { name: "iPod Pro", price: "Rp 5.000.000", description: "Dapatkan performa maksimal dengan desain premium dan fitur canggih." },
        { name: "iPod Sport", price: "Rp 3.500.000", description: "Cocok untuk kegiatan olahraga dengan desain yang tahan banting." },
        { name: "iPod Color", price: "Rp 3.500.000", description: "Menyajikan warna-warni yang cerah, ideal untuk mengekspresikan gaya Anda." },
        { name: "iPod Wireless", price: "Rp 4.000.000", description: "Menyajikan pengalaman mendengarkan tanpa kabel, nyaman dan fleksibel." },
    ];

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
                    <source src="/Ipods.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute bottom-0 left-10 flex flex-col p-4">
                    <h1 className="text-5xl font-bold text-gray-400 mb-1">Apple iPods</h1>
                    <p className="text-lg text-gray-400">
                        Nikmati pengalaman mendengarkan musik dengan iPod terbaru dari Apple.
                    </p>
                </div>
            </div>

          
            <div className="bg-black py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products.map((product, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                <img src="/Ipods.png" alt={product.name} className="w-full h-48 object-contain mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                                <p className="text-gray-300 mb-2">{product.price}</p>
                                <p className="text-gray-400">{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Ipods;

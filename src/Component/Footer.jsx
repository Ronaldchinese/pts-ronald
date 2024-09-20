const Footer = () => {
    return (
      <footer className="bg-black text-gray-400 py-10">
        <div className="container mx-auto px-4">
         
          <div className="flex flex-col lg:flex-row justify-between border-b border-gray-700 pb-8">

            <div className="mb-8 lg:mb-0 lg:w-1/4">
              <h4 className="text-white text-lg font-bold mb-4">Belanja dan Pelajari</h4>
              <ul className="space-y-2">
                <li><a href="#store" className="hover:text-gray-300">Store</a></li>
                <li><a href="#mac" className="hover:text-gray-300">Mac</a></li>
                <li><a href="#ipad" className="hover:text-gray-300">iPad</a></li>
                <li><a href="#iphone" className="hover:text-gray-300">iPhone</a></li>
                <li><a href="#watch" className="hover:text-gray-300">Watch</a></li>
                <li><a href="#airpods" className="hover:text-gray-300">AirPods</a></li>
                <li><a href="#accessories" className="hover:text-gray-300">Aksesoris</a></li>
                <li><a href="#gift-cards" className="hover:text-gray-300">Gift Cards</a></li>
              </ul>
            </div>
  
     
            <div className="mb-8 lg:mb-0 lg:w-1/4">
              <h4 className="text-white text-lg font-bold mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="#apple-music" className="hover:text-gray-300">Apple Music</a></li>
                <li><a href="#apple-tv" className="hover:text-gray-300">Apple TV+</a></li>
                <li><a href="#icloud" className="hover:text-gray-300">iCloud</a></li>
                <li><a href="#apple-care" className="hover:text-gray-300">AppleCare+</a></li>
                <li><a href="#apple-pay" className="hover:text-gray-300">Apple Pay</a></li>
                <li><a href="#wallet" className="hover:text-gray-300">Wallet</a></li>
                <li><a href="#apple-store" className="hover:text-gray-300">Apple Store</a></li>
              </ul>
            </div>
  
            <div className="mb-8 lg:mb-0 lg:w-1/4">
              <h4 className="text-white text-lg font-bold mb-4">Untuk Bisnis</h4>
              <ul className="space-y-2">
                <li><a href="#apple-business" className="hover:text-gray-300">Apple dan Bisnis</a></li>
                <li><a href="#financing" className="hover:text-gray-300">Pembiayaan</a></li>
                <li><a href="#apple-reseller" className="hover:text-gray-300">Reseller Apple</a></li>
              </ul>
            </div>
  
     
            <div className="mb-8 lg:mb-0 lg:w-1/4">
              <h4 className="text-white text-lg font-bold mb-4">Lainnya</h4>
              <ul className="space-y-2">
                <li><a href="#events" className="hover:text-gray-300">Acara Apple</a></li>
                <li><a href="#job-opportunities" className="hover:text-gray-300">Peluang Kerja</a></li>
                <li><a href="#apple-sustainability" className="hover:text-gray-300">Apple dan Lingkungan</a></li>
                <li><a href="#contact-apple" className="hover:text-gray-300">Hubungi Apple</a></li>
              </ul>
            </div>
          </div>
  

          <div className="flex flex-col lg:flex-row justify-between items-center pt-6">
            <p className="text-sm text-gray-500">&copy; 2024 Apple Inc. Semua hak dilindungi.</p>
            <div className="space-x-4 mt-4 lg:mt-0">
              <a  className="text-sm">Kebijakan Privasi</a>
              <a  className="text-sm">Syarat & Ketentuan</a>
              
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
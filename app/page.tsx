import Image from "next/image";

export const metadata = {
  title: "Coming Soon | Active Products",
  description:
    "Active Products is launching soon. Premium Amla products made with traditional methods. Stay tuned!",
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      <div className="max-w-xl w-full text-center space-y-6 bg-white p-8 rounded-2xl shadow-lg">
        
        {/* Logo */}
        <div className="flex justify-center">
          <div className=" p-4 rounded-full">
            <Image src="1.png" alt="logo" className="bg-green-600 p-4 rounded-full"/>
          </div>
        </div>

        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Active Products
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Premium Amla Products • Since 2010
          </p>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-green-700">
            We’re Coming Soon 🌿
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our website is currently under development.
            We’re working hard to bring you a seamless experience for
            discovering and ordering our authentic Amla products.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Contact */}
        <div className="space-y-3">
          <p className="text-sm text-gray-700 font-medium">
            For orders & enquiries
          </p>

          <a
            href={`https://wa.me/917020513097?text=${encodeURIComponent(
              "Hello! I would like to know more about Active Amla products."
            )}`}
            target="_blank"
            className="block w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition"
          >
            Contact on WhatsApp
          </a>

          <p className="text-xs text-gray-500">
            📞 +91 70205 13097
          </p>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-400 pt-2">
          © {new Date().getFullYear()} Active Products. All rights reserved.
        </p>
      </div>
    </main>
  );
}

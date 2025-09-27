'use client'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold">ConnectHub</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted source for local business discoveries and connections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Browse Categories</a></li>
              <li><a href="#" className="hover:text-white">Add Your Business</a></li>
              <li><a href="#" className="hover:text-white">Get Help</a></li>
              <li><a href="#" className="hover:text-white">Work with Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Support@ConnectHub.com</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Support</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Social Media Icons - Using simple circles as placeholders */}
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary cursor-pointer">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary cursor-pointer">
                <span className="text-xs font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary cursor-pointer">
                <span className="text-xs font-bold">in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 ConnectHub. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
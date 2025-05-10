export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/" className="hover:underline">About</a></li>
            <li><a href="/" className="hover:underline">Services</a></li>
            <li><a href="/" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Accessibility Guidelines</a></li>
            <li><a href="#" className="hover:underline">Study Materials</a></li>
            <li><a href="#" className="hover:underline">Support Services</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1">
            <li>HIT – Holon Institute of Technology, Holon, Israel</li>
            <li>+972-123-456-7890</li>
            <li>info@academylinkhit.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        © 2025 Academy Link HIT. All rights reserved.
      </div>
    </footer>
  );
}
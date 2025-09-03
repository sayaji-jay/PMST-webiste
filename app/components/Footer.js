export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
          <div className="mb-2 md:mb-0">
            © 2024 Your Website. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-yellow-400 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-yellow-400 transition-colors">Terms</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
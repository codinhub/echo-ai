export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
      <h1 className="text-2xl font-bold text-purple-500">EchoAI</h1>

      <div className="flex gap-6">
        <a href="#" className="hover:text-purple-400">
          Home
        </a>
        <a href="#" className="hover:text-purple-400">
          Pricing
        </a>
        <a href="#" className="hover:text-purple-400">
          Login
        </a>
      </div>
    </nav>
  );
}
function Navbar() {
  return (
    <div className="flex flex-col bg-slate-900 gap-4 p-4 text-slate-300 [&>*]:hover:cursor-pointer">
      <p className="hover:text-white">Home</p>
      <p className="hover:text-white">Map</p>
      <p className="hover:text-white">Code</p>
    </div>
  );
}

export default Navbar;

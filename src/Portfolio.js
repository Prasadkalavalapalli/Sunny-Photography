function Portfolio() {
    return (
      <div className="p-10 text-center">
        <h2 className="text-4xl font-bold">Our Portfolio</h2>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <img src="/images/photo1.jpg" className="w-full h-60 object-cover rounded-lg shadow-md" />
          <img src="/images/photo2.jpg" className="w-full h-60 object-cover rounded-lg shadow-md" />
          <img src="/images/photo3.jpg" className="w-full h-60 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    );
  }
  export default Portfolio;
  
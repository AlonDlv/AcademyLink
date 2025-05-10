export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white py-16 px-4">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold">
          Making education <span className="text-teal-400">accessible for all</span>
        </h1>
        <p className="text-gray-600">
          Academy Link HIT is a student-led initiative working to improve accessibility for students with disabilities at HIT College in Israel.
        </p>
        <div className="space-x-4">
          <button className="bg-teal-400 text-white px-6 py-2 rounded">Get Started</button>
          <button className="text-gray-700 px-6 py-2">Learn More</button>
        </div>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0">
        {['Academic Support','Physical Access','Technology Tools','Community'].map((t,i) => (
          <div key={i} className="p-4 rounded-lg bg-gradient-to-br from-yellow-300 to-pink-400 text-white shadow-lg">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
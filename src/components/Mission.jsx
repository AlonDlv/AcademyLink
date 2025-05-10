export default function Mission() {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        We are dedicated to creating a more accessible and inclusive learning environment for students with disabilities at HIT College, ensuring equal opportunities for academic success and personal growth.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Advocacy', desc: 'Working with faculty and administration to promote awareness and implement accessibility solutions across campus and in all academic programs.' },
          { title: 'Support', desc: 'Providing direct assistance to students through peer mentoring, resource sharing, and connecting them with essential services.' },
          { title: 'Education', desc: 'Raising awareness about disability issues and promoting inclusive practices within the entire HIT community.' }
        ].map((card,i) => (
          <div key={i} className="p-6 border rounded-lg bg-white">
            <h3 className="font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
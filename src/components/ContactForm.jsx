export default function ContactForm() {
  return (
    <section className="py-16 px-4 flex flex-col md:flex-row gap-8">
      <form className="flex-1 space-y-4 bg-white p-6 rounded shadow">
        {[
          { label: 'Full Name', type: 'text', name: 'name' },
          { label: 'Email Address', type: 'email', name: 'email' },
          { label: 'Subject', type: 'text', name: 'subject' }
        ].map((f,i) => (
          <div key={i}>
            <label className="block mb-1">{f.label}</label>
            <input type={f.type} name={f.name} className="w-full border px-3 py-2 rounded" />
          </div>
        ))}
        <div>
          <label className="block mb-1">Message</label>
          <textarea name="message" className="w-full border px-3 py-2 rounded h-32"></textarea>
        </div>
        <button type="submit" className="bg-teal-400 text-white px-6 py-2 rounded">Send Message</button>
      </form>
      <div className="flex-1 bg-white p-6 rounded shadow">
        <h3 className="font-semibold mb-4">Contact Information</h3>
        <p>HIT – Holon Institute of Technology<br/>52 Golomb St, Holon, Israel</p>
        <p className="mt-2">+972-123-456-7890<br/>info@academylinkhit.com</p>
      </div>
    </section>
  )}
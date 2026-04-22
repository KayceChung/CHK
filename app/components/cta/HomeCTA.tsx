import { Link } from 'react-router-dom';

export default function HomeCTA() {
  return (
    <section className="py-20 text-center bg-gradient-to-br from-blue-50 to-cyan-50">
      <h1 className="text-4xl font-bold mb-4">Explore My Real-World Projects</h1>
      <p className="mb-8 text-lg text-gray-700">
        See how I solve business problems with modern technology, automation, and data.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/projects" className="btn-primary">View Projects</Link>
        <Link to="/contact" className="btn-secondary">Contact Me</Link>
      </div>
    </section>
  );
}

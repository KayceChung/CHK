import { Link } from 'react-router-dom';

export default function ConversionCTA() {
  return (
    <section className="py-24 px-6 text-center bg-gradient-to-br from-blue-900 via-slate-900 to-black">
      <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
        I build systems that reduce manual work and scale operations.
      </h1>
      <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
        My solutions help business owners and managers automate processes, improve reliability, and unlock growth—without technical headaches.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/projects" className="px-8 py-4 bg-cyan-500 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-cyan-400 transition">
          View Projects
        </Link>
        <Link to="/contact" className="px-8 py-4 border border-slate-400 text-slate-200 text-lg rounded-xl hover:bg-slate-800 transition">
          Contact Me
        </Link>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, CertificateItem } from '../../data/portfolioData';
import { useCursor } from '../../context/CursorContext';
import { Award, ExternalLink, X, CheckCircle, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    if (selectedCert) {
      resetCursor();
    }
  }, [selectedCert, resetCursor]);

  return (
    <section
      id="certificates"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b border-zinc-800/80 bg-[#09090b]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-zinc-800 pb-6">
          <div>
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase block mb-1">
              04 // VERIFIED CREDENTIALS
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              CERTIFICATIONS
            </h2>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onMouseEnter={() => setCursor('certificate', 'OPEN')}
              onMouseLeave={resetCursor}
              onClick={() => setSelectedCert(cert)}
              className="group relative p-6 sm:p-8 rounded-3xl bg-[#121215] border border-zinc-800 hover:border-zinc-600 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-cyan-500/5 group-hover:scale-150 transition-transform pointer-events-none" />

              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-[#18181b] text-zinc-300 border border-zinc-800 font-semibold">
                    {cert.badge}
                  </span>
                  <span className="text-zinc-500">{cert.date}</span>
                </div>

                {/* Certificate Name */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cert.name}
                </h3>

                {/* Certificate Preview Image if available */}
                {cert.image && (
                  <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-zinc-800 bg-black flex items-center justify-center p-2 group-hover:border-zinc-600 transition-colors">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-full bg-white text-black text-[11px] font-mono font-bold uppercase shadow-md">
                        Preview Certificate
                      </span>
                    </div>
                  </div>
                )}

                {/* Issuer & ID */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Award className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>ID: {cert.credentialId}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  {cert.description}
                </p>

                {/* Skills Covered Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#18181b] text-zinc-300 border border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>VERIFIED ACCREDITATION</span>
                </span>
                <span className="flex items-center gap-1 text-zinc-200 font-bold group-hover:text-white group-hover:underline">
                  <span>VIEW CERTIFICATE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[10002] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#121215] border border-zinc-800 rounded-3xl p-6 sm:p-10 z-10 shadow-2xl space-y-6"
            >
              {/* Modal Top Bar */}
              <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-bold">
                    OFFICIAL CREDENTIAL VERIFICATION
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Sheet Display */}
              {selectedCert.image ? (
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-black p-2 flex items-center justify-center">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.name}
                      className="max-h-[50vh] w-auto object-contain rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="text-center space-y-1">
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                      {selectedCert.name}
                    </h3>
                    <p className="font-mono text-xs font-semibold text-zinc-400">
                      {selectedCert.issuer} • Credential ID: {selectedCert.credentialId}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#18181b] border border-zinc-800 text-center space-y-4">
                  <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase block">
                    CERTIFICATE OF COMPETENCY
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedCert.name}
                  </h3>
                  <p className="font-mono text-sm font-semibold text-zinc-300">
                    ISSUED BY: {selectedCert.issuer.toUpperCase()}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
                    {selectedCert.description}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block font-mono text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
                      Credential ID: {selectedCert.credentialId}
                    </span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <span>VERIFY ON ISSUER PLATFORM</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-3 rounded-full border border-zinc-700 text-zinc-300 font-mono text-xs font-semibold hover:bg-zinc-800 hover:text-white transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

import React, { useState } from 'react';
import { X, Plus, Briefcase, MapPin, Clock, DollarSign, Users, CheckCircle2 } from 'lucide-react';

export default function NewJobModal({ isOpen, onClose, onJobCreated }) {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [shift, setShift] = useState('12x36 Noturno (19h às 07h)');
  const [openings, setOpenings] = useState(10);
  const [salary, setSalary] = useState('R$ 2.200,00 + Benefícios');
  const [maxRadius, setMaxRadius] = useState(25);
  const [skills, setSkills] = useState('Separação, Conhecimento em Coletor, Disponibilidade imediata');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !location) return;

    const newJob = {
      id: `JOB-${Math.floor(100 + Math.random() * 900)}`,
      title,
      company: "Sua Empresa / Operações",
      department: department || "Centro de Distribuição / Loja",
      location,
      shift,
      openings: Number(openings),
      candidatesCount: 0,
      shortlistedCount: 0,
      hiredCount: 0,
      salary,
      status: "Ativa",
      priority: "Alta",
      requiredSkills: skills.split(',').map(s => s.trim()).filter(Boolean),
      deadline: "2026-11-30"
    };

    onJobCreated(newJob);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Criar Nova Vaga Operacional
              </h3>
              <p className="text-xs text-slate-400">Com matching logístico e triagem automática via WhatsApp</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Título da Função Operacional *</label>
            <input
              type="text"
              required
              placeholder="Ex: Operador de Linha de Produção, Auxiliar de Carga..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Unidade / Departamento</label>
              <input
                type="text"
                placeholder="Ex: CD Jaú - Distrito Industrial"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Cidade / Bairro da Vaga *</label>
              <input
                type="text"
                required
                placeholder="Ex: Jaú - SP, Barra Bonita - SP ou Bariri - SP"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Escala / Turno de Trabalho</label>
              <select
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="12x36 Noturno (19h às 07h)">12x36 Noturno (19h às 07h)</option>
                <option value="12x36 Diurno (07h às 19h)">12x36 Diurno (07h às 19h)</option>
                <option value="6x1 Manhã (06h às 14h20)">6x1 Manhã (06h às 14h20)</option>
                <option value="6x1 Tarde (14h às 22h20)">6x1 Tarde (14h às 22h20)</option>
                <option value="5x2 Comercial (08h às 17h48)">5x2 Comercial (08h às 17h48)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Raio Máximo Logístico Aceito</label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="5"
                  max="50"
                  value={maxRadius}
                  onChange={(e) => setMaxRadius(Number(e.target.value))}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                />
                <span className="text-slate-400">km</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Número de Vagas Disponíveis</label>
              <input
                type="number"
                min="1"
                value={openings}
                onChange={(e) => setOpenings(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Salário & Benefícios</label>
              <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Habilidades Práticas (separadas por vírgula)</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/30 text-[11px] text-emerald-300">
            ⚡ Ao publicar, o bot do WhatsApp começará a convidar candidatos no raio de {maxRadius} km que declararam disponibilidade para a escala selecionada.
          </div>

          <div className="pt-4 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20"
            >
              Publicar Vaga
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

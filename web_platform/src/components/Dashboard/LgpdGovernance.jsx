import React, { useState } from 'react';
import { lgpdAuditLogs as initialLogs } from '../../data/mockData';
import { ShieldCheck, Lock, FileText, UserCheck, Eye, Trash2, Download, Search, CheckCircle } from 'lucide-react';

export default function LgpdGovernance() {
  const [logs, setLogs] = useState(initialLogs);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLogs = logs.filter(log =>
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.candidateId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.legalBasis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header */}
      <div>
        <div className="flex items-center space-x-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Segurança da Informação & ANPD</span>
        </div>
        <h2 className="text-2xl font-black text-white font-['Plus_Jakarta_Sans'] mt-0.5">
          Governança LGPD & Auditoria de Decisões de IA
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Rastreabilidade total das decisões automatizadas, minimização de dados e cumprimento estrito do Artigo 20 da LGPD.
        </p>
      </div>

      {/* 3 Pillars of Governance */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400">
              <UserCheck className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white">Revisão Humana de IA</h4>
          </div>
          <p className="text-2xl font-black text-emerald-400">100%</p>
          <p className="text-[11px] text-slate-400 mt-1">
            Garantia de reavaliação manual mediante solicitação do candidato.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Lock className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white">Criptografia & Acesso</h4>
          </div>
          <p className="text-2xl font-black text-white">AES-256</p>
          <p className="text-[11px] text-slate-400 mt-1">
            Dados pessoais anonimizados e protegidos por chave simétrica.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Eye className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-white">Minimização de Dados</h4>
          </div>
          <p className="text-2xl font-black text-cyan-400">Ativa</p>
          <p className="text-[11px] text-slate-400 mt-1">
            Eliminação imediata de dados sensíveis supérfluos no cadastro.
          </p>
        </div>
      </div>

      {/* Audit Logs Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">
              Registro Imutável de Operações de Tratamento
            </h3>
            <p className="text-xs text-slate-400">Trilha de auditoria para fins de compliance e prestação de contas à ANPD</p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filtrar por ação ou candidato..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-slate-400 border-b border-slate-800/80">
                <th className="py-3 px-3 font-semibold">ID / Timestamp</th>
                <th className="py-3 px-3 font-semibold">Ação Realizada</th>
                <th className="py-3 px-3 font-semibold">Titular / Candidato</th>
                <th className="py-3 px-3 font-semibold">Base Legal (LGPD)</th>
                <th className="py-3 px-3 font-semibold">Revisão Humana</th>
                <th className="py-3 px-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-3 font-mono text-[11px] text-slate-400">
                    <span className="text-white block font-bold">{log.id}</span>
                    <span>{log.timestamp}</span>
                  </td>
                  <td className="py-3.5 px-3">
                    <span className="font-bold text-white block">{log.action}</span>
                    <span className="text-[11px] text-slate-400">{log.dataProcessed}</span>
                  </td>
                  <td className="py-3.5 px-3 text-slate-300 font-medium">
                    {log.candidateId}
                  </td>
                  <td className="py-3.5 px-3 text-slate-400 text-[11px]">
                    {log.legalBasis}
                  </td>
                  <td className="py-3.5 px-3">
                    {log.humanReviewed ? (
                      <span className="inline-flex items-center space-x-1 text-emerald-400 text-[11px] font-bold">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>{log.reviewer}</span>
                      </span>
                    ) : (
                      <span className="text-slate-500 text-[11px]">Automatizado</span>
                    )}
                  </td>
                  <td className="py-3.5 px-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { Lock, Mail, Key, ShieldCheck, ArrowLeft, Sparkles, Eye, EyeOff, Users, CheckCircle2 } from 'lucide-react';

export default function RHLogin({ onLogin, onBackToSite, onGoToAdmin, theme }) {
  const [email, setEmail] = useState('recrutamento.jau@talentflow.com.br');
  const [password, setPassword] = useState('••••••••••••');
  const [twoFactorToken, setTwoFactorToken] = useState('849-204');
  const [rememberTerminal, setRememberTerminal] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-indigo-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-md animate-in fade-in duration-300">
        
        {/* Top Navigation Links */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBackToSite}
            className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Site</span>
          </button>

          <button
            onClick={onGoToAdmin}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Lock className="w-3 h-3" />
            <span>Ir para Painel Admin (/admin)</span>
          </button>
        </div>

        {/* Card Container */}
        <div className={`p-8 sm:p-9 rounded-3xl border shadow-2xl backdrop-blur-xl relative ${
          isDark 
            ? 'bg-slate-900/90 border-slate-800 shadow-slate-950/80' 
            : 'bg-white border-slate-200 shadow-slate-200/60'
        }`}>
          
          {/* Header Brand */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-xl font-bold tracking-tight font-['Plus_Jakarta_Sans']">
                    Talent<span className="text-emerald-400">Flow</span>
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full">
                    Portal RH
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Recrutamento, Vagas & Retenção 90 Dias</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
              Acesso da Equipe de RH
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Polos: Jaú, Barra Bonita, Bariri e Centros de Distribuição
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Campo E-mail */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                E-mail Corporativo do Recrutador
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="seu.nome@talentflow.com.br"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs transition-all border outline-none ${
                    isDark
                      ? 'bg-slate-950/80 border-slate-700/80 text-white placeholder-slate-500 focus:border-emerald-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                  }`}
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Senha de Acesso
                </label>
                <a href="#recuperar" onClick={(e) => e.preventDefault()} className="text-[11px] text-emerald-400 hover:underline">
                  Esqueceu?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Key className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Sua senha corporativa"
                  className={`w-full pl-10 pr-10 py-2.5 rounded-xl text-xs transition-all border outline-none ${
                    isDark
                      ? 'bg-slate-950/80 border-slate-700/80 text-white placeholder-slate-500 focus:border-emerald-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Token 2FA */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Código 2FA (Autenticador / SMS)
                </label>
                <span className="text-[10px] text-emerald-400 font-mono">Obrigatório</span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <input
                  type="text"
                  value={twoFactorToken}
                  onChange={(e) => setTwoFactorToken(e.target.value)}
                  maxLength={7}
                  placeholder="Ex: 849-204"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs font-mono tracking-widest transition-all border outline-none ${
                    isDark
                      ? 'bg-slate-950/80 border-slate-700/80 text-white placeholder-slate-500 focus:border-emerald-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                  }`}
                />
              </div>
            </div>

            {/* Opções de Sessão */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center space-x-2 text-[11px] text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberTerminal}
                  onChange={(e) => setRememberTerminal(e.target.checked)}
                  className="w-3.5 h-3.5 rounded border-slate-700 text-emerald-500 focus:ring-emerald-500/20 bg-slate-950"
                />
                <span>Lembrar neste terminal</span>
              </label>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Users className="w-4 h-4" />
              <span>Entrar no Painel do RH</span>
            </button>

            {/* Atalho Demo 1-Clique */}
            <button
              type="button"
              onClick={onLogin}
              className="w-full py-2.5 px-3 bg-slate-800/80 hover:bg-slate-800 text-emerald-300 hover:text-white border border-emerald-500/30 rounded-xl text-[11px] font-semibold transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Acesso Rápido de Demonstração (1-Clique)</span>
            </button>

          </form>

          {/* Segurança & Conformidade Footer */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
            <span className="flex items-center space-x-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Conexão Segura TLS 1.3</span>
            </span>
            <span className="font-mono text-slate-500">LGPD Art. 20</span>
          </div>

        </div>

      </div>

    </div>
  );
}

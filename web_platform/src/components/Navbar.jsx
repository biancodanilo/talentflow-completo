import React from 'react';
import { Sparkles, Sun, Moon, Lock, ArrowLeft, ShieldCheck, Users, Shield } from 'lucide-react';

export default function Navbar({ currentRoute = 'public', onNavigate, theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('/')}
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-500 p-0.5 shadow-lg shadow-emerald-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent font-['Plus_Jakarta_Sans']">
                  Talent<span className="text-emerald-400">Flow</span>
                </span>
                
                {currentRoute === 'rh' && (
                  <span className="px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center space-x-1">
                    <Users className="w-2.5 h-2.5" />
                    <span>Portal RH</span>
                  </span>
                )}

                {currentRoute === 'admin' && (
                  <span className="px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-purple-500/15 text-purple-400 border border-purple-500/30 rounded-full flex items-center space-x-1">
                    <Shield className="w-2.5 h-2.5" />
                    <span>Console Admin</span>
                  </span>
                )}

                {currentRoute === 'public' && (
                  <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full">
                    HR Tech
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                {currentRoute === 'rh' && 'Recrutamento, Vagas & Retenção 90 Dias'}
                {currentRoute === 'admin' && 'Gestão de Usuários & Níveis de Acesso (RBAC)'}
                {currentRoute === 'public' && 'Contratação & Retenção Operacional'}
              </p>
            </div>
          </div>

          {/* Center Links (Public vs Restricted Status) */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-semibold text-slate-300">
            {currentRoute === 'public' ? (
              <>
                <a href="#solucao" className="hover:text-emerald-400 transition-colors">
                  Dores & Solução
                </a>
                <a href="#roi-calculator" className="hover:text-emerald-400 transition-colors">
                  Calculadora ROI
                </a>
                <a href="#pilares" className="hover:text-emerald-400 transition-colors">
                  Pilares de Retenção
                </a>
                <a href="#sobre-nos" className="hover:text-emerald-400 transition-colors">
                  A Empresa
                </a>
                <a href="#lgpd" className="hover:text-emerald-400 transition-colors">
                  Compliance LGPD
                </a>
              </>
            ) : currentRoute === 'rh' ? (
              <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ambiente Operacional: /rh (Jaú, Barra Bonita, Bariri)</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Ambiente Restrito: /admin (Super Admin RBAC)</span>
              </div>
            )}
          </div>

          {/* Action Buttons & Theme Switcher */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-all shadow-sm flex items-center justify-center group"
              title={isDark ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
              aria-label="Alternar tema claro e escuro"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400 group-hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* ROUTE SPECIFIC ACTION BUTTONS */}
            {currentRoute === 'public' && (
              <div className="hidden sm:flex items-center space-x-2">
                {/* Botão Área do RH */}
                <button
                  onClick={() => onNavigate('/rh')}
                  className="flex items-center space-x-2 px-4 py-2.5 text-xs font-bold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-xl shadow-sm transition-all"
                  title="Acessar Portal do RH (/rh)"
                >
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Área do RH (/rh)</span>
                </button>

                {/* Botão Painel Admin */}
                <button
                  onClick={() => onNavigate('/admin')}
                  className="flex items-center space-x-2 px-4 py-2.5 text-xs font-bold text-purple-200 hover:text-white bg-purple-950/40 hover:bg-purple-900/50 border border-purple-800/80 hover:border-purple-500 rounded-xl shadow-sm transition-all"
                  title="Acessar Controle de Usuários e Níveis (/admin)"
                >
                  <Shield className="w-3.5 h-3.5 text-purple-400" />
                  <span>Painel Admin (/admin)</span>
                </button>
              </div>
            )}

            {currentRoute === 'rh' && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onNavigate('/admin')}
                  className="hidden sm:flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-purple-300 hover:text-white bg-purple-950/40 border border-purple-800/60 rounded-xl transition-all"
                  title="Ir para o Controle de Usuários"
                >
                  <Shield className="w-3.5 h-3.5 text-purple-400" />
                  <span>Painel Admin (/admin)</span>
                </button>

                <button
                  onClick={() => onNavigate('/')}
                  className="flex items-center space-x-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar ao Site</span>
                </button>
              </div>
            )}

            {currentRoute === 'admin' && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onNavigate('/rh')}
                  className="hidden sm:flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-950/40 border border-emerald-800/60 rounded-xl transition-all"
                  title="Ir para o Portal do RH"
                >
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Portal RH (/rh)</span>
                </button>

                <button
                  onClick={() => onNavigate('/')}
                  className="flex items-center space-x-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-purple-400 hover:bg-purple-300 rounded-xl shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar ao Site</span>
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Mobile Navigation Sub-bar */}
        <div className="flex sm:hidden items-center justify-around py-2.5 border-t border-slate-800/80 text-xs font-semibold">
          {currentRoute === 'public' ? (
            <>
              <button
                onClick={() => onNavigate('/rh')}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
              >
                <Users className="w-3 h-3" />
                <span>Portal RH</span>
              </button>

              <button
                onClick={() => onNavigate('/admin')}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30"
              >
                <Shield className="w-3 h-3" />
                <span>Admin</span>
              </button>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              {currentRoute === 'rh' ? (
                <button
                  onClick={() => onNavigate('/admin')}
                  className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-purple-300 bg-purple-950/40 border border-purple-800/60"
                >
                  <Shield className="w-3 h-3" />
                  <span>Admin</span>
                </button>
              ) : (
                <button
                  onClick={() => onNavigate('/rh')}
                  className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-emerald-300 bg-emerald-950/40 border border-emerald-800/60"
                >
                  <Users className="w-3 h-3" />
                  <span>RH</span>
                </button>
              )}

              <button
                onClick={() => onNavigate('/')}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Site</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

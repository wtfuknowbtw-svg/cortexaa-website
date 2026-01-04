import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, RefreshCw, CheckCircle2, Terminal, Database, Play } from "lucide-react";
import Section from "../components/Section";
import Button from "../components/Button";
import { useAutomationSimulation } from "../hooks/useAutomationSimulation";
import { cn } from "../lib/utils";

export default function LiveDemo() {
    const { messages, systemLogs, isTyping, isProcessing, runSimulation } = useAutomationSimulation();

    const handleStart = () => {
        runSimulation('appointment');
    };

    return (
        <Section id="live-demo">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-medium mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                    </span>
                    Live WhatsApp Automation Demo
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Manage your entire automation <br />
                    <span className="text-gradient">ecosystem</span>
                </h2>
                <div className="text-gray-400 text-lg max-w-3xl mx-auto space-y-4">
                    <p>Track leads, monitor active workflows, and control WhatsApp automations in real time.</p>
                    <p>Get clear insights with live logs, performance metrics, and system status updates.</p>
                    <p className="text-base text-gray-500 pt-2">
                        Secure access ensures only authorized admins stay in control. <br />
                        Built for speed, scalability, and total operational visibility.
                    </p>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={handleStart}
                        disabled={isProcessing}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all border",
                            "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20 hover:scale-105"
                        )}
                    >
                        {isProcessing ? 'Running Demo...' : 'Start Live Demo'}
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto h-[600px]">
                {/* Left: Chat Interface */}
                <div className="bg-dark-100 rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl relative">
                    {/* Chat Header */}
                    <div className="bg-whatsapp/10 border-b border-white/5 p-4 flex items-center gap-4 backdrop-blur-md">
                        <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center text-white shadow-lg">
                            <Bot className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">Cortexaa Business AI</h3>
                            <p className="text-xs text-whatsapp font-medium flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-whatsapp rounded-full"></span> Online
                            </p>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-6 space-y-4 overflow-y-auto custom-scrollbar bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat opacity-90">
                        <div className="absolute inset-0 bg-dark/95 -z-10" />

                        <AnimatePresence>
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={cn(
                                        "flex w-full mb-4",
                                        msg.sender === 'user' ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div className={cn(
                                        "max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm",
                                        msg.sender === 'user'
                                            ? "bg-whatsapp text-white rounded-tr-sm"
                                            : "bg-dark-200 text-gray-200 border border-white/5 rounded-tl-sm"
                                    )}>
                                        {msg.text.split('\n').map((line, i) => (
                                            <span key={i} className="block">{line}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-dark-200 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 bg-dark-200 border-t border-white/5">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                disabled
                                className="flex-1 bg-dark-300 border border-white/5 rounded-full px-4 py-2 text-sm text-gray-300 focus:outline-none cursor-not-allowed opacity-50"
                            />
                            <button disabled className="w-10 h-10 rounded-full bg-whatsapp/50 flex items-center justify-center text-white cursor-not-allowed">
                                <Send className="w-4 h-4 ml-0.5" />
                            </button>
                        </div>
                        {!isProcessing && (
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-20">
                                <Button onClick={handleStart} icon={Play}>Start Demo</Button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Automation Logic View */}
                <div className="bg-black rounded-3xl border border-white/10 overflow-hidden flex flex-col font-mono text-sm shadow-2xl">
                    <div className="bg-dark-200 border-b border-white/5 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Terminal className="w-4 h-4" />
                            <span>System Internals</span>
                        </div>
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                    </div>

                    <div className="flex-1 p-6 overflow-y-auto space-y-4">
                        {systemLogs.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-4">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center animate-pulse">
                                    <Database className="w-8 h-8 opacity-50" />
                                </div>
                                <p>Waiting for input...</p>
                            </div>
                        )}

                        <AnimatePresence>
                            {systemLogs.map((log) => (
                                <motion.div
                                    key={log.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="border-l-2 border-white/10 pl-4 py-1"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        {log.status === 'analyzing' && <RefreshCw className="w-3 h-3 text-blue-400 animate-spin" />}
                                        {log.status === 'success' && <CheckCircle2 className="w-3 h-3 text-green-400" />}
                                        {log.status === 'action' && <Terminal className="w-3 h-3 text-yellow-400" />}

                                        <span className={cn(
                                            "text-xs font-bold uppercase tracking-wider",
                                            log.status === 'analyzing' && "text-blue-400",
                                            log.status === 'success' && "text-green-400",
                                            log.status === 'action' && "text-yellow-400"
                                        )}>
                                            {log.status === 'action' ? 'Executing' : log.status}
                                        </span>
                                        <span className="text-gray-600 text-xs">{(new Date(log.id)).toLocaleTimeString()}</span>
                                    </div>
                                    <div className="text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 whitespace-pre-wrap">
                                        {log.text}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Section>
    );
}

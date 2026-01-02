import { useState, useCallback, useEffect } from 'react';

const DEMO_FLOWS = {
    appointment: [
        { type: 'user', text: 'Book appointment', delay: 1000 },
        { type: 'system', status: 'analyzing', text: 'Intent Detected: Booking \nAsking for Department...', delay: 1500 },
        { type: 'ai', text: 'Sure! What kind of treatment are you looking for?\n\n1. Skin Treatment\n2. Hair Treatment\n3. Dental', delay: 1000 },
        { type: 'user', text: 'Skin or Hair treatment', delay: 2000 },
        { type: 'system', status: 'analyzing', text: 'Category: Dermatology/Trichology \nChecking Specialist Availability...', delay: 1500 },
        { type: 'ai', text: 'Great. Dr. Anjali has these slots open tomorrow:\n- 11:00 AM\n- 4:30 PM\n\nPlease select a slot.', delay: 1000 },
        { type: 'user', text: 'Select available slot (11:00 AM)', delay: 2000 },
        { type: 'system', status: 'action', text: 'Booking Slot: 2024-02-15 11:00 AM\nUpdate: CRM & Google Calendar', delay: 1500 },
        { type: 'ai', text: '✅ Appointment confirmed for 11:00 AM tomorrow.\n\nI have sent a calendar invite. Please arrive 10 mins early.', delay: 1000 },
        { type: 'system', status: 'success', text: 'Workflow Complete. Reminder Scheduled.', delay: 500 }
    ]
};

export function useAutomationSimulation() {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'ai', text: 'Hello! I am Cortexaa AI. How can I help you today?' }
    ]);
    const [systemLogs, setSystemLogs] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const runSimulation = useCallback(async (flowKey = 'order') => {
        // Reset simulation state
        setMessages([{ id: 1, sender: 'ai', text: 'Hello! I am Cortexaa AI. How can I help you today?' }]);
        setSystemLogs([]);
        setIsProcessing(true);

        const flow = DEMO_FLOWS[flowKey];

        for (const step of flow) {
            await new Promise(r => setTimeout(r, step.delay));

            if (step.type === 'user') {
                setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: step.text }]);
            } else if (step.type === 'ai') {
                setIsTyping(true);
                await new Promise(r => setTimeout(r, 1000)); // Typing delay
                setIsTyping(false);
                setMessages(prev => [...prev, { id: Date.now(), sender: 'ai', text: step.text }]);
            } else if (step.type === 'system') {
                setSystemLogs(prev => [...prev, { id: Date.now(), ...step }]);
            }
        }

        setIsProcessing(false);
    }, []);

    return {
        messages,
        systemLogs,
        isTyping,
        isProcessing,
        runSimulation
    };
}

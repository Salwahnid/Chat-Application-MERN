//for have a global state

import { create } from "zustand";

//it s like the useState
const useConversation = create((set) => ({
    selectedConversation : null,
    setSelectedConversation : (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages : (messages) => set({ messages }),

}));

export default useConversation;
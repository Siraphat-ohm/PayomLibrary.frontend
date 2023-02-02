import { createContext, useContext, useEffect } from 'react';
import io, { Socket } from 'socket.io-client';

type SocketProviderProps = {
    children : JSX.Element | JSX.Element[]
}

type SocketContextProps = {
    'socket': Socket
}

const SocketContext = createContext({ } as SocketContextProps);

export function useSocket() {
    return useContext(SocketContext);
}

export function SocketProvider({ children } : SocketProviderProps){
    const socket = io("http://127.0.0.1:4662");

    return <SocketContext.Provider value={ { socket } }>{children}</SocketContext.Provider>
}
export const REALTIME_SERVER = "ws://localhost:5000";


export const SocketEvent = {
  CONNECT: "connect",
  DISCONNECT: "disconnect",
  NOTIFICATION : 'notification',
  NEWNOTIFICATION : 'newNotification'
};
Object.freeze(SocketEvent);
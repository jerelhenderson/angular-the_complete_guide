// Simple logging component that notes of changes and sends a message to the console
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}
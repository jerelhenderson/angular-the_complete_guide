// This service doesn't *need* an @Injectable decorator, because nothing is injected into here... but can be added for futureproofing
// Simple logging component that notes of changes and sends a message to the console
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}
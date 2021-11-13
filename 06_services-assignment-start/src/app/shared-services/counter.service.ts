export class CounterService {
    logActiveCount(activeCount = 0) {
        console.log(`Switched to active: ${++activeCount} time(s)`);
    }

    logInactiveCount(inactiveCount = 0) {
        console.log(`Switched to inactive: ${++inactiveCount} time(s)`);
    }
}
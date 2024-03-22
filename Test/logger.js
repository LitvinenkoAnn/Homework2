class Logger {
    constructor() {
        this.logs = [];
    }

    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push(`${timestamp}: ${message}`);
    }

    getLogs() {
        return this.logs;
    }
}

export default Logger;

import { expect } from 'chai';
import { test, expect as playwrightExpect } from '@playwright/test';
import Logger from './logger.js';

test.describe('Logger Singleton Pattern Test', () => {
    let logger;

    test.beforeEach(async ({ page }) => {
        logger = Logger.getInstance();
    });

    test('should create only one instance of Logger', async () => {
        const logger1 = Logger.getInstance();
        const logger2 = Logger.getInstance();

        expect(logger1).to.equal(logger2);
    });

    test('should log messages correctly', async ({ page }) => {
        logger.log('User logged in');
        logger.log('User performed action');

        const logs = logger.getLogs();
        expect(logs).to.have.lengthOf(2);
        expect(logs[0]).to.include('User logged in');
        expect(logs[1]).to.include('User performed action');
    });
});
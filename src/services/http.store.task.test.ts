import { HttpStoreTasks } from './http.store.task.js';

describe('Given HttpStoreClass', () => {
    describe('When we instantiate', () => {
        describe('And we use method getTasks', () => {
            test('Then it should return a array of two tasks', async () => {
                // arrange & act
                const result = await new HttpStoreTasks().getTasks();
                //
                // assert
                expect(result.length).toBe(2);
            });
        });
    });
});

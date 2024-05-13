import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

const greetHandler = (name) => {
    console.log(`Hello ${name}` );
}

const goodByHandler = (name) => {
    console.log(`Goodbye ${name}`);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodByHandler);

// Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');

// Error handling
myEmitter.on('error', (err) => {
    console.log('An Error Occured: ', err);
})

// Simulate error
myEmitter.emit('error', new Error('Something went wrong'));
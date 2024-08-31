import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' +name)
}

function goodbyeHandler(name) {
    console.log('Goodbye! '+name)
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// emmit events
myEmitter.emit('greet', 'Rezi');
myEmitter.emit('goodbye', 'Rezi');

// error handling
myEmitter.on('error', (err)=>{
    console.log('An error occured:', err);
});

// simulate error
// myEmitter.emit('error', new Error("Something went Wrong"));
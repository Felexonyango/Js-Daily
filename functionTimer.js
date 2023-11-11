function myFunction() {
    console.log('start');
    console.time('myFunction'); // Start the timer

    for (let i = 0; i < 10000; i++) {
        console.log(i);
    }

    console.timeEnd(); // End the timer and log the elapsed time
}

myFunction(); // Call the function to execute the code and measure the time taken

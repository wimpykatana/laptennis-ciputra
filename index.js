// run jam 23:20 (16:20 UTC)
// run hari senin buat booking hari sabtu
// run hari selasa buat booking hari minggu
// run hari rabu buat booking hari senin
// run hari kamis buat booking hari selasa
// run hari jumat buat booking hari rabu
// run hari sabtu buat booking hari kamis
// run hari minggu buat booking hari jumat
import { booking } from "./module/booking.js";
import schedule from 'node-schedule';
import { serve } from '@hono/node-server'
import { Hono } from 'hono'

console.log('--------------------------------------------------');

// Function to execute the booking process
async function executeBooking() {
    console.log('--------------------------------- start booking');
    const url = 'https://www.jotform.com/form/250478996735476';

    //get today date
    const currentDate = new Date();

    //add 5 days
    const bookDate = new Date(currentDate);
    bookDate.setDate(bookDate.getDate() + 5);

    const year = bookDate.getFullYear();
    const month = String(bookDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(bookDate.getDate()).padStart(2, '0');

    const bookDateString = `${year}-${month}-${day}`;

    console.log(`[${new Date().toISOString()}] Current date: ${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`);
    console.log(`[${new Date().toISOString()}] Book date: ${bookDateString}`);

    try {
        // Uncomment these lines when you're ready to execute the bookings
        await booking("febysot@gmail.com", "Feby", "081384517297", "1715", "Amsterdam", bookDateString, "19:00", url);
        await booking("Azizhannachi80@gmail.com", "Aziz", "085770759300", "0711", "San Francisco", bookDateString, "20:00", url);
        await booking("Ritaroza@gmail.com", "Rita", "085770759300", "1118", "Amsterdam", bookDateString, "21:00", url);
        console.log(`[${new Date().toISOString()}] Booking process completed successfully`);
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error during booking process:`, error);
    }
}

// Schedule job to run every 5 minutes
//const job = schedule.scheduleJob('0 4 * * *', function () {
//    console.log('The answer to life, the universe, and everything!');
//    console.log(`[${new Date().toISOString()}] Running scheduled booking task...`);
//    executeBooking();
//    console.log(`[${new Date().toISOString()}] Scheduler initialized. Next job at: ${job.nextInvocation()}`);
//});

//// Execute once when script starts
//console.log(`[${new Date().toISOString()}] Script started`);
//console.log(`[${new Date().toISOString()}] Scheduler initialized. Next job at: ${job.nextInvocation()}`);

const app = new Hono();

app.get('/', async (c) => {
    await executeBooking();
    return c.text('nothing here');
});

const port = 8080;
serve({ fetch: app.fetch, port }).on('listening', () => {
    console.log(`Server is running on port ${port}`);
});

await executeBooking();
console.log('--------------------------------- end booking');
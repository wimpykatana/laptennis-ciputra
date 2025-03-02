// run jam 23:20
// run hari senin buat booking hari sabtu
// run hari selasa buat booking hari minggu
// run hari rabu buat booking hari senin
// run hari kamis buat booking hari selasa
// run hari jumat buat booking hari rabu
// run hari sabtu buat booking hari kamis
// run hari minggu buat booking hari jumat
import { booking } from "./module/booking.js";

(async () => {
    const url = 'https://www.jotform.com/form/250478996735476'

    //get today date
    const currentDate = new Date();

    //add 4 days
    const bookDate = new Date(currentDate);
    bookDate.setDate(bookDate.getDate() + 5);

    const year = bookDate.getFullYear();
    const month = String(bookDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(bookDate.getDate()).padStart(2, '0');

    const bookDateString = `${year}-${month}-${day}`;

    console.log(`current date: ${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`);
    console.log(`book date: ${bookDateString}`);

    //(`booking ${email} ${nama} ${tel} ${no} ${gedung} ${tanggal} ${jam}`);
    //await booking("febysot@gmail.com", "Feby", "081384517297", "1715", "Amsterdam", bookDateString, "19:00", url);
    //await booking("Azizhannachi80@gmail.com", "Aziz", "085770759300", "0711", "San Francisco", bookDateString, "20:00", url);
    //await booking("Ritaroza@gmail.com", "Rita", "085770759300", "1118", "Amsterdam", bookDateString, "21:00", url);

})();
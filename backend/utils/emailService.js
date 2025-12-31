import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  // pool: true,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

// Metoda do wysyłania emaila z kodem do resetowania hasła
function sendResetPasswordEmail(userEmail, resetCode) {
  const message = {
    from: { name: 'CARENT', address: process.env.SMTP_USER},
    to: userEmail,
    subject: "Resetowanie hasła - Twój kod weryfikacyjny",
    text: `Witaj,\n\nOtrzymaliśmy prośbę o zresetowanie hasła do Twojego konta.\nAby kontynuować, wprowadź poniższy kod weryfikacyjny:\n\n${resetCode}\n\nKod ten wygaśnie za 15 minut. Jeśli to nie Ty inicjowałeś prośbę, możesz zignorować tę wiadomość.`,
    html: `<h1>Witaj,</h1><p>Otrzymaliśmy prośbę o zresetowanie hasła do Twojego konta.</p><p>Aby kontynuować, wprowadź poniższy kod weryfikacyjny:</p><p><strong>${resetCode}</strong></p><p>Kod ten wygaśnie za 15 minut.</p><p>Jeśli to nie Ty inicjowałeś prośbę, możesz zignorować tę wiadomość.</p>`
  };
  return transporter.sendMail(message);
}

// Metoda do wysyłania emaila z potwierdzeniem rezerwacji
function sendBookingConfirmation(userEmail, booking_details, bookingCar) {
  const message = {
    from: { name: 'CARENT', address: process.env.SMTP_USER},
    to: userEmail,
    subject: "Dokonałeś rezerwacji samochodu | CARENT",
    text: `Witaj,\n\nDokonałeś rezerwacji samochodu z naszej floty. Poniżej znajdują się informacje dotyczące rezerwacji.\n\nMarka pojazdu: ${bookingCar.make}\nModel pojazdu: ${bookingCar.model}\nŁączna ilość godzin wypożyczenia: ${booking_details.totalHours}\nWypożyczenie od: ${booking_details.bookedTimeSlots.from}\nWypożyczenie do: ${booking_details.bookedTimeSlots.to}\nKwota do zapłaty: ${booking_details.totalPrice}\nRezerwacja z kierowcą: ${booking_details.driver ? "tak" : "nie"}\nCzy opłacone: ${booking_details.isPaid ? "tak" : "nie"}\n\nPo dokonaniu rezerwacji udaj się pod adres wypożyczalni, który znajdziesz poniżej.\n\n Adres wypożyczalni: Car Rental Merito | Gajda & Mykhailiuk & Michalski, ul. Radosna 21, 11-222 Warszawa\n\nWidzimy się na miejscu :)`,
    html: `<h1>Witaj,</h1><p>Dokonałeś rezerwacji samochodu z naszej floty. Poniżej znajdują się informacje dotyczące rezerwacji.</p><p>Marka pojazdu: ${bookingCar.make}\nModel pojazdu: ${bookingCar.model}\nŁączna ilość godzin wypożyczenia: ${booking_details.totalHours}\nWypożyczenie od: ${booking_details.bookedTimeSlots.from}\nWypożyczenie do: ${booking_details.bookedTimeSlots.to}\nKwota do zapłaty: ${booking_details.totalPrice}\nRezerwacja z kierowcą: ${booking_details.driver ? "tak" : "nie"}\nCzy opłacone: ${booking_details.isPaid ? "tak" : "nie"}</p><p>Po dokonaniu rezerwacji udaj się pod adres wypożyczalni, który znajdziesz poniżej.</p><p>Adres wypożyczalni: Car Rental Merito | Gajda & Mykhailiuk & Michalski, ul. Radosna 21, 11-222 Warszawa\n\nWidzimy się na miejscu :)</p>`,
  };
  return transporter.sendMail(message);
}

// Uniwersalna metoda do wysyłania różnych typów emaili
function sendEmail(userEmail, subject, content) {
  const message = {
    from: { name: 'CARENT', address: process.env.SMTP_USER},
    to: userEmail,
    subject: "Dokonałeś rezerwacji samochodu | CARENT",
    text: `Witaj,\n\nDokonałeś rezerwacji samochodu z naszej floty. Poniżej znajdują się informacje dotyczące rezerwacji.\n\nMarka pojazdu: ${bookingCar.make}\nModel pojazdu: ${bookingCar.model}\nŁączna ilość godzin wypożyczenia: ${booking_details.totalHours}\nWypożyczenie od: ${booking_details.bookedTimeSlots.from}\nWypożyczenie do: ${booking_details.bookedTimeSlots.to}\nKwota do zapłaty: ${booking_details.totalPrice}\nRezerwacja z kierowcą: ${booking_details.driver ? "tak" : "nie"}\nCzy opłacone: ${booking_details.isPaid ? "tak" : "nie"}\n\nPo dokonaniu rezerwacji udaj się pod adres wypożyczalni, który znajdziesz poniżej.\n\n Adres wypożyczalni: Car Rental Merito | Gajda & Mykhailiuk & Michalski, ul. Radosna 21, 11-222 Warszawa\n\nWidzimy się na miejscu :)`,
    html: `<h1>Witaj,</h1><p>Dokonałeś rezerwacji samochodu z naszej floty. Poniżej znajdują się informacje dotyczące rezerwacji.</p><p>Marka pojazdu: ${bookingCar.make}\nModel pojazdu: ${bookingCar.model}\nŁączna ilość godzin wypożyczenia: ${booking_details.totalHours}\nWypożyczenie od: ${booking_details.bookedTimeSlots.from}\nWypożyczenie do: ${booking_details.bookedTimeSlots.to}\nKwota do zapłaty: ${booking_details.totalPrice}\nRezerwacja z kierowcą: ${booking_details.driver ? "tak" : "nie"}\nCzy opłacone: ${booking_details.isPaid ? "tak" : "nie"}</p><p>Po dokonaniu rezerwacji udaj się pod adres wypożyczalni, który znajdziesz poniżej.</p><p>Adres wypożyczalni: Car Rental Merito | Gajda & Mykhailiuk & Michalski, ul. Radosna 21, 11-222 Warszawa\n\nWidzimy się na miejscu :)</p>`,
  };
  return transporter.sendMail(message);
}

export { sendResetPasswordEmail, sendBookingConfirmation, sendEmail };
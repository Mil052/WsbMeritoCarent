import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { emailSchema, passwordSchema, usernameSchema } from '../utils/userFieldSchemas.js';
import validateField from '../utils/validateField.js';
import AppError from '../errors/AppError.js';

// Funkcja tworząca konto administratora, jeśli jeszcze nie istnieje

const createAdminAccount = async (adminName, adminEmail, adminPassword) => {
  const adminExists = await User.findOne({ email: adminEmail, isAdmin: true });
  if (adminExists) return;

  // Walidacja danych administratora
  const validations = [
    { field: "Nazwa użytkownika", validation: validateField(adminName, usernameSchema) },
    { field: "Adres email", validation: validateField(adminEmail, emailSchema) },
    { field: "Hasło", validation: validateField(adminPassword, passwordSchema) },
  ];

  // Jeśli jakiekolwiek pole nie spełnia warunków walidacji wurzucamy błąd
  if (validations.some(({ field, validation }) => !validation.isValid)) {
    throw new AppError('Nieprawidłowe dane administratora', 400);
  }

  // Generujemy sól
  const salt = await bcrypt.genSalt(10);
  // Haszujemy nasze hasło dodając do niego sól
  const hashedPassword = await bcrypt.hash(adminPassword, salt);

  const adminUser = new User({
    username: adminName,
    email: adminEmail,
    password: hashedPassword,
    isAdmin: true,
  });

  await adminUser.save();
  console.log('Utworzono konto administratora.');
}

export default createAdminAccount;
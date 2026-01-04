# REST API dla aplikacji do wypożyczania samochodów

## 📌 Wymagania
Przed uruchomieniem aplikacji należy upewnić się, że masz zainstalowane:
- [Node.js](https://nodejs.org/en) (zalecana wersja LTS),
- [MongoDB](https://www.mongodb.com/) (lokalnie lub w chmurze, np. MongoDB Atlas),
- Menedżer pakietów `npm` (instalowany razem z Node.js),
- dostęp do serwera SMTP (np. Gmail) oraz dane uwierzytelniające

## 📥 Instalacja
1. **Sklonuj repozytorium**
   ```sh
   git clone https://github.com/Mil052/WsbMeritoCarent.git
   ```
2. **Przejdź do katalogu _backend_**
   ```sh
   cd backend
   ```
3. **Zainstaluj _dependencies_**
   ```sh
   npm install
   ```

## ⚙️ Konfiguracja środowiska
1. **Utwórz plik `.env.development` oraz `.env.production`** w głównym katalogu i dodaj zmienne środowiskowe. Wszystkie zmienne środowiskowe, które powinny znaleźć się w środku tego pliku dostępne są w pliku `.env.temp`.
2. **Upewnij się, że baza MongoDB działa poprawnie** (lokalnie lub w chmurze).

## 🚀 Uruchomienie aplikacji lokalnie
1. **Wpisz polecenie uruchamiające aplikację** 
   ```sh
   npm run dev
   ```

## 📡 Testowanie API
Po uruchomieniu backendu, API będzie dostępne na porcie 8000 (domyślnie) pod adresem:
```
http://localhost:8000
```
Możesz testować endpointy za pomocą narzędzi takich jak:
- [Postman](https://www.postman.com/),
- [curl](https://curl.se/docs/).

## 👌 Przygotowanie wersji produkcyjnej
1. **Wpisz polecenie uruchamiające proces tworzenia wersji produkcyjnej** 
   ```sh
   npm run build
   ```
2. **Wersja produkcyjna w postaci pliku `app.js` znajduje się w ktalogu `dist`**
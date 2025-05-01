# Taqwim 

Taqwim is an intelligent event reminder system that ensures users never miss important events. It delivers reminders through multiple channels—**SMS**, **Telegram**, and **WhatsApp**—even without internet access.

## Features

- **Internet Independence**: Ensures reminders are received regardless of internet connectivity.
- **Multi-Channel Notifications**: Sends reminders through SMS, Telegram, and WhatsApp.
- **Reduced Latency**: Utilizes edge computing to minimize delays in alert delivery.
- **Offline Support**: Guarantees reminder delivery even when devices are offline.
- **Google Calendar Synchronization**: Automatically fetches and processes events from Google Calendar.
- **IoT-Based Delivery**: Uses Raspberry Pi and GSM modules for reliable message delivery.
- **User-Friendly Mobile App**: Allows easy management of events and customization of notifications.

## Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: Firebase Firestore
- **Messaging Services**: Twilio, Telegram Bot API, WhatsApp API
- **Hosting**: Vercel
- **IoT Integration**: Raspberry Pi, GSM modules

## Installation & Setup

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/taqwim-dz.git
   cd taqwim-dz
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The application is deployed using **Vercel**. To deploy your own version:

1. Push your repository to GitHub.
2. Connect the repository to Vercel.
3. Configure environment variables in the Vercel dashboard.
4. Deploy directly from Vercel.

## Contributing

Contributions are welcome! To contribute:
- Fork the repository.
- Create a new branch (`feature/your-feature-name`).
- Commit your changes.
- Submit a pull request.

## License

This project is licensed under the **MIT License**.

## Contact

For any inquiries or support, please reach out via GitHub Issues or visit [Taqwim DZ](https://taqwim-dz.vercel.app).

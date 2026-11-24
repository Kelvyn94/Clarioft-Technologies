const whatsappUrl =
  "https://wa.me/254794610102?text=Hello%20Clarioft%2C%20I%20would%20like%20to%20make%20an%20enquiry.";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Clarioft Technologies on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="27"
        height="27"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2a9.9 9.9 0 0 0-8.45 15.06L2 22l5.1-1.34A9.95 9.95 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.03.8.81-2.95-.2-.31a8.12 8.12 0 1 1 6.85 3.77Zm4.46-6.08c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.24 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      <span>Chat with us</span>
    </a>
  );
}

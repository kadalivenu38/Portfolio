import { useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const backendUrl = "https://portfolio-backend-60cp.onrender.com/contact";

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        setIsSubmitting(true);

        const formData = new FormData(event.target);
        const payload = {
            name: String(formData.get("name") || "").trim(),
            email: String(formData.get("email") || "").trim(),
            message: String(formData.get("message") || "").trim(),
        };

        try {
            const res = await fetch(backendUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setResult("Message sent successfully!");
                event.target.reset();
            } else {
                setResult(data.message || "Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Contact submit error", error);
            setResult("Server error. Please check your backend or try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-3 mb-10 font-Ovo">I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your name"
                        className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
                        required
                    />

                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
                        required
                    />
                </div>

                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Enter your message"
                    className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30"
                    required
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? "Sending..." : "Submit now"}
                    <img src="./assets/right-arrow-white.png" alt="Submit" className="w-4" />
                </button>
                <p className='mt-4 text-center text-sm text-gray-700 dark:text-gray-300' role="status" aria-live="polite">
                    {result}
                </p>
            </form>
        </div>
    )
}
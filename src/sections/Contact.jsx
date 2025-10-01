import { useRef, useState } from "react";
import { ContactExperience, TitleHeader } from "../components/index.js";

const Contact = () => {
	const formRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setSuccess(false);

		// symulacja wysyłki
		setTimeout(() => {
			console.log("Form submitted:", form);

			setForm({ name: "", email: "", message: "" });
			setLoading(false);
			setSuccess(true);

			// automatyczne schowanie komunikatu po 4s
			setTimeout(() => setSuccess(false), 4000);
		}, 1500);
	};

	return (
		<section id="contact" className="flex-center section-padding">
			<div className="w-full h-full md:px-10 px-5">
				<TitleHeader
					title="Get in Touch – Let’s Connect"
					sub="💬 Have questions or ideas? Let’s talk! 🚀"
				/>

				<div className="grid-12-cols mt-16">
					<div className="xl:col-span-5">
						<div className="flex-center card-border rounded-xl p-10 flex-col gap-5 w-full">

							{success && (
								<div className="w-full p-4 rounded-lg bg-green-100 border border-green-300 text-green-700 text-center font-medium animate-fade-in">
									✅ Message sent successfully
								</div>
							)}

							<form
								ref={formRef}
								onSubmit={handleSubmit}
								className="w-full flex flex-col gap-7"
							>
								<div>
									<label htmlFor="name">Your name</label>
									<input
										type="text"
										id="name"
										name="name"
										value={form.name}
										onChange={handleChange}
										placeholder="What’s your good name?"
										required
									/>
								</div>

								<div>
									<label htmlFor="email">Your Email</label>
									<input
										type="email"
										id="email"
										name="email"
										value={form.email}
										onChange={handleChange}
										placeholder="What’s your email address?"
										required
									/>
								</div>

								<div>
									<label htmlFor="message">Your Message</label>
									<textarea
										id="message"
										name="message"
										value={form.message}
										onChange={handleChange}
										placeholder="How can I help you?"
										rows="5"
										required
									/>
								</div>

								<button type="submit">
									<div className="cta-button group">
										<div className="bg-circle" />
										<p className="text">
											{loading ? "Sending..." : "Send Message"}
										</p>
										<div className="arrow-wrapper">
											<img src="/images/arrow-down.svg" alt="arrow" />
										</div>
									</div>
								</button>
							</form>
						</div>
					</div>

					<div className="xl:col-span-7 min-h-96">
						<div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
							<ContactExperience />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
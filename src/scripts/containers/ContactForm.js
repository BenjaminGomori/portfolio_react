import React, { Component } from 'react';

class ContactForm extends Component {
	render() {
		return (
			//TODO
			<form className="contact-form" method="post" action="/contactForm.java">
				<label className="contact-form__label">
					<span>Name*</span>
					<input
						className="contact-form__input contact-form__name"
						type="text"
						name="Name"
						maxLength="25"
						required
					/>
				</label>

				<label className="contact-form__label">
					<span>Email*</span>
					<input
						className="contact-form__input contact-form__email"
						type="email"
						name="Email"
						maxLength="35"
						required
					/>
				</label>

				<label className="contact-form__label">
					<span>Message*</span>
					<textarea
						className="contact-form__input contact-form__message"
						name="Message"
						maxLength="500"
						required
					></textarea>
				</label>

				<button type="submit" className="contact-form__submit">
					Send
				</button>
			</form>
		);
	}
}

export default ContactForm;

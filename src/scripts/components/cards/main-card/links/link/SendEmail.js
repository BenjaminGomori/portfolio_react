import React from 'react';

function SendEmail() {
	function openEmail() {
		window.location.href = 'mailto:benjamingomori@gmail.com';
	}
	return (
		<a
			className="main-card__links__link"
			rel="noopener noreferrer"
			href="./"
			title="Email"
			target="_blank"
			onClick={openEmail}
		>
			SEND EMAIL
		</a>
	);
}

export default SendEmail;

const scrollSpySections = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('a');
const lastSection = document.querySelector('a:last-of-type');

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = [];
		scrollSpySections.forEach((section) => {
			// section.offsetTop -odległość sekcji od górnej krawędzi
			// section.offsetHeight - wysokość każdej sekcji
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 95) {
				sections.push(section);
				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				menuItems.forEach((item) => item.classList.remove('active'));
				activeSection.classList.add('active');
			}
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 20
			) {

				menuItems.forEach((item) => item.classList.remove('active'));
				lastSection.classList.add('active');
			}
		});
	}
};

window.addEventListener('scroll', handleScrollSpy);

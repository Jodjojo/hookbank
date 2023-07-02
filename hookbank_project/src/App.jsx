import styles from "./style";
import {
	Navbar,
	Hero,
	Stats,
	Business,
	CardDeal,
	Testimonials,
	Clients,
	CTA,
	Footer,
} from "./components/index";

const App = () => {
	return (
		<div className='bg-primary w-full overdlow-hidden'>
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Stats /> <Business /> <CardDeal /> <Testimonials /> <Clients />
					<CTA /> <Footer />
				</div>
			</div>
		</div>
	);
};

export default App;

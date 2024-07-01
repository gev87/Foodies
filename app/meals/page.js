import Link from "next/link";
import styles from "./page.module.css";

export default function MealsPage() {
	return (
		<>
			<header className={styles.header}>
				<h1>
					Delicious meals, created <span className={styles.highlight}> by you</span>
				</h1>
				<p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
				<p>
					<Link href="/meals/share">Sghare Your favorite recipe</Link>
				</p>
			</header>
			<main className={styles.main}></main>
		</>
	);
}

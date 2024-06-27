import Link from "next/link";

export default function MealsPage() {
	const mealName = "Burger";
	return (
		<main>
			<h1>MealsPage</h1>
			<p>
				<Link href="meals/share">Share</Link>
			</p>
			<p>
				<Link href={`meals/${mealName}`}>currentmeal</Link>
			</p>
		</main>
	);
}

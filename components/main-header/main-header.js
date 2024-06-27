import Link from "next/link";
import logoImg from "@/public/images/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link href="/" className={classes.logo}>
					<Image src={logoImg} alt="a plate with food on it" priority />
					NextLevel Food
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<Link href="/meals">Browse Meals</Link>
						</li>
						<li>
							<Link href="/meals">Foodies Comunity</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

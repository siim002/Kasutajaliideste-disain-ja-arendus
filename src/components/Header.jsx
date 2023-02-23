import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/header.css";
import { useState } from "react";

export default function Header() {
	const [burger, setBurger] = useState(false);

	return (
		<header>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<div className="vector-header-start">
						<button
							onClick={() => setBurger(!burger)}
							className="nav-burger button-icon"
							role="button"
							data-bs-toggle="button"
							aria-pressed={burger}
						>
							{burger ? <KeyboardDoubleArrowLeftIcon fontSize="small" className="icons" /> : <MenuIcon className="icons" fontSize="small" />}
						</button>

						<a href="/">
							<div className="nav-title">
								<img src="src\resources\wikipedia-globe.png" alt="" height="50" width="50" />
								<div className="nav-title-logo">
									<img src="src\resources\wikipedia-wordmark-en.svg" alt="" width="120" height="18" />
									<img src="src\resources\wikipedia-tagline-en.svg" alt="" width="117" height="13" />
								</div>
							</div>
						</a>
					</div>

					<form class="d-flex" role="search">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button class="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
					<ul class="navbar-nav mb-2 mb-lg-0">
						<li class="nav-item">
							<a class=" active nav-links" aria-current="page" href="#">
								Create account
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-links" aria-current="page" href="#">
								Log in
							</a>
						</li>
					</ul>
					<button className="nav-burger button-icon" aria-current="page">
						<MoreHorizIcon fontSize="small" />
					</button>
				</div>
			</nav>
		</header>
	);
}

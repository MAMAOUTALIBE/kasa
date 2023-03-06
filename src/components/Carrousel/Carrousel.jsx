import { useState } from "react"; // les HOOKS des react 
import left from "../../assets/images/vector-left.svg";
import right from "../../assets/images/vector-right.svg";

export default function Carrousel({ slides }) {// funtion diapositives qui sappelle carrousel
	const [current, setCurrent] = useState(0); //je définie l'index du premier diapositives à 0 et modifiable grace a setcurrent
	const length = slides.length; // longueur du tableau de diapositives

	const nextSlide = () => { // diapositives suivantes
		setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier diapositives quand on arrive au dernier setcurrent qui modifieras la longuer
	};
	const prevSlide = () => { // diapositives precedentes 
		setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier diapo quand on est au premier
	};

	return (
		<section id="carrousel-container">
			{length > 1 && ( // si la longueur est superieur a 1 affiche ce bout de code ci dessous
				<img
					src={left} //fleche a droite
					alt="gauche"
					onClick={prevSlide} // click vers le prochain diapo
					className="leftArrow"
				/>
			)}
			{length > 1 && ( // si la longueur est superieur a 1 affiche ce bout de code ci dessous
				<img
					src={right} //fleche a droite 
					alt="droite"
					onClick={nextSlide} // click vers le prochain diapo
					className="rightArrow"
				/>
			)}
			{slides.map((slide, index) => ( // maper( parcourir autant de fois que definis pour chaque elements)
				<div
					key={index} // clés unique mise en place du diapo avec affichage conditionnel et opacity=1 quand le diapo en cours vaut l'index
					className={
						current === index //LISTER LES ELEMENT A PARTIR DE 0 CURRENT(ACTUEL)
							? "slider bl-msk wh-msk active-anim"
							: "slider bl-msk wh-msk"
					}
				>
					{index === current && <img src={slide} alt="appartement à louer" />} 
					{index === current && ( // si cest tue il executeras la commande si dessou
						<span className="slider__number">
							{current + 1}/{length}
						</span> // actuel +1 sur la longuer (exemple (0+1)/4, (0+1)/5, (0+1)/6, etc... )
					)}
				</div>
			))}
		</section>
	);
}

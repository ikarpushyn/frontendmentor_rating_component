import React, { useState } from 'react';

import styles from './MainCard.module.scss';
import { AiFillStar } from 'react-icons/ai';
import './awesomeBtn.css';

import './Rating.css';
const MainCard = ({ toggleShow }) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	return (
		<div className={styles.mainCard}>
			<AiFillStar className={styles.starButton} />
			<h2>How did we do?</h2>
			<br />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. At distinctio illo, fuga mollitia
				doloribus enim unde, dolor veritatis cum, voluptates soluta ab laudantium repellendus libero
				perspiciatis consequuntur harum. Porro, libero.
			</p>
			<br />

			<div>
				<div className="star-rating">
					{[...Array(5)].map((star, index) => {
						index += 1;
						return (
							<button
								type="button"
								key={index}
								className={index <= (hover || rating) ? 'on' : 'off'}
								onClick={() => setRating(index)}
								onMouseEnter={() => setHover(index)}
								onMouseLeave={() => setHover(rating)}
							>
								<AiFillStar className="star" />
							</button>
						);
					})}
				</div>

				<button className="glow-on-hover" type="button" onClick={() => toggleShow(rating)}>
					SUBMIT
				</button>
			</div>

			<br />
		</div>
	);
};

export default MainCard;
/*  */

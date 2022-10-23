import { useState } from 'react';
import Container from './components/Container/Container';
import MainCard from './components/MainCard/MainCard';
import Modal from './components/Modal/Modal';

function App() {
	const [isShow, setIsShow] = useState(false);
	const [stars, setStars] = useState(0);

	const toggleShow = (rating) => {
		if (rating === 0) {
			return;
		}
		setIsShow(!isShow);
		console.log(rating);
		setStars(rating);
	};

	return (
		<Container>
			{!isShow && <MainCard toggleShow={toggleShow} />}
			<Modal stars={stars} />
		</Container>
	);
}

export default App;

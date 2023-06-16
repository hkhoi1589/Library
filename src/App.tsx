import Restaurant from './common/dto/restaurant';
import ButtonList from './components/Button';
import SelectList from './components/Select';

const restaurant: Restaurant[] = [
	{
		id: 1,
		name: 'Restaurant',
		logo: '/res.jpg',
		description: 'restaurant',
	},
	{
		id: 2,
		name: 'Restaurant 1',
		logo: '/res.jpg',
		description: 'restaurant 1',
	},
	{
		id: 3,
		name: 'Restaurant 2',
		logo: '/res.jpg',
		description: 'restaurant 2',
	},
	{
		id: 4,
		name: 'Restaurant 3',
		logo: '/res.jpg',
		description: 'restaurant 3',
	},
];

// input nen co debounce
function App() {
	return (
		<>
			<h1>Animation Buttons</h1>
			<p>Hover us and enjoy the satisfying neumorphic animation designs!</p>
			<ButtonList />
			<h1>Selects</h1>
			<SelectList
				placeholder='-- Select a restaurant --'
				active={true}
				dataMap={restaurant}
				onChange={(value: number) => {}}
			/>
		</>
	);
}

export default App;

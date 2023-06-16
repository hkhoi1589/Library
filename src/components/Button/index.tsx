import styles from './Button.module.css';

const ButtonList = () => {
	return (
		<div className='w-[90%] text-center mx-auto my-10'>
			<button className={`m-5 ${styles.btn} ${styles.btn_1}`}>Read More</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_2}`}>Read More</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_3}`}>
				<span>Read More</span>
			</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_4}`}>
				<span>Read More</span>
			</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_5}`}>
				<span>Read More</span>
			</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_6}`}>
				<span>Read More</span>
			</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_7}`}>
				<span>Read More</span>
			</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_8}`}>
				<span>Read More</span>
			</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_9}`}>Read More</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_10}`}>Read More</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_11}`}>
				Read More<div className='dot'></div>
			</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_12}`}>
				<span>Click!</span>
				<span>Read More</span>
			</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_13}`}>Read More</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_14}`}>Read More</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_15}`}>Read More</button>
			<button className={`m-5 ${styles.btn} ${styles.btn_16}`}>Read More</button>
		</div>
	);
};

export default ButtonList;

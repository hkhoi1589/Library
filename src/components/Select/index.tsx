import React, { useEffect, useRef, useState } from 'react';
import Restaurant from '../../common/dto/restaurant';
import 'animate.css';
import styles from './Select.module.css';

interface SelectListProps {
	placeholder: string;
	active: boolean;
	dataMap: Restaurant[];
	onChange: any;
	disabled?: boolean;
	className?: string;
	style?: string;
}

const SelectList: React.FC<SelectListProps> = ({
	placeholder,
	dataMap,
	onChange,
	disabled = true,
	className,
}) => {
	const dropRef = useRef<HTMLInputElement>(null);
	const buttonRef = useRef<HTMLInputElement>(null);

	const [isActive, setisActive] = useState(false);
	const [pointerDrop, setPointerDrop] = useState(false);
	const [valueSelected, setValueSelected] = useState('');

	const handleClickOutside = (event: MouseEvent) => {
		if (buttonRef && !buttonRef.current?.contains(event.target as Node)) {
			setisActive(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<>
			<div className={`${styles.select} animate__animated animate__zoomIn`}>
				<input type='radio' name='option' />
				<i
					className={`${styles.toggle} ${styles.icon_badge} ${styles.icon_arrow_down}`}></i>
				<i className={`${styles.toggle} ${styles.icon_badge} ${styles.icon_arrow_up}`}></i>
				<span className={`${styles.placeholder}`}>Choose...</span>
				<label className={`${styles.option}`}>
					<input type='radio' name='option' />
					<span className={`${styles.title} animate__animated animate__fadeIn`}>
						<i className={`${styles.icon_badge} ${styles.icon_speedometer}`}></i>
						Speedometer
					</span>
				</label>
				<label className={`${styles.option}`}>
					<input type='radio' name='option' />
					<span className={`${styles.title} animate__animated animate__fadeIn`}>
						<i className={`${styles.icon_badge} ${styles.icon_fire}`}></i>Fire
					</span>
				</label>
				<label className={`${styles.option}`}>
					<input type='radio' name='option' disabled />
					<span className={`${styles.title} animate__animated animate__fadeIn`}>
						<i className={`${styles.icon_badge} ${styles.icon_handbag}`}></i>Handbag
					</span>
				</label>
				<label className={`${styles.option}`}>
					<input type='radio' name='option' />
					<span className={`${styles.title} animate__animated animate__fadeIn`}>
						<i className={`${styles.icon_badge} ${styles.icon_badge}`}></i>Badge
					</span>
				</label>
			</div>

			<div className='relative w-60 h-10 mx-auto m-5'>
				<div
					ref={buttonRef}
					className={`hover:opacity-95 bg-white text-primaryColor p-4 flex flex-row items-center w-full h-10 cursor-pointer select-none border-2 border-solid box-border rounded-md ${className}`}
					onClick={(e: React.MouseEvent<HTMLElement>) => {
						if (disabled) {
							const node = e.target as HTMLElement;
							let rect = node.getBoundingClientRect();

							if (rect.bottom > 500) setPointerDrop(false);
							else setPointerDrop(true);

							setisActive(!isActive);
						}
					}}>
					<div className='flex items-center'>
						<span className='not-italic font-medium text-base leading-6 overflow-hidden long_text'>
							{valueSelected ? valueSelected : placeholder ? placeholder : ''}
						</span>
					</div>
					<div className=''>
						<i className='far fa-angle-down'></i>
					</div>
				</div>
				<div
					ref={dropRef}
					className={`absolute left-0 flex-col justify-start items-start z-10 w-full overflow-auto bg-white rounded-b-lg ${
						isActive ? 'flex' : 'hidden'
					} ${pointerDrop ? 'top-10' : 'bottom-10'}`}>
					{dataMap && dataMap.length > 0 ? (
						dataMap.map((item, index) => (
							<div
								className='hover:bg-primaryColor bg-white hover:text-white text-primaryColor flex justify-center items-center w-full h-10 not-italic font-medium leading-6 cursor-pointer select-none'
								key={index}
								onClick={() => {
									setValueSelected(item.name);
									onChange && onChange(item.id);
								}}>
								<span className='long_text'>{item.name}</span>
							</div>
						))
					) : (
						<div className='hover:bg-primaryColor bg-white hover:text-white text-primaryColor text-center w-full h-10 not-italic font-medium leading-6 cursor-pointer select-none'>
							No Item
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default SelectList;

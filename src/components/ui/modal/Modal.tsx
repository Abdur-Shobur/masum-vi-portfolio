import { useEffect, useState } from 'react';
import style from './style.module.css';
import Icons from '@/lib/Icon';
import ButtonIco from '../buttons/ButtonIco';

function Modal({ open, setOpen }: { open: boolean; setOpen: Function }) {
	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [open]);
	if (!open) return null;
	return (
		<div className="absolute top-0 z-50 w-[100vw] left-0 h-screen overflow-y-auto">
			<span
				onClick={() => setOpen(false)}
				className="bg-[#71717126] absolute w-full h-full block z-20"
			></span>

			{/* <!-- component --> */}
			<div className="flex justify-center items-center w-fit bg-transparent relative z-30 mx-auto">
				<button
					className="absolute right-10 top-10 transition bg-red-500 hover:bg-transparent hover:text-red-500  hover:border-2 hover:border-red-500 shadow-lg w-10 h-10 flex justify-center items-center text-white rounded-full"
					onClick={() => setOpen(false)}
				>
					<Icons.Cancel />
				</button>

				{/* <!-- COMPONENT CODE --> */}
				<div className="container mx-auto my-4 px-4 ">
					<div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
						<div className="flex ">
							<h1 className="font-bold uppercase text-5xl">
								Send us a <br /> message
							</h1>
						</div>
						<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
							<input
								className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="text"
								placeholder="First Name*"
							/>
							<input
								className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="text"
								placeholder="Last Name*"
							/>
							<input
								className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="email"
								placeholder="Email*"
							/>
							<input
								className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="number"
								placeholder="Phone*"
							/>
						</div>
						<div className="my-4">
							<textarea
								placeholder="Message*"
								className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							></textarea>
						</div>
						<div className="my-2 w-1/2 lg:w-1/4">
							<ButtonIco text="submit" Icon={Icons.contact} />
						</div>
					</div>

					<div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-[var(--main)] rounded-2xl">
						<div className="flex flex-col text-white">
							<h1 className="font-bold uppercase text-4xl my-4">
								Drop in our office
							</h1>
							<p className="text-slate-100">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
								vitae nibh viverra, auctor turpis sed, scelerisque ex.
							</p>

							<div className="flex my-4 w-2/3 lg:w-1/2">
								<div className="flex flex-col">
									<i className="fas fa-map-marker-alt pt-2 pr-2" />
								</div>
								<div className="flex flex-col">
									<h2 className="text-2xl">Main Office</h2>
									<p className="text-slate-100">
										5555 Tailwind RD, Pleasant Grove, UT 73533
									</p>
								</div>
							</div>

							<div className="flex my-4 w-2/3 lg:w-1/2">
								<div className="flex flex-col">
									<i className="fas fa-phone-alt pt-2 pr-2" />
								</div>
								<div className="flex flex-col">
									<h2 className="text-2xl">Call Us</h2>
									<p className="text-slate-100">Tel: xxx-xxx-xxx</p>
									<p className="text-slate-100">Fax: xxx-xxx-xxx</p>
								</div>
							</div>

							<div className="flex gap-2 my-4 w-2/3 lg:w-1/2">
								<a
									href="https://www.facebook.com/ENLIGHTENEERING/"
									target="_blank"
									rel="noreferrer"
									className="rounded-full bg-white text-[var(--main)] h-8 w-8 flex justify-center items-center  text-center  "
								>
									<Icons.Facebook />
								</a>
								<a
									href="https://www.facebook.com/ENLIGHTENEERING/"
									target="_blank"
									rel="noreferrer"
									className="rounded-full bg-white text-[var(--main)] h-8 w-8 flex justify-center items-center  text-center  "
								>
									<Icons.Linkedin />
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- COMPONENT CODE --> */}
			</div>
		</div>
	);
}

export default Modal;

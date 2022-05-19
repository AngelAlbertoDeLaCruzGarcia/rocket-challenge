import React from "react";

export default function Header() {
	return (
		<div class='bg-primary p-4'>
			<h5 class='text-white h4'>Registro de usuarios</h5>
			<div class='d-flex justify-content-end'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					fill='currentColor'
					class='bi bi-clipboard-heart-fill'
					viewBox='0 0 16 16'
					color='white'>
					<path
						fill-rule='evenodd'
						d='M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z'
					/>
					<path
						fill-rule='evenodd'
						d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm4 5.982c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z'
					/>
				</svg>
			</div>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='12'
				height='12'
				fill='currentColor'
				class='bi bi-stopwatch'
				viewBox='0 0 16 16'>
				<path d='M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z' />
				<path d='M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z' />
			</svg>
			<span class='text-muted'> En menos de 5 minutos</span>
		</div>
	);
}

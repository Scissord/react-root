export function IconSun(props: any) {
  return (
		<svg
			viewBox="0 0 512 512"
			fill="#e5e5e5"
			height="1.5em"
			width="1.5em"
			{...props}
		>
			<path
				fill="none"
				stroke="#e5e5e5"
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={32}
				d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
			/>
			<path
				fill="none"
				stroke="#e5e5e5"
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={32}
				d="M336 256 A80 80 0 0 1 256 336 A80 80 0 0 1 176 256 A80 80 0 0 1 336 256 z"
			/>
		</svg>
  );
}
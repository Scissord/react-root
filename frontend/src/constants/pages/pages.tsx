import { IoHomeOutline, IoLibraryOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";

export const pages = [
	{ label: 'Main', link: '/', icon: <IoHomeOutline /> },
	{ label: 'Library', link: '/library', icon: <IoLibraryOutline /> },
	{ label: 'FAQ', link: '/about', icon: <FaQuestionCircle /> },
]
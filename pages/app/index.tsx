import Link from "next/link";
import { GetServerSideProps } from "next";
import { withIronSession } from "next-iron-session";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
	CalendarIcon,
	ChartBarIcon,
	FolderIcon,
	HomeIcon,
	InboxIcon,
	UsersIcon,
	XIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";

import { sessionOptions } from "@/lib/iron-session";
import App from "@/components/layout/App";
import Logo from "@/components/commons/Logo";
import DropNav from "@/components/app/sidebar/DropNav";
import NavBar from "@/components/app/topbar/NavBar";

interface Props {
	children?: React.ReactNode;
	user?: any;
}

const navigations = [
	{
		name: "Projects",
		href: "#",
		icon: HomeIcon,
		sub: [
			{
				name: "Project1",
				href: "/app/project1",
				icon: "",
			},
			{
				name: "Project2",
				href: "#",
				icon: "",
			},
		],
	},
	{
		name: "Options",
		href: "#",
		icon: UsersIcon,
		sub: [],
	},
	{
		name: "Payments",
		href: "#",
		icon: CalendarIcon,
		sub: [],
	},
];

const Dashboard: React.FC<Props> = ({
	children,
	user,
}): JSX.Element => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<App>
			<div className="h-screen flex overflow-hidden bg-gray-100">
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog
						as="div"
						static
						className="fixed inset-0 flex z-40 md:hidden"
						open={sidebarOpen}
						onClose={setSidebarOpen}
					>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
						</Transition.Child>
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
								<Transition.Child
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute top-0 right-0 -mr-12 pt-2">
										<button
											className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
											onClick={() => setSidebarOpen(false)}
										>
											<span className="sr-only">Close sidebar</span>
											<XIcon
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</button>
									</div>
								</Transition.Child>
								<Link href="/">
									<a className="flex-shrink-0 flex items-center justify-center">
										<Logo src="/logo.png" alt="Houseace" />
									</a>
								</Link>
								<div className="mt-5 flex-1 h-0 overflow-y-auto">
									<nav className="px-2 space-y-1">
										{navigations.map((item: any, key: number) => (
											<DropNav
												key={`NavigationMobile-${key}`}
												item={item}
											/>
										))}
									</nav>
								</div>
							</div>
						</Transition.Child>
						<div className="flex-shrink-0 w-14" aria-hidden="true">
							{/* Dummy element to force sidebar to shrink to fit close icon */}
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className="hidden md:flex md:flex-shrink-0">
					<div className="flex flex-col w-72">
						{/* Sidebar component, swap this element with another sidebar if you like */}
						<div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto shadow rounded-2xl m-2">
							<Link href="/">
								<a className="flex items-center flex-shrink-0 mt-4 justify-center">
									<Logo
										src="/logo.png"
										alt="Houseace"
										className="h-14 w-auto"
									/>
								</a>
							</Link>
							<nav
								className={classNames(
									`mt-28 py-3 pr-3
									space-y-1
									text-gray-light text-left text-sm`
								)}
							>
								{navigations.map((item: any, key: number) => (
									<DropNav key={`Navigation-${key}`} item={item} />
								))}
							</nav>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-0 flex-1 overflow-hidden">
					<NavBar setSidebarOpen={setSidebarOpen} />
					<main className="flex-1 relative overflow-y-auto focus:outline-none bg-white shadow rounded-2xl m-2">
						{children}
					</main>
				</div>
			</div>
		</App>
	);
};

export const getServerSideProps: GetServerSideProps = withIronSession(
	async ({ req }) => {
		const user = req.session.get("user");
		if (!user) {
			return {
				redirect: {
					destination: "/auth/login",
					permanent: false,
				},
			};
		}

		return {
			props: { user },
		};
	},
	sessionOptions
);

export default Dashboard;

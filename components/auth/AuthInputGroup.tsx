import classNames from "classnames";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

interface Props extends IInput {
	children?: React.ReactNode;
	errorMessage?: string;
	label?: string;
	className?: string;
}

const AuthInputGroup: React.FC<Props> = ({
	id,
	name,
	label,
	type = "text",
	autoComplete = "off",
	required = false,
	className = "",
	placeHolder,
	children,
	onChange,
	errorMessage = "",
}): JSX.Element => {
	return (
		<>
			<div>
				<label
					htmlFor={id}
					className="block text-sm font-montserrat-medium"
				>
					{label}
				</label>
				<div className="mt-1 relative rounded-md shadow-sm">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						{children}
					</div>
					<input
						id={id}
						name={name}
						type={type}
						autoComplete={autoComplete}
						required={required}
						placeholder={placeHolder}
						onChange={onChange}
						className={classNames(
							"appearance-none block w-full px-3 pl-10 py-2 rounded-md placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-moredark focus:border-transparent sm:text-sm bg-red",
							{ "border-2 border-red-moredark": errorMessage },
							{ "border border-white": !errorMessage },
							{ className }
						)}
					/>

					{errorMessage && (
						<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<ExclamationCircleIcon
								className="h-5 w-5 text-red-moredark"
								aria-hidden="true"
							/>
						</div>
					)}
				</div>
				{errorMessage && (
					<p className="mt-2 text-sm text-red-moredark font-montserrat-bold">
						{errorMessage}
					</p>
				)}
			</div>
		</>
	);
};

export default AuthInputGroup;

import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { successToast } from "../../../../lib/global-functions";
import {
	updateCompanyHero,
	updateCompanyLogo,
} from "../../../../redux/reducers/account/profileReducer";
import Avatar from "../Profile/Avatar";
import FileUploadButton from "./FileUploadButton";

interface IProps {
	logoImage: string;
	heroImage: string;
}
const CompanyHero: React.FC<IProps> = ({
	logoImage,
	heroImage,
}): JSX.Element => {
	const dispatch = useDispatch();
	const handleUpdateCompanyLogo = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const body = new FormData();
		body.append("file", e.target.files[0]);
		dispatch(updateCompanyLogo(body));
		successToast("The logo image is updated successfully.");
	};
	const handleUpdateComapnyHero = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const body = new FormData();
		body.append("file", e.target.files[0]);
		dispatch(updateCompanyHero(body));
		successToast("The hero image is updated successfully.");
	};
	return (
		<div
			className="mt-5 h-72 rounded-2xl relative"
			style={{
				backgroundImage: `url('${heroImage}')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="flex items-center h-full ml-10">
				<Avatar
					imageUrl={logoImage}
					size="w-44 h-44"
					onChange={handleUpdateCompanyLogo}
				/>
			</div>
			<FileUploadButton
				name="company_hero"
				id="company_hero"
				onChange={handleUpdateComapnyHero}
			>
				<AiOutlineCamera className="h-7 w-7" aria-hidden="true" />
			</FileUploadButton>
		</div>
	);
};

export default CompanyHero;

import Head from "next/head";

import AppLayout from "../../components/layout/AppLayout";
import AccountTab from "../../components/app/Account/AccountTab";

const Account: React.FC = (): JSX.Element => {
	return (
		<AppLayout>
			<Head>
				<title>{`${process.env.APP_NAME} - Account`}</title>
			</Head>
			<AccountTab />
		</AppLayout>
	);
};

export default Account;

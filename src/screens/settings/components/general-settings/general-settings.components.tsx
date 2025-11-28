import { Card, Container, Select, Text } from "@/components/_shared";
import { useState } from "react";

const currencyOptions = [
	{ label: 'USD', value: 'USD' },
	{ label: 'EUR', value: 'EUR' },
];

export const GeneralSettings = () => {
	const [currency, setCurrency] = useState('USD');

	return (
		<Card>
			<Container gap='md'>
				<Text variant='h3'>General</Text>
				<Select
					label='Base Currency'
					placeholder='Select a currency'
					options={currencyOptions}
					value={currency}
					onChangeValue={(value) => setCurrency(value as string)}
				/>

			</Container>
		</Card>
	);
};
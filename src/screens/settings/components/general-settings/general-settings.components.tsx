import { Card, Container, Select, Text } from "@/components/_shared";
import { AVAILABLE_CURRENCIES } from "@/constants/currency";

const autoRefreshPricesOptions = [
	{ label: '10 minutes', value: '10' },
	{ label: '15 minutes', value: '15' },
	{ label: '30 minutes', value: '30' },
];

type GeneralSettingsProps = {
	currency: string;
	autoRefreshPrices: string;
	onCurrencyChange: (value: string | number) => void;
	onAutoRefreshPricesChange: (value: string | number) => void;
}

export const GeneralSettings = ({ currency, autoRefreshPrices, onCurrencyChange, onAutoRefreshPricesChange }: GeneralSettingsProps) => {

	return (
		<Card shadow>
			<Container gap='md'>
				<Text variant='h3'>General</Text>
				<Select
					label='Base Currency'
					placeholder='Select a currency'
					options={AVAILABLE_CURRENCIES}
					value={currency}
					onChangeValue={onCurrencyChange}
				/>
				<Select
					label='Auto-Refresh Prices'
					placeholder='Select an Auto-Refresh timeout'
					options={autoRefreshPricesOptions}
					value={autoRefreshPrices}
					onChangeValue={onAutoRefreshPricesChange}
				/>
			</Container>
		</Card>
	);
};
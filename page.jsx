import PrinterClient from './PrinterClient';

export const metadata = {
  title: 'Printer PDF → Excel | TIS',
  description: 'HP Printer Usage Page reader by Total IT Solution',
};

export default function TISPrinterPage() {
  return <PrinterClient />;
}

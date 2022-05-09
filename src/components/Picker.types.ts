export interface PickerProps {
  id: string;
  data?: never[] | undefined;
  placeholderText?: string;
  searchable?: boolean;
  onSearch?: (value: string) => void;
  label?: string;
  placeholderTextColor?: string;
  closeText?: string;
  setSelected?: any;
  loading?: boolean;
  height?: number;
  inputValue?: string;
  noDataFoundText?: string;
}

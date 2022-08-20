import type {
  FlatListProps,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import type { ActionSheetProps } from 'react-native-actions-sheet';

type RenderItemProp<T> = {
  renderListItem: (item: T, index: number) => React.ReactElement;
};

export type PickerProps<T> = {
  id: string;
  data: T[];
  placeholderText?: string;
  searchable?: boolean;
  onSearch?: (value: string) => void;
  label?: string;
  placeholderTextColor?: string;
  closeText?: string;
  setSelected: (value: T) => void;
  loading?: boolean;
  height?: number;
  inputValue?: string;
  noDataFoundText?: string;
  searchInputProps?: TextInputProps;
  flatListProps?: FlatListProps<T>;
  actionsSheetProps?: ActionSheetProps;
  style?: {
    actionSheet?: ViewStyle;
    activityIndicator?: {
      color?: string;
      style?: ViewStyle;
    };
    close?: {
      text?: TextStyle;
      container?: ViewStyle;
    };
    input?: TextStyle;
    item?: {
      text?: TextStyle;
      container?: ViewStyle;
    };
    label?: {
      text?: TextStyle;
      container?: ViewStyle;
    };
    noDataFound?: {
      text?: TextStyle;
      container?: ViewStyle;
    };
  };
} & (T extends { name: string }
  ? Partial<RenderItemProp<T>>
  : RenderItemProp<T>);

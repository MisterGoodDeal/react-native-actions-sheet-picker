# React Native Actions Sheet Picker

A React Native component that provides a filterable select dropdown/picker.

## Preview

<img
width="%33"
height="600"
src="https://github.com/Bur0/react-native-actions-sheet-picker/blob/master/gifs/ios-default.gif"
/>
<img
width="%33"
height="600"
src="https://github.com/Bur0/react-native-actions-sheet-picker/blob/master/gifs/ios-filterable.gif"
/>

## Installation Guide

```sh
yarn add react-native-actions-sheet-picker
```

or

```sh
npm install react-native-actions-sheet-picker
```

## Usage

```jsx
import React, { useState, useMemo, useEffect } from 'react';

import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Picker, onOpen } from 'react-native-actions-sheet-picker';

/*
 **Example data:
 */
import countries from './countries.json';

export default function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(undefined);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setData(countries);
  }, []);

  /*
   **Example filter function
   * @param {string} filter
   */
  const filteredData = useMemo(() => {
    if (data && data.length > 0) {
      return data.filter((item) =>
        item.name
          .toLocaleLowerCase('en')
          .includes(query.toLocaleLowerCase('en'))
      );
    }
  }, [data, query]);

  /*
   **Input search
   *@param {string} text
   */
  const onSearch = (text) => {
    setQuery(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onOpen('country');
        }}
      >
        <Text>Open ActionSheet</Text>
      </TouchableOpacity>
      <Text style={{ padding: 10 }}>Chosen : {JSON.stringify(selected)}</Text>
      <Picker
        id="country"
        data={filteredData}
        inputValue={query}
        searchable={true}
        label="Select Country"
        setSelected={setSelected}
        onSearch={onSearch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8B93A5',
    padding: 10,
    borderRadius: 6,
    marginTop: 50,
  },
});
```

## Options

| Properties               | Type       | Description                           | Default                                 |
| ------------------------ | ---------- | ------------------------------------- | --------------------------------------- |
| **id** <br> \*_required_ | `string`   | A unique id for the ActionSheet       |                                         |
| **data**                 | `array`    | Array of list items                   | `{name: string, ...props}[]`            |
| **inputValue**           | `string`   | The value to show for the text input. |                                         |
| **searchable**           | `boolean ` | Searchable state                      | `false`                                 |
| **loading**              | `boolean`  | Loading state                         | `false`                                 |
| **label**                | `string`   | Flatlist label                        |                                         |
| **height**               | `string`   | ActionSheet height                    | `Dimensions.get('window').height * 0.5` |
| **closeText**            | `string`   | Close text                            | `"Close"`                               |
| **placeholderText**      | `string`   | Placeholder text                      | `"Search"`                              |
| **noDataFoundText**      | `string`   | No data found text                    | `"No Data Found."`                      |
| **placeholderTextColor** | `string`   | Placeholder text color                | `#8B93A5`                               |
| **setSelected**          | `function` | Selected function                     |                                         |
| **onSearch**             | `function` | Textinput search function             |                                         |
| **renderListItem**       | `function` | Render List item                      |                                         |

## Style options

| Properties            | Type                                        | Description                                             | Default     |
| --------------------- | ------------------------------------------- | ------------------------------------------------------- | ----------- |
| **actionSheet**       | `ViewStyle`                                 | Custom style for the action sheet                       | `undefined` |
| **activityIndicator** | `{color?: string, style?: ViewStyle}`       | Custom style for the activity indicator                 | `undefined` |
| **close**             | `{text?: TextStyle, container?: ViewStyle}` | Custom style for the close text and container           | `undefined` |
| **input**             | `TextStyle`                                 | Custom style for the search input                       | `undefined` |
| **item**              | `{text?: TextStyle, container?: ViewStyle}` | Custom style for the item text and container            | `undefined` |
| **label**             | `{text?: TextStyle, container?: ViewStyle}` | Custom style for the label text and container           | `undefined` |
| **noDataFound**       | `{text?: TextStyle, container?: ViewStyle}` | Custom style for the "no data found" text and container | `undefined` |

## Method

| Properties  | Type       | Description       |
| ----------- | ---------- | ----------------- |
| **onOpen**  | `function` | SheetManager show |
| **onClose** | `function` | SheetManager hide |

## Core Props of using packages

| Properties            | Type     | Description                                                                                                          |
| --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- | --- |
| **actionsSheetProps** | `object` | [react-native-actions-sheet](https://github.com/ammarahm-ed/react-native-actions-sheet 'react-native-actions-sheet') |     |
| **flatListProps**     | `object` | [FlatListProps](https://reactnative.dev/docs/flatlist 'FlatListProps')                                               |     |
| **searchInputProps**  | `object` | [TextInputProps](https://reactnative.dev/docs/textinput 'TextInputProps')                                            |     |

## Roadmap

- [ ] Multiple select
- [ ] Issue 3 (https://github.com/Bur0/react-native-actions-sheet-picker/issues/3)
- [ ] Issue 4 (https://github.com/Bur0/react-native-actions-sheet-picker/issues/4)
- [x] renderListItem | props
- [x] Selected highlight

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

# React Native Icon Picker

Icon picker for React Native

First import the component:
```js
import IconPicker from 'react-native-vector-icon-picker';
```

Then use it in your component:
```js
<IconPicker 
    icons={[
          {family: 'AntDesign', icons: ['up', 'down', 'right']},
          {family: 'Entypo', icons: ['arrow-down', 'arrow-up']}
      ]}
      onSelect={(icon) => console.log(icon)}
/>
```

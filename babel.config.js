// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };
// module.exports = {
//   presets: [
//     ['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }]
//   ],
//   plugins: [
//     ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
//   ]
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin'
  ]
 
};
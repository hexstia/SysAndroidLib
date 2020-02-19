module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            "rootPathPrefix": "~",
            "rootPathSuffix": "./apps/src"
          },
          {
            "rootPathPrefix": "#",
            "rootPathSuffix": "./apps/resources"
          }
        ]
      }
    ]
  ],
  "env": {
    "production": {
      "plugins": [
        [
          "babel-plugin-root-import",
          {
            "paths": [
              {
                "rootPathPrefix": "~",
                "rootPathSuffix": "./apps/src"
              },
              {
                "rootPathPrefix": "#",
                "rootPathSuffix": "./apps/resources"
              }
            ]
          }
        ]
      ]
    }
  }
};


// module.exports = (api) => {
//   api.cache(true);
 
//   return {
//     plugins: [
//       ['babel-plugin-root-import',{
//       "paths": [
//         {
//           "rootPathPrefix": "~",
//           "rootPathSuffix": "./apps/src"
//         },
//         {
//           "rootPathPrefix": "#",
//           "rootPathSuffix": "./apps/resources"
//         }
//       ]
//     }]
//   ],
// env:{
//   "production": {
//     "plugins": [
//       [
//         "babel-plugin-root-import",
//         {
//           "paths": [
//             {
//               "rootPathPrefix": "~",
//               "rootPathSuffix": "./apps/src"
//             },
//             {
//               "rootPathPrefix": "#",
//               "rootPathSuffix": "./apps/resources"
//             }
//           ]
//         }
//       ]
//     ]
//   }
// }

//   };
// };
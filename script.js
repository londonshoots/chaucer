TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "cardboardMenu": {
   "class": "Menu",
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8,
   "id": "Menu_8104193E_97DC_9E87_41DD_F7A15A774523",
   "label": "Media",
   "backgroundColor": "#404040",
   "rollOverFontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000",
   "children": [
    {
     "class": "MenuItem",
     "label": "R0010903",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "R0010904",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "R0010905",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "R0010906",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "R0010907",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "R0010908",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "R0010909",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "R0010910",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "R0010911",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "R0010912",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "class": "MenuItem",
     "label": "R0010913",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    }
   ],
   "opacity": 0.4,
   "selectedFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "fontColor": "#FFFFFF"
  },
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "inertia": false,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "id": "panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 3536,
         "width": 3536,
         "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "hfov": 45
     },
     {
      "rollOverDisplay": false,
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "id": "overlay_996B1BE3_97D4_91BD_41E2_82F1CBD66E7C",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97, this.camera_80278ABC_97DC_938B_41DF_6DC0CDEA7945); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 119.62,
        "hfov": 14.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 241,
           "width": 229,
           "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -13.48
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162.jpeg"
      }
     ]
    }
   }
  ],
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -89.7,
    "yaw": 119.62,
    "distance": 1,
    "panorama": {
     "cardboardMenu": "this.Menu_8104193E_97DC_9E87_41DD_F7A15A774523",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "inertia": false,
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "id": "panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 3536,
            "width": 3536,
            "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_tcap0.png"
           }
          ]
         },
         "angle": 0,
         "hfov": 45
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_993BFA2E_97CC_B287_41C7_911C77486E24",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162, this.camera_80DC69C9_97DC_918D_41C1_CDB3FB5881D8); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -89.7,
           "hfov": 18.68,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 227,
              "width": 315,
              "url": "media/panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -27.76
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_87ABD52C_97CD_768B_41CA_F406845537D2",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_9E628776_97CC_9287_41D7_3E41170884E2, this.camera_80C039D9_97DC_918D_41E2_E7D40A757634); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 3.11,
           "hfov": 18.48,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 212,
              "width": 315,
              "url": "media/panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -28.9
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_98452105_97CC_EE85_41AD_4543ED1AD04E",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 167.09,
           "hfov": 15.19,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 221,
              "width": 267,
              "url": "media/panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -32.09
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "id": "overlay_867F921F_97CD_F285_41DD_93C3D36C49C0",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70, this.camera_80E8D9B3_97DC_919D_41B3_5F606A58D6A3); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 105.49,
           "hfov": 16.43,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 207,
              "width": 274,
              "url": "media/panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -26.62
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2688,
          "width": 5376,
          "url": "media/panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97.jpeg"
         }
        ]
       }
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 88.71,
       "yaw": 105.49,
       "distance": 1,
       "panorama": {
        "cardboardMenu": "this.Menu_8104193E_97DC_9E87_41DD_F7A15A774523",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "inertia": false,
            "class": "TripodCapPanoramaOverlay",
            "rotate": false,
            "id": "panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70_tcap0",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 3536,
               "width": 3536,
               "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_tcap0.png"
              }
             ]
            },
            "angle": 0,
            "hfov": 45
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_862DD48A_97FC_B78F_41DC_F47EB0527C9F",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97, this.camera_80410A91_97DC_939D_41D7_4AE138468CA2); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 88.71,
              "hfov": 20.7,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 286,
                 "width": 322,
                 "url": "media/panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -16.37
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_867CAD70_97FD_B69B_41B3_2AB74A6B0826",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_9E60C413_97CD_969D_41BF_9533B892D8C0, this.camera_80370AA6_97DC_9384_41DF_65D76F31E67A); this.mainPlayList.set('selectedIndex', 7)",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -152.96,
              "hfov": 28.09,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 271,
                 "width": 421,
                 "url": "media/panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -6.11
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "id": "overlay_845E61A3_97FC_F1BD_41DD_5A11CA6C8BD8",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539, this.camera_80522A80_97DC_927B_41DF_9E34279E4BB6); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 172.03,
              "hfov": 22.3,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 277,
                 "width": 337,
                 "url": "media/panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -9.84
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 2688,
             "width": 5376,
             "url": "media/panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70.jpeg"
            }
           ]
          }
         }
        ],
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -13.44,
          "yaw": 172.03,
          "distance": 1,
          "panorama": {
           "cardboardMenu": "this.Menu_8104193E_97DC_9E87_41DD_F7A15A774523",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "inertia": false,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "id": "panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539_tcap0",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 3536,
                  "width": 3536,
                  "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_tcap0.png"
                 }
                ]
               },
               "angle": 0,
               "hfov": 45
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_85AD7647_97FF_9285_41C8_4AE6572AC770",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9, this.camera_808D7A3F_97DC_9285_4180_C5F7A378C6A2); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 52.03,
                 "hfov": 19.68,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 257,
                    "width": 306,
                    "url": "media/panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -16.29
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_850D5058_97FC_EE8B_41DE_74203FD26FCE",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70, this.camera_809F1A2F_97DC_9285_41DF_81847DA12C3B); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -13.44,
                 "hfov": 20.33,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 252,
                    "width": 310,
                    "url": "media/panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -12.34
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_84EF3627_97FD_F285_41DA_6E72AD8BBB1C",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_9E60C413_97CD_969D_41BF_9533B892D8C0, this.camera_8063BA69_97DC_928D_41E0_02E1EAE352CA); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -107.77,
                 "hfov": 20.39,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 277,
                    "width": 310,
                    "url": "media/panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -11.51
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "maps": [],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "id": "overlay_84AFB1BE_97FC_F187_4162_20E9747296E6",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9, this.camera_807C0A54_97DC_929B_41B5_B49DF4697129); this.mainPlayList.set('selectedIndex', 8)",
                 "mapColor": "image"
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -66.15,
                 "hfov": 15.65,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 223,
                    "width": 238,
                    "url": "media/panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -11.2
                }
               ]
              }
             ],
             "thumbnailUrl": "media/panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 2688,
                "width": 5376,
                "url": "media/panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 2001,
                "width": 4002,
                "url": "media/panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539.jpeg"
               }
              ]
             }
            }
           ],
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 172.03,
             "yaw": -13.44,
             "distance": 1,
             "panorama": "this.panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70"
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 86.51,
             "yaw": 52.03,
             "distance": 1,
             "panorama": {
              "cardboardMenu": "this.Menu_8104193E_97DC_9E87_41DD_F7A15A774523",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "inertia": false,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "id": "panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9_tcap0",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 3536,
                     "width": 3536,
                     "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_tcap0.png"
                    }
                   ]
                  },
                  "angle": 0,
                  "hfov": 45
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_86EE3522_97F5_96BF_41CF_982F57910AB2",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_9E628776_97CC_9287_41D7_3E41170884E2, this.camera_80E7D99E_97DC_9187_41AD_CAD56817F95F); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -123.42,
                    "hfov": 20.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 264,
                       "width": 342,
                       "url": "media/panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -27.46
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_85DE6CF3_97F4_F79D_41DB_CBFA85E2DE37",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539, this.camera_80FEF989_97DC_918D_41E0_B0B702D3378B); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 86.51,
                    "hfov": 23.15,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 286,
                       "width": 369,
                       "url": "media/panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -20.77
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2688,
                   "width": 5376,
                   "url": "media/panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9.jpeg"
                  }
                 ]
                }
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 52.03,
                "yaw": 86.51,
                "distance": 1,
                "panorama": "this.panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 89.85,
                "yaw": -123.42,
                "distance": 1,
                "panorama": {
                 "cardboardMenu": "this.Menu_8104193E_97DC_9E87_41DD_F7A15A774523",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "inertia": false,
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false,
                     "id": "panorama_9E628776_97CC_9287_41D7_3E41170884E2_tcap0",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 3536,
                        "width": 3536,
                        "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_tcap0.png"
                       }
                      ]
                     },
                     "angle": 0,
                     "hfov": 45
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_87B4F25F_97CC_9285_41E0_1CBBD39B7492",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97, this.camera_8FD84B0A_97DC_928F_4186_BD72DEE64C6A); this.mainPlayList.set('selectedIndex', 1)",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -166.03,
                       "hfov": 12.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 230,
                          "width": 222,
                          "url": "media/panorama_9E628776_97CC_9287_41D7_3E41170884E2_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -30.72
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_870C2124_97F3_EEBB_41DF_1B9A47CB9752",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_9E61529D_97CC_B384_41D9_6DC40A3B8EE1, this.camera_8FFBAAF4_97DC_939B_41CD_D01E2B005D12); this.mainPlayList.set('selectedIndex', 3)",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 1.75,
                       "hfov": 15.99,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 232,
                          "width": 283,
                          "url": "media/panorama_9E628776_97CC_9287_41D7_3E41170884E2_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -32.62
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_874B4480_97F4_B67B_41E2_A8B217329DD4",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9, this.camera_8FEA4AFF_97DC_9385_41D0_E09F0F3E7423); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 89.85,
                       "hfov": 20.73,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 250,
                          "width": 342,
                          "url": "media/panorama_9E628776_97CC_9287_41D7_3E41170884E2_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -25.33
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_9E628776_97CC_9287_41D7_3E41170884E2_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 2688,
                      "width": 5376,
                      "url": "media/panorama_9E628776_97CC_9287_41D7_3E41170884E2_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_9E628776_97CC_9287_41D7_3E41170884E2.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -16.48,
                   "yaw": 1.75,
                   "distance": 1,
                   "panorama": {
                    "cardboardMenu": "this.Menu_8104193E_97DC_9E87_41DD_F7A15A774523",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "inertia": false,
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "id": "panorama_9E61529D_97CC_B384_41D9_6DC40A3B8EE1_tcap0",
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "height": 3536,
                           "width": 3536,
                           "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_tcap0.png"
                          }
                         ]
                        },
                        "angle": 0,
                        "hfov": 45
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_86EE8E4C_97F7_928B_41BE_EA4EC7E959A2",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_9E628776_97CC_9287_41D7_3E41170884E2, this.camera_81081963_97DC_9EBD_41C6_1D00307A7031); this.mainPlayList.set('selectedIndex', 2)",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -16.48,
                          "hfov": 21.63,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 268,
                             "width": 342,
                             "url": "media/panorama_9E61529D_97CC_B384_41D9_6DC40A3B8EE1_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -19.41
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_9E61529D_97CC_B384_41D9_6DC40A3B8EE1_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 2688,
                         "width": 5376,
                         "url": "media/panorama_9E61529D_97CC_B384_41D9_6DC40A3B8EE1_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_9E61529D_97CC_B384_41D9_6DC40A3B8EE1.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": 1.75,
                      "yaw": -16.48,
                      "distance": 1,
                      "panorama": "this.panorama_9E628776_97CC_9287_41D7_3E41170884E2"
                     }
                    ],
                    "id": "panorama_9E61529D_97CC_B384_41D9_6DC40A3B8EE1",
                    "thumbnailUrl": "media/panorama_9E61529D_97CC_B384_41D9_6DC40A3B8EE1_t.jpg",
                    "vfov": 180,
                    "pitch": 0,
                    "class": "Panorama",
                    "hfovMax": 130,
                    "partial": false,
                    "label": "R0010906",
                    "hfov": 360,
                    "hfovMin": 60
                   }
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -123.42,
                   "yaw": 89.85,
                   "distance": 1,
                   "panorama": "this.panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 3.11,
                   "yaw": -166.03,
                   "distance": 1,
                   "panorama": "this.panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97"
                  }
                 ],
                 "id": "panorama_9E628776_97CC_9287_41D7_3E41170884E2",
                 "thumbnailUrl": "media/panorama_9E628776_97CC_9287_41D7_3E41170884E2_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "class": "Panorama",
                 "hfovMax": 130,
                 "partial": false,
                 "label": "R0010905",
                 "hfov": 360,
                 "hfovMin": 60
                }
               }
              ],
              "id": "panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9",
              "thumbnailUrl": "media/panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "class": "Panorama",
              "hfovMax": 130,
              "partial": false,
              "label": "R0010907",
              "hfov": 360,
              "hfovMin": 60
             }
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -106.48,
             "yaw": -66.15,
             "distance": 1,
             "panorama": {
              "cardboardMenu": "this.Menu_8104193E_97DC_9E87_41DD_F7A15A774523",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "inertia": false,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "id": "panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9_tcap0",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 3536,
                     "width": 3536,
                     "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_tcap0.png"
                    }
                   ]
                  },
                  "angle": 0,
                  "hfov": 45
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_84AA86B0_97F7_939B_41B5_DA5C00AFA4D5",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -54.53,
                    "hfov": 18.64,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 212,
                       "width": 281,
                       "url": "media/panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -8.24
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_83E6EF38_97F4_F28C_41D3_660D17CA526E",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539, this.camera_80159AD1_97DC_939D_41D3_F09DF5291B32); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -106.48,
                    "hfov": 15.44,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 221,
                       "width": 231,
                       "url": "media/panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -4.75
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_84B01ACF_97F5_F385_41D2_CB7FF0559E70",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_9E64E6AF_97CD_9384_41E2_85705368D225, this.camera_8FF5CAEA_97DC_938F_418F_09FE9458C0D8); this.mainPlayList.set('selectedIndex', 10)",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -109.97,
                    "hfov": 14.97,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 216,
                       "width": 267,
                       "url": "media/panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": 33.38
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "maps": [],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "id": "overlay_8427E81B_97F4_BE8D_41D3_1E2EF0317EC6",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2, this.camera_80041ADE_97DC_9387_41E0_DC14004278D6); this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 151.97,
                    "hfov": 15.81,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 255,
                       "width": 256,
                       "url": "media/panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -22.9
                   }
                  ]
                 }
                ],
                "thumbnailUrl": "media/panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 2688,
                   "width": 5376,
                   "url": "media/panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 2001,
                   "width": 4002,
                   "url": "media/panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9.jpeg"
                  }
                 ]
                }
               }
              ],
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -66.15,
                "yaw": -106.48,
                "distance": 1,
                "panorama": "this.panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539"
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -135.8,
                "yaw": 151.97,
                "distance": 1,
                "panorama": {
                 "cardboardMenu": "this.Menu_8104193E_97DC_9E87_41DD_F7A15A774523",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "inertia": false,
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false,
                     "id": "panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2_tcap0",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 3536,
                        "width": 3536,
                        "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_tcap0.png"
                       }
                      ]
                     },
                     "angle": 0,
                     "hfov": 45
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_83690962_97CC_BEBF_41D0_14892E5D2780",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.mainPlayList.set('selectedIndex', 0)",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 59.13,
                       "hfov": 19.54,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 256,
                          "width": 296,
                          "url": "media/panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -9.72
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_8436DB66_97CD_9287_41E1_071F6DBFDF06",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9, this.camera_80F0F979_97DC_9E8D_41E1_AE4C5FEA36FB); this.mainPlayList.set('selectedIndex', 8)",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -135.8,
                       "hfov": 18.74,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 227,
                          "width": 290,
                          "url": "media/panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -15.46
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 2688,
                      "width": 5376,
                      "url": "media/panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 151.97,
                   "yaw": -135.8,
                   "distance": 1,
                   "panorama": "this.panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9"
                  }
                 ],
                 "id": "panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2",
                 "thumbnailUrl": "media/panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "class": "Panorama",
                 "hfovMax": 130,
                 "partial": false,
                 "label": "R0010912",
                 "hfov": 360,
                 "hfovMin": 60
                }
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -50.89,
                "yaw": -109.97,
                "distance": 1,
                "panorama": {
                 "cardboardMenu": "this.Menu_8104193E_97DC_9E87_41DD_F7A15A774523",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "inertia": false,
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false,
                     "id": "panorama_9E64E6AF_97CD_9384_41E2_85705368D225_tcap0",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 3536,
                        "width": 3536,
                        "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_tcap0.png"
                       }
                      ]
                     },
                     "angle": 0,
                     "hfov": 45
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_83688A66_97CF_B287_41B6_A4268BACF992",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_9E60C413_97CD_969D_41BF_9533B892D8C0, this.camera_8FBEBB20_97DC_92BB_41D3_6389DF15DEBB); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -135.8,
                       "hfov": 12.41,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 200,
                          "width": 222,
                          "url": "media/panorama_9E64E6AF_97CD_9384_41E2_85705368D225_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -33.53
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_83A62C6B_97CF_968C_41E2_6501604037FC",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9, this.camera_8FC8AB15_97DC_9285_41DC_D9A0A9321935); this.mainPlayList.set('selectedIndex', 8)",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -50.89,
                       "hfov": 9.19,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 171,
                          "width": 217,
                          "url": "media/panorama_9E64E6AF_97CD_9384_41E2_85705368D225_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -50.92
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "maps": [],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "id": "overlay_830EEB77_97CD_7285_41B7_5EE8EFB2EA83",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "image"
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 172.78,
                       "hfov": 9.66,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 200,
                          "width": 215,
                          "url": "media/panorama_9E64E6AF_97CD_9384_41E2_85705368D225_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -47.96
                      }
                     ]
                    }
                   ],
                   "thumbnailUrl": "media/panorama_9E64E6AF_97CD_9384_41E2_85705368D225_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 2688,
                      "width": 5376,
                      "url": "media/panorama_9E64E6AF_97CD_9384_41E2_85705368D225_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 2001,
                      "width": 4002,
                      "url": "media/panorama_9E64E6AF_97CD_9384_41E2_85705368D225.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -109.97,
                   "yaw": -50.89,
                   "distance": 1,
                   "panorama": "this.panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9"
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 120,
                   "yaw": -135.8,
                   "distance": 1,
                   "panorama": {
                    "cardboardMenu": "this.Menu_8104193E_97DC_9E87_41DD_F7A15A774523",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "inertia": false,
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "id": "panorama_9E60C413_97CD_969D_41BF_9533B892D8C0_tcap0",
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "height": 3536,
                           "width": 3536,
                           "url": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_tcap0.png"
                          }
                         ]
                        },
                        "angle": 0,
                        "hfov": 45
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_853CD277_97F3_9284_41C7_88E1756FA7C8",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 9)",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 76.33,
                          "hfov": 18.54,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 241,
                             "width": 283,
                             "url": "media/panorama_9E60C413_97CD_969D_41BF_9533B892D8C0_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -12.42
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_84E0E877_97F4_9E85_4173_F9C49CCFF0B4",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_9E64E6AF_97CD_9384_41E2_85705368D225, this.camera_80A84A19_97DC_928D_41A3_6C19309B1935); this.mainPlayList.set('selectedIndex', 10)",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 120,
                          "hfov": 14.08,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 218,
                             "width": 226,
                             "url": "media/panorama_9E60C413_97CD_969D_41BF_9533B892D8C0_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": 22.06
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_847ECC16_97F5_9687_41CF_82795013EA62",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539, this.camera_80B659EF_97DC_9185_41BC_364B8BAC65D4); this.mainPlayList.set('selectedIndex', 6)",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 152.51,
                          "hfov": 14.94,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 214,
                             "width": 231,
                             "url": "media/panorama_9E60C413_97CD_969D_41BF_9533B892D8C0_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -15.3
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "maps": [],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "id": "overlay_84FD0704_97F4_927B_41E0_8D1027F699F1",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70, this.camera_80A4DA04_97DC_927B_41C1_3974C8B053BC); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "image"
                         }
                        ],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 111.27,
                          "hfov": 12.79,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 184,
                             "width": 197,
                             "url": "media/panorama_9E60C413_97CD_969D_41BF_9533B892D8C0_0_HS_3_0.png"
                            }
                           ]
                          },
                          "pitch": -14.62
                         }
                        ]
                       }
                      ],
                      "thumbnailUrl": "media/panorama_9E60C413_97CD_969D_41BF_9533B892D8C0_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 2688,
                         "width": 5376,
                         "url": "media/panorama_9E60C413_97CD_969D_41BF_9533B892D8C0_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 2001,
                         "width": 4002,
                         "url": "media/panorama_9E60C413_97CD_969D_41BF_9533B892D8C0.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -107.77,
                      "yaw": 152.51,
                      "distance": 1,
                      "panorama": "this.panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -152.96,
                      "yaw": 111.27,
                      "distance": 1,
                      "panorama": "this.panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -135.8,
                      "yaw": 120,
                      "distance": 1,
                      "panorama": "this.panorama_9E64E6AF_97CD_9384_41E2_85705368D225"
                     }
                    ],
                    "id": "panorama_9E60C413_97CD_969D_41BF_9533B892D8C0",
                    "thumbnailUrl": "media/panorama_9E60C413_97CD_969D_41BF_9533B892D8C0_t.jpg",
                    "vfov": 180,
                    "pitch": 0,
                    "class": "Panorama",
                    "hfovMax": 130,
                    "partial": false,
                    "label": "R0010910",
                    "hfov": 360,
                    "hfovMin": 60
                   }
                  }
                 ],
                 "id": "panorama_9E64E6AF_97CD_9384_41E2_85705368D225",
                 "thumbnailUrl": "media/panorama_9E64E6AF_97CD_9384_41E2_85705368D225_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "class": "Panorama",
                 "hfovMax": 130,
                 "partial": false,
                 "label": "R0010913",
                 "hfov": 360,
                 "hfovMin": 60
                }
               }
              ],
              "id": "panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9",
              "thumbnailUrl": "media/panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "class": "Panorama",
              "hfovMax": 130,
              "partial": false,
              "label": "R0010911",
              "hfov": 360,
              "hfovMin": 60
             }
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 152.51,
             "yaw": -107.77,
             "distance": 1,
             "panorama": "this.panorama_9E60C413_97CD_969D_41BF_9533B892D8C0"
            }
           ],
           "id": "panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539",
           "thumbnailUrl": "media/panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "class": "Panorama",
           "hfovMax": 130,
           "partial": false,
           "label": "R0010909",
           "hfov": 360,
           "hfovMin": 60
          }
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 105.49,
          "yaw": 88.71,
          "distance": 1,
          "panorama": "this.panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97"
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 111.27,
          "yaw": -152.96,
          "distance": 1,
          "panorama": "this.panorama_9E60C413_97CD_969D_41BF_9533B892D8C0"
         }
        ],
        "id": "panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70",
        "thumbnailUrl": "media/panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "class": "Panorama",
        "hfovMax": 130,
        "partial": false,
        "label": "R0010908",
        "hfov": 360,
        "hfovMin": 60
       }
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 119.62,
       "yaw": -89.7,
       "distance": 1,
       "panorama": "this.panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162"
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -166.03,
       "yaw": 3.11,
       "distance": 1,
       "panorama": "this.panorama_9E628776_97CC_9287_41D7_3E41170884E2"
      }
     ],
     "id": "panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97",
     "thumbnailUrl": "media/panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "class": "Panorama",
     "hfovMax": 130,
     "partial": false,
     "label": "R0010904",
     "hfov": 360,
     "hfovMin": 60
    }
   }
  ],
  "id": "panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162",
  "thumbnailUrl": "media/panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "class": "Panorama",
  "hfovMax": 130,
  "partial": false,
  "label": "R0010903",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false
 },
 {
  "idleSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 1000,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 117.95,
   "pitch": -1.31
  },
  "id": "panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -20.13,
   "pitch": -9.75
  },
  "id": "panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_9E628776_97CC_9287_41D7_3E41170884E2",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.52,
   "pitch": -3.78
  },
  "id": "panorama_9E628776_97CC_9287_41D7_3E41170884E2_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_9E61529D_97CC_B384_41D9_6DC40A3B8EE1",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -126.46,
   "pitch": -9.77
  },
  "id": "panorama_9E61529D_97CC_B384_41D9_6DC40A3B8EE1_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 44.09,
   "pitch": -7.9
  },
  "id": "panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.27,
   "pitch": -17.88
  },
  "id": "panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.15,
   "pitch": -6.21
  },
  "id": "panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_9E60C413_97CD_969D_41BF_9533B892D8C0",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.76,
   "pitch": 0
  },
  "id": "panorama_9E60C413_97CD_969D_41BF_9533B892D8C0_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.86,
   "pitch": -6.46
  },
  "id": "panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 28.78,
   "pitch": -9.21
  },
  "id": "panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_9E64E6AF_97CD_9384_41E2_85705368D225",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 164.15,
   "pitch": -26.02
  },
  "id": "panorama_9E64E6AF_97CD_9384_41E2_85705368D225_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_9E007100_97CC_EE7B_41B8_C44B46D2B162"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_9E528C46_97CC_F687_41AE_B28C1EC38F97"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9E628776_97CC_9287_41D7_3E41170884E2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_9E628776_97CC_9287_41D7_3E41170884E2"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9E61529D_97CC_B384_41D9_6DC40A3B8EE1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_9E61529D_97CC_B384_41D9_6DC40A3B8EE1"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_9E627F96_97CC_B184_41D6_BA5CCE2AC4C9"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_9E7F4B8A_97CC_918F_41CE_C7A35D5AEC70"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_9E7F0874_97CD_7E9B_41D4_886F82E67539"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9E60C413_97CD_969D_41BF_9533B892D8C0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_9E60C413_97CD_969D_41BF_9533B892D8C0"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_9E64BFA5_97CD_9185_41D2_2070E2BC13A9"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_9E643B20_97CD_B2BB_41D7_A1B9D453E3D2"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9E64E6AF_97CD_9384_41E2_85705368D225_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
    "end": "this.trigger('tourEnded')",
    "media": "this.panorama_9E64E6AF_97CD_9384_41E2_85705368D225"
   }
  ]
 },
 "this.Menu_8104193E_97DC_9E87_41DD_F7A15A774523",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.25,
   "pitch": 0
  },
  "id": "camera_81081963_97DC_9EBD_41C6_1D00307A7031",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -28.03,
   "pitch": 0
  },
  "id": "camera_80F0F979_97DC_9E8D_41E1_AE4C5FEA36FB",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -127.97,
   "pitch": 0
  },
  "id": "camera_80FEF989_97DC_918D_41E0_B0B702D3378B",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.15,
   "pitch": 0
  },
  "id": "camera_80E7D99E_97DC_9187_41AD_CAD56817F95F",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -91.29,
   "pitch": 0
  },
  "id": "camera_80E8D9B3_97DC_919D_41B3_5F606A58D6A3",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "idleSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "id": "sequence_80DC59CA_97DC_918F_41AB_2169938065D2"
  },
  "timeToIdle": 1000,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -60.38,
   "pitch": 0
  },
  "id": "camera_80DC69C9_97DC_918D_41C1_CDB3FB5881D8",
  "initialSequence": "this.sequence_80DC59CA_97DC_918F_41AB_2169938065D2"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.97,
   "pitch": 0
  },
  "id": "camera_80C039D9_97DC_918D_41E2_E7D40A757634",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 72.23,
   "pitch": 0
  },
  "id": "camera_80B659EF_97DC_9185_41BC_364B8BAC65D4",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 27.04,
   "pitch": 0
  },
  "id": "camera_80A4DA04_97DC_927B_41C1_3974C8B053BC",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 44.2,
   "pitch": 0
  },
  "id": "camera_80A84A19_97DC_928D_41A3_6C19309B1935",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.97,
   "pitch": 0
  },
  "id": "camera_809F1A2F_97DC_9285_41DF_81847DA12C3B",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.49,
   "pitch": 0
  },
  "id": "camera_808D7A3F_97DC_9285_4180_C5F7A378C6A2",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 73.52,
   "pitch": 0
  },
  "id": "camera_807C0A54_97DC_929B_41B5_B49DF4697129",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -27.49,
   "pitch": 0
  },
  "id": "camera_8063BA69_97DC_928D_41E0_02E1EAE352CA",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 166.56,
   "pitch": 0
  },
  "id": "camera_80522A80_97DC_927B_41DF_9E34279E4BB6",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -74.51,
   "pitch": 0
  },
  "id": "camera_80410A91_97DC_939D_41D7_4AE138468CA2",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -68.73,
   "pitch": 0
  },
  "id": "camera_80370AA6_97DC_9384_41DF_65D76F31E67A",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.3,
   "pitch": 0
  },
  "id": "camera_80278ABC_97DC_938B_41DF_6DC0CDEA7945",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 113.85,
   "pitch": 0
  },
  "id": "camera_80159AD1_97DC_939D_41D3_F09DF5291B32",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 44.2,
   "pitch": 0
  },
  "id": "camera_80041ADE_97DC_9387_41E0_DC14004278D6",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 129.11,
   "pitch": 0
  },
  "id": "camera_8FF5CAEA_97DC_938F_418F_09FE9458C0D8",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.52,
   "pitch": 0
  },
  "id": "camera_8FFBAAF4_97DC_939B_41CD_D01E2B005D12",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 56.58,
   "pitch": 0
  },
  "id": "camera_8FEA4AFF_97DC_9385_41D0_E09F0F3E7423",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.89,
   "pitch": 0
  },
  "id": "camera_8FD84B0A_97DC_928F_4186_BD72DEE64C6A",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 70.03,
   "pitch": 0
  },
  "id": "camera_8FC8AB15_97DC_9285_41DC_D9A0A9321935",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -60,
   "pitch": 0
  },
  "id": "camera_8FBEBB20_97DC_92BB_41D3_6389DF15DEBB",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 }
], "children": [
 {
  "toolTipBorderRadius": 3,
  "transitionMode": "blending",
  "borderRadius": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarOpacity": 1,
  "paddingRight": 0,
  "toolTipPaddingRight": 6,
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "progressBarOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeight": 10,
  "playbackBarRight": 0,
  "toolTipShadowVerticalLength": 0,
  "paddingLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBottom": 0,
  "toolTipPaddingTop": 4,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderSize": 0,
  "playbackBarLeft": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "height": "100%",
  "progressHeight": 10,
  "width": "100%",
  "progressBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "paddingTop": 0,
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "toolTipDisplayTime": 600,
  "playbackBarBorderRadius": 0,
  "toolTipFontSize": 12,
  "id": "MainViewer",
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "transitionDuration": 500,
  "paddingBottom": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadWidth": 6,
  "minHeight": 50,
  "toolTipBorderColor": "#767676",
  "class": "ViewerArea",
  "propagateClick": false,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarProgressOpacity": 1,
  "progressBorderRadius": 0,
  "progressLeft": 0,
  "minWidth": 100,
  "playbackBarHeadHeight": 15,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipBorderSize": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingBottom": 4,
  "playbackBarBorderSize": 0,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowColor": "#000000",
  "playbackBarBackgroundOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "id": "rootPlayer",
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "verticalAlign": "top",
 "minHeight": 20,
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "propagateClick": false,
 "shadow": false,
 "paddingRight": 0,
 "creationPolicy": "delayed",
 "minWidth": 20,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "height": "100%",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Player438"
 },
 "gap": 10,
 "borderSize": 0,
 "scrollBarWidth": 10
})
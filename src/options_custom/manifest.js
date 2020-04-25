// SAMPLE
this.manifest = {
    "name": "UN-PARSE-ABLE",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("display"),
            "group": i18n.get("render"),
            "name": "squares",
            "type": "checkbox",
            "label": i18n.get("render-description"),
        },
        {
            "tab": i18n.get("display"),
            "group": i18n.get("render"),
            "name": "image",
            "type": "checkbox",
            "label": i18n.get("image-description"),
        },
        {
            "tab": i18n.get("display"),
            "group": i18n.get("render"),
            "name": "fontFamily",
            "type": "popupButton",
            "label": "Font family:",
            "options": {
                "groups": [
                    "Default", "Custom"
                ],
                "values": [
                    {
                        "value": "system-ui",
                        "group": 1,
                    },
                    {
                        "value": "Arial",
                        "group": 2,
                    },
                    {
                        "value": "Times",
                        "group": 2,
                    },
                    {
                        "value": "Georgia",
                        "group": 2,
                    },
                    {
                        "value": "Apple Chancery",
                        "group": 2,
                    },
                    {
                        "value": "Lucida Calligraphy",
                        "group": 2,
                    },
                    {
                        "value": "Helvetica",
                        "group": 2,
                    },
                    {
                        "value": "Verdena",
                        "group": 2,
                    },
                    {
                        "value": "Papyrus",
                        "group": 2,
                    },
                    {
                        "value": "serif",
                        "group": 2,
                    },
                    {
                        "value": "sans-serif",
                        "group": 2,
                    },
                    {
                        "value": "monospace",
                        "group": 2,
                    },
                    {
                        "value": "fantasy",
                        "group": 2,
                    },
                    {
                        "value": "cursive",
                        "group": 2,
                    },
                ],
            },
        },
        {
            "tab": i18n.get("details"),
            "group": i18n.get("content"),
            "name": "footer",
            "type": "text",
            "label": i18n.get("footer"),
            "text": i18n.get("x-characters-pw")
        },
        // {
        //     "tab": i18n.get("display"),
        //     "group": i18n.get("login"),
        //     "name": "myDescription",
        //     "type": "description",
        //     "text": i18n.get("description")
        // },
        // {
        //     "tab": i18n.get("display"),
        //     "group": i18n.get("logout"),
        //     "name": "myCheckbox",
        //     "type": "checkbox",
        //     "label": i18n.get("enable")
        // },
        // {
        //     "tab": i18n.get("display"),
        //     "group": i18n.get("logout"),
        //     "name": "myButton",
        //     "type": "button",
        //     "label": i18n.get("disconnect"),
        //     "text": i18n.get("logout")
        // },
        // {
        //     "tab": "Details",
        //     "group": "Sound",
        //     "name": "noti_volume",
        //     "type": "slider",
        //     "label": "Notification volume:",
        //     "max": 1,
        //     "min": 0,
        //     "step": 0.01,
        //     "display": true,
        //     "displayModifier": function (value) {
        //         return (value * 100).floor() + "%";
        //     }
        // },
        // {
        //     "tab": "Details",
        //     "group": "Sound",
        //     "name": "sound_volume",
        //     "type": "slider",
        //     "label": "Sound volume:",
        //     "max": 100,
        //     "min": 0,
        //     "step": 1,
        //     "display": true,
        //     "displayModifier": function (value) {
        //         return value + "%";
        //     }
        // },
        // {
        //     "tab": "Details",
        //     "group": "Food",
        //     "name": "myPopupButton",
        //     "type": "popupButton",
        //     "label": "Soup 1 should be:",
        //     "options": {
        //         "groups": [
        //             "Hot", "Cold",
        //         ],
        //         "values": [
        //             {
        //                 "value": "hot",
        //                 "text": "Very hot",
        //                 "group": "Hot",
        //             },
        //             {
        //                 "value": "Medium",
        //                 "group": 1,
        //             },
        //             {
        //                 "value": "Cold",
        //                 "group": 2,
        //             },
        //             ["Non-existing"]
        //         ],
        //     },
        // },
        // {
        //     "tab": "Details",
        //     "group": "Food",
        //     "name": "myListBox",
        //     "type": "listBox",
        //     "label": "Soup 2 should be:",
        //     "options": [
        //         ["hot", "Hot and yummy"],
        //         ["cold"]
        //     ]
        // },

    ],
    // "alignment": [
    //     [
    //         // "squares",
    //         // "password"
    //     ],
    //     // [
    //     //     "noti_volume",
    //     //     "sound_volume"
    //     // ]
    // ]
};

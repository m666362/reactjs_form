const ROOMS = {
    type: "auto-complete",
    title: "rooms",
    menus: [
        {
            name: "bedroom",
            quantity: 0,
            area: 5,
        },
        {
            name: "living room",
            quantity: 0,
            area: 10,
        },
        {
            name: "dining room",
            quantity: 0,
            area: 6,
        },
        {
            name: "kitchen",
            quantity: 0,
            area: 3,
        }
    ]
}

export const availablePostCode = [1000, 2000, 3000];


const LIFT = {
    type: "select",
    title: "lift",
    menus: [
        {
            name: "lift"
        },
        {
            name: "no lift",
            floors: [1, 2, 3]
        }
    ]
}

export const PACKAGE = {
    type: "multiple-select",
    title: "package",
    menus: [
        {
            name: "premium package"
        },
        {
            name: "Sanitiser",
            description: "something"
        },
        {
            name: "Stain Protection",
            description: "something"
        },
        {
            name: "Deo",
            description: "something"
        },
        {
            name: "SEO",
            description: "something"
        },

    ]
}

const FURNITURE = {
    type: "select",
    title: "furniture",
    menus: [
        {
            name: "2 seat sofa",
            count: 1,
        },
        {
            name: "3 seat sofa",
            count: 1,
        },
        {
            name: "4 seat sofa",
            count: 1,
        },
        {
            name: "5 seat sofa",
            count: 1,
        },
        {
            name: "6 seat sofa",
            count: 1,
        }
    ]
}

// export const serviceData = [
//     {
//         service: "Carpet/Rugs",
//         POSTCODE: {
//             type: "textfield",
//             title: "comment"
//         },
//         RUGSTYPE,
//         ROOMS,
//         LIFT,
//         PACKAGE,
//         FURNITURE,
//         COMMENT: {
//             type: "textfield",
//             title: "comment"
//         }
//     },
// ]


const RUGSTYPE = {
    type: "radio-button",
    title: "rugstype",
    menus : [
        { name: "Standard", subText: "Synthetic/Mixed"},
        { name: "Delicate", subText: "Cotton, Silk, Jute"}
    ]
}

export const serviceData = {
    serviceName: {
        type: "textfield",
        title: "serviceName"
    },
    RUGSTYPE,
    ROOMS,
    LIFT,
    PACKAGE,
    FURNITURE,
    COMMENT: {
        type: "textfield",
        title: "comment"
    }
}

export const step_map = [
    {
        Question: "What do you need help with",
        autoCompleteType: "freesolo",
        fieldType: "AutoComplete",
        name: "service_required",
        options: [
            "End of Lease Cleaning",
            "Carpet/Rug Cleaning",
            "Antiviral Sanitisation",
            "Regular Cleaning",
            "Oven/BBQ Cleaning",
            "Spring Ceanng"
        ]
    },
    {
        Question: "Where should we serve you?",
        Placeholder: "Enter your post code",
        fieldType: "TextField",
        name: "post_code"
    },
    {
        Question: "What is the material of your  carpet/rugs",
        fieldType: "Radio",
        name: "material_of_carpet",
        options: [
            { heading: "Standard", subText: "Synthetic/Mixed"},
            { heading: "Delicate", subText: "Cotton, Silk, Jute"}
        ]
    },
    {
        Question: "Which ROmms need carpet cleaning",
        fieldType: "table",
        name: "service_details_1",
        options: [
            { name: "bedrooms", heading: "Bedrooms", subText: "upto 12 sqm", quantity: 0},
            { name: "living_bedrooms", heading: "Living/Dining Bedrooms", subText: "upto 20 sqm", quantity: 0},
            { name: "lounges", heading: "Lounges", subText: "upto 35 sqm", quantity: 0},
            { name: "flight_of_stairs", heading: "Flight of Stairs", subText: "upto 15 teps", quantity: 0}
        ]

    },
    {
        Question: "Age there any rugs to be cleaned",
        fieldType: "table",
        name: "service_details_2",
        options: [
            { name: "small_rugs", heading: "Small Rugs", subText: "upto 4sq. m.", quantity: 0},
            { name: "large_rugs", heading: "Large Rugs", subText: "upto 6 sqm", quantity: 0}
        ]
    },
    {
        Question: "On which floor is the property located and is there a lift?",
        fieldType: "Radio",
        name: "lift",
        options: [
            { heading: "There is a lift",},
            { heading: "No Lift"}
        ]
    },
    {
        Question: "Most of our clients who book carpet cleaning also add",
        fieldType: "checkbox",
        name: "addl_services",
        options: [
            { heading: "Premium Package", icon: "ddd"},
            { heading: "Sanister", icon: "ddd"},
            { heading: "Stain Protection", icon: "ddd"},
            { heading: "Deodoriser", icon: "ddd"},
            { heading: "Single Oven CLeaning - $12", icon: "ddd", subText: "Save $25"},
            { heading: "Double Oven Cleaning - $134", icon: "ddd", subText: "Save $45"},
        ]
    },
    {
        Question: "Whold you like to add Upholstery/Mattress cleaning",
        fieldType: "AutoComplete with table",
        name: "services_additional_items",
        options: [
            { name: "bedrooms", heading: "Bedrooms", subText: "upto 12 sqm", quantity: 0},
            { name: "living_bedrooms", heading: "Living/Dining Bedrooms", subText: "upto 20 sqm", quantity: 0},
            { name: "lounges", heading: "Lounges", subText: "upto 35 sqm", quantity: 0},
            { name: "flight_of_stairs", heading: "Flight of Stairs", subText: "upto 15 teps", quantity: 0}
        ]
    },
    {
        Question: "Is there anything elase you'd like us to know?",
        Placeholder: "Any stins, spills, damage",
        fieldType: "textarea",
        name: "comments"
    },
]
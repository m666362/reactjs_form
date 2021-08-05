const ROOMS = {
    type: "select",
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

const RUGSTYPE = {
    type: "select",
    title: "rugstype",
    menus : [
            {
                name: "standard"
            },
            {
                name: "custom"
            }
        ]
}

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

const PACKAGE = {
    type: "select",
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
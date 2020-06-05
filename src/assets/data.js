export default {
    personal_information: {
        data: [
            {
                title: 'Phone',
                description: `7310569408`
            },
            {
                title: 'E-mail',
                description: `anirudh.chauhan.142@gmail.com`
            },
            {
                title: 'Date of Birth',
                description: `December 14, 1996`
            },
            {
                title: 'LinkedIn',
                description: `https://www.linkedin.com/in/anirudh-kumar-b0a94614a/`
            }, {
                title: 'Twitter',
                description: `@_anirudh___`

            },

        ]

    },
    skills: [
        {
            title: 'Javascript (ES6 and above)',
            level: .85
        },
        {
            title: 'React (Flux, hooks )',
            level: .8
        },
        {
            title: 'Angular (Angular Material)',
            level: .70
        },
        {
            title: 'React Native',
            level: .7
        },
        {
            title: 'Data visualization (Chart.js, p5.js, leaflet.js)',
            level: .6
        },

        {
            title: 'Html,Css',
            level: .6
        }
        ,
        {
            title: 'TypeScript',
            level: .5
        }
    ]
}


export const data = [
    {
        type: 'h1',
        text: ['Anirudh Kumar']
    },
    {
        type: 'h2',
        text: ['SOFTWARE ENGINEER']
    },
    {
        type: 'p',
        text: ['A Software engineer looking for a innovative and challenging environment where I can excel my skills with maximum potential for the benefit for the organisation as well as my self.']
    },
    {
        type: 'section',
        text: ['Experience'],
        fontWeight: 'bold',
        leftIcon: 'business_center'
    },
    {
        type: 'h4',
        text: [
            '2018-Present',
            'Full-Stack Developer',
            'Dhwani Rural Information System'
        ]
    },
    {
        type: 'p',
        fontWeight: 'bold',
        text: [
            '<b><i>Responsibilities :</i></b>',
            'Worked on multiple data incentive projects using technologies like Angular, React, React Native.',
            'Build re-usable components to facilitate development across projects',
            'Implemented POC on various ideas and technologies like Survey forms, chat bots, etc.',
            'Lead the front-end development team projects.']
    },
    {
        type: 'section',
        text: ['Projects'],
        fontWeight: 'bold',
        leftIcon: 'star'
    },
    {
        type: 'h4',
        text: ['2019/07-current', '[City Finance (Angular) ](https://democityfinance.dhwaniris.in/)'],
        link: ''
    },
    {
        type: 'p',
        fontWeight: 'bold',
        text: [
            'An initiative of Ministry of Housing and Urban Affairs,<b>Government of India</b>',
            'Worked on the dashboard panel of this project.',
            'Used <b>chart.js,leaflet.js ,angular material</b> etc.'
        ]

    },
    {
        type: 'h4',
        text: ['Nand Ghar (React Native):']
    },
    {
        type: 'p',
        fontWeight: 'bold',
        text: ['Nand Ghar, a first of its kind PPP model, in partnership with the government has potential to be a movement for a holistic approach towards child care and women empowerment.',
        ]
    },
    {
        type: "p",
        text: [
            'Implemented various features like language <b> support, location capture</b>, syncing, etc',
            'Created custom UI components.',
            'Added offline first support.'],
    },
    {
        type: 'h4',
        text: ['2018/10-2019/07', 'Delta Development Corridor (Angular) :'],
    },
    {
        type: "p",
        text: ['An interactive, <b>real-time interface</b> to process and view the data collected in meaningful format which can be used for Micro-Level Planning. Unlike most dashboards which are custom coded, the DELTA Dashboard is configurable. The users through provided interface could create their own configurable dashboards.'],
    },
    {
        type: "p",
        text: [
            'Worked on user management and various other modules for the dashboard panel of this project.',
            '<b>Worked on a module similar to google forms where user can create survey forms with various types of questions.Forms can be created in different languages as well as can be based on geography. They can be assigned to particular user geography wise.</b>',
            'Used data visualization libraries like chart.js, leaflet.js.',
            'Integrated google maps for GIS information.',
            'Used Angular material for user Interfaces.',
        ]
    },
    {
        type: 'h4',
        text: ['2018/7-2018/10', 'Google Internet Saathi (Angular)'],
    },
    {
        type: "p",
        text: ['Bridging the online gender divide in rural India.'],
    },
    {
        type: "p",
        text: [
            'Worked on user management module for the dashboard panel of this project.',
            'Used various data visualization libraries like chart.js, leaflet.js, HighChart.js on large data sets throughout the project.'
        ]
    },
];

const technologies = {
    ANGULAR: {
        name: 'Angular',
    },
    JS: {
        name: 'JavaScript',
    },
    P5: {
        name: "p5.js"
    }
}


export const activites = [
    {
        date: 'June 2020 - current',
        title: 'SaniTech Website',
        description: ['SaniTech- We are a fast moving and highly innovative hygienic company providing turnkey solutions for all products to ensure the highest hygiene and standards globally.'],
        link: 'https://sanitechglobal.com/#/home',
        technologies: [technologies.ANGULAR],
        media: {
            type: 'image',
            data: ['https://raw.githubusercontent.com/anirudh411/assets/master/images/sanitech/sanitech1.png']
        },
    },
    {
        date: 'March 2020',
        title: 'Air and fluid resistance simulation using p5.js',
        description: ['Simple fluid resistance simulation created using p5.js library.'],
        link: 'https://editor.p5js.org/anirudh.chauhan.142@gmail.com/present/G55sod9it',
        technologies: [technologies.JS, technologies.P5],
        media: {
            type: 'iframe',
            data: ["https://editor.p5js.org/anirudh.chauhan.142@gmail.com/embed/G55sod9it"],
        },
    },
    {
        date: 'March 2020',
        title: 'Random Terrain Generator',
        description: ['A random terrain generated using perlin noise'],
        link: 'https://editor.p5js.org/anirudh.chauhan.142@gmail.com/present/qa85-6keh',
        technologies: [technologies.JS, technologies.P5],
        media: {
            type: 'iframe',
            data: ["https://editor.p5js.org/anirudh.chauhan.142@gmail.com/present/qa85-6keh"],
        },
    }
];

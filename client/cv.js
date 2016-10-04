Template.cv.helpers({
    date: function (date) {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        return date.length ? date : monthNames[date.getMonth()] + " " + date.getFullYear();
    },
    data: function () {
        return [
            {
                company: 'Beyond Relationship Marketing',
                position: 'Senior software engineer',
                link:'http://beyondrm.com/',
                from: new Date(2015, 11),
                to: "today",
                tasks: [
                    {
                        desc: "multi tier big data import"
                    },
                    {
                        desc: "legacy multi tier architecture migration plan"
                    },
                    {
                        desc: "wysiwyg email editor prototype"
                    }
                ],
                tech: [
                    {
                        name: "Meteor",
                        weight: 9
                    },
                    {
                        name: "Node.js",
                        weight: 7
                    },
                    {
                        name: "PHP",
                        weight: 3
                    },
                    {
                        name: "Ruby",
                        weight: 1
                    }
                ]

            },
            {
                company: 'audioD3CK',
                position: 'CEO',
                link:'https://audio.d3ck.net/',
                from: new Date(2008,5),
                to: new Date(2015, 11),
                tasks: [
                    {
                        desc: "fully automated web shop"
                    },
                    {
                        desc: "audio softare development"
                    }
                ],
                tech: [
                    {
                        name: "JUCE / c++",
                        weight: 8
                    },
                    {
                        name: "PHP",
                        weight: 3
                    }
                ]

            },
            {
                company: 'Invoco Sales / Xerox Group',
                position: 'Customer support',
                link:'https://www.xerox.de/',
                from: new Date(2015, 4),
                to: new Date(2015, 10),
                tasks: [
                    {
                        desc: 'troubleshooting'
                    }
                ],
                tech: [
                    {
                        name: 'iOS',
                        weight: '9'
                    },
                    {
                        name: 'OSX',
                        weight: '1'
                    }
                ]
            },
            {
                company: 'ClassWizzard',
                position: 'Software engineer',
                link:'https://www.classwizard.com',
                from: new Date(2012,9),
                to: new Date(2014,6),
                tasks: [
                    {
                        desc: "creating data management module for web application"
                    },
                    {
                        desc: "porting lagecy php application to a full javascript stack"
                    },
                    {
                        desc: "socket based full-stack javascript ORM"
                    }
                ],
                tech: [
                    {
                        name: "Node.js",
                        weight: 9
                    },
                    {
                        name: "PHP",
                        weight: 3
                    },
                    {
                        name: "ExtendScript",
                        weight: 3
                    }
                ]
            },
            {
                company: 'IISN',
                position: 'Software engineer',
                link:'http://www.neitzke-dannecker.de/',
                from: new Date(2012, 0),
                to: new Date(2012, 7),
                tasks: [
                    {
                        desc: 'improving existing applications'
                    },
                    {
                        desc: 'creating a configurable xml data editor'
                    }
                ],
                tech: [
                    {
                        name: 'Objective-C',
                        weight: 7
                    },
                    {
                        name: '.Net',
                        weight: 6
                    }
                ]
            },
            {
                company: 'DAA',
                position: 'Software engineer',
                link:'https://www.daa.net/',
                from: new Date(2011, 6),
                to: new Date(2012, 11),
                tasks: [
                    {
                        desc: 'improving the existing application'
                    },
                    {
                        desc: 'solar harvest calculation module'
                    },
                    {
                        desc: 'customer support scheduling module'
                    }
                ],
                tech: [
                    {
                        name: 'PHP',
                        weight: 10
                    }
                ]
            },
            {
                company: "Bitwerft / KB-Interactive",
                position: 'Software engineer',
                link:"http://www.bitwerft.de/",
                from: new Date(2007,2),
                to: new Date(2009,7),
                tasks: [
                    {
                        desc: 'adding functionality to main application'
                    }
                ],
                tech: [
                    {
                        name: 'PHP',
                        weight: 10
                    }
                ]
            },
            {
                company: "Visionomic",
                position: 'Software engineer',
                link:"http://www.visionomic.com/",
                from: new Date(2006,0),
                to: new Date(2009,7),
                tasks: [
                    {
                        desc: 'prototyping of various SEO and marketing tools'
                    }
                ],
                tech: [
                    {
                        name: 'PHP',
                        weight: 10
                    }
                ]
            }
        ];

    }
});
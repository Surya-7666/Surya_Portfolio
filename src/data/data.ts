import { FaGithub, FaLinkedin, FaWhatsapp, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaServer, FaCode,  FaLocationArrow, FaCalendarAlt } from "react-icons/fa"
import type { LinkType, navLinksData, previewDataInterface, ProjectCardProps, verticalTimelineProps, whatAmIDoingProps, AllSkillData } from "../types/type"
import { IoMdMail } from "react-icons/io"
import { SiTailwindcss, SiJavascript, SiTypescript, SiGsap, SiMongodb,  SiCplusplus, SiExpress, SiGit, SiGithub, SiNpm, SiVite, SiEslint, SiTwilio, SiPostman, SiNodemon, SiCloudinary, SiAxios,  SiJsonwebtokens, SiReactrouter, SiRedux, SiVercel,  SiGooglechrome, SiNextdotjs, SiReact,  SiRender, SiGreensock } from "react-icons/si"
import Nexora from "../assets/images/Nexora.png"
import React from "../assets/images/React.png"
import SRBilling from "../assets/images/SRBilling.png"
import Swingo from "../assets/images/Swingo.png";

import Ai from "../assets/images/ai.png"
import { HiAcademicCap } from "react-icons/hi"
import { PiCertificateFill } from "react-icons/pi"
import { MdEmail } from "react-icons/md"
import { VscVscode } from "react-icons/vsc"
import { TbApi, TbCookie,  TbWorld } from "react-icons/tb"
import { LuContactRound } from "react-icons/lu"
import { HiBriefcase } from "react-icons/hi2"

export const previewData: previewDataInterface[] = [
    {
        Icon: IoMdMail,
        title: "Email",
        data: "surya1237890@gmail.com",
    },
    {
        Icon: LuContactRound,
        title: "Mobile",
        data: "+91 91235 17506",
    },
    {
        Icon: FaCalendarAlt,
        title: "Data-Of-Birth",
        data: "May 23, 2005",
    },
    {
        Icon: FaLocationArrow,
        title: "Location",
        data: "Tirunelveli, Tamilnadu",
    },
];

export const navLinks: navLinksData[] = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About me",
        path: "/about"
    },
    {
        title: "Skills",
        path: "/skills"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Contact me",
        path: "/contact"
    },
]

export const links: LinkType[] = [{
    icon: FaGithub,
    link: "https://github.com/Surya-7666"
}, {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/surya-pj/"
}, {
    icon: IoMdMail,
    link: "mailto:surya1237890@gmail.com"
}, {
    icon: FaWhatsapp,
    link: "https://wa.me/9123517506"
}];

export const whatAmIDoing: whatAmIDoingProps[] = [
    
    {
        title: "Frontend Development",
        Icon: FaReact,
        description: "Building responsive web apps using React, TypeScript, and Tailwind CSS."
    },
    {
        title: "Backend Development",
        Icon: FaServer,
        description: "Developing secure APIs and scalable server-side applications efficiently."
    },
    {
        title: "Full Stack Projects",
        Icon: FaCode,
        description: "Building complete web applications with frontend and backend technologies."
    }
    
]

export const AboutMeDescription: string = "Passionate Full Stack Developer with strong expertise in MERN stack development, focused on building scalable, responsive, and user-centric web applications. Skilled in creating modern UI experiences, clean design, and performance-driven development while continuously exploring new technologies and real-world problem solving.";


export const allSkills: AllSkillData[] = [
    {
        title: "Skills",
        data: [
            {
                title: "HTML",
                Icon: FaHtml5,
                options: {
                    color: "#E34F26",
                    size: 35
                }
            },
            {
                title: "CSS",
                Icon: FaCss3Alt,
                options: {
                    color: "#1572B6",
                    size: 35
                }
            },
            {
                title: "JavaScript",
                Icon: SiJavascript,
                options: {
                    color: "#F7DF1E",
                    size: 35
                }
            },
            {
                title: "TypeScript",
                Icon: SiTypescript,
                options: {
                    color: "#3178C6",
                    size: 35
                }
            },
            {
                title: "React.js",
                Icon: FaReact,
                options: {
                    color: "#61DAFB",
                    size: 35
                }
            },
            {
                title: "Next.js",
                Icon: SiNextdotjs,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            {
                title: "React Router",
                Icon: SiReactrouter,
                options: {
                    color: "#CA4245",
                    size: 35
                }
            },
            {
                title: "Redux",
                Icon: SiRedux,
                options: {
                    color: "#764ABC",
                    size: 35
                }
            },
            
            {
                title: "Tailwind CSS",
                Icon: SiTailwindcss,
                options: {
                    color: "#06B6D4",
                    size: 35
                }
            },
            {
                title: "Bootstrap",
                Icon: FaBootstrap,
                options: {
                    color: "#7952B3",
                    size: 35
                }
            },
            {
                title: "GSAP",
                Icon: SiGsap,
                options: {
                    color: "#88CE02",
                    size: 35
                }
            },
            {
                title: "ScrollTrigger",
                Icon: SiGreensock,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            
            
            {
                title: "Node.js",
                Icon: FaNodeJs,
                options: {
                    color: "#339933",
                    size: 35
                }
            },
            {
                title: "Express.js",
                Icon: SiExpress,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            {
                title: "MongoDB",
                Icon: SiMongodb,
                options: {
                    color: "#47A248",
                    size: 35
                }
            },
            {
                title: "REST API",
                Icon: TbApi,
                options: {
                    color: "#8B5CF6",
                    size: 35
                }
            },
            {
                title: "JWT Auth",
                Icon: SiJsonwebtokens,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            
            {
                title: "C++",
                Icon: SiCplusplus,
                options: {
                    color: "#00599C",
                    size: 35
                }
            }
        ]
    },

    {
        title: "Technology",
        data: [
            {
                title: "Axios",
                Icon: SiAxios,
                options: {
                    color: "#5A29E4",
                    size: 35
                }
            },
            
            {
                title: "Cloudinary",
                Icon: SiCloudinary,
                options: {
                    color: "#3448C5",
                    size: 35
                }
            },
        
        
            {
                title: "Cookie Parser",
                Icon: TbCookie,
                options: {
                    color: "#D97706",
                    size: 35
                }
            },
            {
                title: "CORS",
                Icon: TbWorld,
                options: {
                    color: "#3B82F6",
                    size: 35
                }
            },
            {
                title: "React Hot Toast",
                Icon: SiReact,
                options: {
                    color: "#61DAFB",
                    size: 35
                }
            },
            {
                title: "Nodemailer",
                Icon: MdEmail,
                options: {
                    color: "#30B980",
                    size: 35
                }
            },
            {
                title: "EmailJS",
                Icon: MdEmail,
                options: {
                    color: "#FF8434",
                    size: 35
                }
            },
            {
                title: "Twilio",
                Icon: SiTwilio,
                options: {
                    color: "#F22F46",
                    size: 35
                }
            }
        ]
    },

    {
        title: "Tools",
        data: [
            {
                title: "VS Code",
                Icon: VscVscode,
                options: {
                    color: "#007ACC",
                    size: 35
                }
            },
            {
                title: "Git",
                Icon: SiGit,
                options: {
                    color: "#F05032",
                    size: 35
                }
            },
            {
                title: "GitHub",
                Icon: SiGithub,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            {
                title: "Postman",
                Icon: SiPostman,
                options: {
                    color: "#FF6C37",
                    size: 35
                }
            },
            {
                title: "MongoDB Compass",
                Icon: SiMongodb,
                options: {
                    color: "#47A248",
                    size: 35
                }
            },
            {
                title: "NPM",
                Icon: SiNpm,
                options: {
                    color: "#CB3837",
                    size: 35
                }
            },
            {
                title: "Vite",
                Icon: SiVite,
                options: {
                    color: "#646CFF",
                    size: 35
                }
            },
            {
                title: "ESLint",
                Icon: SiEslint,
                options: {
                    color: "#4B32C3",
                    size: 35
                }
            },
            {
                title: "Nodemon",
                Icon: SiNodemon,
                options: {
                    color: "#76D04B",
                    size: 35
                }
            },
            {
                title: "Chrome DevTools",
                Icon: SiGooglechrome,
                options: {
                    color: "#4285F4",
                    size: 35
                }
            },
            {
                title: "Vercel",
                Icon: SiVercel,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            
            {
                title: "Render",
                Icon: SiRender,
                options: {
                    color: "#000000",
                    size: 35
                }
            }
        ]
    }
];

export const projectsData: ProjectCardProps[] = [

    {
    title: "Swingo",
    slug: "Swingo",
    github: "https://apps.microsoft.com/detail/9NRCMH42WMVR?hl=en-us&gl=US&ocid=pdpshare",
    live: "https://apps.microsoft.com/detail/9NRCMH42WMVR?hl=en-us&gl=US&ocid=pdpshare",
    description:
        "A physics-driven Windows desktop companion that lets users interact with a hanging virtual charm through realistic rope movement, customizable charms, gesture-based actions, and a transparent always-on-top desktop experience.",
    status: "LIVE",
    image: Swingo,

    techStack: [
        "React.js",
        "JavaScript",
        "Electron.js",
        "Vite",
        "Tailwind CSS",
        "HTML5 Canvas",
        "Electron IPC",
        "Windows API"
    ],

    productDetail: {
        description: [
            "Swingo is an interactive Windows desktop companion designed around a hanging virtual charm that users can pull, drag, and swing directly on their desktop.",
            "The application combines a React-based settings interface with an Electron desktop companion window to create a lightweight and interactive desktop experience.",
            "Users can personalize their companion by selecting different charms, uploading custom charm images, choosing rope styles, and configuring interaction settings.",
            "Swingo uses a custom JavaScript physics system to simulate gravity, rope movement, damping, momentum, and charm interaction for a dynamic swinging experience.",
            "The application also integrates Windows system actions that can be triggered through configured charm interactions.",
            "The project focuses on desktop application development, physics-based animation, transparent Electron windows, native Windows integration, and customizable user experiences."
        ],

        techStack: [
            {
                title: "Frontend",
                data: [
                    "React.js",
                    "JavaScript",
                    "Tailwind CSS",
                    "Vite",
                    "HTML5 Canvas",
                    "Lucide React"
                ]
            },

            {
                title: "Desktop",
                data: [
                    "Electron.js",
                    "Electron IPC",
                    "BrowserWindow",
                    "Transparent Window",
                    "Always-On-Top Window",
                    "Windows"
                ]
            },

            {
                title: "Physics & Animation",
                data: [
                    "JavaScript Physics",
                    "Verlet Integration",
                    "Rope Physics",
                    "Gravity",
                    "Damping",
                    "Canvas 2D Rendering"
                ]
            },

            {
                title: "Customization",
                data: [
                    "Charm Collection",
                    "Custom Image Upload",
                    "Rope Styles",
                    "Live Preview",
                    "Appearance Settings"
                ]
            },

            {
                title: "Tools",
                data: [
                    "Git",
                    "GitHub",
                    "VS Code",
                    "NPM",
                    "Electron Builder",
                    "Windows AppX Packaging"
                ]
            }
        ],

        detail: [
            {
                title: "Key Features",
                data: [
                    {
                        title: "Interactive Desktop Companion",
                        description:
                            "Created a transparent and always-on-top desktop companion that displays a hanging virtual charm and allows users to interact with it directly on the Windows desktop."
                    },

                    {
                        title: "Physics-Driven Charm",
                        description:
                            "Implemented custom JavaScript physics to simulate gravity, movement, damping, momentum, and rope behavior so the charm responds naturally to user interaction."
                    },

                    {
                        title: "Custom Charm Collection",
                        description:
                            "Built a charm collection system that allows users to select different predefined charms and personalize their desktop companion."
                    },

                    {
                        title: "Custom Charm Upload",
                        description:
                            "Added support for uploading custom charm images so users can use their own characters, memes, emojis, symbols, and other artwork."
                    },

                    {
                        title: "Rope Style Customization",
                        description:
                            "Implemented multiple rope and thread styles that allow users to customize the visual appearance of the hanging companion."
                    },

                    {
                        title: "Gesture-Based Windows Actions",
                        description:
                            "Integrated configurable Windows actions that can be triggered through interactions with the hanging charm."
                    },

                    {
                        title: "Live Settings Synchronization",
                        description:
                            "Implemented Electron IPC communication to synchronize charm appearance and configuration changes between the React settings interface and the desktop companion."
                    },

                    {
                        title: "Transparent Desktop Overlay",
                        description:
                            "Created a frameless transparent Electron window that allows the charm and rope to appear naturally over the Windows desktop without displaying a traditional application window."
                    },

                    {
                        title: "Charm Visibility Control",
                        description:
                            "Added a simple settings control that allows users to show or hide the Swingo desktop companion whenever required."
                    },

                    {
                        title: "Windows Application Packaging",
                        description:
                            "Configured Electron Builder to package Swingo as Windows desktop distributions including installer, portable, and AppX packages."
                    }
                ]
            },

            {
                title: "Challenges",
                data: [
                    {
                        title: "Realistic Rope Physics",
                        description:
                            "Developing natural rope movement required handling gravity, rope constraints, damping, drag movement, release momentum, and continuous physics updates."
                    },

                    {
                        title: "Transparent Electron Window",
                        description:
                            "Creating a transparent desktop window while maintaining reliable rendering and interaction behavior required careful Electron BrowserWindow configuration."
                    },

                    {
                        title: "Mouse Interaction & Click-Through",
                        description:
                            "Managing mouse interaction inside a transparent overlay while allowing normal interaction with other desktop applications required dynamic mouse event handling."
                    },

                    {
                        title: "Multi-Window Communication",
                        description:
                            "Synchronizing settings between the main React interface and the separate desktop companion required communication between Electron processes using IPC."
                    },

                    {
                        title: "Smooth Canvas Rendering",
                        description:
                            "Maintaining smooth rope and charm animation required efficient Canvas rendering and continuous physics updates without unnecessarily affecting desktop performance."
                    },

                    {
                        title: "Windows System Integration",
                        description:
                            "Integrating desktop interactions and Windows shortcut actions required coordination between the Electron main process, renderer process, and Windows environment."
                    },

                    {
                        title: "Microsoft Store Packaging",
                        description:
                            "Preparing Swingo for Microsoft Store distribution required configuring Electron Builder, Windows AppX packaging, application identity, icons, and package assets."
                    }
                ]
            }
        ]
    }
},
     {
        title: "SR Billing",
        slug: "SR Billing",
        github: "https://github.com/Surya-7666/sr-billing",
        live: "https://billzy-e1xp.onrender.com/",
        description:
            "A Windows desktop billing application designed for small businesses to manage products, billing, receipts, sales history, reports, and shop settings through a simple offline-first system.",
        status: "LIVE",
        image: SRBilling,

        techStack: [
            "React.js",
            "Node.js",
            "Express.js",
            "Electron.js",
            "SQLite",
            "JWT Authentication",
            "Tailwind CSS",
            "Vite"
        ],

        productDetail: {
            description: [
                "SR Billing is a Windows desktop billing application built to simplify daily billing operations for small shops and businesses.",
                "The application combines a React frontend with a Node.js and Express backend, packaged as a Windows desktop application using Electron.js.",
                "It uses a local SQLite database so the application can continue working offline after installation, without depending on an internet connection for core billing operations.",
                "The system supports role-based access with Admin and Staff users, allowing shop owners to manage products, staff, billing history, reports, and shop settings.",
                "The primary objective of SR Billing is to provide a simple, reliable, and affordable billing solution for small businesses without requiring a monthly subscription."
            ],

            techStack: [
                {
                    title: "Frontend",
                    data: [
                        "React.js",
                        "Tailwind CSS",
                        "Vite",
                        "Responsive UI"
                    ]
                },

                {
                    title: "Backend",
                    data: [
                        "Node.js",
                        "Express.js",
                        "REST API",
                        "JWT Authentication"
                    ]
                },

                {
                    title: "Database",
                    data: [
                        "SQLite",
                        "better-sqlite3"
                    ]
                },

                {
                    title: "Desktop",
                    data: [
                        "Electron.js",
                        "Windows"
                    ]
                },

                {
                    title: "Tools",
                    data: [
                        "Git",
                        "GitHub",
                        "VS Code",
                        "Postman",
                        "NPM"
                    ]
                }
            ],

            detail: [
                {
                    title: "Key Features",
                    data: [
                        {
                            title: "Offline Billing",
                            description:
                                "Built as a Windows desktop application with a local SQLite database, allowing core billing operations to work without an internet connection."
                        },
                        {
                            title: "Product Management",
                            description:
                                "Allows administrators to create, update, and manage products used during the billing process."
                        },
                        {
                            title: "Fast Billing Workflow",
                            description:
                                "Designed a simple billing interface for quickly selecting products, entering customer details, applying discounts and taxes, and completing payments."
                        },
                        {
                            title: "Receipt Generation",
                            description:
                                "Provides receipt preview, printing, and PDF export functionality with configurable shop information."
                        },
                        {
                            title: "Sales & Billing History",
                            description:
                                "Maintains billing records and provides access to previous transactions for business tracking."
                        },
                        {
                            title: "Business Reports",
                            description:
                                "Provides sales and business reports to help shop owners understand their billing activity."
                        },
                        {
                            title: "Role-Based Access",
                            description:
                                "Implemented separate Admin and Staff access levels so shop owners can control billing and management operations."
                        },
                        {
                            title: "Payment Methods",
                            description:
                                "Supports Cash, UPI, and Card payment methods during billing."
                        },
                        {
                            title: "Shop Customization",
                            description:
                                "Allows shop owners to configure shop name, tagline, contact details, address, GST information, and receipt branding."
                        }
                    ]
                },

                {
                    title: "Challenges",
                    data: [
                        {
                            title: "Electron Application Packaging",
                            description:
                                "Packaging the React and Node.js application into a reliable Windows desktop executable required careful handling of Electron processes, backend startup, and production assets."
                        },
                        {
                            title: "Offline Database Architecture",
                            description:
                                "Designed a local SQLite database architecture so each shop can maintain its billing data independently without relying on a remote database."
                        },
                        {
                            title: "Frontend-Backend Communication",
                            description:
                                "Integrated the React frontend with the local Express backend while maintaining reliable API communication inside the Electron environment."
                        },
                        {
                            title: "Role-Based Security",
                            description:
                                "Implemented JWT authentication and role-based middleware to separate Admin and Staff functionality."
                        },
                        {
                            title: "Receipt & Printing Workflow",
                            description:
                                "Built a complete workflow from billing and payment confirmation to receipt preview, PDF export, and printing."
                        }
                    ]
                }
            ]
        }
    },

    {
    title: "React Virtual UI",
    slug: "React Virtual UI",
    github: "https://github.com/Surya-7666/React-Virtual-UI",
    live: "https://react-virtual-ui-main.onrender.com",
    description:
        "An AI-powered React UI component library that enables developers to generate, preview, publish, and reuse modern React components instantly. It features AI component generation, live preview, Google Authentication, npm package publishing, Razorpay integration, and an intuitive developer experience.",
    status: "LIVE",
    image: React,

    techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Authentication",
        "JWT Authentication",
        "OpenRouter AI",
        "Razorpay",
        "Tailwind CSS",
        "npm",
        "Vite"
    ],

    productDetail: {
        description: [
            "React Virtual UI is an AI-powered React component library designed to help developers build modern user interfaces faster by generating production-ready React components using artificial intelligence.",
            "The platform provides an interactive live preview, one-click JSX copy, reusable component management, secure authentication, and seamless component publishing for an efficient developer workflow.",
            "It integrates OpenRouter AI to generate React components from natural language prompts, Firebase Google Authentication for secure sign-in, Razorpay for purchasing credits, and MongoDB for storing users and generated components.",
            "The application follows a modern full-stack architecture using React, Node.js, Express.js, MongoDB, and REST APIs to ensure scalability, maintainability, and high performance.",
            "The primary objective of the project is to simplify UI development by allowing developers to instantly generate, preview, customize, publish, and integrate reusable React components into their own projects."
        ],

        techStack: [
            {
                title: "Frontend",
                data: [
                    "React.js",
                    "Vite",
                    "Tailwind CSS",
                    "Redux Toolkit",
                    "Axios",
                    "React Live",
                    "Firebase Authentication"
                ]
            },
            {
                title: "Backend",
                data: [
                    "Node.js",
                    "Express.js",
                    "JWT Authentication",
                    "OpenRouter AI",
                    "REST API",
                    "Razorpay"
                ]
            },
            {
                title: "Database",
                data: [
                    "MongoDB",
                    "Mongoose"
                ]
            },
            {
                title: "Tools",
                data: [
                    "Git",
                    "GitHub",
                    "Render",
                    "Postman",
                    "VS Code",
                    "npm"
                ]
            }
        ],

        detail: [
            {
                title: "Key Features",
                data: [
                    {
                        title: "AI-Powered Component Generation",
                        description: "Generate production-ready React UI components using OpenRouter AI by simply describing the desired component in natural language."
                    },
                    {
                        title: "Live Component Preview",
                        description: "Instantly preview generated React components inside the browser before copying or publishing them."
                    },
                    {
                        title: "One-Click JSX Copy",
                        description: "Copy clean and reusable JSX code with a single click for immediate integration into any React project."
                    },
                    {
                        title: "Google Authentication",
                        description: "Implemented secure Google Sign-In using Firebase Authentication along with JWT-based session management."
                    },
                    {
                        title: "Component Publishing",
                        description: "Allows administrators to publish reusable React components as npm packages, making them easily installable in external projects."
                    },
                    {
                        title: "Credit-Based AI Usage",
                        description: "Integrated Razorpay payment gateway to allow users to purchase credits for generating AI-powered React components."
                    },
                    {
                        title: "Responsive Developer Dashboard",
                        description: "Designed a modern responsive interface using React and Tailwind CSS for seamless usage across desktop and mobile devices."
                    }
                ]
            },

            {
                title: "Challenges",
                data: [
                    {
                        title: "AI Response Handling",
                        description: "Managing AI-generated JSX responses, validating output, and ensuring clean React code required careful prompt engineering and response processing."
                    },
                    {
                        title: "Live JSX Rendering",
                        description: "Building a secure live preview system capable of rendering dynamically generated React components without breaking the application."
                    },
                    {
                        title: "Authentication Across Deployment",
                        description: "Resolved Firebase Authentication, JWT cookie management, CORS, and deployment-related issues between frontend and backend services."
                    },
                    {
                        title: "Reusable Component Publishing",
                        description: "Designed an automated workflow for publishing reusable React components as npm packages while maintaining proper version management."
                    },
                    {
                        title: "Payment Integration",
                        description: "Integrated Razorpay with secure backend payment verification and credit management for AI component generation."
                    }
                ]
            }
        ]
    }
},
    {
        title: "Nexora",
        slug: "Nexora AI",
        github: "https://github.com/Surya-7666/ai",
        live: "https://ai-ten-nu-93.vercel.app/",
        description:
            "A customizable AI-powered chatbot that can be embedded into any website for customer support.Built with modern UI, smooth UX, and real-time AI responses powered by your own knowledge base.",
        status: "LIVE",
        image: Nexora,

        techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "React Query", "Axios"],

        productDetail: {
            description: [
                "Nexora AI Chatbot is a modern AI-powered customer support platform designed to help businesses integrate intelligent chatbot systems into their websites with seamless setup and real-time communication.","The project focuses on scalable chatbot architecture, reusable component systems, responsive UI design, secure configuration handling, and AI-powered customer interaction for modern business applications.","It includes a floating chatbot widget, customizable chatbot configuration, secure environment-based API management, custom knowledge-base support, responsive layouts, and embeddable integration for external websites.","The application follows modern full stack development practices using Next.js, React, MongoDB, Tailwind CSS, Framer Motion, and modular architecture for scalability and maintainability.","Nexora AI Chatbot aims to deliver a plug-and-play AI support experience with modern UI, smooth user interactions, intelligent automation, and production-ready architecture."
            ],

            techStack: [
                {
                    title: "Frontend",
                    data: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "Glassmorphism Design", "Axios"]
                },

                {
                    title: "Backend",
                    data: ["Node.js", "API Integration", "AI Response Handling", "Bcrypt", "Authentication System", "REST API"]
                },

                {
                    title: "Database",
                    data: ["MongoDB", "Mongoose"]
                },

                {
                    title: "Tools",
                    data: ["Git", "GitHub", "Vercel", "Postman", "VS Code"]
                }
            ],

            detail: [
                {
                    title: "AI-Powered Chatbot System",
                    data: [
                        {
                            title: "Authentication & Authorization",
                            description:
                                "Developed a real-time AI chatbot capable of handling intelligent customer conversations using API-based AI response systems and custom knowledge data."
                        },

                        {
                            title: "Floating Chatbot Widget",
                            description:
                                "Built an embeddable floating chatbot interface that can be integrated into any website with responsive behavior and modern UI interactions."
                        },

                        {
                            title: "Custom Knowledge Base Support",
                            description:
                                "Implemented support for business-specific chatbot training and dynamic response generation using custom knowledge configuration."
                        },

                        {
                            title: "Secure Configuration Architecture",
                            description:
                                "Used environment-based secure configuration for API keys, database credentials, and sensitive backend integrations."
                        }
                    ]
                },
                {
                    title: "Challenges",
                    data: [
                        {
                            title: "Real-Time AI Communication",
                            description:
                                "Handling fast AI-generated responses while maintaining smooth user experience and optimized frontend performance required careful API handling."
                        },

                        {
                            title: "Embeddable Widget Integration",
                            description:
                                "Building a chatbot widget that works consistently across different website layouts and screen sizes required flexible responsive architecture."
                        },

                        {
                            title: "State & Form Management",
                            description:
                                "Managing chatbot configuration forms, validation systems, auto-save handling, and dynamic UI state synchronization required proper frontend architecture."
                        }

                        
                    ]
                }
            ]
        }
    },

     {
        title: "Customizable AI Voice Assistant",
        slug: "Nexora AI",
        github: "http://github.com/Surya-7666/AI-Virtual-Assistant",
        live: "https://ai-virtual-assistant-vf7v.onrender.com/signup",
        description:
            "A customizable virtual voice assistant built with the MERN stack, featuring JWT authentication, Cloudinary for avatar uploads, and Gemini API for intelligent AI-powered responses. Users can personalize their assistant with custom names, pics, and interact through voice commands.",
        status: "LIVE",
        image: Ai,

    
techStack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Cloudinary",
    "Gemini API",
    "Web Speech API",
    "Tailwind CSS"
],


        productDetail: {
            description: [
                "Customizable AI Voice Assistant is a modern AI-powered virtual assistant built using the MERN Stack, enabling users to personalize their own intelligent voice assistant with custom names and avatars.", "The project focuses on secure authentication, AI-powered conversations, voice interaction, responsive UI, and seamless customization for an enhanced user experience.", "It features JWT-based authentication, Cloudinary-powered avatar management, Gemini API integration for intelligent responses, speech recognition, and text-to-speech capabilities.", "The application follows modern full-stack development practices using React, Node.js, Express.js, MongoDB, and modular architecture to ensure scalability, maintainability, and performance.", "The primary objective of the project is to provide users with a personalized AI assistant capable of understanding voice commands, generating contextual responses, and delivering a natural conversational experience."
            ],

            techStack: [
                {
                    title: "Frontend", data: [ "React.js", "Tailwind CSS", "Axios", "Responsive UI", "Web Speech API", "Text-to-Speech"]
                },

                { title: "Backend", data: [ "Node.js", "Express.js", "JWT Authentication", "Gemini API", "REST API", "Cloudinary" ] }, { title: "Database", data: [ "MongoDB", "Mongoose" ] }, { title: "Tools", data: [ "Git", "GitHub", "Render", "Postman", "VS Code" ] } ],

            detail: [ { title: "Key Features", data: [ { title: "AI-Powered Voice Assistant", description: "Integrated Google's Gemini API to generate intelligent, contextual, and conversational responses based on user voice commands." }, { title: "Speech Recognition & Text-to-Speech", description: "Implemented browser-based speech recognition and text-to-speech functionality for a completely voice-driven interaction experience." }, { title: "Custom Assistant Personalization", description: "Allows users to personalize their assistant by setting a custom name and uploading an avatar using Cloudinary." }, { title: "Secure User Authentication", description: "Implemented JWT-based authentication with secure login, signup, protected routes, and user-specific assistant customization." }, { title: "Cloudinary Avatar Management", description: "Integrated Cloudinary for secure image uploads, optimized media storage, and efficient avatar management." }, { title: "Responsive Modern UI", description: "Designed a responsive user interface using React and Tailwind CSS to provide a seamless experience across mobile, tablet, and desktop devices." } ] },
            
                { title: "Challenges", data: [ { title: "Voice Recognition Accuracy", description: "Handling speech recognition across different browsers and user accents while maintaining reliable voice input required careful implementation." }, { title: "AI Response Integration", description: "Managing asynchronous Gemini API responses and delivering smooth conversational interactions required efficient API handling." }, { title: "Speech Synchronization", description: "Synchronizing AI-generated responses with text-to-speech output while preventing overlapping speech required additional state management." }, { title: "Secure Media Management", description: "Implementing secure avatar uploads using Cloudinary alongside authenticated user accounts required proper backend validation." }, { title: "Responsive Voice Interface", description: "Designing an intuitive voice assistant interface that remains responsive and accessible across multiple devices required continuous UI refinement." } ] } ] }
    }
]

export const verticalTimelineData: verticalTimelineProps[] = [
    {
        Icon: HiAcademicCap,
        title: "Education",
        card: [
            {
                cardTitle: "Graduation",
                cardSubTitle: "2023 - 2027",
                cardDescription: "Pursuing Bachelor of Engineering in Computer Science and Engineering at PSN College of Engineering and Technology, Tirunelveli, with a strong passion for software development and modern technologies."
            }
        ]
    },

    {   
        Icon: HiBriefcase,
        title: "Experience",
        card: [
            {
                cardTitle: "Internship",
                cardSubTitle: "April 2025 - May 2025   ",
                cardDescription: "Completed a Software Development Internship at Tetron Infotech, where I worked on MERN stack web applications, API integration, backend connectivity, and responsive UI development."
            }
        ]
    },
    {
        Icon: PiCertificateFill,
        title: "Certificate",
        card: [
            {
                cardTitle: "Full Stack Web Development",
                cardSubTitle: "2024",
                cardDescription: "Completed a Full Stack Web Development certification through Udemy, gaining hands-on experience in building responsive web applications using modern frontend and backend technologies."
            }
            
        ]
    }
]

export const skillsNavBtn: {title: string}[] = [
    {
        title: "All"
    },
    {
        title: "Skills"
    },
    {
        title: "Technology"
    },
    {
        title: "Tools"
    }
]

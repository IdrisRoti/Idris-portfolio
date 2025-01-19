import { BsFlower2 } from "react-icons/bs";
import { RiCopperDiamondFill } from "react-icons/ri";
import { PiDiamondsFourFill } from "react-icons/pi";
import { MdSportsBaseball } from "react-icons/md";

export const navlinks = [
    {
        id: 1,
        label: "who",
        subLabel: "my profile",
        href: "#who"
    },
    {
        id: 2,
        label: "services",
        subLabel: "what i do",
        href: "#services"
    },
    {
        id: 3,
        label: "portfolio",
        subLabel: "past projects",
        href: "#portfolio"
    },
    {
        id: 4,
        label: "availability",
        subLabel: "open for work",
        href: "#availabilty"
    },
]

export const experience = [
    {
        id: 1,
        icon: BsFlower2,
        label: "Projects completed",
        amount: "10+"
    },
    {
        id: 2,
        icon: RiCopperDiamondFill,
        label: "Technologies used",
        amount: "10+"
    },
    {
        id: 3,
        icon: PiDiamondsFourFill,
        label: "Happy Customers",
        amount: "Several"
    },
    {
        id: 4,
        icon: MdSportsBaseball,
        label: "Years of Experience",
        amount: "2+"
    },
]

export const selectedWorksArr = [
    {
        id: 1,
        name: "Hifashion",
        type: "Ecommerce Fashion store with product and order management dashboard",
        date: "Aug 2024",
        images: ["/hifashion/image1.png", "/hifashion/image2.png", "/hifashion/image3.png", "/hifashion/image4.png", "/hifashion/image5.png", "/hifashion/image6.png", "/hifashion/image7.png", "/hifashion/image8.png"],
        features: ["User Authentication and Authorization", "Admin Dashboard", "Product Management (Add, Edit, Schedule, Delete)", "Shopping Cart (Add, Update, Remove)", "Checkout Process","Product rating and comment"],
        technologies: ["ReactJs", "NextJs", "Supabase", "Typescript", "Tailwind CSS", "Uploadthing", "ShadCn", "Framer motion."],
        github: "https://github.com/IdrisRoti/hifashion",
        liveurl: "https://hifashion.vercel.app/"
    },
    {
        id: 2,
        name: "Hommez Realty",
        type: "Real estate Property listing",
        date: "Nov 2024",
        images: ["/hommez/image1.png", "/hommez/image2.png", "/hommez/image3.png", "/hommez/image4.png", "/hommez/image5.png", "/hommez/image6.png", "/hommez/image7.png", "/hommez/image8.png", "/hommez/image9.png", "/hommez/image10.png"],
        features: ["Authentication screens", "Advance filtering system", "Contact form", "New List upload form", "List image box"],
        technologies: ["ReactJs", "NextJs", "Typescript", "Tailwind CSS", "cloudinary", "Framer motion."],
        github: "https://github.com/IdrisRoti/hommez",
        liveurl: "https://hommez.vercel.app/"
    },
    {
        id: 3,
        name: "Fortura Blog",
        type: "Blog website",
        date: "Feb 2024",
        images: ["/fortura/image1.png", "/fortura/image2.png", "/fortura/image3.png", "/fortura/image4.png"],
        features: ["Google Authentication", "create post", "Rich text editor", "Comment section"],
        technologies: ["ReactJs", "NextJs", "Typescript", "Tailwind CSS", "cloudinary", "prisma", "next-auth"],
        github: "https://github.com/IdrisRoti/fortura",
        liveurl: "https://fortura.vercel.app/"
    },
    {
        id: 4,
        name: "Pay4me app",
        type: "Fintech app landing page redesign",
        date: "Jan 2025",
        images: ["/pay4me/image1.png", "/pay4me/image2.png", "/pay4me/image3.png", "/pay4me/image4.png", "/pay4me/image5.png"],
        features: ["Logo ticker"],
        technologies: ["ReactJs", "NextJs", "Typescript", "Tailwind CSS", "Framer motion"],
        github: "https://github.com/IdrisRoti/pay4me",
        liveurl: "https://pay4me-chi.vercel.app/"
    },
    {
        id: 5,
        name: "Herodesigns",
        type: "Collection of hero section designs with custom built components",
        date: "Dec 2024",
        images: ["/herodesigns/image1.png", "/herodesigns/image2.png", "/herodesigns/image3.png", "/herodesigns/image4.png", "/herodesigns/image5.png"],
        features: ["Logo tickers", "Modals", "Dropdowns", "Drawers", "Light mode", "Dark mode", "Web animations"],
        technologies: ["ReactJs", "NextJs", "Typescript", "Tailwind CSS", "Framer motion"],
        github: "https://github.com/IdrisRoti/hero-designs",
        liveurl: "https://herodesigns.vercel.app/"
    },
    {
        id: 6,
        name: "Watch hour movie app",
        type: "Collection of latest and trending movies",
        date: "2023",
        images: ["/watchhour/image1.png", "/watchhour/image2.png", "/watchhour/image3.png", "/watchhour/image4.png", "/watchhour/image5.png"],
        features: ["Latest trending movies", "Highest rated movies", "Movie Search"],
        technologies: ["ReactJs", "Javascript", "Sass", "TMDB movie api"],
        github: "https://github.com/IdrisRoti/watch-hour-movie-app",
        liveurl: "https://watch-hour-movie-app.vercel.app/"
    },
]

export const testimonialsArr = [
    {
        id: 1,
        name: "James Johnson",
        role: "Team lead",
        org: "Unitect Inc.",
        image: "/portfolio/photo1.png",
        testimony: "She has a rare combination of creativity and professionalism. They listen closely and deliver beyond what’s asked."
    },
    {
        id: 2,
        name: "Antonia Tommason",
        role: "Website developer",
        org: "Unitect Inc.",
        image: "/portfolio/photo2.png",
        testimony: "Working with Sandra was a seamless experience. They were open to feedback, communicated clearly, and always met deadlines."
    },
    {
        id: 3,
        name: "James Johnson",
        role: "Founder",
        org: "Unitect Inc.",
        image: "/portfolio/photo3.png",
        testimony: "Her work had a direct impact on our product's success. The new design increased conversions by 35%!"
    },
    {
        id: 4,
        name: "Maria Mariason",
        role: "Product Manager",
        org: "Unitect Inc.",
        image: "/portfolio/photo6.png",
        testimony: "Her redesign elevated our product to a whole new level, setting a benchmark for quality in our industry"
    },
    {
        id: 5,
        name: "Julia McCarthy",
        role: "Website developer",
        org: "Unitect Inc.",
        image: "/portfolio/photo8.png",
        testimony: "Thanks to her designs, we received overwhelmingly positive feedback from our users and stakeholders alike."
    },
]
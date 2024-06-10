import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
} from 'react-icons/rx';

import Buadmin from '../../../public/images/carousel/buadmin.jpg';
import Bugate from '../../../public/images/carousel/bugate.jpg';
import Bb from '../../../public/images/features/bb.jpg';
import Bu from '../../../public/images/features/bu.jpg';
import Bulife from '../../../public/images/features/life.jpg';

export const ServiceData = [
    {
        icon: RxAccessibility,
        title: "Bursaries",
        content:"Bugema University gives away over 100 bursaries for new May - Intake students.",
        backgroundImage: "/images/features/life.jpg",
        cardlink: "https://www.bugemauniv.ac.ug/bursaries",
    },
    {
        icon: RxPencil2,
        title: "Evangelism",
        content:"Theology department sets off over 50 pastors for an evangelistic campaign in Dodoma.",
        backgroundImage: "/images/carousel/buadmin.jpg",
        cardlink: "https://www.bugemauniv.ac.ug/evangelism",
    },
    {
        icon: RxDesktop,
        title: "Facilities",
        content:"Partners donate 200 desktop computers to facilitate IT students in the computer labs.",
        backgroundImage: "/images/features/bb.jpg",
        cardlink: "https://www.bugemauniv.ac.ug/facilities",
    },
    {
        icon: RxReader,
        title: "Admissions",
        content:"Admissions for August Intake are currently ongoing at all campuses of Bugema University.",
        backgroundImage: "/images/carousel/bugate.jpg",
        cardlink: "https://www.bugemauniv.ac.ug/admissions",
    },
    {
        icon: RxCrop,
        title: "Baptism",
        content:"Over 30 students baptised into the Seventh Day Adventist Church after evangelistic campaign.",
        backgroundImage: "/images/features/bu.jpg",
        cardlink: "https://www.bugemauniv.ac.ug/baptsim",
    },
];
import Project1image1 from './img/Developers/Project1/image1.jpg';
import Project1image2 from './img/Developers/Project1/image2.jpg';
import Project1image3 from './img/Developers/Project1/image3.jpg';

import Project2image1 from './img/Developers/Project2/image1.jpg';
import Project2image2 from './img/Developers/Project2/image2.jpg';
import Project2image3 from './img/Developers/Project2/image3.jpg';

import Project3image1 from './img/Developers/Project3/image1.jpg';
import Project3image2 from './img/Developers/Project3/image2.jpg';

import Project4image1 from './img/Developers/Project4/image1.jpg';

const project1 = [
    Project1image1, Project1image2, Project1image3
]

const project2 = [
    Project2image1, Project2image2, Project2image3
]

const project3 = [
  Project3image1, Project3image2
]

const project4 = [
    Project4image1
]
const DevelopersData = [
    {
        id: 1,
        img: Project1image1,
        images: project1,
        title: 'Apartamenty Strumyk1',
        color: 'orange',
        cols: 2,
        hint: 'Status: building',

        investor: 'HK Group sp. z o.o. sp.k.',
        localization: 'Termin zakończenia : wrzesień 2021',
        firma: 'Brogan Group Sp. z o.o.',

        notename: [{

            name: 'STRUMYK 1 to kameralny czterokondygnacyjny apartamentowiec z trzynastoma nowoczesnymi mieszkaniami, wyposażony w windę pomieszczenie do przechowywania rowerów oraz parkingiem na poziomie "0".',
            url: 'https://www.strumyk1.pl',
            PUM: '800 m2',
            PC: ''
        }]

    },
    {
        id: 2,
        img: Project2image1,
        images: project2,
        title: 'Apartamenty Poleska 5',
        color: 'green',
        cols: 2,
        hint: 'Status: building',

        investor: 'HK Group sp. z o.o. sp.k.',
        localization: 'Już w sprzedaży !',
        firma: 'Brogan Group Sp. z o.o.',

        notename: [{
            name: 'Poleska 5 to kameralny, pięciokondygnacyjny budynek mieszkalny wraz z garażem podziemnym. ' +
                'Na 27 mieszkań o zróżnicowanym metrażu przypadają trzy windy w trzech klatkach.',
            PUM: '1.670 m2',
            PC: ''
        }]

    },
    {
        id: 3,
        img: Project3image1,
        images: project3,
        title: 'Dolnomłyńska Loft',
        color: 'orange',
        cols: 2,
        hint: 'Status: building',

        investor: 'LOFT',
        localization: '',
        firma: 'Brogan Group Sp. z o.o.',

        notename: [{
            name: '',
            PUM: '',
            PC: ''
        }]

    },
    {
        id: 4,
        img: Project4image1,
        images: project4,
        title: 'LOFT 04',
        color: 'orange',
        cols: 2,
        hint: '',

        investor: 'LOFT',
        localization: '',
        firma: 'Brogan Group Sp. z o.o.',

        notename: [{
            name: '',
            PUM: '',
            PC: ''
        }]

    }
]


export default DevelopersData;

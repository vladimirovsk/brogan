import Project1image1 from './img/Realizaciya/Project1/image1.jpg';
import Project1image2 from './img/Realizaciya/Project1/image2.jpg';
import Project1image5 from './img/Realizaciya/Project1/image5.jpg';
import Project1image6 from './img/Realizaciya/Project1/image6.jpg';
import Project1image7 from './img/Realizaciya/Project1/image7.jpg';
import Project1image8 from './img/Realizaciya/Project1/image8.jpg';
import Project1image9 from './img/Realizaciya/Project1/image9.jpg';
import Project1image10 from './img/Realizaciya/Project1/image10.jpg';
import Project1image11 from './img/Realizaciya/Project1/image11.jpg';
import Project1image12 from './img/Realizaciya/Project1/image12.jpg';
import Project1image13 from './img/Realizaciya/Project1/image13.jpg';
import Project1image14 from './img/Realizaciya/Project1/image14.jpg';
import Project1image15 from './img/Realizaciya/Project1/image15.jpg';
import Project1image16 from './img/Realizaciya/Project1/image16.jpg';


import Project3image1 from './img/Realizaciya/Project3/Image1.jpg';
import Project3image2 from './img/Realizaciya/Project3/Image2.jpg';
import Project3image3 from './img/Realizaciya/Project3/Image3.jpg';
import Project3image4 from './img/Realizaciya/Project3/Image4.jpg';
import Project3image5 from './img/Realizaciya/Project3/Image5.jpg';
import Project3image6 from './img/Realizaciya/Project3/Image6.jpg';
import Project3image7 from './img/Realizaciya/Project3/Image7.jpg';
import Project3image8 from './img/Realizaciya/Project3/Image8.jpg';
import Project3image9 from './img/Realizaciya/Project3/Image9.jpg';
import Project3image10 from './img/Realizaciya/Project3/Image10.jpg';
import Project3image11 from './img/Realizaciya/Project3/Image11.jpg';
import Project3image12 from './img/Realizaciya/Project3/Image12.jpg';
import Project3image13 from './img/Realizaciya/Project3/Image13.jpg';



const project1 = [
    Project1image1, Project1image2, Project1image5,
    Project1image6, Project1image7, Project1image8, Project1image9,
    Project1image10, Project1image11, Project1image12, Project1image13,
    Project1image14, Project1image15, Project1image16

]

const project3 = [
    Project3image1, Project3image2, Project3image3,
    Project3image4, Project3image5, Project3image6,
    Project3image7, Project3image8, Project3image9,
    Project3image10, Project3image11, Project3image12,
    Project3image13
]


const RealizaciaData = [
    {
        id: 1, //Код
        img: Project1image7, //Код картинки
        images: project1, //Массив картинок проекта
        title: 'Osiedle SenTOTU ul. Górka Narodowa Kraków, budynki B1.1, B1.2', //Тител
        color: 'orange', //Цвет домика
        cols: 2, // кличество колонок в строке для картинки - отключено
        hint: '', //Подсказка на домике
        investor: 'EKOPARK', //Инвестор
        localization: 'Osiedle SenTOTU ul. Górka Narodowa Kraków, budynki B1.1, B1.2', //Адрес
        firma: 'Brogan Group Sp. z o.o.',     //
        notename: [
            {
                name: 'Bud.B2',
                PUM: '5.479 m2',
                PC: '11.161 m2'
            },
            {
                name: 'Bud.B3',
                PUM: '4.704 m2',
                PC: '9.790 m2'
            }

        ]
    },

    {
        id: 3,
        img: Project3image1,
        images: project3,
        title: 'Apartamenty u Przybyszewskiego',
        color: 'orange',
        cols: 2,
        hint: 'Status: ',

        investor: 'EKOPARK',
        localization: 'Apartamenty u Przybyszewskiego',
        firma: 'Brogan Group Sp. z o.o. ',
        notename: [
            {
                name: 'Przybyszewskiego etap III',
                PUM: '7.888 m2',
            }
        ]

    },
]


export default RealizaciaData;
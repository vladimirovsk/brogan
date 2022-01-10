import Project1image1 from './img/Realizaciya/Project1/image1.jpg';
import Project1image2 from './img/Realizaciya/Project1/image2.jpg';
import Project1image3 from './img/Realizaciya/Project1/image3.jpg';
import Project1image4 from './img/Realizaciya/Project1/image4.jpg';
import Project1image5 from './img/Realizaciya/Project1/image5.jpg';
import Project1image6 from './img/Realizaciya/Project1/image6.jpg';

import Project3image1 from './img/Realizaciya/Project3/Image1.jpg';
import Project3image2 from './img/Realizaciya/Project3/Image2.jpg';
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
  Project1image1, Project1image2, Project1image3, 
  Project1image4, Project1image5, Project1image6
]

const project3 = [
  Project3image1, Project3image2, Project3image5, 
  Project3image6,  Project3image7
]


const RealizaciaData = [
  {
    id: 1, //Код
    img: Project1image2, //Код картинки
    images: project1, //Массив картинок проекта
    title: 'Apartamenty u Przybyszewskiego', //Тител
    color: 'orange', //Цвет домика
    cols: 2, // кличество колонок в строке для картинки - отключено
    hint: 'Status: W realizacji', //Подсказка на домике
    investor: 'EKOPARK', //Инвестор
    localization: 'Apartamenty u Przybyszewskiego ', //Адрес
    firma: 'Brogan Group Sp. z o.o.',     //
    notename :[{
      name: 'Przybyszewskiego Etap II',
      PC: '6.550 m2',
      PUM: '2.754 m2'
    }]
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
        notename :[
            {
                name: 'Przybyszewskiego etap III',
                PUM: '7.888 m2',
            }
        ]

    },
]


export default RealizaciaData;
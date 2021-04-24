import Project1image1 from './img/Realizaciya/Project1/image1.jpg';
import Project1image2 from './img/Realizaciya/Project1/image2.jpg';
import Project1image3 from './img/Realizaciya/Project1/image3.jpg';
import Project1image4 from './img/Realizaciya/Project1/image4.jpg';
import Project1image5 from './img/Realizaciya/Project1/image5.jpg';
import Project1image6 from './img/Realizaciya/Project1/image6.jpg';

import Project2image1 from './img/Realizaciya/Project2/image1.jpg';
import Project2image2 from './img/Realizaciya/Project2/image2.jpg';
import Project2image3 from './img/Realizaciya/Project2/image3.jpg';
import Project2image4 from './img/Realizaciya/Project2/image4.jpg';
import Project2image5 from './img/Realizaciya/Project2/image5.jpg';
import Project2image6 from './img/Realizaciya/Project2/image6.jpg';
import Project2image7 from './img/Realizaciya/Project2/image7.jpg';
import Project2image8 from './img/Realizaciya/Project2/image8.jpg';
import Project2image9 from './img/Realizaciya/Project2/image9.jpg';

import Project3image1 from './img/Realizaciya/Project3/image1.jpg';
import Project3image2 from './img/Realizaciya/Project3/image2.jpg';
import Project3image5 from './img/Realizaciya/Project3/image5.jpg';
import Project3image6 from './img/Realizaciya/Project3/image6.jpg';
import Project3image7 from './img/Realizaciya/Project3/image7.jpg';


const project1 = [
  Project1image1, Project1image2, Project1image3, 
  Project1image4, Project1image5, Project1image6
]
const project2 = [
  Project2image1, Project2image2, Project2image3, 
  Project2image4, Project2image5, Project2image6, 
  Project2image7, Project2image8, Project2image9 
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
    id: 2,
    img: Project2image1,
    images: project2,
    title: 'Osiedla SLOW CITY ul. Piaszczysta Kraków',
    color: 'orange',
    cols: 2,
    hint: 'Status: W realizacji',
    investor: 'EKOPARK',
    localization: 'Osiedla SLOW CITY ul. Piaszczysta Kraków',
    firma: 'Brogan Group Sp. z o.o.',   
    notename :[
      {
      name: 'liczba kondygnacji podziemnych 1',
      PC: '13.634 m2',
      PUM: '7.434 m2'
    },
    {
      name: 'liczba kondygnacji nadziemnych 4',
      PC: '',
      PUM: ''
    }
  ] 

   },

   {
    id: 3,
    img: Project3image1,
    images: project3,
    title: 'Osiedla SenTOTU ul. Górka Narodowa Kraków, budynki B1.1, B1.2',
    color: 'orange',
    cols: 2,
    hint: 'Status: W realizacji',
  
    investor: 'SENTO',
    localization: 'Osiedla SenTOTU ul. Górka Narodowa Kraków, budynki B1.1, B1.2',
    firma: 'Brogan Group Sp. z o.o. ', 
    notename :[
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
]


export default RealizaciaData;
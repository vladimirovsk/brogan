import Project1image1 from './img/Realizaciya/Project1/image1.jpg';
import Project1image2 from './img/Realizaciya/Project1/image2.jpg';
import Project1image3 from './img/Realizaciya/Project1/image3.jpg';
import Project1image4 from './img/Realizaciya/Project1/image4.jpg';
import Project1image5 from './img/Realizaciya/Project1/image5.jpg';
import Project1image6 from './img/Realizaciya/Project1/image6.jpg';
import Project1image7 from './img/Realizaciya/Project1/image7.jpg';
import Project1image8 from './img/Realizaciya/Project1/image8.jpg';
import Project1image9 from './img/Realizaciya/Project1/image9.jpg';
import Project1image10 from './img/Realizaciya/Project1/image10.jpg';
import Project1image11 from './img/Realizaciya/Project1/image11.jpg';
import Project1image12 from './img/Realizaciya/Project1/image12.jpg';

import Project3image1 from './img/Realizaciya/Project3/image1.jpg';
import Project3image2 from './img/Realizaciya/Project3/image2.jpg';


const project1 = [
  Project1image1, Project1image2, Project1image3, 
  Project1image4, Project1image5, Project1image6, 
  Project1image7, Project1image8, Project1image9, 
  Project1image10, Project1image11, Project1image12, 
]
const project2 = project1; 
const project3 = [
  Project3image1, Project3image2
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
      PC: '6.550.20',
      PUM: '2.754.62',
      KUB: ''
    }]
   },

   {
    id: 2,
    img: Project1image6,
    images: project2,
    title: 'Osiedla SLOW CITY ul. Piaszczysta Kraków',
    color: 'orange',
    cols: 2,
    hint: 'Status: W realizacji',
    investor: 'EKOPARK',
    localization: 'Osiedla SLOW CITY ul. Piaszczysta Kraków',
    firma: 'liczba kondygnacji podziemnych 1',   
    notename :[
      {
      name: 'liczba kondygnacji podziemnych 1',
      PC: '13634.15',
      PUM: '7434.30',
      KUB: ''
    },
    {
      name: 'liczba kondygnacji nadziemnych 4',
      PC: '',
      PUM: '',
      KUB: ''
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
    firma: 'Przybyszewskiego Etap II', 
    notename :[{
      name: '',
      PLO: '23.893 m2',
      PUM: '7249.26',
      KUB: '80.867 m3'
    }]    

   },
]


export default RealizaciaData;
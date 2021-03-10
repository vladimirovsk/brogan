import Project1image1 from './img/Developers/Project1/image1.jpg'; 
import Project1image2 from './img/Developers/Project1/image2.jpg'; 
import Project1image3 from './img/Developers/Project1/image3.jpg'; 

import Project2image1 from './img/Developers/Project2/image1.jpg'; 
import Project2image2 from './img/Developers/Project2/image2.jpg'; 
import Project2image3 from './img/Developers/Project2/image3.jpg'; 

const project1 = [
  Project1image1, Project1image2, Project1image3
]

const project2 = [
  Project2image1, Project2image2, Project2image3
]

const DevelopersData = [
{ 
  id:1,
  img: Project1image1,
  images: project1,
  title: 'Apartamenty Strumyk1',
  color: 'orange',
  cols: 2,
  hint: 'Status: building',

  investor: '',
  localization: 'Termin zakończenia : wrzesień 2021',
  firma: 'Brogan Group Sp. z o.o.',   
   
  notename :[{
    name: 'STRUMYK 1 to kameralny czterokondygnacyjny apartamentowiec z trzynastoma nowoczesnymi mieszkaniami, wyposażony w windę pomieszczenie do przechowywania rowerów oraz parkingiem na poziomie "0".',
    PUM: '',
    PC: '',
    KUB: ''
  }]

 },
 { 
  id:2,
  img: Project2image1,
  images: project2,
  title: 'Apartamenty Poleska 5',
  color: 'green',
  cols: 2,
  hint: 'Status: building',

  investor: 'Już w sprzedaży !',
  localization: 'Przewidywany termin zakończenia: I/II kwartał 2023.',
  firma: 'Brogan Group Sp. z o.o.',   
   
  notename :[{
    name: 'Trzy budynki mieszkalne wielorodzinne z garażami podziemnymi wraz z instalacjami wewnętrznymi. ',
    PUM: '',
    PC: '',
    KUB: ''
  }]

 }
]


export default DevelopersData;
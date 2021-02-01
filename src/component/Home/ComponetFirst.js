import {Container} from 'react-bootstrap';

function Component1(){
  return(
    <Container fluid='md'>
    <div className='h4 mt-4'>
      Brogan Group Sp. z o.o. - Generalny wykonawcja inwestycji budowlanych
    </div>
    <div className='m-4 ' style={{textAlign: 'justify', lineHeight: '1.5'}}>
    <p>Jesteśmy prężnie rozwijającą się firmą z polskim kapitałem, 
    która specjalizuje się w kompleksowym wykonywaniu inwestycji budowlanych. 
    Naszym celem jest świadczenie najwyższej jakości usług dla naszych inwestorów.</p>

    <p>Posiadamy zaplecze technologiczne. Zatrudniamy wykwalifikowanych pracowników i kierowników budów. 
    Możesz mieć pewność, że z nami każda inwestycja jest prowadzona profesjonalnie na każdym etapie budowy.
    </p>
    </div>
   
    <div className='ml-4 mb-4 text-left' style={{fontWeight:'700'}}>
      <a href='tel: +48 600 347 050'>Zadzwoń i zapytaj o szczegóły.</a>
    </div>
  </Container>
  )
}

export default Component1;
import {Container} from 'react-bootstrap';


function Component1(){
  return(
    <Container fluid={true} style={{
      backgroundColor: 'transparent'
      }}> 
    <Container fluid='md' style={{backgroundColor:'transparent', color:'black', fontFamily:'Roboto Condensed'}}>
    <div className='h4 pt-5' style={{fontSize: '2em'}}>
      Brogan Group Sp. z o.o. - Generalny wykonawcja inwestycji budowlanych
    </div>
    <div className='m-4 ' style={{textAlign: 'justify', lineHeight: '1.5', fontSize: '1.1em', fontWeight:'700', fontFamily:'Open Sans'}}>
    <p>Jesteśmy prężnie rozwijającą się firmą z polskim kapitałem, 
    która specjalizuje się w kompleksowym wykonywaniu inwestycji budowlanych. 
    Naszym celem jest świadczenie najwyższej jakości usług dla naszych inwestorów.</p>

    <p>Posiadamy zaplecze technologiczne. Zatrudniamy wykwalifikowanych pracowników i kierowników budów. 
    Możesz mieć pewność, że z nami każda inwestycja jest prowadzona profesjonalnie na każdym etapie budowy.
    </p>
    </div>
   
    <div className='ml-4 pb-5 text-left' style={{fontWeight:'700', color:'black'}}>
      <a href='tel: +48 600 347 050' style={{fontWeight:'700', color:'black', fontSize: '1.1em',}}>Zadzwoń i zapytaj o szczegóły.</a>
    </div>

  </Container>
  </Container>
  )
}

export default Component1;
import React, { useState } from 'react';
import {GridList, GridListTile, GridListTileBar, ListSubheader, IconButton} from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Footer from '../footer/Footer';
import GaleriaDialog from './GaleriaDialog'
import ProjectData from './ProjectData'
import {Row, Container} from 'react-bootstrap';
//import { useFirebase } from "react-redux-firebase";

import crane from '../../img/banner-crane.jpg';

import './Galeria.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'black',
    color: 'white'
  },
  gridList: {
    width:'80%'
  }
}));

function Galeria() {

  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false)
  const [Project, setProject] = useState(1);
  //const [myImage, setMyImage] = useState('');
  //const [itemList, setItemList] = useState([])

  //const firebase = useFirebase();
  //const storage = firebase.storage();
  
  const handleClickOpen = (project) => {
    setOpenDialog(true)
    setProject(project)
  }

  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      fontSize: '15px',
      backgroundColor: theme.palette.common.black,
    },
  }));

  function  BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
    return <Tooltip arrow classes={classes} {...props} />;
  }
  
  
  //var gsReference = storage.refFromURL('gs://brogan-c0f45.appspot.com/galery/project1/1-10.jpg');
  //const book = firebase.app().storage("gs://brogan-c0f45.appspot.com/");
  //let pathReference = null;
  //let listRef = storage.child('galery/project1'); // storageRef.child('galery/project1'); 

    //pathReference = storage.refFromURL('gs://brogan-c0f45.appspot.com/galery/project1/1-10.jpg');
    //console.log(st);
    // React.useEffect(()=>{
    //   const storage = firebase.storage();
    //   const storageRef = storage.ref('galery/project1/1-12.jpg');
    //   setMyImage(storageRef.getDownloadURL());
    // }, [])
    // //console.log(storageRef);
   
// function getImageFirebase(myPatch){
//   setItemList( itemList.splice(0, itemList.length));
//   const storageRef = storage.ref(myPatch);
//   storageRef.listAll()
//   .then((res) => {
//       res.items.forEach((itemRef) => {
//           setItemList(itemList.push(itemRef.fullPath));
//       });
//   }).catch((error) => {
//     console.log('error', error)
//   });
// }
   
    
  // function handleFirebaseConnect(){
  //   getImageFirebase('galery/glavn')
  //   console.log('itemList', itemList)   
  // }
  

      

        //   Promise.all(promises).then((downloadURLs) => {
        //     itemList.push(res.items)
        // });  
        //console.log('res',res)
          //console.log('item',item);
     //  res.items.forEach( item => {
        //setItemList(itemList.push(url)); 

     // console.log(itemList);
          // .then((res) => {
          //   res.prefixes.forEach((folderRef) => {
          //     console.log('folderRef', folderRef)
          //     // All the prefixes under listRef.
          //     // You may call listAll() recursively on them.
          //   });
          //   res.items.forEach((itemRef) => {
          //     console.log('itemRef', itemRef)
          //     // All the items under listRef.
          //   });
          // }).catch((error) => {
          //   // Uh-oh, an error occurred!
          // });
    //console.log(listRef.listAll());
  //}

  // function getPicture (pathImage) {
    //storage.refFromURL('gs://brogan-c0f45.appspot.com/galery/project1/1-10.jpg').getDownloadURL()
    //storage.ref(pathImage).getDownloadURL()
    // Get the download URL
    //.then((url) => {
      // eslint-disable-next-line
      //setMyImage(url);
      //return url;
    //})
    //.catch((error) => {
     // console.log(error)
      // eslint-disable-next-line
      //setMyImage(null)
      //return null
    //})
        // console.log(listRef);
  // }
    
  // React.useEffect(() => {
  //  // setMyImage(getPicture('/galery/project1/1-12.jpg'))
  //  //console.log(getPicture('/galery/project1/1-12.jpg'));
  //   // getPicture('/galery/project1/1-12.jpg');
  //   getImageFirebase('galery/glavn')
  //   console.log('ProjectData', ProjectData[1].img)   
  //   console.log('itemList', itemList) 
  // }, []);

  // React.useEffect((){
  //   //getPicture('/galery/project1/1-10.jpg'){
  // },[])

  return (
    <div className={classes.root} style={{backgroundColor:'white'}}>
    <Container fluid={true} className='Contact' style={{backgroundColor:'white'}}>
    <Row style={{
        height:'30vh',  
        backgroundImage: `url(${crane})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
       
      </Row>  
      <Row className="justify-content-center mx-auto">
      <GridList cellHeight={220} className={classes.gridList} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto',  }}>
          <ListSubheader component="div" style={{color: 'black', fontSize: '2em', fontFamily:"'Fredoka One', cursive" }}>
            GALERIA
            {/* <Button variant="contained" color="primary" onClick={handleFirebaseConnect}>TEST FIREBASE</Button> */}
          </ListSubheader>
        </GridListTile>
  
        {ProjectData.map((project) => (
          <GridListTile key={project.id} cols={project.cols || 1} onClick={(e)=>handleClickOpen(project)}>
            <img className={'imageGalerey'} src={project.img} alt={project.title}/>
            <GridListTileBar
              title={project.title}
              subtitle={<span>{project.investor}</span>}
              actionIcon={

                <BootstrapTooltip title={project.hint}>  
                <IconButton aria-label={`info about ${project.title}`} style={{color: `${project.color}`}}
                   onClick={(e)=>handleClickOpen(project)}>
                  <ApartmentIcon />
                </IconButton>
                </BootstrapTooltip>
              }
            />
          </GridListTile >
           ))}
      </GridList>   
      </Row>
      <Footer /> 
      <GaleriaDialog  openDialog={openDialog} setOpenDialog={setOpenDialog} Project={Project}/>
      </Container>
      </div>
  )
}

export default Galeria;
import React, { useState } from 'react';
import {GridList, GridListTile, GridListTileBar, ListSubheader, IconButton} from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Footer from '../footer/Footer';
import GaleriaDialog from './GaleriaDialog'

import ZrealizovaneData from './ZrealizovaneData'
import RealizaciaData from './RealizaciaData'

import {Row, Container} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

import crane from '../../img/banner-crane.jpg';
import {translate} from 'react-switch-lang';

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

function Galeria(props) {
  const [{t}] = React.useState(props);
  let   {tipe} = useParams()
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false)
  const [project, setProject] = useState(1);
  const [selectGaleria, setSelectGaleria] = useState(tipe);
  const [title, setTitle] = useState('');

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

  //relizaziya
  const Relizaziya = () => {
    return(
      <GridList cellHeight={220} className={classes.gridList} cols={3}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto',  }}>
        <ListSubheader component="div" style={{color: 'black', fontSize: '2em', fontFamily:"'Fredoka One', cursive" }}>
      </ListSubheader>
      </GridListTile>
      {RealizaciaData.map((project) => (
        <GridListTile key={project.id} cols={1} onClick={(e)=>handleClickOpen(project)}>
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
    ) 
  }

  //menu zrealizovane
  const Zrealizovane = () => {
    return(
      <GridList cellHeight={220} className={classes.gridList} cols={2}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto',  }}>
        <ListSubheader component="div" style={{color: 'black', fontSize: '2em', fontFamily:"'Fredoka One', cursive" }}>
      </ListSubheader>
      </GridListTile>
      {ZrealizovaneData.map((project) => (
        <GridListTile key={project.id} cols={1} onClick={(e)=>handleClickOpen(project)}>
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
    ) 
  } 

  //menu developers
  const Developers = () => {
    return(
    <h1>Developers</h1>
    )
  } 


  React.useEffect(()=>{
    switch(tipe){
      case 'relizaziya'  : {
        setSelectGaleria(Relizaziya); 
        setTitle(t("header.menu.DropMenu1.Menu1")); 
        break;
      }
      case 'zrealizovane' :{setSelectGaleria(Zrealizovane); setTitle(t("header.menu.DropMenu1.Menu2")); break;}
      case 'developers' :  {setSelectGaleria(Developers); setTitle(t("header.menu.DropMenu1.Menu3")); break;}
      default: {setSelectGaleria(Relizaziya); setTitle(t("header.menu.DropMenu1.Menu1"));}
    }  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tipe])

  function  BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
    return <Tooltip arrow classes={classes} {...props} />;
  }


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
      <div style={{textAlign: 'center', fontFamily:'Roboto Condensed', fontSize:'2em'}}>{title}</div>

      <Row className="justify-content-center mx-auto">
      
      {selectGaleria} 

      </Row>
      <Footer /> 
        <GaleriaDialog openDialog={openDialog} setOpenDialog={setOpenDialog} project={project}/>
      </Container>
      </div>
  )
}

export default translate(Galeria);
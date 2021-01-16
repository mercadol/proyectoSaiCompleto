import styled from "styled-components";

export const BodyTable = styled.div`
  margin:0;padding:50px;
  h2 {font-size:36px;margin:0 0 10px 0}
  p {margin:0 0 10px 0}
  .contentable {
	padding: 5px;
    margin: 10px;
}

@media only screen and (max-width: 760px), (min-width: 768px) and (max-width: 1024px)  
  {
  
    table.width200, .width200 thead, .width200 tbody, .width200 th, .width200 td, .width200 tr { display: block; }
  	
  	.width200 thead tr { position: absolute;top: -9999px;left: -9999px; }
  	
  	.width200 tr { border: 1px solid #ccc; }
  	
  	.width200 td { border: none;border-bottom: 1px solid #ccc; position: relative;padding-left: 50%;text-align:left }
  	
  	.width200 td:before {  position: absolute; top: 6px; left: 6px; width: 45%; padding-right: 10px; white-space: nowrap;}
  	
  	.width200 td:nth-of-type(1):before { content: "Nombre"; }
  	.width200 td:nth-of-type(2):before { content: "Apellidos"; }
  	.width200 td:nth-of-type(3):before { content: "Dni"; }
  	.width200 td:nth-of-type(4):before { content: "fecha"; }
  	.width200 td:nth-of-type(5):before { content: "Accion"; }
  	
  	.descarto {display:none;}
  	.fontsize {font-size:10px}
  }
  
  /* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-width : 320px) and (max-width : 480px) 
  {
  	width: 320px;
  	.descarto {display:none;}
  }
  
  /* iPads (portrait and landscape) ----------- */
  @media only screen and (min-width: 768px) and (max-width: 1024px) 
  {
  	width: 495px;
  	.descarto {display:none;}
  	.fontsize {font-size:10px}
  }
`



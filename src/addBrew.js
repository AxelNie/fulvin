import App from './App';
function addBrew(name,i,f) {
    
    window.brewList[window.brewCount] = new window.brew(name,i,f);
    window.brewCount++;
    
    
  }
  
  export default addBrew;
  
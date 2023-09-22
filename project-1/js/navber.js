let=false;

document.getElementById('hamberger-btn').addEventListener('click',()=>{
    if(let){
      const ul= document.getElementById('list-item');
      ul.style.top='-600px'
      ul.style.left='0px'
      ul.style.paddingLeft='2rem'
      console.log(ul);

        let=false
    }
    else{
        const ul= document.getElementById('list-item');
        ul.style.top='100px'
        let=true
    }
})
const imgDiv = document.querySelector('.profile-pic-div');
const img= document.querySelector('#photo');
const file=document.querySelector('#uploadBtn');

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display="block";

});

imgDiv.addEventListener('mouseleave',function(){
    uploadBtn.style.display="none";
});

file.addEventListener('change',function(){
const chooseFile=this.Files[0];

if(chooseFile){
    const reader=new FileReader();
    reader.addEventListener('load',function(){
    img.setAttribute('src',reader.result);
    });

    reader.readerDataURL(chooseFile);
    
}
});
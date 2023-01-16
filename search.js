const SearchContent = () => {
    let filter = document.getElementById('myinput').value.toupperCase();

    let ul = document.getElementById('myul');

    let li = document.getElementsByTagName('li');

    for(var i=0; i<li,length; i++){
        let a = li[i].getElementsByTagName('0')[0];

        let textValue = a.textContent || a.innerHTML;
        if(textValue.toupperCase().indexOf(filter) > -1){
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }

}
const convert = (event) => {
    let id = event.id;
    let value = event.value - '0';
    if(id === 'cel') {
        document.getElementById('fahr').value = 9 * value / 5 + 32;
        document.getElementById('kel').value = 273.15 + value;
    }
    else if(id === 'kel') {
        let cel = value - 273.15;
        document.getElementById('cel').value = cel;
        document.getElementById('fahr').value = 9 * cel / 5 + 32;
    }
    else {
        let cel = 5 * (value - 32) / 9;
        document.getElementById('cel').value = cel;
        document.getElementById('kel').value = cel + 273.15;
    }
    // console.log(value);
    
}
let miformulario = document.getElementById('formulario')

let img = document.querySelector('#img')



miformulario.addEventListener('submit', async(e) => {
    e.preventDefault();
    
    let data = Object.fromEntries(new FormData(e.target));

    imc = data.peso/(data.altura*data.altura )
 

        if(imc < 18.5 ){
            img.innerHTML =(`
                <h1>${imc} Estas por debajo de lo normal(bajo)</h1>
                <div>
                <img src="/img/4939257.png" alt="">
                </div>
                            <div>
                             <button type='submit' value='Enviar' id='reset'>reset</button>
                            </div>
                
                   
                `)
               
        
            }
        else if(imc >=18.5 && imc <=24.5){
        img.innerHTML =(`
            <h1>${imc} Estas dentro de lo normal(normal)</h1>
            <div>
            <img src="/img/normal.jpg" alt="">
            </div>

                        <div>
                            <button type='submit' value='Enviar' id='reset'>reset</button>
                        </div>
            
            
            `)
        }

        else if(imc >=25 && imc <=29.9){
        img.innerHTML =(`
            <h1>${imc} Estas por arriva de lo normal(Sobre peso)</h1>
            <div>
            <img src="/img/sobrePeso.png" alt="">
            </div>
                        <div>
                         <button type='submit' value='Enviar' id='reset'>reset</button>
                        </div>
            
            
            `)
        }
        else if(imc > 30){
        img.innerHTML =(`
            <h1>${imc} Sobre pasas lo normal(obesidad)</h1>
            <div>
            <img src="/img/obesidad.jpeg" alt="">
            </div>
                        <div>
                         <button type='submit' value='Enviar' id='reset'>reset</button>
                        </div>
            
            
        
            `)
        }
    
    
})
const postData = async(data) =>{
    return JSON.stringify(data)
}
document.addEventListener('submit', function(event){
    event.preventDefault();
    const inputs = this.querySelectorAll('input');
    inputs.forEach(element => {
        element.disabled = true;
    })
})

document.addEventListener('click', function(e){
    if (e.target && e.target.id ==='reset'){
        e.preventDefault();
         

        const inpust = miformulario.querySelectorAll('input');
        inpust.forEach(input => {
            input.value = "";
            input.disabled = false;
        })
        img.innerHTML = ''
    }
})
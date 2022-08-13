let btn1 = document.querySelector('#btn1Button').addEventListener('click', () => 
{

    // Discolore todos os circulos
    discolorCircle()

    // muda a cor apenas do primeiro circulo
    let btnCircle1 = document.querySelector('#btn1').style.background = '#0d6efd';

    // Muda o tamanho da barra para 0% e deixa-la escondida
    let progressbarCircle = document.getElementById('progressApres').style.width = '0%';

    // Fecha todas as abas
    closeAbas()

    // Aparece o texto de apresentação
    let containerSobreMim = document.querySelector('#containerSobreMim').style.display = 'block'

});

let btn2 = document.querySelector('#btn2Button').addEventListener('click', () => 
{

    // Discolore todos os circulos
    discolorCircle()

    // muda a cor do segundo e do primeiro circulo
    let btnCircle2 = document.querySelector('#btn2').style.background = '#0d6efd';
    let btnCircle1 = document.querySelector('#btn1').style.background = '#0d6efd';

    // Muda o tamanho da barra para 50%
    let progressbarCircle = document.getElementById('progressApres').style.width = '50%';

    // Fecha todas as abas
    closeAbas()

    // Aparece as minhas 'habilidades' (kkk)
    let habilidadesAba = document.getElementById('containerHabilidades').style.display = 'block';

});

let btn3 = document.querySelector('#btn3Button').addEventListener('click', () => 
{
    // Discolore todos os circulos
    discolorCircle()

    // muda a cor de todos os circulos
    let btnCircle3 = document.querySelector('#btn3').style.background = '#0d6efd';
    let btnCircle2 = document.querySelector('#btn2').style.background = '#0d6efd';
    let btnCircle1 = document.querySelector('#btn1').style.background = '#0d6efd';

    // Muda o tamanho da barra para 100%
    let progressbarCircle = document.getElementById('progressApres').style.width = '100%';

    // Fecha todas as abas
    closeAbas()

    // Aparece o texto de apresentação
    let experienciaAba = document.getElementById('containerExp').style.display = 'block';
});

function discolorCircle()
{
    // muda a cor das 3 bolinhas de azul para cinza

    let btnCircle1 = document.querySelector('#btn1').style.background = '#6c757d';
    let btnCircle2 = document.querySelector('#btn2').style.background = '#6c757d' 
    let btnCircle3 = document.querySelector('#btn3').style.background = '#6c757d' 

}
function closeAbas()
{
    let containerExp = document.getElementById('containerSobreMim').style.display = 'none';
    let habilidadesAba = document.getElementById('containerHabilidades').style.display = 'none';
    let experienciaAba = document.getElementById('containerExp').style.display = 'none';

}
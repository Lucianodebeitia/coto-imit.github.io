let imagenes = ['imgs/promos.jpg', 'imgs/logo-wsp.jpg', 'imgs/seleccion.jpg']

let cont = 0;

function cambiarImagen() {
    cont = (cont + 1) % imagenes.length;
    document.getElementById('carrusel-img').src = imagenes[cont];
}


function avanzarImagen() {
    cont = (cont + 1) % imagenes.length;
    document.getElementById('carrusel-img').src = imagenes[cont];
}

function retrocederImagen() {
    cont = (cont - 1 + imagenes.length) % imagenes.length;
    document.getElementById('carrusel-img').src = imagenes[cont];
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(cambiarImagen, 5000); // Cambia la imagen cada 3 segundos

    document.querySelector('.next').addEventListener('click', avanzarImagen);
    document.querySelector('.back').addEventListener('click', retrocederImagen);
});


let currentIndex = 0;

const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

document.getElementById('next').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
    images[currentIndex].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
    images[currentIndex].classList.add('active');
});


document.addEventListener("DOMContentLoaded", function() {
    const promotions = {
        1: [ // Lunes
            {
                title: "15% DE DESCUENTO",
                content: 'EN UN PAGO PARA TODOS LOS <span>JUBILADOS Y PENSIONADOS</span> <span class="highlight">PRESENTANDO DNI</span> <p class="text-one">Con todos los medios de pago. no valido para venta online</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                // image: "defensas-al-consumidor/santanderwomen.png",
            },
            {
                title: "20% DE DESCUENTO",
                content: '<p class="tci">EN UN PAGO CON NUESTRA TARJETA DE CREDITO TCI</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/logo_tci_desc.png",
            },
            {
                title: "20% DE DESCUENTO",
                content: '<p class="tci">EN UN PAGO CON TARJETAS DE CRÉDITO VISA, MASTERCARD Y CABAL</p> <p class="rembolso-bna-ciudad">Reembolso maximo $6.000 semanal por cliente </p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/logo_ciudad.png"
            },
            {
                title: "20% DE AHORRO",
                content: '<p class="tci">PAGANDO CON TU TARJETA PREPAGA Y CREDITO UALÁ</p> <p class="rembolso-bna-ciudad">Tope de reintegro: $4.000 por cuenta por mes.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>'  ,
                image: "defensas-al-consumidor/logo_uala.jpg"
            },
            {
                title: "30% DE AHORRO",
                content: '<p class="tci">PAGANDO CON TU TARJETA DE CREDITO MASTERCARD UÁLA VIENE DE 10 </p>  <p class="rembolso-bna-ciudad">Tope de reintegro: $6.000 por cuenta por mes.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/logo_uala.jpg"
            },
            {
                title: "15% DE DESCUENTO",
                content: '<p class="la-nacion">PARA SOCIOS CLUB LA NACIÓN </p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/logo_cln.png"
            },
            {
                title: "10% DE DESCUENTO",
                content: '<p class="ciudadania-portena">PROGRAMAS CIUDADANIA PORTEÑA</p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a> ',
                image: "defensas-al-consumidor/logo_portena.jpg"
            },
            {
                title: "10% DE DESCUENTO",
                content: '<p class="tci">EN UN PAGO CON TARJETAS DE DÉBITO Y CRÉDITO</p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/anses2.png"
            }
        ],
        2: [ // Martes
            {
                title: "30% DE DESCUENTO",
                content: '<p class="tci">EN UN PAGO CON TARJETAS DE CREDITO Y VISA DEBITO</p> <p class="rembolso-bna-ciudad">Tope de reintegro: $15.000.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/santanderwomen.png"
            },
            {
                title: "20% DE DESCUENTO",
                content: '<p class="superville">CON TARJETA DE DEBITO</p> <p class="rembolso-bna-ciudad">Tope de reintegro: $6.000</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/supervielle2022.jpg",
            },
            {
                title: "10% DE DESCUENTO",
                content: '<p class="tci">EN UN PAGO CON TARJETAS DE DÉBITO Y CRÉDITO</p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/anses2.png"
            },
            {
                title: "3 CUOTAS S/ INTERÉS",
                content: '<p class="tci">CON TARJETA NARANJA</p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>' ,
                image: "defensas-al-consumidor/logo-planz.jpg"
            }
        ],
        3: [ // Miércoles
            {
                title: "30% DE DESCUENTO",
                content: '<p class="p_red">+ 3 CUOTAS SIN INTERES</p> <p class="tci">CON TARJETAS DE CRÉDITO VISA Y MASTERCARD DEL BNA A TRAVÉS DE LA APP.</p> <p class="tope-de-reintegro">Tope de reintegro unificado: $10.000 por dia Miercoles por cliente.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/modobna2.jpg"
            },
            {
                title: "15% DE DESCUENTO",
                content: '<p class="tci">EN UN PAGO SI SOS MIEMBRO <span class="p_yellow">NUESTRA DE LA COMUNIDAD</span> </p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "logos_comunidad/comu2.png"

            },
            {
                title: "15% DE DESCUENTO",
                content: '<p class="la-nacion">PARA SOCIOS CLUB LA NACIÓN </p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/logo_cln.png"

            },
            {
                title: "10% DE DESCUENTO",
                content: '<p class="ciudadania-portena">PROGRAMAS CIUDADANIA PORTEÑA</p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a> ',
                image: "defensas-al-consumidor/logo_portena.jpg"

            },
            {
                title: "10% DE DESCUENTO",
                content: '<p class="tci">EN UN PAGO CON TARJETAS DE DÉBITO Y CRÉDITO</p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/anses2.png"

            },
            {
                title: "3 CUOTAS S/ INTERÉS",
                content: '<p class="tci">CON TARJETA NARANJA</p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>' ,
                image: "defensas-al-consumidor/logo-planz.jpg"

            }
        ],
        4: [ // Jueves
            {
                title: "15% DE DESCUENTO",
                content: 'EN UN PAGO PARA TODOS LOS <span>JUBILADOS Y PENSIONADOS</span> <span class="highlight">PRESENTANDO DNI</span> <p class="text-one">Con todos los medios de pago. no valido para venta online</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
            },
            {
                title: "15% DE DESCUENTO",
                content: '<p class="tci">EN UN PAGO SI SOS MIEMBRO <span class="p_yellow">NUESTRA DE LA COMUNIDAD</span> </p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "logos_comunidad/comu2.png"
            },
            {
                title: "10% DE DESCUENTO",
                content: '<p class="tci">EN UN PAGO CON TARJETAS DE DÉBITO Y CRÉDITO</p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/anses2.png"
            },
            {
                title: "20% DE AHORRO",
                content: '<p class="tci">CON TARJETAS DE DEBITO VISA</p> <p class="rembolso-bna-ciudad">Tope de reintegro: $5.000.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/logo_icbc.png"
            },
            {
                title: "20% DE DESCUENTO",
                content: '<p class="tci">CON TARJETAS DE DÉBITO VISA</p> <p class="tope-de-reintegro">Tope de reintegro: $8.000 mensual.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/columbia2.jpg"
            },
            {
                title: "20% DE DESCUENTO",
                content: '<p class="tci">EN UN PAGO CON TARJETA DE CREDITO VISA Y MASTERCARD</p> <p class="tope-de-reintegro">Tope de reintegro: $14.000 mensual.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/columbia2.jpg"
            },
            {
                title: "20% DE DESCUENTO",
                content: '<p class="tci">CON TARJETAS DE DÉBITO VISA </p> <p class="exclusivos">EXCLUSIVO JUBILADOS QUE PERCIBAN SUS HABERES EN EL BANCO</p> <p class="tope-de-reintegro">Tope de reintegro: $10.000 mensual.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "logos_comunidad/comu2.png"
            },
            {
                title: "25% DE DESCUENTO",
                content: '<p class="tci">CON TARJETAS VISA DÉBITO</p> <p class="tope-de-reintegro">Tope de devolución: $5.000 p/ transacción.</p> <p class="tope-de-reintegro">Clientes Cuenta Comafi Único tope de reintegro $6.000.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/logo_comafi.png"
            },
        ],
        5: [ // Viernes
            {
                title: "3 CUOTAS S/ INTERÉS",
                content: '<p class="tci">CON TARJETA NARANJA</p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>' ,
                image: "defensas-al-consumidor/logo-planz.jpg"
            },
            {
                title: "20% DE DESCUENTO",
                content: '<p class="tci">EN UN PAGO CON NUESTRA TARJETA DE CREDITO TCI</p> <p class="tope-de-reintegro">Sin tope de reintegro</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/logo_tci_desc.png"
            },
            {
                title: "30% DE AHORRO",
                content: '<p class="tci">ABONANDO CON QR DESDE MODO</p> <p class="tope-de-reintegro">Tope de reintegro: $10.000 por semana por banco.</p> <p class="tope-de-reintegro">No valido para venta online (Coto Digital).</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/modo.png"
            },
            
        ],
        6: [ // Fin de semana.
            {
                title: "3 CUOTAS S/ INTERÉS",
                content: '<p class="tci">CON TARJETA NARANJA</p> <p class="rembolso-bna-ciudad">Sin tope de reintegro.</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>' ,
                image: "defensas-al-consumidor/logo-planz.jpg"
            },
            {
                title: "20% DE DESCUENTO",
                content: '<p class="tci">EN UN PAGO CON NUESTRA TARJETA DE CREDITO TCI</p> <a class="link_js">Aplican exclusiones. Ver legal.</a>',
                image: "defensas-al-consumidor/logo_tci_desc.png",
            },
            
        ]
    };

    window.showPromotions = function(day) {
        const todayPromotions = promotions[day] || [];
        const promotionsContainer = document.getElementById("promotions-container");
        promotionsContainer.innerHTML = todayPromotions.map(promo => `
            <div class="promo-card">
                <h2>${promo.title}</h2>
                ${promo.image ? `<img src="${promo.image}" alt="${promo.title}" class="promo-image">` : ''}
                <p>${promo.content}</p>
            </div>
        `).join('');
    };

    // Muestra las promociones del día actual al cargar la página
    const today = new Date().getDay();
    showPromotions(today);
});


// ! Retocamos el Scroll.

// Función para el desplazamiento suave
function smoothScroll(target, duration) {
    let targetElement = document.querySelector(target);
    let targetPosition = targetElement.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Uso del desplazamiento suave al hacer clic en un enlace
document.querySelector('.link_js').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#targetElement', 1000);
});

// !!!!!!!!!!!!!!!!!!!!!!!


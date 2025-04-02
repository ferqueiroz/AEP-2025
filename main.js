var map = L.map('mapa').setView([-23.5229633,-51.6806734], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);


var marker1 = L.marker([-23.510415746903423, -51.69872361551175]).addTo(map)
    .bindPopup(
        "<div>"+
            "<div>"+
                "<svg xmlns='http://www.w3.org/2000/svg' width=16 height='16' fill='currentColor' class='bi bi-geo-alt' viewBox='0 0 16 16'>"+
                    "<path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10'/>"+
                    "<path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6'/>"+     
                "</svg>"+
                "<a style='margin-left: 15px;'>R. Pantaleão Peres, 237 - Jardim Progresso,</a><a style='margin-left: 31px;'> Mandaguari - PR, 86975-000</a>"+
            "</div>"+
            
            "<div style='padding-top: 10px; max-width: 150px;'>"+
                "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-clock' viewBox='0 0 16 16'>"+
                    "<path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z'/>"+
                    "<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0'/>"+                  
                "</svg>"+
                "<a style='margin-left: 15px;'>Segunda a Sexta</a><a style='margin-left: 31px'> das 7:30h as 17h</a>"+
            "</div>"+
        "</div>"
    );

var marker2 = L.marker([-23.511066818252747, -51.69549753867816]).addTo(map)
    .bindPopup('2');

var marker3 = L.marker([-23.51211145590567, -51.68613253303305]).addTo(map)
    .bindPopup('3');

var marker4 = L.marker([-23.51666673018733, -51.686782808055725]).addTo(map)
    .bindPopup('4');

var marker5 = L.marker([-23.51817297246366, -51.685573998739684]).addTo(map)
    .bindPopup('5');

var marker6 = L.marker([-23.525160485609415, -51.66912918442672]).addTo(map)
    .bindPopup('6');

var marker7 = L.marker([-23.528764663872494, -51.66859015587357]).addTo(map)
    .bindPopup('7');

var marker8 = L.marker([-23.522642734648844, -51.66244843735653]).addTo(map)
    .bindPopup('8');

var marker9 = L.marker([-23.542344768303558, -51.67261073250642]).addTo(map)
    .bindPopup('9');

var marker8 = L.marker([-23.543265661770466, -51.67538008026408]).addTo(map)
    .bindPopup('10');
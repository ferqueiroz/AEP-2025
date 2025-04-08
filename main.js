/***************** CONFIGURAÇÕES DO MAPA *****************/

var map = L.map('mapa').setView([-23.5229633,-51.6806734], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

const opcoes = ["UBS Jardim Progresso", "UBS Jardim Morumbi", "Pronto Atendimento Municipal", "UBS Jardim Esplanada", "UBS Centro", "Hospital Cristo Rei", "UBS Jardim Boa Vista", "UBS Vila Vitoria"];

var UBSJardimProgresso = L.marker([-23.510415746903423, -51.69872361551175]).addTo(map)
    .bindPopup(
        /*****************IMAGEM******************/
        "<img src='https://lh3.googleusercontent.com/p/AF1QipMjPqi0fSp3IiQYj6wgf5IrKUKTRQFeR66ng_iL=s680-w680-h510' style='width: 305px; height: 150px; margin-bottom: 20px; margin-top: 10px;'>"+

        /*******************NOME********************/
        "<h4><b>UBS - Jardim Progresso</b></h4>"+

        /*****************ENDEREÇO******************/
        "<div style='margin-top: 15px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width=16 height='16' fill='currentColor' class='bi bi-geo-alt' viewBox='0 0 16 16'>"+
                "<path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10'/>"+
                "<path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6'/>"+     
            "</svg>"+
            "<a style='margin-left: 15px;'>R. Pantaleão Peres, 237 - Jardim Progresso,</a><br><a style='margin-left: 31px;'> Mandaguari - PR, 86975-000</a>"+
        "</div>"+

        /*****************HORARIOS******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-clock' viewBox='0 0 16 16'>"+
                "<path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z'/>"+
                "<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0'/>"+                  
            "</svg>"+
            "<a style='margin-left: 15px;'>Segunda a Sexta</a><br><a style='margin-left: 31px'> das 7:30h as 17h</a>"+
        "</div>"+

        /*****************TELEFONE******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-telephone' viewBox='0 0 16 16'>"+
                "<path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'/>"+
            "</svg>"+
            "<a style='margin-left: 15px;'>(44) 3233-7914</a>"+
        "</div>"
    );

var UBSJardimProgresso1 = L.marker([-23.511066818252747, -51.69549753867816]).addTo(map)
    .bindPopup(
        /*****************IMAGEM******************/
        "<img src='https://media.portalagora.com/2021/11/e741bbd5-ubs-progresso-ok.jpg' style='width: 305px; height: 150px; margin-bottom: 20px; margin-top: 10px;'>"+

        /*******************NOME********************/
        "<h4><b>UBS - Jardim Progresso</b></h4>"+

        /*****************ENDEREÇO******************/
        "<div style='margin-top: 15px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width=16 height='16' fill='currentColor' class='bi bi-geo-alt' viewBox='0 0 16 16'>"+
                "<path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10'/>"+
                "<path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6'/>"+     
            "</svg>"+
            "<a style='margin-left: 15px;'>R.Tadashi Utime, 166-342 - Jardim Progresso,</a><br><a style='margin-left: 31px;'> Mandaguari - PR, 86975-000</a>"+
        "</div>"+

        /*****************HORARIOS******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-clock' viewBox='0 0 16 16'>"+
                "<path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z'/>"+
                "<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0'/>"+                  
            "</svg>"+
            "<a style='margin-left: 15px;'>Segunda a Sexta</a><br><a style='margin-left: 31px'> das 7:30h as 17h</a>"+
        "</div>"+

        /*****************TELEFONE******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-telephone' viewBox='0 0 16 16'>"+
                "<path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'/>"+
            "</svg>"+
            "<a style='margin-left: 15px;'>(44) 3233-7914</a>"+
        "</div>"
    );

var UBSJardimMorumbi = L.marker([-23.51211145590567, -51.68613253303305]).addTo(map)
    .bindPopup(
        /*****************IMAGEM******************/
        "<img src='https://mandaguarionline.com.br/wp-content/uploads/2017/08/IMG_7848.jpg' style='width: 305px, height: 150px; margin-bottom: 20px; margin-top: 10px;'>"+
        
        /*******************NOME********************/
        "<h4><b>UBS - Jardim Morumbi</b></h4>"+

        /*****************ENDEREÇO******************/
        "<div style='margin-top: 15px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width=16 height='16' fill='currentColor' class='bi bi-geo-alt' viewBox='0 0 16 16'>"+
                "<path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10'/>"+
                "<path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0  -6 3 3 0 0 0 0 6'/>"+     
            "</svg>"+
            "<a style='margin-left: 15px;'>Av. Padre Max Kaufman, Jardim Cristina,</a><br><a style='margin-left: 31px;'> Mandaguari - PR, 86975-000</a>"+
        "</div>"+

        /*****************HORARIOS******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-clock' viewBox='0 0 16 16'>"+
                "<path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z'/>"+
                "<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0'/>"+                  
            "</svg>"+
            "<a style='margin-left: 15px;'>Segunda a Sexta</a><br><a style='margin-left: 31px'> das 7:30h as 17h</a>"+
        "</div>"+

        /*****************TELEFONE******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-telephone' viewBox='0 0 16 16'>"+
                "<path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'/>"+
            "</svg>"+
            "<a style='margin-left: 15px;'>(44) 3133-0655</a>"+
        "</div>"
        
    );

var ProntoAtendimentoMunicipal = L.marker([-23.51666673018733, -51.686782808055725]).addTo(map)
    .bindPopup( 
        /*****************IMAGEM******************/
        "<img src='https://mandaguarionline.com.br/wp-content/uploads/2021/05/6dd878ab-21fd-4073-8101-2500f161625b.jpg' style='width: 305px; height: 150px; margin-bottom: 20px; margin-top: 10px;'>"+

        /*******************NOME********************/
        "<h4><b>Pronto Atendimento Municipal</b></h4>"+

        /*****************ENDEREÇO******************/
        "<div style='margin-top: 15px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width=16 height='16' fill='currentColor' class='bi bi-geo-alt' viewBox='0 0 16 16'>"+
                "<path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10'/>"+
                "<path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6'/>"+     
            "</svg>"+
            "<a style='margin-left: 15px;'>R. Elías Alexandre, S/N - Parque Industrial,</a><br><a style='margin-left: 31px;'> Mandaguari - PR, 86975-000</a>"+
        "</div>"+

        /*****************HORARIOS******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-clock' viewBox='0 0 16 16'>"+
                "<path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z'/>"+
                "<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0'/>"+                  
            "</svg>"+
            "<a style='margin-left: 15px;'>Segunda a Domingo</a><br><a style='margin-left: 31px'>Aberto 24 horas</a>"+
        "</div>"+

        /*****************TELEFONE******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-telephone' viewBox='0 0 16 16'>"+
                "<path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'/>"+
            "</svg>"+
            "<a style='margin-left: 15px;'>(44) 3233-7032</a>"+
        "</div>"
    );

var UBSJardimEsplanada = L.marker([-23.51817297246366, -51.685573998739684]).addTo(map)
    .bindPopup(
        /*****************IMAGEM******************/
        "<img src='https://github.com/ferqueiroz/AEP-2025/blob/main/Imagens/UBS Jardim Esplanada.png?raw=true' style='width: 305px; height: 150px; margin-bottom: 20px; margin-top: 10px;'>"+

        /*******************NOME********************/
        "<h4><b>UBS - Jardim Esplanada</b></h4>"+

        /*****************ENDEREÇO******************/
        "<div style='margin-top: 15px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width=16 height='16' fill='currentColor' class='bi bi-geo-alt' viewBox='0 0 16 16'>"+
                "<path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10'/>"+
                "<path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6'/>"+     
            "</svg>"+
            "<a style='margin-left: 15px;'>R. Duque de Caxias, 50 - Jardim Esplanada,</a><br><a style='margin-left: 31px;'> Mandaguari - PR, 86975-000</a>"+
        "</div>"+

        /*****************HORARIOS******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-clock' viewBox='0 0 16 16'>"+
                "<path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z'/>"+
                "<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0'/>"+                  
            "</svg>"+
            "<a style='margin-left: 15px;'>Segunda a Sexta</a><br><a style='margin-left: 31px'>das 7:30 as 17:00</a>"+
        "</div>"+

        /*****************TELEFONE******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-telephone' viewBox='0 0 16 16'>"+
                "<path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'/>"+
            "</svg>"+
            "<a style='margin-left: 15px;'>(44) 3233-7032</a>"+
        "</div>"
    );

var UBSCentro = L.marker([-23.525160485609415, -51.66912918442672]).addTo(map)
    .bindPopup(
        /*****************IMAGEM******************/ 
        "<img src='https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=OnEIMUIrEVzk3p45RZqWhg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=120.31223&pitch=0&thumbfov=100' style='width: 305px; height: 150px; margin-bottom: 20px; margin-top: 10px;'>"+

        /*******************NOME********************/
        "<h4><b>UBS - Centro</b></h4>"+

        /*****************ENDEREÇO******************/
        "<div style='margin-top: 15px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width=16 height='16' fill='currentColor' class='bi bi-geo-alt' viewBox='0 0 16 16'>"+
                "<path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10'/>"+
                "<path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6'/>"+     
            "</svg>"+
            "<a style='margin-left: 15px;'>R. Padre Antônio Lock, 382 - Centro,</a><br><a style='margin-left: 31px;'> Mandaguari - PR, 86975-000</a>"+
        "</div>"+

        /*****************HORARIOS******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-clock' viewBox='0 0 16 16'>"+
                "<path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z'/>"+
                "<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0'/>"+                  
            "</svg>"+
            "<a style='margin-left: 15px;'>Segunda a Sexta</a><br><a style='margin-left: 31px'>das 7:30 as 17:00</a>"+
        "</div>"+

        /*****************TELEFONE******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-telephone' viewBox='0 0 16 16'>"+
                "<path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'/>"+
            "</svg>"+
            "<a style='margin-left: 15px;'>(44) 3233-2982</a>"+
        "</div>"
    );

var HospitalCristoRei = L.marker([-23.528764663872494, -51.66859015587357]).addTo(map)
    .bindPopup(
        /*****************IMAGEM******************/
        "<img src='https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=7_TJCBN1VIaUsRxwGnezhQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=287.41336&pitch=0&thumbfov=100' style='width: 305px; height: 150px; margin-bottom: 20px; margin-top: 10px;'>"+

        /*******************NOME********************/
        "<h4><b>Hospital Cristo Rei</b></h4>"+

        /*****************ENDEREÇO******************/
        "<div style='margin-top: 15px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width=16 height='16' fill='currentColor' class='bi bi-geo-alt' viewBox='0 0 16 16'>"+
                "<path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10'/>"+
                "<path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6'/>"+     
            "</svg>"+
            "<a style='margin-left: 15px;'>Av. Pres. Vargas, 480 - Centro,</a><br><a style='margin-left: 31px;'> Mandaguari - PR, 86975-000</a>"+
        "</div>"+

        /*****************HORARIOS******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-clock' viewBox='0 0 16 16'>"+
                "<path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z'/>"+
                "<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0'/>"+                  
            "</svg>"+
            "<a style='margin-left: 15px;'>Segunda a Sexta</a><br><a style='margin-left: 31px'>das 7:00 as 17:00</a>"+
        "</div>"+

        /*****************TELEFONE******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-telephone' viewBox='0 0 16 16'>"+
                "<path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'/>"+
            "</svg>"+
            "<a style='margin-left: 15px;'>(44) 3233-1050</a>"+
        "</div>"
    );

var UBSJardimBoaVista = L.marker([-23.522642734648844, -51.66244843735653]).addTo(map)
    .bindPopup(
        /*****************IMAGEM******************/
        "<img src='https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=WAQW7wV3fJcW9ia4ufz29Q&cb_client=search.gws-prod.gps&w=408&h=240&yaw=279.12784&pitch=0&thumbfov=100' style='width: 305px; height: 150px; margin-bottom: 20px; margin-top: 10px;'>"+

        /*******************NOME********************/
        "<h4><b>UBS - Jardim Boa Vista</b></h4>"+

        /*****************ENDEREÇO******************/
        "<div style='margin-top: 15px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width=16 height='16' fill='currentColor' class='bi bi-geo-alt' viewBox='0 0 16 16'>"+
                "<path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10'/>"+
                "<path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6'/>"+     
            "</svg>"+
            "<a style='margin-left: 15px;'>R. Antonio M Da Silva, 26 - Novo Horizonte,</a><br><a style='margin-left: 31px;'> Mandaguari - PR, 86975-000</a>"+
        "</div>"+

        /*****************HORARIOS******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-clock' viewBox='0 0 16 16'>"+
                "<path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z'/>"+
                "<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0'/>"+                  
            "</svg>"+
            "<a style='margin-left: 15px;'>Segunda a Sexta</a><br><a style='margin-left: 31px'>das 7:30 as 22:00</a>"+
        "</div>"+

        /*****************TELEFONE******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-telephone' viewBox='0 0 16 16'>"+
                "<path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'/>"+
            "</svg>"+
            "<a style='margin-left: 15px;'>(44) 3233-6051</a>"+
        "</div>"
    );

var UBSVilaVitoria = L.marker([-23.542344768303558, -51.67261073250642]).addTo(map)
    .bindPopup(
        /*****************IMAGEM******************/
        "<img src='https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=AMHyIHtnx3xjSL7RJpByZA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=342.42047&pitch=0&thumbfov=100' style='width: 305px; height: 150px; margin-bottom: 20px; margin-top: 10px;'>"+

        /*******************NOME********************/
        "<h4><b>UBS - Vila Vitória</b></h4>"+

        /*****************ENDEREÇO******************/
        "<div style='margin-top: 15px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width=16 height='16' fill='currentColor' class='bi bi-geo-alt' viewBox='0 0 16 16'>"+
                "<path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10'/>"+
                "<path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6'/>"+     
            "</svg>"+
            "<a style='margin-left: 15px;'>R. Jorge Hamessi - Vila Vitoria,</a><br><a style='margin-left: 31px;'> Mandaguari - PR, 86975-000</a>"+
        "</div>"+

        /*****************HORARIOS******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-clock' viewBox='0 0 16 16'>"+
                "<path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z'/>"+
                "<path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0'/>"+                  
            "</svg>"+
            "<a style='margin-left: 15px;'>Segunda a Sexta</a><br><a style='margin-left: 31px'>das 7:30 as 17:00</a>"+
        "</div>"+

        /*****************TELEFONE******************/
        "<div style='padding-top: 10px;'>"+
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-telephone' viewBox='0 0 16 16'>"+
                "<path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z'/>"+
            "</svg>"+
            "<a style='margin-left: 15px;'>(44) 3233-5086</a>"+
        "</div>"
    );

/***************** FUNÇÕES GERAIS *****************/

function filtrarSugestoes() {
    const input = document.getElementById("pesquisa");
    const sugestoes = document.getElementById("sugestoes");
    const termo = input.value.toLowerCase();
  
    sugestoes.innerHTML = "";
  
    if (termo === "") {
      sugestoes.style.display = "none";
      return;
    }

    const filtradas = postos.filter(item => item.toLowerCase().includes(termo));

    if (filtradas.length === 0) {
      sugestoes.style.display = "none";
      return;
    }
    
    filtradas.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.onclick = () => {
        input.value = item;
        sugestoes.style.display = "none";
        };
        sugestoes.appendChild(li);
    });

  sugestoes.style.display = "block";
}

function pesquisar() {
    const termo = document.getElementById("pesquisa").value.trim().toLowerCase();
  
    if (postos.map(op => op.toLowerCase()).includes(termo)) {
      alert("Você pesquisou por: " + termo);
    } else {
      alert("Opção não encontrada.");
    }
}
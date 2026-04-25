// ==========================================
// 1. BASE DE DADOS DE USUÁRIOS
// ==========================================
const usuarios = {
    "luizaugusto": {
        senha: "bi61nv",
        pagina: "cliente-luizaugusto.html" // Verifique se o nome do arquivo é EXATAMENTE este
    },
    "marisasilva": {
        senha: "carro2026",
        pagina: "cliente-marisa.html"
    }
};

// ==========================================
// 2. LÓGICA DE LOGIN
// ==========================================
// O código só roda quando a página termina de carregar
window.onload = function() {
    const loginForm = document.getElementById('loginForm');
    
    // Log para te ajudar a debugar (aparece no F12 do navegador)
    console.log("Sistema de login carregado...");

    if (loginForm) {
        loginForm.addEventListener('submit', function(event){
            event.preventDefault();

            // Pegamos os valores e limpamos espaços vazios
            const userIn = document.getElementById('username').value.trim().toLowerCase();
            const passIn = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('errorMessage');

            console.log("Tentativa de login com:", userIn);

            if (usuarios[userIn] && usuarios[userIn].senha === passIn) {
                console.log("Sucesso! Redirecionando...");
                window.location.href = usuarios[userIn].pagina;
            } else {
                console.log("Erro: Usuário ou senha incorretos.");
                errorMsg.style.display = 'block';
                document.getElementById('password').value = '';
            }
        });
    }
};

    // ==========================================
    // 3. FUNCIONALIDADES DA ÁREA DO CLIENTE
    // ==========================================
function copiarIBAN() {
    // 1. Pega o texto do elemento pelo ID
    const iban = document.getElementById("ibanText").innerText;

    // 2. Tenta copiar para a área de transferência
    navigator.clipboard.writeText(iban).then(() => {
        // 3. Feedback visual (opcional, mas muito bom)
        const btn = document.querySelector(".btn-copy");
        const textoOriginal = btn.innerText;
        
        btn.innerText = "✅ Copiado!";
        btn.style.background = "#27ae60"; // Muda para verde

        // Volta ao normal depois de 2 segundos
        setTimeout(() => {
            btn.innerText = textoOriginal;
            btn.style.background = "#e74c3c"; // Volta ao vermelho da DOZE CAR
        }, 2000);
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
        alert("Não foi possível copiar o IBAN automaticamente.");
    });
}
const noticiasCompletas = {
    'dicas': `
        <div class="noticia-tag">Manutenção</div>
        <h2>10 Dicas para cuidar do seu carro</h2>
        <p>Manter um carro usado em boas condições é a melhor forma de evitar reparações dispendiosas e rentabilizar o seu investimento. Com atenção regular e boas práticas, o veículo pode durar muitos anos com fiabilidade.</p>
        
        <div class="lista-modal">
            <p><strong>1. Manutenções regulares:</strong> Respeita os intervalos recomendados pelo fabricante. Não negligencie as revisões após o fim da garantia.</p>
            <p><strong>2. Óleo e filtros:</strong> Troca o óleo regularmente e substitua os filtros anualmente. Um filtro entupido aumenta o consumo e o desgaste.</p>
            <p><strong>3. Sistema de arrefecimento:</strong> Verifica o nível do líquido semanalmente para evitar o sobreaquecimento e danos graves.</p>
            <p><strong>4. Travões:</strong> Inspeciona o sistema anualmente e fica atento a rangidos ou resposta lenta.</p>
            <p><strong>5. Pneus:</strong> Faz alinhamento anualmente e calibra a pressão a cada duas semanas para segurança e economia.</p>
            <p><strong>6. Amortecedores e Suspensão:</strong> Verifica a cada 20 mil km, especialmente se circula em estradas em mau estado.</p>
            <p><strong>7. Estilo de condução:</strong> Evita acelerações bruscas. Conduzir de forma suave prolonga a vida da embraiagem e travões.</p>
            <p><strong>8. Combustível de qualidade:</strong> Opta por combustíveis com aditivos para preservar o motor a longo prazo.</p>
            <p><strong>9. Limpeza interior e exterior:</strong> Lava a carroceria regularmente para evitar corrosão e preservar o valor de revenda.</p>
            <p><strong>10. Sinais de aviso:</strong> Nunca ignores luzes no painel; uma intervenção rápida evita custos elevados.</p>
        </div>

        <p class="modal-footer-text">Com um planeamento cuidado, o teu automóvel acompanhar-te-á durante muitos anos. <strong>Vê o nosso stock e descobre o teu próximo parceiro de estrada!</strong></p>
    `,
    'cambio': `
        <div class="noticia-tag">Mercado</div>
        <h2>Automático ou manual: o que compensa mais?</h2>
        <p>A escolha entre um automóvel usado com caixa automática ou manual continua a ser uma das principais dúvidas. Embora os manuais sejam comuns, a procura por automáticos cresce de forma consistente.</p>
        
        <div class="lista-modal">
            <p><strong>Conforto e procura:</strong> Destacam-se pelo maior conforto em contexto urbano, o que facilita a revenda futura.</p>
            <p><strong>Preço e manutenção:</strong> Os manuais apresentam preços mais baixos e manutenção reduzida, mas a diferença tem diminuído.</p>
            <p><strong>Consumo e eficiência:</strong> Em modelos antigos, a manual é mais económica; em modernos, os consumos são semelhantes.</p>
        </div>

        <div class="vazio-info-box" style="margin: 20px 0; padding: 15px; border: 1px solid #e74c3c; border-radius: 8px;">
            <h4 style="color: #e74c3c; margin-bottom: 10px;">Qual é a melhor opção?</h4>
            <p>• <strong>Automático:</strong> Para quem valoriza conforto em cidade.<br>• <strong>Manual:</strong> Para quem procura um preço mais acessível.</p>
        </div>

        <p class="modal-footer-text">No mercado atual, a caixa automática é uma escolha cada vez mais atrativa. <strong>Vê o nosso stock e encontra o modelo ideal!</strong></p>
    `,
    'mitos': `
        <div class="noticia-tag">Mitos</div>
        <h2>Mitos sobre carros usados: verdades e mentiras</h2>
        <p>O mercado de usados está rodeado de ideias feitas que podem influenciar negativamente a sua decisão. Vamos separar os factos:</p>
        
        <div class="lista-modal">
            <p>❌ <strong>“Carros usados são sempre problemáticos”</strong><br>A fiabilidade depende da manutenção e historial, não da idade. Um carro de 5 anos bem cuidado é mais confiável que um novo maltratado.</p>
            <p>❌ <strong>“Quilómetros altos significam mau negócio”</strong><br>200 mil km de autoestrada podem ser melhores para a mecânica do que 80 mil km em trajetos urbanos curtos a frio.</p>
            <p>❌ <strong>“É impossível saber o verdadeiro estado”</strong><br>Históricos de inspeção e relatórios pelo número de chassis permitem total transparência hoje em dia.</p>
            <p>❌ <strong>“Stands são mais caros que particulares”</strong><br>O stand oferece garantia legal, financiamento e inspeção prévia, o que compensa o risco de um negócio particular.</p>
        </div>

        <p class="modal-footer-text">A compra informada é a melhor estratégia. <strong>Desmontar estes mitos ajuda a tomar decisões racionais. Escolha com a DOZE CAR!</strong></p>
    `
};

function abrirNoticia(id) {
    const modal = document.getElementById('modalNoticia');
    const container = document.getElementById('conteudoNoticia');
    container.innerHTML = noticiasCompletas[id];
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function fecharNoticia() {
    const modal = document.getElementById('modalNoticia');
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}

window.onclick = function(event) {
    const modal = document.getElementById('modalNoticia');
    if (event.target == modal) { fecharNoticia(); }
}
// ==========================================
// 1. BASE DE DADOS DE USUÁRIOS
// ==========================================
const usuarios = {
    "luizaugusto": {
        senha: "bi61nv",
        pagina: "cliente-luizaugusto.html"
    },
    "marisasilva": {
        senha: "carro2026",
        pagina: "cliente-marisa.html"
    }
};

// ==========================================
// 2. LÓGICA DE LOGIN (window.onload)
// ==========================================
window.onload = function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const userIn = document.getElementById('username').value.trim().toLowerCase();
            const passIn = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('errorMessage');

            if (usuarios[userIn] && usuarios[userIn].senha === passIn) {
                window.location.href = usuarios[userIn].pagina;
            } else {
                errorMsg.style.display = 'block';
                document.getElementById('password').value = '';
            }
        });
    }
}; // <--- AQUI FECHA O WINDOW.ONLOAD CORRETAMENTE

// ==========================================
// 3. FUNCIONALIDADES GERAIS (FORA DO ONLOAD)
// ==========================================

// --- FUNÇÃO COPIAR IBAN ---
function copiarIBAN() {
    const iban = document.getElementById("ibanText").innerText;

    navigator.clipboard.writeText(iban).then(() => {
        const btn = document.querySelector(".btn-copy");
        const textoOriginal = btn.innerText;
        
        btn.innerText = "✅ Copiado!";
        btn.style.background = "#27ae60";

        setTimeout(() => {
            btn.innerText = textoOriginal;
            btn.style.background = "#e74c3c";
        }, 2000);
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    });
}

// --- BANCO DE NOTÍCIAS ---
const noticiasCompletas = {
    'dicas': `
        <div class="noticia-tag">Manutenção</div>
        <h2>10 Dicas para cuidar do seu carro</h2>
        <p>Manter um carro usado em boas condições é a melhor forma de evitar reparações dispendiosas...</p>
        <div class="lista-modal">
            <p><strong>1. Manutenções regulares:</strong> Respeita os intervalos recomendados...</p>
            <p><strong>2. Óleo e filtros:</strong> Troca regularmente...</p>
            <p><strong>3. Sistema de arrefecimento:</strong> Verifica semanalmente...</p>
            <p><strong>4. Travões:</strong> Inspeciona anualmente...</p>
            <p><strong>5. Pneus:</strong> Calibra a cada duas semanas...</p>
            <p><strong>6. Amortecedores:</strong> Verifica a cada 20 mil km...</p>
            <p><strong>7. Estilo de condução:</strong> Evita acelerações bruscas...</p>
            <p><strong>8. Combustível:</strong> Opta por aditivados...</p>
            <p><strong>9. Limpeza:</strong> Lava regularmente...</p>
            <p><strong>10. Sinais de aviso:</strong> Nunca ignores luzes no painel.</p>
        </div>
        <p class="modal-footer-text"><strong>Vê o nosso stock e descobre o teu próximo parceiro de estrada!</strong></p>
    `,
    'cambio': `
        <div class="noticia-tag">Mercado</div>
        <h2>Automático ou manual: o que compensa mais?</h2>
        <p>A escolha entre um automóvel usado com caixa automática ou manual...</p>
        <div class="lista-modal">
            <p><strong>Conforto:</strong> Melhor para cidade.</p>
            <p><strong>Manutenção:</strong> Manual costuma ser mais barata.</p>
        </div>
        <p class="modal-footer-text"><strong>Vê o nosso stock!</strong></p>
    `,
    'mitos': `
        <div class="noticia-tag">Mitos</div>
        <h2>Mitos sobre carros usados: verdades e mentiras</h2>
        <div class="lista-modal">
            <p>❌ <strong>“Carros usados são sempre problemáticos”</strong>: Mentira.</p>
            <p>❌ <strong>“Quilómetros altos significam mau negócio”</strong>: Nem sempre.</p>
        </div>
        <p class="modal-footer-text"><strong>Escolha com a DOZE CAR!</strong></p>
    `
};

// --- FUNÇÕES DO MODAL ---
function abrirNoticia(id) {
    const modal = document.getElementById('modalNoticia');
    const container = document.getElementById('conteudoNoticia');
    if (modal && container) {
        container.innerHTML = noticiasCompletas[id];
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; 
    }
}

function fecharNoticia() {
    const modal = document.getElementById('modalNoticia');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
}

// Fechar ao clicar fora do modal
window.onclick = function(event) {
    const modal = document.getElementById('modalNoticia');
    if (event.target == modal) { 
        fecharNoticia(); 
    }
}
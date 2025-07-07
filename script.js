// JavaScript - Função para mostrar mensagem
function mostrarMensagem() {
    const mensagemDiv = document.getElementById('mensagem');
    const mensagens = [
        "Acredite em si mesmo - você é capaz de conquistar qualquer objetivo!",
        "A tecnologia é uma ferramenta poderosa para transformar o mundo!",
        "Cada linha de código é um passo em direção ao futuro!",
        "Persistência e dedicação são as chaves para o sucesso!",
        "Kauane e André, noivo e papai ama vocês",
    ];
    
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    mensagemDiv.innerHTML = mensagemAleatoria;
    mensagemDiv.style.display = 'block';
    
    // Efeito de fade in
    mensagemDiv.style.opacity = '0';
    setTimeout(() => {
        mensagemDiv.style.transition = 'opacity 0.5s ease';
        mensagemDiv.style.opacity = '1';
    }, 10);
}
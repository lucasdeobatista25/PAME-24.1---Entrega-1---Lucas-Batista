
const readline = require('readline');
const { Readline } = require('readline/promises');
// Criação das classes
//  classe pedido
class Pedido{
    constructor(id_pedido, id_cliente, status, data){
        this.id_pedido = id_pedido;
        this.id_cliente = id_cliente;
        this.status = status;
        this.data = data;
    }
};
//  classe funcionário
class Funcionario{
    constructor(id_funcionario, nickname, cpf_func, email, senha){
        this.id_funcionario = id_funcionario;
        this.nickname = nickname;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    };
}
//  classe cliente
class Cliente{
    constructor(id_cliente, nome, data_nasc, cpf_cliente, email, senha){
        this.id_cliente = id_cliente;
        this.nome = nome;
        this.data_nasc = data_nasc;
        this.cpf_cliente = cpf_cliente;
        this.email = email;
        this.senha = senha;
        this.pedidos = [];
    }
    verMeusDados(id_cliente,nome,data_nasc,cpf, email){
    }
    modificarMeusDados({ nome, data_nasc, cpf, email, senha }) {
        if (nome) this.nome = nome;
        if (data_nasc) this.data_nasc = data_nasc;
        if (cpf) this.cpf = cpf;
        if (email) this.email = email;
        if (senha) this.senha = senha;this.id_cliente,this.nome,this.data_nasc};
    }


//  classe produtos
class Produtos{
    constructor(validade, preço, quantidade_em_estoque, nome_produto, descricao){
        this.validade = validade;
        this.preço = preço;
        this.quantidade_em_estoque = quantidade_em_estoque;
        this.nome_produto = nome_produto;
        this.descricao = descricao;
        this.avaliacao = null;
}
    avaliarPedido(avaliacao){
        this.avaliacao = avaliacao
    }
};
//  classe sistema
class Sistema{
    constructor(){
        this.Cliente = [];
        this.Funcionario = [];
        this.Pedido = [];
        this.cliente_logado = null;
        this.funcionario_logado = null;
    }
    // Fazer login
    fazerLogin(email, senha, tipo = 'cliente') {
        if (tipo === 'cliente') {
            for (let cliente of this.clientes) {
                if (cliente.email === email && cliente.senha === senha) {
                    this.clienteLogado = cliente;
                    return true;
                }
            }
        } else if (tipo === 'funcionario') {
            for (let funcionario of this.funcionarios) {
                if (funcionario.email === email && funcionario.senha === senha) {
                    this.funcionarioLogado = funcionario;
                    return true;
                }
            }
        }
        return false;
    }
    sairDoPrograma() {
        this.clienteLogado = null;
        this.funcionarioLogado = null;
    }
    //Listar Produtos

    verListaDeProdutos(){
        return this.produtos
        
    };
    // Listar pedidos
    verListaDePedidos(){
        return this.pedidoz
    };
    //Mudar Status do Pedido
    mudarStatus(id_pedido,status){
       const pedido = this.pedidos.find(p => p.id === pedidoId);
       if (pedido) {
           pedido.status = status;
           return true;
        }
    
        return false;
    } 
    adicionarProduto(nome, descricao, dataValidade, preco, quantidadeEstoque) {
        const id = this.produtos.length + 1;
        const novoProduto = new Produto(id, nome, descricao, dataValidade, preco, quantidadeEstoque);
        this.produtos.push(novoProduto);
    }

    editarProduto(produtoId, { nome, descricao, dataValidade, preco, quantidadeEstoque }) {
        const produto = this.produtos.find(p => p.id === produtoId);
        if (produto) {
            if (nome) produto.nome = nome;
            if (descricao) produto.descricao = descricao;
            if (dataValidade) produto.dataValidade = dataValidade;
            if (preco) produto.preco = preco;
            if (quantidadeEstoque) produto.quantidadeEstoque = quantidadeEstoque;
            return true;
        }
        return false;
    }

    excluirProduto(produtoId) {
        this.produtos = this.produtos.filter(p => p.id !== produtoId);
    }

    fazerPedido(cliente, produtos) {
        const id = this.pedidos.length + 1;
        const novoPedido = new Pedido(id, cliente, produtos);
        this.pedidos.push(novoPedido);
        cliente.pedidos.push(novoPedido);
    }

    cancelarPedido(pedidoId) {
        const pedido = this.pedidos.find(p => p.id === pedidoId);
        if (pedido) {
            pedido.status = 'cancelado';
            return true;
        }
        return false;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sistema = new Sistema();

function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function main() {
    console.log("Bem-vindo ao sistema!");
    let continuar = true;

    while (continuar) {
        console.log("\n1. Fazer Login\n2. Fazer Cadastro\n3. Sair do Programa");
        const escolha = await perguntar("Escolha uma opção: ");

        switch (escolha) {
            case '1':
                const email = await perguntar("Email: ");
                const senha = await perguntar("Senha: ");
                const tipo = await perguntar("Tipo (cliente/funcionario): ");

                if (sistema.fazerLogin(email, senha, tipo)) {
                    console.log("Login realizado com sucesso!");

                    if (tipo === 'cliente') {
                        while (sistema.clienteLogado) {
                            console.log("\n1. Ver meus Dados\n2. Modificar Meus Dados\n3. Ver Lista de Produtos (Ordem Alfabética)\n4. Fazer pedido\n5. Cancelar pedido\n6. Ver meus pedidos (Ordem Cronológica)\n7. Avaliar pedido\n8. Visualizar avaliações\n9. Logout");
                            const escolhaCliente = await perguntar("Escolha uma opção: ");
                            const cliente = sistema.clienteLogado;

                            switch (escolhaCliente) {
                                case '1':
                                    console.log(cliente.verMeusDados());
                                    break;
                                case '2':
                                    const novosDados = {};
                                    novosDados.nome = await perguntar("Novo Nome: ");
                                    novosDados.dataNascimento = await perguntar("Nova Data de Nascimento: ");
                                    novosDados.cpf = await perguntar("Novo CPF: ");
                                    novosDados.email = await perguntar("Novo Email: ");
                                    novosDados.senha = await perguntar("Nova Senha: ");
                                    cliente.modificarMeusDados(novosDados);
                                    break;
                                case '3':
                                    console.log(sistema.verListaProdutos());
                                    break;
                                case '4':
                                    const produtoId = await perguntar("ID do Produto: ");
                                    const produto = sistema.produtos.find(p => p.id == produtoId);
                                    if (produto) {
                                        sistema.fazerPedido(cliente, [produto]);
                                        console.log("Pedido realizado com sucesso!");
                                    } else {
                                        console.log("Produto não encontrado.");
                                    }
                                    break;
                                case '5':
                                    const pedidoId = await perguntar("ID do Pedido: ");
                                    if (sistema.cancelarPedido(pedidoId)) {
                                        console.log("Pedido cancelado com sucesso!");
                                    } else {
                                        console.log("Pedido não encontrado.");
                                    }
                                    break;
                                case '6':
                                    console.log(cliente.pedidos.sort((a, b) => a.data - b.data));
                                    break;
                                case '7':
                                    const pedidoIdAvaliar = await perguntar("ID do Pedido: ");
                                    const avaliacao = await perguntar("Avaliação: ");
                                    const pedidoAvaliar = cliente.pedidos.find(p => p.id == pedidoIdAvaliar);
                                    if (pedidoAvaliar) {
                                        pedidoAvaliar.avaliarPedido(avaliacao);
                                        console.log("Pedido avaliado com sucesso!");
                                    } else {
                                        console.log("Pedido não encontrado.");
                                    }
                                    break;
                                case '8':
                                    cliente.pedidos.forEach(p => console.log(`Pedido ID: ${p.id}, Avaliação: ${p.avaliacao}`));
                                    break;
                                case '9':
                                    sistema.sairDoPrograma();
                                    break;
                                default:
                                    console.log("Opção Inválida");
                            }}}}}}}



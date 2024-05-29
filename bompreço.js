

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
    constructor(this){
        this.Cliente = [];
        this.Funcionario = [];
        this.Pedido = [];
        this.cliente_logado = null;
        this.funcionario_logado = null;
    }
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

}

    



//Mostrar na tela
while(true){
    exibir
}
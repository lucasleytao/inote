import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth */}
        <Route path="/" element={<h1>Login</h1>} />
        <Route path="/recuperar-senha" element={<h1>Recuperar Senha</h1>} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />

        {/* Clientes */}
        <Route path="/clientes" element={<h1>Clientes</h1>} />
        <Route path="/clientes/novo" element={<h1>Novo Cliente</h1>} />
        <Route path="/clientes/:id" element={<h1>Perfil do Cliente</h1>} />
        <Route path="/clientes/:id/editar" element={<h1>Editar Cliente</h1>} />

        {/* Vendas */}
        <Route path="/vendas" element={<h1>Vendas</h1>} />
        <Route path="/vendas/nova" element={<h1>Nova Venda</h1>} />
        <Route path="/vendas/:id" element={<h1>Detalhe da Venda</h1>} />

        {/* Produtos */}
        <Route path="/produtos" element={<h1>Produtos</h1>} />
        <Route path="/produtos/novo" element={<h1>Novo Produto</h1>} />

        {/* Pagamentos */}
        <Route path="/pagamentos" element={<h1>Pagamentos</h1>} />
        <Route path="/pagamentos/registrar" element={<h1>Registrar Pagamento</h1>} />
        <Route path="/pagamentos/historico" element={<h1>Histórico</h1>} />
        <Route path="/pagamentos/dividas" element={<h1>Dívidas</h1>} />

        {/* Relatórios */}
        <Route path="/relatorios/vendas" element={<h1>Vendas por Período</h1>} />
        <Route path="/relatorios/inadimplentes" element={<h1>Inadimplentes</h1>} />

        {/* Configurações */}
        <Route path="/configuracoes" element={<h1>Configurações</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

//BrowerRouter(gerente): ativa o sistema de rotas, tudo que estiver dentro dele consegue utilizar a navegacao por url
//Routes(container): agrupa todas as rotas, o react router olha para dentro dele e decide qual rota renderizar, baseado na url atual
//<Route path="/clientes" element={<h1>Clientes</h1>} />
//path: qual url ativa essa rota 
//element: o que renderiza quando a url bater
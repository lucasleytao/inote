import { BrowserRouter, Routes, Route } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Login</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/clientes" element={<h1>Clientes</h1>} />
        <Route path="/clientes/novo" element={<h1>Novo Cliente</h1>} />
        <Route path="/clientes/:id" element={<h1>Detalhe do Cliente</h1>} />
        <Route path="/clientes/:id/nova-venda" element={<h1>Nova Venda</h1>} />
        <Route path="/produtos" element={<h1>Produtos</h1>} />
        <Route path="/produtos/novo" element={<h1>Novo Produto</h1>} />
        <Route path="/notificacoes" element={<h1>Notificações</h1>} />
        <Route path="/perfil" element={<h1>Perfil</h1>} />
        <Route path="/configuracoes" element={<h1>Configurações</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
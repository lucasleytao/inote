
export default function App() {
  return (

    // card de venda

    <div class="container mt-5">
      <div class="card" style={{ width: '300px' }}>
        <div class="card-body">
          <img src="./public/perfil.png" alt="Foto do cliente" style={{ width: '64px', height: '64px', margin: '16px' }} />
          <h5>Lucas Leitão</h5>
          <p class="card-text">Valor total em aberto: R$56,00</p>
          <p class="card-text text-muted">Data da venda: 27/06/2026</p>
          <span class="badge bg-warning mb-3">Em aberto</span>
          <div class="d-flex gap-3">
            <button class="btn btn-secondary">Pagamento parcial</button>
            <button class="btn btn-success">Pagamento integral</button>
          </div>
        </div>
      </div>
    </div>

    // card de cliente

    // <div class="container mt-5">
    //   <div class="card" style={{width: '300px'}}>
    //     <div class="card-body">
    //       <img src="./public/perfil.png" alt="Foto do cliente" style={{width: '64px', heigth: '64px', margin: '16px'}} />
    //       <h5 class="card-title">Lucas Leitão</h5>
    //       <p class="card-text text-muted">(86)91234-5678</p>
    //       <span class="badge bg-danger">Vencido</span>
    //     </div>
    //   </div>      
    // </div>
  )
}

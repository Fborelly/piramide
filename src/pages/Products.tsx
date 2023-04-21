import BebidaEnergetica from '../assets/bebida-energetica-monster-green-lt473ml.jpg';
import Pastillas from '../assets/pastillas.jpg';
import Proteina from '../assets/proteina.jpg';

export const Products = () => {
  return (
    <div className="container-fluid cards">
      <div className="card" style={{ width: "18rem" }}>
        <img src={ BebidaEnergetica } className="card-img-top img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Bebidas energizantes</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, error!.
          </p>
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={ Proteina } className="card-img-top img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Batidos proteínicos</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, error!.
          </p>
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={ Pastillas } className="card-img-top img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pastillas dietéticas</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, error!.
          </p>
          <a href="#" className="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

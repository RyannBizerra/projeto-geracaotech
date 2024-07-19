import React from "react";
import "primeflex/primeflex.css";

export const Produtos = ({
  image,
  nome,
  descricao,
  precoaAntigo,
  Novopreco,
  promocional,
}) => (
  <div className="pagina-principal">
    <div className="card-produto">
      <div className="card-img">
        {promocional && <p className="card-desconto">{promocional}</p>}
        <img className="imagem" src={image} alt={nome} />
      </div>
      <div className="descricoes">
        <h2 className="nomes">{nome}</h2>
        <p className="descricao">{descricao}</p>
        <div className="precos">
          <p className="antigopreco">{precoaAntigo}</p>
          <p className="preco">{Novopreco}</p>
        </div>
      </div>
    </div>
  </div>
);

const produtos = [
  {
    nome: "Tênis",
    descricao: "K-Swiss V8 - Masculino",
    image:
      "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqgVDnaNGDTzc3x~q423Vh~gxdoFgm12ffRUO0bMOufyNvDEU13oXwQlfHDgnjByBEgRiL3v2TTOh09MdO4R6O3E~qiMdq76KqF8wRSYF9n5OAUeBQj3oRo1FPM1oE6N7wPUFM2F~POR~0Vvfa~wmmZvTArEVgVCFdezJV~D-i~w1VlmU2GqlFFmqcPbD4L0ob59hn7UOvBmqNg-PXieksqkhQo9rpMuwLbl4h09rzI6ikCIgf68y2OmVmCFJAye-EIjYmGWRBpOjCcCa7DZdHHuVqW8F90EAt~5CiwT1PZo~yvwbOOmrnlcjU10sAoUgcBs-pFUXaViQAbzIDUdFw",
    precoaAntigo: "$200",
    Novopreco: "$100",
    promocional: "30% OFF",
  },
  {
    nome: "Tenis",
    descricao: "K-Swiss V8 - Masculino",
    image:
      "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqgVDnaNGDTzc3x~q423Vh~gxdoFgm12ffRUO0bMOufyNvDEU13oXwQlfHDgnjByBEgRiL3v2TTOh09MdO4R6O3E~qiMdq76KqF8wRSYF9n5OAUeBQj3oRo1FPM1oE6N7wPUFM2F~POR~0Vvfa~wmmZvTArEVgVCFdezJV~D-i~w1VlmU2GqlFFmqcPbD4L0ob59hn7UOvBmqNg-PXieksqkhQo9rpMuwLbl4h09rzI6ikCIgf68y2OmVmCFJAye-EIjYmGWRBpOjCcCa7DZdHHuVqW8F90EAt~5CiwT1PZo~yvwbOOmrnlcjU10sAoUgcBs-pFUXaViQAbzIDUdFw",
    precoaAntigo: "$50",
    Novopreco: "$35",
    promocional: "30% OFF", // No discount
  },
  {
    nome: "Tenis",
    descricao: "K-Swiss V8 - Masculino",
    image:
      "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqgVDnaNGDTzc3x~q423Vh~gxdoFgm12ffRUO0bMOufyNvDEU13oXwQlfHDgnjByBEgRiL3v2TTOh09MdO4R6O3E~qiMdq76KqF8wRSYF9n5OAUeBQj3oRo1FPM1oE6N7wPUFM2F~POR~0Vvfa~wmmZvTArEVgVCFdezJV~D-i~w1VlmU2GqlFFmqcPbD4L0ob59hn7UOvBmqNg-PXieksqkhQo9rpMuwLbl4h09rzI6ikCIgf68y2OmVmCFJAye-EIjYmGWRBpOjCcCa7DZdHHuVqW8F90EAt~5CiwT1PZo~yvwbOOmrnlcjU10sAoUgcBs-pFUXaViQAbzIDUdFw",
    precoaAntigo: "$50",
    Novopreco: "$35",
    promocional: "30% OFF",
  },
  {
    nome: "Tenis",
    descricao: "K-Swiss V8 - Masculino",
    image:
      "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqgVDnaNGDTzc3x~q423Vh~gxdoFgm12ffRUO0bMOufyNvDEU13oXwQlfHDgnjByBEgRiL3v2TTOh09MdO4R6O3E~qiMdq76KqF8wRSYF9n5OAUeBQj3oRo1FPM1oE6N7wPUFM2F~POR~0Vvfa~wmmZvTArEVgVCFdezJV~D-i~w1VlmU2GqlFFmqcPbD4L0ob59hn7UOvBmqNg-PXieksqkhQo9rpMuwLbl4h09rzI6ikCIgf68y2OmVmCFJAye-EIjYmGWRBpOjCcCa7DZdHHuVqW8F90EAt~5CiwT1PZo~yvwbOOmrnlcjU10sAoUgcBs-pFUXaViQAbzIDUdFw",
    precoaAntigo: "$50",
    Novopreco: "$35",
    promocional: "",
  },
  {
    nome: "Tenis",
    descricao: "K-Swiss V8 - Masculino",
    image:
      "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqgVDnaNGDTzc3x~q423Vh~gxdoFgm12ffRUO0bMOufyNvDEU13oXwQlfHDgnjByBEgRiL3v2TTOh09MdO4R6O3E~qiMdq76KqF8wRSYF9n5OAUeBQj3oRo1FPM1oE6N7wPUFM2F~POR~0Vvfa~wmmZvTArEVgVCFdezJV~D-i~w1VlmU2GqlFFmqcPbD4L0ob59hn7UOvBmqNg-PXieksqkhQo9rpMuwLbl4h09rzI6ikCIgf68y2OmVmCFJAye-EIjYmGWRBpOjCcCa7DZdHHuVqW8F90EAt~5CiwT1PZo~yvwbOOmrnlcjU10sAoUgcBs-pFUXaViQAbzIDUdFw",
    precoaAntigo: "$50",
    Novopreco: "$35",
    promocional: "",
  },
  {
    nome: "Tenis",
    descricao: "K-Swiss V8 - Masculino",
    image:
      "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqgVDnaNGDTzc3x~q423Vh~gxdoFgm12ffRUO0bMOufyNvDEU13oXwQlfHDgnjByBEgRiL3v2TTOh09MdO4R6O3E~qiMdq76KqF8wRSYF9n5OAUeBQj3oRo1FPM1oE6N7wPUFM2F~POR~0Vvfa~wmmZvTArEVgVCFdezJV~D-i~w1VlmU2GqlFFmqcPbD4L0ob59hn7UOvBmqNg-PXieksqkhQo9rpMuwLbl4h09rzI6ikCIgf68y2OmVmCFJAye-EIjYmGWRBpOjCcCa7DZdHHuVqW8F90EAt~5CiwT1PZo~yvwbOOmrnlcjU10sAoUgcBs-pFUXaViQAbzIDUdFw",
    precoaAntigo: "$50",
    Novopreco: "$35",
    promocional: "",
  },
  {
    nome: "Tenis",
    descricao: "K-Swiss V8 - Masculino",
    image:
      "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqgVDnaNGDTzc3x~q423Vh~gxdoFgm12ffRUO0bMOufyNvDEU13oXwQlfHDgnjByBEgRiL3v2TTOh09MdO4R6O3E~qiMdq76KqF8wRSYF9n5OAUeBQj3oRo1FPM1oE6N7wPUFM2F~POR~0Vvfa~wmmZvTArEVgVCFdezJV~D-i~w1VlmU2GqlFFmqcPbD4L0ob59hn7UOvBmqNg-PXieksqkhQo9rpMuwLbl4h09rzI6ikCIgf68y2OmVmCFJAye-EIjYmGWRBpOjCcCa7DZdHHuVqW8F90EAt~5CiwT1PZo~yvwbOOmrnlcjU10sAoUgcBs-pFUXaViQAbzIDUdFw",
    precoaAntigo: "$50",
    Novopreco: "$35",
    promocional: "",
  },
  {
    nome: "Tenis",
    descricao: "K-Swiss V8 - Masculino",
    image:
      "https://s3-alpha-sig.figma.com/img/0e81/b622/335c3c97f56f40b95666e6039be52a9d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pqgVDnaNGDTzc3x~q423Vh~gxdoFgm12ffRUO0bMOufyNvDEU13oXwQlfHDgnjByBEgRiL3v2TTOh09MdO4R6O3E~qiMdq76KqF8wRSYF9n5OAUeBQj3oRo1FPM1oE6N7wPUFM2F~POR~0Vvfa~wmmZvTArEVgVCFdezJV~D-i~w1VlmU2GqlFFmqcPbD4L0ob59hn7UOvBmqNg-PXieksqkhQo9rpMuwLbl4h09rzI6ikCIgf68y2OmVmCFJAye-EIjYmGWRBpOjCcCa7DZdHHuVqW8F90EAt~5CiwT1PZo~yvwbOOmrnlcjU10sAoUgcBs-pFUXaViQAbzIDUdFw",
    precoaAntigo: "$50",
    Novopreco: "$35",
    promocional: "",
  },
];

const Produtoss = () => (
  <div className="Lista-produtos">
    {produtos.map((produto, index) => (
      <Produtos
        key={index}
        image={produto.image}
        nome={produto.nome}
        descricao={produto.descricao}
        precoaAntigo={produto.precoaAntigo}
        Novopreco={produto.Novopreco}
        promocional={produto.promocional}
      />
    ))}
  </div>
);

export default Produtoss;

// Essa Rota vai ser Acessada com o Parâmetro DINÂMICO, exemplos:
// /search-car/volvo
// /search-car/mustang
// /search-car/palio

interface ISearchCarProps {
  params: {
    car: string;
  };
}

export default function SearchCar({ params }: ISearchCarProps) {
  const { car } = params;

  return <h2>Carro procurado: {car}</h2>;
}

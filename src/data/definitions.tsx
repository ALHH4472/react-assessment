export type itinerarie = {
    id: string;
    legs: string[];
    price: Number;
    agent: string;
    agent_rating: number;
  };

  export type leg = {
    id: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    arrival_time: number;
    stops: number;
    airline_name: string;
    airline_id: string;
    duration_mins: number;
  };
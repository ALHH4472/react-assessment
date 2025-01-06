'use client'

import { itinerarie,leg } from "./definitions";
import  apiResponse from '../data/api.json'

// Extract itineraries from json file
export function extractItineraries(apiData: any): itinerarie[] {
    return apiData.itineraries.map((it: any) => ({
        id: it.id,
        legs: it.legs,
        price: Number(it.price.slice(1)),
        agent: it.agent,
        agent_rating: it.agent_rating
    }));
}

// Extract legs from json file
export function extractLegs(apiData: any): leg[] {
    return apiData.legs.map((lg: any) => ({
        id: lg.id,
        departure_airport: lg.departure_airport,
        arrival_airport: lg.arrival_airport,
        departure_time: lg.departure_time,
        arrival_time: lg.arrival_time,
        stops: lg.stops,
        airline_name: lg.airline_name,
        airline_id: lg.airline_id,  
        duration_mins: lg.duration_mins
    }));
}

// search table results by company name
export function searchAgencyByName(query: string, apiResponse:itinerarie[]): itinerarie[] {
    return apiResponse.filter((it: itinerarie) =>
        it.agent.toLowerCase().includes(query.toLowerCase())
    );
}

export function getLegsByIt_id(itinerarieId: string): leg[] {

    //get all components
    const itineraries = extractItineraries(apiResponse)
    const legs = extractLegs(apiResponse)

    // search itinerarie by ID
    const itinerarieEncontrado = itineraries.find(itin => itin.id === itinerarieId);
  
    // if dont exist 
    if (!itinerarieEncontrado) {
      return [];
    }
  
    // Find the legs
    return legs.filter(leg => itinerarieEncontrado.legs.includes(leg.id));
  }

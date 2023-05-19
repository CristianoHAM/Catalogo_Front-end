import axios, {AxiosPromise} from "axios";
import { MotorcycleData } from "../interface/MotorcycleData";
import { useQuery } from "@tanstack/react-query";


const API_URL = 'http://localhost:8080';

const fecthData =async (): AxiosPromise<MotorcycleData[]> => {
    const response = axios.get(API_URL + '/motorcycles');
    return response;
}

export function useMotorcycleData(){
    const query = useQuery({
        queryFn: fecthData,
        queryKey: ['MotorcycleData'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }

}
import { Supervisor } from './Supervisor';
import { Operador } from './Operador';
import { DadosEnel } from './DadosEnel';

export interface estacao{
    id: number;
    tipo: string;
    nome: string;
    operadores: Operador[];
    supervisor: Supervisor;
    dadosenel: DadosEnel;
}
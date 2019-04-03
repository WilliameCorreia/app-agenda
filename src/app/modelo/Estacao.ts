import { Supervisor } from './Supervisor';
import { Operador } from './Operador';
import { DadosEnel } from './DadosEnel';

export class estacao{
    id: number;
    tipo: string;
    nome: string;
    operadores: Operador[];
    supervisor: Supervisor;
    dadosenel: DadosEnel;
}